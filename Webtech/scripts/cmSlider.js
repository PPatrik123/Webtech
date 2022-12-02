$(document).ready(function(){
    $("#cmSlider").on('input', function(){
        var normal = $(this).val();
        var Liters = ($(this).val() * 1000).toFixed(0);
        $('#cmTextNormal').val(normal);
        $('#cmTextliters').val(Liters);
    });
    $("#cmTextNormal").on('input', function(){
        var normal = $(this).val();
        var Liters = ($(this).val() * 1000).toFixed(0);
        $('#cmTextliters').val(Liters);
        $('#cmSlider').val(normal)
    })
    $("#cmTextliters").on('input', function(){
        var Liters = $(this).val();
        var normal = ($(this).val() / 1000).toFixed(0);
        $('#cmTextNormal').val(normal);
        $('#cmSlider').val(normal)
    }) 
    
  })