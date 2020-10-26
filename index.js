var btn= document.querySelector("#btn");
var tweetbtn= document.querySelector("#twitterbtn");
var fbbtn= document.querySelector("#facebookbtn");
var quote= document.querySelector("#quote");
var url= 'https://sheet.best/api/sheets/5b56d33f-26f7-4159-806b-53510d55f590';


btn.addEventListener("click",function () {
    fetch(url)
    .then(function(req){
        req.json().then(function(data){
          var ChandlerBing = data;
          function randomNumber() {
            var random = Math.floor(Math.random() * data.length);
            return ChandlerBing[random];
          }
            quote.innerText= randomNumber().Quotes;
        })
    })
});

tweetbtn.addEventListener("click", function() {
  tweetIt ();
});

function tweetIt () {
  var phrase = quote.innerText;
  var tweetUrl = "https://twitter.com/intent/tweet?&text=\"" + encodeURIComponent(phrase) + "\"  - Sheldon Cooper &hashtags=BIGBANGTHEORY&hashtags=SHELDONCOOPER&url=https://reveurguy.github.io/Sheldon-Cooper-Quotes/"; 
  window.open(tweetUrl);
}
