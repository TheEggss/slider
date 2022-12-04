const slider = document.querySelector(".slider")
const arrleft = document.querySelector(".left")
const arrright = document.querySelector(".right")
const img = [
    "https://waskiel.pl/wp-content/uploads/2017/09/jak-zrobic-dobre-zdjecie-ustawienia-aparatu.jpg",
    "https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0008/55/e323e9f2939d2b6349c7fd586c67e007f04a6b55.png",
    "https://v.wpimg.pl/Y2Y0OC5qdlM4UjlwGgp7RnsKbSpcU3UQLBJ1YRpAawppSGAuGxc2RjZSIyxSGDgcKVxgexgXPAphAH1wBUdrAWlSeXMNSWAFOFJ7cAcXaFE_BHdtXwE-ECQ"
]

let index = 0

arrleft.addEventListener("click", ()=> {
    index--
    if(index == -1)
        index = img.length-1
    setImage(index, slider, img)
})

arrright.addEventListener("click", ()=> {
    index++
    if(index == img.length)
        index = 0
    setImage(index, slider, img)
})

const setImage = ( index, slider, arr ) => {
    const currentURL = arr[index]
    slider.style.backgroundImage= `url("${currentURL}")`
}

setImage(index, slider, img)