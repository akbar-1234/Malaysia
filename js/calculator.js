
var for_plus_1 = parseInt(localStorage.getItem("Count1_1")) || 0;;
var for_plus_2 = parseInt(localStorage.getItem("Count1_2")) || 0;
var for_plus_4 = parseInt(localStorage.getItem("Count1_3")) || 0;
var for_plus_6 = parseInt(localStorage.getItem("Count1_4")) || 0;

var Title1_1 = localStorage.getItem("Title1_1") || "Adult";
var Title1_2 = localStorage.getItem("Title1_2") || "Senior";
var Title1_3 = localStorage.getItem("Title1_3") || "Child";

var Title1_4 = localStorage.getItem("Title1_4") || "";

var Discount1 = localStorage.getItem("Discount1");
var Discount2 = localStorage.getItem("Discount2");
var Discount3 = localStorage.getItem("Discount3");
var Discount4 = localStorage.getItem("Discount4");

var Discount5 = localStorage.getItem("Discount5");
var Discount6 = localStorage.getItem("Discount6");
var Discount7 = localStorage.getItem("Discount7");

var AllPrice = localStorage.getItem("AllPrice");

if (!localStorage.getItem("Count1_1")) {
    localStorage.setItem("Count1_1",1)
}
localStorage.setItem("TotalPrice", (localStorage.getItem("Count1_1")*localStorage.getItem("Price1")).toFixed(2))

document.querySelector(".for_titles_plus").innerHTML=localStorage.getItem("tickets_title")

var element = document.querySelector(".for_titles_plus");
if (element && element.innerHTML.length > 40) {
    var a = element.innerHTML.slice(0, 40);
    element.innerHTML = a + "...";  
}

// var allDiscount = localStorage.getItem("allDiscount"); 

var TotalDiscount = localStorage.getItem("TotalDiscount"); 
var TotalDiscount2 = localStorage.getItem("TotalDiscount2"); 

var Titles1 = localStorage.getItem("Titles1");
var Titles2 = localStorage.getItem("Titles2");
var Titles3 = localStorage.getItem("Titles3");
var Titles4 = localStorage.getItem("Titles4");

var discraption1 = localStorage.getItem("discraption1");
var discraption1 = localStorage.getItem("discraption2");
var discraption1 = localStorage.getItem("discraption3");
var discraption1 = localStorage.getItem("discraption4");

var Price1 = localStorage.getItem("Price1");
var Price2 = localStorage.getItem("Price2");
var Price3 = localStorage.getItem("Price3");

var Count1_1 = localStorage.getItem("Count1_1");
var Count1_2 = localStorage.getItem("Count1_2");
var Count1_3 = localStorage.getItem("Count1_3");





if (localStorage.getItem("count1")==1) {
    for (let i = 0; i < document.querySelectorAll("#TotalPrice").length; i++) {
        document.querySelectorAll("#TotalPrice")[i].innerHTML=localStorage.getItem("TotalPrice")
    }

  document.querySelector("#for_calculator").innerHTML=`
  <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">${localStorage.getItem("Titles1")}</p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">${localStorage.getItem("discraption1")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_1" onclick="for_minus(0)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_1" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(0)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice">${localStorage.getItem("Count1_1")*localStorage.getItem("Price1")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount1">${localStorage.getItem("Discount1")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  `
  if (sessionStorage.getItem("selectedValyut")=="USD") {
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="$&nbsp;"
    }
}else{
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="MYR&nbsp;"
    }
}
}

if (localStorage.getItem("count1_1")==1) {
    for (let i = 0; i < document.querySelectorAll("#TotalPrice").length; i++) {
        document.querySelectorAll("#TotalPrice")[i].innerHTML=localStorage.getItem("TotalPrice")
    }
  document.querySelector("#for_calculator").innerHTML=`
  <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">${localStorage.getItem("Titles1")}</p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">${localStorage.getItem("discraption1")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_1" onclick="for_minus(0)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_1" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(0)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice">${localStorage.getItem("Count1_1")*localStorage.getItem("Price1")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  `
  if (sessionStorage.getItem("selectedValyut")=="USD") {
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="$&nbsp;"
    }
}else{
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="MYR&nbsp;"
    }
}
}

if (localStorage.getItem("count2")==2) {
    for (let i = 0; i < document.querySelectorAll("#TotalPrice").length; i++) {
        document.querySelectorAll("#TotalPrice")[i].innerHTML=localStorage.getItem("TotalPrice")
    }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice3").length; i++) {
        document.querySelectorAll("#TotalPrice3")[i].innerHTML=localStorage.getItem("TotalPrice3")
    }
  document.querySelector("#for_calculator").innerHTML=`
  <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Adult
                                            </p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">13 to 59
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_1" onclick="for_minus(0)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_1" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(0)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice">${localStorage.getItem("Count1_1")*localStorage.getItem("Price1")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount1">${localStorage.getItem("Discount1")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Child</p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">13 to 59
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_3" onclick="for_minus(2)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_3" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(2)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice3">0</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount1">${localStorage.getItem("Discount1")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  `
  if (sessionStorage.getItem("selectedValyut")=="USD") {
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="$&nbsp;"
    }
}else{
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="MYR&nbsp;"
    }
}
}

