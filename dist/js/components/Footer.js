app.component('project-footer', {

    data() {
        return {
            imageInsta: "./imgs/iconos/instagram.png",
            imageFace: "./imgs/iconos/face.png",
            imageTT: "./imgs/iconos/tiktok.png",
            imageYT: "./imgs/iconos/youtube.png",

        }
    },
    template:
        /*html*/
    `
    <footer class="footer-style">
        
        <img src="./imgs/GL.png" alt="logo" class="footer-logo">
        <div class="footer-nav-icons">
            <img v-bind:src="imageInsta" alt="logo" class="footer-icons">
            <img v-bind:src="imageFace" alt="logo" class="footer-icons">
            <img v-bind:src="imageTT" alt="logo" class="footer-icons">
        </div>
        <p class="footer-description">2022, GastroLife. Marca Registrada por O&P, S.A. Esparza (Costa Rica)</p>
        </footer>
    `

})