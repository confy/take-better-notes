function darkMode() { 
    document.querySelector("html").style.background = "#2E3440"
    menus = document.querySelectorAll(".header, .footer, .nav")
    for (i = 0; i < menus.length; i++) {
        menus[i].style.background =  "#4C566A"
    }
    document.querySelector(".content").style.background = "#3B4252"
    document.querySelector(".content textarea").style.background = "#3B4252"
    document.querySelector(".content textarea").style.color = "#E5E9F0"
    buttons = document.querySelectorAll("button")
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.color = "#E5E9F0"
        buttons[i].style.background = "#4C566A"
        buttons[i].style.border = "2px solid #2E3440"
    }

}   