if (localStorage.getItem("count3")==3) {
    for (let i = 0; i < document.querySelectorAll("#TotalPrice").length; i++) {
        document.querySelectorAll("#TotalPrice")[i].innerHTML=localStorage.getItem("TotalPrice")
        }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice2").length; i++) {
        document.querySelectorAll("#TotalPrice2")[i].innerHTML=localStorage.getItem("TotalPrice2")
        }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice3").length; i++) {
        document.querySelectorAll("#TotalPrice3")[i].innerHTML=localStorage.getItem("TotalPrice3")
        }
                document.querySelector("#AllPrice").innerHTML=(localStorage.getItem("TotalPrice")*1+localStorage.getItem("TotalPrice2")*1+localStorage.getItem("TotalPrice3")*1+localStorage.getItem("TotalPrice4")*1).toFixed(2);
            
  document.querySelector("#for_calculator").innerHTML=`
  <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Adult
                                            </p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">13 to 59
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_1" onclick="for_minus(0)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_1" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(0)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice">${localStorage.getItem("Count1_1")*localStorage.getItem("Price1")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount1">${localStorage.getItem("Discount1")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Senior
                                            </p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">60 to 99
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_2" onclick="for_minus(1)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_2" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(1)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#9F9F9F" class="TextBlock__Text-sc-hd2jvz-0 jxSnNL block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice2">${localStorage.getItem("Count1_2")*localStorage.getItem("Discount4")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount2">${localStorage.getItem("Discount2")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Child
                                            </p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">1 to 12
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_3" onclick="for_minus(2)" class="action-handle" data-qa-marker="decrement-button" disabled=""
                                                aria-disabled="true" aria-label="Decrease value"><svg width="32"
                                                    height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_3" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(2)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#9F9F9F" class="TextBlock__Text-sc-hd2jvz-0 jxSnNL block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice3">${localStorage.getItem("Count1_3")*localStorage.getItem("Discount4")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount3">${localStorage.getItem("Discount2")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  `
  if (sessionStorage.getItem("selectedValyut")=="USD") {
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="$&nbsp;"
    }
}else{
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="MYR&nbsp;"
    }
}
}

if (localStorage.getItem("count1_3")==3) {
    for (let i = 0; i < document.querySelectorAll("#TotalPrice").length; i++) {
        document.querySelectorAll("#TotalPrice")[i].innerHTML=localStorage.getItem("TotalPrice")
        }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice2").length; i++) {
        document.querySelectorAll("#TotalPrice2")[i].innerHTML=localStorage.getItem("TotalPrice3")
        }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice3").length; i++) {
        document.querySelectorAll("#TotalPrice3")[i].innerHTML=localStorage.getItem("TotalPrice3")
        }
  document.querySelector("#for_calculator").innerHTML=`
  <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Adult
                                            </p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">13 to 59
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_1" onclick="for_minus(0)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_1" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(0)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice">${localStorage.getItem("Count1_1")*localStorage.getItem("Price1")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Senior
                                            </p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">60 to 99
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_2" onclick="for_minus(1)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_2" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(1)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#9F9F9F" class="TextBlock__Text-sc-hd2jvz-0 jxSnNL block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice2">${localStorage.getItem("Count1_2")*localStorage.getItem("Discount4")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Child
                                            </p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">1 to 12
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_3" onclick="for_minus(2)" class="action-handle" data-qa-marker="decrement-button" disabled=""
                                                aria-disabled="true" aria-label="Decrease value"><svg width="32"
                                                    height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_3" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(2)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#9F9F9F" class="TextBlock__Text-sc-hd2jvz-0 jxSnNL block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice3">${localStorage.getItem("Count1_3")*localStorage.getItem("Discount4")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  `
  if (sessionStorage.getItem("selectedValyut")=="USD") {
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="$&nbsp;"
    }
}else{
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="MYR&nbsp;"
    }
}
}

if (localStorage.getItem("count2_2")==2) {
    for (let i = 0; i < document.querySelectorAll("#TotalPrice").length; i++) {
        document.querySelectorAll("#TotalPrice")[i].innerHTML=localStorage.getItem("TotalPrice")
    }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice3").length; i++) {
        document.querySelectorAll("#TotalPrice3")[i].innerHTML=localStorage.getItem("TotalPrice3")
    }
  document.querySelector("#for_calculator").innerHTML=`
  <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Adult
                                            </p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">13 to 59
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_1" onclick="for_minus(0)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_1" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(0)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice">${localStorage.getItem("Count1_1")*localStorage.getItem("Price1")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount1">${localStorage.getItem("Discount1")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Child</p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">13 to 59
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_3" onclick="for_minus(2)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_3" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(2)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice3">${localStorage.getItem("Count1_3")*localStorage.getItem("Discount4")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount1">${localStorage.getItem("Discount2")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  `
  if (sessionStorage.getItem("selectedValyut")=="USD") {
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="$&nbsp;"
    }
}else{
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="MYR&nbsp;"
    }
}
}

