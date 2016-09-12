var now = new Date();
var timeend = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6 - now.getDay());

today = new Date();
today = Math.floor((timeend-today)/1000);
tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
thour=today%24; today=Math.floor(today/24);
$(function(){
$('.c-block:eq(0) .bl-inner span').text(today);
$('.c-block:eq(1) .bl-inner span').text(thour);
$('.c-block:eq(2) .bl-inner span').text(tmin);
$('.c-block:eq(3) .bl-inner span').text(tsec);
});

$(document).ready(function() {

$("#form").submit(function(e) {
        e.preventDefault();
        var nameuser = $(".nameuser").val();
        var phoneuser = $(".phoneuser").val();
        var message = $(".area").val();

        var regexp = /^\d+$/;
         $('input[type="text"]').on('focus', function(){
		 $('.error-empty,.error-empty2,.error-empty3').css('display', 'none'); });

        if (nameuser.length == 0)
        {
            $('.error-empty').css('display','block');

        }

        if (!regexp.test(phoneuser))
        {
            $('.error-empty2').css('display','block');

        }

        if (message.length == 0)
        {
            $('.error-empty3').css('display','block');

        }


        if ((regexp.test(phoneuser))&&(!nameuser.length == 0)&&(!message.length == 0)){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                  $('.success').css('display','block');
            }
            })};
    });

$("#form1").submit(function(e) {
        e.preventDefault();
        var nameuser = $(".nameuser1").val();
        var phoneuser = $(".phoneuser1").val();
        var message = $(".area1").val();

        var regexp = /^\d+$/;

         $('input[type="text"]').on('focus', function(){
		 $('.error-empty,.error-empty2,.error-empty3').css('display', 'none'); });

        if (nameuser.length == 0)
        {
            $('.error-empty').css('display','block');

        }

        if (!regexp.test(phoneuser))
        {
            $('.error-empty2').css('display','block');

        }

        if (message.length == 0)
        {
            $('.error-empty3').css('display','block');

        }


        if ((regexp.test(phoneuser))&&(!nameuser.length == 0)&&(!message.length == 0)){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                  $('.success1').css('display','block');
            }
            })};
    });

$("#form2").submit(function(e) {
        e.preventDefault();
        var nameuser = $(".nameuser2").val();
        var phoneuser = $(".phoneuser2").val();
        var message = $(".area2").val();

        var regexp = /^\d+$/;
         $('input[type="text"]').on('focus', function(){
		 $('.error-empty,.error-empty2,.error-empty3').css('display', 'none'); });

        if (nameuser.length == 0)
        {
            $('.error-empty').css('display','block');

        }

        if (!regexp.test(phoneuser))
        {
            $('.error-empty2').css('display','block');

        }

        if (message.length == 0)
        {
            $('.error-empty3').css('display','block');

        }


        if ((regexp.test(phoneuser))&&(!nameuser.length == 0)&&(!message.length == 0)){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                  $('.success2').css('display','block');
            }
            })};
    });

$("#form3").submit(function(e) {
        e.preventDefault();
        var nameuser = $(".nameuser3").val();
        var phoneuser = $(".phoneuser3").val();
        var message = $(".area3").val();

        var regexp = /^\d+$/;
         $('input[type="text"]').on('focus', function(){
		 $('.error-empty,.error-empty2,.error-empty3').css('display', 'none'); });

        if (nameuser.length == 0)
        {
            $('.error-empty').css('display','block');

        }

        if (!regexp.test(phoneuser))
        {
            $('.error-empty2').css('display','block');

        }

        if (message.length == 0)
        {
            $('.error-empty3').css('display','block');

        }


        if ((regexp.test(phoneuser))&&(!nameuser.length == 0)&&(!message.length == 0)){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                  $('.success3').css('display','block');
            }
            })};
    });


