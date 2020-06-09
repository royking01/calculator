 function insrt(num){
	$('#textspace').val($('#textspace').val()+num);
}
function eql(){
	$('#textspace').val(eval($('#textspace').val()));
}
function c(){
	$('#textspace').val('');

  }
function del(){
	value=$('#textspace').val();
	$('#textspace').val(value.substring(0, value.length - 1));
}
function per(){
		$('#textspace').val($('#textspace').val()/100);
}
function dblClr(){
}