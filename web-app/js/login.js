// JavaScript Document
/**
function login() {
    var input = document.getElementById('username'),
        newUsername = input.value;  
    if (newUsername != "") {
        localStorage.username = newUsername;    
        $('#avatar').html('My content here :-)');
        //document.getElementById("avatar").innerHTML = "P�ezd�vka:" + localStorage.username;
    } 
    loadXMLDoc('container','rooms.txt');
}   



function loadXMLDoc(kam, odkud)
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		document.getElementById(kam).innerHTML=xmlhttp.responseText;
    }
	}
	pom = "/git-eva-grails/text/" + odkud; 
	xmlhttp.open("GET",pom,true);
	xmlhttp.send();
}

function getRooms(){
    {  
      alert ("Jsem v m�stnosti"); 
      var data = chat.rooms;
      //document.getElementById("gRooms").innerHTML = "";
      var pom = "";
      for(var i in data)
      {                                                                                                      
        var id = data[i].id;
        var name = data[i].name; 
        pom += "<li class='active' id='gRooms'><a href='javascript: saveRoom("+id+");' id='"+ id +"'>" + name + "</a></li>";
       alert ("Jsem v m�stnosti 2"); 
        $('#gRooms').html(pom);
      }     
    }    
    }

function saveRoom(id)
{   
  var newRoom = id;    
  if (newRoom != "") {
    localStorage.room = newRoom;
  }   

  
} 
**/

  /** Schov�v� a ukazuje divy **/
  function toggle(ukaz, schovej1, schovej2) {
	var show = document.getElementById(ukaz);
    var hide1 = document.getElementById(schovej1);
    var hide2 = document.getElementById(schovej2);
    show.style.display = "block";  
    hide1.style.display = "none";
    hide2.style.display = "none";	
  
    if (ukaz == "chatText")  // jsme v m�stnosti
    {
     // alert("Ahoj!!!");
      message();
      
    }
    else if (ukaz == "roomText")  // jsme v m�stnosti
    {
     // alert("Ahoj!!!");
      getRooms();
    }
  }
   
       /* Zpr�vy */
    function message(){
    
    if  (localStorage.username)
    {
    	$('#jmeno').html(localStorage.username);
     // document.getElementById("jmeno").innerHTML = localStorage.username;
    }    
    nazevMistnosti(); 
    getMessages(localStorage.room);
    
    }
    
    /* Poslat zpr�vu - bude POST*/
    function postMessage() {   
        var input = document.getElementById('mes'),
        newMessage = input.value;
        if (event.keyCode==13)
        	addMessage();
        //newMessage(localStorage.username, localStorage.rooms, newMessage);
      /*  var pom = $('#stageInput').html();
        var currentTime = new Date(); 
        var day = currentTime.getDate();
        var month = currentTime.getMonth() + 1;         
        var year = currentTime.getFullYear();  
        var hour = currentTime.getHours();
        var minute = currentTime.getMinutes();
        var second = currentTime.getSeconds();
        var time = day + "." + month + "." + year + " " + hour + ":" + minute + ":" + second;
        
        if ((event.keyCode==13) && (newMessage)) {                     
          //alert(localStorage.username + ': ' + newMessage);
          pom +=  '<p>' + localStorage.username + ' (' + time + ') ' + ': ' + newMessage + '</p>';
          $('#stageInput').html(pom);
        }*/
      }  
       
    // RoomId do LocalStorage
    function saveRoom(id)
    {   
      var newRoom = id;    
      if (newRoom != "") {
        localStorage.room = newRoom;
      }   
    
      if (localStorage.room)
      {
       toggle('chatText','roomText','loginText');
      } 
    } 
   
    /* Zm�nit p�ezd�vku*/
    function login() {
        var input = document.getElementById('username'),
        newUsername = input.value;
  
    
    if (newUsername != "") {
        localStorage.username = newUsername;
        toggle('roomText','chatText','loginText');
        //login(); 
    }   
    
    if (localStorage.username)
    {
       toggle('roomText','chatText','loginText');
    } 
}   