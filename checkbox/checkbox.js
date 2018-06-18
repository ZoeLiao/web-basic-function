/*! Checkbox
 * 1.初始化checkbox
 * 2.若選取「全選」則全選，反之則清空
 * 3.若選取某個「非全選」的選項，則該選項打勾
*/

$(function initialize_checkbox(){
  $("#select_all").prop("checked", true);
  check_select_all();
})

$(function select_item(){
   $("[name=select_item]").click(function(){
     if($("#select_all").is(':checked')){
       $("#select_all").prop("checked", false);
       $("[name=select_item]").prop("checked", false);
     };
     $(this).prop("checked", true);
  });
  $("#select_all").click(function(){
    check_select_all();
  })
})

function check_select_all(){
  if($("#select_all").is(':checked')){
    $("[name=select_item]").prop("checked", true);
  }else{
    $("[name=select_item]").prop("checked", false);
  }
}
