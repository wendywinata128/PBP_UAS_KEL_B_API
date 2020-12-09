<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Menu;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class MenuController extends Controller
{
    public function getAll()
    {
        $menus = Menu::all();

        if (count($menus) < 1) {
            return response([
                'message' => 'Menu is Empty'
            ], 400);
        }


        return response([
            'message' => 'Retrieve Data Menu Success',
            'data' => $menus
        ],200);
    }

    public function insert(Request $request){
        $data = $request->all();

        $validate = Validator::make($data,[
            'name' => 'required',
            'price' => 'required',
            'type' => 'required',
            'photo' => 'required'
        ]);

        if($validate->fails()){
            return response([
                'message' => $validate->errors()
            ],400);
        }
        

        $decoded = base64_decode($request->photo);
        $fileName = Str::random(40).'.'.'jpg';
        $path = public_path().'/img/'.$fileName;

        if(!file_put_contents($path,$decoded)){
            return response([
                'message' => 'Insert Data Failed'
            ],400);
        }

        $data['photo'] = $fileName;

        $menu = Menu::create($data);

        return response([
            'message' => 'Insert data Success',
            'data' => $menu
        ],200);
    }

    public function delete(Request $request , $id){
        $menu = Menu::find($id);

        if(is_null($menu)){
            return response([
                'message' => 'Menu is not found , is the id correct ?'
            ],400);
        }

        if($menu->delete()){
            File::delete(public_path().'/img/'.$menu->photo);
            return response([
                'message' => 'Delete Menu Success',
                'data' => $menu
            ],200);
            
        }

        return response([
            'message' => 'Delete Menu Failed , please try again'
        ],401);
    }

    public function update(Request $request, $id){
        \Log::info($request->all());

        $menu = Menu::find($id);

        if(is_null($menu)){
            return response([
                'message'=> 'Menu is not found , is the id correct ?'
            ],400);
        }

        $menuData = $request->all();

        $validate = Validator::make($menuData,[
            'name' => 'required',
            'price' => 'required',
            'type' => 'required',
        ]);

        if($validate->fails()){
            return response([
                'message' => $validate->errors()
            ],401);
        }

        $date = date("Y-m-d g:i:s");

        $menu->name = $menuData['name'];
        $menu->type = $menuData['type'];
        $menu->price = $menuData['price'];
        
        if(isset($menuData['photo']) && !is_null($menuData['photo'])){
            $decoded = base64_decode($menuData['photo']);
            $fileName = Str::random(40).'.jpg';
            $path = public_path().'/img/'.$fileName;
            $menu->photo = $fileName;
            file_put_contents($path,$decoded);
        }

        $menu->updated_at = $date;
        

        if($menu->save()){
            return response([
                'message' => 'Update Menu Success',
                'data' => $menu
            ]);
        }
    }
}
