

function malasia() {
    document.querySelector(".nav_menu").style="display:block;"
    document.querySelector(".red_div").style="display:block;"
    document.querySelector(".nav_menu2").style="display:none;"
}

function qora() {
    document.querySelector(".qora").style="display:none;"
    document.querySelector(".nav_language").style="display:none;"
}

function atraction() {
    document.querySelector(".nav_menu2").style="display:block;"
    document.querySelector(".red_div2").style="display:block;"
    document.querySelector(".nav_menu").style="display:none;"
}

function swipCard1() {
    document.querySelector("#swipCard1").style="display: grid;"
    document.querySelector("#swipCard2").style="display: none;"
    document.querySelector("#swipCard3").style="display: none;"
}

function swipCard2() {
    document.querySelector("#swipCard2").style="display: grid;"
    document.querySelector("#swipCard3").style="display: none;"
    document.querySelector("#swipCard1").style="display: none;"
}

function swipCard3() {
    document.querySelector("#swipCard3").style="display: grid;"
    document.querySelector("#swipCard2").style="display: none;"
    document.querySelector("#swipCard1").style="display: none;"
}

function malasia2() {
    document.querySelector(".nav_menu").style="display:none;"
    document.querySelector(".nav_menu2").style="display:none;"
}

function Accordion__Title() {
    document.querySelector("#Accordion_ContentBlock").style="display:grid;"
    document.querySelector("#Accordion_ContentBlock1").style="display:none;"
}

function Accordion__Title1() {
    document.querySelector("#Accordion_ContentBlock1").style="display:grid;"
    document.querySelector("#Accordion_ContentBlock").style="display:none;"
}

function atraction2() {
    document.querySelector(".nav_menu2").style="display:none;"
    document.querySelector(".nav_menu").style="display:none;"
}

function globe_lange() {
    document.querySelector(".nav_language").style="display:flex;"
    document.querySelector(".qora").style="display:flex;"
    document.querySelector(".nav_menu").style="display:none;"
    document.querySelector(".nav_menu2").style="display:none;"
}

function lange_p() {
    document.querySelector("#lan").style="color: rgb(128, 0, 255); border-bottom: 0.125rem solid rgb(128, 0, 255);"
    document.querySelector("#cur").style="color: rgb(68, 68, 68); border-bottom: none;"
    document.querySelector(".nav_langu_for_bot").style="display:grid;"
    document.querySelector(".nav_for_big_h1").style="display:none;"
    document.querySelector(".nav_langu_for_bot2").style="display:none;"
}

function cure_p() {
    document.querySelector(".nav_langu_for_bot").style="display:none;"
    document.querySelector("#cur").style="color: rgb(128, 0, 255); border-bottom: 0.125rem solid rgb(128, 0, 255);"
    document.querySelector("#lan").style="color: rgb(68, 68, 68); border-bottom: none;"
    document.querySelector(".nav_langu_for_bot2").style="display:grid;"
    document.querySelector(".nav_for_big_h1").style="display:flex;"
}

function ModalsPage() {
    document.querySelector(".SunwayModal_big").style="display:block"
}

function close1() {
    document.querySelector(".SunwayModal_big").style="display:none"
}

function nav_madiaList() {
    document.querySelector("#navigation-menu-mobile").style="display:grid;"          
    document.querySelector("#nav_close").style="display:flex;"          
    document.querySelector("#menu_list").style="display:none;"          
}

function nav_close() {
    document.querySelector("#navigation-menu-mobile").style="display:none;"          
    document.querySelector("#nav_close").style="display:none;"          
    document.querySelector("#menu_list").style="display:flex;"          
}

function BookLogin_Close() {
    document.querySelector(".qora2").style="display:none"
    document.querySelector(".minQora2").style="display:none"
}

function SignIn() {
    document.querySelector(".qora2").style="display:block !important;"
    document.querySelector(".minQora2").style="display:block !important;"
}

function qora2() {
    document.querySelector(".qora2").style="display:none !important;"
    document.querySelector(".minQora2").style="display:none !important;"
}

var count1 = localStorage.getItem("count1")
var count2 = localStorage.getItem("count2")
var count3 = localStorage.getItem("count3")
var count2_3 = localStorage.getItem("count2_2")
var count2_3 = localStorage.getItem("count2_3")
var count2_3 = localStorage.getItem("count3_3")


var Price1 = localStorage.getItem("Price1")
var Price2 = localStorage.getItem("Price2")
var Price3 = localStorage.getItem("Price3")


