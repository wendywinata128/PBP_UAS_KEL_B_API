<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Validator;
use App\Cart;
use App\Menu;
use App\Transaction;

class CartController extends Controller
{
    //'username','menu','amount','total','status'

    public function insert(Request $request)
    {
        $data = $request->all();

        $validate = Validator::make($data, [
            'username' => 'required',
            'menu_name' => 'required',
            'amount' => 'required',
            'status' => 'required',
        ]);

        if ($validate->fails()) {
            return response([
                'message' => $validate->errors()
            ], 400);
        }

        $checkCart = Cart::where([
            ['menu_name', $data['menu_name']],
            ['username', $data['username']],
            ['status', 'active']
        ])->get();

        if ($checkCart->count()) {
            return response([
                'message' => 'Menu Already Added'
            ], 400);
        }

        $nota_number = DB::table('transactions')->where([
            ['customer_name', '=', $data['username']],
            ['status', '=', 'not paid']
        ])->value('id');

        $price = DB::table('menus')->where('name', $data['menu_name'])->value('price');

        $data['nota_number'] = $nota_number;
        $data['total'] = $price;

        $cart = Cart::create($data);

        return response([
            'message' => 'Insert Cart Berhasil',
            'data' => $cart
        ], 200);
    }

    public function getCartsbyUsername($username)
    {
        $getQueryData = Cart::where([
            ['username', $username],
            ['status', 'active'],
        ]);
        $data = $getQueryData->get();
        $total = $getQueryData->sum('total');

        if ($data->count() == 0) {
            return response([
                'message' => 'Cart is Empty'
            ]);
        }

        $data->transform(function ($item) {
            $photo = Menu::where('name', $item['menu_name'])->select('photo', 'price')->get()->first();

            $item->photo = $photo->photo;
            $item->price = $photo->price;

            return $item;
        });



        return response([
            'message' => 'Cart Retrieved',
            'data' => $data,
            'total' => $total
        ]);
    }

    public function incrementItemCount($id)
    {
        $cartItem = Cart::find($id);

        $price = Menu::where('name', $cartItem->menu_name)->value('price');

        if (is_null($cartItem)) {
            return response([
                'message' => 'Item tidak ditemukan'
            ], 404);
        }

        $cartItem->amount = $cartItem->amount + 1;
        $cartItem->total = $cartItem->total + $price;

        if ($cartItem->save()) {
            return response([
                'message' => 'Item Increment Success'
            ]);
        }
    }

    public function decrementItemCount($id)
    {
        $cartItem = Cart::find($id);

        $price = Menu::where('name', $cartItem->menu_name)->value('price');

        if (is_null($cartItem)) {
            return response([
                'message' => 'Item tidak ditemukan'
            ], 404);
        }

        $cartItem->amount = $cartItem->amount - 1;
        $cartItem->total = $cartItem->total - $price;

        if ($cartItem->save()) {
            return response([
                'message' => 'Item Decrement Success'
            ]);
        }
    }

    public function deleteItem($id)
    {
        $cartItem = Cart::find($id);

        if (is_null($cartItem)) {
            return response([
                'message' => 'Item Not Found'
            ], 404);
        }

        if ($cartItem->delete()) {
            return response([
                'message' => 'Item Deleted Success'
            ]);
        }
    }
}
