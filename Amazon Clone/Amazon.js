

let barsall = document.getElementById("bars-all");
let boptions = document.getElementById("b-options");

barsall.onclick = function show()
{   
   if (boptions.style.display==="none")
    {boptions.style.display="flex";} 
   else {
    boptions.style.display="none";
   }

}

// barsall.onclick = function ()
// {   
//    if (boptions.style.display="flex")
//     {boptions.style.display="none";
//     } 

// }