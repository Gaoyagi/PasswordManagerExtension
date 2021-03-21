let pwdGen = document.getElementById("pwdgen");
const pwd = document.getElementById("password");

pwdGen.addEventListener("click",genPwd)

function genPwd() {
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
  console.log(str)
  pwd.innerHTML = str;
}