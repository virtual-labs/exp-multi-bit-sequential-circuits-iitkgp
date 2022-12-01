/*Lab:exp_exp_9a_Shift_Register
	File name: ledonoff_exp9a.js
    Author:Prakriti Dhang*/

    
    var clkp;
    
    var qq1;
    var action;
    var s, ds, P0, P1, P2, P3, vcc, gnd;

    function sleep(ms) {
        return new Promise(
          resolve => setTimeout(resolve, ms)
        );
      }
      async function delayedleddisplay() {
        document.getElementById("lon0").style.visibility="visible";
        document.getElementById("loff0").style.visibility="hidden"; 
        await sleep(1500);
        document.getElementById("lon1").style.visibility="visible";
         document.getElementById("loff1").style.visibility="hidden";
       await sleep(1500);
        document.getElementById("lon2").style.visibility="visible";
       document.getElementById("loff2").style.visibility="hidden";
       await sleep(1500);
       document.getElementById("lon3").style.visibility="visible";
      document.getElementById("loff3").style.visibility="hidden";
      await sleep(1500);
      clockstop();
      await sleep(1500);
     
      var image = document.getElementById('b2');		
            if (image.src.match("green")) 
        {
            image.src = "red.JPG";
            document.getElementById('b2r').style.display="block";
            document.getElementById('b2g').style.display="none";
            
            } 
            var image = document.getElementById('b7');		
            if (image.src.match("green")) 
        {
            image.src = "red.JPG";
            document.getElementById('b7r').style.display="block";
            document.getElementById('b7g').style.display="none";
            
            } 
            document.getElementById("lon3").style.visibility="hiddden";
            document.getElementById("lon1").style.visibility="hidden";
            document.getElementById("lon2").style.visibility="hidden";
            document.getElementById("lon0").style.visibility="hidden";
            document.getElementById("loff0").style.visibility="visible";
            document.getElementById("loff1").style.visibility="visible";
            document.getElementById("loff2").style.visibility="visible";
            document.getElementById("loff3").style.visibility="visible";

     /* document.getElementById('clkbs').style.display="none";
      document.getElementById('clkb').style.display="block";
      document.getElementById("clkb2").disabled = false;*/
      }


      function sleep(ms) {
        return new Promise(
          resolve => setTimeout(resolve, ms)
        );
      }
      async function delayedclck2display() {
        await sleep(1000);
        clockstop2();
        await sleep(1000);
            document.getElementById("lon3").style.visibility="hiddden";
            document.getElementById("lon1").style.visibility="hidden";
            document.getElementById("lon2").style.visibility="hidden";
            document.getElementById("lon0").style.visibility="hidden";
            document.getElementById("loff0").style.visibility="visible";
            document.getElementById("loff1").style.visibility="visible";
            document.getElementById("loff2").style.visibility="visible";
            document.getElementById("loff3").style.visibility="visible";
            await sleep(1000);
            var image = document.getElementById('b6');		
            if (image.src.match("green")) 
        {
            image.src = "red.JPG";
            document.getElementById('b6r').style.display="block";
            document.getElementById('b6g').style.display="none";
            
            } 
            
      }
     

    function ledchng(){

        
         s = document.getElementById('b1');  /* S */
         ds = document.getElementById('b2'); /* Ds */
          P0 = document.getElementById('b3');  /* P0 */
          P1 = document.getElementById('b4'); /* P1 */
          P2 = document.getElementById('b5');  /* P2 */
          P3 = document.getElementById('b6'); /* P3 */
         vcc = document.getElementById('b7'); /* VCC */
         gnd = document.getElementById('b8');/* GND */

         if ((ds.src.match("green"))){
            document.getElementById("clkb").disabled = false;
            document.getElementById("clkbs").disabled = false;
            document.getElementById("clkb2").disabled = true;
            document.getElementById("clkbs2").disabled = true;
         }
         if ((s.src.match("green"))){
            document.getElementById("clkb").disabled = true;
            document.getElementById("clkbs").disabled = true;
            document.getElementById("clkb2").disabled = false;
            document.getElementById("clkbs2").disabled = false;
         }


      
         if( (vcc.src.match("green")) &&(s.src.match("green") )){
            /*document.getElementById("b3").onclick = true;
            document.getElementById("b4").onclick = true;
            document.getElementById("b5").onclick = true;
            document.getElementById("b6").onclick = true;*/
         }
       
         if((s.src.match("green"))&& (P1.src.match("green")) && (vcc.src.match("green")) ){
         
            var image = document.getElementById('b3');		
            if (image.src.match("green")) 
        {
            image.src = "red.JPG";
            document.getElementById('b3r').style.display="block";
            document.getElementById('b3g').style.display="none";
            
            } 
        }
        if( (s.src.match("green"))&&(P2.src.match("green")) && (vcc.src.match("green")) ){
        var image = document.getElementById('b4');		
        if (image.src.match("green")) 
    {
        image.src = "red.JPG";
        document.getElementById('b4r').style.display="block";
        document.getElementById('b4g').style.display="none";
        
        } 
        }
        if( (s.src.match("green"))&&(P3.src.match("green")) && (vcc.src.match("green")) ){
        var image = document.getElementById('b5');		
        if (image.src.match("green")) 
    {
        image.src = "red.JPG";
        document.getElementById('b5r').style.display="block";
        document.getElementById('b5g').style.display="none";
        
        } 
        }
        

        if((s.src.match("red")) && (ds.src.match("red")) && (vcc.src.match("green")) && (P3.src.match("red")) && (P2.src.match("red")) && (P1.src.match("red")) && (P0.src.match("red"))  ){
            document.getElementById("lon0").style.visibility="hidden";
            document.getElementById("lon1").style.visibility="hidden";
            document.getElementById("lon2").style.visibility="hidden";
            document.getElementById("lon3").style.visibility="hidden";
           
        
            document.getElementById("loff0").style.visibility="visible";
            document.getElementById("loff1").style.visibility="visible";
            document.getElementById("loff2").style.visibility="visible";
            document.getElementById("loff3").style.visibility="visible";
        }

        if((vcc.src.match("red"))){
            document.getElementById('showalt').style.visibility='visible';
            document.getElementById('v').style.visibility='visible';
           
            document.getElementById('gnd').style.visibility='hidden';
        
            document.getElementById("lon0").style.visibility="hidden";
            document.getElementById("lon1").style.visibility="hidden";
            document.getElementById("lon2").style.visibility="hidden";
            document.getElementById("lon3").style.visibility="hidden";
           
        
            document.getElementById("loff0").style.visibility="visible";
            document.getElementById("loff1").style.visibility="visible";
            document.getElementById("loff2").style.visibility="visible";
            document.getElementById("loff3").style.visibility="visible";
          
            document.getElementById("clkb").disabled = true;
            document.getElementById("clkbs").disabled = true;
            document.getElementById("clkb2").disabled = true;
            document.getElementById("clkbs2").disabled = true;

          /*  document.getElementById("b3").onclick = false;
            document.getElementById("b4").onclick = false;
            document.getElementById("b5").onclick = false;
            document.getElementById("b6").onclick = false;*/
            
        }
        

        
           else if((gnd.src.match("green"))){
                document.getElementById('showalt').style.visibility='visible';
                document.getElementById('v').style.visibility='hidden';
               
                document.getElementById('gnd').style.visibility='visible';
            
                document.getElementById("lon0").style.visibility="hidden";
                document.getElementById("lon1").style.visibility="hidden";
                document.getElementById("lon2").style.visibility="hidden";
                document.getElementById("lon3").style.visibility="hidden";
               
            
                document.getElementById("loff0").style.visibility="visible";
                document.getElementById("loff1").style.visibility="visible";
                document.getElementById("loff2").style.visibility="visible";
                document.getElementById("loff3").style.visibility="visible";
              
            
            }
            else{
                document.getElementById('showalt').style.visibility='hidden';
                document.getElementById('v').style.visibility='hidden';
               
                document.getElementById('gnd').style.visibility='hidden';
            
                /*document.getElementById("lon0").style.visibility="hidden";
                document.getElementById("lon1").style.visibility="hidden";
                document.getElementById("lon2").style.visibility="hidden";
                document.getElementById("lon3").style.visibility="hidden";*/
               
            
                /*document.getElementById("loff0").style.visibility="visible";
                document.getElementById("loff1").style.visibility="visible";
                document.getElementById("loff2").style.visibility="visible";
                document.getElementById("loff3").style.visibility="visible";*/
            }



            if((vcc.src.match("green"))){
                
               /* document.getElementById("clkb").disabled = false;
                document.getElementById("clkbs").disabled = false;
                document.getElementById("clkb2").disabled = false;
                document.getElementById("clkbs2").disabled = false;*/

            }
        }
     
   

    
  
    

    function a1() {
        var image = document.getElementById('b1');	
    
        if (image.src.match("red")) 
    {
        image.src = "green.JPG";
        
     
    // clockpulses1();
        
        } 
    else
    {
        image.src = "red.JPG";
       
        
        // clockpulses0();
        }
    ledchng();
    
    }
    function a2() {
        var image = document.getElementById('b2');		
        if (image.src.match("red")) 
    {
        image.src = "green.JPG";
        
         	
             
        } 
    else
    {
        image.src = "red.JPG";
       
        
        }
        ledchng();
    }
    function a3() {
        var image = document.getElementById('b3');		
        if (image.src.match("red")) 
    {
        image.src = "green.JPG";
      
       
        } 
    else
    {
        image.src = "red.JPG";
       
         
        }
        ledchng();
    }
    function a4() {
        var image = document.getElementById('b4');		
        if (image.src.match("red")) 
    {
        image.src = "green.JPG";
      
        
        } 
    else
    {
        image.src = "red.JPG";
       
         
        }
        ledchng();
    }
    
    function a5() {
        var image = document.getElementById('b5');		
        if (image.src.match("red")) 
    {
        image.src = "green.JPG";
       
         
        } 
    else
    {
        image.src = "red.JPG";
       
        }
        ledchng();
        
    }
    function a6() {
        var image = document.getElementById('b6');		
        if (image.src.match("red")) 
    {
        image.src = "green.JPG";
        
         
        } 
    else
    {
        image.src = "red.JPG";
       
         
        }
        ledchng();
        
    }
    

    function a7() {
        var image = document.getElementById('b7');		
        if (image.src.match("red")) 
    {
        image.src = "green.JPG";
        
         
        } 
    else
    {
        image.src = "red.JPG";
       
         
        }
        ledchng();
        
    }
    function a8() {
        var image = document.getElementById('b8');		
        if (image.src.match("red")) 
    {
        image.src = "green.JPG";
       
         
        } 
    else
    {
        image.src = "red.JPG";
        
         
        }
        ledchng();
        
    }
    function clockstrt() {
        
        document.getElementById('red1').style.display="none";
        document.getElementById('green1').style.display="block";
        document.getElementById('clkbs').style.display="block";
        document.getElementById('clkb').style.display="none";
        //document.getElementById("clkb2").disabled = true;
      // document.getElementById('graphshowsr').style.display="block";
      // plotgraph();
       

        clkp="1";

        if( (ds.src.match("green")) && (vcc.src.match("green")) && (s.src.match("red"))){
            
            delayedleddisplay();
            document.getElementById('plotb1').disabled=false; 
            document.getElementById('plotb2').disabled=true;
            }
            if ((s.src.match("green"))){
                alert ("Apply low voltage to mode control S");
                document.getElementById('red1').style.display="block";
                document.getElementById('green1').style.display="none";
                document.getElementById('clkb').style.display="block";
                document.getElementById('clkbs').style.display="none";
            }
               if ((ds.src.match("red"))){
                alert ("Apply high voltage to Serial input Ds");
                document.getElementById('red1').style.display="block";
                document.getElementById('green1').style.display="none";
                document.getElementById('clkb').style.display="block";
                document.getElementById('clkbs').style.display="none";
               }
        
    }
    function clockstrt2() {
        
        document.getElementById('red2').style.display="none";
        document.getElementById('green2').style.display="block";
        document.getElementById('clkb2').style.display="none";
        document.getElementById('clkbs2').style.display="block";
       
       //document.getElementById('graphshowsr').style.display="block";
      // plotgraphcp2();
       

        clkp="1";
        if ((s.src.match("red"))){
            alert ("Apply high voltage to mode control S");
            document.getElementById('red2').style.display="block";
            document.getElementById('green2').style.display="none";
            document.getElementById('clkb2').style.display="block";
            document.getElementById('clkbs2').style.display="none";
        }
        if ((ds.src.match("green"))){
            alert ("Apply low voltage to Serial input Ds");
            document.getElementById('red2').style.display="block";
            document.getElementById('green2').style.display="none";
            document.getElementById('clkb2').style.display="block";
            document.getElementById('clkbs2').style.display="none";
           }
        if( (s.src.match("green"))&&(P0.src.match("green")) && (vcc.src.match("green")) ){
            document.getElementById("lon0").style.visibility="visible";
            document.getElementById("lon1").style.visibility="hidden";
            document.getElementById("lon2").style.visibility="hidden";
            document.getElementById("lon3").style.visibility="hidden";
            document.getElementById("loff0").style.visibility="hidden";
            document.getElementById("loff1").style.visibility="hidden";
            document.getElementById("loff2").style.visibility="hidden";
            document.getElementById("loff3").style.visibility="hidden";
            
            delayedclck2display();
            document.getElementById('plotb1').disabled=true;
            
       
        }

        if( (s.src.match("green"))&&(P1.src.match("green")) && (vcc.src.match("green")) ){
            document.getElementById("lon1").style.visibility="visible";
            document.getElementById("lon0").style.visibility="hidden";
            document.getElementById("lon2").style.visibility="hidden";
            document.getElementById("lon3").style.visibility="hidden";
            document.getElementById("loff0").style.visibility="hidden";
            document.getElementById("loff1").style.visibility="hidden";
            document.getElementById("loff2").style.visibility="hidden";
            document.getElementById("loff3").style.visibility="hidden";
            delayedclck2display();
            document.getElementById('plotb1').disabled=true;
       
        }
    
       if( (s.src.match("green"))&&(P2.src.match("green")) && (vcc.src.match("green")) ){
            document.getElementById("lon2").style.visibility="visible";
            
            document.getElementById("lon1").style.visibility="hidden";
            document.getElementById("lon0").style.visibility="hidden";
            document.getElementById("lon3").style.visibility="hidden";
            document.getElementById("loff0").style.visibility="hidden";
            document.getElementById("loff1").style.visibility="hidden";
            document.getElementById("loff2").style.visibility="hidden";
            document.getElementById("loff3").style.visibility="hidden";
            delayedclck2display();
            document.getElementById('plotb1').disabled=true;
        
        }
        if( (s.src.match("green"))&&(P3.src.match("green")) && (vcc.src.match("green")) ){
            document.getElementById("lon3").style.visibility="visible";
            document.getElementById("lon1").style.visibility="hidden";
            document.getElementById("lon2").style.visibility="hidden";
            document.getElementById("lon0").style.visibility="hidden";
            document.getElementById("loff0").style.visibility="hidden";
            document.getElementById("loff1").style.visibility="hidden";
            document.getElementById("loff2").style.visibility="hidden";
            document.getElementById("loff3").style.visibility="hidden";
            delayedclck2display();
            document.getElementById('plotb2').disabled=false;
            document.getElementById('plotb1').disabled=true;

            
        }
        
    }
    
    

    
    function clockstop(){
        document.getElementById('red1').style.display="block";
        document.getElementById('green1').style.display="none";
        document.getElementById('clkb').style.display="block";
        document.getElementById('clkbs').style.display="none";
      }
      function clockstop2(){
        document.getElementById('red2').style.display="block";
        document.getElementById('green2').style.display="none";
        document.getElementById('clkb2').style.display="block";
        document.getElementById('clkbs2').style.display="none";
      }

      function graphclose(){
        document.getElementById('graphshowsr').style.display="none";
        
      }

      function graphclose2(){
      
        document.getElementById('graphshowsr2').style.display="none";
      }