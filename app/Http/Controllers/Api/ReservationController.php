<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Reservation;
use Validator;

class ReservationController extends Controller
{
    public function getAll()
    {
        $reservations = Reservation::all();

        if (count($reservations) < 1) {
            return response([
                'message' => 'Reservation is empty'
            ], 400);
        }

        return response([
            'message' => 'Retrieve Data Reservation Success',
            'data' => $reservations
        ],200);
    }

    public function insert(Request $request){
        $data = $request->all();

        $validate = Validator::make($data,[
            'name' => 'required',
            'date' => 'required',
            'time' => 'required',
            'guest' => 'required',
            'note' => 'required',
            'table' => 'required',
        ]);

        if($validate->fails()){
            return response([
                'message' => $validate->errors()
            ],400);
        }

        $reservation = Reservation::create($data);

        return response([
            'message' => 'Insert data Success',
            'data' => $reservation
        ],200);
    }

    public function delete(Request $request , $id){
        $reservation = Reservation::find($id);

        if(is_null($reservation)){
            return response([
                'message' => 'Reservation is not found'
            ],400);
        }

        if($reservation->delete()){
            return response([
                'message' => 'Delete Reservation Success',
                'data' => $reservation
            ],200);
        }

        return response([
            'message' => 'Delete Reservation Failed , please try again'
        ],401);
    }

    public function update(Request $request, $id){
        $reservation = Reservation::find($id);

        if(is_null($reservation)){
            return response([
                'message'=> 'Reservation is not found'
            ],400);
        }

        $reservationData = $request->all();

        $validate = Validator::make($reservationData,[
            'name' => 'required',
            'date' => 'required',
            'time' => 'required',
            'guest' => 'required',
            'note' => 'required',
            'table' => 'required',
        ]);

        if($validate->fails()){
            return response([
                'message' => $validate->errors()
            ],401);
        }

        $date = date("Y-m-d g:i:s");

        $reservation->username = $reservationData['name'];
        $reservation->date = $reservationData['date'];
        $reservation->time = $reservationData['time'];
        $reservation->guest = $reservationData['guest'];
        $reservation->note = $reservationData['note'];
        $reservation->table = $reservationData['table'];
        $reservation->updated_at = $date;
        

        if($reservation->save()){
            return response([
                'message' => 'Update Reservation Success',
                'data' => $reservation
            ]);
        }
    }

    public function acceptReservation(Request $request , $id){
        $reservation = Reservation::find($id);

        if(is_null($reservation)){
            return response([
                'id' => $id,
                'message' => 'Reservation is not Found',
                'data' => $reservation
            ]);
        }

        $reservation->status = 'Confirmed';
        $reservation->table = $request->table;

        if($reservation->save()){
            return response([
                'message' => 'Reservation is Confirmed',
                'data' => $reservation
            ]);
        }
    }

    public function declineReservation($id){
        $reservation = Reservation::find($id);

        if(is_null($reservation)){
            return response([
                'id' => $id,
                'message' => 'Reservation is not Found',
                'data' => $reservation
            ]);
        }

        $reservation->status = 'Declined';
        $reservation->table = 0;

        if($reservation->save()){
            return response([
                'message' => 'Reservation is Declined',
                'data' => $reservation
            ]);
        }
    }
}

