$(document).ready(function(){
    peopleList = new Array()
})

function enterName(){
    var name = $("#Name").val();
    var email = $("#email").val();
    var date = $("#Bdate").val();
    var alert = document.getElementById('alertId');
    if(!(name === "" || email === "" || date === "" ))
    {
        checkList(name);
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-success");
        alert.innerHTML = ("<strong>Success!</strong> Adding was succesfull!");
        alert.classList.remove('hidden');

    }
    else{
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
        alert.innerHTML = ("<strong>Error!</strong> Adding was unsuccesfull! Fill all field!");
        alert.classList.remove('hidden');
    }
}
function checkList(name){
    var checkList = (element) => element == name;
    var isIn = peopleList.findIndex(checkList);
    console.log(peopleList)
    console.log(isIn)
    if(isIn == -1){
        var list = document.getElementById("enteredNames");
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(name));
        list.appendChild(entry);
        peopleList.push(name)
    }

}