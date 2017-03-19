let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' || attempt.value == ''){
      setHiddenFields();
    }
    if (!validateInput(input.value)){
      return false;
    }
    else {
      attempt.value++;
      return true;
    }
}

//implement new functions here
function setHiddenFields(){
  answer.value = Math.floor(Math.random()*10000);
  while (answer.value.length < 4){
    answer.value = "0" + answer.value;
  }
  attempt.value = 0;
}

function setMessage(message){
  document.getElementById('message').innerHTML = message;
}

function validateInput(guess){
  if (guess.length != 4){
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
  return true;
}

function getResults(input){
  let temp = <div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">;
  for (i=0;i<input.length;i++){
    if(input.charAt(i)==answer.value.charAt(i)){
      temp+=`<span class="glyphicon glyphicon-ok"></span>`;
    }
    else if(anwer.value.indexOf(input.charAt(i)) > -1){
      temp+=`<span class="glyphicon glyphicon-transfer"></span>`;
    }
    else
      temp+= `<span class="glyphicon glyphicon-remove"></span>`;
  }
  temp += '</div></div>';
  document.getElementById('results').innerHTML += temp;
}
