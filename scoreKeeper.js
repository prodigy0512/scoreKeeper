var b = document.querySelectorAll("button");
var fp = document.querySelector(".firstP");
var sp = document.querySelector(".secondP");
var lim = document.querySelector("input");
var limit1 = document.querySelector(".limit")
var i=1;
var j=1;
f=1;
b[2].addEventListener("click", function(){
    i=j=0;
    sp.textContent="0";
    fp.textContent="0";
    lim.value= 0;   
    limit1.textContent ='';
    fp.classList.remove("fP");
    sp.classList.remove("sP");
})
b[0].addEventListener("click", changeText1);
b[1].addEventListener("click", changeText2);
function changeText1()
    {  
        if(i<=lim.value&&f==1)
        { fp.textContent = String(i);
         i++;
     }
     if((i-1==lim.value)&&(i-1!=0))
        {fp.classList.add("fP"); 
            f=0;
    }
    }
function changeText2()
    {
      
        if(j<=lim.value&&f==1)
        { sp.textContent = String(j);
         j++;
         }
         if((j-1==lim.value)&&(j-1!=0))
         {sp.classList.add("sP"); 
            f=0;
        }
}
lim.addEventListener("click", changeNum);
function changeNum()
{
    limit1.textContent = lim.value;
}
