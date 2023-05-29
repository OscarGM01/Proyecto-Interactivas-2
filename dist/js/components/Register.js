app.component('register-project', {
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
                <!--header inicio de sesion-->
                <img src="./imgs/GL.png" alt="logo" class="img-strt-ssn-logo">
                <img src="./imgs/perfiles/inicio-sesion.jpg" alt="user" class="img-strt-ssn">
                <h4 class="set-ff nav-txt-pstn">User</h4>
                <!--header inicio de sesion-->

                <!--Budy inicio de sesion-->
                <div class="div-index-ssn">
                    <input type="text" placeholder="Correo" class="register-index">
                    <input type="text" placeholder="Contraseña" class="register-index">
                </div>
                <a href="" style="margin-left: 25%;">Olvide mi Contraseña</a>
                <div class="div-btn-ssn">
                    <button class="btn-best-recipes btn-best-recipes-clr regist-text">Iniciar</button>
                    <button class="btn-best-recipes btn-best-recipes-clr regist-text">Registrarse</button>
                </div>
                <!--Budy inicio de sesion-->
            </div>
        </div>
    `

})