if (localStorage.getItem("count2_3")==2) {
    for (let i = 0; i < document.querySelectorAll("#TotalPrice").length; i++) {
        document.querySelectorAll("#TotalPrice")[i].innerHTML=localStorage.getItem("TotalPrice")
    }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice3").length; i++) {
        document.querySelectorAll("#TotalPrice3")[i].innerHTML=localStorage.getItem("TotalPrice3")
    }
  document.querySelector("#for_calculator").innerHTML=`
  <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Adult
                                            </p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">13 to 59
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_1" onclick="for_minus(0)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_1" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(0)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice">${localStorage.getItem("Count1_1")*localStorage.getItem("Price1")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Child</p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">13 to 59
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_3" onclick="for_minus(2)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_3" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(2)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice3">${localStorage.getItem("Count1_3")*localStorage.getItem("Discount4")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  `
  if (sessionStorage.getItem("selectedValyut")=="USD") {
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="$&nbsp;"
    }
}else{
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="MYR&nbsp;"
    }
}
}

if (localStorage.getItem("count3_3")==3) {
    for (let i = 0; i < document.querySelectorAll("#TotalPrice").length; i++) {
        document.querySelectorAll("#TotalPrice")[i].innerHTML=localStorage.getItem("TotalPrice")
        }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice2").length; i++) {
        document.querySelectorAll("#TotalPrice2")[i].innerHTML=localStorage.getItem("TotalPrice3")
        }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice3").length; i++) {
        document.querySelectorAll("#TotalPrice3")[i].innerHTML=localStorage.getItem("TotalPrice3")
        }
  document.querySelector("#for_calculator").innerHTML=`
  <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Adult
                                            </p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">13 to 59
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_1" onclick="for_minus(0)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_1" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(0)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice">${localStorage.getItem("Count1_1")*localStorage.getItem("Price1")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount1">${localStorage.getItem("Discount1")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Senior
                                            </p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">60 to 99
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_2" onclick="for_minus(1)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_2" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(1)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#9F9F9F" class="TextBlock__Text-sc-hd2jvz-0 jxSnNL block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice2">${localStorage.getItem("Count1_2")*localStorage.getItem("Discount4")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount2">${localStorage.getItem("Discount2")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">Child
                                            </p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">1 to 12
                                                yrs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_3" onclick="for_minus(2)" class="action-handle" data-qa-marker="decrement-button" disabled=""
                                                aria-disabled="true" aria-label="Decrease value"><svg width="32"
                                                    height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_3" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(2)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#9F9F9F" class="TextBlock__Text-sc-hd2jvz-0 jxSnNL block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice3">${localStorage.getItem("Count1_3")*localStorage.getItem("Discount5")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount3">${localStorage.getItem("Discount6")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  `
  if (sessionStorage.getItem("selectedValyut")=="USD") {
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="$&nbsp;"
    }
}else{
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="MYR&nbsp;"
    }
}
}

if (localStorage.getItem("count4")==4) {
    for (let i = 0; i < document.querySelectorAll("#TotalPrice").length; i++) {
        document.querySelectorAll("#TotalPrice")[i].innerHTML=localStorage.getItem("TotalPrice")
        }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice2").length; i++) {
        document.querySelectorAll("#TotalPrice2")[i].innerHTML=localStorage.getItem("TotalPrice2")
        }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice3").length; i++) {
        document.querySelectorAll("#TotalPrice3")[i].innerHTML=localStorage.getItem("TotalPrice3")
        }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice4").length; i++) {
        document.querySelectorAll("#TotalPrice4")[i].innerHTML=localStorage.getItem("TotalPrice4")
        }
  document.querySelector("#for_calculator").innerHTML=`
  <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">${localStorage.getItem("Titles1")}</p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">${localStorage.getItem("discraption1")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_1" onclick="for_minus(0)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_1" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(0)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice">${localStorage.getItem("Count1_1")*localStorage.getItem("Price1")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount1">${localStorage.getItem("Discount1")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">${localStorage.getItem("Titles2")}</p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">${localStorage.getItem("discraption2")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_2" onclick="for_minus(1)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_2" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(1)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#9F9F9F" class="TextBlock__Text-sc-hd2jvz-0 jxSnNL block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice2">${localStorage.getItem("Count1_2")*localStorage.getItem("Discount4")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount2">${localStorage.getItem("Discount2")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">${localStorage.getItem("Titles3")}</p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">${localStorage.getItem("discraption3")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_3" onclick="for_minus(2)" class="action-handle" data-qa-marker="decrement-button" disabled=""
                                                aria-disabled="true" aria-label="Decrease value"><svg width="32"
                                                    height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_3" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(2)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#9F9F9F" class="TextBlock__Text-sc-hd2jvz-0 jxSnNL block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice3">${localStorage.getItem("Count1_3")*localStorage.getItem("Discount5")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount3">${localStorage.getItem("Discount3")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">${localStorage.getItem("Titles4")}</p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">${localStorage.getItem("discraption4")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_4" onclick="for_minus(3)" class="action-handle" data-qa-marker="decrement-button" disabled=""
                                                aria-disabled="true" aria-label="Decrease value"><svg width="32"
                                                    height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_4" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(3)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#9F9F9F" class="TextBlock__Text-sc-hd2jvz-0 jxSnNL block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice4">${localStorage.getItem("Count1_4")*localStorage.getItem("Discount7")}</span>
                                            </p>
                                        </div>
                                        <div class="personNumberPicker__OriginalPriceContainer-sc-6svcz5-2 jSytsB">
                                            <p color="#888888" class="TextBlock__Text-sc-hd2jvz-0 ikEJc block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="Discount4">${localStorage.getItem("Discount6")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  `
  if (sessionStorage.getItem("selectedValyut")=="USD") {
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="$&nbsp;"
    }
}else{
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="MYR&nbsp;"
    }
}
}

