const app = Vue.createApp({
    data(){
        
        return{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            namePage: "GastroLife",
            imageLogo: "./imgs/GL.png",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
            imageUser: "./imgs/perfiles/inicio-sesion.jpg",
>>>>>>> 5d15aff (blablaa)
=======
            imageUser: "./imgs/perfiles/inicio-sesion.jpg",
            imageLock: "./imgs/candado.png",
>>>>>>> 0797de7 (Pagina de recuperacion de contrasena lista)
=======
            imageUser: "./imgs/perfiles/inicio-sesion.jpg",
            imageLock: "./imgs/candado.png",
            imageProfile: "./imgs/perfiles/perfil1.jpg",
>>>>>>> bd23b2a (Pagina perdil Finalizada)
=======
            imageUser: "./imgs/perfiles/inicio-sesion.jpg",
            imageLock: "./imgs/candado.png",
            imageProfile: "./imgs/perfiles/perfil1.jpg",
>>>>>>> 82a112e (Arreglo del Nav bar1)
=======
            imageUser: "./imgs/perfiles/inicio-sesion.jpg",
            imageLock: "./imgs/candado.png",
            imageProfile: "./imgs/perfiles/perfil1.jpg",
>>>>>>> 6ccab86 (Arreglo del diseño de los Cards1)
            imageInsta: "./imgs/iconos/instagram.png",
            imageFace: "./imgs/iconos/face.png",
            imageTT: "./imgs/iconos/tiktok.png",
            imageYT: "./imgs/iconos/youtube.png",
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            title: "Kitchengenius",
=======
            title: "GastroLife",
>>>>>>> bc6fb1a (Pagina principal y top 10 finalizada con place holder)
=======
            title: "GastroLife",
>>>>>>> a0583ad (Pagina Principal finalizada y pagina de la receta tamb)
=======
            title: "GastroLife",
>>>>>>> c8a738e (inicio pagina de inicio de sesion)
=======
            title: "GastroLife",
>>>>>>> 5d15aff (blablaa)
=======
            title: "GastroLife",
>>>>>>> 0797de7 (Pagina de recuperacion de contrasena lista)
=======
            title: "GastroLife",
>>>>>>> bd23b2a (Pagina perdil Finalizada)
=======
            title: "GastroLife",
>>>>>>> 82a112e (Arreglo del Nav bar1)
=======
            imgCrown: "",
            //./imgs/coronas/corona-oro.png
            title: "GastroLife",
>>>>>>> 6ccab86 (Arreglo del diseño de los Cards1)
=======
=======
>>>>>>> 6a54e6b (Arreglo de componentes y recetas1)
            
            imageUser: "./imgs/perfiles/inicio-sesion.jpg",
            imageLock: "./imgs/candado.png",
            imageProfile: "./imgs/perfiles/perfil1.jpg",
=======
            
            imageUser: "./imgs/perfiles/inicio-sesion.jpg",
            imageLock: "./imgs/candado.png",
            
>>>>>>> e7eb9f6 (Arreglo del css de la pagina del pefirl y uso de componentes2)
            
            imgCrown: "",
            //./imgs/coronas/corona-oro.png
            title: "GastroLife",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 64333df (Arreglo de los cards y diseño del nav bar1)
=======
>>>>>>> 6a54e6b (Arreglo de componentes y recetas1)
=======
>>>>>>> e7eb9f6 (Arreglo del css de la pagina del pefirl y uso de componentes2)
            description: "A Recipe Collection For Every Palate",
            image: "./images/header.jpg",
            likes: 15,
=======
=======
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
=======
>>>>>>> 662e388 (Coneccion con el Api1)
=======
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
            likes: "",
            imgCrown: "",
            title: "GastroLife",
            description: "A Recipe Collection For Every Palate",
            image: "./images/header.jpg",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c6b5e0d (Utilizacion de componentes en todas las paginas)
=======
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
=======
>>>>>>> 662e388 (Coneccion con el Api1)
=======
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
            categories: [
                { id: 1, name: "all" },
                { id: 2, name: "Lunch" },
                { id: 3, name: "Desserts" },
                { id: 4, name: "Fastfood" },
                { id: 5, name: "Breakfast" },
                { id: 6, name: "Drinks" },
            ],
            all_recipes: [],
            selectedIndex: 0,
            hasRecipes: true,
            recipes: [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                { id: 1, image: "./images/recipes/sushi.jpg", name: "Sushi", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber", instructions: "STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice.Lay a nori sheet on the mat, shiny-side down.Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear. STEP 2 Spread over some Japanese mayonnaise.Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice. STEP 3 Add the filling.Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber. STEP 4 Roll it up.Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll. STEP 5 Stick down the sides like a stamp.When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll. STEP 6 Wrap in cling film.Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film. STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon.Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film. STEP 8 Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one. STEP 9 Tip it out like a sandcastle.Turn block of sushi onto a chopping board.Get a grown-up to cut into fingers, then remove the cling film. STEP 10 TO MAKE SUSHI BALLS: Choose your topping.Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping. STEP 11 Make into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve." },
                { id: 2, image: "./images/recipes/fettuccine-alfredo.jpg", name: "Fettuccine Alfredo", category: "Dinner", time: "20 mins", level: "Easy", likes: 18, ingredients: "1 lb Fettuccine, 1/2 cup Heavy Cream, 1/2 cup Butter, 1/2 cup Parmesan, 2 tbsp Parsley, Black Pepper", instructions: "Cook pasta according to package instructions in a large pot of boiling water and salt. Add heavy cream and butter to a large skillet over medium heat until the cream bubbles and the butter melts. Whisk in parmesan and add seasoning (salt and black pepper). Let the sauce thicken slightly and then add the pasta and toss until coated in sauce. Garnish with parsley, and it's ready." },
                { id: 3, image: "./images/recipes/chicken-enchilada-casserole.jpg", name: "Chicken Enchilada Casserole", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "14 oz jar Enchilada sauce, 3 Cups shredded Monterey Jack cheese, 6 corn tortillas, 2 chicken breasts", instructions: "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot.Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes.No water is needed, the chicken will cook in the Enchilada sauce.Make sure you stir occasionally so that it doesn't stick to the bottom.Remove chicken from the pot and shred with two forks.Preheat oven to 375 F degrees.Start layering the casserole.Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish.I used a longer baking dish, so that I can put 2 corn tortillas across.Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce.Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese.Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese.Bake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top.Serve warm." },
                { id: 4, image: "./images/recipes/big-mac.jpg", name: "Big Mac", category: "Dinner", time: "20 mins", level: "Easy", likes: 18, ingredients: "400g Minced Beef, 2 tbs Olive Oil, 2 Sesame Seed Burger Buns, Chopped Onion, 1/4 Iceberg Lettuce, 2 sliced Cheese2 large Dill Pickles, 1 cup Mayonnaise, 2 tsp White Wine VinegarPinch Pepper2 tsp Mustard, 1 1/2 tsp Onion Salt1 1/2 tsp Garlic Powder, 1/2 tsp Paprika", instructions: "For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use.2.To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each.Place each onto a square of baking paper and flatten to form into four x 15cm circles.Heat oil in a large frypan over high heat.In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through.Remove from heat and keep warm.Repeat with remaining two patties.3.Carefully slice each burger bun into three acrossways, then lightly toast.4.To assemble the burgers, spread a little Big Mac sauce over the bottom base.Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices.Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce.Top with burger lid to serve.5.After waiting half an hour for your food to settle, go for a jog." },
                { id: 5, image: "./images/recipes/banana-pancakes.jpg", name: "Banana Pancakes", category: "Breakfast", time: "20 mins", level: "Easy", likes: 18, ingredients: "1 large Banana, 2 medium Eggspinch Baking Powder, spinkling Vanilla Extract1 tsp Oil, 25g Pecan Nuts, 125g Raspberries", instructions: "In a bowl, mash the banana with a fork until it resembles a thick purée.Stir in the eggs, baking powder and vanilla.Heat a large non-stick frying pan or pancake pan over a medium heat and brush with half the oil.Using half the batter, spoon two pancakes into the pan, cook for 1-2 mins each side, then tip onto a plate.Repeat the process with the remaining oil and batter.Top the pancakes with the pecans and raspberries." },
                { id: 6, image: "./images/recipes/chocolate-souffle.jpg", name: "Chocolate Souffle", category: "Desserts", time: "20 mins", level: "Easy", likes: 18, ingredients: "142ml Single Cream, 25g Caster Sugar, 100g Dark Chocolate, 25g Butterdrizzle Butter, 50g Caster Sugar, 175g Dark Chocolate, 2 tbs Double Cream, 4 Egg Yolks, 5 Egg White, 2 tbs Double Cream to serve Icing Sugar", instructions: "Heat oven to 220C/fan 200C/gas 7 and place a baking tray on the top shelf.For the sauce, heat the cream and sugar until boiling.Remove from the heat, stir in the chocolate and butter until melted, then keep warm.Brush 6 x 150ml ramekins with melted butter, sprinkle with the 2 tbsp caster sugar, then tip out any excess.Melt the chocolate and cream in a bowl over a pan of simmering water, cool, then mix in the egg yolks.Whisk the egg whites until they hold their shape, then add the sugar, 1 tbsp at a time, whisking back to the same consistency.Mix a spoonful into the chocolate, then gently fold in the rest.Working quickly, fill the ramekins, wipe the rims clean and run your thumb around the edges.Turn oven down to 200C/fan 180C/gas 6, place the ramekins onto the baking tray, then bake for 8-10 mins until risen with a slight wobble.Don’t open the oven door too early as this may make them collapse.Once the soufflés are ready, dust with icing sugar, scoop a small hole from their tops, then pour in some of the hot chocolate sauce.Replace the lids and serve straight away." },
                { id: 7, image: "./images/recipes/pina-colada.jpg", name: "Pina Colada", category: "Drinks", time: "20 mins", level: "Easy", likes: 18, ingredients: "3 tblsp Coconut milk, 3 tblsp Pineapple", instructions: "Mix with crushed ice in blender until smooth.Pour into chilled glass, garnish and serve. GlassServe: Collins glass" },
                { id: 8, image: "./images/recipes/strawberry-lemonade.jpg", name: "Strawberry Lemonade", category: "Drinks", time: "20 mins", level: "Easy", likes: 18, ingredients: "Juice of 1 Lemon, 1 tblsp Sugar, 8-10 ripe Strawberries, 1 cup Water", instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice. Glass Serve: Collins Glass" }
=======
=======
>>>>>>> a0583ad (Pagina Principal finalizada y pagina de la receta tamb)
=======
>>>>>>> c8a738e (inicio pagina de inicio de sesion)
=======
>>>>>>> 5d15aff (blablaa)
=======
>>>>>>> 0797de7 (Pagina de recuperacion de contrasena lista)
=======
>>>>>>> bd23b2a (Pagina perdil Finalizada)
=======
>>>>>>> 82a112e (Arreglo del Nav bar1)
                { id: 1, image: "./imgs/Rugelach.jpg", name: "Sushi", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber", instructions: "STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice.Lay a nori sheet on the mat, shiny-side down.Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear. STEP 2 Spread over some Japanese mayonnaise.Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice. STEP 3 Add the filling.Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber. STEP 4 Roll it up.Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll. STEP 5 Stick down the sides like a stamp.When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll. STEP 6 Wrap in cling film.Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film. STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon.Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film. STEP 8 Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one. STEP 9 Tip it out like a sandcastle.Turn block of sushi onto a chopping board.Get a grown-up to cut into fingers, then remove the cling film. STEP 10 TO MAKE SUSHI BALLS: Choose your topping.Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping. STEP 11 Make into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve." },
                { id: 2, image: "./imgs/Rugelach.jpg", name: "Fettuccine Alfredo", category: "Dinner", time: "20 mins", level: "Easy", likes: 18, ingredients: "1 lb Fettuccine, 1/2 cup Heavy Cream, 1/2 cup Butter, 1/2 cup Parmesan, 2 tbsp Parsley, Black Pepper", instructions: "Cook pasta according to package instructions in a large pot of boiling water and salt. Add heavy cream and butter to a large skillet over medium heat until the cream bubbles and the butter melts. Whisk in parmesan and add seasoning (salt and black pepper). Let the sauce thicken slightly and then add the pasta and toss until coated in sauce. Garnish with parsley, and it's ready." },
                { id: 3, image: "./imgs/Rugelach.jpg", name: "Chicken Enchilada Casserole", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "14 oz jar Enchilada sauce, 3 Cups shredded Monterey Jack cheese, 6 corn tortillas, 2 chicken breasts", instructions: "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot.Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes.No water is needed, the chicken will cook in the Enchilada sauce.Make sure you stir occasionally so that it doesn't stick to the bottom.Remove chicken from the pot and shred with two forks.Preheat oven to 375 F degrees.Start layering the casserole.Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish.I used a longer baking dish, so that I can put 2 corn tortillas across.Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce.Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese.Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese.Bake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top.Serve warm." },
=======
=======
>>>>>>> e7eb9f6 (Arreglo del css de la pagina del pefirl y uso de componentes2)
                { id: 1, image: "./imgs/Rugelach.jpg",imgCrown: "imgs/coronas/corona-oro.png", name: "Sushi", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber", instructions: "STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice.Lay a nori sheet on the mat, shiny-side down.Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear. STEP 2 Spread over some Japanese mayonnaise.Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice. STEP 3 Add the filling.Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber. STEP 4 Roll it up.Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll. STEP 5 Stick down the sides like a stamp.When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll. STEP 6 Wrap in cling film.Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film. STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon.Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film. STEP 8 Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one. STEP 9 Tip it out like a sandcastle.Turn block of sushi onto a chopping board.Get a grown-up to cut into fingers, then remove the cling film. STEP 10 TO MAKE SUSHI BALLS: Choose your topping.Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping. STEP 11 Make into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve." },
                { id: 2, image: "./imgs/Rugelach.jpg",imgCrown: "imgs/coronas/corona-plata.png", name: "Fettuccine Alfredo", category: "Dinner", time: "20 mins", level: "Easy", likes: 18, ingredients: "1 lb Fettuccine, 1/2 cup Heavy Cream, 1/2 cup Butter, 1/2 cup Parmesan, 2 tbsp Parsley, Black Pepper", instructions: "Cook pasta according to package instructions in a large pot of boiling water and salt. Add heavy cream and butter to a large skillet over medium heat until the cream bubbles and the butter melts. Whisk in parmesan and add seasoning (salt and black pepper). Let the sauce thicken slightly and then add the pasta and toss until coated in sauce. Garnish with parsley, and it's ready." },
                { id: 3, image: "./imgs/Rugelach.jpg",imgCrown: "imgs/coronas/corona-bronce.png", name: "Chicken Enchilada Casserole", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "14 oz jar Enchilada sauce, 3 Cups shredded Monterey Jack cheese, 6 corn tortillas, 2 chicken breasts", instructions: "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot.Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes.No water is needed, the chicken will cook in the Enchilada sauce.Make sure you stir occasionally so that it doesn't stick to the bottom.Remove chicken from the pot and shred with two forks.Preheat oven to 375 F degrees.Start layering the casserole.Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish.I used a longer baking dish, so that I can put 2 corn tortillas across.Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce.Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese.Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese.Bake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top.Serve warm." },
                
            ],
            recipes_underpudium:[
<<<<<<< HEAD
>>>>>>> 6a54e6b (Arreglo de componentes y recetas1)
=======
>>>>>>> e7eb9f6 (Arreglo del css de la pagina del pefirl y uso de componentes2)
=======
=======
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
=======
>>>>>>> 662e388 (Coneccion con el Api1)
=======
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
                { id: 1, image: "./imgs/Rugelach.jpg",imgCrown: "imgs/coronas/corona-oro.png", name: "Sushi", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber", instructions: "STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice.Lay a nori sheet on the mat, shiny-side down.Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear. STEP 2 Spread over some Japanese mayonnaise.Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice. STEP 3 Add the filling.Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber. STEP 4 Roll it up.Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll. STEP 5 Stick down the sides like a stamp.When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll. STEP 6 Wrap in cling film.Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film. STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon.Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film. STEP 8 Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one. STEP 9 Tip it out like a sandcastle.Turn block of sushi onto a chopping board.Get a grown-up to cut into fingers, then remove the cling film. STEP 10 TO MAKE SUSHI BALLS: Choose your topping.Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping. STEP 11 Make into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve." },
                { id: 2, image: "./imgs/Rugelach.jpg",imgCrown: "imgs/coronas/corona-plata.png", name: "Fettuccine Alfredo", category: "Dinner", time: "20 mins", level: "Easy", likes: 16, ingredients: "1 lb Fettuccine, 1/2 cup Heavy Cream, 1/2 cup Butter, 1/2 cup Parmesan, 2 tbsp Parsley, Black Pepper", instructions: "Cook pasta according to package instructions in a large pot of boiling water and salt. Add heavy cream and butter to a large skillet over medium heat until the cream bubbles and the butter melts. Whisk in parmesan and add seasoning (salt and black pepper). Let the sauce thicken slightly and then add the pasta and toss until coated in sauce. Garnish with parsley, and it's ready." },
                { id: 3, image: "./imgs/Rugelach.jpg",imgCrown: "imgs/coronas/corona-bronce.png", name: "Chicken Enchilada Casserole", category: "Lunch", time: "20 mins", level: "Easy", likes: 1, ingredients: "14 oz jar Enchilada sauce, 3 Cups shredded Monterey Jack cheese, 6 corn tortillas, 2 chicken breasts", instructions: "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot.Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes.No water is needed, the chicken will cook in the Enchilada sauce.Make sure you stir occasionally so that it doesn't stick to the bottom.Remove chicken from the pot and shred with two forks.Preheat oven to 375 F degrees.Start layering the casserole.Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish.I used a longer baking dish, so that I can put 2 corn tortillas across.Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce.Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese.Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese.Bake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top.Serve warm." },
                
            ],
            recipes_underpudium:[
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c6b5e0d (Utilizacion de componentes en todas las paginas)
=======
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
                { id: 4, image: "./imgs/Rugelach.jpg", name: "Big Mac", category: "Dinner", time: "20 mins", level: "Easy", likes: 18, ingredients: "400g Minced Beef, 2 tbs Olive Oil, 2 Sesame Seed Burger Buns, Chopped Onion, 1/4 Iceberg Lettuce, 2 sliced Cheese2 large Dill Pickles, 1 cup Mayonnaise, 2 tsp White Wine VinegarPinch Pepper2 tsp Mustard, 1 1/2 tsp Onion Salt1 1/2 tsp Garlic Powder, 1/2 tsp Paprika", instructions: "For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use.2.To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each.Place each onto a square of baking paper and flatten to form into four x 15cm circles.Heat oil in a large frypan over high heat.In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through.Remove from heat and keep warm.Repeat with remaining two patties.3.Carefully slice each burger bun into three acrossways, then lightly toast.4.To assemble the burgers, spread a little Big Mac sauce over the bottom base.Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices.Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce.Top with burger lid to serve.5.After waiting half an hour for your food to settle, go for a jog." },
                { id: 5, image: "./imgs/Rugelach.jpg", name: "Banana Pancakes", category: "Breakfast", time: "20 mins", level: "Easy", likes: 18, ingredients: "1 large Banana, 2 medium Eggspinch Baking Powder, spinkling Vanilla Extract1 tsp Oil, 25g Pecan Nuts, 125g Raspberries", instructions: "In a bowl, mash the banana with a fork until it resembles a thick purée.Stir in the eggs, baking powder and vanilla.Heat a large non-stick frying pan or pancake pan over a medium heat and brush with half the oil.Using half the batter, spoon two pancakes into the pan, cook for 1-2 mins each side, then tip onto a plate.Repeat the process with the remaining oil and batter.Top the pancakes with the pecans and raspberries." },
                { id: 6, image: "./imgs/Rugelach.jpg", name: "Chocolate Souffle", category: "Desserts", time: "20 mins", level: "Easy", likes: 18, ingredients: "142ml Single Cream, 25g Caster Sugar, 100g Dark Chocolate, 25g Butterdrizzle Butter, 50g Caster Sugar, 175g Dark Chocolate, 2 tbs Double Cream, 4 Egg Yolks, 5 Egg White, 2 tbs Double Cream to serve Icing Sugar", instructions: "Heat oven to 220C/fan 200C/gas 7 and place a baking tray on the top shelf.For the sauce, heat the cream and sugar until boiling.Remove from the heat, stir in the chocolate and butter until melted, then keep warm.Brush 6 x 150ml ramekins with melted butter, sprinkle with the 2 tbsp caster sugar, then tip out any excess.Melt the chocolate and cream in a bowl over a pan of simmering water, cool, then mix in the egg yolks.Whisk the egg whites until they hold their shape, then add the sugar, 1 tbsp at a time, whisking back to the same consistency.Mix a spoonful into the chocolate, then gently fold in the rest.Working quickly, fill the ramekins, wipe the rims clean and run your thumb around the edges.Turn oven down to 200C/fan 180C/gas 6, place the ramekins onto the baking tray, then bake for 8-10 mins until risen with a slight wobble.Don’t open the oven door too early as this may make them collapse.Once the soufflés are ready, dust with icing sugar, scoop a small hole from their tops, then pour in some of the hot chocolate sauce.Replace the lids and serve straight away." },
                { id: 7, image: "./imgs/Rugelach.jpg", name: "Pina Colada", category: "Drinks", time: "20 mins", level: "Easy", likes: 18, ingredients: "3 tblsp Coconut milk, 3 tblsp Pineapple", instructions: "Mix with crushed ice in blender until smooth.Pour into chilled glass, garnish and serve. GlassServe: Collins glass" },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                { id: 8, image: "./imgs/Rugelach.jpg", name: "Strawberry Lemonade", category: "Drinks", time: "20 mins", level: "Easy", likes: 18, ingredients: "Juice of 1 Lemon, 1 tblsp Sugar, 8-10 ripe Strawberries, 1 cup Water", instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice. Glass Serve: Collins Glass" }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bc6fb1a (Pagina principal y top 10 finalizada con place holder)
            ]
=======
=======
>>>>>>> c8a738e (inicio pagina de inicio de sesion)
=======
>>>>>>> 5d15aff (blablaa)
=======
>>>>>>> 0797de7 (Pagina de recuperacion de contrasena lista)
=======
>>>>>>> bd23b2a (Pagina perdil Finalizada)
=======
>>>>>>> 82a112e (Arreglo del Nav bar1)
=======
=======
>>>>>>> 64333df (Arreglo de los cards y diseño del nav bar1)
                { id: 1, image: "./imgs/Rugelach.jpg",imgCrown: "imgs/coronas/corona-oro.png", name: "Sushi", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber", instructions: "STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice.Lay a nori sheet on the mat, shiny-side down.Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear. STEP 2 Spread over some Japanese mayonnaise.Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice. STEP 3 Add the filling.Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber. STEP 4 Roll it up.Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll. STEP 5 Stick down the sides like a stamp.When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll. STEP 6 Wrap in cling film.Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film. STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon.Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film. STEP 8 Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one. STEP 9 Tip it out like a sandcastle.Turn block of sushi onto a chopping board.Get a grown-up to cut into fingers, then remove the cling film. STEP 10 TO MAKE SUSHI BALLS: Choose your topping.Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping. STEP 11 Make into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve." },
                { id: 2, image: "./imgs/Rugelach.jpg",imgCrown: "imgs/coronas/corona-plata.png", name: "Fettuccine Alfredo", category: "Dinner", time: "20 mins", level: "Easy", likes: 18, ingredients: "1 lb Fettuccine, 1/2 cup Heavy Cream, 1/2 cup Butter, 1/2 cup Parmesan, 2 tbsp Parsley, Black Pepper", instructions: "Cook pasta according to package instructions in a large pot of boiling water and salt. Add heavy cream and butter to a large skillet over medium heat until the cream bubbles and the butter melts. Whisk in parmesan and add seasoning (salt and black pepper). Let the sauce thicken slightly and then add the pasta and toss until coated in sauce. Garnish with parsley, and it's ready." },
                { id: 3, image: "./imgs/Rugelach.jpg",imgCrown: "imgs/coronas/corona-bronce.png", name: "Chicken Enchilada Casserole", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "14 oz jar Enchilada sauce, 3 Cups shredded Monterey Jack cheese, 6 corn tortillas, 2 chicken breasts", instructions: "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot.Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes.No water is needed, the chicken will cook in the Enchilada sauce.Make sure you stir occasionally so that it doesn't stick to the bottom.Remove chicken from the pot and shred with two forks.Preheat oven to 375 F degrees.Start layering the casserole.Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish.I used a longer baking dish, so that I can put 2 corn tortillas across.Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce.Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese.Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese.Bake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top.Serve warm." },
                //{ id: 4, image: "./imgs/Rugelach.jpg", name: "Big Mac", category: "Dinner", time: "20 mins", level: "Easy", likes: 18, ingredients: "400g Minced Beef, 2 tbs Olive Oil, 2 Sesame Seed Burger Buns, Chopped Onion, 1/4 Iceberg Lettuce, 2 sliced Cheese2 large Dill Pickles, 1 cup Mayonnaise, 2 tsp White Wine VinegarPinch Pepper2 tsp Mustard, 1 1/2 tsp Onion Salt1 1/2 tsp Garlic Powder, 1/2 tsp Paprika", instructions: "For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use.2.To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each.Place each onto a square of baking paper and flatten to form into four x 15cm circles.Heat oil in a large frypan over high heat.In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through.Remove from heat and keep warm.Repeat with remaining two patties.3.Carefully slice each burger bun into three acrossways, then lightly toast.4.To assemble the burgers, spread a little Big Mac sauce over the bottom base.Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices.Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce.Top with burger lid to serve.5.After waiting half an hour for your food to settle, go for a jog." },
                //{ id: 5, image: "./imgs/Rugelach.jpg", name: "Banana Pancakes", category: "Breakfast", time: "20 mins", level: "Easy", likes: 18, ingredients: "1 large Banana, 2 medium Eggspinch Baking Powder, spinkling Vanilla Extract1 tsp Oil, 25g Pecan Nuts, 125g Raspberries", instructions: "In a bowl, mash the banana with a fork until it resembles a thick purée.Stir in the eggs, baking powder and vanilla.Heat a large non-stick frying pan or pancake pan over a medium heat and brush with half the oil.Using half the batter, spoon two pancakes into the pan, cook for 1-2 mins each side, then tip onto a plate.Repeat the process with the remaining oil and batter.Top the pancakes with the pecans and raspberries." },
                //{ id: 6, image: "./imgs/Rugelach.jpg", name: "Chocolate Souffle", category: "Desserts", time: "20 mins", level: "Easy", likes: 18, ingredients: "142ml Single Cream, 25g Caster Sugar, 100g Dark Chocolate, 25g Butterdrizzle Butter, 50g Caster Sugar, 175g Dark Chocolate, 2 tbs Double Cream, 4 Egg Yolks, 5 Egg White, 2 tbs Double Cream to serve Icing Sugar", instructions: "Heat oven to 220C/fan 200C/gas 7 and place a baking tray on the top shelf.For the sauce, heat the cream and sugar until boiling.Remove from the heat, stir in the chocolate and butter until melted, then keep warm.Brush 6 x 150ml ramekins with melted butter, sprinkle with the 2 tbsp caster sugar, then tip out any excess.Melt the chocolate and cream in a bowl over a pan of simmering water, cool, then mix in the egg yolks.Whisk the egg whites until they hold their shape, then add the sugar, 1 tbsp at a time, whisking back to the same consistency.Mix a spoonful into the chocolate, then gently fold in the rest.Working quickly, fill the ramekins, wipe the rims clean and run your thumb around the edges.Turn oven down to 200C/fan 180C/gas 6, place the ramekins onto the baking tray, then bake for 8-10 mins until risen with a slight wobble.Don’t open the oven door too early as this may make them collapse.Once the soufflés are ready, dust with icing sugar, scoop a small hole from their tops, then pour in some of the hot chocolate sauce.Replace the lids and serve straight away." },
                //{ id: 7, image: "./imgs/Rugelach.jpg", name: "Pina Colada", category: "Drinks", time: "20 mins", level: "Easy", likes: 18, ingredients: "3 tblsp Coconut milk, 3 tblsp Pineapple", instructions: "Mix with crushed ice in blender until smooth.Pour into chilled glass, garnish and serve. GlassServe: Collins glass" },
                //{ id: 8, image: "./imgs/Rugelach.jpg", name: "Strawberry Lemonade", category: "Drinks", time: "20 mins", level: "Easy", likes: 18, ingredients: "Juice of 1 Lemon, 1 tblsp Sugar, 8-10 ripe Strawberries, 1 cup Water", instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice. Glass Serve: Collins Glass" }
<<<<<<< HEAD
>>>>>>> 6ccab86 (Arreglo del diseño de los Cards1)
=======
>>>>>>> 64333df (Arreglo de los cards y diseño del nav bar1)
            ],
=======
=======
>>>>>>> e7eb9f6 (Arreglo del css de la pagina del pefirl y uso de componentes2)
=======
>>>>>>> c6b5e0d (Utilizacion de componentes en todas las paginas)
=======
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
                { id: 8, image: "./imgs/Rugelach.jpg", name: "Strawberr Lemonade", category: "Drinks", time: "20 mins", level: "Easy", likes: 18, ingredients: "Juice of 1 Lemon, 1 tblsp Sugar, 8-10 ripe Strawberries, 1 cup Water", instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice. Glass Serve: Collins Glass" },
                { id: 9, image: "./imgs/Rugelach.jpg", name: "Pizza Rolls", category: "Drinks", time: "20 mins", level: "Easy", likes: 18, ingredients: "Juice of 1 Lemon, 1 tblsp Sugar, 8-10 ripe Strawberries, 1 cup Water", instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice. Glass Serve: Collins Glass" },
                { id: 10, image: "./imgs/Rugelach.jpg", name: "Rice and Beans", category: "Drinks", time: "20 mins", level: "Easy", likes: 18, ingredients: "Juice of 1 Lemon, 1 tblsp Sugar, 8-10 ripe Strawberries, 1 cup Water", instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice. Glass Serve: Collins Glass" },
            ],
            
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6a54e6b (Arreglo de componentes y recetas1)
=======
>>>>>>> e7eb9f6 (Arreglo del css de la pagina del pefirl y uso de componentes2)
=======
>>>>>>> c6b5e0d (Utilizacion de componentes en todas las paginas)
=======
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
=======
                { id: 4, image: "./imgs/Rugelach.jpg", name: "Big Mac", category: "Dinner", time: "20 mins", level: "Easy", likes: 18, ingredients: "400g Minced Beef, 2 tbs Olive Oil, 2 Sesame Seed Burger Buns, Chopped Onion, 1/4 Iceberg Lettuce, 2 sliced Cheese2 large Dill Pickles, 1 cup Mayonnaise, 2 tsp White Wine VinegarPinch Pepper2 tsp Mustard, 1 1/2 tsp Onion Salt1 1/2 tsp Garlic Powder, 1/2 tsp Paprika", instructions: "For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use.2.To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each.Place each onto a square of baking paper and flatten to form into four x 15cm circles.Heat oil in a large frypan over high heat.In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through.Remove from heat and keep warm.Repeat with remaining two patties.3.Carefully slice each burger bun into three acrossways, then lightly toast.4.To assemble the burgers, spread a little Big Mac sauce over the bottom base.Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices.Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce.Top with burger lid to serve.5.After waiting half an hour for your food to settle, go for a jog." },
            ],
            
>>>>>>> 662e388 (Coneccion con el Api1)
=======
                { id: 4, image: "./imgs/Rugelach.jpg", name: "Big Mac", category: "Dinner", time: "20 mins", level: "Easy", likes: 18, ingredients: "400g Minced Beef, 2 tbs Olive Oil, 2 Sesame Seed Burger Buns, Chopped Onion, 1/4 Iceberg Lettuce, 2 sliced Cheese2 large Dill Pickles, 1 cup Mayonnaise, 2 tsp White Wine VinegarPinch Pepper2 tsp Mustard, 1 1/2 tsp Onion Salt1 1/2 tsp Garlic Powder, 1/2 tsp Paprika", instructions: "For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use.2.To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each.Place each onto a square of baking paper and flatten to form into four x 15cm circles.Heat oil in a large frypan over high heat.In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through.Remove from heat and keep warm.Repeat with remaining two patties.3.Carefully slice each burger bun into three acrossways, then lightly toast.4.To assemble the burgers, spread a little Big Mac sauce over the bottom base.Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices.Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce.Top with burger lid to serve.5.After waiting half an hour for your food to settle, go for a jog." },
            ],
            
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
            selected_recipes: [
                { id: 1, image: "./imgs/Rugelach.jpg", name: "Sushi", category: "Lunch", 
                time: "20 mins", level: "Easy", likes: 18, ingredients: "300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber", instructions: "STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice.Lay a nori sheet on the mat, shiny-side down.Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear. STEP 2 Spread over some Japanese mayonnaise.Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice. STEP 3 Add the filling.Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber. STEP 4 Roll it up.Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll. STEP 5 Stick down the sides like a stamp.When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll. STEP 6 Wrap in cling film.Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film. STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon.Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film. STEP 8 Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one. " },
            
            ],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a0583ad (Pagina Principal finalizada y pagina de la receta tamb)
=======
>>>>>>> c8a738e (inicio pagina de inicio de sesion)
=======
>>>>>>> 5d15aff (blablaa)
=======
>>>>>>> 0797de7 (Pagina de recuperacion de contrasena lista)
=======
=======
>>>>>>> 82a112e (Arreglo del Nav bar1)
=======
>>>>>>> 6ccab86 (Arreglo del diseño de los Cards1)
=======
>>>>>>> 64333df (Arreglo de los cards y diseño del nav bar1)
=======
>>>>>>> 6a54e6b (Arreglo de componentes y recetas1)
=======
>>>>>>> e7eb9f6 (Arreglo del css de la pagina del pefirl y uso de componentes2)
=======
>>>>>>> c6b5e0d (Utilizacion de componentes en todas las paginas)
=======
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
=======
>>>>>>> 662e388 (Coneccion con el Api1)
=======
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
            my_profile: [
                { id: 1, image: "./imgs/perfiles/perfil1.jpg", name: "Percy Benavides", 
                instructions: "Preferencia en comidas vegetarianas y de facil preparacion" },
            
            ],
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bd23b2a (Pagina perdil Finalizada)
=======
>>>>>>> 82a112e (Arreglo del Nav bar1)
=======
>>>>>>> 6ccab86 (Arreglo del diseño de los Cards1)
=======
>>>>>>> 64333df (Arreglo de los cards y diseño del nav bar1)
=======
>>>>>>> 6a54e6b (Arreglo de componentes y recetas1)
=======
>>>>>>> e7eb9f6 (Arreglo del css de la pagina del pefirl y uso de componentes2)
=======
>>>>>>> c6b5e0d (Utilizacion de componentes en todas las paginas)
=======
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
=======
            recipe:{},
            idRecipe: 0
>>>>>>> 662e388 (Coneccion con el Api1)
=======
            recipe:{},
            idRecipe: 0
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
        }
    },
    mounted: function () {
        this.all_recipes = this.recipes;
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> bc6fb1a (Pagina principal y top 10 finalizada con place holder)
=======
    mounted: function () {
        this.all_recipes = this.selected_recipes;
    },
>>>>>>> a0583ad (Pagina Principal finalizada y pagina de la receta tamb)
=======
    mounted: function () {
        this.all_recipes = this.selected_recipes;
    },
>>>>>>> c8a738e (inicio pagina de inicio de sesion)
=======
    mounted: function () {
        this.all_recipes = this.selected_recipes;
    },
>>>>>>> 5d15aff (blablaa)
=======
    mounted: function () {
        this.all_recipes = this.selected_recipes;
    },
>>>>>>> 0797de7 (Pagina de recuperacion de contrasena lista)
    methods: {
        onClickLike(index) {
            //console.log("Xdddddd");
=======
=======
>>>>>>> 82a112e (Arreglo del Nav bar1)
=======
>>>>>>> 6ccab86 (Arreglo del diseño de los Cards1)
=======
>>>>>>> 64333df (Arreglo de los cards y diseño del nav bar1)
=======
>>>>>>> 6a54e6b (Arreglo de componentes y recetas1)
=======
>>>>>>> e7eb9f6 (Arreglo del css de la pagina del pefirl y uso de componentes2)
=======
>>>>>>> c6b5e0d (Utilizacion de componentes en todas las paginas)
=======
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
=======
>>>>>>> 662e388 (Coneccion con el Api1)
=======
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
    mounted: function () {
        this.all_recipes = this.selected_recipes;
    },
    mounted: function () {
        this.all_recipes = this.my_profile;
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    methods: {
        onClickLike(index) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bd23b2a (Pagina perdil Finalizada)
=======
>>>>>>> 82a112e (Arreglo del Nav bar1)
=======
>>>>>>> 6ccab86 (Arreglo del diseño de los Cards1)
=======
>>>>>>> 64333df (Arreglo de los cards y diseño del nav bar1)
=======
>>>>>>> 6a54e6b (Arreglo de componentes y recetas1)
=======
>>>>>>> e7eb9f6 (Arreglo del css de la pagina del pefirl y uso de componentes2)
            this.recipes[index].likes += 1;
        },
        onClickUnlike(index) {
            if (this.recipes[index].likes > 0) this.recipes[index].likes -= 1;
=======
=======
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
=======
=======
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
    mounted: function(){
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
        })
        .then(
            (response) => {
                let items = response.data.meals;
                console.log(items);

                this.recipes_underpudium = [];

                items.forEach(element => {
                    const numId = parseInt(element.idMeal);
                    this.recipes_underpudium.push({
                        id: numId,
                        image: element.strMealThumb,
                        name: element.strMeal
                    })
                })
            }
        )
        .catch(
            error => console.log(error)
        )
    },
<<<<<<< HEAD
>>>>>>> 662e388 (Coneccion con el Api1)
=======
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
    
    methods: {
        onClickLike(index) {
            this.recipes[index].likes += 1;
            console.log(recipes[index].likes);
        },
        onClickUnlike(index) {
            if (this.recipes[index].likes > 0) this.recipes[index].likes -= 1;
            
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c6b5e0d (Utilizacion de componentes en todas las paginas)
=======
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
=======
>>>>>>> 662e388 (Coneccion con el Api1)
=======
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
        },
        onClickCategory(category) {
            if (category == "all") {
                this.recipes = this.all_recipes;
            } else {
                this.recipes = this.all_recipes;
                let recipesInCategory = this.recipes.filter(function (el) {
                    return el.category === category;
                });
                //console.log("filtered ->" + recipesInCategory.length);
                if (recipesInCategory.length > 0) {
                    this.hasRecipes = true;
                    this.recipes = recipesInCategory;
                } else {
                    this.hasRecipes = false;
                }

            }
            //rome-ignore lint/style/useTemplate: <explanation>
            //console.log("filtered ->" + recipesInCategory);

        },
        onClickViewRecipe(index) {
<<<<<<< HEAD
<<<<<<< HEAD
            //console.log("Index ->" + index);
=======
            console.log("Index ->" + index);
>>>>>>> 662e388 (Coneccion con el Api1)
=======
            console.log("Index ->" + index);
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
            this.selectedIndex = index;
        },
        onClickPrev() {
            this.selectedIndex--;
            if(this.selectedIndex<0){
                this.selectedIndex=this.recipes.length-1;
            }

        },
        onClickNext() {
            this.selectedIndex++;
            if(this.selectedIndex>this.recipes.length-1){
                this.selectedIndex=0;
            }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a0583ad (Pagina Principal finalizada y pagina de la receta tamb)
=======
>>>>>>> c8a738e (inicio pagina de inicio de sesion)
=======
>>>>>>> 5d15aff (blablaa)
=======
>>>>>>> 0797de7 (Pagina de recuperacion de contrasena lista)
=======
>>>>>>> bd23b2a (Pagina perdil Finalizada)
=======
>>>>>>> 82a112e (Arreglo del Nav bar1)
=======
>>>>>>> 6ccab86 (Arreglo del diseño de los Cards1)
=======
>>>>>>> 64333df (Arreglo de los cards y diseño del nav bar1)
=======
>>>>>>> 6a54e6b (Arreglo de componentes y recetas1)
=======
>>>>>>> e7eb9f6 (Arreglo del css de la pagina del pefirl y uso de componentes2)
=======
>>>>>>> c6b5e0d (Utilizacion de componentes en todas las paginas)
=======
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
=======
>>>>>>> 662e388 (Coneccion con el Api1)
=======
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
        },

        //Our Best Recipes

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        onClickLike(index) {
            //console.log("btn - click");
            this.best_recipes[index].likes += 1;
        },
        onClickUnlike(index) {
            //console.log("btn - click");
            if (this.best_recipes[index].likes > 0) this.best_recipes[index].likes -= 1;
        },
=======
>>>>>>> c6b5e0d (Utilizacion de componentes en todas las paginas)
=======
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
=======
>>>>>>> 662e388 (Coneccion con el Api1)
=======
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
        onClickCategory(category) {

            if (category == "All") {
                this.best_recipes = this.all_recipes;
            } else {
                this.best_recipes = this.all_recipes;
                let recipesInCategory = this.best_recipes.filter(function (el) {

                    return el.category === category;
                });
                //console.log("filtered ->" + recipesInCategory.length);

                if (recipesInCategory.length > 0) {
                    this.hasRecipe = true;
                    this.best_recipes = recipesInCategory;
                } else {
                    this.hasRecipes = false;
                }
            }

        },

<<<<<<< HEAD
<<<<<<< HEAD
        onClickViewRecipe(index) {
            console.log("INDEX ->" + index + "LENGTH -> " + this.selectedIndex);
            this.selectedIndex = index;
=======
=======
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
        onClickViewRecipe_podio(index) {
            //console.log("INDEX ->" + index + "LENGTH -> " + this.selectedIndex);
            this.selectedIndex = index;
            //console.log(index);

            //get recipe details

            

            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.selectedIndex
            })
                .then(
                    (response) => {

                        let items = response.data.meals[0];
                        console.log(items);
                        this.recipe.id = index;
                        this.recipe.image = items.strMealThumb;
                        this.recipe.name = items.strMeal;
                        this.recipe.category = items.strCategory;

                    }
                )
                .catch(
                    error => console.log(error)
                );
<<<<<<< HEAD
>>>>>>> 662e388 (Coneccion con el Api1)
=======
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
        },
        onClickNext() {
            //console.log("INDEX ->" + this.selectedIndex)
            this.selectedIndex++;
            if (this.selectedIndex > this.best_recipes.length - 1) {
                this.selectedIndex = 0;
            }
        },
        onClickPrev() {
            this.selectedIndex--;
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.best_recipes.length - 1;
            }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bc6fb1a (Pagina principal y top 10 finalizada con place holder)
=======
>>>>>>> a0583ad (Pagina Principal finalizada y pagina de la receta tamb)
=======
>>>>>>> c8a738e (inicio pagina de inicio de sesion)
=======
>>>>>>> 5d15aff (blablaa)
=======
>>>>>>> 0797de7 (Pagina de recuperacion de contrasena lista)
=======
>>>>>>> bd23b2a (Pagina perdil Finalizada)
=======
>>>>>>> 82a112e (Arreglo del Nav bar1)
=======
>>>>>>> 6ccab86 (Arreglo del diseño de los Cards1)
=======
>>>>>>> 64333df (Arreglo de los cards y diseño del nav bar1)
=======
>>>>>>> 6a54e6b (Arreglo de componentes y recetas1)
=======
>>>>>>> e7eb9f6 (Arreglo del css de la pagina del pefirl y uso de componentes2)
=======
>>>>>>> c6b5e0d (Utilizacion de componentes en todas las paginas)
=======
>>>>>>> 1126408 (Arreglo de los componentes faltantes y responsible completado al 70%)
=======
>>>>>>> 4a79868 (Responsive completado al 101)
=======
>>>>>>> 662e388 (Coneccion con el Api1)
=======
>>>>>>> 7ff8081 (Arreglo de diseño y de responsive tras conectar el api1)
        }

    }

});