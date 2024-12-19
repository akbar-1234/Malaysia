
//  Combo (Save 16%): KL Tower Observation Deck + KLIA Ekspress Tickets     // Crocodile Adventureland Langwaki
document.querySelector(".tickets_title").innerHTML = localStorage.getItem("tickets_title")

function select_clear() {
  localStorage.removeItem("count3")
  localStorage.removeItem("Price1")
  localStorage.removeItem("count2_3")
  localStorage.removeItem("Discount4")
  localStorage.removeItem("count1")
  localStorage.removeItem("discraption1")
  localStorage.removeItem("Titles1")
  localStorage.removeItem("Discount1")
  localStorage.removeItem("Discount2")
  localStorage.removeItem("count1_3")
  localStorage.removeItem("count4")
  localStorage.removeItem("count4_1")
  localStorage.removeItem("count2_2")
  localStorage.removeItem("count1_1")
  localStorage.removeItem("discraption2")
  localStorage.removeItem("discraption3")
  localStorage.removeItem("discraption4")
  localStorage.removeItem("Titles2")
  localStorage.removeItem("Titles3")
  localStorage.removeItem("Titles4")
  localStorage.removeItem("Discount3")
  localStorage.removeItem("Discount5")
  localStorage.removeItem("Discount6")
  localStorage.removeItem("Discount7")
  localStorage.removeItem("count3_3")
  localStorage.removeItem("Count1_1")
  localStorage.removeItem("Count1_3")
  localStorage.removeItem("TotalPrice3")
  localStorage.removeItem("Title1_3")
  localStorage.removeItem("TotalPrice")
  localStorage.removeItem("allDiscount")
  localStorage.removeItem("AllPrice")
  localStorage.removeItem("Count1_2")
  localStorage.removeItem("TotalPrice2")
  localStorage.removeItem("Title1_2")
  localStorage.removeItem("Title1_1")
  localStorage.removeItem("Count1_4")
  localStorage.removeItem("Price2")
  localStorage.removeItem("TotalPrice4")
  localStorage.removeItem("Title1_4")
  localStorage.removeItem("Price2")
  localStorage.removeItem("Price2")
  localStorage.removeItem("Price3")
  localStorage.removeItem("for_year")
  localStorage.removeItem("count2")
  localStorage.removeItem("nones")
}


if (localStorage.getItem("tickets_title") == "Combo (Save 17%): KL Tower Observation Deck + KLIA Ekspress Tickets") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">KL Tower Observation Deck + One-Way: KLIA T1/T2 to KL Sentral</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                             <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q3">RP&nbsp;207</span>
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
                                            <li>One-way ticket from KLIA T1/T2 to KL Sentral</li>
                                            <li>Free 4G Wi-Fi</li>
                                            <li>Air-conditioning onboard</li>
                                            <li>Luggage space</li>
                                            <li>Digital infotainment</li>
                                            <li>Admission to KL Tower Observation Deck</li>
                                            <li>Valid for Malaysian citizens</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">KL Tower Observation Deck + One-Way: KL Sentral to KLIA T1/T2</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q4">Rp&nbsp;231</span>
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
                                            <li>One-way ticket from KL Sentral to KLIA T1/T2</li>
                                            <li>Free 4G Wi-Fi</li>
                                            <li>Air-conditioning onboard</li>
                                            <li>Luggage space</li>
                                            <li>Digital infotainment</li>
                                            <li>Admission to KL Tower Observation Deck</li>
                                            <li>Valid for Malaysian citizens</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>                   
    `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 14)
        localStorage.setItem("Discount1", 17);
        localStorage.setItem("Discount4", 19);
        localStorage.setItem("Discount2", 23);
        localStorage.setItem("Discount5", 8);
        localStorage.setItem("Discount3", 10);
        localStorage.setItem("Discount7", 10);
        localStorage.setItem("Discount6", 12);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 12yrs")
        localStorage.setItem("discraption2", "Above 12yrs")
        localStorage.setItem("discraption3", "4 to 11yrs")
        localStorage.setItem("discraption4", "4 to 11yrs")
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 14)
        localStorage.setItem("Discount1", 17);
        localStorage.setItem("Discount4", 19);
        localStorage.setItem("Discount2", 23);
        localStorage.setItem("Discount5", 8);
        localStorage.setItem("Discount3", 10);
        localStorage.setItem("Discount7", 10);
        localStorage.setItem("Discount6", 12);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 12yrs")
        localStorage.setItem("discraption2", "Above 12yrs")
        localStorage.setItem("discraption3", "4 to 11yrs")
        localStorage.setItem("discraption4", "4 to 11yrs")
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 65) // 14 * 4.66
localStorage.setItem("Discount1", 79) // 17 * 4.66
localStorage.setItem("Discount4", 88) // 19 * 4.66
localStorage.setItem("Discount2", 107) // 23 * 4.66
localStorage.setItem("Discount5", 37) // 8 * 4.66
localStorage.setItem("Discount3", 46) // 10 * 4.66
localStorage.setItem("Discount7", 46) // 10 * 4.66
localStorage.setItem("Discount6", 55) // 12 * 4.66

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 12yrs")
        localStorage.setItem("discraption2", "Above 12yrs")
        localStorage.setItem("discraption3", "4 to 11yrs")
        localStorage.setItem("discraption4", "4 to 11yrs")
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 65) // 14 * 4.66
localStorage.setItem("Discount1", 79) // 17 * 4.66
localStorage.setItem("Discount4", 88) // 19 * 4.66
localStorage.setItem("Discount2", 107) // 23 * 4.66
localStorage.setItem("Discount5", 37) // 8 * 4.66
localStorage.setItem("Discount3", 46) // 10 * 4.66
localStorage.setItem("Discount7", 46) // 10 * 4.66
localStorage.setItem("Discount6", 55) // 12 * 4.66

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 12yrs")
        localStorage.setItem("discraption2", "Above 12yrs")
        localStorage.setItem("discraption3", "4 to 11yrs")
        localStorage.setItem("discraption4", "4 to 11yrs")
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Combo (Save 17%):KL Tower + Petronas Twin Towers Tickets") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">KL Tower + Petronas Tower: Malaysian Citizens</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                             <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q5">RP&nbsp;586</span>
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
                                            <li>Entry to KL Tower Observation Deck</li>
                                            <li>Entry to Sky Deck</li>
                                            <li>Entry to Sky Box</li>
                                            <li>Skip-the-line entry to Petronas Twin Towers</li>
                                            <li>Access to Observation Deck & SkyBridge</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">KL Tower + Petronas Tower: Non-Malaysian Citizens</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q6">RP&nbsp;803</span>
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
                                            <li>Entry to KL Tower Observation Deck</li>
                                            <li>Entry to Sky Deck</li>
                                            <li>Entry to Sky Box</li>
                                            <li>Skip-the-line entry to Petronas Twin Towers</li>
                                            <li>Access to Observation Deck & SkyBridge</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>                   
    `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 36);
        localStorage.setItem("Discount1", 43);
        localStorage.setItem("Discount4", 25);
        localStorage.setItem("Discount2", 30);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 49);
        localStorage.setItem("Discount1", 59);
        localStorage.setItem("Discount4", 42);
        localStorage.setItem("Discount2", 50);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 167) // 36 * 4.66
localStorage.setItem("Discount1", 200) // 43 * 4.66
localStorage.setItem("Discount4", 116) // 25 * 4.66
localStorage.setItem("Discount2", 139) // 30 * 4.66

        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 228) // 49 * 4.66
localStorage.setItem("Discount1", 274) // 59 * 4.66
localStorage.setItem("Discount4", 195) // 42 * 4.66
localStorage.setItem("Discount2", 233) // 50 * 4.66

        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Crocodile Adventureland Langwaki") {
  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_282">Adventure Combo</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="q7">RP&nbsp;8,49</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q8">RP&nbsp;124</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_3">Save up to 10%</div>
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
                                            <li data-translate="ticket_675">Admission ticket to Crocodile Adventureland Langkawi</li>
                                            <li data-translate="ticket_676">Access to all facilities, activities and entertainment shows</li>
                                            <li data-translate="ticket_677">Two packets of juvenile crocodile food</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block " data-translate="home_title_283">Explore Combo</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="q9">RP&nbsp;189</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q10">RP&nbsp;151</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="ticket_653">Save up to 19%</div>
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
                                            <li data-translate="ticket_678">Juvenile feeding</li>
                                            <li data-translate="ticket_679">Guided shared park tour</li>
                                            <li data-translate="ticket_680">Crocodile fishing</li>
                                            <li data-translate="ticket_681">Admission ticket to Crocodile Adventureland Langkawi</li>
                                            <li data-translate="ticket_682">Access to all facilities, activities and entertainment shows</li>
                                        </ul>
                                     </div>
                                </div>
                            </div></div> 
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_283">Snack Bites Combo</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="q11">Rp&nbsp;238</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q12">Rp&nbsp;213</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_3">Save up to 10%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF3" onclick="StyledButton(2)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="select_title">Select</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                    <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                        <ul>
                                            <li data-translate="ticket_678">Juvenile feeding</li>
                                            <li data-translate="ticket_679">Guided shared park tour</li>
                                            <li data-translate="ticket_680">Crocodile fishing</li>
                                            <li data-translate="ticket_681">Admission ticket to Crocodile Adventureland Langkawi</li>
                                            <li data-translate="ticket_682">Access to all facilities, activities and entertainment shows</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>     
                            
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_284">Croc Encounter Combo</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="q13">Rp&nbsp;303</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q14">RP&nbsp;272</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_3">Save up to 10%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF4" onclick="StyledButton(3)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                    <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                        <ul>
                                            <li data-translate="ticket_678">Juvenile feeding</li>
                                            <li data-translate="ticket_679">Guided shared park tour</li>
                                            <li data-translate="ticket_680">Crocodile fishing</li>
                                            <li data-translate="ticket_681">Admission ticket to Crocodile Adventureland Langkawi</li>
                                            <li data-translate="ticket_682">Access to all facilities, activities and entertainment shows</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>               
    `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 7)
        localStorage.setItem("Discount1", 8);
        localStorage.setItem("Discount4", 8);
        localStorage.setItem("Discount2", 10);
        localStorage.setItem("Discount5", 5);
        localStorage.setItem("Discount3", 6);
        localStorage.setItem("Discount7", 6);
        localStorage.setItem("Discount6", 8);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 13yrs")
        localStorage.setItem("discraption2", "Above 13yrs")
        localStorage.setItem("discraption3", "Child/Senior above 60 years old")
        localStorage.setItem("discraption4", "3 to 12 yrs")
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 9)
        localStorage.setItem("Discount1", 11);
        localStorage.setItem("Discount4", 12);
        localStorage.setItem("Discount2", 13);
        localStorage.setItem("Discount5", 7);
        localStorage.setItem("Discount3", 9);
        localStorage.setItem("Discount7", 10);
        localStorage.setItem("Discount6", 11);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 13yrs")
        localStorage.setItem("discraption2", "Above 13yrs")
        localStorage.setItem("discraption3", "Child/Senior above 60 years old")
        localStorage.setItem("discraption4", "3 to 12 yrs")
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
      if (key == 2) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 13)
        localStorage.setItem("Discount1", 14);
        localStorage.setItem("Discount4", 15);
        localStorage.setItem("Discount2", 16);
        localStorage.setItem("Discount5", 11);
        localStorage.setItem("Discount3", 12);
        localStorage.setItem("Discount7", 13);
        localStorage.setItem("Discount6", 14);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 13yrs")
        localStorage.setItem("discraption2", "Above 13yrs")
        localStorage.setItem("discraption3", "Child/Senior above 60 years old")
        localStorage.setItem("discraption4", "3 to 12 yrs")
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
      if (key == 3) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 16)
        localStorage.setItem("Discount1", 18);
        localStorage.setItem("Discount4", 18);
        localStorage.setItem("Discount2", 20);
        localStorage.setItem("Discount5", 13);
        localStorage.setItem("Discount3", 14);
        localStorage.setItem("Discount7", 15);
        localStorage.setItem("Discount6", 16);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 13yrs")
        localStorage.setItem("discraption2", "Above 13yrs")
        localStorage.setItem("discraption3", "Child/Senior above 60 years old")
        localStorage.setItem("discraption4", "3 to 12 yrs")
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 32); // 7 * 4.66
localStorage.setItem("Discount1", 37); // 8 * 4.66
localStorage.setItem("Discount4", 37); // 8 * 4.66
localStorage.setItem("Discount2", 46); // 10 * 4.66
localStorage.setItem("Discount5", 23); // 5 * 4.66
localStorage.setItem("Discount3", 27); // 6 * 4.66
localStorage.setItem("Discount7", 27); // 6 * 4.66
localStorage.setItem("Discount6", 37); // 8 * 4.66

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 13yrs")
        localStorage.setItem("discraption2", "Above 13yrs")
        localStorage.setItem("discraption3", "Child/Senior above 60 years old")
        localStorage.setItem("discraption4", "3 to 12 yrs")
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 41); // 9 * 4.66
localStorage.setItem("Discount1", 51); // 11 * 4.66
localStorage.setItem("Discount4", 55); // 12 * 4.66
localStorage.setItem("Discount2", 60); // 13 * 4.66
localStorage.setItem("Discount5", 32); // 7 * 4.66
localStorage.setItem("Discount3", 41); // 9 * 4.66
localStorage.setItem("Discount7", 46); // 10 * 4.66
localStorage.setItem("Discount6", 51); // 11 * 4.66

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 13yrs")
        localStorage.setItem("discraption2", "Above 13yrs")
        localStorage.setItem("discraption3", "Child/Senior above 60 years old")
        localStorage.setItem("discraption4", "3 to 12 yrs")
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
      if (key == 2) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 60); // 13 * 4.66
localStorage.setItem("Discount1", 65); // 14 * 4.66
localStorage.setItem("Discount4", 69); // 15 * 4.66
localStorage.setItem("Discount2", 74); // 16 * 4.66
localStorage.setItem("Discount5", 51); // 11 * 4.66
localStorage.setItem("Discount3", 55); // 12 * 4.66
localStorage.setItem("Discount7", 60); // 13 * 4.66
localStorage.setItem("Discount6", 65); // 14 * 4.66

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 13yrs")
        localStorage.setItem("discraption2", "Above 13yrs")
        localStorage.setItem("discraption3", "Child/Senior above 60 years old")
        localStorage.setItem("discraption4", "3 to 12 yrs")
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
      if (key == 3) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 74); // 16 * 4.66
localStorage.setItem("Discount1", 83); // 18 * 4.66
localStorage.setItem("Discount4", 83); // 18 * 4.66
localStorage.setItem("Discount2", 93); // 20 * 4.66
localStorage.setItem("Discount5", 60); // 13 * 4.66
localStorage.setItem("Discount3", 65); // 14 * 4.66
localStorage.setItem("Discount7", 69); // 15 * 4.66
localStorage.setItem("Discount6", 74); // 16 * 4.66

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 13yrs")
        localStorage.setItem("discraption2", "Above 13yrs")
        localStorage.setItem("discraption3", "Child/Senior above 60 years old")
        localStorage.setItem("discraption4", "3 to 12 yrs")
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Langwaki UnderWater World Tickets") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_274">Standard Ticket (Malaysian)</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="q22">RP&nbsp;172</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q23">RP&nbsp;155</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_3">Save up to 10%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_275">Standard Ticket (Non-Malaysian)</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="q24">RP&nbsp;213</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q25">RP&nbsp;200</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="ticket_657">Save up to 6%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)" data-translate="select_title"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>    
    `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 9);
        localStorage.setItem("Discount1", 10);
        localStorage.setItem("Discount4", 7);
        localStorage.setItem("Discount2", 8);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        localStorage.setItem("discraption1", "Above 13yrs")
        localStorage.setItem("discraption2", "3 to 12yrs")
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 12);
        localStorage.setItem("Discount1", 13);
        localStorage.setItem("Discount4", 9);
        localStorage.setItem("Discount2", 10);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        localStorage.setItem("discraption1", "Above 13yrs")
        localStorage.setItem("discraption2", "3 to 12yrs")
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("Price1", 41); // 9 * 4.66
localStorage.setItem("Discount1", 46); // 10 * 4.66
localStorage.setItem("Discount4", 32); // 7 * 4.66
localStorage.setItem("Discount2", 37); // 8 * 4.66

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        localStorage.setItem("discraption1", "Above 13yrs")
        localStorage.setItem("discraption2", "3 to 12yrs")
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 55); // 12 * 4.66
localStorage.setItem("Discount1", 60); // 13 * 4.66
localStorage.setItem("Discount4", 41); // 9 * 4.66
localStorage.setItem("Discount2", 46); // 10 * 4.66

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        localStorage.setItem("discraption1", "Above 13yrs")
        localStorage.setItem("discraption2", "3 to 12yrs")
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Entopia Penang Tickets: Butterfly Farm") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_272">Standard Admission (Malaysian)</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="q26">RP&nbsp;224</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q27">RP&nbsp;200</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_3">Save up to 10%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_273">Standard Ticket (Non-Malaysian)</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="q28">RP&nbsp;258</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q29">RP&nbsp;220</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_5">Save up to 15%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)" data-translate="select_title"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>    
    `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 12);
        localStorage.setItem("Discount1", 13);
        localStorage.setItem("Discount4", 8);
        localStorage.setItem("Discount2", 9);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 13);
        localStorage.setItem("Discount1", 16);
        localStorage.setItem("Discount4", 10);
        localStorage.setItem("Discount2", 11);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 55); // 12 * 4.66
localStorage.setItem("Discount1", 60); // 13 * 4.66
localStorage.setItem("Discount4", 37); // 8 * 4.66
localStorage.setItem("Discount2", 41); // 9 * 4.66

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 60); // 13 * 4.66
localStorage.setItem("Discount1", 74); // 16 * 4.66
localStorage.setItem("Discount4", 46); // 10 * 4.66
localStorage.setItem("Discount2", 51); // 11 * 4.66

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Melaka Crocodile & Recteational Park Admission") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 825) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_267">Malaysian Citizen</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q36">RP&nbsp;552</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_268">Non-Malaysian Citizen</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q37">RP&nbsp;103</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
    `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 3);
        localStorage.setItem("Discount4", 2);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 6);
        localStorage.setItem("Discount4", 5);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 13);
        localStorage.setItem("Discount4", 9);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 27);
        localStorage.setItem("Discount4", 23);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Combo (Save 9%): Melaka Wonderland Water Theme Park + Melaka Crocodile & Recreational Park Tickets") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Malaysian</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q38">RP&nbsp;251</span>
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
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Non Malaysian</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="jallod_1">RP&nbsp;251</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
`
  if (sessionStorage.getItem('selectedValyut') == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 12);
        localStorage.setItem("Discount1", 13);
        localStorage.setItem("Discount4", 11);
        localStorage.setItem("Discount2", 12);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 16);
        localStorage.setItem("Discount1", 17);
        localStorage.setItem("Discount4", 14);
        localStorage.setItem("Discount2", 15);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 55); // 12 * 4.66
localStorage.setItem("Discount1", 60); // 13 * 4.66
localStorage.setItem("Discount4", 51); // 11 * 4.66
localStorage.setItem("Discount2", 55); // 12 * 4.66

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 74); // 16 * 4.66
localStorage.setItem("Discount1", 79); // 17 * 4.66
localStorage.setItem("Discount4", 65); // 14 * 4.66
localStorage.setItem("Discount2", 69); // 15 * 4.66

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Combo (Save 10%): Zoo Melaka + Melaka Crocodila & Recreational Park Tickets") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_267">Malaysian Citizens</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q39">RP&nbsp;200</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_268">Non-Malaysian Citizens</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q40">RP&nbsp;410</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)"data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 12);
        localStorage.setItem("Discount1", 13);
        localStorage.setItem("Discount4", 10);
        localStorage.setItem("Discount2", 11);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 25);
        localStorage.setItem("Discount1", 26);
        localStorage.setItem("Discount4", 19);
        localStorage.setItem("Discount2", 20);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 55); // 12 * 4.66
localStorage.setItem("Discount1", 60); // 13 * 4.66
localStorage.setItem("Discount4", 46); // 10 * 4.66
localStorage.setItem("Discount2", 51); // 11 * 4.66

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 116); // 25 * 4.66
localStorage.setItem("Discount1", 121); // 26 * 4.66
localStorage.setItem("Discount4", 88); // 19 * 4.66
localStorage.setItem("Discount2", 93); // 20 * 4.66

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}


if (localStorage.getItem("tickets_title") == "Combo (Save 18%): Petrosains, The Discovery Center + Zoo Negara Entry Tickets") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_263">Combo: Petrosains + Zoo Negara Tickets for Malaysian Citizens</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q43">RP&nbsp;59</span>
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
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_264">Combo: Petrosains + Zoo Negara Tickets for Non-Malaysian Citizens</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q44">RP&nbsp;365</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 10);
        localStorage.setItem("Discount1", 12);
        localStorage.setItem("Discount4", 6);
        localStorage.setItem("Discount2", 7);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 19);
        localStorage.setItem("Discount1", 23);
        localStorage.setItem("Discount4", 16);
        localStorage.setItem("Discount2", 19);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 46); // 10 * 4.66
localStorage.setItem("Discount1", 55); // 12 * 4.66
localStorage.setItem("Discount4", 27); // 6 * 4.66
localStorage.setItem("Discount2", 32); // 7 * 4.66

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 88); // 19 * 4.66
localStorage.setItem("Discount1", 107); // 23 * 4.66
localStorage.setItem("Discount4", 74); // 16 * 4.66
localStorage.setItem("Discount2", 88); // 19 * 4.66

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Tickets to Petronas Twin Towers") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_261">Malaysian Passport Holders</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q45">RP&nbsp;120</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block"data-translate="home_title_262">Non-Malaysian Passport Holders</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q46">RP&nbsp;338</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count1_3", 3);
        localStorage.setItem("Price1", 7);
        localStorage.setItem("Discount4", 3);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count1_3", 3);
        localStorage.setItem("Price1", 20);
        localStorage.setItem("Discount4", 10);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count1_3", 3);
        localStorage.setItem("Price1", 32);
        localStorage.setItem("Discount4", 13);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count1_3", 3);
        localStorage.setItem("Price1", 93);
        localStorage.setItem("Discount4", 46);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Langwaki Rainforest Jungle Trekking") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" data-translate="home_title_257" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Langkawi Rainforest Jungle Trekking</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q47">RP&nbsp;414</span>
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
                                    <h3 color="#444444" data-translate="home_title_258" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Langkawi Rainforest Jungle Trekking with Transfers</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q48">RP&nbsp;621</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 25);
        localStorage.setItem("Titles1", "Adult")
        localStorage.setItem("discraption1", "12 to 99 yrs")
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 38);
        localStorage.setItem("Titles1", "Adult")
        localStorage.setItem("discraption1", "12 to 99 yrs")
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 116);
        localStorage.setItem("Titles1", "Adult")
        localStorage.setItem("discraption1", "12 to 99 yrs")
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 177);
        localStorage.setItem("Titles1", "Adult")
        localStorage.setItem("discraption1", "12 to 99 yrs")
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Eagles Feeding Experience in Kuala Selangor") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" data-translate="home_title_259" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Eagles Feeding Experience in Kuala Selangor</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q49">RP&nbsp;27</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" data-translate="home_title_260" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Blue Tears + Eagle Feeding + Fireflies Sighting</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q50">RP&nbsp;690</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 8);
        localStorage.setItem("Discount4", 5);
        localStorage.setItem("Discount5", 4);
        localStorage.setItem("Discount7", 6);
        localStorage.setItem("Titles1", "Non-Malaysian Adult");
        localStorage.setItem("Titles2", "Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 20);
        localStorage.setItem("Discount4", 15);
        localStorage.setItem("Discount5", 12);
        localStorage.setItem("Discount7", 15);
        localStorage.setItem("Titles1", "Non-Malaysian Adult");
        localStorage.setItem("Titles2", "Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 37); // 8 * 4.66
localStorage.setItem("Discount4", 23); // 5 * 4.66
localStorage.setItem("Discount5", 18); // 4 * 4.66
localStorage.setItem("Discount7", 27); // 6 * 4.66

        localStorage.setItem("Titles1", "Non-Malaysian Adult");
        localStorage.setItem("Titles2", "Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 93); // 20 * 4.66
localStorage.setItem("Discount4", 69); // 15 * 4.66
localStorage.setItem("Discount5", 55); // 12 * 4.66
localStorage.setItem("Discount7", 69); // 15 * 4.66

        localStorage.setItem("Titles1", "Non-Malaysian Adult");
        localStorage.setItem("Titles2", "Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Private Guided Tour of Kuala Lumpur with Petronas Twin Towers & Batu Caves") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 1550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_253">7 to 15 People</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q51">RP&nbsp;227</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                             <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block data-translate="home_title_254"">4 to 6 People</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q52">RP&nbsp;269</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                             <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_255">2 to 3 People</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q53">RP&nbsp;327</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF3" onclick="StyledButton(2)"  data-translate="select_title"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                             <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block data-translate="home_title_256"">1 Person</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q54">RP&nbsp;424</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF4" onclick="StyledButton(3)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 57);
        localStorage.setItem("Discount1", 67);
        localStorage.setItem("Discount4", 52);
        localStorage.setItem("Discount2", 62);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 69);
        localStorage.setItem("Discount1", 79);
        localStorage.setItem("Discount4", 52);
        localStorage.setItem("Discount2", 62);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }
      if (key == 2) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 85);
        localStorage.setItem("Discount1", 96);
        localStorage.setItem("Discount4", 52);
        localStorage.setItem("Discount2", 62);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

      if (key == 3) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 115);
        localStorage.setItem("Discount1", 124);
        localStorage.setItem("Discount4", 52);
        localStorage.setItem("Discount2", 62);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF4").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 266); // 57 * 4.66
localStorage.setItem("Discount1", 311); // 67 * 4.66
localStorage.setItem("Discount4", 241); // 52 * 4.66
localStorage.setItem("Discount2", 289); // 62 * 4.66

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 322); // 69 * 4.66
localStorage.setItem("Discount1", 368); // 79 * 4.66
localStorage.setItem("Discount4", 241); // 52 * 4.66
localStorage.setItem("Discount2", 289); // 62 * 4.66

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }
      if (key == 2) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 396); // 85 * 4.66
localStorage.setItem("Discount1", 447); // 96 * 4.66
localStorage.setItem("Discount4", 241); // 52 * 4.66
localStorage.setItem("Discount2", 289); // 62 * 4.66

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

      if (key == 3) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 536); // 115 * 4.66
localStorage.setItem("Discount1", 577); // 124 * 4.66
localStorage.setItem("Discount4", 241); // 52 * 4.66
localStorage.setItem("Discount2", 289); // 62 * 4.66

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF4").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "KL Tower Tickets") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 825) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">Sky Deck + Sky Box</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="q58">RP&nbsp;244</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q59">RP&nbsp;189</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_1">Save up to 23%</div>
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
                                            <li data-translate="ticket_666">Admission to Sky Deck (open-air skyline views)</li>
                                            <li data-translate="ticket_667">Admission to Sky Box (thrilling glass cube experience)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" data-translate="" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Observation Deck + Sky Deck + Sky Box
</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="q60">RP&nbsp;345</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q61">RP&nbsp;255</span>
                                                <div data-translate="Disticket_2" class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 26%</div>
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
                                            <li data-translate="ticket_668">Admission to Observation Deck (360-degree skyline views)</li>
                                            <li data-translate="ticket_669">Admission to Sky Deck (open-air skyline views)</li>
                                            <li data-translate="ticket_670">Admission to Sky Box (thrilling glass cube experience)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div> 
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Observation Deck + Sky Deck + Sky Box + Tower Walk 100</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="q62">RP&nbsp;120</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q63">RP&nbsp;324</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 18%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF3" onclick="StyledButton(2)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                    <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                        <ul>
                                            <li>Admission to Tower Walk 100 (walk on edge of KL Towers)
</li>
                                            <li>Admission to Observation Deck (360-degree skyline views)</li>
                                            <li>Admission to Sky Deck (open-air skyline views)
</li>
                                            <li>Admission to Sky Box (thrilling glass cube experience)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>                  
    `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 11)
        localStorage.setItem("Discount1", 15);
        localStorage.setItem("Discount4", 17);
        localStorage.setItem("Discount2", 23);
        localStorage.setItem("Discount5", 6);
        localStorage.setItem("Discount3", 7);
        localStorage.setItem("Discount7", 11);
        localStorage.setItem("Discount6", 13);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 12 yrs")
        localStorage.setItem("discraption2", "Above 12 yrs")
        localStorage.setItem("discraption3", "3 to 11 yrs")
        localStorage.setItem("discraption4", "3 to 11 yrs")
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 15)
        localStorage.setItem("Discount1", 21);
        localStorage.setItem("Discount4", 24);
        localStorage.setItem("Discount2", 27);
        localStorage.setItem("Discount5", 9);
        localStorage.setItem("Discount3", 12);
        localStorage.setItem("Discount7", 15);
        localStorage.setItem("Discount6", 18);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 12 yrs")
        localStorage.setItem("discraption2", "Above 12 yrs")
        localStorage.setItem("discraption3", "4 to 11 yrs")
        localStorage.setItem("discraption4", "4 to 11 yrs")
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 2) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 20)
        localStorage.setItem("Discount1", 25);
        localStorage.setItem("Discount4", 31);
        localStorage.setItem("Discount2", 35);
        localStorage.setItem("Discount5", 12);
        localStorage.setItem("Discount3", 16);
        localStorage.setItem("Discount7", 21);
        localStorage.setItem("Discount6", 24);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "12 to 99 yrs")
        localStorage.setItem("discraption2", "12 to 99 yrs")
        localStorage.setItem("discraption3", "4 to 11 yrs")
        localStorage.setItem("discraption4", "4 to 11 yrs")
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 51);
localStorage.setItem("Discount1", 69);
localStorage.setItem("Discount4", 79);
localStorage.setItem("Discount2", 107);
localStorage.setItem("Discount5", 27);
localStorage.setItem("Discount3", 32);
localStorage.setItem("Discount7", 51);
localStorage.setItem("Discount6", 60);

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 12 yrs")
        localStorage.setItem("discraption2", "Above 12 yrs")
        localStorage.setItem("discraption3", "3 to 11 yrs")
        localStorage.setItem("discraption4", "3 to 11 yrs")
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 69);
localStorage.setItem("Discount1", 97);
localStorage.setItem("Discount4", 111);
localStorage.setItem("Discount2", 125);
localStorage.setItem("Discount5", 41);
localStorage.setItem("Discount3", 55);
localStorage.setItem("Discount7", 69);
localStorage.setItem("Discount6", 83);

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 12 yrs")
        localStorage.setItem("discraption2", "Above 12 yrs")
        localStorage.setItem("discraption3", "4 to 11 yrs")
        localStorage.setItem("discraption4", "4 to 11 yrs")
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 2) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 93);
localStorage.setItem("Discount1", 116);
localStorage.setItem("Discount4", 144);
localStorage.setItem("Discount2", 163);
localStorage.setItem("Discount5", 55);
localStorage.setItem("Discount3", 74);
localStorage.setItem("Discount7", 97);
localStorage.setItem("Discount6", 111);

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "12 to 99 yrs")
        localStorage.setItem("discraption2", "12 to 99 yrs")
        localStorage.setItem("discraption3", "4 to 11 yrs")
        localStorage.setItem("discraption4", "4 to 11 yrs")
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Lunch Buffet at ARAS Restaurant in KL Tower") {
  document.querySelector("#selectScreen").style = "display:grid;";
  document.querySelector("#tourSelectionBar").style = "display:block;";

  document.querySelector(".next_pages1").onclick = function () {
    localStorage.setItem("nones","none")
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      localStorage.setItem("count1_3", 3);
      localStorage.setItem("Price1", 36);
      localStorage.setItem("Discount4", 23);
      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title2", "Senior");
      localStorage.setItem("All_Title3", "Child");
    } else {
      localStorage.setItem("count1_3", 3);
      localStorage.setItem("Price1", 167);
localStorage.setItem("Discount4", 107);

      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title2", "Senior");
      localStorage.setItem("All_Title3", "Child");

    }
  }
}

