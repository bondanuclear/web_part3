var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
modalBtn.addEventListener('click', function(){
modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click', function() {
modalBg.classList.remove('bg-active');
});

$('input:checkbox').change(function ()
{

      var total = 0;
      $('input:checkbox:checked').each(function(){
       total += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
      });   
  
      $(".total").val(total);

});
var modalBtn2 = document.querySelector('.modal-btn2');
var modalBg2 = document.querySelector('.modal-bg2');
var modalClose2 = document.querySelector('.modal-close2');
modalBtn2.addEventListener('click', function(){
modalBg2.classList.add('bg-active');
});
modalClose2.addEventListener('click', function() {
modalBg2.classList.remove('bg-active');
});