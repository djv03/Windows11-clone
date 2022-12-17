console.log("script is runnin");

document.querySelector(".windowsonclick").style.opacity="1";
document.querySelector(".bottombar").addEventListener("click",()=>{
    console.log("clicked");
    if (document.querySelector(".windowsonclick img").style.bottom=="-45rem") {
        document.querySelector(".windowsonclick img").style.bottom="4.5rem";

        
    } else {

        document.querySelector(".windowsonclick img").style.bottom="-45rem";
        
    }
   
    
})
