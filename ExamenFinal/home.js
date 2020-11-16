var event= document.getElementById("login").addEventListener("click", user);

function user() {
    var user = document.getElementsByTagName("input");
    if (user != null) {
        document.getElementById('message').innerHTML='Se ha mandado su mensaje, en breves instantes nos contactaremos';  
    }
    
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }