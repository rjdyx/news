<!DOCTYPE html>
<html>
<head>
    <title>Be right back.</title>
    <meta http-equiv="Refresh" content="5; url={{url('')}}">
    <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

    <style>
        html, body {
            height: 100%;
        }

        body {
            margin: 0;
            padding: 0;
            width: 100%;
            color: #B0BEC5;
            display: table;
            font-weight: 100;
            font-family: 'Lato';
        }

        .container {
            text-align: center;
            display: table-cell;
            vertical-align: middle;
        }

        .content {
            text-align: center;
            display: inline-block;
        }

        .title {
            font-size: 72px;
            margin-bottom: 40px;
        }
        .title a{
            text-decoration: none;
        }
        .title a:hover{
            color:green;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="content">
        <div class="title">{{$prompt}}</div>
        <div class="title" ><a href="{{url('')}}" id="title">Return</a></div>
    </div>
</div>
</body>
</html>
<script type="text/javascript">

    var title = document.getElementById('title');
    var mp = 0;
    setInterval(function(){
        switch(mp){
            case 0:
                title.style.color = "red";
                break;
            case 1:
                title.style.color = "green";
                break;
            case 2:
                title.style.color = "yellow";
                break;
            case 3:
                title.style.color = "blue";
                break;
            case 4:
                title.style.color = "orange";
                break;
            case 5:
                title.style.color = "pink";
                break;
            case 6:
                title.style.color = "#aaa";
                break;
        }
        mp++;
        if (mp>6) {
            mp = 0;
        };
    },1000);

</script>