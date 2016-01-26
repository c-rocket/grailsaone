<div class="auth-forms title">
	<h2>Register</h2>
	<form ng-submit="register(user)">

		<div class="input-group">
			<div class="input-group-addon">
				<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
			</div>
			<input type="name" ng-model="user.name" placeholder="Name" class="form-control" autofocus required>
		</div>
		<br>

		<div class="input-group">
			<div class="input-group-addon">
				<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
			</div>
			<input type="email" ng-model="user.email" placeholder="Email" class="form-control" required>
		</div>
		<br>

		<div class="input-group">
			<div class="input-group-addon">
				<span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
			</div>
			<input type="password" ng-model="user.password" placeholder="Password" class="form-control" required>
		</div>
		<br>

		<input type="submit" value="Register" class="btn btn-danger">
	</form>
</div>