function select_language(key) {
    document.querySelector(".nav_language").style="display:none"
    document.querySelector(".qora").style="display:none"
    if (key == 0) {
        document.querySelector(".navbar_lang").innerHTML="English"
        document.querySelector(".for_enlish").classList.add("language_active")
        document.querySelector(".for_indonesian").classList.remove("language_active")
    }
    if (key == 1) {
        document.querySelector(".navbar_lang").innerHTML="Malaysian"
        document.querySelector(".for_enlish").classList.remove("language_active")
        document.querySelector(".for_indonesian").classList.add("language_active")
    }
}

function select_val(key) {
    document.querySelector(".nav_language").style="display:none"
    document.querySelector(".qora").style="display:none"
    if (key == 0) {
        document.querySelector(".for_dollar").classList.add("valyuta_active")
        document.querySelector(".for_rupi").classList.remove("valyuta_active")
    }
    if (key == 1) {
        document.querySelector(".for_dollar").classList.remove("valyuta_active")
        document.querySelector(".for_rupi").classList.add("valyuta_active")
    }
}

if (sessionStorage.getItem("selectedValyut")=="IDR") {
        document.querySelector(".for_dollar").classList.remove("valyuta_active")
        document.querySelector(".for_rupi").classList.add("valyuta_active")

        document.querySelector(".langs_color10").classList.add('lang_color_active')
        document.querySelector(".for_circle10").classList.add('circle_active')
        document.querySelector(".in_for_circle10").classList.add('in_circle_active')
        document.querySelector(".langs_color9").classList.remove('lang_color_active')
        document.querySelector(".for_circle9").classList.remove('circle_active')
        document.querySelector(".in_for_circle9").classList.remove('in_circle_active')
}else{
        document.querySelector(".for_dollar").classList.add("valyuta_active")
        document.querySelector(".for_rupi").classList.remove("valyuta_active")

        document.querySelector(".langs_color10").classList.remove('lang_color_active')
        document.querySelector(".for_circle10").classList.remove('circle_active')
        document.querySelector(".in_for_circle10").classList.remove('in_circle_active')
        document.querySelector(".langs_color9").classList.add('lang_color_active')
        document.querySelector(".for_circle9").classList.add('circle_active')
        document.querySelector(".in_for_circle9").classList.add('in_circle_active')
}

if (sessionStorage.getItem("selectedLanguage")=="indonesian") {
    document.querySelector(".navbar_lang").innerHTML="Malaysian"
    document.querySelector(".for_enlish").classList.remove("language_active")
    document.querySelector(".for_indonesian").classList.add("language_active") 

    document.querySelector(".langs_color8").classList.add('lang_color_active')
    document.querySelector(".for_circle8").classList.add('circle_active')
    document.querySelector(".in_for_circle8").classList.add('in_circle_active')
    document.querySelector(".langs_color1").classList.remove('lang_color_active')
    document.querySelector(".for_circle1").classList.remove('circle_active')
    document.querySelector(".in_for_circle1").classList.remove('in_circle_active')
    }else{
        document.querySelector(".navbar_lang").innerHTML="English"
        document.querySelector(".for_enlish").classList.add("language_active")
        document.querySelector(".for_indonesian").classList.remove("language_active")

        document.querySelector(".langs_color8").classList.remove('lang_color_active')
    document.querySelector(".for_circle8").classList.remove('circle_active')
    document.querySelector(".in_for_circle8").classList.remove('in_circle_active')
    document.querySelector(".langs_color1").classList.add('lang_color_active')
    document.querySelector(".for_circle1").classList.add('circle_active')
    document.querySelector(".in_for_circle1").classList.add('in_circle_active')
    }


// function StyledButton(key) {
    

    
    
    

    

//     if (key == 4) {
//         localStorage.setItem("count3",3)
//         localStorage.setItem("Price1", 70)
//         localStorage.setItem("Discount4", 58)
//         localStorage.setItem("Discount1", 80)
//         localStorage.setItem("Discount2", 68)
//         document.querySelector("#iYmuLF5").style="background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
//         document.querySelector("#iYmuLF6").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
//     }
    
//     if (key == 5) {
//         localStorage.setItem("count3",3)
//         localStorage.setItem("Price1", 70)
//         localStorage.setItem("Discount4", 58)
//         localStorage.setItem("Discount1", 80)
//         localStorage.setItem("Discount2", 68)
//         document.querySelector("#iYmuLF6").style="background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
//         document.querySelector("#iYmuLF5").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
//     }

