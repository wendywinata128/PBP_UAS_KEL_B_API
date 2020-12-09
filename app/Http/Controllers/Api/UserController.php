<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\User;
use App\Transaction;
use Validator;


class UserController extends Controller
{
    public function verifyEmail(Request $request){
        $id = $request->id;
        $user = User::findOrFail($id);
        
        if($user->email_verified_at != NULL){
            return response([
                'message' => 'User Already Activated',
                'data' => []
            ],200);
        }

        $date = date("Y-m-d g:i:s");
        $user->email_verified_at = $date;
        $user->save();

        return response([
            'message' => 'User Verified Succeedd',
            'data' => $user
        ]);
    }

    public function getUser(){
        if(Auth::check()){
            return response([
                'data' => Auth::user()
            ],200);
        }
    }

    public function register(Request $request){
        $data = $request->all();

        $validate = Validator::make($data,[
            'name' => 'required',
            'username' => 'required',
            'email' => 'required',
            'password' => 'required',
            'address' => 'required',
        ]);

        if($validate->fails()){
            return response([
                'message' => $validate->errors()
            ]);
        }

        $data['password'] = bcrypt($request->password);
        $data['photo'] = 'avatar_default.png';

        $user = User::create($data);
        $transaction = Transaction::create([
            'customer_name' => $user['username']
        ]);
        $user->sendEmailVerificationNotification();

        return response([
            'message' => 'Register Succeed, Please Kindly Check your Email',
            'data' => $user,
            'transaction' => $transaction,
        ],200);
    }
    
    public function login(Request $request){
        $data = $request->all();

        $validate = Validator::make($data,[
            'username' => 'required',
            'password' => 'required'
        ]);

        if($validate->fails()){
            return response([
                'message' => $validate->errors()
            ],400);
        }

        Auth::attempt($data);

        if(!Auth::check()){
            return response([
                'message' => 'Login Gagal'
            ],401);
        }

        $user = Auth::user();

        if($user->email_verified_at == NULL){
            return response([
                'message' => 'You Must Verify Email First'
            ],402);
        }

        $token = $user->createToken('Authentication Token')->accessToken;

        return response([
            'message' => 'Authenticated',
            'data' => $user,
            'token' => $token
        ],200);
    }

    public function logout(Request $request){

        Auth::user()->token()->revoke();
            return response([
                'message' => 'Log Out Succeeded'
            ],200);
        
    }

    public function getAllUser(){
        $data = User::all();

        if(count($data) < 0 ){
            return response([
                'message' => 'User is Empty'
            ],400);
        }

        return response([
            'message' => 'Retrieve all user success',
            'data' => $data
        ]);
    }

    public function deleteUser(Request $request,$id){
        $user = User::find($id);

        if(is_null($user)){
            return response([
                'message' => 'User is not Found'
            ],400);
        }

        if($user->delete()){
            return response([
                'message' => 'Delete User Success',
                'data' => $user
            ],200);
        }

        return response([
            'message' => 'Delete User Failed',
            'data' => $user
        ],401);
    }

    public function editUser(Request $request , $id){
        $data = $request->all();

        $validate = Validator::make($data,[
            'name' => 'required',
            'email' => 'required',
            'address' => 'required', 
        ]);

        if($validate->fails())
            return response([
                'message' => $validate->errors()
            ]);

        $user = User::find($id);

        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->address = $data['address'];
        $photo = "Photo is Not Uploaded";

        if(isset($data['photo'])){
            $decoded = base64_decode($data['photo']);
            $fileName = Str::random(40).'.jpg';
            $path = public_path().'/img/'.$fileName;
            $photo = "No Photo Uploaded";

            if(file_put_contents($path,$decoded)){
                $photo = 'Photo is Uploaded';
                $user->photo = $fileName;
            }
        }

        if($user->save()){
            return response([
                'message' => 'Edit User Success',
                'photo' => $photo,
                'user' => $user
            ]);
        }

        return response([
            'message' => 'Edit User Failed',
        ],403);
    }
}
