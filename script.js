function insrt(num){
	$('.text').val($('.text').val()+ num);
}
function eql(){
	$('.text').val(eval($('.text').val()));
}
function c(){
	$('.text').val('');
  }
function del(){
	value=$('.text').val();
	$('.text').val(value.substring(0, value.length - 1));
}
