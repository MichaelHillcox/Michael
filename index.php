<?php
    require 'app/vendors/AltoRouter.php';

    $router = new AltoRouter();
    $router->setBasePath('');

    $router->map( 'GET', '/', function() {
        require __DIR__ . '/app/views/home.php';
    });

    $router->map( 'GET', '/me', function() {
        require __DIR__ . '/app/views/me.php';
    });

    $router->map( 'GET', '/work', function() {
        require __DIR__ . '/app/views/work.php';
    });

    $router->map( 'GET', '/contact', function() {
        require __DIR__ . '/app/views/contact.php';
    });

    $match = $router->match();
    if( $match && is_callable( $match['target'] ) ) {
    	call_user_func_array( $match['target'], $match['params'] );
    } else {
    	header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
    }
