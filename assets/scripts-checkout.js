$('#gui-billing-address').prepend('<div class="gui-content-title">Billing address</div>');
$('.gui-register .gui-button-small').insertBefore($('.gui-register .gui-buttons'));
$('.gui-login .gui-form .gui-buttons .gui-right').insertBefore($('.gui-login .gui-form .gui-buttons .gui-left'));
$('.gui-password .gui-right').insertAfter($('.gui-password .gui-input'));
$('.gui-password .gui-right a').removeClass('gui-button-small').addClass('gui-button-inset');
$('.gui-messages').insertAfter($('.gui-page-title'));
$('.gui-checkout-steps .gui-messages').insertBefore($('.gui-checkout-steps .gui-col2-equal-col2 .gui-spacer'));
$('.gui-cart-sum .gui-option').insertAfter($('.gui-cart-sum .gui-price'));
$('.gui-div-cart-shipping .gui-block-title a').addClass('gui-action gui-action-delete');
$('.gui-button-large.gui-button-action').html('Checkout');
$('.gui-thankyou thead tr th:nth-child(3)').html('Price');
$('.gui-thankyou thead tr th:first-child').attr('colspan', '2');
$('.gui-thankyou tbody tr td:first-child').attr('colspan', '2');
$('select').addClass('form-control');
$('.gui-action-delete').html('×');
$('th').html(function(i, html){
  return html.replace('<span class="gui-nowrap">Item price</span>', '<span class="gui-nowrap">Price</span>');
});
$('th').html(function(i, html){
  return html.replace('<span class="gui-nowrap">Quantity</span>', '<span class="gui-nowrap">Qty.</span>');
});
$('th').html(function(i, html){
  return html.replace('<span class="gui-nowrap">Subtotal</span>', '<span class="gui-nowrap">Total</span>');
});
$('#gui-form-payment-method-cayan .gui-col3-equal-col1 label').html(function(i, html){
  return html.replace('Expiration<em>*</em>', 'Expiration Month<em>*</em>');
});
$('.gui-cart table tbody tr').each(function() {
  var tr = $(this);
  var qty = tr.find('td:eq(2)'); // indices are zero-based here
  var price = tr.find('td:eq(4)');
  var rm = tr.find('td:eq(3)');
  var total = tr.find('td:eq(5)');
  qty.detach().insertAfter(price);
  rm.detach().insertAfter(total);
});
$('.gui-cart table thead tr').each(function() {
  var tr = $(this);
  var qty = tr.find('th:eq(1)'); // indices are zero-based here
  var price = tr.find('th:eq(3)');
  var space = tr.find('th:eq(2)');
  var total = tr.find('th:eq(4)');
  qty.detach().insertAfter(price);
  space.detach().insertAfter(total);
});
$('.gui-checkout-review table thead tr').each(function() {
  var tr = $(this);
  var qty = tr.find('th:eq(2)'); // indices are zero-based here
  var total = tr.find('th:eq(1)');
  qty.detach().insertBefore(total);
});
$('.gui-checkout-review table tbody tr').each(function() {
  var tr = $(this);
  var qty = tr.find('td:eq(3)'); // indices are zero-based here
  var total = tr.find('td:eq(2)');
  qty.detach().insertBefore(total);
});
$('.gui-thankyou table thead tr').each(function() {
  var tr = $(this);
  var qty = tr.find('th:eq(1)'); // indices are zero-based here
  var total = tr.find('th:eq(3)');
  qty.detach().insertBefore(total);
});
$('.gui-thankyou table tbody tr').each(function() {
  var tr = $(this);
  var qty = tr.find('td:eq(1)'); // indices are zero-based here
  var total = tr.find('td:eq(3)');
  qty.detach().insertBefore(total);
});
$(document).ready(function() {
  checkSize();
  $(window).resize(checkSize);
  if (!$('.gui-cart-sum .gui-item').hasClass('gui-big')) {
    $('.gui-cart-sum .gui-item .gui-desc').html('Shipping');
  };
});
function checkSize(){
  if ($('.gui-valign-top').css('display') == "none"){
    $('.gui-cart tbody tr td:nth-child(2)').attr('colspan', '2');
    $('#gui-form-shipment tbody tr td:last-child').attr('colspan', '1');
    $('.gui-checkout-review tbody tr td:nth-child(2)').attr('colspan', '2');
  } else {
    $('.gui-cart tbody tr td:nth-child(2)').attr('colspan', '0');
    $('.gui-checkout-review tbody tr td:nth-child(2)').attr('colspan', '0');
  }
}
$('.gui-cart tbody tr:last-child td:nth-child(1)').attr('colspan', '5');
$('#gui-form-shipment td:last-child').html('<a href="javascript:;" onclick="$(\'#gui-form-shipment\').submit();" class="gui-button-inset" title="View">View</a>');
$('.gui-button-facebook').html('Login with Facebook');
$('.gui-checkout-review .gui-checkbox').remove();
$('.gui-required').html(' *Required fields');
$('.gui-checkout-review .gui-buttons-large').remove();
$('.gui-checkout-review .gui-col2-equal-col2').append('<div style="margin-top:1em"><input id="gui-form-terms" class="gui-validate" type="checkbox" name="terms" value="1" data-error="Please accept the general terms & conditions"><label for="gui-form-terms">By clicking Buy, I acknowledge that I have an obligation to pay for this item and agree with the <a href="javascript:;" onclick="gui_popover(\'#gui-popover-terms-and-conditions\');return false;">general terms & conditions</a>.</label></div><div class="gui-right"><a href="javascript:;" onclick="$(\'#gui-form\').submit();" class="gui-button-large gui-button-action" title="Buy">Checkout</a></div>');
$('.gui-thankyou .gui-block').prepend('<p>« <a href="/">Back to shop</a></p>');
$('.gui-checkout-details .gui-section .gui-field').slice(-2).remove();
$('.gui-checkout-details #gui-billing-address .gui-content-title').after('<div class="gui-field"><div class="gui-radio"><input id="gui-form-details-sameaddress-yes" type="radio" data-toggle="div" data-target="#gui-block-shipping-address" data-visible="false" name="customer[sameaddress]" value="1" checked="checked"><label for="gui-form-details-sameaddress-yes">Ship to this address</label></div></div><div class="gui-field" style="margin-bottom:1em"><div class="gui-radio"><input id="gui-form-details-sameaddress-no" type="radio" data-toggle="div" data-target="#gui-block-shipping-address" data-visible="true" name="customer[sameaddress]" value="0"><label for="gui-form-details-sameaddress-no">Ship to different address</label></div></div>');