//     if (key == 6) {
//         localStorage.setItem("count2_2",2)
//         localStorage.setItem("Price1", 182)
//         localStorage.setItem("Discount4", 169)
//         document.querySelector("#iYmuLF7").style="background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
//         document.querySelector("#iYmuLF8").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
//     }

//     if (key == 7) {
//         localStorage.setItem("count2_3",2);
//         localStorage.setItem("Price1", 200);
//         localStorage.setItem("Discount4", 180);
//         document.querySelector("#iYmuLF8").style="background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
//         document.querySelector("#iYmuLF7").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//     }

//     if (key == 8) {
//         localStorage.setItem("count3",3);
//         localStorage.setItem("Price1", 49);
//         localStorage.setItem("Discount4", 39)
//         localStorage.setItem("Discount1", 55)
//         localStorage.setItem("Discount2", 45)
//         document.querySelector("#iYmuLF9").style="background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
//         document.querySelector("#iYmuLF10").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//         document.querySelector("#iYmuLF11").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//         document.querySelector("#iYmuLF12").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//     }

//     if (key == 9) {
//         localStorage.setItem("count3",3);
//         localStorage.setItem("Price1", 68);
//         localStorage.setItem("Discount4", 58)
//         localStorage.setItem("Discount1", 79)
//         localStorage.setItem("Discount2", 69)
//         document.querySelector("#iYmuLF10").style="background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
//         document.querySelector("#iYmuLF9").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//         document.querySelector("#iYmuLF11").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//         document.querySelector("#iYmuLF12").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//     }

//     if (key == 10) {
//         localStorage.setItem("count1",1);
//         localStorage.setItem("Price1", 176);
//         localStorage.setItem("Discount1", 200)
//         localStorage.setItem("Titles1", "Family (2 adults + 2 children)")
//         localStorage.setItem("discraption1", "Adults 13 years and above and Child between 3 - 12 years")
//         document.querySelector("#iYmuLF11").style="background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
//         document.querySelector("#iYmuLF12").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//         document.querySelector("#iYmuLF10").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//         document.querySelector("#iYmuLF9").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//     }

//     if (key == 11) {
//         localStorage.setItem("count1",1);
//         localStorage.setItem("Price1", 240);
//         localStorage.setItem("Discount1", 296)
//         localStorage.setItem("Titles1", "Family (2 adults + 2 children)")
//         localStorage.setItem("discraption1", "Adults 13 years and above and Child between 3 - 12 years")
//         document.querySelector("#iYmuLF12").style="background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
//         document.querySelector("#iYmuLF11").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//         document.querySelector("#iYmuLF10").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//         document.querySelector("#iYmuLF9").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//     }

//     if (key == 12) {
//         localStorage.setItem("count3_3",3);
//         localStorage.setItem("Price1", 79);
//         localStorage.setItem("Discount1", 85)       
//         localStorage.setItem("Discount4", 68.5)
//         localStorage.setItem("Discount2", 75)       
//         localStorage.setItem("Discount5", 59.5)
//         localStorage.setItem("Discount3", 65)  
//         localStorage.setItem("TotalDiscount", 9)  
//         localStorage.setItem("TotalDiscount2", 19)  
//         document.querySelector("#iYmuLF13").style="background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
//         document.querySelector("#iYmuLF14").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//     }

//     if (key == 13) {
//         localStorage.setItem("count1",1);
//         localStorage.setItem("Price1", 240);
//         localStorage.setItem("Discount1", 296)
//         localStorage.setItem("Titles1", "Family (2 adults + 2 children)")
//         localStorage.setItem("discraption1", "Adults 13 years and above and Child between 3 - 12 years")
//         document.querySelector("#iYmuLF14").style="background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
//         document.querySelector("#iYmuLF13").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//     }

//     if (key == 14) {
//         localStorage.setItem("count2_3",2);
//         localStorage.setItem("Price1", 135);
//         localStorage.setItem("Discount1", 154)
//         localStorage.setItem("Discount4", 121);
//         localStorage.setItem("Discount2", 139)
//         document.querySelector("#iYmuLF15").style="background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
//         document.querySelector("#iYmuLF16").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//     }

