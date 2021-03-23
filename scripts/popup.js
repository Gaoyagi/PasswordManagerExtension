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
  // hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'myFile.txt';
  hiddenElement.click();
}

// downloadPwd.addEventListener("click", dowloadPassword)
// function dowloadPassword() {
//   const a = document.createElement('a');
//   const file = new Blob(pwdList, {type: 'text/plain'});
  
//   a.href= URL.createObjectURL(file);
//   a.download = 'myFile.txt';
//   a.click();

// 	URL.revokeObjectURL(a.href);
// }

