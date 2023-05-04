app.component('recipe-card', {

    props: {
        image: {

            type: String
        },
        category: {
            type: String,
            default: "recipe category"
        },
        name: {
            type: String,
            default: "recipe name"
        },
        description: {
            type: String,
            default: "recipe description"
        },
        preptime: {
            type: String,
            default: "recipe prepTime"
        },
        cooktime: {
            type: String,
            default: "recipe time"
        },
        level: {
            type: String,
            default: "recipe level"
        },


    },
    data() {
        return {
            counter: 0
        }
    },
    template:
        /*html*/
        `<div class="card mb-3" style="col-md-3">
    <div class="row g-0">
<<<<<<< HEAD
    <div class="col-md-3">
        
        <img v-bind:src="image" class="card-img-top" alt="featured recipe" style="border-radius:25px">
    </div>
    <div class="col-md-8">
=======
        <div class="col-md-4">
        
        <img v-bind:src="image" class="card-img-top" alt="featured recipe" style="border-radius:25px">
        </div>
        <div class="col-md-8">
>>>>>>> bc6fb1a (Pagina principal y top 10 finalizada con place holder)
        <div class="card-body">
        <p>{{ category }}</p>
        <h2 class="card-title" style="color: orange">{{ name }}</h2>
        <p class="card-text">{{ description }}</p>

        <div >
        
        <p class="card-text filep" style="display: inline-block" style="margin-left: 50px">{{ preptime }}</p>
        <p class="card-text filep">{{ cooktime }}</p>
        <p class="card-text filep">{{ level }}</p>
        </div>
        
<<<<<<< HEAD
        <button class="btn btn-dark" style="margin-left: 500px" >  Add to my Recipes</button>
        </div>
    </div>
    </div>
    </div>
=======
        <button class="btn btn-dark-GL" style="margin-left: 500px;" >  Add to my Recipes</button>
        </div>
      </div>
    </div>
  </div>
>>>>>>> bc6fb1a (Pagina principal y top 10 finalizada con place holder)
    <!--<div class="card p-3 col-md-3" > 
    
    <div class="card-body">
        
    </div>
</div>-->`

})