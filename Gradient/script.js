const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")

const bgArea = document.getElementById("bg-area")
const copyCode = document.querySelector(".copy-code")


let rgb1 = "#222";
let rgb2  = "#fff";



let colormaker = () => {
    let myhexnum = "0123456789abcdef";
    let p = "#";
    for (let i = 0; i <6; i++) {
        // console.log(i);
        
        p = p+myhexnum[Math.floor(Math.random()*16)];
    } 
    
return p;
}




const handleBtn1 = () => {
    rgb1 = colormaker();
    console.log(rgb1);
    btn1.innerText = rgb1;
    console.log(bgArea.style.backgroundImage);
    btn1.style.backgroundColor = rgb1;
    bgArea.style.backgroundImage = `linear-gradient(to top right, ${rgb1}, ${rgb2})`;
    console.log(bgArea.style.backgroundImage);
    copyCode.innerHTML = `background-image: linear-gradient(to top right, ${rgb1}, ${rgb2})`;
}

const handleBtn2 = () => {
    rgb2 = colormaker();
    console.log(rgb2);
    btn2.innerText = rgb2;
    console.log(bgArea.style.backgroundImage);
    bgArea.style.backgroundImage = `linear-gradient(to top right, ${rgb1},${rgb2})`;
    console.log(bgArea.style.backgroundImage);
    btn2.style.backgroundColor = rgb2;
    copyCode.innerHTML = `background-image: linear-gradient(to top right, ${rgb1}, ${rgb2});`;
}


copyCode.addEventListener('click', function() {
    navigator.clipboard.writeText(copyCode.innerText);
        console.log('Text copy ho gaya: ' + copyCode.innerText);
        alert('Text copy ho gaya: ' + copyCode.innerText);
  });
  



btn1.addEventListener('click', handleBtn1);
btn2.addEventListener('click', handleBtn2);


setInterval(handleBtn1,10000);
setInterval(handleBtn2,10000);

