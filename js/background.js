const images= ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"] ;


const bgImage = document.createElement("img");
function randomImg() {
    const n = Math.floor(Math.random()*images.length);
    bgImage.src = `img/${images[n]}`;
    document.body.appendChild(bgImage);
}
randomImg();
setInterval(randomImg,5000);