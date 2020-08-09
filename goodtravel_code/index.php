<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0, user-scalable=no" />
<title>GOOD TRAVEL!</title>
<?php @include "./_include/head-resources.php" ?>
<!-- Global css -->
<link href="./src/default.css?<?=time()?>" type="text/css" rel="stylesheet" />
<link href="./src/default-narrow.css?<?=time()?>"  media="screen and (max-width: 800px)" type="text/css" rel="stylesheet" />
<!-- /Global css -->
<script type="text/javascript" src="/src/common.js?<?=time()?>"></script>
<!-- layout-narrow css -->
<?php if (empty($_GET['sub'])) { ?>
		<link href="./src/main.css?<?=time()?>" type="text/css" rel="stylesheet" />
		<link href="./src/main-narrow.css?<?=time()?>" media="screen and (max-width: 800px)" type="text/css" rel="stylesheet" />
<?php } else { ?>
		<link href="./src/<?=$_GET['sub']?>.css?<?=time()?>" type="text/css" rel="stylesheet" />
		<link href="./src/<?=$_GET['sub']?>-narrow.css?<?=time()?>" media="screen and (max-width: 800px)" type="text/css" rel="stylesheet" />
<?php } ?>	
</head>
<body class="page-<?=empty($_GET['sub']) ? "main" : $_GET['sub']?>">
<!-- 상단 영역 -->
	<div class="header">
<?php @include "./_include/header.php" ?>
	</div>
<!-- /상단 영역 -->
<!-- 콘텐츠 영역 -->
	<div class="main-wrap">
		<div class="main">
			<?php
			if (isset($_GET['sub'])) {
				@include "./sub/{$_GET['sub']}.php";
			} else {
				@include "./main.php";
			}
			?>
		</div>
	</div>	
<!-- /콘텐츠 영역 -->
	<div class="footer">
		<?php @include "./_include/footer.php" ?>
	</div>
</body>
</html>