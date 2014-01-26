package cz.prf.uai.adamkova.chat



import static org.springframework.http.HttpStatus.*
import grails.rest.RestfulController
import grails.transaction.Transactional

@Transactional(readOnly = true)
class MessageController extends RestfulController {
	def messageService
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

	static responseFormats = ['json', 'xml']
	
	MessageController() {
		super(Message)
	}
	
    def index(Integer max) {
        def messages = messageService.listMessages(params.getLong('roomId'), params.sentFrom, params.getLong('limit')) 
		respond messages
    }

    def show(Message messageInstance) {
        respond messageInstance
    }

    def create() {
        respond new Message(params)
    }

    @Transactional
    def save(Message messageInstance) {
        if (messageInstance == null) {
            notFound()
            return
        }
		messageInstance.sentOn = new Date()
		if (!messageInstance.validate()||messageInstance.hasErrors()) {
            respond messageInstance.errors, view:'create'
            return
        }

        messageInstance.save flush:true

        request.withFormat {
            form {
                flash.message = message(code: 'default.created.message', args: [message(code: 'messageInstance.label', default: 'Message'), messageInstance.id])
                redirect messageInstance
            }
            '*' { respond messageInstance, [status: CREATED] }
        }
    }

    def edit(Message messageInstance) {
        respond messageInstance
    }

    @Transactional
    def update(Message messageInstance) {
        if (messageInstance == null) {
            notFound()
            return
        }
		messageInstance.sentOn = new Date()
        if (!messageInstance.validate()||messageInstance.hasErrors()) {
            respond messageInstance.errors, view:'edit'
            return
        }

        messageInstance.save flush:true

        request.withFormat {
            form {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'Message.label', default: 'Message'), messageInstance.id])
                redirect messageInstance
            }
            '*'{ respond messageInstance, [status: OK] }
        }
    }

    @Transactional
    def delete(Message messageInstance) {

        if (messageInstance == null) {
            notFound()
            return
        }

        messageInstance.delete flush:true

        request.withFormat {
            form {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'Message.label', default: 'Message'), messageInstance.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'messageInstance.label', default: 'Message'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }
}