$("#form4").submit(function(e) {
        e.preventDefault();
        var nameuser = $(".nameuser4").val();
        var phoneuser = $(".phoneuser4").val();
        var message = $(".area4").val();

        var regexp = /^\d+$/;
         $('input[type="text"]').on('focus', function(){
		 $('.error-empty,.error-empty2,.error-empty3').css('display', 'none'); });

        if (nameuser.length == 0)
        {
            $('.error-empty').css('display','block');

        }

        if (!regexp.test(phoneuser))
        {
            $('.error-empty2').css('display','block');

        }

        if (message.length == 0)
        {
            $('.error-empty3').css('display','block');

        }


        if ((regexp.test(phoneuser))&&(!nameuser.length == 0)&&(!message.length == 0)){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                  $('.success4').css('display','block');
            }
            })};
    });


$("#form5").submit(function(e) {
        e.preventDefault();
        var nameuser = $(".nameuser5").val();
        var phoneuser = $(".phoneuser5").val();
        var message = $(".area5").val();

        var regexp = /^\d+$/;
         $('input[type="text"]').on('focus', function(){
		 $('.error-empty,.error-empty2,.error-empty3').css('display', 'none'); });

        if (nameuser.length == 0)
        {
            $('.error-empty').css('display','block');

        }

        if (!regexp.test(phoneuser))
        {
            $('.error-empty2').css('display','block');

        }

        if (message.length == 0)
        {
            $('.error-empty3').css('display','block');

        }


        if ((regexp.test(phoneuser))&&(!nameuser.length == 0)&&(!message.length == 0)){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                  $('.success5').css('display','block');
            }
            })};
    });


$("#form6").submit(function(e) {
        e.preventDefault();
        var nameuser = $(".nameuser6").val();
        var phoneuser = $(".phoneuser6").val();
        var message = $(".area6").val();

        var regexp = /^\d+$/;
         $('input[type="text"]').on('focus', function(){
		 $('.error-empty,.error-empty2,.error-empty3').css('display', 'none'); });

        if (nameuser.length == 0)
        {
            $('.error-empty').css('display','block');

        }

        if (!regexp.test(phoneuser))
        {
            $('.error-empty2').css('display','block');

        }

        if (message.length == 0)
        {
            $('.error-empty3').css('display','block');

        }


        if ((regexp.test(phoneuser))&&(!nameuser.length == 0)&&(!message.length == 0)){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                  $('.success6').css('display','block');
            }
            })};
    });


$("#form7").submit(function(e) {
        e.preventDefault();
        var nameuser = $(".nameuser7").val();
        var phoneuser = $(".phoneuser7").val();
        var message = $(".area7").val();

        var regexp = /^\d+$/;
         $('input[type="text"]').on('focus', function(){
		 $('.error-empty,.error-empty2,.error-empty3').css('display', 'none'); });

        if (nameuser.length == 0)
        {
            $('.error-empty').css('display','block');

        }

        if (!regexp.test(phoneuser))
        {
            $('.error-empty2').css('display','block');

        }

        if (message.length == 0)
        {
            $('.error-empty3').css('display','block');

        }


        if ((regexp.test(phoneuser))&&(!nameuser.length == 0)&&(!message.length == 0)){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                  $('.success7').css('display','block');
            }
            })};
    });


$("#form8").submit(function(e) {
        e.preventDefault();
        var nameuser = $(".nameuser8").val();
        var phoneuser = $(".phoneuser8").val();
        var message = $(".area8").val();

        var regexp = /^\d+$/;
         $('input[type="text"]').on('focus', function(){
		 $('.error-empty,.error-empty2,.error-empty3').css('display', 'none'); });

        if (nameuser.length == 0)
        {
            $('.error-empty').css('display','block');

        }

        if (!regexp.test(phoneuser))
        {
            $('.error-empty2').css('display','block');

        }

        if (message.length == 0)
        {
            $('.error-empty3').css('display','block');

        }


        if ((regexp.test(phoneuser))&&(!nameuser.length == 0)&&(!message.length == 0)){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                  $('.success8').css('display','block');
            }
            })};
    });


