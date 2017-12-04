!DOCTYPE
<html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Ejemplo de alerta</title>
  </head>
  <body>
    <p>hola</p>
    <button type="button" name="button" class="alert">Alerta</button>
    <script>var saludoInicial=document.querySelector('.saludo-inicial');
    var button = document.querySelector('.saludo');

    function changeMessage(){
      saludoInicial.innerHTML='Hello';
    }
    button.addEventListener('click', changeMessage);
</script>
  </body>
</html>
