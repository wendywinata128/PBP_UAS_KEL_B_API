<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Transaction;
use App\Cart;
use Carbon\Carbon;
use Validator;

class TransactionController extends Controller
{
    function getAllTransaction(Request $request){
        $data = Transaction::where('status','paid')->get();

        return response([
            'data' => $data
        ]);
    }

    function payTransaction(Request $request, $username){
        $transaction = Transaction::where([
            ['customer_name',$username],
            ['status','not paid']
        ])->get()->first();

        if(is_null($transaction)){
            return response([
                'message' => 'Transaction is Not Found'
            ]);
        }

        $cart = Cart::where([
            ['username',$username],
            ['status','active']
        ]);

        $transaction->method = $request['method'];
        $transaction->status = 'Paid';
        $transaction->updated_at = Carbon::now();
        $transaction->total_price = $cart->sum('total');

        if($transaction->save()){
            

            $newTransaction = Transaction::create([
                'customer_name' => $username
            ]);

            $cart->update(array('status' => 'paid'));

            return response([
                'message' => 'Transaction Paid Success',
                'transaction' => $transaction,
                'cart' => $cart->get(),
                'new transaction' => $newTransaction
            ]);
        }


    }
}
