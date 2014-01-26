var CESTA = "/git-eva-grails";

function getRooms() {
       $.ajax({
             type: 'GET',
             url: CESTA+'/rooms',
             headers: {
                    'Accept': 'application/json; charset=UTF-8',
                    'Content-Type': 'application/json; charset=UTF-8'
              },
             success: function(data) {
                    var chatRooms = data;
                    var chatRoomsText = '';
                    document.getElementById("gRooms").innerHTML = "";
                    for (var i = 0; i < chatRooms.length; i++) {
                    	var name = chatRooms[i].name;
                    	var id = chatRooms[i].id;
                        //chatRoomsText += "<li class='active' ><a href='javascript: saveRoom("+id+");' id='"+ id +"'>" + name + "</a></li>";
                        document.getElementById("gRooms").innerHTML+= "<li class='active'><a href='javascript: saveRoom("+id+");' id='"+ id +"'>" + name + "</a></li>";
                    } // $('#test-rooms').text(chatRoomsText);
             }
       });
}

function nazevMistnosti() {
    $.ajax({
          type: 'GET',
          url: CESTA+'/rooms',
          headers: {
                 'Accept': 'application/json; charset=UTF-8',
                 'Content-Type': 'application/json; charset=UTF-8'
           },
          success: function(data) {
                 var chatRooms = data;
                 var chatRoomsText = '';
                 document.getElementById("gRooms").innerHTML = "";
                 for (var i = 0; i < chatRooms.length; i++) {
                 	var nazev = chatRooms[i].name;
                 	var id = chatRooms[i].id;                 	
                 	if (localStorage.room == id)
                    {
                      document.getElementById("mistnost").innerHTML = nazev;
                    }
                 }
          }
    });
}
 
function getMessages() {
       $.ajax({
             type: 'GET',
             url: CESTA+'/messages?roomId=67',
             headers: {
                    'Accept': 'application/json; charset=UTF-8',
                    'Content-Type': 'application/json; charset=UTF-8'
              },
             success: function(data) {
                    var chatMessages = data;
                    var chatMessagesText = ''
                    for (var i = 0; i < chatMessages.length; i++) {
                           chatMessagesText += chatMessages[i].username + " - " + chatMessages[i].textMessage + " - " + chatMessages[i].sentOn + ";\n";
                    }
                    $('#test-messages').text(chatMessagesText);
             }
       });
}

function getMessages(roomId) {
    $.ajax({
          type: 'GET',
          url: CESTA+'/messages?roomId='+roomId + '&limit=10',
          headers: {
                 'Accept': 'application/json; charset=UTF-8',
                 'Content-Type': 'application/json; charset=UTF-8'
           },
          success: function(data) {
                 var chatMessages = data;
                 var chatMessagesText = '';
                 document.getElementById("stage").innerHTML = "";
                 for (var i = 0; i < chatMessages.length; i++) {
                        //chatMessagesText += chatMessages[i].username + " - " + chatMessages[i].textMessage + " - " + chatMessages[i].sentOn + ";\n";
                	 var name = chatMessages[i].username;  
                     var sentOn = chatMessages[i].sentOn ;
                     var message = chatMessages[i].textMessage;
                    
                	 document.getElementById("stage").innerHTML+= "<p>" + name + " (" + sentOn + ") : " + message + "</p>"; 
                        
                 }
                // $('#stage').text(chatMessagesText);
          }
    });
}
 
function saveMessage() {
       var message = { username:"eva", textMessage:"Ahoj, jmenuji se Eva", room: 1 };
       $.ajax({
             type: 'POST',
              url: CESTA+'/messages',
              headers: {
                    'Accept': 'application/json; charset=UTF-8',
                    'Content-Type': 'application/json; charset=UTF-8'
              },
              data: JSON.stringify(message),
              dataType: 'json',
             success: function(data) {
                    alert('Message was saved succesfully!!');
             }
       });
}

function newMessage(name, roomId, newMessage) {
	var pom = '{ username:"' + name + '", textMessage:"' + newMessage + '", room: ' + roomId + ' }';
	var message = pom;
	alert("Zprava: " + message);
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: CESTA+'/messages',
        dataType: "json",
        data:  JSON.stringify(message),
        success: function(data, textStatus, jqXHR){
            alert('Message created successfully');            
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Message error: ' + textStatus);
        }
    });
}

function addMessage() {	
	var jmeno = localStorage.username;
	var roomId = localStorage.room;
	var input = document.getElementById('mes'),
    newMessage = input.value;
	var message = { username: jmeno , textMessage: newMessage, room: roomId };
	//alert("Zprava: " + message);
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: CESTA+'/messages',
        dataType: "json",
        data:  JSON.stringify(message),
        success: function(data, textStatus, jqXHR){
            //alert('Message created successfully');  
            getMessages(roomId);
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Message error: ' + textStatus);
        }
    });
}

