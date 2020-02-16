
document.getElementById("burger").onclick = function(){
    addmenu()
    hideburger()
}
function addmenu(){
    document.getElementById("menu").classList.toggle("show");
}
function hideburger(){
    document.getElementById("burger").classList.remove("burger");  
}
document.getElementById("menu").onclick = function(){
    hidemenu()
    showburger()
}
function showburger(){
    document.getElementById("burger").classList.add("burger")
}
function hidemenu(){
    document.getElementById("menu").classList.remove("show")
}   