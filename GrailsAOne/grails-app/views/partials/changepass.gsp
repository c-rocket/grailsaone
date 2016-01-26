<div class="modal fade" id="pasModal" ng-controller="AuthController">
	<div class="modal-dialog">
		<div class="modal-content">

			<div class="panel panel-info title">

				<div class="panel-heading">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h3 class="panel-title">Change Password</h3>
				</div>

				<div class="panel-body">
					<form ng-submit="changePassword(user)">
						<input type="email" ng-model="user.email" placeholder="Email" class="form-control" required>
						<br>
						<input type="password" ng-model="user.oldPass" placeholder="Old Password" class="form-control" required>
						<br>
						<input type="password" ng-model="user.newPass" placeholder="New Password" class="form-control" required>
						<br>
						<input type="submit" value="Update" class="btn btn-default">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</form>
				</div>

			</div>

		</div>
	</div>
</div>