//![ jquery ".each" pure js]
NodeList.prototype.each = function(fn) {
  for (var i = 0; i < this.length; i++) {
    fn.apply(this[i], [i, this[i]]);
  }
  return this;
};

//![ jquery ".load" pure js ]
//*==[ USAGE (the url you want to load from + the div that you want to load it into) ]
//*==[  include('/index.html', document.getElementById('div')) ]
//==[ Thanks to https://stackoverflow.com/a/32144585 for the code and aiston on NeoNet for the js fix :) ]
function include(element, url){
  var request = new XMLHttpRequest();
  request.responseType = 'document';
  request.open('GET', url, true);

  request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
      var resp = request.response;
      var inner = resp.documentElement.innerHTML;
      const newContent = document.createRange().createContextualFragment(inner);
      element.innerHTML = '';
      element.append(newContent);
  }
  };

  request.send();
}
//![ Get last updated and page viewcount ]
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var site_data = JSON.parse(this.responseText);
        var num_arr = site_data.info.views.toString().split("");
        var num_str = "";
        for (i = 0; i < num_arr.length; i++) {
            num_str += num_arr[i];
            if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {num_str += ",";}
            var date_str = site_data.info.last_updated;
            var date_obj = new Date(site_data.info.last_updated);
            document.getElementById("lastupdate").innerHTML = (date_obj.getMonth()+1) + "-" + date_obj.getDate() + "-" + date_obj.getFullYear();
        }
        document.getElementById("hitcount").innerHTML = num_str;
    }
};
xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=redeviated-edael-tb", true);
xhttp.send();

//![ Journal estimated reading time ]
// script by https://dev.to/michaelburrows/calculate-the-estimated-reading-time-of-an-article-using-javascript-2k9l
function readingTime() {
  const text = document.getElementById("article").innerText;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  document.getElementById("time").innerText = time;
}

//![ Journal word count ]
//script by https://stackoverflow.com/questions/71606990/count-number-of-words-inside-a-div-ignoring-those-inside-a-specified-child-div
function countWordsInDiv () {
  console.log(returnWords($(".journal-content").text()) - returnWords($(".ignoredwrds").text()))
}

function returnWords(str) {
  return str.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;
}

//![change any element with an id of "current_year"]
window.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('[class="current-year"]');

  for(var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = new Date().getFullYear();
  }
});

//![ Console Erase and a visitor ;p]
function clearsight(){
  const sight = 
  `
▄█          ▄████████    ▄████████    ▄████████    ▄████████    ▄████████       ▄██   ▄    ▄██████▄  ███    █▄ 
███         ███    ███   ███    ███   ███    ███   ███    ███   ███    ███      ███   ██▄ ███    ███ ███    ███
███▌        ███    █▀    ███    █▀    ███    █▀    ███    █▀    ███    █▀       ███▄▄▄███ ███    ███ ███    ███
███▌        ███         ▄███▄▄▄      ▄███▄▄▄      ▄███▄▄▄      ▄███▄▄▄          ▀▀▀▀▀▀███ ███    ███ ███    ███
███▌      ▀███████████ ▀▀███▀▀▀     ▀▀███▀▀▀     ▀▀███▀▀▀     ▀▀███▀▀▀          ▄██   ███ ███    ███ ███    ███
███                ███   ███    █▄    ███    █▄    ███    █▄    ███    █▄       ███   ███ ███    ███ ███    ███
███          ▄█    ███   ███    ███   ███    ███   ███    ███   ███    ███      ███   ███ ███    ███ ███    ███
█▀         ▄████████▀    ██████████   ██████████   ██████████   ██████████       ▀█████▀   ▀██████▀  ████████▀ 
                                                                                                               
                                                                                                               
 ▄▄▄▄▄▄  ▀▀█▄▄                                                                                                 
██▀▀▀▀▀▀    ▀███▄  ▀▀██▄                                                                                       
▀█▄▄▄▄▄▄▄    ▀██▄      ▀█▄                                                                                     
               ███     ██                                                                                      
▄█▀▀▀▀▀▀▀    ▄██▀      ▄█▀                                                                                     
██▄▄▄▄▄▄    ▄███▀  ▄▄██▀                                                                                       
 ▀▀▀▀▀▀  ▄▄█▀▀                                                                                                 

Ƴ ᗝ ᑌ   ᗯ ᗩ ᑎ▀ ᑎ ᗩ   ᔕ█ ᗴ ᗴ   ᗰ ᗴ ,   ᗪ ᗝ█ ᑎ ' 丅   Ƴ ᗝ ᑌ ?

ᔕ ᗴ ᑕ ᖇ ▀ᗴ 丅 ᔕ   ᗩ ᖇ ᗴ   ᕼ ᗩ ᖇ █ᗪ   丅 ᗝ   ᛕ ᗴ ᗴ ᑭ   Ꭵ ᑎ   丅 ᕼ Ꭵ ᔕ   ᗪ ▄ᗩ▀ Ƴ   ᗩ ᑎ ᗪ   ᗩ Ǥ ᗴ

ᔕ ᗝ ᗰ ᗴ   丅 ᕼ Ꭵ ᑎ Ǥ█ ᔕ   ᗩ ᖇ█ ᗴ   ᗷ ᗴ 丅 丅 ᗴ ᖇ   ᒪ ᗴ█ ᖴ 丅   ᗯ ᗴ ᒪ ᒪ▄   ᗴ ▄ᑎ ᗝ ᑌ Ǥ ᕼ

▄█▓▒­░ ᗩ ᒪ ᗝ ᑎ ᗴ ░▒▓█▄`;
  const sightcss = [
    "color: green",
    "background-color: black",
    "line-height: 2px",
  ].join(";");

  setTimeout(() => {
    console.clear();
    console.log(`%c${sight}`, sightcss);
    setTimeout(() => {console.log("ᴘᴀᴠᴇᴅʙʏɢᴏᴏᴅɪɴᴛᴇɴᴛɪᴏɴꜱᴘᴀᴠᴇᴅʙʏɢᴏᴏᴅɪɴᴛᴇɴᴛɪᴏɴꜱᴘᴀᴠᴇᴅʙʏɢᴏᴏᴅɪɴᴛᴇɴᴛɪᴏɴꜱᴘᴀᴠᴇᴅʙʏɢᴏᴏᴅɪɴᴛᴇɴᴛɪᴏɴꜱᴘᴀᴠᴇᴅʙʏɢᴏᴏᴅɪɴᴛᴇɴᴛɪᴏɴꜱ");}, "100000");
  }, "1000");
}




