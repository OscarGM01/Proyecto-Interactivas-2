app.component('profile-header', {

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
            <img src="./imgs/GL.png" alt="logo">
            <h1 class="nav-txt-pstn set-ff">{{namePage}}</h1>
=======
=======
>>>>>>> 4a79868 (Responsive completado al 101)
            <div class="set-pst-text">
            <img class="nav-logo" src="./imgs/GL.png" alt="logo">
            <h1 class="nav-txt-pstn set-ff">{{namePage}}</h1>
            
            </div>
<<<<<<< HEAD
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)

            <div class="set-pst-text">
                <ul class="nav-txt-pstn">
                    <a href="" class="nav-links buttons-animation" >Categorias </a> 
                    <a href="" class="nav-links buttons-animation" style="text-align: center;"> Cada Ocación </a> 
                    <div class="nav-links">
                    <img  style="height: 50px; border-radius: 50%;" src="./imgs/perfiles/perfil1.jpg"
                    alt="perfil"> 
                    <h2 class="buttons-animation" style="margin-top: 10%;">Percy</h2>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
                     
=======
                
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
                
>>>>>>> 4a79868 (Responsive completado al 101)
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