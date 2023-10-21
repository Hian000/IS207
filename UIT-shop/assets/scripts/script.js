// BUY MODAL HANDLING
const buyBtns = $('.buy-button');
const modal = $('.js-modal');
const modalContainer = $('.js-modal-container');
const modalClose = $('.js-modal-close-button');
const modalPayBtn = $('.modal-pay-button');

function showTicketButton() {
    modal.addClass('open');
}

function hideTicketButton() {
    modal.removeClass('open');
}

buyBtns.click(showTicketButton);

modalClose.click(hideTicketButton)
modalPayBtn.click(hideTicketButton)
modal.click(hideTicketButton)

modalContainer.click(function (event) {
    event.stopPropagation();
})

// TOAST HANDLER
function myFunction() {
    var x = $("#snackbar");
    x.addClass('show');
    setTimeout(function(){ 
        x.removeClass('show');
    }, 3000);
  }