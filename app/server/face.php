<?php

    $id = $_GET['id'];
    $rawData = file_get_contents('http://tictucuman.net/portal/articulos/api/722');
    $data =  json_decode($rawData);
    $pageUrl = "http://portal.tictucuman.net/server/face.php?id=".$id;
    $titulo = $data[0]->pg_title;
    $imagen = $data[0]->capa;
    $imagen = str_replace(" ","%20",$imagen);
    $des = strip_tags($data[0]->pg_des);
    
?>

 <!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <title><?php echo $data[0]->title; ?></title>

       
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@michlbrmly" />
        <meta property="twitter:title" content="<?php echo $titulo ?>" />
        <meta property="twitter:description" content="<?php echo $des; ?>" />
        <meta property="twitter:image" content="<?php echo $imagen; ?>" />
        <meta property="twitter:url" content="<?php echo $pageUrl; ?>" />

       
        <meta property="og:title" content="<?php echo $titulo; ?>" />
        <meta property="og:description" content="<?php echo $des; ?>" />
        <meta property="og:image" content="<?php echo $imagen; ?>" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="My Favourite Albums" />
        <meta property="og:url" content="<?php echo $pageUrl; ?>" />

    </head>
    <body>
    <p><?php echo $des; ?></p>
    <img src="<?php echo $imagen; ?>">
    </body>
    </html>
