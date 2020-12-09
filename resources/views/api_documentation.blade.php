<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Api Documentation2</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">

    <style>
        body {
            background-color: aliceblue;
        }

        .card {
            width: 75%;
            margin: 0 auto;
            min-height: 50vh;
            margin-bottom: 15px;
        }

        h1 {
            text-align: center;
        }

        .card {
            padding: 10px;
        }

        h5,
        p {
            display: inline;
        }

        .btn{
            width:100px;
        }

        .warning{
            color:red;
            margin-left:4px;
        }

        .layout-1{
            float:left;
            font-weight: bold;
            font-size: 16px;
            flex-basis: 50%;
            margin:20px;
            padding-left: 10%;
        }

        .layout{
            display:flex;
            flex-direction: row;
            box-sizing: border-box;
        }
        
    </style>

</head>

<body>
    <h1>Api Documentation</h1>
    <div class="card layout">
        <div class="layout-1">
            <h4>User</h4>
            <div class="form-group">
                <button class="btn btn-danger">POST</button>
                <h5 class="ml-2">Register</h5>
                <p><i>/api/user/register</i></p>
            </div>

            <div class="form-group">
                <button class="btn btn-danger">POST</button>
                <h5 class="ml-2">Login</h5>
                <p><i>/api/user/login</i></p>
            </div>

            <div class="form-group">
                <button class="btn btn-success">GET</button>
                <h5 class="ml-2">All User</h5>
                <p><i>/api/users</i></p>
            </div>

            <div class="form-group">
                <button class="btn btn-danger">POST</button>
                <h5 class="ml-2">Delete User By ID</h5>
                <p><i>/api/user/delete/id</i></p>
            </div>

            <div class="form-group">
                <button class="btn btn-success">GET</button>
                <h5 class="ml-2">Get User Status</h5>
                <p><i>/api/user</i></p>
                <p class="warning">Must Login</p>
            </div>

            <div class="form-group">
                <button class="btn btn-danger">POST</button>
                <h5 class="ml-2">Log Out User</h5>
                <p><i>/api/user/logout</i></p>
                <p class="warning">Must Login</p>
            </div>
        </div>

        <div class="layout-1">
            <h4>Menu</h4>
            <div class="form-group">
                <button class="btn btn-danger">GET</button>
                <h5 class="ml-2">All Menu</h5>
                <p><i>/api/menus</i></p>
            </div>

            <div class="form-group">
                <button class="btn btn-danger">POST</button>
                <h5 class="ml-2">Insert</h5>
                <p><i>/api/menu/insert</i></p>
            </div>

            <div class="form-group">
                <button class="btn btn-success">PUT</button>
                <h5 class="ml-2">Update Menu By ID</h5>
                <p><i>/api/menu/update/id</i></p>
            </div>

            <div class="form-group">
                <button class="btn btn-danger">POST</button>
                <h5 class="ml-2">Delete Menu By ID</h5>
                <p><i>/api/menu/delete/id</i></p>
            </div>
        </div>
    </div>

    <div class="card layout">
        <div class="layout-1">
            <h4>Cart</h4>
            <div class="form-group">
                <button class="btn btn-danger">POST</button>
                <h5 class="ml-2">Insert Menu To Cart</h5>
                <p><i>/api/cart/insert</i></p>
            </div>

            <div class="form-group">
                <button class="btn btn-success">GET</button>
                <h5 class="ml-2">Get Cart By Username</h5>
                <p><i>/api/cart/{username}</i></p>
            </div>

            
        </div>

        <div class="layout-1">
            <h4>Transaction</h4>
            <div class="form-group">
                <button class="btn btn-success">GET</button>
                <h5 class="ml-2">All Transaction + All Cart</h5>
                <p><i>/api/transaction</i></p>
            </div>

            <div class="form-group">
                <button class="btn btn-danger">POST</button>
                <h5 class="ml-2">Pay Transaction</h5>
                <p><i>/api/transaction/{username}</i></p>
            </div>
        </div>
    </div>
</body>

</html>