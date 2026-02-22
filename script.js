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
    ErsteABL.innerHTML = ""
  ZweiteABL.innerHTML = ""
  DritteABL.innerHTML = ""
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
  grad.value = "";
}
//Mitternachtsformel
function Xbestimmen(){
  preview = document.getElementsByClassName("Preview")[0];
  preview.style.width = "unset"
  preview.innerHTML = "<math display='block'><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mrow><mo>−</mo><mi>b</mi></mrow><mo>±</mo><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mrow><mn>4</mn><mo>⁢</mo><mi>a</mi><mo>⁢</mo><mi>c</mi></mrow></mrow></msqrt></mrow><mrow><mn>2</mn><mo>⁢</mo><mi>a</mi></mrow></mfrac></mrow></math>"
  preview.style.width = "80%"
  Mitternachtsformel = "<math display='block'><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mrow><mo>−</mo><mi>bE</mi></mrow><mo>±</mo><msqrt><mrow><msup><mi>bE</mi><mn>2</mn></msup><mo>−</mo><mrow><mn>4</mn><mo>&#8231;</mo><mi>aE</mi><mo>&#8231;</mo><mi>cE</mi></mrow></mrow></msqrt></mrow><mrow><mn>2</mn><mo>&#8231;</mo><mi>aE</mi></mrow></mfrac></mrow></math>";
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;
  if(a==""){a=0} if(b==""){b=0} if(c==""){c=0}
  UwUrzel = b**2 - 4*a*c;
  for(i = 0;i < 3; i++){
    Mitternachtsformel = Mitternachtsformel.replace("aE",a);
    Mitternachtsformel = Mitternachtsformel.replace("bE",b);
    Mitternachtsformel = Mitternachtsformel.replace("cE",c);
  }
  preview.innerHTML += Mitternachtsformel;
  if(a == 0){
    AwnserABC.style.gap = "15px"
    Awnser = -c/b;
    AwnserABC.innerHTML = "x =  "+ Awnser+" <div>(Für diese Rechnung ist Keine Mitternachts-/ABC-Formel notwendig)</div>";
  }
  else if(UwUrzel < 0){ //Keine Lösung
    AwnserABC.innerHTML = "Keine Lösung (Wurzel Negativ)"
  }else if(UwUrzel == 0){ //Eine Lösung
    Awnser = -b/(2*a)
    AwnserABC.innerHTML = "x =  "+ Awnser; 
  }else if(UwUrzel>0){ //Zwei Lösung
    AwnserABC.style.gap = "unset"
    Awnser1 = (-b + Math.sqrt(UwUrzel))/(2*a);
    Awnser2 = (-b - Math.sqrt(UwUrzel))/(2*a);
    AwnserABC.innerHTML = "x<sub>1</sub> =  "+ Awnser1+";   x<sub>2</sub> =  "+Awnser2;
  }


}