app.component('project-header', {

    data() {
        return {
            counter: 0,
            namePage: "GastroLife",
        }
    },
    template:
        /*html*/
    `
    <header class="position-relative nav-txt-pstn">
        <div class="nav-clr-bg">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <img src="./imgs/GL.png" alt="logo">
            <h1 class="nav-txt-pstn set-ff">{{namePage}}</h1>

=======
=======
>>>>>>> 4a79868 (Responsive completado al 101)
=======
>>>>>>> 662e388 (Coneccion con el Api1)
            <div class="set-pst-text">
                <img class="nav-logo" src="./imgs/GL.png" alt="logo">
                <h1 class="nav-txt-pstn set-ff">{{namePage}}</h1>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
=======
>>>>>>> 662e388 (Coneccion con el Api1)
            <div class="set-pst-text">
                <ul class="nav-txt-pstn">
                    <a href="" class="nav-links buttons-animation" >Categorias </a> 
                    <a href="" class="nav-links buttons-animation" style="text-align: center;"> Cada Ocación </a> 
                    <a href="" class="nav-links buttons-animation" >Iniciar Sesion</a> 
                    
                </ul>
                
            </div>

            <div class="container-animation" style="margin-top: 20px; margin-left: 20%;">
                <div class="index-animation set-pst-text" >
                    <input type="text" placeholder="Buscar" class="index-pstn">
                    <div class="button-search">
                        <img class="search-image" src="./imgs/iconos/buscar.png" alt="">
                    </div>
                </div>
            </div>
            

        </div>
    </header>
    <!--<div class="card p-3 col-md-3" > 
    
    <div class="card-body">
        
    </div>
</div>-->`

})