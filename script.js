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
  ErsteABL.innerHTML = ""
  ZweiteABL.innerHTML = ""
  DritteABL.innerHTML = ""
  ErsteABL.innerHTML += "&#402;'(x)="
  ZweiteABL.innerHTML += "&#402;''(x)="
  DritteABL.innerHTML += "&#402;&sup3(x)="
    for (let i = n-1; i >= 0; i--) {
      h = i+1;
      ABL = document.getElementById(h);
    if(i == 0){
      ErsteABL.innerHTML += "<div class='funktion'>"+ ABL.value +"</div>";
    }else{
      if(i==1){
        ErsteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value +"x+</div>";
        ZweiteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value +"</div>";
      }
      else if(i<=3){
        if(i == 3){
         ZweiteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value * i+"x&sup"+ (i-1) +";+</div>";
         DritteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value *i*(i-1)+"x+</div>";
        }else{
          ZweiteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value * i+"x+</div>";
          DritteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value *i*(i-1)+"</div>"; 
        }
        ErsteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value +"x&sup"+ i +";+</div>";
        
      }else if(i<=5) {
        num = i + 4;
        if(i == 4){
          ZweiteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value * i+"x&sup"+ (i-1) +";+</div>";
        }else{
          ZweiteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value * i+"x&#830"+ (num-1) +";+</div>";
        }
        ErsteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value +"x&#830"+ num +";+</div>";
        DritteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value *i*(i-1)+"x&sup"+ (i-2) +";+</div>";
      }else if(i<=9) {
        num = i + 4;
        if(i == 6){
          ZweiteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value * i+"x&#830"+ (num-1) +";+</div>";
        }else{
          ZweiteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value * i+"x&#83"+ (num-1) +";+</div>";
        }
        if(i < 8 ){
          DritteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value *i*(i-1)+"x&#830"+ (num-2) +";+</div>";
        }else{
          DritteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value *i*(i-1)+"x&#83"+ (num-2) +";+</div>";
        }
        ErsteABL.innerHTML += "<div class='funktion'>"+ h * ABL.value +"x&#83"+ num +";+</div>";
        
      }
    
    }
  }
}