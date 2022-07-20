


const buttonRegion = document.querySelector("#button-region");
const buttonLanguage = document.querySelector("#button-language");
const firstLang = document.querySelector(".first-lang")
const secondLang = document.querySelector(".second-lang")
const spik = document.querySelector(".arrow")

console.log(spik)
const buttonBorderLanuage = ()=>{
    buttonLanguage.removeAttribute("class")
    buttonLanguage.setAttribute("class","lang")   
}
const buttonBorderRegion = ()=>{
    buttonRegion.removeAttribute("class")
    buttonRegion.setAttribute("class","lang")
    spik.setAttribute("id","spik2")
}
buttonRegion.addEventListener("click",()=>{
    buttonRegion.removeAttribute(".lang")
    buttonRegion.setAttribute("class","button-click")
    firstLang.removeAttribute("id")  
})
buttonLanguage.addEventListener("click",()=>{
    buttonRegion.removeAttribute(".lang")
    buttonLanguage.setAttribute("class","button-click")
    secondLang.removeAttribute("id")
})
window.addEventListener("click",(e)=>{
    const percorso = e.path
    const arrayNomeClassi = []
    const arrayId = []
    percorso.forEach(p => {
        console.log(p.id)
        arrayNomeClassi.push(p.className)
        arrayId.push(p.id)
    })
    if(arrayId.indexOf("button-region")>= 0){
        secondLang.setAttribute("id","hide")
        buttonBorderLanuage();
    }else if(arrayId.indexOf("button-language")>= 0){
        firstLang.setAttribute("id","hide")
        buttonBorderRegion();
    }else{
        secondLang.setAttribute("id","hide")
        firstLang.setAttribute("id","hide")
        buttonBorderLanuage();
        buttonBorderRegion();
    }
})

