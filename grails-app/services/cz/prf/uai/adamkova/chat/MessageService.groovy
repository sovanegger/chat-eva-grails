package cz.prf.uai.adamkova.chat

import grails.transaction.Transactional

@Transactional
class MessageService {

    def listMessages(Long roomId, String sentFrom, Long limit) {
		def room
		def messages
		if (roomId)
			room = Room.get(roomId)
		
		messages = this.findAllMessagesByConstraints(room, sentFrom, limit)
		messages
    }
	
	private def findAllMessagesByConstraints(Room room, String username, Long limit) {
		def messages
		def queryParameters = [max: limit, sort: 'sentOn', order: 'desc']
		if(room && username)
			messages = Message.findAllByRoomAndUsername(room, username, queryParameters)
		else if(room)
			messages = Message.findAllByRoom(room, queryParameters)
		else if (username)
			messages = Message.findAllByUsername(username, queryParameters)
		else
			messages = Message.list(queryParameters)
		messages
	}
}
