$(document).ready( function(){
  $(function(){
    $("#text").typed({
      strings: ["Hi. I'm a website.", "Do you want to learn how I got here on your computer?<br><a id='y' href='#' class='txt'>Yes</a><a id='n' href='#' class='txt' style='margin-left:20%;'>No</a>"],
      fadeOut: true,
      typeSpeed: 20,
      callback: function(){
        screen2();
      }
    });
  });
});
screen2 = function(){
  $("#y").on("click", function(){
    screen4();
  });
  $("#n").on("click", function(){
    $(".sadR").removeClass("hide");
    $(".sadL").removeClass("hide");
    $(".shine").addClass("sad");
    $(function(){
      $("#text").typed({
        strings: ["Ok.<br><a id='y' href='#' class='txt'>Actually yes</a>"],
        fadeOut: true,
        typeSpeed: 20,
        callback:function(){
          screen3();
        }
      });
    });
  });
}
screen3 = function(){
  $("#y").on("click", function(){
          screen4();
      });
}
screen4 = function(){
  $("#text").removeClass("txt");
  $("#text").addClass("txt2");
  $("#facediv").addClass("hide");
  $("#fullface").removeClass("purp");
  $(".friend").removeClass("hide");
  $(function(){
    $("#text").typed({
      strings: ["I usually live on a github server with all of my other website friends"],
      fadeOut: true,
      typeSpeed: 20,
      callback: function(){
        setTimeout(function(){
          screen5();
        }, 3000);
      }
    });
  });
}
screen5 = function(){
  $("#tubefriend").removeClass("hide");
  $("#friends").addClass("hide");
  $(function(){
    $("#text").typed({
      strings: ["until one of us is requested to travel to your browser over the Internet"],
      fadeOut: true,
      typeSpeed: 20,
      callback: function(){
        setTimeout(function(){
          screen6();
        }, 3000);
      }
    });
  });
}
screen6 = function(){
  $("#tube").removeClass("hide");
  $(function(){
    $("#text").typed({
      strings: ["Someone once said the Internet is a series of tubes"],
      fadeOut: true,
      typeSpeed: 20,
      callback: function(){
        tube();
      }
    });
  });
}
tube = function(){
  setTimeout(function(){
    downTube();
  }, 1000);
}
downTube = function(){
  $(".friend").removeClass("bouncy");
  $(".friend").addClass("boop");
  setTimeout(function(){
    screen7();
  }, 2000);
}
screen7 = function(){
  $(".friend").removeClass("boop");
  $("#tubefriend").addClass("hide");
  $("#wire").removeClass("hide");
  $(function(){
    $("#text").typed({
      strings: ["But it's actually a network of wires"],
      fadeOut: true,
      typeSpeed: 20,
      callback: function(){
        zip();
      }
    });
  });
}
zip = function(){
  $(".friend").addClass("zoom");
  setTimeout(function(){
    screen8();
  }, 2000);
}
screen8 = function(){
  $(function(){
    $("#text").typed({
      strings: ["Mostly underwater"],
      fadeOut: true,
      typeSpeed: 20,
      callback: function(){
        $(".water").removeClass("hide");
        $(".water").addClass("wet");
        $(".friend").addClass("whee");
        setTimeout(function(){
          screen9();
        }, 4000);
      }
    });
  });
}
screen9 = function(){
  $(".water").removeClass("wet");
  $(".water").addClass("hide");
  $(".packet").removeClass("hide");
  $(function(){
    $("#text").typed({
      strings: ["To travel on the Internet, I have to break up into tiny pieces called packets"],
      fadeOut: true,
      typeSpeed: 20,
      callback: function(){
        $("#p1").addClass("zip");
        setTimeout(function(){
          $("#p2").addClass("zip");
        }, 1000);
        setTimeout(function(){
          $("#p3").addClass("zip");
        }, 1500);
        setTimeout(function(){
          $("#p4").addClass("zip");
        }, 2000);
        setTimeout(function(){
          $("#p5").addClass("zip");
        }, 3000);
      }
    });
  });
}
