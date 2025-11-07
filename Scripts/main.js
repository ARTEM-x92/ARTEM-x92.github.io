function setCookie(cn, cv, cexpdays) {
  const date= new Date();
  date.setTime(date.getTime() + (cexpdays* 24 * 60 * 60 * 1000));
  let expires = "expires="+date.toUTCString();
  // sameSite == Sent cookie to cross-site requests: Lax==Allow; Strict==Deny // 
  document.cookie = cn +"="+ cv +";"+ expires +";"+ "path=/" +";"+ "sameSite=Strict" +";"+ "secure=true";
}

function getCookie(cn) {
  let name = cn + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function CCSetup() {
  let cfg_0x00 = getCookie("Version");
  let cfg_0x01 = getCookie("Key");
  let cfg_0x02 = getCookie("Security");
  //let cfg_0x02 = getCookie("User");
  let cfg_0x03 = getCookie("Theme");
  let tt_btn = document.getElementById("tt-btn");
  
  if (cfg_0x00 == "" || cfg_0x00 == null) {
    setCookie("Version", "1.0.0 Beta", 44);
  }
  if (cfg_0x01 == "" || cfg_0x01 == null) {
    setCookie("Key", "f28e8ea0fbb24578d363c9ed74ac66d534f4e2da675f096f5763d5cf30467eca", 44);
  }
  if (cfg_0x02 == "" || cfg_0x02 == null) {
    setCookie("Security", "12092024", 44);
  }
  /*if (cfg_0x02 == "" || cfg_0x02 == null) {
    uname = prompt("Please enter your name: ");
    setCookie("User", uname, 44);
  }
  */
  if (cfg_0x03 == "" || cfg_0x03 == null) {
    setCookie("Theme", "Light", 44);
  }else if (cfg_0x03 == "Light") {
    tt_btn.innerHTML = "🌙";
  }else if (cfg_0x03 == "Dark") {
    tt_btn.innerHTML = "☀️";
    document.body.classList.toggle("tt");
  }else{
    tt_btn.innerHTML = "Err";
  }
}

function HashGen2C(c, s, a = "SHA-256") {
  let sBuf = new TextEncoder().encode(s);
  return crypto.subtle.digest(a, sBuf)
    .then(hash => {
      window.hash = hash;
      // here hash is an arrayBuffer, 
      // so we'll connvert it to its hex version
      let result = '';
      const view = new DataView(hash);
      for (let i = 0; i < hash.byteLength; i += 4) {
        result += ('00000000' + view.getUint32(i).toString(16)).slice(-8);
      }
      if (c !='') {
        setCookie(c, result, 22)
      }else{
        return result;
      }
    });
}
//HashGen2C('Pin','0000');
// No PHP Version, Insecure //

//let uname = document.getElementById('UserName').value
//let passwd = document.getElementById('Password').value

/*
let usrname = document.getElementById('UserName');
let pin = document.getElementById('pin');

setCookie("Username", usrname.value, 44);
setCookie("Username", pin.value, 44);
*/
