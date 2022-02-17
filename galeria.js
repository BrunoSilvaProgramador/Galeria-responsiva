var imagens = [
    "url('imagens/img.jpg')",
    "url('imagens/img.jpg')",
    "url('imagens/img.jpg')",
    "url('imagens/img.jpg')",
    "url('imagens/img.jpg')",
    "url('imagens/img.jpg')",
]

var quant = imagens.length

for(var i = 0; i < quant; i++){
    document.querySelector('div.base').innerHTML += `<div class="img-wraper"><div class="img" style="background-image: ${imagens[i]}"></div></div>`
}
document.querySelector('div.base').innerHTML += '<div class="clear"></div>' 


