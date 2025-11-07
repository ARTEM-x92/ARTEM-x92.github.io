/*
	!! WARNING:  NON SECURE ACCOUNT SignUP/SignIN METHOD !!

	!! WARNING:  THE ACCOUNT SignUP/SignIN FUNCTION CAN ONLY WORK SECURE WITH PHP and SQL !!

	!! WARNING:  THIS SERVICE NOT CONTAIN A SECURE INFORMATION FOR AVOID HACKING !!

	!! WARNING:  PLEASE DO NOT USE PERSONAL INFORMATION, PERSONAL USERNAMES AND PERSONAL PASSWORDS !!

	!! WARNING:  USE TEMPORARY USERNAMES AND TEMPORARY PASSWORDS !!

	!! WARNING:  PASSWORDS ARE ENCRYPTED BUT ATTACKERS CAN OBTAIN THIS HASH !!

	!! WARNING:  THIS MEANS THAT IF YOU WRITE YOUR PERSONAL PASSWORDS, YOU GIVE THEM THE OPPORTUNITY TO EASILY OBTAIN A HASH OF YOUR PASSWORD !!

	!! WARNING:  THE HASH CAN BE BRUTE FORCED AND GET YOUR PASSWORD !!
	
	!! BEST REGARDS ARTEM_x92 DEVEL TEAM !!
*/

var DEBUG = 0;

