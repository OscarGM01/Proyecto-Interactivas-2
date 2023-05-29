app.component('recover-pass', {

    data() {
        return {
            counter: 0
        }
    },
    template:
        /*html*/
    `
    <div class="set-div-regist">

    <div class="style-start">
        <img src="./imgs/candado.png" alt="Lock" class="img-lock">
        <h4 class="set-ff nav-txt-pstn">Recuperar Contraseña</h4>
        <div class="div-index-ssn">
            <!--Ingreso de Correo electronico-->
            <p class="set-ff nav-txt-pstn" style="margin-left: 20%;">Por favor introduzca su correo</p>
            <input type="text" placeholder="Correo" class="register-index" style="margin-top: 0;">
            <button class="btn-adapt btn-best-recipes-clr">enviar clave temporal</button>

            <!--Ingreso de la nueva contraseña-->
            <p class="set-ff nav-txt-pstn txt-stl-rp">Por
                favor introduzca la clave temporal enviada a su correp y su nueva contraseña</p>
            <input type="text" placeholder="Clave Temporal" class="register-index" style="margin-top: 0;">
            <input type="text" placeholder="Nueva Contraseña" class="register-index" style="margin-top: 5%;">
            <button class="btn-adapt btn-best-recipes-clr">Cambiar Contraseña</button>
        </div>

    </div>
</div>
    `

})