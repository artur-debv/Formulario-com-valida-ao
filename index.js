const form = document.querySelector('form')
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const button = document.querySelector('#button')
const button1 = document.querySelector('.btn')


button.addEventListener('click', function (evento) {
    evento.preventDefault();
})

function valida_form() {
    if (document.querySelector('.required').value == "" ) {

     
        setError(0) 
        setError(1) 
        setError(2)
        setError(3)  

    }else{
       
    }








function setError(index) {
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block'
}

function removesetError(index) {
    campos[index].style.border = '2px solid green';
    spans[index].style.display = 'none';
}

function validaçao() {
    if (campos[0].value.length < 3) {
        setError(0);
    } else {
        removesetError(0)
    }
}

function emailvalidaçao() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    } else {
        removesetError(1)
    }
}

function senhavalidaçao() {
    if (campos[2].value.length < 8) {
        setError(2);
    } else {
        removesetError(2);
    }
}




button1.addEventListener('click', function (evento) {
    evento.preventDefault()
    function limparformulario () {
        campos[0].value = '';
        campos[0].style.border = 'none';
        spans[0].style.display = 'none'
        campos[1].value = '';
        campos[1].style.border = 'none';
        spans[1].style.display = 'none';
        campos[2].value = '';
        campos[2].style.border = 'none';
        spans[2].style.display = 'none';
        campos[3].style.border = 'none';
        campos[3].value = '';
        spans[3].style.display = 'none';
      }
      limparformulario ()
});





