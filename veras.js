var moveButton = document.querySelector("button:nth-child(2)");

var correctlyButton =  document.querySelector("button:first-child");

moveButton.addEventListener("click", function() {
var vertical = Math.floor(Math.random() * 200);
var horizontal = Math.floor(Math.random() * 200);
moveButton.style.position = "absolute";
moveButton.style.left = vertical + "px";
moveButton.style.top = horizontal + "px";
});