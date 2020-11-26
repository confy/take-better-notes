const theme = {
    html: ["#F0F0EE", "#2E3440"],
    menus: ["#293c81", "#4C566A"],
    content: ["#c8c8cf", "#3B4252"],
    textAreaBg: ["#F0F0EE", "#3B4252"],
    textAreaTxt: ["#000", "#E5E9F0"],
    btnBg: ["#F0F0EE", "#4C566A"],
    btnTxt: ["#000", "#E5E9F0"],
    btnBorder: ["2px solid #203975", "2px solid #2E3440"],
}


let btnTheme = document.querySelector("#changeTheme")
let count = 0
btnTheme.addEventListener("click", () => {
    count++
    changeTheme(count % 2)
})
function changeTheme(themeNo) { 
    document.querySelector("html").style.background = theme["html"][themeNo]
    menus = document.querySelectorAll(".header, .footer, .nav")
    for (i = 0; i < menus.length; i++) {
        menus[i].style.background =  theme["menus"][themeNo]
    }
    document.querySelector(".content").style.background = theme["content"][themeNo]
    document.querySelector(".content textarea").style.background = theme["textAreaBg"][themeNo]
    document.querySelector(".content textarea").style.color = theme["textAreaTxt"][themeNo]
    buttons = document.querySelectorAll("button")
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.color = theme["btnTxt"][themeNo]
        buttons[i].style.background = theme["btnBg"][themeNo]
        buttons[i].style.border = theme["btnBorder"][themeNo]
    }

}   