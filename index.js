var bMusic = new Audio("music.mp3");
$(".rul").click(function() {
  $(".rules").css("display", "block");
  $(".heading").css("opacity", .3);
  $(".center").css("opacity", .3);
  $(".foot").css("opacity", ".3");
  bMusic.play();
});
$(".close").click(function() {
  $(".rules").css("display", "none");
  $(".heading").css("opacity", "1");
  $(".center").css("opacity", "1");
  $(".foot").css("opacity", "1");
});

var tom1 = new Audio("tom-3.mp3");
var tom2 = new Audio("crash.mp3");
function randiv(var1) {
  var ran = Math.floor(Math.random() * 2) + 1;
  if (var1 === "paper") {
    switch (ran) {
      case 1:
        return "scissor";
        break;
      case 2:
        return "rock";
        break;
    }
  } else if (var1 === "scissor") {
    switch (ran) {
      case 1:
        return "paper";
        break;
      case 2:
        return "rock";
        break;
    }
  } else {
    switch (ran) {
      case 1:
        return "paper";
        break;
      case 2:
        return "scissor";
        break;
    }
  }
}
var pr;
var div;
var score = 0;
var tex;

if(window.matchMedia('(max-width: 768px)').matches){
  $(".paper").click(function() {
      tom1.play();
    pr = "paper";
    $(".paper").addClass("pressed");
    $(".paper").css("left","7%");
    $(".pic,.cmp").css("display", "block");
    $(".pic").css("left","6%");
      $(".cmp").css("left","61%");
    $(".pic,.cmp").css("z-index", +2);
    div = randiv("paper");
      $("."+div).css("top","35%");
        $("."+div).css("left","61%");
    $("." + div).addClass("cimage");
    $(".i" + div).css("opacity", 0);
    if (div === "scissor")
      $(".rock").css("display", "none");
    else
      $(".scissor").css("display", "none");
      setTimeout(function() {
        $("."+div).removeClass("cimage");
        $(".i"+div).css("opacity", .8);
        $("."+div).addClass("pressed");
      }, 1000);
        result(pr, div);
        });
        $(".scissor").click(function() {
            tom1.play();
          pr = "scissor";
              $(".scissor").css("left","7%");
          $(".scissor").addClass("pressed");
          $(".pic,.cmp").css("display", "block");
          $(".pic,.cmp").css("z-index", +2);
          div = randiv("scissor");
            $("."+div).css("top","35%");
                $("."+div).css("left","61%");
          $("." + div).addClass("cimage");
          $(".i" + div).css("opacity", 0);
          if (div === "paper")
            $(".rock").css("display", "none");
          else
            $(".paper").css("display", "none");
            setTimeout(function() {
              $("."+div).removeClass("cimage");
              $(".i"+div).css("opacity", .8);
              $("."+div).addClass("pressed");
            }, 1000);
              result(pr, div);
              });

    $(".rock").click(function() {
        tom1.play();
      pr = "rock";
      $(".rock").addClass("pressed");
      $(".rock").css("left","7%");
      $(".pic,.cmp").css("display", "block");
      $(".pic,.cmp").css("z-index", +2);
      div = randiv("rock");
        $("."+div).css("top","36%");
            $("."+div).css("left","61%");
      $("." + div).addClass("cimage");
      $(".i" + div).css("opacity", 0);
      if (div === "scissor")
        $(".paper").css("display", "none");
      else
        $(".scissor").css("display", "none");
        setTimeout(function() {
          $("."+div).removeClass("cimage");
          $(".i"+div).css("opacity", .8);
          $("."+div).addClass("pressed");

        }, 1000);
          result(pr, div);
        });
}
else{
$(".paper").click(function() {
    tom1.play();
  pr = "paper";
  $(".paper").addClass("pressed");
  $("."+pr).css("left","450px");
  $(".ipaper").addClass("im");
  $("hr").css("display", "none");
  $(".heading").css("position", "absolute");
  $(".heading").css("z-index", +2);
  $(".pic,.cmp").css("display", "block");
  $(".pic,.cmp").css("z-index", +2);
  div = randiv("paper");
  $("." + div).addClass("cimage");
  $(".i" + div).css("opacity", 0);
  if (div === "scissor")
    $(".rock").css("display", "none");
  else
    $(".scissor").css("display", "none");
    setTimeout(function() {
      $("."+div).removeClass("cimage");
      $(".i"+div).css("opacity", .8);
      $("."+div).addClass("pressed");
      $("."+div).css("left","790px");
      $(".i"+div).addClass("im");
    }, 1000);
    $("."+div).addClass("pressed");
    $("."+div).css("left","790px");
    $(".i"+div).addClass("im");
  setTimeout(function() {
    $(".paper").css("left", "300px");
    $("." + div).css("left", "929px");
    $(".cmp").css("left", "895px");
    $(".pic").css("left", "265px");
  }, 2000);
  result(pr, div);
});


$(".rock").click(function() {
    tom1.play();
  pr = "rock";
  $(".rock").addClass("pressed");
  $("."+pr).css("left","450px");
  $(".irock").addClass("im");
  $("hr").css("display", "none");
  $(".heading").css("position", "absolute");
  $(".heading").css("z-index", +2);
  $(".pic,.cmp").css("display", "block");
  $(".pic,.cmp").css("z-index", +2);
  div = randiv("rock");
  $("." + div).addClass("cimage");
  $(".i" + div).css("opacity", 0);
  if (div === "scissor")
    $(".paper").css("display", "none");
  else
    $(".scissor").css("display", "none");
  setTimeout(function() {
    $("."+div).removeClass("cimage");
    $(".i"+div).css("opacity", .8);
    $("."+div).addClass("pressed");
      $("."+div).css("left","790px");
    $(".i"+div).addClass("im");
  }, 1000);
  $("."+div).addClass("pressed");
    $("."+div).css("left","790px");
  $(".i"+div).addClass("im");
  setTimeout(function() {
    $(".rock").css("left", "300px");
    $("." + div).css("left", "929px");
    $(".pic").css("left", "265px");
    $(".cmp").css("left", "895px");
  }, 2000);
  result(pr, div);

});

$(".scissor").click(function() {
    tom1.play();
  pr = "scissor";
  $(".scissor").addClass("pressed");
  $("."+pr).css("left","450px");
  $(".iscissor").addClass("im");
  $("hr").css("display", "none");
  $(".heading").css("position", "absolute");
  $(".heading").css("z-index", +2);
  $(".pic,.cmp").css("display", "block");
  $(".pic,.cmp").css("z-index", +2);
  div = randiv("scissor");
  $("." + div).addClass("cimage");
  $(".i" + div).css("opacity", 0);
  if (div === "paper")
    $(".rock").css("display", "none");
  else
     $(".paper").css("display", "none");
     setTimeout(function() {
       $("."+div).removeClass("cimage");
       $(".i"+div).css("opacity", .8);
       $("."+div).addClass("pressed");
       $("."+div).css("left","790px");
       $(".i"+div).addClass("im");
     }, 1000);
     $("."+div).addClass("pressed");
     $("."+div).css("left","790px");
     $(".i"+div).addClass("im");
  setTimeout(function() {
    $(".scissor").css("left", "300px");
    $("." + div).css("left", "929px");
    $(".pic").css("left", "265px");
    $(".cmp").css("left", "895px");
  }, 2000);
  result(pr, div);
});
}

