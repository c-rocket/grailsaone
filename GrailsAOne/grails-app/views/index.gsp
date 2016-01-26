<!doctype html>
<html class="no-js">
<head>
<meta charset="utf-8">
<title></title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width">

<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/angularjs-toaster/0.4.9/toaster.css" />
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.2.1/css/material.css" />
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.2.1/css/ripples.css" />

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

	<script src="https://code.jquery.com/jquery-2.1.3.js"></script>
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.js"></script>

	<script
		src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.js"></script>
	<script
		src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-animate.js"></script>
	<script
		src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-resource.js"></script>
	<script
		src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-route.js"></script>

	<script src="https://cdn.firebase.com/js/client/2.1.0/firebase.js"></script>
	<script
		src="https://cdn.firebase.com/libs/angularfire/0.9.1/angularfire.min.js"></script>

	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/angularjs-toaster/0.4.9/toaster.js"></script>

	<asset:javascript src="lib/moment.min.js" />
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/angular-moment/0.9.0/angular-moment.js"></script>

	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.2.1/js/material.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.2.1/js/ripples.js"></script>

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
