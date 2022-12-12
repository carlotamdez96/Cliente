window.onload = function () {

    let main = document.querySelector("#main");
    let mensaje = document.querySelector("#info");
    login();



    function login() {
        if (!document.cookie) {
            main.classList.add("tapado");
            mensaje.innerHTML=`<p>En este sitio utilizamos cookies, para continuar viendo la pagina acepte el uso de cookies</p>
            <button>Aceptar</button>
            <button>Cancelar</button>`;
            let x=mensaje.children[2];
            mensaje.children[1].addEventListener("click",aceptacookie);
            mensaje.children[2].addEventListener("click",aceptacookie);
            
        } else {
            mensaje.innerHTML="";
            main.classList.add("muestra");
            let usuario = document.createElement("input");
            let boton = document.createElement("button");
            let h1 = document.createElement("h1");
            h1.textContent = "Introduzca nombre de Usuario";
            boton.textContent = "Continuar";
            mensaje.appendChild(h1);
            mensaje.appendChild(usuario);
            mensaje.appendChild(boton);

            boton.addEventListener("click",()=>{almacenacookie(usuario.value)} );

        }
    } 

    function aceptacookie(){
        if (this.textContent==="Aceptar") {
            document.cookie="acepta;max-age=30;";
            login();
        } else {
            mensaje.innerHTML=`<h1>No puedes acceder al contenido sin aceptar las cookies, recarga el navegador y aceptalas</h1>`;
        }

    }
    function almacenacookie(usuario) {

        document.cookie = `user=${usuario};max-age=30;`;
        window.location.href = "./principal.html";
    }
}