$(document).ready(function(){

    //Type validation
    $('#typeCheck').hide();
    let typeError = false;
    $('#type').keyup(function(){
      validateType();
    });
  
    function validateType(){
      let typeVal = $('#type').val();
      if(typeVal.length == ''){
        $('#typeCheck').show();
        typeError = false;
      }
      else {
        $('#typeCheck').hide();
        typeError = true;
      }
    };
  
    //Manufacturer validation
    $('#ManufacturerCheck').hide();
    let ManufacturerError = false;
    $('#Manufacturer').on('input',function(){
      validateManufacturer();
    });
  
    function validateManufacturer(){
      let ManufacturerVal = $('#Manufacturer').val();
      if(ManufacturerVal.length == ''){
        $('#ManufacturerCheck').show();
        ManufacturerError = false;
      }
      else {
        $('#ManufacturerCheck').hide();
        ManufacturerError = true;
      }
    };
  
    //Weight validation
    $('#weightCheck').hide();
    let weightError = false;
    $('#weight').on('input',function(){
      validateWeight();
    });
  
    function validateWeight(){
      let weightVal = $('#weight').val();
      if(weightVal.length == ''){
        $('#weightCheck').show();
        weightError = false;
      }
      else {
        $('#weightCheck').hide();
        weightError = true;
      }
    };
    //HP validation
    $('#HPCheck').hide();
    let HPError = false;
    $('#HP').on('input',function(){
      validateHP();
    });

    function validateHP(){
      let HPVal = $('#HP').val();
      if(HPVal.length == ''){
        $('#HPCheck').show();
        HPError = false;
      }
      else {
        $('#HPCheck').hide();
        HPError = true;
      }
    };
 
    //Performance validation
    $('#cmCheck').hide();
    let cmError = false;
    $("#cmTextNormal").on('input', function(){
      validatecm();
    });
    $("#cmTextliters").on('input', function(){
        validatecm();
    });
    $("#cmSlider").on('input', function(){
        validatecm();
    });
  
    function validatecm(){
      let cmVal = $('#cmTextNormal').val();
      if(cmVal == 0){
        $('#cmCheck').show();
        cmError = false;
      }
      else {
        $('#cmCheck').hide();
        cmError = true;
      }
    };
  
    //Adding row to the table
    $("#addItemBtn").click(function(){
  
      var isGood = typeError &&
                   ManufacturerError &&
                   weightError &&
                   cmError &&
                   HPError;
      
      if(isGood){
        insertTable()
        typeError = false;
        ManufacturerError = false;
        weightError = false;
        cmError = false;
        HPError = false;
      }else{
        if(!typeError){
          $('#typeCheck').show();
        }
        if(!ManufacturerError){
          $('#ManufacturerCheck').show();
        }
        if(!weightError){
          $('#weightCheck').show();
        }
        
        if(!cmError){
          $('#cmCheck').show();
        }
        if(!HPError){
          $('#HPCheck').show();
        }
      }
    })
  
  })
  
  function insertTable(){
    var table = document.getElementById("tableBody");
    var row = table.insertRow(0);
    var typeRow = row.insertCell();
    var ManufacturerRow = row.insertCell();
    var weightRow = row.insertCell();
    var cmRowNormal = row.insertCell();
    var cmRowliters = row.insertCell();
    var HPRow = row.insertCell();
    typeRow.innerHTML = $("#type").val();
    ManufacturerRow.innerHTML = $("#Manufacturer").val();
    weightRow.innerHTML = $("#weight").val();
    cmRowNormal.innerHTML = $("#cmTextNormal").val();
    cmRowliters.innerHTML = $("#cmTextliters").val();
    HPRow.innerHTML = $("#HP").val();
    clearForm();
  }
  
  function clearForm(){
      $("#type").val("");
      $("#Manufacturer").val("");
      $("#weight").val("");
      $("#cmTextNormal").val(0);
      $("#cmTextliters").val(0);
      $("#cmSlider").val(0);
      $("#HP").val("");
  }
  