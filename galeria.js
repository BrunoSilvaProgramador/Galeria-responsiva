var imagens = [
    'imagens/img.jpg',
    'imagens/img.jpg',
    'imagens/img.jpg',
    'imagens/img.jpg',
]

var quant = imagens.length

for(var i = 0; i < quant; i++){
    document.querySelector('div.base').innerHTML += `<div class="img-wraper"><img src="${imagens[i]}" class="img"></div>`
    
}
document.querySelector('div.base').innerHTML += '<div class="clear"></div>' 

let imgs = document.querySelectorAll('.img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btnClose = document.querySelector('#btn_close');
let srcVal = '';
for(let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener('click', function(){
        srcVal = imgs[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    })
}
btnClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
})