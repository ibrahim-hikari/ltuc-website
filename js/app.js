'use strict';

$(document).ready(()=>{
    $('.by-school').show();
    $('.by-degree').hide();
    $(".by-school-button").click( function(){
        $(".by-school").show();
        $(".by-degree").hide();
    })
    
    $(".by-degree-button").click( function(){
        $(".by-degree").show();
        $(".by-school").hide();
    })
})