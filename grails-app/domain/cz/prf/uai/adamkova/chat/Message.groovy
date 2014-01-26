package cz.prf.uai.adamkova.chat

import grails.rest.Resource

class Message {
	String username
	String textMessage
	Date sentOn
	Room room
	
	Date dateCreated
	Date lastUpdated
	
	static belongsTo = [room: Room]
	
    static constraints = {
		username nullable: false, blank: false
		textMessage nullable: false, blank: false
		sentOn nullable: false
    }
	
	static mapping = {
		autoTimestamp true
		textMessage type: 'text'
	}
}
