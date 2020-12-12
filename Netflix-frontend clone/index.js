document.getElementById("tab-1").addEventListener("click",()=>{
    document.getElementById("tab-1").classList.add("tab-boder");
    document.getElementById("tab-2").classList.remove("tab-boder");
    document.getElementById("tab-3").classList.remove("tab-boder")
    document.getElementById("tab-1-content").classList.remove("hide");
    document.getElementById("tab-2-content").classList.add("hide");
    document.getElementById("tab-3-content").classList.add("hide");
});
document.getElementById("tab-2").addEventListener("click",()=>{
    
    document.getElementById("tab-2").classList.add("tab-boder");
    document.getElementById("tab-1").classList.remove("tab-boder");
    document.getElementById("tab-3").classList.remove("tab-boder");

   document.getElementById("tab-2-content").classList.remove("hide");
   document.getElementById("tab-1-content").classList.add("hide");
    document.getElementById("tab-3-content").classList.add("hide");
});

document.getElementById("tab-3").addEventListener("click",()=>{
    
    document.getElementById("tab-3").classList.add("tab-boder");
    document.getElementById("tab-1").classList.remove("tab-boder");
    document.getElementById("tab-2").classList.remove("tab-boder");

    document.getElementById("tab-3-content").classList.remove("hide");
    document.getElementById("tab-1-content").classList.add("hide");
    document.getElementById("tab-2-content").classList.add("hide");
});