if (localStorage.getItem("tickets_title") == "Hi-Tea Buffet at ARAS Restaurant in KL Tower") {
  document.querySelector("#selectScreen").style = "display:grid;";
  document.querySelector("#tourSelectionBar").style = "display:block;";
  document.querySelector(".next_pages1").onclick = function () {
    localStorage.setItem("nones","none")
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      localStorage.setItem("count1_3", 3);
      localStorage.setItem("Price1", 19);
      localStorage.setItem("Discount4", 14);
      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title2", "Senior");
      localStorage.setItem("All_Title3", "Child");
    }
    else {
      localStorage.setItem("count1_3", 3);
      localStorage.setItem("Price1", 88);
      localStorage.setItem("Discount4", 65);
      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title2", "Senior");
      localStorage.setItem("All_Title3", "Child");

    }

  };
}

if (localStorage.getItem("tickets_title") == "Dinner Buffet at ARAS Restaurant in KL Tower") {
  document.querySelector("#selectScreen").style = "display:grid;";
  document.querySelector("#tourSelectionBar").style = "display:block;";
  document.querySelector(".next_pages1").onclick = function () {
    localStorage.setItem("nones","none")
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      localStorage.setItem("count1_3", 3);
      localStorage.setItem("Price1", 42);
      localStorage.setItem("Discount4", 25);
      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title2", "Senior");
      localStorage.setItem("All_Title3", "Child");
    } else {
      localStorage.setItem("count1_3", 3);
      localStorage.setItem("Price1", 195);
      localStorage.setItem("Discount4", 116);
      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title2", "Senior");
      localStorage.setItem("All_Title3", "Child");
    }
  };
}

if (localStorage.getItem("tickets_title") == "Langkawi Island Private Day Tour with SkyBridge & Cable Car") {
  document.querySelector("#selectScreen").style = "display:grid;";
  document.querySelector("#tourSelectionBar").style = "display:block;";
  document.querySelector(".next_pages1").onclick = function () {
    localStorage.setItem("nones","none")
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      localStorage.setItem("count2_2", 2)
      localStorage.setItem("Price1", 63)
      localStorage.setItem("Discount1", 70);
      localStorage.setItem("Discount4", 57);
      localStorage.setItem("Discount2", 64);
    } else {
      localStorage.setItem("count2_2", 2)
      localStorage.setItem("Price1", 293);
localStorage.setItem("Discount1", 326);
localStorage.setItem("Discount4", 265);
localStorage.setItem("Discount2", 298);

    }
  };
}

if (localStorage.getItem("tickets_title") == "8-hour Private Guided Tour of Kuala Lumpur with Round-trip Transfers") {
  document.querySelector("#selectScreen").style = "display:grid;";
  document.querySelector("#tourSelectionBar").style = "display:block;";
  document.querySelector(".next_pages1").onclick = function () {
    localStorage.setItem("nones","none")
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      localStorage.setItem("count2_3", 2);
      localStorage.setItem("Price1", 53);
      localStorage.setItem("Discount4", 32);
      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title2", "Senior");
      localStorage.setItem("All_Title3", "Child");
    } else {
      localStorage.setItem("count2_3", 2);
      localStorage.setItem("Price1", 246);
      localStorage.setItem("Discount4", 149);
      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title2", "Senior");
      localStorage.setItem("All_Title3", "Child");
    }
  };
}

if (localStorage.getItem("tickets_title") == "Guided Tour of Kuala Lumpur and Batu Caves") {
  document.querySelector("#selectScreen").style = "display:grid;";
  document.querySelector("#tourSelectionBar").style = "display:block;";
  document.querySelector(".next_pages1").onclick = function () {
    localStorage.setItem("nones","none")
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      localStorage.setItem("count2_3", 2);
      localStorage.setItem("Price1", 17);
      localStorage.setItem("Discount4", 10);
    } else {
      localStorage.setItem("count2_3", 2);
      localStorage.setItem("Price1", 79);
      localStorage.setItem("Discount4", 46);
    }
  };
}

if (localStorage.getItem("tickets_title") == "Private Half-Day Religious Tour from Kuala Lumpur with Transfers") {
  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_244">4 to 6 Participants</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q66">RP&nbsp;759</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                             <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_245">4 to 6 Participants</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q67">RP&nbsp;897</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                             <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_246">2 to 3 Participants</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q68">RP&nbsp;103</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF3" onclick="StyledButton(2)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                             <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_247">1 Participant</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q69">RP&nbsp;165</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF4" onclick="StyledButton(3)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 18)
        localStorage.setItem("Discount1", 23);
        localStorage.setItem("Discount4", 20);
        localStorage.setItem("Discount2", 21);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 20)
        localStorage.setItem("Discount1", 21);
        localStorage.setItem("Discount4", 20);
        localStorage.setItem("Discount2", 21);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 2) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 21)
        localStorage.setItem("Discount1", 25);
        localStorage.setItem("Discount4", 20);
        localStorage.setItem("Discount2", 21);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 3) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 40)
        localStorage.setItem("Discount1", 49);
        localStorage.setItem("Discount4", 20);
        localStorage.setItem("Discount2", 21);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 84);
localStorage.setItem("Discount1", 107);
localStorage.setItem("Discount4", 93);
localStorage.setItem("Discount2", 97);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 93);
localStorage.setItem("Discount1", 97);
localStorage.setItem("Discount4", 93);
localStorage.setItem("Discount2", 97);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 2) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 97);
localStorage.setItem("Discount1", 116);
localStorage.setItem("Discount4", 93);
localStorage.setItem("Discount2", 97);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 3) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 186);
localStorage.setItem("Discount1", 228);
localStorage.setItem("Discount4", 93);
localStorage.setItem("Discount2", 97);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Half-Day Tour to Batu Caves from Kuala Lumpur") {
  document.querySelector("#selectScreen").style = "display:grid;";
  document.querySelector("#tourSelectionBar").style = "display:block;";
  document.querySelector(".next_pages1").onclick = function () {
    localStorage.setItem("nones","none")
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      localStorage.setItem("count2_2", 2)
      localStorage.setItem("Price1", 9)
      localStorage.setItem("Discount1", 12);
      localStorage.setItem("Discount4", 5);
      localStorage.setItem("Discount2", 6);
      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title3", "Child");
    } else {
      localStorage.setItem("count2_2", 2)
      localStorage.setItem("Price1", 41);
localStorage.setItem("Discount1", 55);
localStorage.setItem("Discount4", 23);
localStorage.setItem("Discount2", 27);

      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title3", "Child");
    }
  };
}

if (localStorage.getItem("tickets_title") == "Upside Down House Melaka Tickets") {
  document.querySelector("#selectScreen").style = "display:grid;";
  document.querySelector("#tourSelectionBar").style = "display:block;";
  document.querySelector(".next_pages1").onclick = function () {
    localStorage.setItem("nones","none")
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      localStorage.setItem("count2_2", 2);
      localStorage.setItem("Price1", 3);
      localStorage.setItem("Discount1", 4);
      localStorage.setItem("Discount4", 2);
      localStorage.setItem("Discount2", 3);
      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title3", "Child");
    } else {
      localStorage.setItem("count2_2", 2);
      localStorage.setItem("Price1", 13);
localStorage.setItem("Discount1", 18);
localStorage.setItem("Discount4", 9);
localStorage.setItem("Discount2", 13);

      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title3", "Child");
    }
  };
}

if (localStorage.getItem("tickets_title") == "Kuala Selangor Fireflies Night Tour with Seafood Dinner") {
  document.querySelector("#selectScreen").style = "display:grid;";
  document.querySelector("#tourSelectionBar").style = "display:block;";
  document.querySelector(".next_pages1").onclick = function () {
    localStorage.setItem("nones","none")
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      localStorage.setItem("count2_3", 2);
      localStorage.setItem("Price1", 50);
      localStorage.setItem("Discount4", 44);
      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title3", "Child");
    } else {
      localStorage.setItem("count2_3", 2);
      localStorage.setItem("Price1", 233);
      localStorage.setItem("Discount4", 205);
      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title3", "Child");
    }
  };
}

if (localStorage.getItem("tickets_title") == "Fireflies Watching Tour in Kuala Selangor") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_241">Fireflies Watching Tour in Kuala Selangor</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q71">RP&nbsp;27</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="select_title">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            
                            `;
  function StyledButton(key) {
    select_clear()
    window.location.href = "#selectScreen"
    document.querySelector("#selectScreen").style = "display:grid;";
    document.querySelector("#tourSelectionBar").style = "display:block;";
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      if (key == 0) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 8);
        localStorage.setItem("Discount4", 5);
        localStorage.setItem("Discount5", 4);
        localStorage.setItem("Discount7", 6);
        localStorage.setItem("Titles1", "Non-Malaysian Adult");
        localStorage.setItem("Titles2", "Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 12 yrs");
        localStorage.setItem("discraption2", "Above 12 yrs");
        localStorage.setItem("discraption3", "Under 11 yrs");
        localStorage.setItem("discraption4", "Under 11 yrs");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
      }
    } else {
      if (key == 0) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 37);
localStorage.setItem("Discount4", 23);
localStorage.setItem("Discount5", 18);
localStorage.setItem("Discount7", 27);

        localStorage.setItem("Titles1", "Non-Malaysian Adult");
        localStorage.setItem("Titles2", "Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 12 yrs");
        localStorage.setItem("discraption2", "Above 12 yrs");
        localStorage.setItem("discraption3", "Under 11 yrs");
        localStorage.setItem("discraption4", "Under 11 yrs");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
      }
    }

  }
}

if (localStorage.getItem("tickets_title") == "Blue Tears Experience in Kuala Selangor") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_239">Blue Tears Experience in Kuala Selangor</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q73">RP&nbsp;345</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)"data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_240">Blue Tears + Eagle Feeding + Fireflies Sightseeing</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q74">RP&nbsp;690</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 10);
        localStorage.setItem("Discount4", 6);
        localStorage.setItem("Discount5", 4);
        localStorage.setItem("Discount7", 8);
        localStorage.setItem("Titles1", "Non-Malaysian Adult");
        localStorage.setItem("Titles2", "Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 20);
        localStorage.setItem("Discount4", 15);
        localStorage.setItem("Discount5", 12);
        localStorage.setItem("Discount7", 15);
        localStorage.setItem("Titles1", "Non-Malaysian Adult");
        localStorage.setItem("Titles2", "Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 46);
localStorage.setItem("Discount4", 27);
localStorage.setItem("Discount5", 18);
localStorage.setItem("Discount7", 37);

        localStorage.setItem("Titles1", "Non-Malaysian Adult");
        localStorage.setItem("Titles2", "Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 93);
localStorage.setItem("Discount4", 69);
localStorage.setItem("Discount5", 55);
localStorage.setItem("Discount7", 69);

        localStorage.setItem("Titles1", "Non-Malaysian Adult");
        localStorage.setItem("Titles2", "Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Sky Mirror Experienc in Kuala Selangor") {
  document.querySelector("#selectScreen").style = "display:grid;";
  document.querySelector("#tourSelectionBar").style = "display:block;";
  document.querySelector(".next_pages1").onclick = function () {
    localStorage.setItem("nones","none")
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      localStorage.setItem("count4_1", 4);
      localStorage.setItem("Price1", 21);
      localStorage.setItem("Discount4", 17);
      localStorage.setItem("Discount5", 14);
      localStorage.setItem("Discount7", 19);
      localStorage.setItem("Titles1", "Non-Malaysian Adult");
      localStorage.setItem("Titles2", "Malaysian Adult");
      localStorage.setItem("Titles3", "Malaysian Child");
      localStorage.setItem("Titles4", "Non-Malaysian Child");
      localStorage.setItem("discraption1", "Above 13 yrs");
      localStorage.setItem("discraption2", "Above 13 yrs");
      localStorage.setItem("discraption3", "3 to 12 yrs");
      localStorage.setItem("discraption4", "3 to 12 yrs");
    } else {
      localStorage.setItem("count4_1", 4);
      localStorage.setItem("Price1", 97);
localStorage.setItem("Discount4", 79);
localStorage.setItem("Discount5", 65);
localStorage.setItem("Discount7", 88);

      localStorage.setItem("Titles1", "Non-Malaysian Adult");
      localStorage.setItem("Titles2", "Malaysian Adult");
      localStorage.setItem("Titles3", "Malaysian Child");
      localStorage.setItem("Titles4", "Non-Malaysian Child");
      localStorage.setItem("discraption1", "Above 13 yrs");
      localStorage.setItem("discraption2", "Above 13 yrs");
      localStorage.setItem("discraption3", "3 to 12 yrs");
      localStorage.setItem("discraption4", "3 to 12 yrs");
    }
  };
}

if (localStorage.getItem("tickets_title") == "Combo (Save 22%): A`Famosa Melaka Waterpark or Safari Wonderland + Menara Taming Sari Melaka Tickets") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_237">Combo: A'Famosa Melaka Waterpark + Menara Taming Sari in Melaka Tickets</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q75">RP&nbsp;213</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_238">Combo: Safari Wonderland + Menara Taming Sari in Melaka Tickets</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q76">RP&nbsp;238</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="select_title">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 15);
        localStorage.setItem("Discount1", 19);
        localStorage.setItem("Discount4", 12);
        localStorage.setItem("Discount2", 15);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 17);
        localStorage.setItem("Discount1", 21);
        localStorage.setItem("Discount4", 14);
        localStorage.setItem("Discount2", 17);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 69);
localStorage.setItem("Discount1", 88);
localStorage.setItem("Discount4", 55);
localStorage.setItem("Discount2", 69);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 79);
localStorage.setItem("Discount1", 97);
localStorage.setItem("Discount4", 65);
localStorage.setItem("Discount2", 79);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Combo (Save 15%):Menara Taming Sari + Melaka Wonderland") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_236">Non Malaysian</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q77">RP&nbsp;227</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 15);
        localStorage.setItem("Discount1", 17);
        localStorage.setItem("Discount4", 12);
        localStorage.setItem("Discount2", 14);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 69);
localStorage.setItem("Discount1", 79);
localStorage.setItem("Discount4", 55);
localStorage.setItem("Discount2", 65);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Combo: Zoo Melaka + Menara Taming Sare Tickets") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_234">Malaysian</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q78">RP&nbsp;213</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_235">Non-Malaysian</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q79">RP&nbsp;410</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 13);
        localStorage.setItem("Discount4", 14);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count1_3", 3);
        localStorage.setItem("Price1", 25);
        localStorage.setItem("Discount4", 28);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 60);
        localStorage.setItem("Discount4", 65);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count1_3", 3);
        localStorage.setItem("Price1", 116);
        localStorage.setItem("Discount4", 130);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Tickets To Menara Taming Sari in Melaka") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Malaysian Citizen</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q80">RP&nbsp;586</span>
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
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Non-Malaysian Citizen</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q81">RP&nbsp;793</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 4)
        localStorage.setItem("Discount1", 5);
        localStorage.setItem("Discount4", 3);
        localStorage.setItem("Discount2", 4);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 5)
        localStorage.setItem("Discount1", 7);
        localStorage.setItem("Discount4", 3);
        localStorage.setItem("Discount2", 5);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 18);
