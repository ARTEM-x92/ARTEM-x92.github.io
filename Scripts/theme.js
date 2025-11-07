
/* ☀️  —  🌙 */

// v1.2 with cookies //
///*
function toggletheme(tt_btn) { // Beta
    //tt_btn.innerHTML = "Err"; // Test
    if (tt_btn.innerHTML === "🌙") { 
        tt_btn.innerHTML = "☀️";
        setCookie("Theme", "Dark", 44);
        document.body.classList.toggle("tt");
    }else if (tt_btn.innerHTML === "☀️") { 
        tt_btn.innerHTML = "🌙";
        setCookie("Theme", "Light", 44);
        document.body.classList.toggle("tt");
    }else {
        tt_btn.innerHTML = "Err";
    }
};
//*/

// v1.1 without stopping at an error //
/*
function toggletheme(tt_btn) { 
    document.body.classList.toggle("tt");
    //tt_btn.innerHTML = "Err"; // Test
    if (tt_btn.innerHTML === "🌙") { 
        tt_btn.innerHTML = "☀️";
    }else if (tt_btn.innerHTML === "☀️") { 
        tt_btn.innerHTML = "🌙";
    }else {
        tt_btn.innerHTML = "Err";
    }
};
*/

// v1.0 with stopping at an error //
/*
function toggletheme(tt_btn) { 
    //tt_btn.innerHTML = "Err"; // Test
    if (tt_btn.innerHTML === "🌙") { 
        tt_btn.innerHTML = "☀️";
        document.cookie = "Theme=Dark";
        document.body.classList.toggle("tt");
    }else if (tt_btn.innerHTML === "☀️") { 
        tt_btn.innerHTML = "🌙";
        document.cookie = "Theme=Light";
        document.body.classList.toggle("tt");
    }else {
        tt_btn.innerHTML = "Err";
    }
};
*/
