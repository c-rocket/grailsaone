<!doctype html>
<html class="no-js">
<head>
<meta charset="utf-8">
<title></title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width">

<link rel="stylesheet"
	href="${resource(dir: 'stylesheets', file: 'bootstrap.css')}">
<link rel="stylesheet"
	href="${resource(dir: 'stylesheets', file: 'toaster.css')}">
<link rel="stylesheet"
	href="${resource(dir: 'stylesheets', file: 'material.css')}">
<link rel="stylesheet"
	href="${resource(dir: 'stylesheets', file: 'ripples.css')}">
<link rel="stylesheet"
	href="${resource(dir: 'stylesheets', file: 'main.css')}">

</head>
<body ng-app="aOne">
	<input type="hidden" value="/aOne/" id="baseUrl" />
	<!-- Toaster status: info, wait, error, success, warning -->
	<toaster-container
		toaster-options="{'time-out': 3000, 'close-button':true}"></toaster-container>
	<div ng-include="'/aOne/nav'"></div>

	<div class="jumbotron">
		<div ng-view=""></div>
	</div>

	<asset:javascript src="lib/jquery-2.1.3.js" />
	<asset:javascript src="lib/bootstrap.js" />
	<asset:javascript src="lib/angular.js" />
	<asset:javascript src="lib/angular-animate.js" />
	<asset:javascript src="lib/angular-resource.js" />
	<asset:javascript src="lib/angular-route.js" />
	<asset:javascript src="lib/firebase.js" />
	<asset:javascript src="lib/angularfire.min.js" />
	<asset:javascript src="lib/toaster.js" />
	<asset:javascript src="lib/moment.min.js" />
	<asset:javascript src="lib/angular-moment.js" />
	<asset:javascript src="lib/material.js" />
	<asset:javascript src="lib/ripples.js" />

	<script>
		$(document).ready(function() {
			$.material.init();
		});
	</script>

	<asset:javascript src="app.js" />

	<asset:javascript src="controllers/nav.js" />
	<asset:javascript src="controllers/item.js" />
	<asset:javascript src="controllers/auth.js" />
	<asset:javascript src="controllers/browse.js" />

	<asset:javascript src="services/auth.js" />
	<asset:javascript src="services/item.js" />
	<asset:javascript src="services/comment.js" />
	<asset:javascript src="services/offer.js" />

</body>
</html>
