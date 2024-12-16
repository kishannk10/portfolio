let outputScreen = document.getElementById('output-screen');

function appendToDisplay(num) {
  outputScreen.value += num;
}

function calculate(){
     try{
        outputScreen.value = eval(outputScreen.value);
     } catch(err){
        outputScreen.value = 'Error';
     }
}

function Clear(){
    outputScreen.value="";
}
function del(){
    outputScreen.value= outputScreen.value.slice(0,-1);
}