var score = 0;
var tex;

function result(var2, var3) {
  setTimeout(function() {
    $(".resu, .again").css("display", "block");
    if ((var2 === "paper" && var3 === "rock") || (var2 === "rock" && var3 === "scissor") || (var2 === "scissor" && var3 === "paper")) {
      tex = "win";

      $("." + var2).addClass("r" + var2);
      score++;
      $(".num").text(score);
        $(".resu").text("YOU WIN");
    } else {
      tex = "los";
      $("." + var3).addClass("r" + var3);
      $(".resu").text("YOU LOSE");
    }
  }, 2000);
}

$(".again").click(function(){
  plgain(tex,pr,div)
});
if(window.matchMedia('(max-width: 768px)').matches)
{
  function plgain(var4, var5, var6) {
    tom2.play();
    if (var4 === "los") {
      $("."+var6).removeClass("r"+var6);
    } else {
      $("." + var5).removeClass("r"+var5);
    }
  $("." + var6).removeClass("pressed");
  $("." + var5).removeClass("pressed");
    $(".pic,.cmp").css("z-index", 0);
    $(".pic,.cmp").css("display", "none");
      $(".resu, .again").css("display", "none");
      $(".scissor").css("left", "57%");
      $(".paper").css("left", "11%");
      $(".rock").css("left", "34%");
        $(".rock").css("top","54%");
      $(".paper").css("display", "block");
      $(".scissor").css("display", "block");
      $(".rock").css("display", "block");
}
}
else {
function plgain(var4, var5, var6) {
  tom2.play();
  if (var4 === "los") {
    $("."+var6).removeClass("r"+var6);
  } else {
    $("." + var5).removeClass("r"+var5);
  }
  $("." + var6).removeClass("pressed");
  $(".i" + var6).removeClass("im");
  $("." + var5).removeClass("pressed");
  $(".i" + var5).removeClass("im");
  $(".heading").css("position", "static");
  $(".heading").css("z-index", 0);
  $(".pic,.cmp").css("z-index", 0);
  $("hr").css("display", "block");
  $(".pic,.cmp").css("display", "none");
  $(".resu, .again").css("display", "none");
  $(".scissor").css("left", "820px");
  $(".paper").css("left", "530px");
  $(".rock").css("left", "670px");
  $(".paper").css("display", "block");
  $(".scissor").css("display", "block");
  $(".rock").css("display", "block");
  $(".cmp").css("left", "760px");
  $(".pic").css("left", "431px");

}}
