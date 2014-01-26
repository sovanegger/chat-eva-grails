<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main"/>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Chat</title>
	</head>
	<body>
		<div class="container">
			
					<!--<a onclick="getRooms()">get rooms</a>
					<a onclick="getMessages()">get messages</a> -->
					<a onclick="newMessage('Milena','1','Nazdar!!!!')">new message</a>
					<a onclick="addMessage()">save message</a>
					<div id="container">
					  
   <div id="loginText" style="display: block"> 
    <div class="row">
     <div class="col-md-4">
     </div>
    <div class="col-md-4">
      <form class="form-signin" role="form">
        <h2 class="form-signin-heading">Přezdívka:</h2>
        <input id="username" name="username" type="text" class="form-control" placeholder="Přezdívka" required="" autofocus="">
        <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="login()" >Přihlásit se</button>
      </form>
    </div>
       <div class="col-md-4"> </div>
    </div>
   <!--  <a id="displayText" href="javascript:toggle('roomText','loginText','chatText');">Místnosti</a> -->
  </div>  <!-- loginText -->
  
  <div id="chatText" style="display: none">
  <div class="row">
   
    <!-- Menu -->  
    <div class="col-md-2" style="margin-top: 65px;">      
      <div class="list-group">  
      
      <a id="displayText" class="list-group-item" href="javascript:toggle('loginText','roomText','chatText');">Změnit přezdívku</a>                   
      <a id="displayText"  class="list-group-item" href="javascript:toggle('roomText','loginText','chatText');">Změnit místnost</a>
      
       
      </div> <!-- /list-group -->   
    </div>  <!-- /col-md-2 -->

    <div class="col-md-8">
      
      <!-- Název místnosti -->
      <h2 id="mistnost">Nějaká místnost</h2>
      
      <!-- Zprávy -->  
      <div class="jumbotron" style="max-height: 500px; overflow: hidden; overflow-y: scroll;">         
        <div id="stage"></div>  
        <div id="stageInput"></div>
      </div>  <!-- /jimbotron -->
       
   <!-- Přezdívka -->                
      <div class="col-lg-20">
        <div class="input-group">
          <span class="input-group-addon" id="jmeno">¶</span>
          <input type="text" class="form-control" id="mes" onkeyup="postMessage()">
        </div><!-- /input-group -->
      </div><!-- /.col-lg-20 -->
    </div><!-- /.col-md-8 -->
   </div><!-- /.row -->    
      
  </div><!-- messageText -->
  
  <div id="roomText" style="display: none">
    <div class="row">
     <div class="col-md-4">
    </div>
   
    <!-- Seznam místností --> 
    <div class="col-md-4">
     <h2>Místnosti:</h2>
       <ul class="nav nav-pills nav-stacked" id='gRooms'>
        <li class="active" >Mistnost</li>
       </ul>
       
    </div>
    
    <div class="col-md-4"> </div>
    </div>
  </div>  <!-- roomText -->
    				
    				 
    				 
    				
			</div>
			
		</div>
	</body>
</html>