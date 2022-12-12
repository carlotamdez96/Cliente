window.onload = function () {
    let x = document.cookie.split("=");

    document.querySelector("h1").innerText += ` ${x[1].toUpperCase()}`;


}