localStorage.setItem("Discount1", 23);
localStorage.setItem("Discount4", 13);
localStorage.setItem("Discount2", 18);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 23);
localStorage.setItem("Discount1", 32);
localStorage.setItem("Discount4", 13);
localStorage.setItem("Discount2", 23);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Combo (Save 5%): The Shore Sky Tower + Ghost Museum Melaka Tickets") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_233">Non-Malaysian Citizens</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q82">RP&nbsp;189</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 11);
        localStorage.setItem("Discount1", 12);
        localStorage.setItem("Discount4", 8);
        localStorage.setItem("Discount2", 9);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 51);
localStorage.setItem("Discount1", 55);
localStorage.setItem("Discount4", 37);
localStorage.setItem("Discount2", 42);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Entry Ticket to The Shore Sky Tower") {
  document.querySelector("#selectScreen").style = "display:grid;";
  document.querySelector("#tourSelectionBar").style = "display:block;";
  document.querySelector(".next_pages1").onclick = function () {
    localStorage.setItem("nones","none")
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      localStorage.setItem("count2_3", 2);
      localStorage.setItem("Price1", 5);
      localStorage.setItem("Discount4", 3);
    } else {
      localStorage.setItem("count2_3", 2);
      localStorage.setItem("Price1", 23);
      localStorage.setItem("Discount4", 13);
    }
  };
}

if (localStorage.getItem("tickets_title") == "Half-Day Guided City Tour of Kuala Lumpur") {
  document.querySelector("#selectScreen").style = "display:grid;";
  document.querySelector("#tourSelectionBar").style = "display:block;";
  document.querySelector(".next_pages1").onclick = function () {
    localStorage.setItem("nones","none")
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      localStorage.setItem("count2_2", 2)
      localStorage.setItem("Price1", 8)
      localStorage.setItem("Discount1", 12);
      localStorage.setItem("Discount4", 4);
      localStorage.setItem("Discount2", 6);
      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title3", "Child");
    } else {
      localStorage.setItem("count2_2", 2)
      localStorage.setItem("Price1", 37);
localStorage.setItem("Discount1", 55);
localStorage.setItem("Discount4", 18);
localStorage.setItem("Discount2", 27);

      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title3", "Child");
    }
  };
}

if (localStorage.getItem("tickets_title") == "Tickets to Skytrex Adventure Langwaki") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                          
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_232">Advanced Level: Island Extreme</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q84">RP&nbsp;341</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="v" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 16);
        localStorage.setItem("Titles1", "Guest");
        localStorage.setItem("discraption1", "Min Height 110cm & Max Weight 100kg"
        );
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 74);
        localStorage.setItem("Titles1", "Guest");
        localStorage.setItem(
          "discraption1",
          "Min Height 110cm & Max Weight 100kg"
        );
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Private Island Adventure at Paradise 101in Langwaki") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 825) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_228">Relax, Refresh & Recharge</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q85">RP&nbsp;169</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_229">Silver Paradise Package</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q86">RP&nbsp;745</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_230">Gold Paradise Package</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q87">RP&nbsp;110</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF3" onclick="StyledButton(2)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 10);
        localStorage.setItem("Discount4", 8);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 45);
        localStorage.setItem("Titles1", "Guest");
        localStorage.setItem("discraption1", "Above 8 yrs");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 2) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 68);
        localStorage.setItem("Titles1", "Guest");
        localStorage.setItem("discraption1", "Above 8 yrs");
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 46);
        localStorage.setItem("Discount4", 37);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 209);
        localStorage.setItem("Titles1", "Guest");
        localStorage.setItem("discraption1", "Above 8 yrs");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 2) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 316);
        localStorage.setItem("Titles1", "Guest");
        localStorage.setItem("discraption1", "Above 8 yrs");
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Langwaki Island Helicopter Tour") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_226">Langkawi Island - Dayang Bunting Lake Helicopter Tour</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q88">RP&nbsp;5168</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_227">Langkawi Island - Datai Bay Helicopter Tour</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q89">RP&nbsp;1206</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 320);
        localStorage.setItem("Titles1", "Adult");
        localStorage.setItem("discraption1", "2 to 99 yrs");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 748);
        localStorage.setItem("Titles1", "Adult");
        localStorage.setItem("discraption1", "2 to 99 yrs");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 1491);
        localStorage.setItem("Titles1", "Adult");
        localStorage.setItem("discraption1", "2 to 99 yrs");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 3485);
        localStorage.setItem("Titles1", "Adult");
        localStorage.setItem("discraption1", "2 to 99 yrs");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Langwaki Dayang Bunting Island Tour by Jet Ski") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);
  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_224">Dayang Bunting Island Tour by Jet Ski – Single Rider</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q90">RP&nbsp;3450</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_225">Dayang Bunting Island Tour by Jet Ski – Double Rider</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q91">RP&nbsp;4140</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 214);
        localStorage.setItem("Titles1", "Adult");
        localStorage.setItem("discraption1", "16 to 99 yrs");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 256);
        localStorage.setItem("Titles1", "Adult");
        localStorage.setItem("discraption1", "16 to 99 yrs");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 997);
        localStorage.setItem("Titles1", "Adult");
        localStorage.setItem("discraption1", "16 to 99 yrs");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 1192);
        localStorage.setItem("Titles1", "Adult");
        localStorage.setItem("discraption1", "16 to 99 yrs");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Discover Langkawi Intan Kecil Island by Banana Boat") {
  document.querySelector("#selectScreen").style = "display:grid;";
  document.querySelector("#tourSelectionBar").style = "display:block;";
  document.querySelector(".next_pages1").onclick = function () {
    localStorage.setItem("nones","none")
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      localStorage.setItem("count1_1", 1);
      localStorage.setItem("Price1", 171);
      localStorage.setItem("Titles1", "Adult");
      localStorage.setItem("discraption1", "5 to 99 yrs");
    } else {
      localStorage.setItem("count1_1", 1);
      localStorage.setItem("Price1", 796);
      localStorage.setItem("Titles1", "Adult");
      localStorage.setItem("discraption1", "5 to 99 yrs");
    }
  };
}

if (localStorage.getItem("tickets_title") == "Langkawi Mangrove Kayaking Adventure Tour") {
  document.querySelector("#selectScreen").style = "display:grid;";
  document.querySelector("#tourSelectionBar").style = "display:block;";
  document.querySelector(".next_pages1").onclick = function () {
    localStorage.setItem("nones","none")
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      localStorage.setItem("count2_3", 2);
      localStorage.setItem("Price1", 42);
      localStorage.setItem("Discount4", 31);
      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title3", "Child");
    } else {
      localStorage.setItem("count2_3", 2);
      localStorage.setItem("Price1", 195);
      localStorage.setItem("Discount4", 144);
      localStorage.setItem("All_Title", "Adult");
      localStorage.setItem("All_Title3", "Child");
    }
  };
}

if (localStorage.getItem("tickets_title") == "Tickets to Petrosains, The Discovery Centre in Kuala Lumpur") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_222">Tickets to Petrosains, The Discovery Centre: Malaysian Citizen</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q92">RP&nbsp;862</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_223">Tickets to Petrosains, The Discovery Centre: Non-Malaysian Citizen</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q93">RP&nbsp;138</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count1_3", 3);
        localStorage.setItem("Price1", 4);
        localStorage.setItem("Discount4", 2);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count1_3", 3);
        localStorage.setItem("Price1", 6);
        localStorage.setItem("Discount4", 4);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count1_3", 3);
        localStorage.setItem("Price1", 18);
        localStorage.setItem("Discount4", 9);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count1_3", 3);
        localStorage.setItem("Price1", 27);
        localStorage.setItem("Discount4", 18);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Standard Lane: Langkawi Cable Car Tickets") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 825) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_220">Standard Gondola SkyCab</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                            <div class="tour-scratch-price"><span data-translate="q96">RP&nbsp;44</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="booklangkawas_1">RP&nbsp;31</span>
                                                 <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="ticket_656">Save up to 7%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_221">Standard Gondola SkyCab + SkyBridge + SkyGlide</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="qq1">RP&nbsp;44</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q97">RP&nbsp;41</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="ticket_657">Save up to 6%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" data-translate="home_title_221" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Standard Gondola SkyCab + SkyBridge + SkyGlide + Eagle's Nest Skywalk</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                            <div class="tour-scratch-price"><span data-translate="booklangkawas_2">RP&nbsp;44</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q98">RP&nbsp;62</span>
                                                 <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="ticket_656">Save up to 7%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button data-translate="select_title" id="iYmuLF3" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>   
    `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 8)
        localStorage.setItem("Discount1", 9);
        localStorage.setItem("Discount4", 17);
        localStorage.setItem("Discount2", 18);
        localStorage.setItem("Discount5", 7);
        localStorage.setItem("Discount3", 8);
        localStorage.setItem("Discount7", 13);
        localStorage.setItem("Discount6", 14);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 12yrs")
        localStorage.setItem("discraption2", "Above 12yrs")
        localStorage.setItem("discraption3", "3 to 11yrs")
        localStorage.setItem("discraption4", "3 to 11yrs")
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 12)
        localStorage.setItem("Discount1", 13);
        localStorage.setItem("Discount4", 21);
        localStorage.setItem("Discount2", 22);
        localStorage.setItem("Discount5", 9);
        localStorage.setItem("Discount3", 10);
        localStorage.setItem("Discount7", 16);
        localStorage.setItem("Discount6", 17);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 12yrs")
        localStorage.setItem("discraption2", "Above 12yrs")
        localStorage.setItem("discraption3", "3 to 11yrs")
        localStorage.setItem("discraption4", "3 to 11yrs")
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 2) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 17)
        localStorage.setItem("Discount1", 18);
        localStorage.setItem("Discount4", 30);
        localStorage.setItem("Discount2", 33);
        localStorage.setItem("Discount5", 12);
        localStorage.setItem("Discount3", 13);
        localStorage.setItem("Discount7", 24);
        localStorage.setItem("Discount6", 25);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 12yrs")
        localStorage.setItem("discraption2", "Above 12yrs")
        localStorage.setItem("discraption3", "3 to 11yrs")
        localStorage.setItem("discraption4", "3 to 11yrs")
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 37);
localStorage.setItem("Discount1", 42);
localStorage.setItem("Discount4", 79);
localStorage.setItem("Discount2", 84);
localStorage.setItem("Discount5", 32);
localStorage.setItem("Discount3", 37);
localStorage.setItem("Discount7", 60);
localStorage.setItem("Discount6", 65);

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 12yrs")
        localStorage.setItem("discraption2", "Above 12yrs")
        localStorage.setItem("discraption3", "3 to 11yrs")
        localStorage.setItem("discraption4", "3 to 11yrs")
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 55);
localStorage.setItem("Discount1", 60);
localStorage.setItem("Discount4", 97);
localStorage.setItem("Discount2", 102);
localStorage.setItem("Discount5", 41);
localStorage.setItem("Discount3", 46);
localStorage.setItem("Discount7", 74);
localStorage.setItem("Discount6", 79);

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 12yrs")
        localStorage.setItem("discraption2", "Above 12yrs")
        localStorage.setItem("discraption3", "3 to 11yrs")
        localStorage.setItem("discraption4", "3 to 11yrs")
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 2) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 79);
localStorage.setItem("Discount1", 84);
localStorage.setItem("Discount4", 139);
localStorage.setItem("Discount2", 153);
localStorage.setItem("Discount5", 55);
localStorage.setItem("Discount3", 60);
localStorage.setItem("Discount7", 111);
localStorage.setItem("Discount6", 116);

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "Above 12yrs")
        localStorage.setItem("discraption2", "Above 12yrs")
        localStorage.setItem("discraption3", "3 to 11yrs")
        localStorage.setItem("discraption4", "3 to 11yrs")
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Express Lane: Langkawi Cable Car Tickets") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 2000) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_215">Express Lane: Standard Gondola</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="booklangkawi_11">RP&nbsp;62</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_216">Express Lane: Standard Gondola + SkyBridge</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="booklangkawi_12">RP&nbsp;655</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)" data-translate="select_title"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_217">Express Lane: Standard Gondola + SkyBridge + SkyGlide</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="booklangkawi_13">RP&nbsp;759</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF3" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="select_title">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_218">Express Lane: Standard Gondola + SkyBridge + SkyGlide + Eagle's Nest Skywalk</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="booklangkawi_14">RP&nbsp;93</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF4" onclick="StyledButton(3)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="select_title">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>   
    `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 17);
        localStorage.setItem("Discount4", 26);
        localStorage.setItem("Discount5", 15);
        localStorage.setItem("Discount7", 22);
        localStorage.setItem("Titles1", "Malaysian Adult");
        localStorage.setItem("Titles2", "Non-Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 18);
        localStorage.setItem("Discount4", 28);
        localStorage.setItem("Discount5", 16);
        localStorage.setItem("Discount7", 23);
        localStorage.setItem("Titles1", "Malaysian Adult");
        localStorage.setItem("Titles2", "Non-Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 2) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 21);
        localStorage.setItem("Discount4", 30);
        localStorage.setItem("Discount5", 18);
        localStorage.setItem("Discount7", 25);
        localStorage.setItem("Titles1", "Malaysian Adult");
        localStorage.setItem("Titles2", "Non-Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 3) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 26);
        localStorage.setItem("Discount4", 39);
        localStorage.setItem("Discount5", 21);
        localStorage.setItem("Discount7", 33);
        localStorage.setItem("Titles1", "Malaysian Adult");
        localStorage.setItem("Titles2", "Non-Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 79);
localStorage.setItem("Discount4", 120);
localStorage.setItem("Discount5", 69);
localStorage.setItem("Discount7", 102);

        localStorage.setItem("Titles1", "Malaysian Adult");
        localStorage.setItem("Titles2", "Non-Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 83);
localStorage.setItem("Discount4", 130);
localStorage.setItem("Discount5", 74);
localStorage.setItem("Discount7", 107);

        localStorage.setItem("Titles1", "Malaysian Adult");
        localStorage.setItem("Titles2", "Non-Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 2) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 97);
localStorage.setItem("Discount4", 139);
localStorage.setItem("Discount5", 83);
localStorage.setItem("Discount7", 116);

        localStorage.setItem("Titles1", "Malaysian Adult");
        localStorage.setItem("Titles2", "Non-Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 3) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 121);
localStorage.setItem("Discount4", 181);
localStorage.setItem("Discount5", 97);
localStorage.setItem("Discount7", 153);

        localStorage.setItem("Titles1", "Malaysian Adult");
        localStorage.setItem("Titles2", "Non-Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "3 to 12 yrs");
        localStorage.setItem("discraption4", "3 to 12 yrs");
        document.querySelector("#iYmuLF4").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Langkawi Cable Car with Express Lane Tickets + SkyBridge + SkyGlide") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_213">Express Lane: Standard Gondola + SkyBridge + SkyGlide</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="q107">RP&nbsp;79</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q108">RP&nbsp;75</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="ticket_657">Save up to 6%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="select_title">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_214">Express Lane: Glass Bottom Gondola + SkyBridge + SkyGlide</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="q109">RP&nbsp;966</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q110">RP&nbsp;897</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="ticket_656">Save up to 7%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="select_title">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Express Lane: Standard Gondola + SkyBridge + SkyGlide + Eagle’s Nest SkyWalk</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="q111">RP&nbsp;100</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="q112">RP&nbsp;931</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 6%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF3" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
    `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 22)
        localStorage.setItem("Discount1", 23);
        localStorage.setItem("Discount4", 31);
        localStorage.setItem("Discount2", 32);
        localStorage.setItem("Discount5", 19);
        localStorage.setItem("Discount3", 21);
        localStorage.setItem("Discount7", 26);
        localStorage.setItem("Discount6", 28);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "13 to 99yrs")
        localStorage.setItem("discraption2", "13 to 99yrs")
        localStorage.setItem("discraption3", "3 to 12yrs")
        localStorage.setItem("discraption4", "3 to 12yrs")
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 26)
        localStorage.setItem("Discount1", 28);
        localStorage.setItem("Discount4", 26);
        localStorage.setItem("Discount2", 28);
        localStorage.setItem("Discount5", 25);
        localStorage.setItem("Discount3", 26);
        localStorage.setItem("Discount7", 25);
        localStorage.setItem("Discount6", 26);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "13 to 99yrs")
        localStorage.setItem("discraption2", "13 to 99yrs")
        localStorage.setItem("discraption3", "3 to 12yrs")
        localStorage.setItem("discraption4", "3 to 12yrs")
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 2) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 27)
        localStorage.setItem("Discount1", 29);
        localStorage.setItem("Discount4", 41);
        localStorage.setItem("Discount2", 43);
        localStorage.setItem("Discount5", 22);
        localStorage.setItem("Discount3", 24);
        localStorage.setItem("Discount7", 34);
        localStorage.setItem("Discount6", 36);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "13 to 99yrs")
        localStorage.setItem("discraption2", "13 to 99yrs")
        localStorage.setItem("discraption3", "3 to 12yrs")
        localStorage.setItem("discraption4", "3 to 12yrs")
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 102);
localStorage.setItem("Discount1", 107);
localStorage.setItem("Discount4", 144);
localStorage.setItem("Discount2", 149);
localStorage.setItem("Discount5", 88);
localStorage.setItem("Discount3", 97);
localStorage.setItem("Discount7", 121);
localStorage.setItem("Discount6", 130);

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "13 to 99yrs")
        localStorage.setItem("discraption2", "13 to 99yrs")
        localStorage.setItem("discraption3", "3 to 12yrs")
        localStorage.setItem("discraption4", "3 to 12yrs")
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 121);
localStorage.setItem("Discount1", 130);
localStorage.setItem("Discount4", 121);
localStorage.setItem("Discount2", 130);
localStorage.setItem("Discount5", 116);
localStorage.setItem("Discount3", 121);
localStorage.setItem("Discount7", 116);
localStorage.setItem("Discount6", 121);

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "13 to 99yrs")
        localStorage.setItem("discraption2", "13 to 99yrs")
        localStorage.setItem("discraption3", "3 to 12yrs")
        localStorage.setItem("discraption4", "3 to 12yrs")
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 2) {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 125);
localStorage.setItem("Discount1", 135);
localStorage.setItem("Discount4", 191);
localStorage.setItem("Discount2", 200);
localStorage.setItem("Discount5", 102);
localStorage.setItem("Discount3", 111);
localStorage.setItem("Discount7", 158);
localStorage.setItem("Discount6", 167);

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "13 to 99yrs")
        localStorage.setItem("discraption2", "13 to 99yrs")
        localStorage.setItem("discraption3", "3 to 12yrs")
        localStorage.setItem("discraption4", "3 to 12yrs")
        document.querySelector("#iYmuLF3").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Premium Experience: Glass Gondola Langkawi Cable Car with Express Lane Tickets") {
  document.querySelector(".swiper-button-prev").style = "display:none";
  document.querySelector(".swiper-button-next").style = "display:none";
  // Ekran o'lchamini tekshirish funksiyasi
  function checkMediaQuery() {
    if (window.innerWidth <= 550) {
      document.querySelector(".swiper-button-prev").style = "display:flex";
      document.querySelector(".swiper-button-next").style = "display:flex";
    } else {
      document.querySelector(".swiper-button-prev").style = "display:none";
      document.querySelector(".swiper-button-next").style = "display:none";
    }
  }

  // Sahifa yuklanganda va o'lcham o'zgarganda funksiyani chaqirish
  window.addEventListener("load", checkMediaQuery);
  window.addEventListener("resize", checkMediaQuery);

  document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block"  data-translate="home_title_211">Glass Gondola SkyCab</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q114">RP&nbsp;759</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="select_title">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_212">360° Gondola SkyCab</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="q116">RP&nbsp;106</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="select_title">Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
    `;
  if (sessionStorage.getItem("selectedValyut") == "USD") {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 20);
        localStorage.setItem("Discount4", 20);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 32);;
        localStorage.setItem("Discount4", 32);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  } else {
    function StyledButton(key) {
      select_clear()
      localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
      window.location.href = "#selectScreen"
      document.querySelector("#selectScreen").style = "display:grid;";
      document.querySelector("#tourSelectionBar").style = "display:block;";
      if (key == 0) {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 93);
        localStorage.setItem("Discount4", 93);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }

      if (key == 1) {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 149);;
        localStorage.setItem("Discount4", 149);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style =
          "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);";
        document.querySelector("#iYmuLF1").style =
          "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);";
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Private Experience: VIP Gondola Langkawi Cable Car with Express Lane Tickets") {
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
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_209">VIP Gondola (3 Person)</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div></div>
                                              <span class="tour-price" data-translate="booklangkawas_3">MYR&nbsp;116</span>
                                          </div>
                                      </div>
                                      <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                          <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="select_title">Select</button>
                                      </div>
                                  </div>
                              </div>
                          </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                              class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                              <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_210">Private Gondola (4-6 Person)</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div></div>
                                              <span class="tour-price" data-translate="booklangkawas_4">MYR&nbsp;116</span>
                                          </div>
                                      </div>
                                      <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                          <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="select_title">Select</button>
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
        localStorage.setItem("count1_1", 1)
        localStorage.setItem("Price1", 112)
        localStorage.setItem("Titles1", "Small Group")
        localStorage.setItem("discraption1", "Up to 3 people per group")
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

      if (key == 1) {
        localStorage.setItem("count1_1", 1)
        localStorage.setItem("Price1", 115)
        localStorage.setItem("Titles1", "Private Group")
        localStorage.setItem("discraption1", "4 to 6 people per group")
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
        localStorage.setItem("count1_1", 1)
        localStorage.setItem("Price1", 521)
        localStorage.setItem("Titles1", "Small Group")
        localStorage.setItem("discraption1", "Up to 3 people per group")
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

      if (key == 1) {
        localStorage.setItem("count1_1", 1)
        localStorage.setItem("Price1", 535)
        localStorage.setItem("Titles1", "Private Group")
        localStorage.setItem("discraption1", "4 to 6 people per group")
        document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }
    }
  }

}

if (localStorage.getItem("tickets_title") == "Standard Lane: Langkawi Cable Car with 6D Cinemotion & Optional Petland Tickets") {
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
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_207">Standard Gondola + 6D Cinemotion</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div></div>
                                              <span class="tour-price" data-translate="booklangkawas_5">MYR&nbsp;12</span>
                                          </div>
                                      </div>
                                      <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                          <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF"data-translate="select_title">Select</button>
                                      </div>
                                  </div>
                              </div>
                          </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                              class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                              <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_208">Standard Gondola + Machinchang Petland Langkawi</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div></div>
                                              <span class="tour-price" data-translate="booklangkawas_6">MYR&nbsp;13</span>
                                          </div>
                                      </div>
                                      <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                          <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="select_title">Select</button>
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
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 12);
        localStorage.setItem("Discount4", 24);
        localStorage.setItem("Discount5", 10);
        localStorage.setItem("Discount7", 18);
        localStorage.setItem("Titles1", "Malaysian Adult");
        localStorage.setItem("Titles2", "Non-Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "2 to 12 yrs");
        localStorage.setItem("discraption4", "2 to 12 yrs");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

      if (key == 1) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 13);
        localStorage.setItem("Discount4", 26);
        localStorage.setItem("Discount5", 10);
        localStorage.setItem("Discount7", 18);
        localStorage.setItem("Titles1", "Malaysian Adult");
        localStorage.setItem("Titles2", "Non-Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "2 to 12 yrs");
        localStorage.setItem("discraption4", "2 to 12 yrs");
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
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 55);
localStorage.setItem("Discount4", 111);
localStorage.setItem("Discount5", 46);
localStorage.setItem("Discount7", 83);

        localStorage.setItem("Titles1", "Malaysian Adult");
        localStorage.setItem("Titles2", "Non-Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "2 to 12 yrs");
        localStorage.setItem("discraption4", "2 to 12 yrs");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

      if (key == 1) {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 60);
localStorage.setItem("Discount4", 120);
localStorage.setItem("Discount5", 46);
localStorage.setItem("Discount7", 83);

        localStorage.setItem("Titles1", "Malaysian Adult");
        localStorage.setItem("Titles2", "Non-Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 13 yrs");
        localStorage.setItem("discraption2", "Above 13 yrs");
        localStorage.setItem("discraption3", "2 to 12 yrs");
        localStorage.setItem("discraption4", "2 to 12 yrs");
        document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Combo (Save 7%): Underwater World + Langkawi Cable Car Tickets") {
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
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Malaysian Citizen</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div></div>
                                              <span class="tour-price" data-translate="home_price_55">MYR&nbsp;85</span>
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
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Non-Malaysian Citizen</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div></div>
                                              <span class="tour-price" data-translate="home_price_10002">MYR&nbsp;140</span>
                                          </div>
                                      </div>
                                      <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                          <button id="iYmuLF2" onclick="StyledButton(1)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
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
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 18)
        localStorage.setItem("Discount1", 19);
        localStorage.setItem("Discount4", 14);
        localStorage.setItem("Discount2", 15);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 30)
        localStorage.setItem("Discount1", 32);
        localStorage.setItem("Discount4", 23);
        localStorage.setItem("Discount2", 25);
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
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 88);
localStorage.setItem("Discount1", 93);
localStorage.setItem("Discount4", 65);
localStorage.setItem("Discount2", 69);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 139);
localStorage.setItem("Discount1", 149);
localStorage.setItem("Discount4", 107);
localStorage.setItem("Discount2", 116);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Genting Awana SkyWay Cable Car Tickets") {
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
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Standard Gondola: One-Way Tickets</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div></div>
                                              <span class="tour-price" data-translate="bookgenting_tic_1">MYR&nbsp;2</span>
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
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Standard Gondola: Round-Trip Tickets</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div class="tour-scratch-price"><span data-translate="bookgenting_tic_2_skidka">MYR&nbsp;4</span></div>
                                              <div></div>
                                              <span class="tour-price" data-translate="bookgenting_tic_2">MYR&nbsp;3</span>
                                              <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 10%</div>
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
        localStorage.setItem("count1_1", 1)
        localStorage.setItem("Price1", 2)
        localStorage.setItem("Titles1", "Guest");
        localStorage.setItem("discraption1", "Any age");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

      if (key == 1) {
        localStorage.setItem("count1", 1)
        localStorage.setItem("Price1", 3)
        localStorage.setItem("Discount1", 4)
        localStorage.setItem("Titles1", "Guest");
        localStorage.setItem("discraption1", "Children above height 90cm");
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
        localStorage.setItem("count1_1", 1)
        localStorage.setItem("Price1", 9)
        localStorage.setItem("Titles1", "Guest");
        localStorage.setItem("discraption1", "Any age");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

      if (key == 1) {
        localStorage.setItem("count1", 1)
        localStorage.setItem("Price1", 13)
        localStorage.setItem("Discount1", 18)
        localStorage.setItem("Titles1", "Guest");
        localStorage.setItem("discraption1", "Children above height 90cm");
        document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Genting Highlands Day Trip") {
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
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">1-Way Genting Awana Cable Car Ride</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div></div>
                                              <span class="tour-price" data-translate="hello_chan">MYR&nbsp;113</span>
                                          </div>
                                      </div>
                                      <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                          <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="select_title">Select</button>
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
          localStorage.setItem("Price1", 31)
          localStorage.setItem("Discount1", 49);
          localStorage.setItem("Discount4", 24);
          localStorage.setItem("Discount2", 43);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
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
        localStorage.setItem("Price1", 144);
        localStorage.setItem("Discount1", 228);
        localStorage.setItem("Discount4", 111);
        localStorage.setItem("Discount2", 200);
        
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

    }
  }
}


if (localStorage.getItem("tickets_title") == "Combo (Save 22%): A Famosa Melaka Waterpark or Safari Wonderland + Menara Taming Sari in Melaka Tickets") {
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
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Combo: Safari Wonderland + Menara Taming Sari in Melaka Tickets</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                             <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="aquaria_tickets_2002">RP&nbsp;200</span>
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
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Combo: A'Famosa Melaka Waterpark + Menara Taming Sari in Melaka Tickets</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="aquaria_tickets_2003">RP&nbsp;410</span>
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
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 15)
        localStorage.setItem("Discount1", 19);
        localStorage.setItem("Discount4", 14);
        localStorage.setItem("Discount2", 18);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 17)
        localStorage.setItem("Discount1", 22);
        localStorage.setItem("Discount4", 14);
        localStorage.setItem("Discount2", 18);
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
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 69);
localStorage.setItem("Discount1", 88);
localStorage.setItem("Discount4", 65);
localStorage.setItem("Discount2", 83);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }

      if (key == 1) {
        localStorage.setItem("count2_2", 2)
        localStorage.setItem("Price1", 79);
localStorage.setItem("Discount1", 102);
localStorage.setItem("Discount4", 65);
localStorage.setItem("Discount2", 83);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }
    }
  }
}

