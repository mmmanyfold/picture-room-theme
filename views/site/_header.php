<script>
	$(function() {
		$("#topbar-cart-text").on('click', function(e) {
			showEditCartModal(<?= CJSON::encode(Yii::app()->createUrl('editcart')) ?>);
			//prevents default link behavior that causes the cart modal to be called twice
			e.preventDefault();
		});
	});
</script>

<div class="row row-5-col nav-top">
  <div class="col-sm-push-1 col-sm-3 col-md-2">
    <h1><?php echo CHtml::link("Picture Room", $this->createUrl("site/index")); ?></h1>
    <div class="visible-xs visible-sm gutter-top-half">McNally Jackson Store</div>
  </div>
  <div class="hidden-xs col-md-push-1 hidden-sm col-md-1">
   McNally<br>Jackson Store
  </div>
  <div class="col-sm-1 col-sm-push-1 hidden-xs">

    ■ / <a href="http://goodsforthestudy.mcnallyjacksonstore.com/store/" target="_blank" class="link-gfts">Goods for the Study</a> / <a href="http://www.mcnallyjackson.com/" target="_blank" class="link-mcnally-jackson">McNally Jackson Store</a><br>
    <span id="site-name">Picture Room</span>
  </div>
  <div class="col-sm-1 col-sm-pull-4 col-cart">
    <div class="visible-xs pull-right"><a href="#" class="menu-toggle">Menu</a></div>
	  <!-- Cart -->
	  <?php if (Yii::app()->params['DISABLE_CART'] == false): ?>
	  <a id="topbar-cart-text" href="">
      <?php echo Yii::t('cart', 'Cart'); ?><br>
		  <?php echo Yii::app()->shoppingcart->totalItemCount; ?> Items
    </a>
    <?php endif; ?>
  </div>
  <div class="visible-xs col-xs-5">
    <div class="separator"></div>
  </div>
</div>
