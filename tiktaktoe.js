var next="X";
var a=0;
function turn()
        {
           if(next=="X")
            {  next ='O';return next; }
            else
             {    next='X';  return next;}
        }
function play() {
    a=1;
    // document.getElementById("").
    document.getElementById("chance").innerHTML=next+" Turn";
}
function my_function(ids)
{   
    
    if(a==1)
    {
      if(turn()=='O')
         {  document.getElementById(ids).innerHTML="X";
         document.getElementById("chance").innerHTML=next+" Turns";
         work_work();
        }
      else      
      {   document.getElementById(ids).innerHTML="O"; 
        document.getElementById("chance").innerHTML=next+" Turns";
        work_work();
        
      }

      function work_work()
      {

      
        var b=0;
         var a1=document.getElementById("sq1").textContent;
         var a2=document.getElementById("sq2").textContent;
         var a3=document.getElementById("sq3").textContent;
         var a4=document.getElementById("sq4").textContent;
         var a5=document.getElementById("sq5").textContent;
         var a6=document.getElementById("sq6").textContent;
         var a7=document.getElementById("sq7").textContent;
         var a8=document.getElementById("sq8").textContent;
         var a9=document.getElementById("sq9").textContent;
        // 1st
        document.getElementById(ids).disabled=true;
         if(a1=='X' && a2=='X' && a3=='X') 
         {
            document.getElementById("chance").innerHTML="X Wins";b=1;
         }
         if(a4=='X' && a5=='X' && a6=='X') 
         {
            document.getElementById("chance").innerHTML="X Wins";b=1;  
         }
         if(a7=='X' && a8=='X' && a9=='X') 
         {
            document.getElementById("chance").innerHTML="X Wins";b=1;
         }
        //    2nd
         if(a1=='O' && a2=='O' && a3=='O') 
         {
          document.getElementById("chance").innerHTML="O Wins";  b=1;
         }
          if(a4=='O' && a5=='O' && a6=='O') 
         {
           document.getElementById("chance").innerHTML="O Wins"; b=1;
         }
          if(a7=='O' && a8=='O' && a9=='O') 
         {
          document.getElementById("chance").innerHTML="O Wins";  b=1;
         }
        // 3rd 
          if(a1=='X' && a4=='X' && a7=='X') 
         {
           document.getElementById("chance").innerHTML="X Wins"; b=1;
         }
          if(a2=='X' && a5=='X' && a8=='X') 
         {
          document.getElementById("chance").innerHTML="X Wins";  b=1;
         }    
           if(a3=='X' && a6=='X' && a9=='X') 
         {
           document.getElementById("chance").innerHTML="X Wins"; b=1;
         }
        //  4th
         if(a1=='O' && a4=='O' && a7=='O') 
         {
           document.getElementById("chance").innerHTML="O Wins"; b=1;
         }
          if(a2=='O' && a5=='O' && a8=='O') 
         {
           document.getElementById("chance").innerHTML="O Wins"; b=1;
         }
           if(a3=='O' && a6=='O' && a9=='O') 
         {
           document.getElementById("chance").innerHTML="O Wins"; b=1;
         }
        //  5th
         if(a1=='X' && a5=='X' && a9=='X') 
         {
           document.getElementById("chance").innerHTML="X Wins"; b=1;
         }
           if(a3=='X' && a5=='X' && a9=='X') 
         {
           document.getElementById("chance").innerHTML="X Wins"; b=1;
         }
        //  6th
        
         if(a1=='O' && a5=='O' && a9=='O') 
         {
           document.getElementById("chance").innerHTML="O Wins"; b=1;
         }
          if(a3=='O' && a5=='O' && a7=='O') 
         {
           document.getElementById("chance").innerHTML="O Wins"; b=1;
         }
           if(a1=='O' && a3=='O' && a5=='O')
         {
            document.getElementById("chance").innerHTML="O Wins"; b=1;
         }
          if(a1=='X' && a3=='X' && a5=='X')
         {
            document.getElementById("chance").innerHTML="X Wins"; b=1;
         }
           if(a7=='X' && a9=='X' && a5=='X')
         {
            document.getElementById("chance").innerHTML="X Wins"; b=1;
         }
          if(a7=='O' && a9=='O' && a5=='O')
         {
            document.getElementById("chance").innerHTML="O Wins"; b=1;
         }

         if(b==1)
       {
        document.getElementById("playagain").innerHTML="Play Again";
         document.getElementById("playagain").disabled=false;
         set();
        }

         if(a1!='-'&&a2!='-'&&a3!='-'&&a4!='-'&&a5!='-'&&a6!='-'&&a7!='-'&&a8!='-'&&a9!='-' && b!=1)
        {
        document.getElementById("chance").innerHTML="Matchdraw";
        
        }  

        document.getElementById("Playagain").innerHTML=""   

      
             document.getElementById(ids).disabled=true;
       }

        
    }
  
    else
        {
            alert("Press the Play Button");
        }
}     

function reset()
{
    document.getElementById("sq1").innerHTML="-";
    document.getElementById("sq2").innerHTML="-";
    document.getElementById("sq3").innerHTML="-";
    document.getElementById("sq4").innerHTML="-";
    document.getElementById("sq5").innerHTML="-";
    document.getElementById("sq6").innerHTML="-";
    document.getElementById("sq7").innerHTML="-";
    document.getElementById("sq8").innerHTML="-";
    document.getElementById("sq9").innerHTML="-";

    document.getElementById("chance").innerHTML="Play";
    document.getElementById("playagain").innerHTML="";    
    // document.getElementById("play").innerHTML="";    

    document.getElementById("sq1").disabled=false;
    document.getElementById("sq2").disabled=false;
    document.getElementById("sq3").disabled=false;

    document.getElementById("sq4").disabled=false;
    document.getElementById("sq5").disabled=false;
    document.getElementById("sq6").disabled=false;
    document.getElementById("sq7").disabled=false;
    document.getElementById("sq8").disabled=false;
    document.getElementById("sq9").disabled=false;
    return a=0;
}
function set()
{
    document.getElementById("sq1").disabled=true;
    document.getElementById("sq2").disabled=true;
    document.getElementById("sq3").disabled=true;

    document.getElementById("sq4").disabled=true;
    document.getElementById("sq5").disabled=true;
    document.getElementById("sq6").disabled=true;
    
    document.getElementById("sq7").disabled=true;
    document.getElementById("sq8").disabled=true;
    document.getElementById("sq9").disabled=true;
}
