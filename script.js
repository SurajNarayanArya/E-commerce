const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('nevbar');
var removeCartItem=document.getElementById('khtm');
console.log(removeCartItem)

for( var i=0;i< removeCartItem.clientHeight;i++){
    var button=removeCartItem[i];
    button.addEventListener('çlick',function() {
        console.log('clicked')
    })
}

if (bar) {
    bar.addEventListener('click' , () =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click' , () =>{
        nav.classList.remove('active');
    })
}