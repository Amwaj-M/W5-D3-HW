let img_w = document.getElementById("img-w");
let black_w =  document.getElementById("black-w");
let white_w =  document.getElementById("white-w");
let pink_w =  document.getElementById("pink-w");
let gold_w =  document.getElementById("gold-w");
let AR = document.getElementById("AR");
let Home = document.getElementById("Home");
let card_title = document.getElementById("card-title");
let card_text = document.getElementById("card-text");
let black_text = document.getElementById("black-text");
let white_text = document.getElementById("white-text");
let pink_text = document.getElementById("pink-text");
let gold_text = document.getElementById("gold-text");
let button = document.getElementById("button");
let footer_text = document.getElementById("footer-text");
let time =document.getElementById("time");

white_w.addEventListener("click",()=>{
    img_w.src = "smart-watch-white.jpg"
    displaytime();
});

pink_w.addEventListener("click",()=>{
    img_w.src = "smart-watch-pink.jpg"
    displaytime();
});

gold_w.addEventListener("click",()=>{
    img_w.src = "smart-watch-gold.jpg"
    displaytime();
});

black_w.addEventListener("click",()=>{
    img_w.src = "smart-watch-black.jpg"
    displaytime();

});

AR.addEventListener("click",()=>{
    AR.innerText = "انجليزي"
    Home.innerText ="الرئيسية"
    card_title.innerText ="ساعة ذكية "
    card_text.innerText ="اختار اللون"
    black_text.innerText ="اسود"
    white_text.innerText ="ابيض"
    pink_text.innerText ="وردي"
    gold_text.innerText = "ذهبي"
    button.innerText= "اضافة للسلة " 
    footer_text.innerText="بواسطة: أمواج محمد"
});


function displaytime()
{
  setInterval(function() {
    let today = new Date();
    
    let hour = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    let minute = today.getMinutes();

    let output_time= hour + ':' + minute ;

    time.innerText= output_time;

  }, 3000);
}displaytime();