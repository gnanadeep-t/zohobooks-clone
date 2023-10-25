//features menu dispay
let i=0
function featuresDisp(n){
    let tabref=document.getElementsByClassName('tab')
    tabref[i].style.display='none'
    document.getElementsByClassName('features-menu')[0].getElementsByTagName('div')[i].style.borderBottom='none'
    i=n
    tabref[i].style.display='flex'
    document.getElementsByClassName('features-menu')[0].getElementsByTagName('div')[i].style.borderBottom='1px solid black'
    
}
//addon animation
function addonDisp(){
    document.getElementsByClassName('addons-con').style.display='flex'
}
var items = document.querySelectorAll(".addons-con");
function isElementInViewport(el) {
var rect = el.getBoundingClientRect();
return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
}
function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("animation");
      }
    }
  }
  window.addEventListener("scroll", callbackFunc);

// navigation bar display
function navDisp(){
  let nav2=document.getElementsByClassName('nav2-menu')[0]

    if(nav2.style.display=='none'){
      nav2.style.display='flex'
    }
    else{
      nav2.style.display='none'
    }

}


// let j=0
// function disp(ind){
//   let fref=document.getElementsByClassName('nav2-features-submenu')[0]
//   if(j==ind){
//     if(fref[j].style.display=='none'){
//       fref[j].style.display='block'
//     }
//     else{
//       fref[j].style.display='none'
//     } 
//   }
//   else{
//     fref[j].style.display='none'
//     fref[ind].style.display='block'
//   }
// }

// function showMenu(e) {
//   var o = $(e).children().last()
//     , n = $(e).children().first();
//   o.stop().fadeIn({
//       duration: "fast",
//       easing: "swing"
//   }),
//   n.css("opacity", "0.5")
// }
// function showMenuInMobile(e) {
//   var o = e.target;
//   o.classList.contains("show-menulist") ? o.classList.remove("show-menulist") : o.classList.add("show-menulist"),
//   e.stopPropagation()
// }
// function hideMenu(e) {
//   var o = $(e).children().last()
//     , n = $(e).children().first();
//   o.stop().fadeOut({
//       duration: "fast",
//       easing: "swing"
//   }),
//   n.css("opacity", "1")