//     if (key == 15) {
//         localStorage.setItem("count3_3",3);
//         localStorage.setItem("Price1", 120);
//         localStorage.setItem("Discount1", 129)       
//         localStorage.setItem("Discount4", 110)
//         localStorage.setItem("Discount2", 119)       
//         localStorage.setItem("Discount5", 80)
//         localStorage.setItem("Discount3", 99)  
//         localStorage.setItem("TotalDiscount", 9)  
//         localStorage.setItem("TotalDiscount2", 9)  
//         document.querySelector("#iYmuLF16").style="background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
//         document.querySelector("#iYmuLF15").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//     }

//     if (key == 16) {
//         localStorage.setItem("count3",3);
//         localStorage.setItem("Price1", 68);
//         localStorage.setItem("Discount4", 58)
//         localStorage.setItem("Discount1", 79)
//         localStorage.setItem("Discount2", 69)
//         document.querySelector("#iYmuLF10").style="background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
//         document.querySelector("#iYmuLF9").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//         document.querySelector("#iYmuLF11").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//         document.querySelector("#iYmuLF12").style="background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
//     }

//     document.querySelector("#selectScreen").style="display:grid;"
//     document.querySelector("#tourSelectionBar").style="display:block;"

// }


function Promo() {
    document.querySelector("#PromoCode").style="display:block;"
}