if (localStorage.getItem("count4_1")==4) {
    for (let i = 0; i < document.querySelectorAll("#TotalPrice").length; i++) {
        document.querySelectorAll("#TotalPrice")[i].innerHTML=localStorage.getItem("TotalPrice")
        }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice2").length; i++) {
        document.querySelectorAll("#TotalPrice2")[i].innerHTML=localStorage.getItem("TotalPrice2")
        }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice3").length; i++) {
        document.querySelectorAll("#TotalPrice3")[i].innerHTML=localStorage.getItem("TotalPrice3")
        }
    for (let i = 0; i < document.querySelectorAll("#TotalPrice4").length; i++) {
        document.querySelectorAll("#TotalPrice4")[i].innerHTML=localStorage.getItem("TotalPrice4")
        }
  document.querySelector("#for_calculator").innerHTML=`
  <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">${localStorage.getItem("Titles1")}</p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">${localStorage.getItem("discraption1")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_1" onclick="for_minus(0)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_1" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(0)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice">${localStorage.getItem("Count1_1")*localStorage.getItem("Price1")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">${localStorage.getItem("Titles2")}</p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">${localStorage.getItem("discraption2")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_2" onclick="for_minus(1)" class="action-handle"
                                                data-qa-marker="decrement-button" disabled="" aria-disabled="true"
                                                aria-label="Decrease value"><svg width="32" height="32"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_2" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(1)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#9F9F9F" class="TextBlock__Text-sc-hd2jvz-0 jxSnNL block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice2">${localStorage.getItem("Count1_2")*localStorage.getItem("Discount4")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">${localStorage.getItem("Titles3")}</p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">${localStorage.getItem("discraption3")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_3" onclick="for_minus(2)" class="action-handle" data-qa-marker="decrement-button" disabled=""
                                                aria-disabled="true" aria-label="Decrease value"><svg width="32"
                                                    height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_3" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(2)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#9F9F9F" class="TextBlock__Text-sc-hd2jvz-0 jxSnNL block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice3">${localStorage.getItem("Count1_3")*localStorage.getItem("Discount5")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex flex-row justify-between mb-3 w-full" direction="row" weight="normal"
                                color="black">
                                <div class="flex w-1/2">
                                    <div class="flex flex-col justify-center" direction="col" weight="normal"
                                        color="black">
                                        <div class="flex">
                                            <p color="#444444" class="TextBlock__Text-sc-hd2jvz-0 jXoHlY block">${localStorage.getItem("Titles4")}</p>
                                        </div>
                                        <div class="flex mt-1">
                                            <p color="#666666" class="TextBlock__Text-sc-hd2jvz-0 fIUbio block">${localStorage.getItem("discraption4")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/6 ml-3">
                                    <div class="flex flex-row w-full justify-end" direction="row" weight="normal"
                                        color="black">
                                        <div
                                            class="numberPicker__CoreNumberPicker-sc-6807pp-0 fgeZKe core-number-picker">
                                            <button id="for_minus_4" onclick="for_minus(3)" class="action-handle" data-qa-marker="decrement-button" disabled=""
                                                aria-disabled="true" aria-label="Decrease value"><svg width="32"
                                                    height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="disabled-icon">
                                                    <circle cx="16" cy="16" r="16" fill="#F8F8F8"></circle>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#BDBDBD"></line>
                                                </svg>
                                            </button>
                                            <input id="for_input_4" class="value" type="text" disabled=""
                                                placeholder="0">
                                            <button onclick="for_plus(3)" data-qa-marker="increment-button"
                                                class="action-handle" aria-label="Increase value"
                                                aria-disabled="false"><svg width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                                    <circle cx="16" cy="16" r="16" fill="#F3E9FF"></circle>
                                                    <line x1="16.5" y1="23" x2="16.5" y2="8" stroke="#8000ff"></line>
                                                    <line x1="24" y1="15.5" x2="9" y2="15.5" stroke="#8000ff"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-1/4 ml-3 justify-end relative">
                                    <div class="personNumberPicker__PriceWrapper-sc-6svcz5-0 lkkGnb">
                                        <div class="personNumberPicker__FinalPriceContainer-sc-6svcz5-1 izktxA">
                                            <p color="#9F9F9F" class="TextBlock__Text-sc-hd2jvz-0 jxSnNL block">
                                                <span class="for_guest_valyuta">MYR&nbsp;</span><span id="TotalPrice4">${localStorage.getItem("Count1_4")*localStorage.getItem("Discount7")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  `
  if (sessionStorage.getItem("selectedValyut")=="USD") {
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="$&nbsp;"
    }
}else{
    for (let i = 0; i < document.querySelectorAll(".for_guest_valyuta").length; i++) {
        document.querySelectorAll(".for_guest_valyuta")[i].innerHTML="MYR&nbsp;"
    }
}
}