if (localStorage.getItem("tickets_title") == "Combo (Save 12%): The Top Penang- Rainbow Skywalk, Jurassic Research, & Boutique Aquarium+ Escape Penang Ticket") {
    document.querySelector("#selectScreen").style = "display:grid;"
    document.querySelector("#tourSelectionBar").style = "display:block;"
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 52);
        localStorage.setItem("Discount1", 59);
        localStorage.setItem("Discount4", 36);
        localStorage.setItem("Discount2", 40);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 242);
localStorage.setItem("Discount1", 274);
localStorage.setItem("Discount4", 167);
localStorage.setItem("Discount2", 186);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      }
    };
  }
  
  if (localStorage.getItem("tickets_title") == "Top Penang Tickets: 5 Attractions") {
    document.querySelector("#selectScreen").style = "display:grid;"
    document.querySelector("#tourSelectionBar").style = "display:block;"
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 16);
        localStorage.setItem("Discount1", 18);
        localStorage.setItem("Discount4", 13);
        localStorage.setItem("Discount2", 14);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 74);
localStorage.setItem("Discount1", 84);
localStorage.setItem("Discount4", 60);
localStorage.setItem("Discount2", 65);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      }
    };
  }
  
  if (localStorage.getItem("tickets_title") == "The TOP Penang Adventure Pass: Big 5 + 7 Attractions") {
    document.querySelector("#selectScreen").style = "display:grid;"
    document.querySelector("#tourSelectionBar").style = "display:block;"
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 22);
        localStorage.setItem("Discount1", 25);
        localStorage.setItem("Discount4", 14);
        localStorage.setItem("Discount2", 16);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 102);
localStorage.setItem("Discount1", 116);
localStorage.setItem("Discount4", 65);
localStorage.setItem("Discount2", 74);

        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      }
    };
  }
  
  if (localStorage.getItem("tickets_title") == "Langkawi Island Hopping Tour") {
    function checkMediaQuery() {
      if (window.innerWidth <= 2000) {
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
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="shared_hel">Shared Speedboat Tour</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="p9">MYR&nbsp;40</span>
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
                                            <li data-translate="shared_hel">Shared speedboat tour</li>
                                            <li data-translate="hotel_trans">Hotel transfer (Cenang and Tengah Island only)</li>
                                            <li data-translate="pregnant_main">Pregnant Maiden Island visit</li>
                                            <li data-translate="eagle_feed">Eagle feeding at Singa Besar Island</li>
                                            <li data-translate="beras_basah">Beras Basah Island visit</li>
                                            <li data-translate="life_jack">Life jackets</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="private_asd">Private Speedboat Tour - Up To 8 Guests</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="p10">MYR&nbsp;340</span>
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
                                            <li data-translate="priv">Private boat for 8 people</li>
                                            <li data-translate="pregnant_main">Pregnant Maiden Island visit</li>
                                            <li data-translate="eagle_feed">Eagle feeding at Singa Besar Island</li>
                                            <li data-translate="beras_basah">Beras Basah Island visit</li>
                                            <li data-translate="life_jack">Life jackets</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="prv">Private Speedboat Tour - Up To 12 Guests</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="p11">MYR&nbsp;400</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF3" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                    <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                        <ul>
                                            <li data-translate="priv">Private boat for 8 people</li>
                                            <li data-translate="pregnant_main">Pregnant Maiden Island visit</li>
                                            <li data-translate="eagle_feed">Eagle feeding at Singa Besar Island</li>
                                            <li data-translate="beras_basah">Beras Basah Island visit</li>
                                            <li data-translate="life_jack">Life jackets</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="priz">Private Speedboat Tour - Up To 16 Guests</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="p12">MYR&nbsp;520</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF4" onclick="StyledButton(3)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                    <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                        <ul>
                                            <li data-translate="priv">Private boat for 8 people</li>
                                            <li data-translate="pregnant_main">Pregnant Maiden Island visit</li>
                                            <li data-translate="eagle_feed">Eagle feeding at Singa Besar Island</li>
                                            <li data-translate="beras_basah">Beras Basah Island visit</li>
                                            <li data-translate="life_jack">Life jackets</li>
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 8)
          localStorage.setItem("Discount4", 6);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 73)
          localStorage.setItem("Titles1", "Group of 8")
          localStorage.setItem("discraption1", ".")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 2) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 85)
          localStorage.setItem("Titles1", "Group of 8")
          localStorage.setItem("discraption1", ".")
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 3) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 111)
          localStorage.setItem("Titles1", "Group of 8")
          localStorage.setItem("discraption1", ".")
          document.querySelector("#iYmuLF4").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
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
          localStorage.setItem("Price1", 37)
          localStorage.setItem("Discount4", 27);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 340)
          localStorage.setItem("Titles1", "Group of 8")
          localStorage.setItem("discraption1", ".")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 2) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 396)
          localStorage.setItem("Titles1", "Group of 8")
          localStorage.setItem("discraption1", ".")
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 3) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 517)
          localStorage.setItem("Titles1", "Group of 8")
          localStorage.setItem("discraption1", ".")
          document.querySelector("#iYmuLF4").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
      }
    }
  
  }
  
  if (localStorage.getItem("tickets_title") == "Jet Ski Fun Island Hopping Tour in Langkawi") {
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
        <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">3 Island Jet Ski Tour</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p18">MYR&nbsp;550</span>
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
                    <li data-translate="hour_three">3-hour guided jet ski tour</li>
                    <li data-translate="islandd">Dayang Bunting Island</li>
                    <li data-translate="beras">Beras Basah Island</li>
                    <li data-translate="singa">Singa Besar Island</li>
                </ul>
            </div>
        </div>
    </div></div>
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="eight_island">8 Island Jet Ski Tour</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p19">MYR&nbsp;600</span>
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
                    <li data-translate="four_hour">4-hour guided jet ski tour</li>
                    <li data-translate="dayang_bunting">Dayang Bunting Island</li>
                    <li data-translate="beras_basah2">Beras Basah Island</li>
                    <li data-translate="singa_besar">Singa Besar Island</li>
                    <li data-translate="echo_island">Echo Island</li>
                    <li data-translate="balakk">Balak Island</li>
                    <li data-translate="hujung_bluh">Hujung Buluh Island</li>
                    <li data-translate="lima_iss">Lima Island</li>
                    <li data-translate="air_tun">Air Tun Island</li>
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
          localStorage.setItem("Price1", 118)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 16 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 128)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 16 yrs")
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
          localStorage.setItem("Price1", 549)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 16 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 596)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 16 yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Water Activities in Pantai Cenang") {
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
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="waterr">Water Activities in Pantai Cenang: Banana Boat Ride</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="p20">MYR&nbsp;155</span>
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
                                            <li data-translate="bananee">Banane Boat Ride</li>
                                            <li data-translate="safetyy">Safety briefing</li>
                                            <li data-translate="lifeJ">Life jackets</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="water_act">Water Activities in Pantai Cenang: Beach Sofa Rental</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="p21">MYR&nbsp;125</span>
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
                                            <li data-translate="bananee">Banane Boat Ride</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="wat_act">Water Activities in Pantai Cenang: Parasailing</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="p22">MYR&nbsp;140</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF3" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                    <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                        <ul>
                                            <li data-translate="min_parasa">10-min parasailing adventure</li>
                                            <li data-translate="safetyy">Safety briefing</li>
                                            <li data-translate="lifeJ">Life jackets</li>
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
          localStorage.setItem("Price1", 24)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 12 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 26)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 12 yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 29)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 12 yrs")
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
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 111)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 12 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 121)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 12 yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 135)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 12 yrs")
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 3%): KLIA Ekspres Train Tickets + Malaysia 4G Tourist Local SIM") {
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
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="one_way">One-Way: KLIA T1/T2 to KL Sentral + Lite Plan</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price" data-translate="tour_scratch_price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p5">MYR&nbsp;68</span>
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
                                            <li data-translate="one_wayy">One-way ticket from KLIA T1/T2 to KL Sentral</li>
                                            <li data-translate="free_fourG">Free 4G Wi-Fi</li>
                                            <li data-translate="air_con">Air-conditioning onboard</li>
                                            <li data-translate="luggagee">Luggage space</li>
                                            <li data-translate="digital_inf">Digital infotainment</li>
                                            <li data-translate="mobile_data">Mobile data (15GB or 20GB as per package selection)</li>
                                            <li data-translate="myrfive">MYR5 credit for local calls, SMS, or MMS</li>
                                            <li data-translate="rmfive">RM5 Airtime</li>
                                            <li data-translate="interr">International calls (fixed IDD rates apply)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
  
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="senter_kli">One-Way: KL Sentral to KLIA T1/T2 + Lite Plan</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price" data-translate="tour_scratch_price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p5">MYR&nbsp;68</span>
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
                                            <li data-translate="one_wayy">One-way ticket from KLIA T1/T2 to KL Sentral</li>
                                            <li data-translate="free_fourG">Free 4G Wi-Fi</li>
                                            <li data-translate="air_con">Air-conditioning onboard</li>
                                            <li data-translate="luggagee">Luggage space</li>
                                            <li data-translate="digital_inf">Digital infotainment</li>
                                            <li data-translate="mobile_data">Mobile data (15GB or 20GB as per package selection)</li>
                                            <li data-translate="myrfive">MYR5 credit for local calls, SMS, or MMS</li>
                                            <li data-translate="rmfive">RM5 Airtime</li>
                                            <li data-translate="interr">International calls (fixed IDD rates apply)</li>
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
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 15)
          localStorage.setItem("Discount1", 16)
          localStorage.setItem("Titles1", "Adult");
          localStorage.setItem("discraption1", "12 to 100 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 15)
          localStorage.setItem("Discount1", 16)
          localStorage.setItem("Titles1", "Adult");
          localStorage.setItem("discraption1", "12 to 100 yrs")
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
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 69)
          localStorage.setItem("Discount1", 74)
          localStorage.setItem("Titles1", "Adult");
          localStorage.setItem("discraption1", "12 to 100 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 69)
          localStorage.setItem("Discount1", 74)
          localStorage.setItem("Titles1", "Adult");
          localStorage.setItem("discraption1", "12 to 100 yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 9%): KL Tower Observation Deck + KLIA Ekspres Tickets") {
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
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="kl_tower">KL Tower Observation Deck + One-Way: KLIA T1/T2 to KL Sentral</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price"data-translate="p1">MYR&nbsp;63</span>
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
                                            <li data-translate="one_wayy">One-way ticket from KLIA T1/T2 to KL Sentral</li>
                                            <li data-translate="free_fourG">Free 4G Wi-Fi</li>
                                            <li data-translate="air_con">Air-conditioning onboard</li>
                                            <li data-translate="luggagee">Luggage space</li>
                                            <li data-translate="digital_inf">Digital infotainment</li>
                                            <li data-translate="mobile_data">Mobile data (15GB or 20GB as per package selection)</li>
                                            <li data-translate="myrfive">MYR5 credit for local calls, SMS, or MMS</li>
                                            <li data-translate="rmfive">RM5 Airtime</li>
                                            <li data-translate="interr">International calls (fixed IDD rates apply)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
  
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="kl_tower2">KL Tower Observation Deck + One-Way: KL Sentral to KLIA T1/T2</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price" data-translate="tour_scratch_price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p2">MYR&nbsp;63</span>
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
                                            <li data-translate="one_wayy">One-way ticket from KLIA T1/T2 to KL Sentral</li>
                                            <li data-translate="free_fourG">Free 4G Wi-Fi</li>
                                            <li data-translate="air_con">Air-conditioning onboard</li>
                                            <li data-translate="luggagee">Luggage space</li>
                                            <li data-translate="digital_inf">Digital infotainment</li>
                                            <li data-translate="mobile_data">Mobile data (15GB or 20GB as per package selection)</li>
                                            <li data-translate="myrfive">MYR5 credit for local calls, SMS, or MMS</li>
                                            <li data-translate="rmfive">RM5 Airtime</li>
                                            <li data-translate="interr">International calls (fixed IDD rates apply)</li>
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
          localStorage.setItem("Price1", 20)
          localStorage.setItem("Discount1", 22)
          localStorage.setItem("Discount4", 14)
          localStorage.setItem("Discount2", 16)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 24)
          localStorage.setItem("Discount1", 26)
          localStorage.setItem("Discount4", 18)
          localStorage.setItem("Discount2", 20)
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
          localStorage.setItem("Price1", 93);
localStorage.setItem("Discount1", 102);
localStorage.setItem("Discount4", 65);
localStorage.setItem("Discount2", 74);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 111);
localStorage.setItem("Discount1", 120);
localStorage.setItem("Discount4", 83);
localStorage.setItem("Discount2", 93);

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
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 17%): KL Tower Observation Deck + KLIA Ekspres Tickets") {
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
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="kl_tower">KL Tower Observation Deck + One-Way: KLIA T1/T2 to KL Sentral</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price"data-translate="p3">MYR&nbsp;63</span>
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
                                            <li data-translate="one_wayy">One-way ticket from KLIA T1/T2 to KL Sentral</li>
                                            <li data-translate="free_fourG">Free 4G Wi-Fi</li>
                                            <li data-translate="air_con">Air-conditioning onboard</li>
                                            <li data-translate="luggagee">Luggage space</li>
                                            <li data-translate="digital_inf">Digital infotainment</li>
                                            <li data-translate="mobile_data">Mobile data (15GB or 20GB as per package selection)</li>
                                            <li data-translate="myrfive">MYR5 credit for local calls, SMS, or MMS</li>
                                            <li data-translate="rmfive">RM5 Airtime</li>
                                            <li data-translate="interr">International calls (fixed IDD rates apply)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
  
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="kl_tower2">KL Tower Observation Deck + One-Way: KL Sentral to KLIA T1/T2</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price" data-translate="tour_scratch_price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p4">MYR&nbsp;63</span>
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
                                            <li data-translate="one_wayy">One-way ticket from KLIA T1/T2 to KL Sentral</li>
                                            <li data-translate="free_fourG">Free 4G Wi-Fi</li>
                                            <li data-translate="air_con">Air-conditioning onboard</li>
                                            <li data-translate="luggagee">Luggage space</li>
                                            <li data-translate="digital_inf">Digital infotainment</li>
                                            <li data-translate="mobile_data">Mobile data (15GB or 20GB as per package selection)</li>
                                            <li data-translate="myrfive">MYR5 credit for local calls, SMS, or MMS</li>
                                            <li data-translate="rmfive">RM5 Airtime</li>
                                            <li data-translate="interr">International calls (fixed IDD rates apply)</li>
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
          localStorage.setItem("Price1", 14)
          localStorage.setItem("Discount1", 17);
          localStorage.setItem("Discount4", 18);
          localStorage.setItem("Discount2", 21);
          localStorage.setItem("Discount5", 8);
          localStorage.setItem("Discount3", 11);
          localStorage.setItem("Discount7", 9);
          localStorage.setItem("Discount6", 12);
          localStorage.setItem("Titles1", "Non-Malaysian Adult")
          localStorage.setItem("Titles2", "Malaysian Adult")
          localStorage.setItem("Titles3", "Malaysian Child")
          localStorage.setItem("Titles4", "Non-Malaysian Child")
          localStorage.setItem("discraption1", "12 to 59 yrs")
          localStorage.setItem("discraption2", "12 to 59 yrs")
          localStorage.setItem("discraption3", "Under 12 yrs")
          localStorage.setItem("discraption4", "Under 12 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count4", 4)
          localStorage.setItem("Price1", 14)
          localStorage.setItem("Discount1", 17);
          localStorage.setItem("Discount4", 18);
          localStorage.setItem("Discount2", 21);
          localStorage.setItem("Discount5", 8);
          localStorage.setItem("Discount3", 11);
          localStorage.setItem("Discount7", 9);
          localStorage.setItem("Discount6", 12);
          localStorage.setItem("Titles1", "Non-Malaysian Adult")
          localStorage.setItem("Titles2", "Malaysian Adult")
          localStorage.setItem("Titles3", "Malaysian Child")
          localStorage.setItem("Titles4", "Non-Malaysian Child")
          localStorage.setItem("discraption1", "12 to 59 yrs")
          localStorage.setItem("discraption2", "12 to 59 yrs")
          localStorage.setItem("discraption3", "Under 12 yrs")
          localStorage.setItem("discraption4", "Under 12 yrs")
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
          localStorage.setItem("Price1", 65);
localStorage.setItem("Discount1", 79);
localStorage.setItem("Discount4", 83);
localStorage.setItem("Discount2", 97);
localStorage.setItem("Discount5", 37);
localStorage.setItem("Discount3", 51);
localStorage.setItem("Discount7", 41);
localStorage.setItem("Discount6", 55);

          localStorage.setItem("Titles1", "Non-Malaysian Adult")
          localStorage.setItem("Titles2", "Malaysian Adult")
          localStorage.setItem("Titles3", "Malaysian Child")
          localStorage.setItem("Titles4", "Non-Malaysian Child")
          localStorage.setItem("discraption1", "12 to 59 yrs")
          localStorage.setItem("discraption2", "12 to 59 yrs")
          localStorage.setItem("discraption3", "Under 12 yrs")
          localStorage.setItem("discraption4", "Under 12 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count4", 4)
          localStorage.setItem("Price1", 65);