function Account(init) {
	if (DEBUG == 1) {
		console.log('DBG:  0x0000');
	}else if (DEBUG == 2) {
		alert('DBG:  0x0000');
	}
	let ufn = document.getElementById('ufn');
	let uname = document.getElementById('uname');
	let upin = document.getElementById('upin');
	let rupin = document.getElementById('re-upin');
	let ugender = document.getElementById('ugender');
	let utheme = document.getElementById('utheme');
	let ulang = document.getElementById('ulang');
	let c_ufn = getCookie("name");
	let c_uname = getCookie("uname");
	let c_upin = getCookie("pin");
	let c_ugender = getCookie("gender");
	let c_utheme = getCookie("Theme");
	let c_ulang = getCookie("Lang");
	let c_account = getCookie("account");
	if (init == "signup") {
		if (DEBUG == 1) {
			console.log('DBG:  0x0001');
		}else if (DEBUG == 2) {
			alert('DBG:  0x0001');
		}
		if (c_uname == "" && c_upin == "") {
			if (DEBUG == 1) {
				console.log('DBG:  0x0002');
			}else if (DEBUG == 2) {
				alert('DBG:  0x0002');
			}
			if (ufn.value != "" && uname.value != "" && upin.value != "" && upin.value == rupin.value) {
				if (DEBUG == 1) {
					console.log('DBG:  0x0003');
				}else if (DEBUG == 2) {
					alert('DBG:  0x0003');
				}
				setCookie("name", ufn.value, 22);
				setCookie("uname", uname.value, 22);
				HashGen("pin", upin.value, 22);
				setCookie("account", "1", 11);
				if (ugender.value != "" && ugender.value != "none") {
					if (DEBUG == 1) {
						console.log('DBG:  0x0004');
					}else if (DEBUG == 2) {
						alert('DBG:  0x0004');
					}
					setCookie("gender", ugender.value, 22);
				}else{
					if (DEBUG == 1) {
						console.log('DBG:  0x0005');
					}else if (DEBUG == 2) {
						alert('DBG:  0x0005');
					}
					setCookie("gender", "Not Given", 22);	
				}
				if (DEBUG == 1) {
					console.log('DBG:  0x0006');
				}else if (DEBUG == 2) {
					alert('DBG:  0x0006');
				}
				alert('Registration Was Successful!');
				location.replace("/TEST/Account");
			}else{
				if (DEBUG == 1) {
					console.log('DBG:  0x0007');
				}else if (DEBUG == 2) {
					alert('DBG:  0x0007');
				}
				alert('Registration Failed!');
				location.replace("/TEST/Account/signup.html");
			}
		}else{
			if (DEBUG == 1) {
				console.log('DBG:  0x0008');
			}
			else if (DEBUG == 2) {
				alert('DBG:  0x0008');
			}
			alert('You Already Have An Account, Registration Not Needed!');
			location.replace("/TEST/Account/");
		}
	}else if (init == "signin") {
		if (DEBUG == 1) {
			console.log('DBG:  0x0009');
		}else if (DEBUG == 2) {
			alert('DBG:  0x0009');
		}
		if (c_account == "0" && c_uname != "" && c_upin != "") {
			if (DEBUG == 1) {
				console.log('DBG:  0x000A');
			}else if (DEBUG == 2) {
				alert('DBG:  0x000A');
			}
			setCookie("account", "1", 22);
			/*
			HashGen("temp", upin.value, "1");
			let upin_hash = getCookie("temp");
			if (uname.value == c_uname && upin_hash == c_upin) {
				if (DEBUG == 1) {
					console.log('DBG:  0x000B');
				}else if (DEBUG == 2) {
					alert('DBG:  0x000B');
				}
				setCookie("account", "1", 11);
				location.replace("/TEST/Account/");
			}
			*/
		}else{
			if (DEBUG == 1) {
				console.log('DBG:  0x000C');
			}else if (DEBUG == 2) {
				alert('DBG:  0x000C');
			}
			alert('Access To This Page Is Denied!');
			location.replace("/TEST/Account/");
		}
	}else if (init == "account") {
		if (DEBUG == 1) {
			console.log('DBG:  0x000D');
		}else if (DEBUG == 2) {
			alert('DBG:  0x000D');
		}
		setCookie("temp", "", 0);
		if (c_uname == "" && c_upin == ""){
			if (DEBUG == 1) {
				console.log('DBG:  0x000E');
			}else if (DEBUG == 2) {
				alert('DBG:  0x000E');
			}
			location.replace("/TEST/Account/signup.html");
		}else{
			if (DEBUG == 1) {
				console.log('DBG:  0x000F');
			}else if (DEBUG == 2) {
				alert('DBG:  0x000F');
			}
			if (c_account == "1" && c_uname != "" && c_upin != "") {
				if (DEBUG == 1) {
					console.log('DBG:  0x0010');
				}else if (DEBUG == 2) {
					alert('DBG:  0x0010');
				}
				ufn.value = c_ufn
				uname.value = c_uname
				upin.value = ""
				ugender.value = c_ugender
				utheme.value = c_utheme
				ulang.value = c_ulang
			}else if (c_account == "0" && c_uname != "" && c_upin != "") {
				if (DEBUG == 1) {
					console.log('DBG:  0x0011');
				}else if (DEBUG == 2) {
					alert('DBG:  0x0011');
				}
				location.replace("/TEST/Account/signin.html");
			}
		}
	}else if (init == "alert-unsec") {
		alert('!! PLEASE DO NOT USE PERSONAL INFORMATION, PERSONAL USERNAMES AND PERSONAL PASSWORDS !!\n\n!! USE TEMPORARY USERNAMES AND TEMPORARY PASSWORDS !!\n\n!! PASSWORDS ARE ENCRYPTED BUT ATTACKERS CAN OBTAIN THIS HASH !!');
	}else{
		if (DEBUG == 1) {
			console.log('DBG:  0x0012');
		}else if (DEBUG == 2) {
			alert('DBG:  0x0012');
		}
	}
}

/*
function AccountCheck(init){
	let ufn = document.getElementById('ufn').value;
	let uname = document.getElementById('uname').value;
	let upin = document.getElementById('upin').value;
	let ugender = document.getElementById('ugender').value;
	let c_uname = getCookie("uname");
	let c_upin = getCookie("pin");
	if (c_uname == "" && c_upin == "") {
		location.replace("/TEST/Account/signup.html");
	}else if (account == '0') {
		//location.replace("/TEST/Account/signin.html");
	}
}
*/