if (localStorage.getItem("Count1_1")) {
    var a = document.querySelector("#for_input_1").value=localStorage.getItem("Count1_1")
    document.querySelector("#Count1_1").innerHTML=localStorage.getItem("Count1_1", 1)
    document.querySelector("#kZvtgD1").style="display:flex";
    document.querySelector("#TotalPrice").innerHTML=localStorage.getItem("TotalPrice")
}else {
    var Count1_1 = 0
}

if (localStorage.getItem("Count1_2")) {
    document.querySelector("#for_input_2").value=localStorage.getItem("Count1_2")
    document.querySelector("#Count1_2").innerHTML=localStorage.getItem("Count1_2", 1)
    document.querySelector("#kZvtgD2").style="display:flex";
    document.querySelector("#TotalPrice2").innerHTML=localStorage.getItem("TotalPrice2")
  }else {
      var Count1_2 = 0
  }

if (localStorage.getItem("Count1_4")) {
    document.querySelector("#for_input_4").value=localStorage.getItem("Count1_4")
    document.querySelector("#Count1_4").innerHTML=localStorage.getItem("Count1_4", 1)
    document.querySelector("#kZvtgD4").style="display:flex";
    document.querySelector("#TotalPrice2").innerHTML=localStorage.getItem("TotalPrice2")
  }else {
      var Count1_4 = 0
  }
  
  if (localStorage.getItem("Count1_3")) {
    document.querySelector("#for_input_3").value=localStorage.getItem("Count1_3")
    document.querySelector("#Count1_3").innerHTML=localStorage.getItem("Count1_3", 1)
    document.querySelector("#kZvtgD3").style="display:flex";
    document.querySelector("#TotalPrice3").innerHTML=localStorage.getItem("TotalPrice3")
  }
  else {
      var Count1_3 = 0
  }

if(localStorage.getItem("TotalPrice")){
    var TotalPrice = localStorage.getItem("TotalPrice")
}else{
    var TotalPrice=0
}

if(localStorage.getItem("TotalPrice2")){
    var TotalPrice2 = localStorage.getItem("TotalPrice2")
}else{
    var TotalPrice2=0
}

if(localStorage.getItem("TotalPrice3")){
    var TotalPrice3 = localStorage.getItem("TotalPrice3")
}else{
    var TotalPrice3=0
}

if(localStorage.getItem("TotalPrice4")){
    var TotalPrice4 = localStorage.getItem("TotalPrice4")
}else{
    var TotalPrice4=0
}


console.log(TotalPrice);


