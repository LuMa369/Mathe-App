let opend = false
function GoTo(Page) {
  window.location.href = Page + ".html";
  opend = false;
}
function GoToE(Page) {
    if(opend == true){
          window.location.href = Page + ".html";
        opend = false;
    }

}

function imE() {
  if (opend == false) {
    for (let i = 0; i < 7; i++) {
      IconMenuEx = document.getElementsByClassName("IconMenuEx")[i];
      IconMenuEx.style.animationPlayState = "running";
      IconMenuEx.style.animationDirection = "normal";
    }
    BigMenu = document.getElementsByClassName("BigMenu")[0];
    Menu.style.animationPlayState = "running";
    BigMenu.style.animationPlayState = "running";
    Menu.style.animationDirection = "normal";
    BigMenu.style.animationDirection = "normal";
    opend = true;
  }else if(opend == true){
        for (let i = 0; i < 7; i++) {
      IconMenuEx = document.getElementsByClassName("IconMenuEx")[i];
      IconMenuEx.style.animationDirection = "reverse";
    }
    BigMenu = document.getElementsByClassName("BigMenu")[0];
    Menu.style.animationDirection = "reverse";
    BigMenu.style.animationDirection = "reverse";
    opend = false;
  }
}
