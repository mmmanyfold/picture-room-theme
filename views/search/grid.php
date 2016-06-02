<div class="product-grid">
<div id="gridheader">

		<?php if (_xls_get_conf('ENABLE_CATEGORY_IMAGE', 0) && isset($this->category) && $this->category->ImageExist): ?>
	    <div id="category_image">
	        <img src="<?= $this->category->CategoryImage; ?>"/>
	    </div>
		<?php endif; ?>

	    <div class="subcategories">
			<?php
			if(isset($this->subcategories) && (count($this->subcategories) > 0)) {
				echo _sp("Subcategories") . ':' . ' ';
				foreach ($this->subcategories as $item)
					echo CHtml::link(trim($item['label']), $item['link']);
			}
			?>
	    </div>

		<?php if(isset($this->custom_page_content)): ?>
		    <div id="custom_content">
				<?php echo $this->custom_page_content; ?>
		    </div>
		<?php endif; ?>


	</div>


<?php if (count($model) > 0): ?>


		<?php
		$ct=-1;
		foreach($model as $objProduct):


			if ($objProduct->rowBookendFront)
				echo '<div class="row product-row">';

			//Our product cell is a nested div, containing the graphic and text label with clickable javascript

      foreach($objProduct->ProductPhotos as $photo){
        echo CHtml::tag('div',array(
          'class'=>'photos',
          'data-image'=>$photo['image_large']));
        echo '</div>';
      }

      echo CHtml::tag('div',array(
          'class'=>'product_cell col-sm-'.(12/$this->gridProductsPerRow)),

              CHtml::tag('div',array(
              'class'=>'product_cell_graphic',

              'onclick'=>'window.location.href=\''.$objProduct->Link.'\''),
              CHtml::link(CHtml::image($objProduct->Image,$objProduct->Title), $objProduct->Link)).

              CHtml::tag('div',array(
                  'class'=>'product_cell_label',
                      'onclick'=>'window.location.href=\''.$objProduct->Link.'\''
                  ),
                  CHtml::tag('div', array(),
                      '<script type="text/html" id="grid-product-carousel-template">
                    <div class="primary-image">
                      <a href="#" class="zoom">+ ZOOM</a>
                      <img src="{{ primary_image.image }}" alt="{{ primary_image.alt }}" />
                    </div>
                    {{#multiple_images}}
                    <div class="row row-5-col gutter-top pr-photos-toolbar">
                      <div class="col-xs-1"><span class="current-index">1</span> / {{ total_images }}</div>
                      {{#images}}
                      <div class="col-xs-1">
                        <a href="#" data-image="{{ image }}" data-alt="{{ alt }}" data-index="{{ index }}" {{#active}}class="active"{{/active}}>
                          <img src="{{ thumb }}" alt="{{ alt }}" />
                        </a>
                      </div>
                      {{/images}}
                    </div>
                    {{/multiple_images}}
                  </script>')).

              CHtml::link($objProduct->family->family.'<br>'.$objProduct->Title, $objProduct->Link).' — '.
              CHtml::tag('span',array('class'=>'product_cell_price_slash'),$objProduct->SlashedPrice).
              CHtml::tag('span',array('class'=>'product_cell_price'),$objProduct->Price)

          );
			if ($objProduct->rowBookendBack)
				echo '</div>';

		endforeach; ?>

		<div class="clearfix"></div>

		<div id="paginator" class="hidden">
			<?php $this->widget('CLinkPager', array(
				'id'=>'pagination',
				'currentPage'=>$pages->getCurrentPage(),
				'itemCount'=>$item_count,
				'pageSize'=>_xls_get_conf('PRODUCTS_PER_PAGE'),
				'maxButtonCount'=>5,
				'firstPageLabel'=> '<< '.Yii::t('global','First'),
				'lastPageLabel'=> Yii::t('global','Last').' >>',
				'prevPageLabel'=> '< '.Yii::t('global','Previous'),
				'nextPageLabel'=> Yii::t('global','Next').' >',
				'header'=>'',
				'htmlOptions'=>array('class'=>'pagination'),
				)); ?>
        </div>
    <div class="pr-paginator hidden gutter-bottom">
     <div class="separator gutter-bottom"></div>
     <div class="row">
      <div class="col-xs-6">
       Page <span class="current-page"></span> / <span class="total-pages"></span>
       </div>
       <div class="col-xs-3">
       <a class="prev-page hidden">← Previous</a>
       <a class="next-page hidden">→ Next</a>
       </div>
       <div class="col-xs-3">
       <a class="first-page hidden">← First</a>
       <a class="last-page hidden">→ Last</a>
      </div>
     </div>
    </div>

<?php endif; ?>

</div>