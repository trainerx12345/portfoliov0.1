$(document).ready(function() {
    //================= IF ELSE STATEMENT
    // $("#first_section").click(function(){
    
    //     if($("#first_body").is(":hidden")){
    //         $(".accordion-body").slideUp(250,"swing");
    //         $("#first_body").slideDown(250,"swing");
    //     }
    //     else
    //     {  
    //       $("#first_body").slideToggle(250,"swing");
    //     }
      
    // });

    //===== Plugin FUnction
    //$("#first_section").accordion("#first_body");
    
    //============= ARRAY STATEMENT
    $('.accordion-header').each(function (index, value) {
        $(value).click(function(){
            if( $($('.accordion-body')[index]).is(":visible"))
            {
                $('.accordion-body').each(function(index,value){
                    $(value).slideUp(500,"swing");
                });
                return;
            }
            else 
            {
                $('.accordion-body').each(function(index,value){
                    $(value).slideUp(500,"swing");
                });
                $($('.accordion-body')[index]).slideToggle(500,"swing");
            return;
            }
        });
    });

// ===== Table Sort and filter
    $("#search").on("keyup", function(){
    var serachQry = $(this).val().toLowerCase();
        $("#dataTable tbody tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(serachQry) >- 1);
        });
    });


}); 

//PLUGIN FOR SLIDETOGGLE
// $.fn.accordion = function(body)
// {
//     $(this).click(function(){
//      if($(body).is(":hidden")){
//                 $(".accordion-body").slideUp(250,"swing");
//                 $(body).slideDown(250,"swing");
//             }
//             else
//             {  
//               $(body).slideToggle(250,"swing");
//             }
          
//         });
// };