localStorage.setItem("Discount1", 79);
localStorage.setItem("Discount4", 83);
localStorage.setItem("Discount2", 97);
localStorage.setItem("Discount5", 37);
localStorage.setItem("Discount3", 51);
localStorage.setItem("Discount7", 41);
localStorage.setItem("Discount6", 55);

          localStorage.setItem("Titles1", "Non-Malaysian Adult")
          localStorage.setItem("Titles2", "Malaysian Adult")
          localStorage.setItem("Titles3", "Malaysian Child")
          localStorage.setItem("Titles4", "Non-Malaysian Child")
          localStorage.setItem("discraption1", "12 to 59 yrs")
          localStorage.setItem("discraption2", "12 to 59 yrs")
          localStorage.setItem("discraption3", "Under 12 yrs")
          localStorage.setItem("discraption4", "Under 12 yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Tickets to ATV Langkawi Bike Adventure") {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="cenangg">Cenang Beach Adventure (Malaysians)</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p23">MYR&nbsp;149</span>
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
                    <li data-translate="profecci">Professional ATV instructor</li>
                    <li data-translate="safety_gear">Safety gear and equipment</li>
                    <li data-translate="insurann">Insurance provided by the operator</li>
                </ul>
            </div>
        </div>
    </div></div>
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="cenang2">Cenang Beach Adventure (Non-Malaysians)</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p24">MYR&nbsp;179</span>
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
                    <li data-translate="profecci">Professional ATV instructor</li>
                    <li data-translate="safety_gear">Safety gear and equipment</li>
                    <li data-translate="insurann">Insurance provided by the operator</li>
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 38)
          localStorage.setItem("Discount4", 31)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 45)
          localStorage.setItem("Discount4", 38)
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 177)
          localStorage.setItem("Discount4", 144)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 209)
          localStorage.setItem("Discount4", 177)
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
  
  if (localStorage.getItem("tickets_title") == "Car/Motorbike Rental in Langkawi") {
    function checkMediaQuery() {
      if (window.innerWidth <= 2000) {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="motorr">Motorbike (Scooter) Rental</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price"><span data-translate="p25">MYR&nbsp;53</span></div>
                        <div></div>
                        <span class="tour-price" data-translate="p26">MYR&nbsp;50</span>
                    </div>
                </div>
                <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                    <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                </div>
            </div>
        </div>
            <div style="min-height:auto;" class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                <ul>
                    <li data-translate="morott">Motorbike</li>
                </ul>
            </div>
    </div></div>
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="axiaa">Axia/MYVI Rental</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price"><span data-translate="p27">MYR&nbsp;90</span></div>
                        <div></div>
                        <span class="tour-price" data-translate="p28">MYR&nbsp;88</span>
                    </div>
                </div>
                <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                    <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                </div>
            </div>
        </div>
            <div style="min-height:auto;" class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                <ul>
                    <li data-translate="sedann">Sedan 4-seater</li>
                </ul>
            </div>
    </div></div>
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="vioss">Vios/Almera/City Rental</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price"><span data-translate="p29">MYR&nbsp;115</span></div>
                        <div></div>
                        <span class="tour-price" data-translate="p30">MYR&nbsp;112</span>
                    </div>
                </div>
                <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                    <button id="iYmuLF3" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                </div>
            </div>
        </div>
            <div style="min-height:auto;" class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                <ul>
                    <li data-translate="sedann2">Sedan 5-seater</li>
                </ul>
            </div>
    </div></div>
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="innova_seren">Innova/Serena Rental</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price"><span data-translate="p31">MYR&nbsp;210</span></div>
                        <div></div>
                        <span class="tour-price" data-translate="p32">MYR&nbsp;200</span>
                        <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 5%</div>
                    </div>
                </div>
                <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                    <button id="iYmuLF4" onclick="StyledButton(3)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                </div>
            </div>
        </div>
            <div style="min-height:auto;" class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                <ul>
                    <li data-translate="mmppvv">MPV 6-seater</li>
                </ul>
            </div>
    </div></div>
  `
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        if (key == 0) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 10)
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "Above 6 yrs")
          localStorage.setItem("Discount1", 11)
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 18)
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "Above 6 yrs")
          localStorage.setItem("Discount1", 19)
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 23)
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "Above 6 yrs")
          localStorage.setItem("Discount1", 24)
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 3) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 42)
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "Above 6 yrs")
          localStorage.setItem("Discount1", 44)
          document.querySelector("#iYmuLF4").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
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
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 46)
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "Per Motorbike (Scooter)")
          localStorage.setItem("Discount1", 51)
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 83)
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "Per Car")
          localStorage.setItem("Discount1", 88)
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 107)
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "Per Car")
          localStorage.setItem("Discount1", 111)
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 3) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 195)
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "Per Car")
          localStorage.setItem("Discount1", 205)
          document.querySelector("#iYmuLF4").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Langkawi Adventure & Xtreme Park") {
    function checkMediaQuery() {
      if (window.innerWidth <= 2000) {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="ten_in">10-in-1 Package Malaysian</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p33">MYR&nbsp;85</span>
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
                    <li data-translate="seven_d">7D Cinema</li>
                    <li data-translate="ten_minute">10-minute Ghost House experience</li>
                    <li data-translate="twenty">20-minute ATV Jungle ride - double rider</li>
                    <li data-translate="twenty2">10-minute Indoor Go karting - single seater</li>
                    <li data-translate="twenty3">20-minute visit to 3D Art Mini Museum</li>
                    <li data-translate="twenty4">Visit to Horse Feeding Park</li>
                    <li data-translate="twenty5">20 Pallet Paintball Target Shooting</li>
                    <li data-translate="twenty6">10 Arrow Archery Target Shooting</li>
                </ul>
            </div>
        </div>
    </div></div>
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="four_in">4-in-1 Package Malaysian</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p34">MYR&nbsp;89</span>
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
                    <li data-translate="twenty8">Archery target shooting</li>
                    <li data-translate="twenty7">30-minute ATV Jungle ride - double rider</li>
                    <li data-translate="twenty2">10-minute Indoor Go karting - single seater</li>
                    <li data-translate="twenty9">10-minute Sky Bike Adventure - single seater</li>
                </ul>
            </div>
        </div>
    </div></div>
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="four_in2">4-in-1 Package: Non-Malaysian</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p35">MYR&nbsp;99</span>
                    </div>
                </div>
                <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                    <button id="iYmuLF3" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                </div>
            </div>
        </div>
        <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
            <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                <ul>
                    <li data-translate="twenty8">Archery target shooting</li>
                    <li data-translate="twenty7">30-minute ATV Jungle ride - double rider</li>
                    <li data-translate="twenty2">10-minute Indoor Go karting - single seater</li>
                    <li data-translate="twenty9">10-minute Sky Bike Adventure - single seater</li>
                </ul>
            </div>
        </div>
    </div></div>     
    <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="four_in3">10-in-1 Package Non-Malaysian</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p36">MYR&nbsp;150</span>
                    </div>
                </div>
                <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                    <button id="iYmuLF4" onclick="StyledButton(3)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                </div>
            </div>
        </div>
        <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
            <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                <ul>
                    <li data-translate="seven_d">7D Cinema</li>
                    <li data-translate="ten_minute">10-minute Ghost House experience</li>
                    <li data-translate="twenty">20-minute ATV Jungle ride - double rider</li>
                    <li data-translate="twenty2">10-minute Indoor Go karting - single seater</li>
                    <li data-translate="twenty3">20-minute visit to 3D Art Mini Museum</li>
                    <li data-translate="twenty4">Visit to Horse Feeding Park</li>
                    <li data-translate="twenty5">20 Pallet Paintball Target Shooting</li>
                    <li data-translate="twenty6">10 Arrow Archery Target Shooting</li>
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
          localStorage.setItem("Price1", 19)
          localStorage.setItem("Titles1", "Guest");
          localStorage.setItem("discraption1", "Above 12 yrs");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 20)
          localStorage.setItem("Discount4", 15)
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 21)
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "12 to 65 yrs")
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 3) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 32)
          localStorage.setItem("Discount4", 25);
          document.querySelector("#iYmuLF4").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
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
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 88)
          localStorage.setItem("Titles1", "Guest");
          localStorage.setItem("discraption1", "Above 12 yrs");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 93)
          localStorage.setItem("Discount4", 69)
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 97)
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "12 to 65 yrs")
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 3) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 149)
          localStorage.setItem("Discount4", 116);
          document.querySelector("#iYmuLF4").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "White Water Rafting Tour in Sabah") {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="kiulu">Kiulu River Rafting (Min 4 Pax)</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price"  data-translate="p37">MYR&nbsp;105</span>
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
                    <li data-translate="beginn">Beginner level rafting experience</li>
                    <li data-translate="english_speak">English Speaking Guide</li>
                    <li data-translate="certified">Certified First Aider Guide</li>
                    <li data-translate="certified2">Certified White Water Rafting Equipment</li>
                    <li data-translate="white_water">White Water Rafting Certificate (upon request)</li>
                    <li data-translate="photogrr">Photographer Service</li>
                    <li data-translate="buffet_lunch">Buffet Lunch</li>
                    <li data-translate="showwer">Shower/Changing Facilities</li>
                    <li data-translate="insurnn">Insurance Coverage</li>
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 22)
          localStorage.setItem("Discount4", 20);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 102)
          localStorage.setItem("Discount4", 93);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  
  }
  
  if (localStorage.getItem("tickets_title") == "Admission Ticket to Ghost Museum Penang") {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="noandsonasdui">Non-Malaysian Citizens: Entry to Ghost Museum Penang</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price"><span  data-translate="p38">MYR&nbsp;33</span></div>
                        <div></div>
                        <span class="tour-price"  data-translate="p39">MYR&nbsp;30</span>
                        <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="save_u6">Save up to 9%</div>
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
                    <li data-translate="admisss">Admission ticket to Ghost Museum Penang for Non-Malaysian citizens</li>
                    <li data-translate="guidded">Guided tour</li>
                    <li data-translate="frr_cust">Free costumes & props for photos</li>
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
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 6)
          localStorage.setItem("Discount1", 7);
          localStorage.setItem("Discount4", 4);
          localStorage.setItem("Discount2", 5);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
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
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 27);
localStorage.setItem("Discount1", 32);
localStorage.setItem("Discount4", 18);
localStorage.setItem("Discount2", 23);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Ripley’s Adventureland Tickets") {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">1 Attraction</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p41">MYR&nbsp;34</span>
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
                    <li data-translate="access_too">Access to 4D Trick Art Museum</li>
                </ul>
            </div>
        </div>
    </div></div>
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">2 Attractions + Zombie Outbreak</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p42">MYR&nbsp;38</span>
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
                    <li data-translate="acaawe">Access to Jurassic Research Centre</li>
                </ul>
            </div>
        </div>
    </div></div>
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">2 Attractions + 4D Trick Art Museum</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p43">MYR&nbsp;38</span>
                    </div>
                </div>
                <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                    <button id="iYmuLF3" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                </div>
            </div>
        </div>
        <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
            <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                <ul>
                    <li data-translate="access_too2">Access to Zombie Outbreak</li>
                </ul>
            </div>
        </div>
    </div></div>     
    <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="ripll">Ripley's Believe It or Not! Odditorium: Single Admission</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p44">MYR&nbsp;31</span>
                    </div>
                </div>
                <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                    <button id="iYmuLF4" onclick="StyledButton(3)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                </div>
            </div>
        </div>
        <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
            <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                <ul>
                    <li data-translate="acc_to_rip">Access to Ripley's Believe It or Not! Odditorium</li>
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
            localStorage.setItem("Price1", 6)
            localStorage.setItem("Discount1", 8);
            localStorage.setItem("Discount4", 6);
            localStorage.setItem("Discount2", 8);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 15)
          localStorage.setItem("Discount1", 16);
          localStorage.setItem("Discount4", 15);
          localStorage.setItem("Discount2", 16);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 15)
          localStorage.setItem("Discount1", 16);
          localStorage.setItem("Discount4", 15);
          localStorage.setItem("Discount2", 16);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
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
          localStorage.setItem("Price1", 27);
localStorage.setItem("Discount1", 37);
localStorage.setItem("Discount4", 27);
localStorage.setItem("Discount2", 37);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 69);
localStorage.setItem("Discount1", 74);
localStorage.setItem("Discount4", 69);
localStorage.setItem("Discount2", 74);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 69);
localStorage.setItem("Discount1", 74);
localStorage.setItem("Discount4", 69);
localStorage.setItem("Discount2", 74);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Ghost Museum Melaka") {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="ghost_museum">Ghost Museum Melaka Admission: Non-Malaysian Citizen</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p45">MYR&nbsp;30</span>
                    </div>
                </div>
                <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                    <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 7)
          localStorage.setItem("Discount4", 4);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 32)
          localStorage.setItem("Discount4", 18);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Tech Dome Penang Tickets") {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="asd_sel">Non-Malaysian Admission</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p46">MYR&nbsp;53</span>
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
                    <li data-translate="valid_only">Valid only for non-Malaysian residents</li>
                    <li data-translate="amdd">Admission to Tech Dome Penang</li>
                </ul>
            </div>
        </div>
    </div></div>    
    <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="malaysiian">Malaysian Admission</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p47">MYR&nbsp;27</span>
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
                    <li data-translate="validdqwd">Valid only for Malaysian residents</li>
                    <li data-translate="amdd_to">Admission to Tech Dome Penang</li>
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 5)
          localStorage.setItem("Discount4", 3);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 11)
          localStorage.setItem("Discount4", 6);
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 23)
          localStorage.setItem("Discount4", 13);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 51)
          localStorage.setItem("Discount4", 27);
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
  
  if (localStorage.getItem("tickets_title") == "Penang 3D Trick Art Museum Tickets") {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="standd">Standard Admission (Malaysian)</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price"><span data-translate="p48">MYR&nbsp;18</span></div>
                        <div></div>
                        <span class="tour-price" data-translate="p49">MYR&nbsp;17</span>
                        <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="save_u7">Save up to 6%</div>
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
                    <li data-translate="entryy">Entry into the Penang 3D Trick Art Museum Note: This ticket is valid for Malaysian citizens</li>
                </ul>
            </div>
        </div>
    </div></div>    
    <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="stand2">Standard Admission (Non-Malaysian)</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p50">MYR&nbsp;28</span>
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
                    <li data-translate="entry4">Entry into the Penang 3D Trick Art Museum Note: This ticket is valid for non-Malaysian citizens</li>
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
          localStorage.setItem("Price1", 3)
          localStorage.setItem("Discount1", 4);
          localStorage.setItem("Discount4", 2);
          localStorage.setItem("Discount2", 3);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 5)
          localStorage.setItem("Discount4", 3);
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
          localStorage.setItem("Price1", 13)
          localStorage.setItem("Discount1", 18);
          localStorage.setItem("Discount4", 9);
          localStorage.setItem("Discount2", 13);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 23)
          localStorage.setItem("Discount4", 13);
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
  
  if (localStorage.getItem("tickets_title") == "Entry Ticket to illusion 3D Art Museum Kuala Lumpur") {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_6_1_title">Standard Admission (Malaysian)</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price"><span data-translate="p51">MYR&nbsp;18</span></div>
                        <div></div>
                        <span class="tour-price" data-translate="p52">MYR&nbsp;17</span>
                        <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="save_u7">Save up to 6%</div>
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="n_malay">Standard Admission (Non-Malaysian)</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price"><span data-translate="p53">MYR&nbsp;18</span></div>
                        <div></div>
                        <span class="tour-price" data-translate="p54">MYR&nbsp;17</span>
                        <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="save_u8">Save up to 6%</div>
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
        if (key == 0) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 6);
          localStorage.setItem("Discount4", 7);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 9);
          localStorage.setItem("Discount4", 10);
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 27);
          localStorage.setItem("Discount4", 32);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 41);
          localStorage.setItem("Discount4", 46);
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
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 11%): Illusion 3D Art Museum Melaka + Upside Down House Tickets") {
    document.querySelector("#selectScreen").style = "display:grid;";
    document.querySelector("#tourSelectionBar").style = "display:block;";
  
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
            localStorage.setItem("count2_2", 2)
            localStorage.setItem("Price1", 6)
            localStorage.setItem("Discount1", 7);
            localStorage.setItem("Discount4", 4);
            localStorage.setItem("Discount2", 3);
            localStorage.setItem("All_Title", "Adult");
            localStorage.setItem("All_Title3", "Child");
          } else {
            localStorage.setItem("count2_2", 2)
            localStorage.setItem("Price1", 111.629)
            localStorage.setItem("Discount1", 117.504);
            localStorage.setItem("Discount4", 55.814);
            localStorage.setItem("Discount2", 58.752);
            localStorage.setItem("All_Title", "Adult");
            localStorage.setItem("All_Title3", "Child");
          }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Entry Ticket to illusion 3D Art Museum Melaka") {
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
            <h3 class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="mayalss">Malaysian Citizen</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p56">MYR&nbsp;34</span>
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
            <h3 class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_19_2_title">Non-Malaysian Citizen</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p55">MYR&nbsp;50</span>
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
        if (key == 0) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 7.22)
          localStorage.setItem("Discount4", 3.61);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 10.61)
          localStorage.setItem("Discount4", 4.51);
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 117.504)
          localStorage.setItem("Discount4", 58.752);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 172.800)
          localStorage.setItem("Discount4", 172.800);
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
  
  if (localStorage.getItem("tickets_title") == "Wonderfood Museum") {
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
        <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="stand_tick">Standard Ticket (Malaysian)</h3>
        <div class="descriptors"></div>
        <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
            <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                    <div></div>
                    <span class="tour-price" data-translate="p57">MYR&nbsp;20</span>
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
                <li data-translate="valdd_fr">Valid for Malaysian Passport Holders</li>
                <li data-translate="admis_wondr">Admission into Wonderfood Museum</li>
            </ul>
        </div>
    </div>
  </div></div>
  
  <div class="swiper-slide"><div data-qa-marker="variant-card-available"
    class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
    <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
        <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="stand_tick2">Standard Ticket (Non-Malaysian)</h3>
        <div class="descriptors"></div>
        <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
            <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                    <div></div>
                    <span class="tour-price" data-translate="p58">MYR&nbsp;30</span>
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
                <li data-translate="vald_fr_nn">Valid for Non-Malaysian Passport Holders</li>
                <li data-translate="admis_wondr">Admission into Wonderfood Museum</li>
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
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 3)
          localStorage.setItem("Discount4", 2);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 5)
          localStorage.setItem("Discount4", 3);
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
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 13)
          localStorage.setItem("Discount4", 9);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 23)
          localStorage.setItem("Discount4", 13);
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


  if (localStorage.getItem("tickets_title") == "Batam Fast Ferry Tickets: Singapore (Tanah Merah Terminal) to/from Desaru (Tanjung Pengelih)") {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">One-Way Tickets: Tanah Merah to Tanjung Pengelih</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p71">MYR&nbsp;259</span>
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
                    <li data-translate="">One-way ferry transfers from Tanah Merah to Tanjung Pengelih</li>
                </ul>
            </div>
        </div>
    </div></div>
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">One-Way Tickets: Tanjung Pengelih to Tanah Merah</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p71">MYR&nbsp;152</span>
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
                    <li>One-way ferry transfers from Tanjung Pengelih to Tanah Merah</li>
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
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 36)
          localStorage.setItem("Discount1", 42);
          localStorage.setItem("Discount4", 36);
          localStorage.setItem("Discount2", 42);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 36)
          localStorage.setItem("Discount1", 42);
          localStorage.setItem("Discount4", 36);
          localStorage.setItem("Discount2", 42);
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
          localStorage.setItem("Price1", 167);
localStorage.setItem("Discount1", 195);
localStorage.setItem("Discount4", 167);
localStorage.setItem("Discount2", 195);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 167);
localStorage.setItem("Discount1", 195);
localStorage.setItem("Discount4", 167);
localStorage.setItem("Discount2", 195);

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
  
  if (localStorage.getItem("tickets_title") == "Batam Fast One-Way/Round-Trip Ferry Transfers: Singapore Tanah Merah Terminal to/from Desaru Coast") {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_340">Round-Trip Ferry: Singapore Tanah Merah Terminal to Desaru Coast</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p7111">MYR&nbsp;382</span>
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
                    <li data-translate="ticket_745">Round-trip transfers between Singapore Tanah Merah Terminal and Desaru Coast</li>
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
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 60)
          localStorage.setItem("Discount1", 64);
          localStorage.setItem("Discount4", 60);
          localStorage.setItem("Discount2", 64);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
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
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 279);
localStorage.setItem("Discount1", 298);
localStorage.setItem("Discount4", 279);
localStorage.setItem("Discount2", 298);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 9%): Entopia by Penang Butterfly Farm + ESCAPE Penang Tickets") {
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
            <h3 style="min-height: auto;" color="#444444" data-translate="home_title_338" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Malaysian Admission</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price">from</div>
                        <div></div>
                        <span class="tour-price" data-translate="p72">MYR&nbsp;239</span>
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
            <h3 style="min-height: auto;" data-translate="home_title_339" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Non-Malaysian Admission</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price">from</div>
                        <div></div>
                        <span class="tour-price" data-translate="p73">MYR&nbsp;244</span>
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
          localStorage.setItem("Price1", 49)
          localStorage.setItem("Discount1", 54);
          localStorage.setItem("Discount4", 33);
          localStorage.setItem("Discount2", 36);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 50)
          localStorage.setItem("Discount1", 55);
          localStorage.setItem("Discount4", 34);
          localStorage.setItem("Discount2", 37);
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
          localStorage.setItem("Price1", 228);
localStorage.setItem("Discount1", 251);
localStorage.setItem("Discount4", 153);
localStorage.setItem("Discount2", 167);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 233);
localStorage.setItem("Discount1", 256);
localStorage.setItem("Discount4", 158);
localStorage.setItem("Discount2", 172);

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
  
  if (localStorage.getItem("tickets_title") == "Combo: ESCAPE Penang + Tropical Spice Garden Tickets") {
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
            <h3 style="min-height: auto;" color="#444444" data-translate="home_title_336" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">ESCAPE Penang Admission + Tropical Spice Garden Admission</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price">from</div>
                        <div></div>
                        <span class="tour-price" data-translate="p74">MYR&nbsp;215</span>
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
            <h3 data-translate="home_title_337" style="min-height: auto;" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">ESCAPE Penang Admission + Tropical Spice Garden Admission & Guided Tour</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price">from</div>
                        <div></div>
                        <span class="tour-price" data-translate="p75">MYR&nbsp;233</span>
                    </div>
                </div>
                <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                    <button data-translate="select_title" id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
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
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 44)
          localStorage.setItem("Discount1", 46);
          localStorage.setItem("Discount4", 28);
          localStorage.setItem("Discount2", 30);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 48)
          localStorage.setItem("Discount1", 50);
          localStorage.setItem("Discount4", 31);
          localStorage.setItem("Discount2", 33);
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
          localStorage.setItem("Price1", 204);
localStorage.setItem("Discount1", 214);
localStorage.setItem("Discount4", 130);
localStorage.setItem("Discount2", 139);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 223);
localStorage.setItem("Discount1", 233);
localStorage.setItem("Discount4", 144);
localStorage.setItem("Discount2", 153);

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
  
  if (localStorage.getItem("tickets_title") == "Entry Tickets to Jungle Gym in Kuala Lumpur") {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_332">Atria Shopping Gallery Branch Ticket (Weekday)</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p76">MYR&nbsp;23</span>
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
            <h3 color="#444444" data-translate="home_title_333" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Bangsar Shopping Centre Branch Ticket (Weekday)</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p77">MYR&nbsp;47</span>
                    </div>
                </div>
                <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                    <button data-translate="select_title" id="iYmuLF2" onclick="StyledButton(1)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
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
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 4)
          localStorage.setItem("Discount1", 5);
          localStorage.setItem("Titles1", "Infant")
          localStorage.setItem("discraption1", "Under 2 years")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 10)
          localStorage.setItem("Discount4", 5);
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
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 18)
          localStorage.setItem("Discount1", 23);
          localStorage.setItem("Titles1", "Infant")
          localStorage.setItem("discraption1", "Under 2 years")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 46)
          localStorage.setItem("Discount4", 23);
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
  
  if (localStorage.getItem("tickets_title") == "Sunway Lagoon Theme Park Tickets") {
    document.querySelector(".swiper-button-prev").style = "display:none"
    document.querySelector(".swiper-button-next").style = "display:none"
    // Ekran o'lchamini tekshirish funksiyasi
    function checkMediaQuery() {
      if (window.innerWidth <= 2000) {
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
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_1_1_title">General Admission:
                                      Malaysian Citizens</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div class="tour-scratch-price"><span data-translate="w1">RP&nbsp;569</span></div>
                                              <div></div>
                                              <span class="tour-price" data-translate="w2">RP&nbsp;534</span>
                                              <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="for_tickets_1_1_skidka">Save up to 6%</div>
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
                                          <li data-translate="for_tickets_1_1_1_description">Entry to Sunway Lagoon</li>
                                          <li data-translate="for_tickets_1_1_2_description">Access to Night Park</li>
                                          <li data-translate="for_tickets_1_1_3_description">Access to all rides</li>
                                      </ul>
                                  </div>
                              </div>
                          </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                              class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                              <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_1_2_title">General Admission:
                                      Non-Malaysian Citizens</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div class="tour-scratch-price"><span data-translate="w3">RP&nbsp;776</span></div>
                                              <div></div>
                                              <span class="tour-price" data-translate="w4">RP&nbsp;662</span>
                                              <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="for_tickets_1_2_skidka">Save up to 15%</div>
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
                                          <li data-translate="for_tickets_1_2_1_description">Entry to Sunway Lagoon</li>
                                          <li data-translate="for_tickets_1_2_2_description">Access to Night Park</li>
                                          <li data-translate="for_tickets_1_2_3_description">Access to all rides</li>
                                      </ul>
                                  </div>
                              </div>
                          </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                              class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                              <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_1_3_title">General Admission +
                                      Quack Xpress Pass: Malaysian Citizens</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div></div>
                                              <span class="tour-price" data-translate="w6">RP&nbsp;793</span>
                                          </div>
                                      </div>
                                      <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                          <button id="iYmuLF3" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                      </div>
                                  </div>
                              </div>
                              <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                  <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                      <ul>
                                          <li data-translate="for_tickets_1_3_1_description">Priority access to 21 rides</li>
                                          <li data-translate="for_tickets_1_3_2_description">Entry to Sunway Lagoon</li>
                                          <li data-translate="for_tickets_1_3_3_description">Access to Night Park</li>
                                          <li data-translate="for_tickets_1_3_4_description">Access to all rides</li>
                                      </ul>
                                  </div>
                              </div>
                          </div></div>
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                              class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                              <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                  <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_1_4_title">General Admission +
                                      Quack Xpress Pass: Non-Malaysian Citizens</h3>
                                  <div class="descriptors"></div>
                                  <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                      <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                          <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div class="tour-scratch-price"><span data-translate="w7">RP&nbsp;1052</span></div>
                                              <div></div>
                                              <span class="tour-price" data-translate="w8">RP&nbsp;948</span>
                                              <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="for_tickets_1_4_skidka">Save up to 10%</div>
                                          </div>
                                      </div>
                                      <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                          <button id="iYmuLF4" onclick="StyledButton(3)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                      </div>
                                  </div>
                              </div>
                              <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                  <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                      <ul>
                                          <li data-translate="for_tickets_1_4_1_description">Priority access to 21 rides</li>
                                          <li data-translate="for_tickets_1_4_2_description">Entry to Sunway Lagoon</li>
                                          <li data-translate="for_tickets_1_4_3_description">Access to Night Park</li>
                                          <li data-translate="for_tickets_1_4_4_description">Access to all rides</li>
                                          <li data-translate="for_tickets_1_4_5_description">Maximum of 6 tickets per booking</li>
                                      </ul>
                                  </div>
                              </div>
                          </div></div>`
  
    if (sessionStorage.getItem("selectedValyut") == "USD") {
      function StyledButton(key) {
        select_clear()
        localStorage.setItem("select_tickets",document.querySelector(`.swiper-slide:nth-child(${key+1}) .TextBlock__Text-sc-hd2jvz-0`).innerHTML)
        window.location.href = "#selectScreen"
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 15)
          localStorage.setItem("Discount1", 17)
          localStorage.setItem("Discount4", 12)
          localStorage.setItem("Discount2", 14)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        } if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 41)
          localStorage.setItem("Discount1", 48)
          localStorage.setItem("Discount4", 34)
          localStorage.setItem("Discount2", 40)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        } if (key == 2) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 42)
          localStorage.setItem("Discount4", 38)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        } if (key == 3) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 58)
          localStorage.setItem("Discount1", 67)
          localStorage.setItem("Discount4", 51)
          localStorage.setItem("Discount2", 60)
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF4").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
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
          localStorage.setItem("Price1", 69);
