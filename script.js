function entrar(a){
    var botao = window.document.querySelector('div#' + (a));

    botao.style.background = '#7ee0eb'
    botao.style.boxShadow = '5px 3px 0px #2f464c'
}

function sair(a){

    var botao = window.document.querySelector(`div#${a}`);

    botao.style.background = '#f9e2b9'
    botao.style.boxShadow = '5px 3px 0px #664429'

}

function clicar(a){

    var botao = window.document.querySelector(`div#${a}`);

    botao.style.background = '#2f464c'
    botao.style.boxShadow = '0px 0px 0px'

    botao.style.paddingLeft = '10px';
    botao.style.paddingTop = '8px'
    


}

function soltar(a){

    var botao = window.document.querySelector(`div#${a}`);

    botao.style.background = '#7ee0eb'
    botao.style.boxShadow = '5px 3px 0px #2f464c'

    botao.style.margin = '10px';


}

function entrarb(){
    var botao = window.document.querySelector('div#botaob');

    botao.style.background = 'rgb(80, 80, 216)'
}

function sairb(){

    var botao = window.document.querySelector('div#botaob');

    botao.style.background = 'rgb(100, 100, 236)'

}

function clicarb(){

    var botao = window.document.querySelector('div#botaob');

    botao.style.background = 'rgb(64, 64, 200)'
    botao.style.boxShadow = '0px 0px 0px'

    botao.style.marginLeft = '2px';
    botao.style.marginTop = '12px';
    botao.style.marginBottom = '8px';
}

function soltarb(){

    var botao = window.document.querySelector('div#botaob');

    botao.style.background = 'rgb(80, 80, 216)'
    botao.style.boxShadow = '02px 02px 0px rgb(64, 64, 200)'

    botao.style.marginLeft = '0px';
    botao.style.marginTop = '10px';
    botao.style.marginBottom = '10px';

}

function carregar(){
    var ref = new Date();
    var msg = window.document.querySelector('div#msg');
    var image = window.document.querySelector('img#foto');
    var hora = ref.getHours();
    //var hora = 20;
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 5 && hora <= 12){

        image.src = 'Midia/fotodia.png'

    }else if(hora < 18 && hora > 12){

        image.src = 'Midia/fototarde.png'

    }else{

        image.src = 'Midia/fotonoite.png'

    }

}

let num = window.document.querySelector('input#num')
let res = window.document.querySelector('div#res')
let list = window.document.querySelector('select#opcao')
let arr = []

function naLista(n, l){

    for(c=0;c<l.length;c++){

        if(n == l[c]){
            return true;
        }
    }
    return false
}

function adicionar(){


    if(num.value.length != 0 && !naLista(Number(num.value), arr)){

    arr.push(Number(num.value))
    let op = window.document.createElement('option');
    op.text = `Número ${num.value} adicionado`
    op.setAttribute('value', ` v ${Number(num.value)}`);
    list.appendChild(op);
    num.value = ''
    res.innerHTML = '' 
    num.focus();

    }else{
        window.alert('Por favor digite um número ou digite um número que não está na lista.')
        num.value = ''
    }
}

function finalizar(){

    let refme = arr[0]
    let refma = arr[0]
    let media = 0

    if(arr.length != 0){

        for(let i in arr){

            if(arr[i] < refme){
                refme = arr[i]
            }
            if(arr[i] > refma){
                refma = arr[i]
            }

            media += arr[i]
        }

    res.innerHTML = `Existem ${arr.length} números na lista. </br>`
    res.innerHTML += `O menor valor da sua lista é ${refme}. </br>`
    res.innerHTML += `O maior da lista é ${refma}. </br>`
    res.innerHTML += `A soma dos números é ${media}. </br>`
    res.innerHTML += `A média dos números é ${media/arr.length}. </br>`
    }else {
        res.innerHTML = 'Não existe números na lista'
    }

}

function processar(){

    var ref = new Date();
    var ano = window.document.querySelector('input#idade'); //lembrar de checar se vai sair number   
    var area = window.document.querySelector('div#campo');

    if(ano.value.length == 0 || Number(ano.value) > ref.getFullYear()){
        window.alert('Tá doido, é? Olha as coisas que você escreve meu.')
    }
    else{

        var idade = ref.getFullYear() - ano.value;
        var sex = window.document.getElementsByName('sex');
        var imgur = window.document.querySelector('img#imga');

        var gen;

        if(sex[0].checked){
            gen = 'homem'
        }
        else {
            gen = 'mulher'
        }

        area.innerHTML = `Você é ${gen} e tem ${idade} anos`;

        

if(idade < 13){

    if(sex[0].checked){
       imgur.setAttribute('src', 'Midia/fotocriancino.png')
    }
    else{
        imgur.setAttribute('src', 'Midia/fotocriancina.png')
    }

}else if(idade < 24){

    if(sex[0].checked){
        imgur.setAttribute('src', 'Midia/fotojovino.png')
    }
    else{
        imgur.setAttribute('src', 'Midia/fotojovina.png')
    }

}else if(idade < 65){

    if(sex[0].checked){
        imgur.setAttribute('src', 'Midia/fotoadulto.png')
    }
    else{
        imgur.setAttribute('src', 'Midia/fotoadulta.png')
    }

} else{

    if(sex[0].checked){
        imgur.setAttribute('src', 'Midia/fotovelho.png')
    }
    else{
        imgur.setAttribute('src', 'Midia/fotovelha.png')
    }

}

}}

function contar(){

    var ini = Number(window.document.querySelector('input#inicio').value);
    var fim = Number(window.document.querySelector('input#fim').value);
    var pas = Number(window.document.querySelector('input#passo').value);
    var res = window.document.querySelector('div#res');
    
    res.innerHTML = 'Contando <br>'
    
        if(pas.toString().lenght == '0' || Number(pas) == 0){
            window.alert('Colocando passo como 1')
            pas = 1
        }
    
    
    
    if(ini < fim){
        for(c = ini; c <= fim; c+= pas){
    
            if(c <= fim - pas){
            res.innerHTML += `${c}, `
            }else{
                res.innerHTML += `${c}.`
            }
        
    
        }
    }else{
        for(c = ini; c >= fim; c -= pas){
    
            if(c >= fim + pas){
            res.innerHTML += `${c}, `
            }else{
                res.innerHTML += `${c}.`
            }
        
    
        }
    }
    
    }

    function tabuada(){

        var numero = window.document.querySelector('input#num');
        var list = window.document.querySelector('select#lista');
    
        
    
        if(numero.value.length == '0'){
            window.alert('Por favor insira um número.')
        }else{
    
            list.innerText = '';
    
        for(c = 1; c <= 10; c++){
    
            var ref = document.createElement('option')
            ref.value = `List${c}`
            ref.text = `${numero.value} x ${c} = ${Number(numero.value) * c}`
            list.appendChild(ref)
    
    }}}    