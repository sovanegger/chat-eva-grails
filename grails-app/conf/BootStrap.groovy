import cz.prf.uai.adamkova.chat.Message
import cz.prf.uai.adamkova.chat.Room
import grails.converters.JSON

class BootStrap {

    def init = { servletContext ->
		importData()
		setObjectMarshallers()
    }
    def destroy = {
    }
	
	def setObjectMarshallers() {
		JSON.registerObjectMarshaller(Message) {
			def map= [:]
			map['id'] = it.id
			map['username'] = it.username
			map['textMessage'] = it.textMessage
			map['sentOn'] = it.sentOn
			map['room'] = ['id': it.room?.id,'name': it.room?.name]
			return map
		}
		JSON.registerObjectMarshaller(Room) {
			def map= [:]
			map['id'] = it.id
			map['name'] = it.name
			return map
		}
	}
	
	def importData() {
		
		if (!Room.findByName('Místnost 1')) {
			def roomOne = new Room(name: 'Místnost 1')
			roomOne.addToMessages(new Message(textMessage: 'Ahoj Karle', sentOn: new Date(), username: 'radek'))
			roomOne.addToMessages(new Message(textMessage: 'Ahoj Radku', sentOn: new Date().minus(2), username: 'karel'))
			roomOne.save(failOnError: true)
		}
		
		if (!Room.findByName('Místnost 2')) {
			def roomTwo = new Room(name: 'Místnost 2')
			roomTwo.addToMessages(new Message(textMessage: 'Zdar Evo', sentOn: new Date(), username: 'adam'))
			roomTwo.addToMessages(new Message(textMessage: 'Ahoj Adame', sentOn: new Date().minus(2), username: 'eva'))
			roomTwo.save(failOnError: true)
		}
		println ('--------importing done------')
	}
}
