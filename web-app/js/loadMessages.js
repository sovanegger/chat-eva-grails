/*function insertintodiv()
{   
    var room = chat.rooms;
    for(var i in room)
    {
      var mistnost = room[i].id;
      var nazev =  room[i].name;
      if (localStorage.room == mistnost)
      {
        document.getElementById("mistnost").innerHTML = nazev;
        }
    }
    
    var data = chat.message;
    for(var i in data)
    {
      var id = data[i].id;
      var name = data[i].name;  
      var sentOn = data[i].sentOn;
      //var poslano = sentOn.toTimeString();
      var message = data[i].message;
      var mistnost = data[i].roomId;
      if (localStorage.room == mistnost)
      {
        document.getElementById("stage").innerHTML+= "<p>" + name + " (" + sentOn + ") : " + message + "</p>";
      }
    }     
}        */

$('body.messages').ready(function(){
    if  (localStorage.username)
    {
      document.getElementById("jmeno").innerHTML = localStorage.username;
    }
  
	  var room = chat.rooms;
    for(var i in room)
    {
      var mistnost = room[i].id;
      var nazev =  room[i].name;
      if (localStorage.room == mistnost)
      {
        document.getElementById("mistnost").innerHTML = nazev;
        }
    }
    
    var data = chat.message;
    for(var i in data)
    {
      
      var id = data[i].id;
      var name = data[i].name;  
      var sentOn = data[i].sentOn;
      var message = data[i].message;
      var mistnost = data[i].roomId;
      if (localStorage.room == mistnost)
      {
        document.getElementById("stage").innerHTML+= "<p>" + name + " (" + sentOn + ") : " + message + "</p>"; 
      }
    }     
});





     
   

