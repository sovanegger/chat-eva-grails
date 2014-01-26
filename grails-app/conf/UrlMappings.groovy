class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?(.${format})?"{
			constraints {
				// apply constraints here
			}
		}
		
		"/rooms"(resources:"room")
		"/messages"(resources:"message")
		
        "/"(view: '/index')
        "500"(view:'/error')
	}
}
