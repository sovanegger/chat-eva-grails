<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang='cs'>
  <head>
    <title></title>
    <meta charset='utf-8'>
    <meta name='description' content=''>
    <meta name='keywords' content=''>
    <meta name='author' content=''>
    <meta name='robots' content='all'>
    <!-- <meta http-equiv='X-UA-Compatible' content='IE=edge'> -->
    <link href='lib/bootstrap/css/bootstrap.min.css' rel='stylesheet' >
    <link href='lib/bootstrap/css/bootstrap-theme.min.css' rel='stylesheet' >
    <script src='lib/jquery/jquery-1.10.2.js'></script>
    <script src='js/POST.js'></script>
  </head>
  <body>
     
     
  <div class="container">
    <div class="row">
     <div class="col-md-4">
     </div>
    <div class="col-md-4">
      <form class="form-signin" role="form">
        <h2 class="form-signin-heading">PÅezdÃ­vka:</h2>
        <input id="username" name="username" type="text" class="form-control" placeholder="PÅezdÃ­vka" required="" autofocus="">
        <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="login()">PÅihlÃ¡sit se</button>
      </form>
    </div>
       <div class="col-md-4"> </div>
    </div>
  </div>
  <a onclick="getRooms()">klikni</a>
   <script src='lib/bootstrap/js/bootstrap.min.js'></script>
  </body>
</html>