function for_plus(key) {
if (key == 0) {
    for_plus_1 += 1;
    document.querySelector("#for_input_1").value = for_plus_1;
    document.querySelector("#kZvtgD1").style="display:flex";
    document.querySelector("#for_minus_1").disabled = false;
    document.querySelector("#for_minus_1 circle").style='fill:#F3E9FF'
    document.querySelector("#for_minus_1 line").style='stroke:#8000ff'
    localStorage.setItem("Title1_1", localStorage.getItem("Titles1"));
    localStorage.setItem("Count1_1", for_plus_1);
    localStorage.setItem("Price1", Price1)
    localStorage.setItem("TotalPrice", (localStorage.getItem("Count1_1")*localStorage.getItem("Price1")).toFixed(2))

    
    
    document.querySelector("#Count1_1").innerHTML=localStorage.getItem("Count1_1")
    for (let i = 0; i < document.querySelectorAll("#TotalPrice").length; i++) {
        document.querySelectorAll("#TotalPrice")[i].innerHTML=localStorage.getItem("TotalPrice")
    }
        
    document.querySelector("#AllPrice").innerHTML=(localStorage.getItem("TotalPrice")*1+localStorage.getItem("TotalPrice2")*1+localStorage.getItem("TotalPrice3")*1+localStorage.getItem("TotalPrice4")*1).toFixed(2);
    localStorage.setItem("discraption1", localStorage.getItem("discraption1"));
}

if (key == 1) {
    for_plus_2 += 1;
    document.querySelector("#for_input_2").value = for_plus_2;
    document.querySelector("#kZvtgD2").style="display:flex";
    document.querySelector("#for_minus_2").disabled = false;
        document.querySelector("#for_minus_2 circle").style='fill:#F3E9FF'
    document.querySelector("#for_minus_2 line").style='stroke:#8000ff'
    localStorage.setItem("Title1_2", "Senior");
    localStorage.setItem("Count1_2", for_plus_2);
    document.querySelector("#TotalPrice2").innerHTML=localStorage.getItem("TotalPrice2")
    localStorage.setItem("TotalPrice2", (localStorage.getItem("Count1_2")*localStorage.getItem("Discount4")).toFixed(2))
    localStorage.setItem("Discount4", Discount4)

    


    document.querySelector("#Count1_2").innerHTML=localStorage.getItem("Count1_2")
    for (let i = 0; i < document.querySelectorAll("#TotalPrice2").length; i++) {
        document.querySelectorAll("#TotalPrice2")[i].innerHTML=localStorage.getItem("TotalPrice2")
    }

    document.querySelector("#AllPrice").innerHTML=(localStorage.getItem("TotalPrice")*1+localStorage.getItem("TotalPrice2")*1+localStorage.getItem("TotalPrice3")*1+localStorage.getItem("TotalPrice4")*1).toFixed(2);
}

  if (key == 2) {
    for_plus_4 += 1;
    document.querySelector("#for_input_3").value = for_plus_4;
    document.querySelector("#kZvtgD3").style="display:flex";
    document.querySelector("#for_minus_3").disabled = false;
        document.querySelector("#for_minus_3 circle").style='fill:#F3E9FF'
    document.querySelector("#for_minus_3 line").style='stroke:#8000ff'
    localStorage.setItem("Title1_3", "Child");
    localStorage.setItem("Count1_3", for_plus_4);
    if (localStorage.getItem("count4") || localStorage.getItem("count4_1")) {
        localStorage.setItem("TotalPrice3", (localStorage.getItem("Count1_3")*localStorage.getItem("Discount5")).toFixed(2))
    }else{
        localStorage.setItem("TotalPrice3", (localStorage.getItem("Count1_3")*localStorage.getItem("Discount4")).toFixed(2))
    }
    
    localStorage.setItem("Discount4", Discount4)
    document.querySelector("#TotalPrice3").innerHTML=localStorage.getItem("TotalPrice3")

    


    document.querySelector("#Count1_3").innerHTML=localStorage.getItem("Count1_3")
    for (let i = 0; i < document.querySelectorAll("#TotalPrice3").length; i++) {
        document.querySelectorAll("#TotalPrice3")[i].innerHTML=localStorage.getItem("TotalPrice3")
    }

    document.querySelector("#AllPrice").innerHTML=(localStorage.getItem("TotalPrice")*1+localStorage.getItem("TotalPrice2")*1+localStorage.getItem("TotalPrice3")*1+localStorage.getItem("TotalPrice4")*1).toFixed(2);
  }

  if (key == 3) {
    for_plus_6 += 1;
    document.querySelector("#for_input_4").value = for_plus_6;
    document.querySelector("#kZvtgD4").style="display:flex";
    document.querySelector("#for_minus_4").disabled = false;
        document.querySelector("#for_minus_4 circle").style='fill:#F3E9FF'
    document.querySelector("#for_minus_4 line").style='stroke:#8000ff'
    localStorage.setItem("Title1_4", "");
    localStorage.setItem("Count1_4", for_plus_6);
    localStorage.setItem("TotalPrice4", (localStorage.getItem("Count1_4")*localStorage.getItem("Discount7")).toFixed(2))
    localStorage.setItem("Discount4", Discount4)
    document.querySelector("#TotalPrice4").innerHTML=localStorage.getItem("TotalPrice4")
    

    document.querySelector("#Count1_4").innerHTML=localStorage.getItem("Count1_4")
    for (let i = 0; i < document.querySelectorAll("#TotalPrice4").length; i++) {
        document.querySelectorAll("#TotalPrice4")[i].innerHTML=localStorage.getItem("TotalPrice4")
    }

    document.querySelector("#AllPrice").innerHTML=(localStorage.getItem("TotalPrice")*1+localStorage.getItem("TotalPrice2")*1+localStorage.getItem("TotalPrice3")*1+localStorage.getItem("TotalPrice4")*1).toFixed(2);
  }
  document.querySelector(".for_persons").innerHTML=localStorage.getItem("Count1_1")*1+localStorage.getItem("Count1_2")*1+localStorage.getItem("Count1_3")*1+localStorage.getItem("Count1_4")*1
}

