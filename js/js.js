document.addEventListener('DOMContentLoaded', function() {
  var plusButtons = document.querySelectorAll('.fa-plus-circle');
  var minusButtons = document.querySelectorAll('.fa-minus-circle');
  var quantities = document.querySelectorAll('.quantity');
  var unitPrices = document.querySelectorAll('.unit-price');
  var totalPriceElement = document.querySelector('.total-price .total');
  var heartButtons = document.querySelectorAll('.fa-heart');
  var trashButtons = document.querySelectorAll('.fa-trash-alt');

  function updateTotalPrice() {
      let totalPrice = 0;
      quantities = document.querySelectorAll('.quantity');
      unitPrices = document.querySelectorAll('.unit-price');
    
      quantities.forEach(function(quantity, index) {
        let quantityValue = parseInt(quantity.innerHTML) || 0;
        let unitPriceValue = parseFloat(unitPrices[index].innerHTML.replace('$', '').trim());
        totalPrice += quantityValue * unitPriceValue;
      });
      totalPriceElement.innerHTML = `${totalPrice} $`;
  }

  plusButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      let quantityValue = parseInt(quantities[index].innerHTML) || 0;
      quantities[index].innerHTML = quantityValue + 1;
      updateTotalPrice();
    });
  });

  minusButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      let quantityValue = parseInt(quantities[index].innerHTML) || 0;
      if (quantityValue > 0) {
        quantities[index].innerHTML = quantityValue - 1;
        updateTotalPrice();
      }
    });
  });

  updateTotalPrice();

  heartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      button.classList.toggle('liked');
    });
  });

  trashButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      let productCard = button.closest('.card-body'); 
      productCard.parentElement.removeChild(productCard);
      updateTotalPrice();
    });
  });
});

  