//Navagation
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
//Ableitung
function Gradbestimmt(){
  var n = Number(grad.value);
  //grad.value = "";
  EingabeAbleitung.innerHTML = "";
  EingabeAbleitung.innerHTML += "&#402;(x)="
    for (let i = n; i >= 0; i--) {
    if(i == 0){
      EingabeAbleitung.innerHTML += "<div class='funktion'><input id='"+i+"' class='eingabeAb' type='number'></div>";
    }else{
      if(i==1){
        EingabeAbleitung.innerHTML += "<div class='funktion'><input id='"+i+"' class='eingabeAb' type='number'>x+</div>";
      }
      else if(i<=3){
        EingabeAbleitung.innerHTML += "<div class='funktion'><input id='"+i+"' class='eingabeAb' type='number'>x&sup"+ i +";+</div>";
      }else if(i<=5) {
        num = i + 4;
        EingabeAbleitung.innerHTML += "<div class='funktion'><input id='"+i+"' class='eingabeAb' type='number'>x&#830"+ num +";+</div>";
      }else if(i<=9) {
        num = i + 4;
        EingabeAbleitung.innerHTML += "<div class='funktion'><input id='"+i+"' class='eingabeAb' type='number'>x&#83"+ num +";+</div>";
      }
    
    }
  }
  EingabeAbleitung.innerHTML += "<button onclick='ABLBestimmen()'>Ok</button>"
}
function ABLBestimmen(){
  n = Number(grad.value);
  i = n-1;
  h = i+1;
  ErsteABL.innerHTML += "&#402;'(x)="
    for (let i = n-1; i >= 0; i--) {
      h = i+1;
      ABL = document.getElementById(h);
      alert(ABL.value);
    if(i == 0){
      ErsteABL.innerHTML += "<div class='funktion'>"+ ABL.value +"</div>";
    }else{
      if(i==1){
        ErsteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value +"x+</div>";
      }
      else if(i<=3){
        ErsteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value +"x&sup"+ i +";+</div>";
      }else if(i<=5) {
        num = i + 4;
        ErsteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value +"x&#830"+ num +";+</div>";
      }else if(i<=9) {
        num = i + 4;
        ErsteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value +"x&#83"+ num +";+</div>";
      }
    
    }
  }
}