var T=10000;
function moveTBar() {
  var tbar = document.getElementById("TBar"); 
  var tpointer = document.getElementById("TPointer");
  
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } 
    else {
      width+=(1000/T); 
      tbar.style.width = width + '%'; 
      tpointer.style.width = width + '%';
    }
  }
}
moveTBar();
