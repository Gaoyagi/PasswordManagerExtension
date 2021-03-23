const pwdGen = document.getElementById("pwdgen");
const savePwd = document.getElementById("savepwd");
const downloadPwd = document.getElementById("download");
const pwd = document.getElementById("password");
const pwdList = [];

savePwd.style.visibility = 'hidden';
downloadPwd.style.visibility = 'hidden';

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
  savePwd.style.visibility = 'visible';
}

savePwd.addEventListener("click", savePassword)
function savePassword() {
  pwdList.push(pwd.innerHTML);
  downloadPwd.style.visibility = 'visible';
}

downloadPwd.addEventListener("click", dowloadPassword)
function dowloadPassword() {
  var textToSave = pwdList
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:attachment/text,'
  for (x=0; x<pwdList.length; x++) {
    password = pwdList[x]+"\n"
    hiddenElement.href += encodeURIComponent(password);
  }
  
  hiddenElement.target = '_blank';
  hiddenElement.download = 'myPWDS.txt';
  hiddenElement.click();
}