localStorage.setItem("Discount1", 79);
localStorage.setItem("Discount4", 55);
localStorage.setItem("Discount2", 65);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        } if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 190);
localStorage.setItem("Discount1", 223);
localStorage.setItem("Discount4", 158);
localStorage.setItem("Discount2", 186);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        } if (key == 2) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 195);
localStorage.setItem("Discount4", 176);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        } if (key == 3) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 270);
localStorage.setItem("Discount1", 312);
localStorage.setItem("Discount4", 237);
localStorage.setItem("Discount2", 279);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF4").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  
  }
  
  if (localStorage.getItem("tickets_title") == "Tickets to Sunway Lagoon Night Park") {
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
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_2_1_title">Sunway Lagoon Night Park: Malaysian Citizens</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price"><span data-translate="w9">RP&nbsp;276</span></div>
                          <div></div>
                          <span class="tour-price" data-translate="w10">RP&nbsp;241</span>
                          <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="for_tickets_2_1_skidka">Save up to 13%</div>
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
                      <li data-translate="for_tickets_2_1_1_description">Valid for Malaysian citizens only</li>
                      <li data-translate="for_tickets_2_1_2_description">Admission to Sunway Lagoon Night Park</li>
                      <li data-translate="for_tickets_2_1_3_description">Access to 8 rides</li>
                      <li data-translate="for_tickets_2_1_4_description">Access to 9 shows & activities</li>
                  </ul>
              </div>
          </div>
      </div></div>
        <div class="swiper-slide"><div data-qa-marker="variant-card-available"
          class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
          <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_2_2_title">Sunway Lagoon Night Park: Non-Malaysian Citizens</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price"><span data-translate="w11">RP&nbsp;276</span></div>
                          <div></div>
                          <span class="tour-price" data-translate="w12">RP&nbsp;241</span>
                          <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="for_tickets_2_2_skidka">Save up to 13%</div>
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
                      <li data-translate="for_tickets_2_2_1_description">Valid for Non-Malaysian citizens only</li>
                      <li data-translate="for_tickets_2_2_2_description">Admission to Sunway Lagoon Night Park</li>
                      <li data-translate="for_tickets_2_2_3_description">Access to 8 rides</li>
                      <li data-translate="for_tickets_2_2_4_description">Access to 9 shows & activities</li>
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
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 14)
          localStorage.setItem("Discount1", 16);
          localStorage.setItem("Discount4", 12);
          localStorage.setItem("Discount2", 14);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 14)
          localStorage.setItem("Discount1", 16);
          localStorage.setItem("Discount4", 12);
          localStorage.setItem("Discount2", 14);
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
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 65);
localStorage.setItem("Discount1", 74);
localStorage.setItem("Discount4", 55);
localStorage.setItem("Discount2", 65);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 65);
localStorage.setItem("Discount1", 74);
localStorage.setItem("Discount4", 55);
localStorage.setItem("Discount2", 65);

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
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 17%): Aquaria KLCC + Sunway Lagoon Tickets") {
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
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate='for_tickets_4_1_title'>General Admission:
                  Malaysian Citizens</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price" data-translate="tour_scratch_price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w13">RP&nbsp;669</span>
                      </div>
                  </div>
                  <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                      <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate='for_tickets_select'>Select</button>
                  </div>
              </div>
          </div>
      </div></div>
        <div class="swiper-slide"><div data-qa-marker="variant-card-available"
          class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
          <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_4_2_title">General Admission:
                  Non-Malaysian Citizens</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price" data-translate="tour_scratch_price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w14">RP&nbsp;838</span>
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
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 41)
          localStorage.setItem("Discount1", 46);
          localStorage.setItem("Discount4", 34);
          localStorage.setItem("Discount2", 39);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 51)
          localStorage.setItem("Discount1", 57);
          localStorage.setItem("Discount4", 45);
          localStorage.setItem("Discount2", 50);
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
          localStorage.setItem("Price1", 190);
localStorage.setItem("Discount1", 214);
localStorage.setItem("Discount4", 158);
localStorage.setItem("Discount2", 181);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 237);
localStorage.setItem("Discount1", 265);
localStorage.setItem("Discount4", 209);
localStorage.setItem("Discount2", 233);

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
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 13%): Sunway Lagoon Theme Park + KL Tower Tickets") {
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
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_5_1_title">General Admission:
                                          Sunway Lagoon + KL Tower Tickets: Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price" data-translate="tour_scratch_price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w15">RP&nbsp;859</span>
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
                                              <li data-translate="for_tickets_5_1_1_description">Entry to Sunway Lagoon</li>
                                              <li data-translate="for_tickets_5_1_2_description">Entry to Sunway Lagoon Night Park (6pm to 11pm)</li>
                                              <li data-translate="for_tickets_5_1_3_description">Access to all rides</li>
                                              <li data-translate="for_tickets_5_1_4_description">Access to Observation Deck</li>
                                              <li data-translate="for_tickets_5_1_5_description">Access to Sky Deck</li>
                                              <li data-translate="for_tickets_5_1_6_description">Access to Sky Box</li>
                                              <li data-translate="for_tickets_5_1_7_description">Access to Tower Walk 100</li>
                                              <li data-translate="for_tickets_5_1_8_description">Valid for Malaysian citizens</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_5_2_title">Sunway Lagoon + KL Tower Tickets: Non-Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price" data-translate="tour_scratch_price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="w16">RP&nbsp;1128</span>
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data_translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="variantCard__Body-sc-q6rdw-7 kjnAMM">
                                      <div class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                          <ul>
                                              <li data-translate="for_tickets_5_1_1_description">Entry to Sunway Lagoon</li>
                                              <li data-translate="for_tickets_5_1_2_description">Entry to Sunway Lagoon Night Park (6pm to 11pm)</li>
                                              <li data-translate="for_tickets_5_1_3_description">Access to all rides</li>
                                              <li data-translate="for_tickets_5_1_4_description">Access to Observation Deck</li>
                                              <li data-translate="for_tickets_5_1_5_description">Access to Sky Deck</li>
                                              <li data-translate="for_tickets_5_1_6_description">Access to Sky Box</li>
                                              <li data-translate="for_tickets_5_1_7_description">Access to Tower Walk 100</li>
                                              <li data-translate="for_tickets_5_1_8_description">Valid for Malaysian citizens</li>
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
          localStorage.setItem("Price1", 57)
          localStorage.setItem("Discount1", 65);
          localStorage.setItem("Discount4", 56);
          localStorage.setItem("Discount2", 64);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 62)
          localStorage.setItem("Discount1", 71);
          localStorage.setItem("Discount4", 50);
          localStorage.setItem("Discount2", 57);
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
          localStorage.setItem("Price1", 265);
localStorage.setItem("Discount1", 302);
localStorage.setItem("Discount4", 260);
localStorage.setItem("Discount2", 298);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 288);
localStorage.setItem("Discount1", 330);
localStorage.setItem("Discount4", 233);
localStorage.setItem("Discount2", 265);

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
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 18%): Sunway Lagoon Theme Park + Zoo Negara & Panda Conservation Centre Tickets") {
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
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translae="for_tickets_6_1_title">
                  Malaysian</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price" data-translate="tour_scratch_price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w17">RP&nbsp;627</span>
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
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_6_2_title">
                  Non-Malaysian</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price" data-translate="tour_scratch_price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w18">RP&nbsp;862</span>
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
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 38)
          localStorage.setItem("Discount1", 46);
          localStorage.setItem("Discount4", 26);
          localStorage.setItem("Discount2", 29);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 53)
          localStorage.setItem("Discount1", 64);
          localStorage.setItem("Discount4", 32);
          localStorage.setItem("Discount2", 40);
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
          localStorage.setItem("Price1", 177);
localStorage.setItem("Discount1", 214);
localStorage.setItem("Discount4", 121);
localStorage.setItem("Discount2", 135);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 247);
localStorage.setItem("Discount1", 298);
localStorage.setItem("Discount4", 149);
localStorage.setItem("Discount2", 186);

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
  // mashula qoldi faqat
  if (localStorage.getItem("tickets_title") == "Sunway Lagoon Ticket with Private Round Trip Transfers") {
    document.querySelector(".gCKyJW .swiper-wrapper").innerHTML = `
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
          class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
          <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_17_1_title">General Admission:
                  Admission Ticket with Private Transfers : Malaysian Citizen</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div></div>
                          <span class="tour-price" data-translate="w19">RP&nbsp;627</span>
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
                      <li data-translate="for_tickets_6_1_1_title">Sunway Lagoon entry tickets for Malaysian Citizens</li>
                      <li data-translate="for_tickets_6_1_2_title">Unlimited access to rides</li>
                      <li data-translate="for_tickets_6_1_3_title">Round-trip hotel transfers</li>
                  </ul>
              </div>
          </div>
      </div></div>
        <div class="swiper-slide"><div data-qa-marker="variant-card-available"
          class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
          <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_6_1_title">Admission Ticket with Private Transfers : Non-Malaysian Citizen</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div></div>
                          <span class="tour-price" data-translate="w20">RP&nbsp;690</span>
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
                      <li data-translate="for_tickets_6_1_1_title">Sunway Lagoon entry tickets for Malaysian Citizens</li>
                      <li data-translate="for_tickets_6_1_2_title">Unlimited access to rides</li>
                      <li data-translate="for_tickets_6_1_3_title">Round-trip hotel transfers</li>
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 39)
          localStorage.setItem("Discount4", 36);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 42)
          localStorage.setItem("Discount4", 38);
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 181);
localStorage.setItem("Discount4", 167);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 195);
localStorage.setItem("Discount4", 177);

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
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 15%): Sunway Lagoon Theme Park + KL Hop-On Hop-Off Sightseeing Bus Tour") {
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
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_6_1_title">
                  Malaysian</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price" data-translate="tour_scratch_price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w21">RP&nbsp;603</span>
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
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">
                  Non-Malaysian</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price" data-translate="tour_scratch_price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w22">RP&nbsp;724</span>
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
        if (key == 0) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 35)
          localStorage.setItem("Discount1", 41);
          localStorage.setItem("Discount4", 28);
          localStorage.setItem("Discount2", 32);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 41)
          localStorage.setItem("Discount1", 48);
          localStorage.setItem("Discount4", 35);
          localStorage.setItem("Discount2", 41);
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
          localStorage.setItem("Price1", 163);
localStorage.setItem("Discount1", 191);
localStorage.setItem("Discount4", 130);
localStorage.setItem("Discount2", 149);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 191);
localStorage.setItem("Discount1", 223);
localStorage.setItem("Discount4", 163);
localStorage.setItem("Discount2", 191);

          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Aquaria KLCC Skip-the-Line Tickets") {
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
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="for_tickets_19_2_title">Non Malaysian Citizens</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price"><span data-translate="w23">RP&nbsp;272</span></div>
                          <div></div>
                          <span class="tour-price" data-translate="w24">RP&nbsp;234</span>
                          <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="save_u">Save up to 14%</div>
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
                      <li data-translate="for_tickets_9_1_1_description">Skip-the-line admission into Aquaria KLCC</li>
                      <li data-translate="for_tickets_9_1_2_description">Access to all exhibits</li>
                      <li data-translate="for_tickets_9_1_3_description">Valid only for Non-Malaysians</li>
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
          localStorage.setItem("Price1", 9)
          localStorage.setItem("Discount1", 11);
          localStorage.setItem("Discount4", 7);
          localStorage.setItem("Discount2", 8);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
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
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 41);
localStorage.setItem("Discount1", 51);
localStorage.setItem("Discount4", 32);
localStorage.setItem("Discount2", 37);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        }
  
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 10%): Aquaria KLCC Admission Ticket + Malaysia 4G Tourist Local SIM Card") {
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
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">
                  Malaysian</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w33">RP&nbsp;317</span>
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
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">
                  Non-Malaysian</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price">from</div>
                          <div></div>
                          <span class="tour-price" data-translate="w34">RP&nbsp;362</span>
                      </div>
                  </div>
                  <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                      <button id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                  </div>
              </div>
          </div>
      </div></div>
      `
  
    function StyledButton(key) {
      select_clear()
      window.location.href = "#selectScreen"
      if (key == 0) {
        localStorage.setItem("count3", 3)
        localStorage.setItem("Price1", 43)
        localStorage.setItem("Discount1", 52);
        localStorage.setItem("Discount4", 34);
        localStorage.setItem("Discount2", 42);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
        document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
        document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
      }
  
      if (key == 1) {
        localStorage.setItem("count3", 3)
        localStorage.setItem("Price1", 57)
        localStorage.setItem("Discount1", 75);
        localStorage.setItem("Discount4", 48);
        localStorage.setItem("Discount2", 65);
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
  
  if (localStorage.getItem("tickets_title") == "Combo: Aquaria KLCC + KL Hop-On Hop-Off Sightseeing Bus Tour") {
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
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Weekends & Public Holidays: Malaysian Citizens</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price"><span data-translate="w35">RP&nbsp;293</span></div>
                          <div></div>
                          <span class="tour-price" data-translate="w36">RP&nbsp;272</span>
                          <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 7%</div>
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
                      <li>1-day KL hop-on hop-off bus pass</li>
                      <li>Admission to Aquaria KLCC</li>
                  </ul>
              </div>
          </div>
      </div></div>
        <div class="swiper-slide"><div data-qa-marker="variant-card-available"
          class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
          <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
              <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Weekends & Public Holidays: Non-Malaysian Citizens</h3>
              <div class="descriptors"></div>
              <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                  <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                      <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                          <div class="tour-scratch-price"><span data-translate="w37">RP&nbsp;445</span></div>
                          <div></div>
                          <span class="tour-price" data-translate="w38">RP&nbsp;414</span>
                          <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 7%</div>
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
                      <li>1-day KL hop-on hop-off bus pass</li>
                      <li>Admission to Aquaria KLCC</li>
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
          localStorage.setItem("count3_3", 3)
          localStorage.setItem("Price1", 15)
          localStorage.setItem("Discount1", 17);
          localStorage.setItem("Discount4", 13);
          localStorage.setItem("Discount2", 15);
          localStorage.setItem("Discount5", 18);
          localStorage.setItem("Discount6", 20);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3_3", 3)
          localStorage.setItem("Price1", 24)
          localStorage.setItem("Discount1", 26);
          localStorage.setItem("Discount4", 21);
          localStorage.setItem("Discount2", 24);
          localStorage.setItem("Discount5", 15);
          localStorage.setItem("Discount6", 20);
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
          localStorage.setItem("Price1", 69);
localStorage.setItem("Discount1", 79);
localStorage.setItem("Discount4", 60);
localStorage.setItem("Discount2", 69);
localStorage.setItem("Discount5", 83);
localStorage.setItem("Discount6", 93);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3_3", 3)
          localStorage.setItem("Price1", 111);
localStorage.setItem("Discount1", 121);
localStorage.setItem("Discount4", 97);
localStorage.setItem("Discount2", 111);
localStorage.setItem("Discount5", 69);
localStorage.setItem("Discount6", 93);

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

  
  
  if (localStorage.getItem("tickets_title") == "Tickets to Cruise on Tasik Putrajaya") {
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
                                    <h3 data-translate="couisName" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Sightseeing Cruise</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                              <div class="tour-scratch-price"><span data-translate="p_skidka">MYR&nbsp;4</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p6">MYR&nbsp;2</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 23%</div>
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
                                    <h3 data-translate="couisName1" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Perahu Dondang Sayang Cruise</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="p_skidka">MYR&nbsp;4</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p6">MYR&nbsp;3</span>
                                                <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 23%</div>
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
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 5)
          localStorage.setItem("Discount1", 7)
          localStorage.setItem("Titles1", "Guest");
          localStorage.setItem("discraption1", "Any age");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 5)
          localStorage.setItem("Discount1", 7)
          localStorage.setItem("Titles1", "Guest");
          localStorage.setItem("discraption1", "Children above height 90cm");
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
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 23);
localStorage.setItem("Discount1", 32);

          localStorage.setItem("Titles1", "Guest");
          localStorage.setItem("discraption1", "Any age");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 23);
localStorage.setItem("Discount1", 32);

          localStorage.setItem("Titles1", "Guest");
          localStorage.setItem("discraption1", "Children above height 90cm");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo: SplashMania + Paya Indah Discovery Wetlands + Discovery Park at Gamuda Cove Tickets") {
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
            <h3 data-translate="home_title_350" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">SplashMania + Goosebumps Rope Course Tickets</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price"><span data-translate="jallod_11_skidka">MYR&nbsp;200</span></div>
                        <div></div>
                        <span class="tour-price" data-translate="jallod_11">MYR&nbsp;170</span>
                        <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_5">Save up to 15%</div>
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
                    <li data-translate="ticket_752">Entry to SplashMania</li>
                    <li data-translate="ticket_753">Entry to Discovery Park</li>
                    <li data-translate="ticket_755">Goosebumps rope course</li>
                </ul>
            </div>
        </div>
    </div></div>
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="home_title_351">SplashMania + Goosebumps Rope Course + Cove Aerobar Tickets</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price"><span data-translate="jallod_12_skidka">MYR&nbsp;220</span></div>
                        <div></div>
                        <span class="tour-price" data-translate="jallod_12">MYR&nbsp;190</span>
                        <div data-translate="ticket_658" class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 14%</div>
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
                    <li data-translate="ticket_752">Entry to SplashMania</li>
                    <li data-translate="ticket_753">Entry to Discovery Park</li>
                    <li data-translate="ticket_755">Goosebumps rope course</li>
                    <li data-translate="ticket_754">10-minute Cove Aerobar ride</li>
                </ul>
            </div>
        </div>
    </div></div>
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 data-translate="home_title_352" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Safari Tour + SplashMania + Goosebumps Rope Course + Cove Aerobar Tickets</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div class="tour-scratch-price"><span data-translate="jallod_13_skidka">MYR&nbsp;270</span></div>
                        <div></div>
                        <span class="tour-price" data-translate="jallod_13">MYR&nbsp;230</span>
                        <div data-translate="Disticket_5" class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 15%</div>
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
                    <li data-translate="ticket_752">Entry to SplashMania</li>
                    <li data-translate="ticket_758">40-min safari tour at Paya Indah Discovery Wetlands</li>
                    <li data-translate="ticket_757">Expert ranger</li>
                    <li data-translate="ticket_756">Boat cruise</li>
                    <li data-translate="ticket_753">Entry to Discovery Park</li>
                    <li data-translate="ticket_755">Goosebumps rope course</li>
                    <li data-translate="ticket_754">10-minute Cove Aerobar ride</li>
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
          localStorage.setItem("Discount1", 42);
          localStorage.setItem("Discount4", 23);
          localStorage.setItem("Discount2", 27);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 40)
          localStorage.setItem("Discount1", 46);
          localStorage.setItem("Discount4", 27);
          localStorage.setItem("Discount2", 31);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 49)
          localStorage.setItem("Discount1", 57);
          localStorage.setItem("Discount4", 36);
          localStorage.setItem("Discount2", 42);
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
          localStorage.setItem("Price1", 167);
