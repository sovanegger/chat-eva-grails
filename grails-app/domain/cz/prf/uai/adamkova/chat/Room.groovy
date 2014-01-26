package cz.prf.uai.adamkova.chat

import grails.rest.Resource

class Room {
	String name

	Date dateCreated
	Date lastUpdated
	
	static hasMany = [
		messages: Message
	]
	
    static constraints = {
		name nullable: false, blank: false		
    }
	
	static mapping = {
		autoTimestamp true
	}
}
