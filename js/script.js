function nextAlert(){
    alert('This is External js')
}
document.getElementById('head').innerHTML="Hello this is Js Test Page"
document.getElementById('head').style.color='red'

function showDateTime(){
    document.getElementById('para1').innerHTML=Date();
}

function showMessage(){
   var nunber = prompt('please enter Number')
   answer= number*3560
   alert("Today Currency is "+answer+"MMK")
}

function calculate(){
    var num1 = prompt("First Number")
    var num2 = prompt("second Number")
    answer2= pareInt(num1 )+parent(num2)
    alert(answer2)
}