$("#form9").submit(function(e) {
        e.preventDefault();
        var nameuser = $(".nameuser9").val();
        var phoneuser = $(".phoneuser9").val();
        var message = $(".area9").val();

        var regexp = /^\d+$/;
         $('input[type="text"]').on('focus', function(){
		 $('.error-empty,.error-empty2,.error-empty3').css('display', 'none'); });

        if (nameuser.length == 0)
        {
            $('.error-empty').css('display','block');

        }

        if (!regexp.test(phoneuser))
        {
            $('.error-empty2').css('display','block');

        }

        if (message.length == 0)
        {
            $('.error-empty3').css('display','block');

        }


        if ((regexp.test(phoneuser))&&(!nameuser.length == 0)&&(!message.length == 0)){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                  $('.success9').css('display','block');
            }
            })};
    });


$("#form10").submit(function(e) {
        e.preventDefault();
        var nameuser = $(".nameuser10").val();
        var phoneuser = $(".phoneuser10").val();
        var message = $(".area10").val();

        var regexp = /^\d+$/;
         $('input[type="text"]').on('focus', function(){
		 $('.error-empty,.error-empty2,.error-empty3').css('display', 'none'); });

        if (nameuser.length == 0)
        {
            $('.error-empty').css('display','block');

        }

        if (!regexp.test(phoneuser))
        {
            $('.error-empty2').css('display','block');

        }

        if (message.length == 0)
        {
            $('.error-empty3').css('display','block');

        }


        if ((regexp.test(phoneuser))&&(!nameuser.length == 0)&&(!message.length == 0)){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                  $('.success10').css('display','block');
            }
            })};
    });


$("#form11").submit(function(e) {
        e.preventDefault();
        var nameuser = $(".nameuser11").val();
        var phoneuser = $(".phoneuser11").val();
        var message = $(".area11").val();

        var regexp = /^\d+$/;
         $('input[type="text"]').on('focus', function(){
		 $('.error-empty,.error-empty2,.error-empty3').css('display', 'none'); });

        if (nameuser.length == 0)
        {
            $('.error-empty').css('display','block');

        }

        if (!regexp.test(phoneuser))
        {
            $('.error-empty2').css('display','block');

        }

        if (message.length == 0)
        {
            $('.error-empty3').css('display','block');

        }


        if ((regexp.test(phoneuser))&&(!nameuser.length == 0)&&(!message.length == 0)){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                  $('.success11').css('display','block');
            }
            })};
    });


$("#form12").submit(function(e) {
        e.preventDefault();
        var nameuser = $(".nameuser12").val();
        var phoneuser = $(".phoneuser12").val();
        var message = $(".area12").val();

        var regexp = /^\d+$/;
         $('input[type="text"]').on('focus', function(){
		 $('.error-empty,.error-empty2,.error-empty3').css('display', 'none'); });

        if (nameuser.length == 0)
        {
            $('.error-empty').css('display','block');

        }

        if (!regexp.test(phoneuser))
        {
            $('.error-empty2').css('display','block');

        }

        if (message.length == 0)
        {
            $('.error-empty3').css('display','block');

        }


        if ((regexp.test(phoneuser))&&(!nameuser.length == 0)&&(!message.length == 0)){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                  $('.success12').css('display','block');
            }
            })};
    });


$("#form13").submit(function(e) {
        e.preventDefault();
        var nameuser = $(".nameuser13").val();
        var phoneuser = $(".phoneuser13").val();
        var message = $(".area13").val();

        var regexp = /^\d+$/;
         $('input[type="text"]').on('focus', function(){
		 $('.error-empty,.error-empty2,.error-empty3').css('display', 'none'); });

        if (nameuser.length == 0)
        {
            $('.error-empty').css('display','block');

        }

        if (!regexp.test(phoneuser))
        {
            $('.error-empty2').css('display','block');

        }

        if (message.length == 0)
        {
            $('.error-empty3').css('display','block');

        }


        if ((regexp.test(phoneuser))&&(!nameuser.length == 0)&&(!message.length == 0)){
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                  $('.success13').css('display','block');
            }
            })};
    });

});
