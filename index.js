let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let para='My name is Moeez'
let para2='My age is 12'
let x = 1;


setInterval(write,225)



function write(){
    text.innerText=para.slice(0,x)
    text2.innerText = para2.slice(0,x)
    x++;
    if(x > para.length){
        x=1;
    }
}
