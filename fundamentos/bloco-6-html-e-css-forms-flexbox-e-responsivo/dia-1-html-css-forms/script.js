let input = document.getElementById('text-input');
let text = document.getElementById('meme-text');
let upload = document.getElementById('meme-insert')
let image = document.getElementById('meme-image')
let container = document.getElementById('meme-image-container')

input.addEventListener('keyup', function(event){
    text.innerText = event.target.value
})

upload.onchange = function(event){
    //Aprendi esse código em https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURl e https://www.codegrepper.com/code-examples/javascript/get+upload+image+input+data+javascript
    image.src = URL.createObjectURL(event.target.files[0])
    image.onload = function(){
        let height = image.height
        let width = image.width 
        container.style.height = height.toString() + 'px';
        container.style.width = width.toString() + 'px';
        container.style.border = '1px solid black'
        URL.revokeObjectURL(image.src)

    }



}       