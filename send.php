<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1682794481:AAHgqa6d99n3no0FSQjt68DPw9cDy3R49Qs";

//Сюда вставляем chat_id
$chat_id = "-552716801";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'Телефон:' => $phone
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        // alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
        // echo '<script>alert("Welcome to Geeks for Geeks")</script>';
        // header('Location: ' . $_SERVER["http://www.branzoleta.store"] );
        header("Location: http://www.branzoleta.store");
        exit; 
    }

//А здесь сообщение об ошибке при отправке
    else {
      echo '<script>alert("Что-то пошло не так. ПОпробуйте отправить форму ещё раз.")</script>';
    }
}

?>