

if (localStorage.getItem("tickets_title") == "Combo (Save 20%): KL Tower + Aquaria KLCC Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `<div class="swiper-slide"><div  data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 data-translate="home_title_330" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">KL Tower + Aquaria KLCC Tickets: Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="gg2">RP&nbsp;338</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button data-translate="select_title" id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_700">Entry to Aquaria KLCC (non-Malaysian citizen)</li>
                                              <li data-translate="ticket_701">Entry to KL Tower observation deck</li>
                                              <li data-translate="ticket_702">Entry to Sky Deck</li>
                                              <li data-translate="ticket_703">Entry to Sky Box</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 data-translate="home_title_331" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">KL Tower + Aquaria KLCC Tickets: Non-Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="gg3">RP&nbsp;382</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button data-translate="select_title" id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_700">Entry to Aquaria KLCC (non-Malaysian citizen)</li>
                                              <li data-translate="ticket_701">Entry to KL Tower observation deck</li>
                                              <li data-translate="ticket_702">Entry to Sky Deck</li>
                                              <li data-translate="ticket_703">Entry to Sky Box</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
  `
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count4", 4)
          localStorage.setItem("Price1", 22)
          localStorage.setItem("Discount1", 31);
          localStorage.setItem("Discount4", 23);
          localStorage.setItem("Discount2", 33);
          localStorage.setItem("Discount5", 14);
          localStorage.setItem("Discount3", 17);
          localStorage.setItem("Discount7", 19);
          localStorage.setItem("Discount6", 23);
          localStorage.setItem("Titles1", "Malaysian Adult")
          localStorage.setItem("Titles2", "Non-Malaysian Adult")
          localStorage.setItem("Titles3", "Malaysian Child")
          localStorage.setItem("Titles4", "Non-Malaysian Child")
          localStorage.setItem("discraption1", "Above 12 yrs")
          localStorage.setItem("discraption2", "Above 12 yrs")
          localStorage.setItem("discraption3", "4 to 11 yrs")
          localStorage.setItem("discraption4", "4 to 11 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count4", 4)
          localStorage.setItem("Price1", 25)
          localStorage.setItem("Discount1", 32);
          localStorage.setItem("Discount4", 31);
          localStorage.setItem("Discount2", 40);
          localStorage.setItem("Discount5", 20);
          localStorage.setItem("Discount3", 24);
          localStorage.setItem("Discount7", 25);
          localStorage.setItem("Discount6", 29);
          localStorage.setItem("Titles1", "Malaysian Adult")
          localStorage.setItem("Titles2", "Non-Malaysian Adult")
          localStorage.setItem("Titles3", "Malaysian Child")
          localStorage.setItem("Titles4", "Non-Malaysian Child")
          localStorage.setItem("discraption1", "Above 12 yrs")
          localStorage.setItem("discraption2", "Above 12 yrs")
          localStorage.setItem("discraption3", "4 to 11 yrs")
          localStorage.setItem("discraption4", "4 to 11 yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count4", 4)
          localStorage.setItem("Price1", 102);
localStorage.setItem("Discount1", 144);
localStorage.setItem("Discount4", 107);
localStorage.setItem("Discount2", 153);
localStorage.setItem("Discount5", 65);
localStorage.setItem("Discount3", 79);
localStorage.setItem("Discount7", 88);
localStorage.setItem("Discount6", 107);
          
          localStorage.setItem("Titles1", "Malaysian Adult")
          localStorage.setItem("Titles2", "Non-Malaysian Adult")
          localStorage.setItem("Titles3", "Malaysian Child")
          localStorage.setItem("Titles4", "Non-Malaysian Child")
          localStorage.setItem("discraption1", "Above 12 yrs")
          localStorage.setItem("discraption2", "Above 12 yrs")
          localStorage.setItem("discraption3", "4 to 11 yrs")
          localStorage.setItem("discraption4", "4 to 11 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count4", 4)
          localStorage.setItem("Price1", 116);
localStorage.setItem("Discount1", 149);
localStorage.setItem("Discount4", 144);
localStorage.setItem("Discount2", 186);
localStorage.setItem("Discount5", 93);
localStorage.setItem("Discount3", 111);
localStorage.setItem("Discount7", 116);
localStorage.setItem("Discount6", 135);

          localStorage.setItem("Titles1", "Malaysian Adult")
          localStorage.setItem("Titles2", "Non-Malaysian Adult")
          localStorage.setItem("Titles3", "Malaysian Child")
          localStorage.setItem("Titles4", "Non-Malaysian Child")
          localStorage.setItem("discraption1", "Above 12 yrs")
          localStorage.setItem("discraption2", "Above 12 yrs")
          localStorage.setItem("discraption3", "4 to 11 yrs")
          localStorage.setItem("discraption4", "4 to 11 yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 37%): Aquaria KLCC + Genting SkyWorld Outdoor Theme Park Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `<div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block"><div class="VariantCard__Name-sc-a2bdig-1 jXNikB" data-translate="home_title_330">Aquaria KLCC &amp; Genting SkyWorlds Tickets: Malaysian Citizen</div></h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w45">RP&nbsp;589</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button data-translate="select_title" id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_743">Skip-the-line entry to Aquaria KLCC</li>
                                              <li data-translate="ticket_744">1-day pass to Genting SkyWorlds Outdoor Theme Park</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_331">Aquaria KLCC & Genting SkyWorlds Tickets: Non-Malaysian Citizen</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w46">RP&nbsp;638</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_743">Skip-the-line entry to Aquaria KLCC</li>
                                              <li data-translate="ticket_744">1-day pass to Genting SkyWorlds Outdoor Theme Park</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
  `
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 36)
          localStorage.setItem("Discount1", 57);
          localStorage.setItem("Discount4", 30);
          localStorage.setItem("Discount2", 50);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 40)
          localStorage.setItem("Discount1", 60);
          localStorage.setItem("Discount4", 31);
          localStorage.setItem("Discount2", 52);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 168);
          localStorage.setItem("Discount1", 266);
          localStorage.setItem("Discount4", 136);
          localStorage.setItem("Discount2", 227);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 190);
          localStorage.setItem("Discount1", 280);
          localStorage.setItem("Discount4", 150);
          localStorage.setItem("Discount2", 244);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 9%): Skip-the-Line Tickets to Aquaria KLCC + KLIA Ekspres Train Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `<div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 data-translate="home_title_328" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block"><div class="VariantCard__Name-sc-a2bdig-1 jXNikB">Aquaria KLCC Ticket + One-Way: KLIA T1/T2 to KL Sentral</div></h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w47">RP&nbsp;310</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button data-translate="select_title" id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_737">One-way ticket from KLIA T1/T2 to KL Sentral</li>
                                              <li data-translate="ticket_738">Free 4G Wi-Fi</li>
                                              <li data-translate="ticket_739">Air-conditioning onboard</li>
                                              <li data-translate="ticket_740">Luggage space</li>
                                              <li data-translate="ticket_741">Digital infotainment</li>
                                              <li data-translate="ticket_742">Skip-the-line admission to Aquaria KLCC</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 data-translate="home_title_329" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Aquaria KLCC Ticket + One-Way: KL Sentral to KLIA T1/T2</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w48">RP&nbsp;355</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="home_title_12">Aquaria KLCC</li>
                                              <li data-translate="home_title_13">Skip-the-line admission to Aquaria KLCC</li>
                                              <li data-translate="home_title_14">KLIA Ekspres</li>
                                              <li data-translate="home_title_15">One-way ticket from KL Sentral to KLIA T1/T2</li>
                                              <li data-translate="home_title_16">Free 4G Wi-Fi</li>
                                              <li data-translate="home_title_17">Air-conditioning onboard</li>
                                              <li data-translate="home_title_18">Luggage space</li>
                                              <li data-translate="home_title_19">Digital infotainment</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
  `
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 22)
          localStorage.setItem("Discount1", 23);
          localStorage.setItem("Discount4", 14);
          localStorage.setItem("Discount2", 15);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 26)
          localStorage.setItem("Discount1", 28);
          localStorage.setItem("Discount4", 18);
          localStorage.setItem("Discount2", 20);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count3_3", 3)
          localStorage.setItem("Price1", 99);   
          localStorage.setItem("Discount1", 103);  
          localStorage.setItem("Discount4", 63);   
          localStorage.setItem("Discount2", 67);              
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3_3", 3)
          localStorage.setItem("Price1", 117);       // 26 * 4.50
          localStorage.setItem("Discount1", 126);   // 28 * 4.50
          localStorage.setItem("Discount4", 81);    // 18 * 4.50
          localStorage.setItem("Discount2", 90);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Aquaria KLCC Skip-the-Line Tickets + Petrosains Entry Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `<div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 data-translate="home_title_326" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block"><div class="VariantCard__Name-sc-a2bdig-1 jXNikB">Combo: Aquaria KLCC Tickets + Petrosains Entry Tickets for Malaysian Citizens</div></h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w49">RP&nbsp;227</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF1" data-translate="select_title" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li>Skip-the-line admission into Aquaria KLCC</li>
                                              <li>Entry tickets to Petrosains, The Discovery Center</li>
                                              <li>Valid only for Malaysian Citizens</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_327">Combo: Aquaria KLCC + Petrosains Entry Tickets for Non-Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w50">RP&nbsp;324</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li>Skip-the-line admission into Aquaria KLCC</li>
                                              <li>Entry tickets to Petrosains, The Discovery Center</li>
                                              <li>Valid only for Non-Malaysian Citizens</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
  `
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 40)
          localStorage.setItem("Discount1", 42);
          localStorage.setItem("Discount4", 26);
          localStorage.setItem("Discount2", 41);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 53)
          localStorage.setItem("Discount1", 61);
          localStorage.setItem("Discount4", 33);
          localStorage.setItem("Discount2", 38);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count3_3", 3)
          localStorage.setItem("Price1", 180);       // 40 * 4.50
          localStorage.setItem("Discount1", 211);    // 47 * 4.50
          localStorage.setItem("Discount4", 117);    // 26 * 4.50
          localStorage.setItem("Discount2", 184);  
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3_3", 3)
          localStorage.setItem("Price1", 238);       // 53 * 4.50
          localStorage.setItem("Discount1", 274);    // 61 * 4.50
          localStorage.setItem("Discount4", 148);    // 33 * 4.50
          localStorage.setItem("Discount2", 171);    // 38 * 4.50          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo: Aquaria KLCC + Berjaya Times Square Theme Park Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                              class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                              <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                  <h3 data-translate="home_title_322" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Weekdays Entrance - Malaysian</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div class="tour-scratch-price"><span data-translate="w51">RP&nbsp;386</span></div>
                                              <div></div>
                                              <span class="tour-price" data-translate="w52">RP&nbsp;348</span>
                                              <div data-translate="Disticket_3" class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 10%</div>
                                          </div>
                                      </div>
                                      <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                          <button data-translate="select_title" id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                      </div>
                                  </div>
                              </div>
                              <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                  
                              </div>
                          </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                              class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                              <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                  <h3  data-translate="home_title_323"color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Weekdays Entrance - Non Malaysian</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div class="tour-scratch-price"><span data-translate="w53">RP&nbsp;517</span></div>
                                              <div></div>
                                              <span class="tour-price" data-translate="w54">RP&nbsp;445</span>
                                              <div data-translate="ticket_658" class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 14%</div>
                                          </div>
                                      </div>
                                      <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                          <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                      </div>
                                  </div>
                              </div>
                              <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                  
                              </div>
                          </div></div>
  `
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 24.43)
          localStorage.setItem("Discount1", 26.98);
          localStorage.setItem("Discount4", 20.18);
          localStorage.setItem("Discount2", 22.73);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 31.44)
          localStorage.setItem("Discount1", 36.11);
          localStorage.setItem("Discount4", 27.19);
          localStorage.setItem("Discount2", 31.86);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 397.445)
          localStorage.setItem("Discount1", 438.894);
          localStorage.setItem("Discount4", 328.325);
          localStorage.setItem("Discount2", 369.777);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 511.468)
          localStorage.setItem("Discount1", 587.496);
          localStorage.setItem("Discount4", 442.350);
          localStorage.setItem("Discount2", 518.379);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }

  if (localStorage.getItem("tickets_title") == "Paya Indah Discovery Wetlands at Gamuda Cove Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
          class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
          <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_316">Nature Wanderlust: Safari Insta Tour + Boat Cruise</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div></div>
                          <span class="tour-price" data-translate="w67">RP&nbsp;50</span>
                      </div>
                  </div>
                  <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                      <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                  </div>
              </div>
          </div>
          <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
              <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                  <ul>
                      <li data-translate="ticket_725">Boat cruise</li>
                      <li data-translate="ticket_726">Safari insta tour</li>
                      <li data-translate="ticket_727">Bird watching</li>
                      <li data-translate="ticket_728">Animal feeding</li>
                  </ul>
              </div>
          </div>
      </div></div>
  `
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 10)
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "Above 3 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        }
  
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 46);
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "Above 3 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        }
  
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Petronas Twin Towers Dining Experience") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                              class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                              <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_312">Chinese Exotic</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div></div>
                                              <span class="tour-price" data-translate="w70">RP&nbsp;1070</span>
                                          </div>
                                      </div>
                                      <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                          <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                      </div>
                                  </div>
                              </div>
                              <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                  <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                      <ul>
                                          <li data-translate="ticket_716">Chinese Exotic (menu here)</li>
                                          <li data-translate="ticket_717">Dining experience at KLCC@42</li>
                                          <li data-translate="ticket_718">Access to Skybridge</li>
                                      </ul>
                                  </div>
                              </div>
                          </div></div>
                          
  `
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 42)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 18 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 195);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 18 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        }
  
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 5%): Petrosains, The Discovery Centre + Petronas Twin Towers Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
       <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_310">Combo: Petrosains, The Discovery Centre + Petronas Twin Towers Tickets for Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w74">RP&nbsp;196</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF1" data-translate="select_title" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_711">Petronas Twin Towers</li>
                                              <li data-translate="ticket_712">Skip-the-line entry to Petronas Twin Towers</li>
                                              <li data-translate="ticket_713">Access to Observation Deck & Skybridge</li>
                                              <li data-translate="ticket_714">Petrosains, The Discovery Centre</li>
                                              <li data-translate="ticket_715">Entry to Petrosains, The Discovery Centre</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_311">Combo: Petrosains, The Discovery Centre + Petronas Twin Towers Tickets for Non-Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w75">RP&nbsp;451</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_711">Petronas Twin Towers</li>
                                              <li data-translate="ticket_712">Skip-the-line entry to Petronas Twin Towers</li>
                                              <li data-translate="ticket_713">Access to Observation Deck & Skybridge</li>
                                              <li data-translate="ticket_714">Petrosains, The Discovery Centre</li>
                                              <li data-translate="ticket_715">Entry to Petrosains, The Discovery Centre</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
  `
  
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 11)
          localStorage.setItem("Discount1", 12);
          localStorage.setItem("Discount4", 8);
          localStorage.setItem("Discount2", 9);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 27)
          localStorage.setItem("Discount1", 28);
          localStorage.setItem("Discount4", 15);
          localStorage.setItem("Discount2", 16);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 51);
          localStorage.setItem("Discount1", 55);
          localStorage.setItem("Discount4", 37);
          localStorage.setItem("Discount2", 41);                
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 125);
          localStorage.setItem("Discount1", 130);
          localStorage.setItem("Discount4", 69);
          localStorage.setItem("Discount2", 74);               
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
 
  if (localStorage.getItem("tickets_title") == "Combo (Save 5%): Petronas Twin Towers + KL Hop-On Hop-Off Sightseeing Bus Tour") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                              
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
          class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
          <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_308">
                  Malaysian</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w76">RP&nbsp;210</span>
                      </div>
                  </div>
                  <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                      <button id="iYmuLF1" data-translate="select_title" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                  </div>
              </div>
          </div>
      </div></div>
        <div class="swiper-slide"><div data-qa-marker="variant-card-available"
          class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
          <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_309">
                  Non-Malaysian</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w77">RP&nbsp;838</span>
                      </div>
                  </div>
                  <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                      <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                  </div>
              </div>
          </div>
      </div></div>
      `
  
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 14)
          localStorage.setItem("Discount1", 15);
          localStorage.setItem("Discount4", 8);
          localStorage.setItem("Discount2", 9);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 35)
          localStorage.setItem("Discount1", 37);
          localStorage.setItem("Discount4", 18);
          localStorage.setItem("Discount2", 19);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 65);      // Math.floor(14 * 4.66)
          localStorage.setItem("Discount1", 69);   // Math.floor(15 * 4.66)
          localStorage.setItem("Discount4", 37);   // Math.floor(8 * 4.66)
          localStorage.setItem("Discount2", 41);   // Math.floor(9 * 4.66)          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 163);      // Math.floor(35 * 4.66)
          localStorage.setItem("Discount1", 172);   // Math.floor(37 * 4.66)
          localStorage.setItem("Discount4", 83);    // Math.floor(18 * 4.66)
          localStorage.setItem("Discount2", 88);    // Math.floor(19 * 4.66)          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 5%): Petronas Twin Towers + KLIA Ekspres Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                              
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
          class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
          <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_306">
                  One-Way Transfer: Malaysian Citizens</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w78">RP&nbsp;282</span>
                      </div>
                  </div>
                  <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                      <button id="iYmuLF1" data-translate="select_title" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                  </div>
              </div>
          </div>
      </div></div>
        <div class="swiper-slide"><div data-qa-marker="variant-card-available"
          class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
          <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_307">
                  One-Way Transfer: Non-Malaysian Citizens</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w79">RP&nbsp;489</span>
                      </div>
                  </div>
                  <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                      <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                  </div>
              </div>
          </div>
      </div></div>
      `
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        function StyledButton(key) {
          select_clear()
          window.location.href = "#selectScreen"
          if (key == 0) {
            localStorage.setItem("count2_3", 2)
            localStorage.setItem("Price1", 17)
            localStorage.setItem("Discount4", 10);
            localStorage.setItem("All_Title", "Adult");
            localStorage.setItem("All_Title3", "Child");
            document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
            document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          }
      
          if (key == 1) {
            localStorage.setItem("count2_3", 2)
            localStorage.setItem("Price1", 30)
            localStorage.setItem("Discount4", 15);
            localStorage.setItem("All_Title", "Adult");
            localStorage.setItem("All_Title3", "Child");
            document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
            document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          }
      
          document.querySelector("#selectScreen").style = "display:grid;"
          document.querySelector("#tourSelectionBar").style = "display:block;"
        }
      }else {
        function StyledButton(key) {
          select_clear()
          window.location.href = "#selectScreen"
          if (key == 0) {
            localStorage.setItem("count2_3", 2)
            localStorage.setItem("Price1", 79);
            localStorage.setItem("Discount4", 46);            
            localStorage.setItem("All_Title", "Adult");
            localStorage.setItem("All_Title3", "Child");
            document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
            document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          }
      
          if (key == 1) {
            localStorage.setItem("count2_3", 2)
            localStorage.setItem("Price1", 139);
            localStorage.setItem("Discount4", 69);            
            localStorage.setItem("All_Title", "Adult");
            localStorage.setItem("All_Title3", "Child");
            document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
            document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          }
      
          document.querySelector("#selectScreen").style = "display:grid;"
          document.querySelector("#tourSelectionBar").style = "display:block;"
        }
      }
  }
  
  if (localStorage.getItem("tickets_title") == "Professional Photoshoot outside Petronas Towers") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
       <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_300">Petronas Towers: Regular Photoshoot</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w84">RP&nbsp;610</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_706">15-min session with 10 photos</li>
                                              <li data-translate="ticket_707">Professional photographer</li>
                                              <li data-translate="ticket_708">Small group of up to 8 guests</li>
                                              <li data-translate="ticket_709">Edited digital photos</li>
                                              <li data-translate="ticket_710">E-delivery within 48 hours</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 data-translate="home_title_301" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Petronas Towers: Premium Photoshoot</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w85">RP&nbsp;959</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button data-translate="select_title" id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_706">15-min session with 10 photos</li>
                                              <li data-translate="ticket_707">Professional photographer</li>
                                              <li data-translate="ticket_708">Small group of up to 8 guests</li>
                                              <li data-translate="ticket_709">Edited digital photos</li>
                                              <li data-translate="ticket_710">E-delivery within 48 hours</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
  `
  
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 38)
          localStorage.setItem("Titles1", "Small Group")
          localStorage.setItem("discraption1", "Group size up to 8")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 59)
          localStorage.setItem("Titles1", "Small Group")
          localStorage.setItem("discraption1", "Group size up to 8")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 177)
          localStorage.setItem("Titles1", "Small Group")
          localStorage.setItem("discraption1", "Group size up to 8")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 274);
          localStorage.setItem("Titles1", "Small Group")
          localStorage.setItem("discraption1", "Group size up to 8")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 17%): KL Tower + Petronas Twin Towers Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
       <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 data-translate="home_title_298" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">KL Tower + Petronas Tower: Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w86">RP&nbsp;586</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button data-translate="select_title" id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_701">Entry to KL Tower Observation Deck</li>
                                              <li data-translate="ticket_702">Entry to Sky Deck</li>
                                              <li data-translate="ticket_703">Entry to Sky Box</li>
                                              <li data-translate="ticket_704">Skip-the-line entry to Petronas Twin Towers</li>
                                              <li data-translate="ticket_705">Access to Observation Deck & SkyBridge</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 data-translate="home_title_299" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">KL Tower + Petronas Tower: Non-Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w87">RP&nbsp;803</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button data-translate="select_title" id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_701">Entry to KL Tower Observation Deck</li>
                                              <li data-translate="ticket_702">Entry to Sky Deck</li>
                                              <li data-translate="ticket_703">Entry to Sky Box</li>
                                              <li data-translate="ticket_704">Skip-the-line entry to Petronas Twin Towers</li>
                                              <li data-translate="ticket_705">Access to Observation Deck & SkyBridge</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
  `
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      window.location.href = "#selectScreen"
      if (key == 0) {
        localStorage.setItem("count2_3", 2)
        localStorage.setItem("Price1", 36)
        localStorage.setItem("Discount4", 26)
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }
  
      if (key == 1) {
        localStorage.setItem("count2_3", 2)
        localStorage.setItem("Price1", 50)
        localStorage.setItem("Discount4", 33)
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }
  
      document.querySelector("#selectScreen").style = "display:grid;"
      document.querySelector("#tourSelectionBar").style = "display:block;"
    }
  }else {
    function StyledButton(key) {
      select_clear()
      window.location.href = "#selectScreen"
      if (key == 0) {
        localStorage.setItem("count2_3", 2)
        localStorage.setItem("Price1", 167);
        localStorage.setItem("Discount4", 121);        
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }
  
      if (key == 1) {
        localStorage.setItem("count2_3", 2)
        localStorage.setItem("Price1", 233);
        localStorage.setItem("Discount4", 153);        
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }
  
      document.querySelector("#selectScreen").style = "display:grid;"
      document.querySelector("#tourSelectionBar").style = "display:block;"
    }
  }
  }
  
  if (localStorage.getItem("tickets_title") == "Private Full-Day 10 Wonders Tour of Kuala Lumpur") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                              
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
          class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
          <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">7-15 pax</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w88">RP&nbsp;1345</span>
                      </div>
                  </div>
                  <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                      <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                  </div>
              </div>
          </div>
      </div></div>
        <div class="swiper-slide"><div data-qa-marker="variant-card-available"
          class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
          <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">4-6 pax</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w89">RP&nbsp;1483</span>
                      </div>
                  </div>
                  <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                      <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                  </div>
              </div>
          </div>
      </div></div>
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
          class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
          <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">2-3 pax</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w90">RP&nbsp;1776</span>
                      </div>
                  </div>
                  <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                      <button id="iYmuLF3" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                  </div>
              </div>
          </div>
      </div></div>
  `
  
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 74);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "12 to 99 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 78);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "12 to 99 yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 100);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "12 to 99 yrs")
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 344);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "12 to 99 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 363);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "12 to 99 yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 466);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "12 to 99 yrs")
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 8%): Petronas Twin Towers + Aquaria KLCC Skip-the-Line Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
       <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_296">Petronas Twin Towers + Aquaria KLCC Skip-the-Line Access: Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w91">RP&nbsp;276</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF1" data-translate="select_title" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_697">Entry to Malaysian Citizens</li>
                                              <li data-translate="ticket_698">Skip-the-line entry to Petronas Twin Towers</li>
                                              <li data-translate="ticket_699">Access to Observation Deck & Skybridge</li>
                                              <li data-translate="ticket_700">Skip-the-line entry to Aquaria KLCC</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 data-translate="home_title_297" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Petronas Twin Towers + Aquaria KLCC Skip-the-Line Access: Non-Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w92">RP&nbsp;541</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button data-translate="select_title" id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_697">Entry to Malaysian Citizens</li>
                                              <li data-translate="ticket_698">Skip-the-line entry to Petronas Twin Towers</li>
                                              <li data-translate="ticket_699">Access to Observation Deck & Skybridge</li>
                                              <li data-translate="ticket_700">Skip-the-line entry to Aquaria KLCC</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
  `
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 16)
          localStorage.setItem("Discount1", 18)
          localStorage.setItem("Discount4", 7)
          localStorage.setItem("Discount2", 8)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 33)
          localStorage.setItem("Discount1", 36)
          localStorage.setItem("Discount4", 11)
          localStorage.setItem("Discount2", 13)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 74)
          localStorage.setItem("Discount1", 83)
          localStorage.setItem("Discount4", 51)
          localStorage.setItem("Discount2", 60)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 153)
          localStorage.setItem("Discount1", 167)
          localStorage.setItem("Discount4", 51)
          localStorage.setItem("Discount2", 60)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  
  }
  
  if (localStorage.getItem("tickets_title") == "Genting SkyWorlds Outdoor Theme Park Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 825) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                              class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                              <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_292">1-Day Pass</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div class="tour-scratch-price"><span data-translate="w93">RP&nbsp;755</span></div>
                                              <div></div>
                                              <span class="tour-price" data-translate="w94">RP&nbsp;434</span>
                                              <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_6">Save up to 42%</div>
                                          </div>
                                      </div>
                                      <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                          <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                      </div>
                                  </div>
                              </div>
                              <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                  <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                      <ul>
                                          <li data-translate="ticket_694">1-day admission to Genting SkyWorlds Theme Park</li>
                                      </ul>
                                  </div>
                              </div>
                          </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                              class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                              <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_293">Combo: 1-Day Pass + Two-Way Standard Gondola Ride</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div class="tour-scratch-price"><span data-translate="w95">RP&nbsp;790</span></div>
                                              <div></div>
                                              <span class="tour-price" data-translate="w96">RP&nbsp;503</span>
                                              <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_7">Save up to 36%</div>
                                          </div>
                                      </div>
                                      <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                          <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                      </div>
                                  </div>
                              </div>
                              <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                  <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                      <ul>
                                          <li data-translate="ticket_695">Access to Genting Awana SkyWay standard gondola</li>
                                          <li data-translate="ticket_696">Two-way ride</li>
                                          <li data-translate="ticket_694">1-day admission to Genting SkyWorlds Theme Park</li>
                                      </ul>
                                  </div>
                              </div>
                          </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                              class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                              <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                  <h3 color="#444444" data-translate="home_title_294" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">1-Day Pass with Photo⁺</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div class="tour-scratch-price"><span data-translate="w97">RP&nbsp;876</span></div>
                                              <div></div>
                                              <span class="tour-price" data-translate="w98">RP&nbsp;565</span>
                                              <div data-translate="Disticket_8" class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 35%</div>
                                          </div>
                                      </div>
                                      <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                          <button data-translate="select_title" id="iYmuLF3" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                      </div>
                                  </div>
                              </div>
                              <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                  <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                      <ul>
                                          <li data-translate="ticket_695">Access to Genting Awana SkyWay standard gondola</li>
                                          <li data-translate="ticket_696">Two-way ride</li>
                                      </ul>
                                  </div>
                              </div>
                          </div></div>
  `
  
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 27)
          localStorage.setItem("Discount1", 47)
          localStorage.setItem("Discount4", 20)
          localStorage.setItem("Discount2", 41)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 32)
          localStorage.setItem("Discount1", 50)
          localStorage.setItem("Discount4", 25)
          localStorage.setItem("Discount2", 44)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 35)
          localStorage.setItem("Discount1", 54)
          localStorage.setItem("Discount4", 29)
          localStorage.setItem("Discount2", 48)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 125);
          localStorage.setItem("Discount1", 218);
          localStorage.setItem("Discount4", 93);
          localStorage.setItem("Discount2", 191);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 149.12);
          localStorage.setItem("Discount1", 233);
          localStorage.setItem("Discount4", 116);
          localStorage.setItem("Discount2", 205);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 162);
          localStorage.setItem("Discount1", 251);
          localStorage.setItem("Discount4", 135);
          localStorage.setItem("Discount2", 223);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Tickets to A'Famosa Melaka Waterpark") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
       <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_287">Water Theme Park Admission (Malaysian Residents Only)</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w103">RP&nbsp;165</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_690">Admission to the Water Theme Park attractions only</li>
                                              <li data-translate="ticket_691">Valid for Malaysian citizen only</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" data-translate="home_title_288" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Safari Wonderland Admission</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w103">RP&nbsp;189</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button data-translate="select_title" id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_690">Admission to the Water Theme Park attractions only</li>
                                              <li data-translate="ticket_691">Valid for Malaysian citizen only</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" data-translate="home_title_289" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Water Theme Park Admission + Meal</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w104">RP&nbsp;255</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button data-translate="select_title" id="iYmuLF3" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="ticket_690">Admission to the Water Theme Park attractions only</li>
                                              <li data-translate="ticket_691">Valid for Malaysian citizen only</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
  `
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 13)
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "4 to 80 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 13)
          localStorage.setItem("Titles1", "Adult");
          localStorage.setItem("discraption1", "Senior");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 15)
          localStorage.setItem("Titles1", "Adult");
          localStorage.setItem("discraption1", "Senior");
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 60);
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "4 to 80 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 60);
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "4 to 80 yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 69);
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "4 to 80 yrs")
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Tickets to A'Famosa Safari Wonderland in Melaka") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
       <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Safari Wonderland Admission + Meal</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w103">RP&nbsp;272</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li>Meal</li>
                                              <li>Entry to Safari Wonderland</li>
                                              <li>Valid for Malaysian citizen only</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Safari Wonderland Admission</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w107">RP&nbsp;189</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li>Entry to Safari Wonderland</li>
                                              <li>Valid for Malaysian citizen only</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
  `
    function StyledButton(key) {
      select_clear()
      window.location.href = "#selectScreen"
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        if (key == 0) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 13)
          localStorage.setItem("Discount4", 11)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 16)
          localStorage.setItem("Discount4", 14)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      } else {
        if (key == 0) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 60);
          localStorage.setItem("Discount4", 51);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 74);
          localStorage.setItem("Discount4", 65);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
  
  
  
  
      document.querySelector("#selectScreen").style = "display:grid;"
      document.querySelector("#tourSelectionBar").style = "display:block;"
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo: Zo Melaka + Menara Taming Sari Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
  
  
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Malasian</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                               <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="a4">RP&nbsp;213</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Non Malasian</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="zoomelakas_3">RP&nbsp;410</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                              </div></div>                   
      `
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
        if (key == 0) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 13)
          localStorage.setItem("Discount4", 11);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_3", 3);
          localStorage.setItem("Price1", 25);
          localStorage.setItem("Discount4", 19);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
  
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
        if (key == 0) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 60);
          localStorage.setItem("Discount4", 51);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_3", 3);
          localStorage.setItem("Price1", 116);
          localStorage.setItem("Discount4", 88);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 5%): Zoo Melaka + Melaka Crocodile & Recreational Park Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
  
  
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Malasian</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                               <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="zoomelakas_4">RP&nbsp;213</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Non Malasian</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="zoomelakas_3">RP&nbsp;410</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                              </div></div>                   
      `
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
        if (key == 0) {
          localStorage.setItem("count2_2", 2);
          localStorage.setItem("Price1", 12);
          localStorage.setItem("Discount1", 14);
          localStorage.setItem("Discount4", 10);
          localStorage.setItem("Discount2", 11);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_2", 2);
          localStorage.setItem("Price1", 25);
          localStorage.setItem("Discount1", 27);
          localStorage.setItem("Discount4", 19);
          localStorage.setItem("Discount2", 21);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
  
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
        if (key == 0) {
          localStorage.setItem("count2_2", 2);
          localStorage.setItem("Price1", 55);
localStorage.setItem("Discount1", 65);
localStorage.setItem("Discount4", 46);
localStorage.setItem("Discount2", 51);
         
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_2", 2);
          localStorage.setItem("Price1", 116);
localStorage.setItem("Discount1", 125);
localStorage.setItem("Discount4", 88);
localStorage.setItem("Discount2", 97);
         
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 28%): Aquaria KLCC Skip-the-Line Tickets + Zoo Negara & Panda Conservation Centre Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
  
  
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                               <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="aquaria_tickets_100">RP&nbsp;200</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Non-Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="aquaria_tickets_101">RP&nbsp;410</span>
                                             </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                              </div></div>                   
      `
  
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 16)
          localStorage.setItem("Discount1", 20);
          localStorage.setItem("Discount4", 12);
          localStorage.setItem("Discount2", 15);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 25)
          localStorage.setItem("Discount1", 28);
          localStorage.setItem("Discount4", 23);
          localStorage.setItem("Discount2", 26);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 74);
          localStorage.setItem("Discount1", 88);
          localStorage.setItem("Discount4", 55);
          localStorage.setItem("Discount2", 69);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 116);
          localStorage.setItem("Discount1", 130);
          localStorage.setItem("Discount4", 107);
          localStorage.setItem("Discount2", 121);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }

  
  if (localStorage.getItem("tickets_title") == "Tickets to SplashMania Waterpark at Gamuda Cove Selangor") {
    document.querySelector("#selectScreen").style = "display:grid;";
    document.querySelector("#tourSelectionBar").style = "display:block;";
  
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 23);
        localStorage.setItem("Titles1", "Adult")
        localStorage.setItem("discraption1", "12 to 99 yrs")
      } else {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 107);
        localStorage.setItem("Titles1", "Adult")
        localStorage.setItem("discraption1", "12 to 99 yrs")
  
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Book Kidzania Kuala Lampur Tickets") {
    document.querySelector("#selectScreen").style = "display:grid;";
    document.querySelector("#tourSelectionBar").style = "display:block;";
  
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count1_3", 3);
        localStorage.setItem("Price1", 14);
        localStorage.setItem("Discount4", 24);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count1_3", 3);
        localStorage.setItem("Price1", 65);
        localStorage.setItem("Discount4", 111);        
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
  
      }
    }
  }

  if (localStorage.getItem("tickets_title") == "Bayou Lagoon Water Park in Melaka") {
    document.querySelector("#selectScreen").style = "display:grid;";
    document.querySelector("#tourSelectionBar").style = "display:block;";
  
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 4);
        localStorage.setItem("Discount1", 6);
        localStorage.setItem("Discount4", 3);
        localStorage.setItem("Discount2", 4);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 18);
        localStorage.setItem("Discount1", 27);
        localStorage.setItem("Discount4", 13);
        localStorage.setItem("Discount2", 18);        
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Wonderpark Melaka Tickets") {
    document.querySelector("#selectScreen").style = "display:grid;";
    document.querySelector("#tourSelectionBar").style = "display:block;";
  
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 5);
        localStorage.setItem("Discount4", 5);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 23);
        localStorage.setItem("Discount4", 23);        
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 37%) : Bayou Lagoon Water Park + Magic Art Magic Art 3D Museum Tickets") {
    document.querySelector("#selectScreen").style = "display:grid;";
    document.querySelector("#tourSelectionBar").style = "display:block;";
  
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 6);
        localStorage.setItem("Discount4", 4);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 27);
        localStorage.setItem("Discount4", 18);        
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Magic Art 3D Museum") {
    document.querySelector("#selectScreen").style = "display:grid;";
    document.querySelector("#tourSelectionBar").style = "display:block;";
  
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 2);
        localStorage.setItem("Discount1", 4);
        localStorage.setItem("Discount4", 2);
        localStorage.setItem("Discount2", 3);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 9);
        localStorage.setItem("Discount1", 18);
        localStorage.setItem("Discount4", 9);
        localStorage.setItem("Discount2", 13);        
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "LEGOLAND® Malaysia Theme Park - 1 Day Pass") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
  
  
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">LEGOLAND® Malaysia Theme Park 1-Day Pass</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  
                                                  <div></div>
                                                  <span class="tour-price" data-translate="p100">RP&nbsp;124</span>
                                                
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="super1">Access to LEGOLAND® Water Park</li>
                                              <li data-translate="super2">Access to SEA LIFE</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">LEGOLAND® Malaysia Theme Park + SEA LIFE 1-Day Pass</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  
                                                  <div></div>
                                                  <span class="tour-price" data-translate="p101">RP&nbsp;151</span>
                                                 
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="super1">Access to LEGOLAND® Water Park</li>
                                              <li data-translate="super2">Access to SEA LIFE</li>
                                              <li data-translate="super3">Full-day access to LEGOLAND® Malaysia Theme Park</li>
                                          </ul>
                                       </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">LEGOLAND® Malaysia Theme Park + SEA LIFE + LEGOLAND® Water Park 1-Day Pass</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  
                                                  <div></div>
                                                  <span class="tour-price" data-translate="p102">RP&nbsp;151</span>
                                                 
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF3" data-translate="select_title" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="super1">Access to LEGOLAND® Water Park</li>
                                              <li data-translate="super2">Access to SEA LIFE</li>
                                              <li data-translate="super3">Full-day access to LEGOLAND® Malaysia Theme Park</li>
                                              <li data-translate="super4">Access to all rides</li>
                                          </ul>
                                       </div>
                                  </div>
                              </div></div>                                    
    `
  
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
        if (key == 0) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 42);
          localStorage.setItem("Discount1", 53);
          localStorage.setItem("Discount4", 34);
          localStorage.setItem("Discount2", 42);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 54);
          localStorage.setItem("Discount1", 68);
          localStorage.setItem("Discount4", 44);
          localStorage.setItem("Discount2", 55);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 2) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 68);
          localStorage.setItem("Discount1", 85);
          localStorage.setItem("Discount4", 56);
          localStorage.setItem("Discount2", 70);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
        if (key == 0) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 195);
          localStorage.setItem("Discount1", 247);
          localStorage.setItem("Discount4", 158);
          localStorage.setItem("Discount2", 195);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 251);
          localStorage.setItem("Discount1", 316);
          localStorage.setItem("Discount4", 205);
          localStorage.setItem("Discount2", 256);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 316);
          localStorage.setItem("Discount1", 396);
          localStorage.setItem("Discount4", 261);
          localStorage.setItem("Discount2", 326);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Theme Park 2 Day Pass to LEGOLAND® Malaysia") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
  
  
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">LEGOLAND Malaysia - 2 Days Theme Park + SEA LIFE</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                             <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p79">RP&nbsp;213</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">LEGOLAND Malaysia - 2 Days Theme Park + SEA LIFE</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p80">RP&nbsp;410</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>                   
    `
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
        if (key == 0) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 67);
          localStorage.setItem("Discount1", 79);
          localStorage.setItem("Discount4", 56);
          localStorage.setItem("Discount2", 66);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 84);
          localStorage.setItem("Discount1", 96);
          localStorage.setItem("Discount4", 71);
          localStorage.setItem("Discount2", 81);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
  
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
        if (key == 0) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 312);
          localStorage.setItem("Discount1", 368);
          localStorage.setItem("Discount4", 261);
          localStorage.setItem("Discount2", 307);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 391);
          localStorage.setItem("Discount1", 447);
          localStorage.setItem("Discount4", 330);
          localStorage.setItem("Discount2", 377);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Water Park 1 Day Pass in LEGOLAND® Malaysia") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 550) {
        document.querySelector(".swiper-button-prev").style = "display:flex"
        document.querySelector(".swiper-button-next").style = "display:flex"
      } else {
        document.querySelector(".swiper-button-prev").style = "display:none"
        document.querySelector(".swiper-button-next").style = "display:none"
      }
    }
  
    // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
    window.addEventListener('load', checkMediaQuery);
    window.addEventListener('resize', checkMediaQuery);
  
  
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">SEA LIFE 1-Day Pass</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  
                                                  <div></div>
                                                  <span class="tour-price" data-translate="p81">RP&nbsp;124</span>
                                                
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="super1">Access to LEGOLAND® Water Park</li>
                                              <li data-translate="super2">Access to SEA LIFE</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">LEGOLAND Malaysia - 1-Day Water Park</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  
                                                  <div></div>
                                                  <span class="tour-price" data-translate="p82">RP&nbsp;151</span>
                                                 
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="super1">Access to LEGOLAND® Water Park</li>
                                              <li data-translate="super2">Access to SEA LIFE</li>
                                              <li data-translate="super3">Full-day access to LEGOLAND® Malaysia Theme Park</li>
                                          </ul>
                                       </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">LEGOLAND® Malaysia Theme Park + SEA LIFE + LEGOLAND® Water Park 1-Day Pass</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  
                                                  <div></div>
                                                  <span class="tour-price" data-translate="p83">RP&nbsp;151</span>
                                                 
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF3" data-translate="select_title" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="super1">Access to LEGOLAND® Water Park</li>
                                              <li data-translate="super2">Access to SEA LIFE</li>
                                              <li data-translate="super3">Full-day access to LEGOLAND® Malaysia Theme Park</li>
                                              <li data-translate="super4">Access to all rides</li>
                                          </ul>
                                       </div>
                                  </div>
                              </div></div>                                    
    `
  
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
        if (key == 0) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 18);
          localStorage.setItem("Discount1", 22);
          localStorage.setItem("Discount4", 14);
          localStorage.setItem("Discount2", 17);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 30);
          localStorage.setItem("Discount1", 38);
          localStorage.setItem("Discount4", 25);
          localStorage.setItem("Discount2", 31);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 2) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 68);
          localStorage.setItem("Discount1", 85);
          localStorage.setItem("Discount4", 56);
          localStorage.setItem("Discount2", 70);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    } else {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
        if (key == 0) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 83);
          localStorage.setItem("Discount1", 102);
          localStorage.setItem("Discount4", 65);
          localStorage.setItem("Discount2", 79);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 139);
          localStorage.setItem("Discount1", 177);
          localStorage.setItem("Discount4", 116);
          localStorage.setItem("Discount2", 144);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 316);
          localStorage.setItem("Discount1", 396);
          localStorage.setItem("Discount4", 261);
          localStorage.setItem("Discount2", 326);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  } 