function for_minus(key) {
  if (key == 0) {
    
    
    if (for_plus_1 > 0) {
        for_plus_1 -= 1;
      
    
      localStorage.setItem("Title1_1", "Adult");
      }
      if(for_plus_1 == 0){
        document.querySelector("#for_minus_1").disabled = true;
        document.querySelector("#for_minus_1 circle").style='fill:#F8F8F8'
        document.querySelector("#for_minus_1 line").style='stroke:#BDBDBD'
        document.querySelector("#kZvtgD1").style="display:none !important"
      }
      document.querySelector("#for_input_1").value = for_plus_1;
    localStorage.setItem("Count1_1", for_plus_1);
    localStorage.setItem("TotalPrice", (localStorage.getItem("Count1_1")*localStorage.getItem("Price1")).toFixed(2))
    document.querySelector("#TotalPrice").innerHTML=localStorage.getItem("TotalPrice")
    document.querySelector("#Count1_1").innerHTML=localStorage.getItem("Count1_1")
    
    for (let i = 0; i < document.querySelectorAll("#TotalPrice").length; i++) {
        document.querySelectorAll("#TotalPrice")[i].innerHTML=localStorage.getItem("TotalPrice")
    }
    document.querySelector("#AllPrice").innerHTML=(localStorage.getItem("TotalPrice")*1+localStorage.getItem("TotalPrice2")*1+localStorage.getItem("TotalPrice3")*1+localStorage.getItem("TotalPrice4")*1).toFixed(2);
  }

  if (key == 1) {
    for_plus_2 -= 1;
    document.querySelector("#for_input_2").value = for_plus_2;
    if (for_plus_2 == 0) {
        document.querySelector("#kZvtgD2").style="display:none !important"
        localStorage.setItem("Title1_2", "Senior");
    document.querySelector("#for_minus_2 circle").style='fill:#F8F8F8'
    document.querySelector("#for_minus_2 line").style='stroke:#BDBDBD'
        document.querySelector("#for_minus_2").disabled = true;
    }
    
    localStorage.setItem("Count1_2", for_plus_2);
    localStorage.setItem("TotalPrice2", (localStorage.getItem("Count1_2")*localStorage.getItem("Discount4")).toFixed(2))
    document.querySelector("#TotalPrice2").innerHTML=localStorage.getItem("TotalPrice2")
    document.querySelector("#Count1_2").innerHTML=localStorage.getItem("Count1_2")
    for (let i = 0; i < document.querySelectorAll("#TotalPrice2").length; i++) {
        document.querySelectorAll("#TotalPrice2")[i].innerHTML=localStorage.getItem("TotalPrice2")
    }
    document.querySelector("#AllPrice").innerHTML=(localStorage.getItem("TotalPrice")*1+localStorage.getItem("TotalPrice2")*1+localStorage.getItem("TotalPrice3")*1+localStorage.getItem("TotalPrice4")*1).toFixed(2);
  }

  if (key == 2) {
    for_plus_4 -= 1;
    document.querySelector("#for_input_3").value = for_plus_4;
    if (for_plus_4 == 0) {
        localStorage.setItem("Title1_3", "Child");
        document.querySelector("#kZvtgD3").style="display:none !important"
        document.querySelector("#for_minus_3").disabled = true;
        document.querySelector("#for_minus_3 circle").style='fill:#F8F8F8'
    document.querySelector("#for_minus_3 line").style='stroke:#BDBDBD'
    }
    localStorage.setItem("Count1_3", for_plus_4);
    if (localStorage.getItem("count4") || localStorage.getItem("count4_1")) {
        localStorage.setItem("TotalPrice3", (localStorage.getItem("Count1_3")*localStorage.getItem("Discount5")).toFixed(2))
    }else{
        localStorage.setItem("TotalPrice3", (localStorage.getItem("Count1_3")*localStorage.getItem("Discount4")).toFixed(2))
    }
    
    document.querySelector("#TotalPrice3").innerHTML=localStorage.getItem("TotalPrice3")
    document.querySelector("#Count1_3").innerHTML=localStorage.getItem("Count1_3")
    document.querySelector("#TotalPrice3").innerHTML=localStorage.getItem("TotalPrice3")
    for (let i = 0; i < document.querySelectorAll("#TotalPrice3").length; i++) {
        document.querySelectorAll("#TotalPrice3")[i].innerHTML=localStorage.getItem("TotalPrice3")
    }
    document.querySelector("#AllPrice").innerHTML=(localStorage.getItem("TotalPrice")*1+localStorage.getItem("TotalPrice2")*1+localStorage.getItem("TotalPrice3")*1+localStorage.getItem("TotalPrice4")*1).toFixed(2);
  }

  if (key == 3) {
    for_plus_6 -= 1;
    document.querySelector("#for_input_4").value = for_plus_6;
    if (for_plus_6 == 0) {
        localStorage.setItem("Title1_3", "");
        document.querySelector("#kZvtgD4").style="display:none !important"
        document.querySelector("#for_minus_4").disabled = true;
        document.querySelector("#for_minus_4 circle").style='fill:#F8F8F8'
    document.querySelector("#for_minus_4 line").style='stroke:#BDBDBD'
    }
    localStorage.setItem("Count1_4", for_plus_6);
    
    localStorage.setItem("TotalPrice4", (localStorage.getItem("Count1_4")*localStorage.getItem("Discount7")).toFixed(2))
    document.querySelector("#TotalPrice4").innerHTML=localStorage.getItem("TotalPrice4")
    document.querySelector("#Count1_3").innerHTML=localStorage.getItem("Count1_4")
    document.querySelector("#TotalPrice4").innerHTML=localStorage.getItem("TotalPrice4")
    for (let i = 0; i < document.querySelectorAll("#TotalPrice4").length; i++) {
        document.querySelectorAll("#TotalPrice4")[i].innerHTML=localStorage.getItem("TotalPrice4")
    }
    document.querySelector("#AllPrice").innerHTML=(localStorage.getItem("TotalPrice")*1+localStorage.getItem("TotalPrice2")*1+localStorage.getItem("TotalPrice3")*1+localStorage.getItem("TotalPrice4")*1).toFixed(2);
  }
  document.querySelector(".for_persons").innerHTML=localStorage.getItem("Count1_1")*1+localStorage.getItem("Count1_2")*1+localStorage.getItem("Count1_3")*1+localStorage.getItem("Count1_4")*1
}


