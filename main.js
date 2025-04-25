var isDragging = false;
var offsetX = 0;
var offsetY = 0;

var dragg = document.createElement("div");
dragg.setAttribute("id", "dragg");
dragg.style.width = "300px";
dragg.style.height = "200px";
dragg.style.borderRadius = "12px"
dragg.style.position = "absolute"; 
dragg.style.zIndex = "9999";
dragg.innerHTML = `
    <div id="title"><b>Lunar executor</b></div>
    <div>
        <textarea id="hello"></textarea>
    </div>
    <button onclick='runcode47()' class="btn"><b>Run</b></button><button class="btn2" onclick="closes()"><b>Close</b></button><button class="btn2" onclick="(function () { var script = document.createElement('script'); script.src='//chii.liriliri.io/playground/target.js'; document.body.appendChild(script); script.setAttribute('embedded', 'true')})();"><b>Chii</b></button><a id="statu"></a>
    <style>@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
#dragg {
background: #D239D2;
background: linear-gradient(90deg, rgba(210, 57, 210, 1) 0%, rgba(90, 12, 90, 1) 40%, #411441 95%); 
}
.btn {
margin-left:25px;
font-family: sans-serif;
background-color: #d239d2;
          border-radius: 6px;
          border: 1px solid;
}.btn2 {
margin-left:10px;
font-family: sans-serif;
background-color: #d239d2;
          border-radius: 6px;
          border: 1px solid;
}
#statu {
color: #aeaeae;
background-color: rgba(0, 0, 0, 0.5); /* 10% opacity black */

}
#hello{
background-color: rgba(0, 0, 0, 0.5); /* 10% opacity black */
margin-left:25px; margin-top: 35px; width: 250px;height:120px;color:#aeaeae;font-family: border: 2px solid;border-color:black;font-family:'Source Code Pro';}
#title
{position:absolute;background: #D239D2; color:white; 

background: linear-gradient(90deg, rgba(210, 57, 210, 1) 0%, rgba(90, 12, 90, 1) 40%, #5a0c5a 95%); width:270px; margin-left:15px; margin-top:5px; text-align:center; border: 3px solid; border-color: #000000;}</style>
`;

document.body.appendChild(dragg);
function attach() {
eval(`var x = document.createElement("script")
    x.setAttribute("id", "attach1")
    document.head.appendChild(x)`)
    if (document.getElementById("attach1")) {return true;} else {return false;}
}
function closes() {
    dragg.style.display = "none"
   
}
if (attach()) {
    document.getElementById("title").innerHTML = "<b>⠀⠀Lunar executor ⠀<a href='javascript:alert(`Lunar is working on this page!`);console.log(`type spongbob and run it for a suprise`);'>🟢</a></b>"
} else {
    document.getElementById("title").innerHTML = "<b>⠀⠀Lunar executor ⠀<a href='javascript:alert(`Lunar is not working on this page! check console for details.`);console.error(`eval is not allowed on this page! im to lazy to find a fix if this is the case tho`)'>🔴</a></b>"
}
window.addEventListener("keydown", function (e) {
    if (e.keyCode == 220) {
        dragg.style.display = ""
    }
})
function onMouseMove(event) {
    if (isDragging) {
        dragg.style.left = (event.clientX - offsetX) + "px";
        dragg.style.top = (event.clientY - offsetY) + "px";
    }
}
function runcode47() {
    if (document.getElementById("hello").value == "spongbob") {
        var x = document.body.style.backgroundImage
        document.body.style.backgroundImage = "URL(https://preview.redd.it/does-anyone-know-the-origin-of-this-spongebob-bob-picture-v0-z70gzlbf0n8e1.png?width=903&format=png&auto=webp&s=0a851304979be70f49509c2e24f27b224ce10317)"
        
    } else {
        eval(document.getElementById("hello").value)
    }
}
dragg.addEventListener("mousedown", function (event) {
    isDragging = true;
    // Calculate offset where user clicked inside the div
    offsetX = event.clientX - dragg.getBoundingClientRect().left;
    offsetY = event.clientY - dragg.getBoundingClientRect().top;
});

document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mouseup", function () {
    isDragging = false;
});
