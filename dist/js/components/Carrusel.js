app.component('project-carrusel', {

    data() {
        return {
            imageInsta: "./imgs/iconos/instagram.png",

        }
    },
    template:
        /*html*/
    `
    <div class="carousel-recipes">
            <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <h1 class="texto-sobrepuesto">Nuestras Mejores Recetas</h1>
                        <h1 class="texto-sobrepuesto-r">Estan Aquí</h1>
                        <img class="carousel-image " src="./imgs/Baked-rigatoni.jpg"  alt="...">
                        
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <h1 class="texto-sobrepuesto">Nuestras Mejores Recetas</h1>
                        <h1 class="texto-sobrepuesto-r">Estan Aqui</h1>
                        <img class="carousel-image " src="./imgs/appetizers-6308274_1280.jpg"  alt="...">
                    </div>
                    <div class="carousel-item">
                        <h1 class="texto-sobrepuesto">Nuestras Mejores Recetas</h1>
                        <h1 class="texto-sobrepuesto-r">Estan Aqui</h1>
                        <img class="carousel-image " src="./imgs/breakfast-g63652c62f_1920.jpg"  alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#recipeCarousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#recipeCarousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
        </div>
    `

})