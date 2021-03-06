'use strict';

app.controller('adminCtrl', function($state, $scope, userFactory) {
    userFactory.getLoggedInUser()
        .then(function(user) {
            if (user.isAdmin) {
                $scope.user = user
            } else {
            	$state.go('notLoggedIn')
            }
        })
});
