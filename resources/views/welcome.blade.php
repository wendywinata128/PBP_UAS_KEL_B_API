<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Restoku Website</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

    <!-- Styles and Scripts Bootstrap -->
    <link rel="stylesheet" href="{{asset('css/app.css')}}">

</head>

<body>
    <div id="app">

    </div>
    
    <script src="{{asset('js/app.js')}}"></script>
</body>

</html>

<style>
    body{
        background:cornflowerblue;
        font-family: Nunito;
    }
</style>