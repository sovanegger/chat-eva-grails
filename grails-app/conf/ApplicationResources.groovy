modules = {
	'twitter-bootstrap' {
		dependsOn 'jquery'
		resource url: 'lib/bootstrap/css/bootstrap.min.css', id: 'bootstrap-css', disposition: 'head'
		resource url: 'lib/bootstrap/css/bootstrap-theme.min.css', id: 'bootstrap-theme-css', disposition: 'head'
		resource url: 'lib/bootstrap/js/bootstrap.min.js', id: 'bootstrap-js', disposition: 'head'
	}
	
	'clientside-app' {
		dependsOn 'jquery'
		resource url: 'js/json.js', bundle: 'json-js', disposition: 'head'
		resource url: 'js/loadMessages.js', bundle: 'loadMessages-js', disposition: 'head'
		resource url: 'js/login.js', bundle: 'login-js', disposition: 'head'
		resource url: 'js/POST.js', bundle: 'POST-js', disposition: 'head'
	}
}