const pwdGen = document.getElementById("pwdgen");
const savePwd = document.getElementById("savepwd");
const downloadPwd = document.getElementById("download");
const pwd = document.getElementById("password");
const pwdList = []

pwdGen.addEventListener("click", genPassword)
function genPassword() {
  length = Math.random() * (55) + 10;
  var str = "";
  for (counter = 0; counter <= length; counter++) {
    var randomNum = 0 + parseInt(Math.random() * 127);
    if (randomNum > 33) {
      str += String.fromCharCode(randomNum);
    } else {
      counter--;
    }
  }
  
  pwd.innerHTML = str;
}

savePwd.addEventListener("click", savePassword)
function savePassword() {
  pwdList.push(pwd.innerHTML)
  console.log(pwd.innerHTML)
  console.log(pwdList)
}

downloadPwd.addEventListener("click", dowloadPassword)
function dowloadPassword() {
  var textToSave = pwdList
  
  var hiddenElement = document.createElement('a');

  hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'myFile.txt';
  hiddenElement.click();
}