localStorage.setItem("Discount1", 195);
localStorage.setItem("Discount4", 107);
localStorage.setItem("Discount2", 125);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 186);
localStorage.setItem("Discount1", 214);
localStorage.setItem("Discount4", 125);
localStorage.setItem("Discount2", 144);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 228);
localStorage.setItem("Discount1", 265);
localStorage.setItem("Discount4", 167);
localStorage.setItem("Discount2", 195);

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
  
  if (localStorage.getItem("tickets_title") == "Breakout Escape Game Adventure Tickets") {
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
                                    <h3 style="min-height: auto;" color="#444444" data-translate="home_title_347" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Breakout The Shore Melaka</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="waterworls">MYR&nbsp;50</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" data-translate="select_title" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                    <div style="min-height: auto;" class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                        <ul>
                                            <li data-translate="ticket_752">Entry to SplashMania</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
                            
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 style="min-height: auto;"  data-translate="home_title_348"color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Breakout Avenue K</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="waterworls">MYR&nbsp;50</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                    <div style="min-height: auto;" class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                        <ul>
                                            <li data-translate="ticket_752">Entry to Breakout Avenue K</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
  
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 data-translate="home_title_349" style="min-height: auto;" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Breakout Nu Sentral</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="waterworls">MYR&nbsp;50</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button data-translate="select_title" id="iYmuLF3" onclick="StyledButton(2)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                    <div style="min-height: auto;" class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                        <ul>
                                            <li data-translate="ticket_752">Entry to Breakout Nu Sentral</li>
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
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 12 to 99yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 10)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 12 to 99yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 10)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 12 to 99yrs")
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
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 46)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 12 to 99yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 46)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 12 to 99yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 46)
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "Above 12 to 99yrs")
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Bukit Merah Laketown Waterpark") {
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
                                    <h3 style="min-height: auto;" data-translate="home_title_347" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Waterpark Admission</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="p63">MYR&nbsp;27</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" data-translate="select_title" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                    <div style="min-height: auto;" class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                        <ul>
                                            <li data-translate="ticket_750">Waterpark entry ticket</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
                            
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 style="min-height: auto;" color="#444444" data-translate="home_title_348" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Waterpark Admission + Petting Zoo</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="p64">MYR&nbsp;32</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF2" data-translate="select_title" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                    <div style="min-height: auto;" class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                        <ul>
                                            <li data-translate="ticket_750">Waterpark entry ticket</li>
                                            <li data-translate="ticket_751">Petting Zoo entry ticket </li>
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
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 5)
          localStorage.setItem("Discount4", 4);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 6)
          localStorage.setItem("Discount4", 5);
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
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 23)
          localStorage.setItem("Discount4", 18);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 27)
          localStorage.setItem("Discount4", 23);
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
  
  if (localStorage.getItem("tickets_title") == "Tickets to Bukit Merah Orang Utan Island Foundation") {
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
                                    <h3 style="min-height: auto;" color="#444444" data-translate="home_title_345" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Entry for Malaysian Citizens</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="p65">MYR&nbsp;27</span>
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
                                    <h3 style="min-height: auto;" color="#444444" data-translate="home_title_346" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Entry for Non Malaysian Citizens</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="p66">MYR&nbsp;41</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button data-translate="select_title" id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 5)
          localStorage.setItem("Discount4", 3);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 8)
          localStorage.setItem("Discount4", 5);
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
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 23);
localStorage.setItem("Discount4", 13);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_3", 2)
          localStorage.setItem("Price1", 37);
localStorage.setItem("Discount4", 23);

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
  
  if (localStorage.getItem("tickets_title") == "Adventure Waterpark Desaru Coast Ticket in Johor") {
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
                                    <h3 style="min-height: auto;" color="#444444" data-translate="home_title_343" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Full Day Pass: Malaysian Citizen</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="p67">MYR&nbsp;90</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p68">MYR&nbsp;73</span>
                                                <div data-translate="ticket_653" class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 19%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" data-translate="select_title" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                    <div style="min-height: auto;" class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                        <ul>
                                            <li data-translate="ticket_746">1-day entry ticket to Desaru Coast Adventure Waterpark</li>
                                            <li data-translate="ticket_747">Use of shower & other facilities</li>
                                            <li data-translate="ticket_748">Unlimited access to rides</li>
                                            <li data-translate="ticket_749">Life jacket</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
                            
                              <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 style="min-height: auto;"data-translate="home_title_344" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Waterpark Admission + Petting Zoo</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="p69">MYR&nbsp;140</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p70">MYR&nbsp;115</span>
                                                <div data-translate="Disticket_12" class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 18%</div>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button  data-translate="select_title"id="iYmuLF2" onclick="StyledButton(1)"class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                        </div>
                                    </div>
                                    <div style="min-height: auto;" class="reactMarkdownRenderer__Content-sc-1yc2r3n-0 crpWQA">
                                        <ul>
                                            <li data-translate="ticket_746">1-day entry ticket to Desaru Coast Adventure Waterpark</li>
                                            <li data-translate="ticket_747">Use of shower & other facilities</li>
                                            <li data-translate="ticket_748">Unlimited access to rides</li>
                                            <li data-translate="ticket_749">Life jacket</li>
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
          localStorage.setItem("Price1", 15)
          localStorage.setItem("Discount1", 19);
          localStorage.setItem("Discount4", 13);
          localStorage.setItem("Discount2", 14);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 25)
          localStorage.setItem("Discount1", 29);
          localStorage.setItem("Discount4", 22);
          localStorage.setItem("Discount2", 25);
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
          localStorage.setItem("Price1", 69);
localStorage.setItem("Discount1", 88);
localStorage.setItem("Discount4", 60);
localStorage.setItem("Discount2", 65);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 116);
localStorage.setItem("Discount1", 135);
localStorage.setItem("Discount4", 102);
localStorage.setItem("Discount2", 116);

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
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 28%) : LEGOLAND® Malaysia Theme Park + Adventure Waterpark Desaru Coast Tickets") {
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
                                    <h3 style="min-height: auto;" data-translate="home_title_308" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Malaysian</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p998">MYR&nbsp;245</span>
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
                                    <h3 style="min-height: auto;" color="#444444" data-translate="home_title_309" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Non-Malaysian</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p999">MYR&nbsp;283</span>
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
          localStorage.setItem("Price1", 53)
          localStorage.setItem("Discount1", 72);
          localStorage.setItem("Discount4", 42);
          localStorage.setItem("Discount2", 58);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 60)
          localStorage.setItem("Discount1", 83);
          localStorage.setItem("Discount4", 52);
          localStorage.setItem("Discount2", 40);
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
          localStorage.setItem("Price1", 246);
localStorage.setItem("Discount1", 335);
localStorage.setItem("Discount4", 195);
localStorage.setItem("Discount2", 270);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 279);
localStorage.setItem("Discount1", 386);
localStorage.setItem("Discount4", 242);
localStorage.setItem("Discount2", 186);

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


  if (localStorage.getItem("tickets_title") == "SEA LIFE 1-Day Pass in LEGOLAND® Malaysia") {
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
localStorage.setItem("Discount4", 260);
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
  
  if (localStorage.getItem("tickets_title") == "Private Transfer: Senai Airport (JHB) to/from LEGOLAND") {
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
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Senai Airport to LEGOLAND Malaysia</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                             <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p84">RP&nbsp;213</span>
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
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">LEGOLAND Malaysia to Senai Airport</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p85">RP&nbsp;410</span>
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
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 44);
          localStorage.setItem("Titles1", "Guest");
          localStorage.setItem("discraption1", "Toyota Innova (7 seater)");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 44);
          localStorage.setItem("Titles1", "Guest");
          localStorage.setItem("discraption1", "Toyota Innova (7 seater)");
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
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 204);

          localStorage.setItem("Titles1", "Guest");
          localStorage.setItem("discraption1", "Toyota Innova (7 seater)");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 204);

          localStorage.setItem("Titles1", "Guest");
          localStorage.setItem("discraption1", "Toyota Innova (7 seater)");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Berjaya Times Square Theme Park") {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">Access to Waterless Aquarium</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p1001">MYR&nbsp;34</span>
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
                    <li data-translate="">Valid for Malaysian and Non-Malaysian citizens</li>
                </ul>
            </div>
        </div>
    </div></div>
      <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="opoqisini1">Full Day Pass: Non-Malaysian Citizen</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                    <div class="tour-scratch-price"><span data-translate="p1002">MYR&nbsp;38</span></div>
                        <div></div>
                        <span class="tour-price" data-translate="p1003">MYR&nbsp;38</span>
                        <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_4">Save up to 5%</div>
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
                    <li data-translate="access_too2">Access to Zombie Outbreak</li>
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
          localStorage.setItem("count1_3", 3);
          localStorage.setItem("Price1", 2);
          localStorage.setItem("Discount4", 2);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 15);
          localStorage.setItem("Discount1", 16);
          localStorage.setItem("Discount4", 13);
          localStorage.setItem("Discount2", 14);
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
          localStorage.setItem("count1_3", 3);
          localStorage.setItem("Price1", 9);
          localStorage.setItem("Discount4", 9);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 69);
localStorage.setItem("Discount1", 74);
localStorage.setItem("Discount4", 60);
localStorage.setItem("Discount2", 65);

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
  
  if (localStorage.getItem("tickets_title") == "Zoo Melaka Tickets") {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">Entry Ticket: Malaysian Citizen</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p10011">MYR&nbsp;34</span>
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">Entry Ticket: Non-Malaysian Citizen</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p10033">MYR&nbsp;38</span>
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
        if (key == 0) {
          localStorage.setItem("count2_3", 2);
          localStorage.setItem("Price1", 9);
          localStorage.setItem("Discount4", 7);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 20)
          localStorage.setItem("Discount4", 14);
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
          localStorage.setItem("count2_3", 2);
          localStorage.setItem("Price1", 41);
localStorage.setItem("Discount4", 32);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 93);
localStorage.setItem("Discount4", 65);

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

  if (localStorage.getItem("tickets_title") == "Zoo Negara & Panda Conservation Centre Tickets") {
    function checkMediaQuery() {
      if (window.innerWidth <= 2000) {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">General Admission: Malaysian Citizens</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="gg11">RP129,905</span>
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">General Admission: Malaysian Citizens</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="gg12">RP129,905</span>
                    </div>
                </div>
                <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                    <button id="iYmuLF2" onclick="StyledButton(1)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                </div>
            </div>
        </div>
    </div></div>      
    <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">General Admission: Malaysian Citizens</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="gg13">RP129,905</span>
                    </div>
                </div>
                <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                    <button id="iYmuLF3" onclick="StyledButton(2)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                </div>
            </div>
        </div>
    </div></div>      
    <div class="swiper-slide"><div data-qa-marker="variant-card-available"
        class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
        <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">General Admission: Malaysian Citizens</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="gg14">RP129,905</span>
                    </div>
                </div>
                <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                    <button id="iYmuLF4" onclick="StyledButton(3)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
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
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 8);
          localStorage.setItem("Discount1", 9);
          localStorage.setItem("Discount4", 4);
          localStorage.setItem("Discount2", 5);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 16);
          localStorage.setItem("Discount1", 18);
          localStorage.setItem("Discount4", 8);
          localStorage.setItem("Discount2", 9);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 20)
          localStorage.setItem("Titles1", "Family (2 adults + 2 children)")
          localStorage.setItem("discraption1", "3 to 59 yrs")
          localStorage.setItem("Discount1", 23)
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 3) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 23)
          localStorage.setItem("Titles1", "Family (2 adults + 2 children)")
          localStorage.setItem("discraption1", "3 to 59 yrs")
          localStorage.setItem("Discount1", 27)
          document.querySelector("#iYmuLF4").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
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
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 37);
          localStorage.setItem("Discount1", 41);
          localStorage.setItem("Discount4", 18);
          localStorage.setItem("Discount2", 23);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 74);
          localStorage.setItem("Discount1", 83);
          localStorage.setItem("Discount4", 37);
          localStorage.setItem("Discount2", 41);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 93)
          localStorage.setItem("Titles1", "Family (2 adults + 2 children)")
          localStorage.setItem("discraption1", "3 to 59 yrs")
          localStorage.setItem("Discount1", 107)
          document.querySelector("#iYmuLF3").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF4").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 3) {
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 107)
          localStorage.setItem("Titles1", "Family (2 adults + 2 children)")
          localStorage.setItem("discraption1", "3 to 59 yrs")
          localStorage.setItem("Discount1", 125)
          document.querySelector("#iYmuLF4").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }

  if (localStorage.getItem("tickets_title") == "Combo (Save 18%) : Sunway Lagoon Theme Park Tickets + Zoo Negara Tickets") {
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">Sunway Lagoon + Zoo Negara Tickets: Malaysian Citizens</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p10012">RP&nbsp;600.817</span>
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
            <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">Sunway Lagoon + Zoo Negara: Non-Malaysian Citizens</h3>
            <div class="descriptors"></div>
            <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                    <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                        <div></div>
                        <span class="tour-price" data-translate="p10013">RP&nbsp;820.620</span>
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
        window.location.href="#selectScreen"
        if (key == 0) {
          localStorage.setItem("count2_3", 2);
          localStorage.setItem("Price1", 37);
          localStorage.setItem("Discount4", 28);
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 50)
          localStorage.setItem("Discount4", 45);
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    } else {
      function StyledButton(key) {
        select_clear()
        window.location.href="#selectScreen"
        if (key == 0) {
          localStorage.setItem("count2_3", 2);
          localStorage.setItem("Price1", 172);
localStorage.setItem("Discount4", 130);

          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 233);
localStorage.setItem("Discount4", 209);

          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Tiket Jump Street Asia di Kuala Lumpur") {
    document.querySelector("#selectScreen").style = "display:grid;"
    document.querySelector("#tourSelectionBar").style = "display:block;"
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 9);
        localStorage.setItem("Titles1", "Guest");
        localStorage.setItem("discraption1", "Above 3yrs");
      } else {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 41);
        localStorage.setItem("Titles1", "Guest");
        localStorage.setItem("discraption1", "Above 3yrs");
      }
    };
  }
  
  if (localStorage.getItem("tickets_title") == "Combo : Water World @ i-City Shah Alam + Room With Breakfast") {
    document.querySelector("#selectScreen").style = "display:grid;";
    document.querySelector("#tourSelectionBar").style = "display:block;";
  
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 46);
        localStorage.setItem("Titles1", "Guest")
        localStorage.setItem("discraption1", "Any age")
      } else {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 214);
        localStorage.setItem("Titles1", "Guest")
        localStorage.setItem("discraption1", "Any age")
  
      }
    }
  }

  if (localStorage.getItem("tickets_title") == "Splash Out Langkawi Water Theme") {
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
                                    <h3 data-translate="home_title_356" color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Splash Out Langkawi Water Theme Park: Malaysian Citizen</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div class="tour-scratch-price"><span data-translate="p59">MYR&nbsp;50</span></div>
                                                <div></div>
                                                <span class="tour-price" data-translate="p60">MYR&nbsp;25</span>
                                                <div data-translate="Disticket_15" class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo">Save up to 50%</div>
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
                                            <li data-translate="ticket_769">Voyager Annual Pass</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div>   
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">Splash Out Langkawi Water Theme Park: Non-Malaysian Citizen</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="p61">MYR&nbsp;99</span>
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
                                            <li data-translate="ticket_770">Entry to Splash Out Langkawi</li>
                                        </ul>
                                    </div>
                                </div>
                            </div></div> 
                            <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block" data-translate="">Voyager Annual Pass</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                <div></div>
                                                <span class="tour-price" data-translate="p62">MYR&nbsp;80</span>
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
                                            <li data-translate="ticket_770">Entry to Splash Out Langkawi</li>
                                            <li data-translate="ticket_771">Special discounts on F&B, hotel rooms, retail merchandise, and gazebos</li>
                                            <li data-translate="ticket_772">Valid for 180 days</li>
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
          localStorage.setItem("Price1", 5)
          localStorage.setItem("Discount1", 10);
          localStorage.setItem("Discount4", 4);
          localStorage.setItem("Discount2", 7);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 5)
          localStorage.setItem("Discount1", 16);
          localStorage.setItem("Discount4", 4);
          localStorage.setItem("Discount2", 11);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 21)
          localStorage.setItem("Discount4", 21);
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
          localStorage.setItem("Price1", 23);
localStorage.setItem("Discount1", 46);
localStorage.setItem("Discount4", 18);
localStorage.setItem("Discount2", 32);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count3", 3)
          localStorage.setItem("Price1", 23);
localStorage.setItem("Discount1", 74);
localStorage.setItem("Discount4", 18);
localStorage.setItem("Discount2", 51);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF3").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 2) {
          localStorage.setItem("count1_3", 3)
          localStorage.setItem("Price1", 97);
localStorage.setItem("Discount4", 97);

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
  
  if (localStorage.getItem("tickets_title") == "Tickets to I-City Theme Park") {
    document.querySelector("#selectScreen").style = "display:grid;";
    document.querySelector("#tourSelectionBar").style = "display:block;";
  
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 13)
        localStorage.setItem("Discount1", 16);
        localStorage.setItem("Discount4", 9);
        localStorage.setItem("Discount2", 11);
        localStorage.setItem("Discount5", 7);
        localStorage.setItem("Discount3", 9);
        localStorage.setItem("Discount7", 9);
        localStorage.setItem("Discount6", 12);
        localStorage.setItem("Titles1", "Non-Malaysian Adult")
        localStorage.setItem("Titles2", "Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "12 to 59 yrs")
        localStorage.setItem("discraption2", "12 to 59 yrs")
        localStorage.setItem("discraption3", "Under 12 yrs")
        localStorage.setItem("discraption4", "Under 12 yrs")
      } else {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 60);
localStorage.setItem("Discount1", 74);
localStorage.setItem("Discount4", 41);
localStorage.setItem("Discount2", 51);
localStorage.setItem("Discount5", 32);
localStorage.setItem("Discount3", 41);
localStorage.setItem("Discount7", 41);
localStorage.setItem("Discount6", 55);

        localStorage.setItem("Titles1", "Non-Malaysian Adult")
        localStorage.setItem("Titles2", "Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "12 to 59 yrs")
        localStorage.setItem("discraption2", "12 to 59 yrs")
        localStorage.setItem("discraption3", "Under 12 yrs")
        localStorage.setItem("discraption4", "Under 12 yrs")
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo : Water World @ i-City Shah Alam") {
    document.querySelector("#selectScreen").style = "display:grid;";
    document.querySelector("#tourSelectionBar").style = "display:block;";
  
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 46)
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "Above 3 yrs")
      } else {
        localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 214)
          localStorage.setItem("Titles1", "Guest")
          localStorage.setItem("discraption1", "Above 3 yrs")
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "99 Wonderland Park Entry Tickets") {
    document.querySelector("#selectScreen").style = "display:grid;"
    document.querySelector("#tourSelectionBar").style = "display:block;"
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 8)
        localStorage.setItem("Discount1", 11);
        localStorage.setItem("Discount4", 12);
        localStorage.setItem("Discount2", 16);
        localStorage.setItem("Discount5", 5);
        localStorage.setItem("Discount3", 8);
        localStorage.setItem("Discount7", 8);
        localStorage.setItem("Discount6", 12);
        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "12 to 59")
        localStorage.setItem("discraption2", "12 to 59")
        localStorage.setItem("discraption3", "Children aged 5-11 and taller than 90cm")
        localStorage.setItem("discraption4", "Children aged 5-11 and taller than 90cm")
      } else {
        localStorage.setItem("count4", 4)
        localStorage.setItem("Price1", 37);
localStorage.setItem("Discount1", 51);
localStorage.setItem("Discount4", 55);
localStorage.setItem("Discount2", 74);
localStorage.setItem("Discount5", 23);
localStorage.setItem("Discount3", 37);
localStorage.setItem("Discount7", 37);
localStorage.setItem("Discount6", 55);

        localStorage.setItem("Titles1", "Malaysian Adult")
        localStorage.setItem("Titles2", "Non-Malaysian Adult")
        localStorage.setItem("Titles3", "Malaysian Child")
        localStorage.setItem("Titles4", "Non-Malaysian Child")
        localStorage.setItem("discraption1", "12 to 59")
        localStorage.setItem("discraption2", "12 to 59")
        localStorage.setItem("discraption3", "Children aged 5-11 and taller than 90cm")
        localStorage.setItem("discraption4", "Children aged 5-11 and taller than 90cm")
  
      }
    }
  
  }
  








































  
  if (localStorage.getItem("tickets_title") == "Combo (Save 15%): Zoo Melaka + A Famosa Melaka Water Park or Safari Wonderland Tickets") {
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
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Safari Wonderland + Zoo Melaka</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                               <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="aquaria_tickets_2000">RP&nbsp;200</span>
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
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">A'Famosa Melaka Water Park + Zoo Melaka</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price">from</div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="aquaria_tickets_2001">RP&nbsp;410</span>
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
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 20)
          localStorage.setItem("Discount1", 23);
          localStorage.setItem("Discount4", 19);
          localStorage.setItem("Discount2", 22);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 22)
          localStorage.setItem("Discount1", 25);
          localStorage.setItem("Discount4", 19);
          localStorage.setItem("Discount2", 22);
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
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 93);
localStorage.setItem("Discount1", 107);
localStorage.setItem("Discount4", 88);
localStorage.setItem("Discount2", 102);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count2_2", 2)
          localStorage.setItem("Price1", 102);