function select_lang(key) {
    document.querySelector(".for_media_navbar").style="bottom: -100vh"
    document.querySelector(".for_media_black").style="display: none"
    if (key==0) {
        document.querySelector(".for_circle1").classList.add('circle_active')
        document.querySelector(".in_for_circle1").classList.add('in_circle_active')
        document.querySelector(".langs_color1").classList.add('lang_color_active')
        document.querySelector(".for_circle8").classList.remove('circle_active')
        document.querySelector(".in_for_circle8").classList.remove('in_circle_active')
        document.querySelector(".langs_color8").classList.remove('lang_color_active')
    }

    // if (key==1) {
    //     for (let i = 0; i < document.querySelectorAll(".for_circle").length; i++) {
    //         document.querySelectorAll(".for_circle")[i].classList.remove("circle_active")
    //     }
    //     for (let i = 0; i < document.querySelectorAll(".for_circle").length; i++) {
    //         document.querySelectorAll(".in_for_circle")[i].classList.remove("in_circle_active")
    //     }
    //     for (let i = 0; i < document.querySelectorAll(".langs_colors").length; i++) {
    //         document.querySelectorAll(".langs_colors")[i].classList.remove("lang_color_active")
    //     }
    //     document.querySelector(".for_circle2").classList.add('circle_active')
    //     document.querySelector(".in_for_circle2").classList.add('in_circle_active')
    //     document.querySelector(".langs_color2").classList.add('lang_color_active')
    // }

    // if (key==2) {
    //     for (let i = 0; i < document.querySelectorAll(".for_circle").length; i++) {
    //         document.querySelectorAll(".for_circle")[i].classList.remove("circle_active")
    //     }
    //     for (let i = 0; i < document.querySelectorAll(".for_circle").length; i++) {
    //         document.querySelectorAll(".in_for_circle")[i].classList.remove("in_circle_active")
    //     }
    //     for (let i = 0; i < document.querySelectorAll(".langs_colors").length; i++) {
    //         document.querySelectorAll(".langs_colors")[i].classList.remove("lang_color_active")
    //     }
    //     document.querySelector(".for_circle3").classList.add('circle_active')
    //     document.querySelector(".in_for_circle3").classList.add('in_circle_active')
    //     document.querySelector(".langs_color3").classList.add('lang_color_active')
    // }

    // if (key==3) {
    //     for (let i = 0; i < document.querySelectorAll(".for_circle").length; i++) {
    //         document.querySelectorAll(".for_circle")[i].classList.remove("circle_active")
    //     }
    //     for (let i = 0; i < document.querySelectorAll(".for_circle").length; i++) {
    //         document.querySelectorAll(".in_for_circle")[i].classList.remove("in_circle_active")
    //     }
    //     for (let i = 0; i < document.querySelectorAll(".langs_colors").length; i++) {
    //         document.querySelectorAll(".langs_colors")[i].classList.remove("lang_color_active")
    //     }
    //     document.querySelector(".for_circle4").classList.add('circle_active')
    //     document.querySelector(".in_for_circle4").classList.add('in_circle_active')
    //     document.querySelector(".langs_color4").classList.add('lang_color_active')
    // }

    // if (key==4) {
    //     for (let i = 0; i < document.querySelectorAll(".for_circle").length; i++) {
    //         document.querySelectorAll(".for_circle")[i].classList.remove("circle_active")
    //     }
    //     for (let i = 0; i < document.querySelectorAll(".for_circle").length; i++) {
    //         document.querySelectorAll(".in_for_circle")[i].classList.remove("in_circle_active")
    //     }
    //     for (let i = 0; i < document.querySelectorAll(".langs_colors").length; i++) {
    //         document.querySelectorAll(".langs_colors")[i].classList.remove("lang_color_active")
    //     }
    //     document.querySelector(".for_circle5").classList.add('circle_active')
    //     document.querySelector(".in_for_circle5").classList.add('in_circle_active')
    //     document.querySelector(".langs_color5").classList.add('lang_color_active')
    // }

    // if (key==5) {
    //     for (let i = 0; i < document.querySelectorAll(".for_circle").length; i++) {
    //         document.querySelectorAll(".for_circle")[i].classList.remove("circle_active")
    //     }
    //     for (let i = 0; i < document.querySelectorAll(".for_circle").length; i++) {
    //         document.querySelectorAll(".in_for_circle")[i].classList.remove("in_circle_active")
    //     }
    //     for (let i = 0; i < document.querySelectorAll(".langs_colors").length; i++) {
    //         document.querySelectorAll(".langs_colors")[i].classList.remove("lang_color_active")
    //     }
    //     document.querySelector(".for_circle6").classList.add('circle_active')
    //     document.querySelector(".in_for_circle6").classList.add('in_circle_active')
    //     document.querySelector(".langs_color6").classList.add('lang_color_active')
    // }

    // if (key==6) {
    //     for (let i = 0; i < document.querySelectorAll(".for_circle").length; i++) {
    //         document.querySelectorAll(".for_circle")[i].classList.remove("circle_active")
    //     }
    //     for (let i = 0; i < document.querySelectorAll(".for_circle").length; i++) {
    //         document.querySelectorAll(".in_for_circle")[i].classList.remove("in_circle_active")
    //     }
    //     for (let i = 0; i < document.querySelectorAll(".langs_colors").length; i++) {
    //         document.querySelectorAll(".langs_colors")[i].classList.remove("lang_color_active")
    //     }
    //     document.querySelector(".for_circle7").classList.add('circle_active')
    //     document.querySelector(".in_for_circle7").classList.add('in_circle_active')
    //     document.querySelector(".langs_color7").classList.add('lang_color_active')
    // }

    if (key==7) {
        document.querySelector(".for_circle1").classList.remove('circle_active')
        document.querySelector(".in_for_circle1").classList.remove('in_circle_active')
        document.querySelector(".langs_color1").classList.remove('lang_color_active')
        document.querySelector(".for_circle8").classList.add('circle_active')
        document.querySelector(".in_for_circle8").classList.add('in_circle_active')
        document.querySelector(".langs_color8").classList.add('lang_color_active')
    }

    if (key == 8) {
        document.querySelector(".for_circle9").classList.add('circle_active')
        document.querySelector(".in_for_circle9").classList.add('in_circle_active')
        document.querySelector(".langs_color9").classList.add('lang_color_active')
        document.querySelector(".for_circle10").classList.remove('circle_active')
        document.querySelector(".in_for_circle10").classList.remove('in_circle_active')
        document.querySelector(".langs_color10").classList.remove('lang_color_active')
    }

    if (key == 9) {
        document.querySelector(".for_circle9").classList.remove('circle_active')
        document.querySelector(".in_for_circle9").classList.remove('in_circle_active')
        document.querySelector(".langs_color9").classList.remove('lang_color_active')
        document.querySelector(".for_circle10").classList.add('circle_active')
        document.querySelector(".in_for_circle10").classList.add('in_circle_active')
        document.querySelector(".langs_color10").classList.add('lang_color_active')
    }
}

function clicks_menu() {
    document.querySelector(".for_media_navbar").style="bottom: 0"
    document.querySelector(".for_media_black").style="display: flex"
}
function exits_menu() {
    document.querySelector(".for_media_navbar").style="bottom: -100vh"
    document.querySelector(".for_media_black").style="display: none"
}

function selects_media(key) {
    if (key == 0) {
        document.querySelector(".media_first").classList.add("media_active")
        document.querySelector(".media_second").classList.remove("media_active")
        document.querySelector(".languageses").style="display:block"
        document.querySelector(".valyutas").style="display:none"
    }
    if (key == 1) {
        document.querySelector(".media_first").classList.remove("media_active")
        document.querySelector(".media_second").classList.add("media_active")
        document.querySelector(".languageses").style="display:none"
        document.querySelector(".valyutas").style="display:block"
    }
}





