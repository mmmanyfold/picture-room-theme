<head>
	<meta charset="utf-8">
	<title><?php echo CHtml::encode($this->pageTitle); ?></title>

	<!--[if lt IE 9]>
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<link rel="canonical" href="<?= $this->CanonicalUrl; ?>"/>
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/ramda/0.21.0/ramda.min.js"></script>
	<script src="https://cdn.jsdelivr.net/momentjs/2.10.6/moment-with-locales.min.js"></script>
	<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
	<script src="https://code.jquery.com/jquery-2.1.4.js"></script>

	<meta name="description" content="<?= $this->pageDescription; ?>">
	<meta property="og:title" content="<?= $this->pageTitle; ?>"/>
	<meta property="og:description" content="<?= $this->pageDescription; ?>"/>
	<meta property="og:image" content="<?= $this->pageImageUrl; ?>"/>
	<meta property="og:url" content="<?= $this->CanonicalUrl; ?>"/>
	<meta name="p:domain_verify" content="7db2449c1034085a062d03f667333e09"/>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<meta name="google-site-verification" content="<?= $this->pageGoogleVerify; ?>"/>
	<?= $this->pageGoogleFonts; ?>

	<link rel="shortcut icon" href="<?=Yii::app()->baseUrl."/images/favicon.ico" ?>" />


	<?php
		Yii::app()->getClientScript()->registerCoreScript('jquery');

		if (isset(Yii::app()->params['modal_css']))
		{
			Yii::app()->getClientScript()->registerCssFile(Yii::app()->params['modal_css']);
		}

		$asset = Yii::app()->getAssetManager()->publish(Yii::getPathOfAlias('ext') . '/wsadvcheckout/assets');
		Yii::app()->clientScript->registerScriptFile($asset . '/checkout.js', CClientScript::POS_HEAD);
	?>

  <link rel="stylesheet" type="text/css" href="<?=Yii::app()->theme->baseUrl."/css/styles.min.css" ?>">
	<?php $this->widget('ext.wsiosorientationbugfix.iosorientationbugfix'); ?>

	<?php $this->renderPartial('/site/_google'); ?>
	<?php $this->renderPartial('ext.wscartmodal.views._cartscript'); ?>
	<?php $this->renderPartial('ext.wsadvcheckout.views._advcheckoutscript'); ?>
</head>