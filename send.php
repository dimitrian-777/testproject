<?php

if(isset($_POST['phone'])&&$_POST['phone']!=""){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'shustro2003@ya.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Сайт'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Форма: '.$_POST['forma'].'</p>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Сообщение: '.$_POST['message'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя


        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}


?>