localStorage.setItem("Discount1", 116);
localStorage.setItem("Discount4", 88);
localStorage.setItem("Discount2", 102);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Tickets to The Top Rainbow Skywalk and Observatory Deck") {
    document.querySelector("#selectScreen").style = "display:grid;"
    document.querySelector("#tourSelectionBar").style = "display:block;"
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 15);
        localStorage.setItem("Discount1", 16);
        localStorage.setItem("Discount4", 11);
        localStorage.setItem("Discount2", 12);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 69);
        localStorage.setItem("Discount1", 74);
        localStorage.setItem("Discount4", 51);
        localStorage.setItem("Discount2", 55);        
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      }
    }
  
  }

  if (localStorage.getItem("tickets_title") == "Escape Theme Park Penang Tickets") {
    document.querySelector("#selectScreen").style = "display:grid;"
    document.querySelector("#tourSelectionBar").style = "display:block;"
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 38);
        localStorage.setItem("Discount1", 40);
        localStorage.setItem("Discount4", 25);
        localStorage.setItem("Discount2", 26);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count2_2", 2);
        localStorage.setItem("Price1", 177);
        localStorage.setItem("Discount1", 186);
        localStorage.setItem("Discount4", 116);
        localStorage.setItem("Discount2", 121);        
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
      }
    }
  
  }

  if (localStorage.getItem("tickets_title") == "Combo: Genting Awana SkyWay (One-way) + Skytropolis Indoor Theme Park Tickets") {
    document.querySelector("#selectScreen").style = "display:grid;"
    document.querySelector("#tourSelectionBar").style = "display:block;"
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 16);
        localStorage.setItem("Titles1", "Guest")
        localStorage.setItem("discraption1", "Children under height 90cm is free of charge of admission.")
      } else {
        localStorage.setItem("count1_1", 1);
        localStorage.setItem("Price1", 74);
        localStorage.setItem("Titles1", "Guest")
        localStorage.setItem("discraption1", "Children under height 90cm is free of charge of admission.")
      }
    };
  }
  
  if (localStorage.getItem("tickets_title") == "Combo: Genting Awana SkyWay (One-way) + Skyworld Outdoor Theme Park Tickets") {
    document.querySelector("#selectScreen").style = "display:grid;"
    document.querySelector("#tourSelectionBar").style = "display:block;"
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 31);
        localStorage.setItem("Discount1", 49);
        localStorage.setItem("Discount4", 24);
        localStorage.setItem("Discount2", 43);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 144);
        localStorage.setItem("Discount1", 228);
        localStorage.setItem("Discount4", 111);
        localStorage.setItem("Discount2", 200);        
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      }
    };
  }
  
  if (localStorage.getItem("tickets_title") == "Lalaport Jungle Gym Tickets") {
    document.querySelector("#selectScreen").style = "display:grid;"
    document.querySelector("#tourSelectionBar").style = "display:block;"
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 14);
        localStorage.setItem("Discount4", 7);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 65);
        localStorage.setItem("Discount4", 32);        
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title3", "Child");
      }
    };
  }
  
  if (localStorage.getItem("tickets_title") == "Wet World Water Park Shah Alam") {
    document.querySelector("#selectScreen").style = "display:grid;"
    document.querySelector("#tourSelectionBar").style = "display:block;"
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count1_1", 1)
        localStorage.setItem("Price1", 7)
        localStorage.setItem("Titles1", "Adult");
        localStorage.setItem("discraption1", "Height of 131cm and above");
      } else {
        localStorage.setItem("count1_1", 1)
        localStorage.setItem("Price1", 32);
        localStorage.setItem("Titles1", "Adult");
        localStorage.setItem("discraption1", "Height of 131cm and above");
        localStorage.setItem("discraption1", "Children under height 90cm is free of charge of admission.")
      }
    };
  }
  
  if (localStorage.getItem("tickets_title") == "Tickets to Genting Skytropolis Indoor Theme Park") {
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
                                    <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Skytropolis : One-Day Unlimited Ride Pass</h3>
                                    <div class="descriptors"></div>
                                    <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                        <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                            <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                             <div class="tour-scratch-price">from</div>
                                                <div></div>
                                                <span class="tour-price" data-translate="bookskytropolis_2000">RP&nbsp;200</span>
                                            </div>
                                        </div>
                                        <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                            <button id="iYmuLF1" onclick="StyledButton(0)" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
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
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 13)
          localStorage.setItem("Titles1", "Guest");
          localStorage.setItem("discraption1", "Any age");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
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
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 60);
          localStorage.setItem("Titles1", "Guest");
          localStorage.setItem("discraption1", "Any age");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }




  
  if (localStorage.getItem("tickets_title") == "Combo : Genting SkyWorlds Theme Park + Skytropolis Indoor Theme Park Tickets") {
    document.querySelector("#selectScreen").style = "display:grid;"
    document.querySelector("#tourSelectionBar").style = "display:block;"
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 47);
        localStorage.setItem("Discount1", 63);
        localStorage.setItem("Discount4", 41);
        localStorage.setItem("Discount2", 57);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count3", 3);
        localStorage.setItem("Price1", 218);
        localStorage.setItem("Discount1", 293);
        localStorage.setItem("Discount4", 191);
        localStorage.setItem("Discount2", 265);    
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      }
    };
  }
  
  if (localStorage.getItem("tickets_title") == "Putrajaya Tour with Traditional Boat Cruise") {
    document.querySelector("#selectScreen").style = "display:grid;"
    document.querySelector("#tourSelectionBar").style = "display:block;"
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count2_3", 2)
        localStorage.setItem("Price1", 39)
        localStorage.setItem("Discount4", 27)
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count2_3", 2)
        localStorage.setItem("Price1", 174);
        localStorage.setItem("Discount4", 118)         
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      }
    };
  }
  
  if (localStorage.getItem("tickets_title") == "Wetland Studios Putrajaya Tickets") {
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
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Full Day Pass: Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div></div>
                                                  <span class="tour-price" data-translate="p7">RP&nbsp;124</span>
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
                                              <li data-translate="booklost_world_1">Admission ticket to Crocodile Adventureland Langkawi</li>
                                              <li data-translate="booklost_world_2">Access to all facilities, activities and entertainment shows</li>
                                              <li data-translate="booklost_world_3">Two packets of juvenile crocodile food</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block ">Full Day Pass: Non-Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div></div>
                                                  <span class="tour-price" data-translate="p8">RP&nbsp;151</span>
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
                                              <li data-translate="booklost_world_4">Juvenile feeding</li>
                                              <li data-translate="booklost_world_2">Guided shared park tour</li>
                                              <li data-translate="booklost_world_3">Crocodile fishing</li>
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
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 5);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "12 to 99 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 8);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "12 to 99 yrs")
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
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 22);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "12 to 99 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 35);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "12 to 99 yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Lost World of Tambun Amusement & Water Park Tickets") {
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
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Full Day Pass: Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price"><span data-translate="booklostworlds_1_skidkas">RP&nbsp;8,49</span></div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="booklostworlds_1">RP&nbsp;124</span>
                                                  <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_33">Save up to 33%</div>
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
                                              <li data-translate="booklost_world_1">Admission ticket to Crocodile Adventureland Langkawi</li>
                                              <li data-translate="booklost_world_2">Access to all facilities, activities and entertainment shows</li>
                                              <li data-translate="booklost_world_3">Two packets of juvenile crocodile food</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block ">Full Day Pass: Non-Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price"><span data-translate="booklostworlds_2_skidkas">RP&nbsp;189</span></div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="booklostworlds_2">RP&nbsp;151</span>
                                                  <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_190">Save up to 19%</div>
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
                                              <li data-translate="booklost_world_4">Juvenile feeding</li>
                                              <li data-translate="booklost_world_2">Guided shared park tour</li>
                                              <li data-translate="booklost_world_3">Crocodile fishing</li>
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
          localStorage.setItem("Price1", 19);
          localStorage.setItem("Discount1", 28);
          localStorage.setItem("Discount4", 17);
          localStorage.setItem("Discount2", 27);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 24);
          localStorage.setItem("Discount1", 28);
          localStorage.setItem("Discount4", 23);
          localStorage.setItem("Discount2", 27);
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
          localStorage.setItem("Price1", 88);
          localStorage.setItem("Discount1", 130);
          localStorage.setItem("Discount4", 79);
          localStorage.setItem("Discount2", 125);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 111);
          localStorage.setItem("Discount1", 130);
          localStorage.setItem("Discount4", 107);
          localStorage.setItem("Discount2", 125);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Tickets to Lost World Hot Springs Night Park") {
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
                                                  <div class="tour-scratch-price"><span data-translate="booklostworlds_3">RP&nbsp;8,49</span></div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="booklostworlds_3_skidkas">RP&nbsp;124</span>
                                                  <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_2">Save up to 33%</div>
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
                                              <li data-translate="">Access to the Lost World Hot Springs & Night Park</li>
                                              <li data-translate="">Admission to the Petting Zoo</li>
                                              <li data-translate="">Entry to the Luminous Forest</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block ">Non-Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price"><span data-translate="booklostworlds_4">RP&nbsp;189</span></div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="booklostworlds_4_skidkas">RP&nbsp;151</span>
                                                  <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_190">Save up to 19%</div>
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
                                              <li data-translate="">Access to the Lost World Hot Springs & Night Park</li>
                                              <li data-translate="">Admission to the Petting Zoo</li>
                                              <li data-translate="">Entry to the Luminous Forest</li>
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
          localStorage.setItem("Price1", 15);
          localStorage.setItem("Discount1", 20);
          localStorage.setItem("Discount4", 12);
          localStorage.setItem("Discount2", 18);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 17);
          localStorage.setItem("Discount1", 20);
          localStorage.setItem("Discount4", 15);
          localStorage.setItem("Discount2", 18);
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
          localStorage.setItem("Price1", 69);
          localStorage.setItem("Discount1", 93);
          localStorage.setItem("Discount4", 55);
          localStorage.setItem("Discount2", 83);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 79);
          localStorage.setItem("Discount1", 93);
          localStorage.setItem("Discount4", 69);
          localStorage.setItem("Discount2", 83);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }

  
  if (localStorage.getItem("tickets_title") == "Mari Mari Cultural Village Half-Day Tour") {
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
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Entry Ticket</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price"><span data-translate="booklostworlds_5_skidkas">RP&nbsp;8,49</span></div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="booklostworlds_5">RP&nbsp;124</span>
                                                  <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="ticket_658">Save up to 33%</div>
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
                                              <li data-translate="">Entry to Mari Mari Cultural Village</li>
                                              <li data-translate="">English-speaking guide</li>
                                              <li data-translate="">Visit to 5 ethnic traditional houses</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Entry Ticket + Meal</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  <div class="tour-scratch-price"><span data-translate="booklostworlds_6_skidkas">RP&nbsp;189</span></div>
                                                  <div></div>
                                                  <span class="tour-price" data-translate="booklostworlds_6">RP&nbsp;151</span>
                                                  <div class="priceBlock__SavedTag-sc-1yosuva-1 gFUuAo" data-translate="Disticket_12">Save up to 19%</div>
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
                                              <li data-translate="">Entry to Mari Mari Cultural Village</li>
                                              <li data-translate="">Meal (lunch/high tea)</li>
                                              <li data-translate="">English-speaking guide</li>
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
          localStorage.setItem("count4", 4)
          localStorage.setItem("Price1", 20)
          localStorage.setItem("Discount1", 23);
          localStorage.setItem("Discount4", 24);
          localStorage.setItem("Discount2", 27);
          localStorage.setItem("Discount5", 18);
          localStorage.setItem("Discount3", 21);
          localStorage.setItem("Discount7", 20);
          localStorage.setItem("Discount6", 23);
          localStorage.setItem("Titles1", "Malaysian Adult")
          localStorage.setItem("Titles2", "Non-Malaysian Adult")
          localStorage.setItem("Titles3", "Malaysian Child")
          localStorage.setItem("Titles4", "Non-Malaysian Child")
          localStorage.setItem("discraption1", "Above 12yrs")
          localStorage.setItem("discraption2", "Above 12yrs")
          localStorage.setItem("discraption3", "5 to 11yrs")
          localStorage.setItem("discraption4", "5 to 11yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count4", 4)
          localStorage.setItem("Price1", 24)
          localStorage.setItem("Discount1", 30);
          localStorage.setItem("Discount4", 27);
          localStorage.setItem("Discount2", 34);
          localStorage.setItem("Discount5", 21);
          localStorage.setItem("Discount3", 25);
          localStorage.setItem("Discount7", 23);
          localStorage.setItem("Discount6", 27);
          localStorage.setItem("Titles1", "Malaysian Adult")
          localStorage.setItem("Titles2", "Non-Malaysian Adult")
          localStorage.setItem("Titles3", "Malaysian Child")
          localStorage.setItem("Titles4", "Non-Malaysian Child")
          localStorage.setItem("discraption1", "Above 12yrs")
          localStorage.setItem("discraption2", "Above 12yrs")
          localStorage.setItem("discraption3", "5 to 11yrs")
          localStorage.setItem("discraption4", "5 to 11yrs")
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
          localStorage.setItem("count4", 4)
          localStorage.setItem("Price1", 93);
          localStorage.setItem("Discount1", 107);
          localStorage.setItem("Discount4", 111);
          localStorage.setItem("Discount2", 125);
          localStorage.setItem("Discount5", 83);
          localStorage.setItem("Discount3", 97);
          localStorage.setItem("Discount7", 93);
          localStorage.setItem("Discount6", 107);          
          localStorage.setItem("Titles1", "Malaysian Adult")
          localStorage.setItem("Titles2", "Non-Malaysian Adult")
          localStorage.setItem("Titles3", "Malaysian Child")
          localStorage.setItem("Titles4", "Non-Malaysian Child")
          localStorage.setItem("discraption1", "Above 12yrs")
          localStorage.setItem("discraption2", "Above 12yrs")
          localStorage.setItem("discraption3", "5 to 11yrs")
          localStorage.setItem("discraption4", "5 to 11yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count4", 4)
          localStorage.setItem("Price1", 111);
          localStorage.setItem("Discount1", 139);
          localStorage.setItem("Discount4", 125);
          localStorage.setItem("Discount2", 158);
          localStorage.setItem("Discount5", 97);
          localStorage.setItem("Discount3", 116);
          localStorage.setItem("Discount7", 107);
          localStorage.setItem("Discount6", 125);          
          localStorage.setItem("Titles1", "Malaysian Adult")
          localStorage.setItem("Titles2", "Non-Malaysian Adult")
          localStorage.setItem("Titles3", "Malaysian Child")
          localStorage.setItem("Titles4", "Non-Malaysian Child")
          localStorage.setItem("discraption1", "Above 12yrs")
          localStorage.setItem("discraption2", "Above 12yrs")
          localStorage.setItem("discraption3", "5 to 11yrs")
          localStorage.setItem("discraption4", "5 to 11yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo: Mari Mari Cultural Village + Upside Down House Tickets with Lunch & Transfers") {
    document.querySelector("#selectScreen").style = "display:grid;"
    document.querySelector("#tourSelectionBar").style = "display:block;"
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 47);
        localStorage.setItem("Discount4", 51);
        localStorage.setItem("Discount5", 45);
        localStorage.setItem("Discount7", 48);
        localStorage.setItem("Titles1", "Malaysian Adult");
        localStorage.setItem("Titles2", "Non-Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 12 yrs");
        localStorage.setItem("discraption2", "Above 12 yrs");
        localStorage.setItem("discraption3", "3 to 11 yrs");
        localStorage.setItem("discraption4", "3 to 11 yrs");
      } else {
        localStorage.setItem("count4_1", 4);
        localStorage.setItem("Price1", 219);
localStorage.setItem("Discount4", 237);
localStorage.setItem("Discount5", 209);
localStorage.setItem("Discount7", 223);
       
        localStorage.setItem("Titles1", "Malaysian Adult");
        localStorage.setItem("Titles2", "Non-Malaysian Adult");
        localStorage.setItem("Titles3", "Malaysian Child");
        localStorage.setItem("Titles4", "Non-Malaysian Child");
        localStorage.setItem("discraption1", "Above 12 yrs");
        localStorage.setItem("discraption2", "Above 12 yrs");
        localStorage.setItem("discraption3", "3 to 11 yrs");
        localStorage.setItem("discraption4", "3 to 11 yrs");
      }
    };
  }
  
  if (localStorage.getItem("tickets_title") == "Dining in the Dark in Kuala Lumpur") {
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
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Vegetarian Meal</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  
                                                  <div></div>
                                                  <span class="tour-price" data-translate="atmosphereticket_valyut_1">RP&nbsp;124</span>
                                                
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
                                              <li data-translate="">Sample vegetarian menu</li>
                                              <li data-translate="">Welcome drink</li>
                                              <li data-translate="">Choice of 3 surprise menu</li>
                                              <li data-translate="">Visually-impaired server</li>
                                              <li data-translate="">1hr 30min dining experience</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Non-Vegetarian Meal</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  
                                                  <div></div>
                                                  <span class="tour-price" data-translate="atmosphereticket_valyut_1">RP&nbsp;151</span>
                                                 
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
                                              <li data-translate="">Sample vegetarian menu</li>
                                              <li data-translate="">Welcome drink</li>
                                              <li data-translate="">Choice of 3 surprise menu</li>
                                              <li data-translate="">Visually-impaired server</li>
                                              <li data-translate="">1hr 30min dining experience</li>
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
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 46);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "12 to 99 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 46);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "12 to 99 yrs")
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
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 214);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "12 to 99 yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count1_1", 1);
          localStorage.setItem("Price1", 214);
          localStorage.setItem("Titles1", "Adult")
          localStorage.setItem("discraption1", "12 to 99 yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Guided Bird Watching Tour in Langwaki with Round-Trip Transfers") {
    document.querySelector("#selectScreen").style = "display:grid;";
    document.querySelector("#tourSelectionBar").style = "display:block;";
  
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count2_3", 2)
        localStorage.setItem("Price1", 72)
        localStorage.setItem("Discount4", 63)
      } else {
        localStorage.setItem("count1_3", 3);
        localStorage.setItem("Price1", 335);
        localStorage.setItem("Discount4", 293);        
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Kuala Lumpur Bird Park, Butterfly Park with Orchid and Hibiscus Garden Day Tour") {
    document.querySelector("#selectScreen").style = "display:grid;";
    document.querySelector("#tourSelectionBar").style = "display:block;";
  
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 34);
        localStorage.setItem("Discount4", 24);
      } else {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 158);
        localStorage.setItem("Discount4", 111);        
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 13%):Zoo Melaka + A Famosa Melaka Water Park or Safari Wonderland Tickets") {
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
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Safari Wonderland + Zoo Melaka </h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  
                                                  <div></div>
                                                  <span class="tour-price" data-translate="zoomelakas_2">RP&nbsp;124</span>
                                                
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
                                              <li data-translate="">Entry to Zoo Melaka</li>
                                              <li data-translate="">Access to Dinosaur Encounter, Animal Attractive, & Bird Show</li>
                                              <li data-translate="">1 animal feeding experience at Banteng (Except Petting Zone & Animal Feeding)</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">A'Famosa Melaka Water Park + Zoo Melaka</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  
                                                  <div></div>
                                                  <span class="tour-price" data-translate="zoomelakas_6">RP&nbsp;151</span>
                                                 
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
                                              <li data-translate="">Entry to Zoo Melaka</li>
                                              <li data-translate="">Access to Dinosaur Encounter, Animal Attractive, & Bird Show</li>
                                              <li data-translate="">1 animal feeding experience at Banteng (Except Petting Zone & Animal Feeding)</li>
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
          localStorage.setItem("count2_2", 2);
          localStorage.setItem("Price1", 20);
          localStorage.setItem("Discount1", 23);
          localStorage.setItem("Discount4", 18);
          localStorage.setItem("Discount2", 21);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count2_2", 2);
          localStorage.setItem("Price1", 22);
          localStorage.setItem("Discount1", 25);
          localStorage.setItem("Discount4", 18);
          localStorage.setItem("Discount2", 21);
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
          localStorage.setItem("count2_2", 2);
          localStorage.setItem("Price1", 93);
          localStorage.setItem("Discount1", 107);
          localStorage.setItem("Discount4", 83);
          localStorage.setItem("Discount2", 97);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count2_2", 2);
          localStorage.setItem("Price1", 102);
          localStorage.setItem("Discount1", 117);
          localStorage.setItem("Discount4", 83);
          localStorage.setItem("Discount2", 97);          
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }
  
  if (localStorage.getItem("tickets_title") == "Combo (Save 33%): Dream Forest Langkawi + Langkawi Underwater World Tickets") {
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
                                                <span class="tour-price" data-translate="home_price_1001">RP&nbsp;213</span>
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
                                                <span class="tour-price" data-translate="buy_langkawi_111">RP&nbsp;410</span>
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
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 21)
          localStorage.setItem("Discount1", 31)
          localStorage.setItem("Titles1", "Adult");
          localStorage.setItem("discraption1", "Above 12yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 24)
          localStorage.setItem("Titles1", "Adult");
          localStorage.setItem("discraption1", "Above 12yrs")
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
          localStorage.setItem("count1", 1)
          localStorage.setItem("Price1", 97);
          localStorage.setItem("Discount1", 144);          
          localStorage.setItem("Titles1", "Adult");
          localStorage.setItem("discraption1", "Above 12yrs")
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
        if (key == 1) {
          localStorage.setItem("count1_1", 1)
          localStorage.setItem("Price1", 111);
          localStorage.setItem("Titles1", "Adult");
          localStorage.setItem("discraption1", "Above 12yrs")
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
      }
    }
  }

  if (localStorage.getItem("tickets_title") == "Train Transfers: KL Sentral to/from Kuala Lumpur International Airport by KLIA Ekspres") {
    document.querySelector("#selectScreen").style = "display:grid;";
    document.querySelector("#tourSelectionBar").style = "display:block;";
  
    document.querySelector(".next_pages1").onclick = function () {
      localStorage.setItem("nones","none")
      if (sessionStorage.getItem("selectedValyut") == "USD") {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 11);
        localStorage.setItem("Discount4", 5);
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
      } else {
        localStorage.setItem("count2_3", 2);
        localStorage.setItem("Price1", 51);
  localStorage.setItem("Discount4", 23);
  
        localStorage.setItem("All_Title", "Adult");
        localStorage.setItem("All_Title2", "Senior");
        localStorage.setItem("All_Title3", "Child");
  
      }
    }
  }

  if (localStorage.getItem("tickets_title") == "Combo (Save 9%): Zoo Negara & Panda Conservation Centre + Berjaya Times Square Theme Park Tickets") {
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
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Non-Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  
                                                  <div></div>
                                                  <span class="tour-price" data-translate="a7">RP&nbsp;124</span>
                                                
                                              </div>
                                          </div>
                                          <div class="variantCard__ButtonWrapper-sc-q6rdw-2 gLxngV">
                                              <button id="iYmuLF1" onclick="StyledButton(0)" data-translate="select_title" class="Button__StyledButton-sc-h3czfc-0 iYmuLF" data-translate="for_tickets_select">Select</button>
                                          </div>
                                      </div>
                                  </div>
                                  
                              </div></div>
                                <div class="swiper-slide"><div data-qa-marker="variant-card-available"
                                  class="variantCard__StyledVariantCardWrapper-sc-q6rdw-0 hKpbPK">
                                  <div class="variantCard__CardHead-sc-q6rdw-5 cUBTAH">
                                      <h3 color="#444444" class="TextBlock__Text-sc-hd2jvz-0 eUdoQg block">Malaysian Citizens</h3>
                                      <div class="descriptors"></div>
                                      <div class="variantCard__PriceCTAWrapper-sc-q6rdw-6 jXBCpq">
                                          <div class="variantCard__PriceWrapper-sc-q6rdw-1 doOLdh">
                                              <div class="priceBlock__StyledPriceBlock-sc-1yosuva-0 kTIbnf">
                                                  
                                                  <div></div>
                                                  <span class="tour-price" data-translate="sunway_ticket_7">RP&nbsp;151</span>
                                                 
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
        document.querySelector("#selectScreen").style = "display:grid;"
        document.querySelector("#tourSelectionBar").style = "display:block;"
        if (key == 0) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 23);
          localStorage.setItem("Discount1", 25);
          localStorage.setItem("Discount4", 17);
          localStorage.setItem("Discount2", 19);
          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 35);
          localStorage.setItem("Discount1", 38);
          localStorage.setItem("Discount4", 25);
          localStorage.setItem("Discount2", 27);
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
          localStorage.setItem("Price1", 107);
localStorage.setItem("Discount1", 116);
localStorage.setItem("Discount4", 79);
localStorage.setItem("Discount2", 88);

          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF1").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF2").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
        if (key == 1) {
          localStorage.setItem("count3", 3);
          localStorage.setItem("Price1", 163);
localStorage.setItem("Discount1", 177);
localStorage.setItem("Discount4", 116);
localStorage.setItem("Discount2", 125);


          localStorage.setItem("All_Title", "Adult");
          localStorage.setItem("All_Title2", "Senior");
          localStorage.setItem("All_Title3", "Child");
          document.querySelector("#iYmuLF2").style = "background-color: rgb(128, 0, 255);color: rgb(255, 255, 255);"
          document.querySelector("#iYmuLF1").style = "background-color: rgb(255, 255, 255); border: 1px solid rgb(128, 0, 255);color: rgb(128, 0, 255);"
        }
  
      }
    }
  }
  





document.querySelector(".tickets_title").innerHTML = localStorage.getItem("tickets_title")

var element = document.querySelector(".tickets_title");
if (element && element.innerHTML.length > 40) {
  var a = element.innerHTML.slice(0, 40);
  element.innerHTML = a + "...";
}

