    /*------Start Slider-------*/
    const nav = document.querySelector('nav')
    window.addEventListener('scroll', fixNav)

    function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
    }
    /*-------End Slider--------*/

    /*------Start Btn Wsp----------*/
    $(document).ready(function(){

        $('#whatsapp').on('mouseover', fnCambiaBtn);
        $('#wsp').on('mouseout', fnCambiaBtn2);

        function fnCambiaBtn(){
            console.log('entre a la funcion')
        $('#whatsapp').removeClass('visible').addClass('oculto');
        $('#wsp').removeClass('oculto').addClass('visible');
        }

        function fnCambiaBtn2(){
            console.log('entreeeee')
        $('#wsp').removeClass('visible').addClass('oculto');
        $('#whatsapp').removeClass('oculto').addClass('visible');
        }
    })
    /*----------End Btn Wsp---------*/
    