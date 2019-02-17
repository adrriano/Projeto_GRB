var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block";/*desse campo marcado para cima o slide funciona somente se apertar o buton*/ 
}
  var myIndex = 2;/*Esse codigo faz com que o slide fique automatico*/
  desaparecer();
  
  function desaparecer() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(desaparecer, 3000); // Change image every 2 seconds
  }


$(function(){
  var animacao = "animated flip";
  var fimAnimacao = "webkitanimationEnd mozAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

  $("plusDivs").click(function(e){
    $("recebeAnimacao").addclass (animacao).one (fimAnimacao, function(){
      $(this).removeClass(animacao);

      });
      e.preventDefault();
  });
});