$(document).ready(function() {

    var exitBlock;

    $('.images').mouseover(function() {
        exitBlock = setInterval(blockUser(), 1000);
    });

    $('.images').mouseout(function() {
        clearInterval(exitBlock);
    });

    // Invoco le funzioni per cambiare slide
    $('.next').click(nextSlide);  // Al click richiamo la funzione per aggiornare l'immagine visualizzando la successiva
    $('.prev').click(prevSlide);  // Al click richiamo la funzione per aggiornare l'immagine visualizzando la successiva


    function blockUser() {
        alert("You are blocked!!!!!");
    }



    // Definisco le funzioni nextSlide
    function nextSlide() {
        if ( $('.images img.active').hasClass('last') ) {

            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.first').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var prossimaImg = $('.images img.active').next();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimaPallino = $('.slider-nav i.active').next();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    }

    // Definisco le funzioni prevSlide
    function prevSlide() {
        if ( $('.images img.active').hasClass('first') ) {

            $('.images img.active').removeClass('active');
            $('.images img.last').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.last').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var prossimaImg = $('.images img.active').prev();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimaPallino = $('.slider-nav i.active').prev();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    }



});
