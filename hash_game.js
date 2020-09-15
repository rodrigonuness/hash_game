         var victory = document.getElementById('victory')
         var body = document.getElementById('body')
         var xory = 0
         var p1
         var p2
         var p3
         var p4
         var p5
         var p6
         var p7
         var p8
         var p9
         function image1(){
            var box = document.getElementById('input1')
            if(xory == 0){
               box.style.backgroundImage = "url(./1.png)"
               xory = 1
               p1 = "x"
            }else{
               box.style.backgroundImage = "url(./2.png)"
               xory = 0
               p1 = "y"
            }
            check()
         }
         
         function image2(){
            var box = document.getElementById('input2')
            if(xory == 0){
               box.style.backgroundImage = "url(./1.png)"
               xory = 1
               p2 = "x"
            }else{
               box.style.backgroundImage = "url(./2.png)"
               xory = 0
               p2 = "y"
            }
            check()
         }
         
         function image3(){
            var box = document.getElementById('input3')
            if(xory == 0){
               box.style.backgroundImage = "url(./1.png)"
               xory = 1
               p3 = "x"
            }else{
               box.style.backgroundImage = "url(./2.png)"
               xory = 0
               p3 = "y"
            }
            check()
         }
         
         function image4(){
            var box = document.getElementById('input4')
            if(xory == 0){
               box.style.backgroundImage = "url(./1.png)"
               xory = 1
               p4 = "x"
            }else{
               box.style.backgroundImage = "url(./2.png)"
               xory = 0
               p4 = "y"
            }
            check()
         }
         
         function image5(){
            var box = document.getElementById('input5')
            if(xory == 0){
               box.style.backgroundImage = "url(./1.png)"
               xory = 1
               p5 = "x"
            }else{
               box.style.backgroundImage = "url(./2.png)"
               xory = 0
               p5 = "y"
            }
            check()
         }
         
         function image6(){
            var box = document.getElementById('input6')
            if(xory == 0){
               box.style.backgroundImage = "url(./1.png)"
               xory = 1
               p6 = "x"
            }else{
               box.style.backgroundImage = "url(./2.png)"
               xory = 0
               p6 = "y"
            }
            check()
         }
         
         function image7(){
            var box = document.getElementById('input7')
            if(xory == 0){
               box.style.backgroundImage = "url(./1.png)"
               xory = 1
               p7 = "x"
            }else{
               box.style.backgroundImage = "url(./2.png)"
               xory = 0
               p7 = "y"
            }
            check()
         }
         
         function image8(){
            var box = document.getElementById('input8')
            if(xory == 0){
               box.style.backgroundImage = "url(./1.png)"
               xory = 1
               p8 = "x"
            }else{
               box.style.backgroundImage = "url(./2.png)"
               xory = 0
               p8 = "y"
            }
            check()
         }
         
         function image9(){
            var box = document.getElementById('input9')
            if(xory == 0){
               box.style.backgroundImage = "url(./1.png)"
               xory = 1
               p9 = "x"
            }else{
               box.style.backgroundImage = "url(./2.png)"
               xory = 0
               p9 = "y"
            }
            check()
         }
         function check(){
             
        if((p1 === "y" && p2 === "y" && p3 === "y") ||
                  (p4 === "y" && p5 === "y" && p6 === "y") ||
                  (p7 === "y" && p8 === "y" && p9 === "y") ||
                  (p1 === "y" && p5 === "y" && p9 === "y") ||
                  (p7 === "y" && p5 === "y" && p3 === "y") ||
                  (p1 === "y" && p4 === "y" && p7 === "y") ||
                  (p2 === "y" && p5 === "y" && p8 === "y") ||
                  (p3 === "y" && p6 === "y" && p9 === "y")){

                  victory.innerHTML = "o win!"
         }
         else if((p1 === "x" && p2 === "x" && p3 === "x") ||
                  (p4 === "x" && p5 === "x" && p6 === "x") ||
                  (p7 === "x" && p8 === "x" && p9 === "x") ||
                  (p1 === "x" && p5 === "x" && p9 === "x") ||
                  (p7 === "x" && p5 === "x" && p3 === "x") ||
                  (p1 === "x" && p4 === "x" && p7 === "x") ||
                  (p2 === "x" && p5 === "x" && p8 === "x") ||
                  (p3 === "x" && p6 === "x" && p9 === "x") ){

                  victory.innerHTML = "x win!"
         }
         else{
            victory.innerHTML = ""
         }
         }