if (localStorage.getItem("Count1_1")>0) {
    document.querySelector("#for_minus_1").disabled = false;
    document.querySelector("#for_minus_1 circle").style='fill:#F3E9FF'
    document.querySelector("#for_minus_1 line").style='stroke:#8000ff'
}
if (localStorage.getItem("Count1_2")>0) {
    document.querySelector("#for_minus_2").disabled = false;
    document.querySelector("#for_minus_2 circle").style='fill:#F3E9FF'
    document.querySelector("#for_minus_2 line").style='stroke:#8000ff'
}
if (localStorage.getItem("Count1_3")>0) {
    document.querySelector("#for_minus_3").disabled = false;
    document.querySelector("#for_minus_3 circle").style='fill:#F3E9FF'
    document.querySelector("#for_minus_3 line").style='stroke:#8000ff'
}
if (localStorage.getItem("Count1_4")>0) {
    document.querySelector("#for_minus_4").disabled = false;
    document.querySelector("#for_minus_4 circle").style='fill:#F3E9FF'
    document.querySelector("#for_minus_4 line").style='stroke:#8000ff'
}

document.querySelector("#AllPrice").innerHTML=(localStorage.getItem("TotalPrice")*1+localStorage.getItem("TotalPrice2")*1+localStorage.getItem("TotalPrice3")*1+localStorage.getItem("TotalPrice4")*1).toFixed(2);




document.querySelector(".for_plus_dates").innerHTML=localStorage.getItem('select_data')

if (localStorage.getItem("Count1_1")==0) {
    document.querySelector("#kZvtgD1").style="display:none"
}
if (localStorage.getItem("Count1_2")==0) {
    document.querySelector("#kZvtgD2").style="display:none"
}
if (localStorage.getItem("Count1_3")==0) {
    document.querySelector("#kZvtgD3").style="display:none"
}
if (localStorage.getItem("Count1_4")==0) {
    document.querySelector("#kZvtgD4").style="display:none"
}

if (localStorage.getItem("Count1_1")) {
    document.querySelector("#for_input_1").innerHTML=localStorage.getItem("Count1_1")
}

if (localStorage.getItem("Count1_2")) {
    document.querySelector("#for_input_2").innerHTML=localStorage.getItem("Count1_2")
}

if (localStorage.getItem("Count1_3")) {
    document.querySelector("#for_input_3").innerHTML=localStorage.getItem("Count1_3")
}

if (localStorage.getItem("Count1_4")) {
    document.querySelector("#for_input_4").innerHTML=localStorage.getItem("Count1_4")
}



if (localStorage.getItem("Discount1")=="delete") {
    document.querySelector(".personNumberPicker__OriginalPriceContainer-sc-6svcz5-2").innerHTML=""
}

document.querySelector(".for_persons").innerHTML=localStorage.getItem("Count1_1")*1+localStorage.getItem("Count1_2")*1+localStorage.getItem("Count1_3")*1+localStorage.getItem("Count1_4")*1

if (localStorage.getItem("nones")=="none") {
    document.querySelector("#noneee").style="display:none"
}

for (let i = 0; i < document.querySelectorAll('#Discount1').length; i++) {
    document.querySelectorAll("#Discount1")[i].toFixed(2)
    
}