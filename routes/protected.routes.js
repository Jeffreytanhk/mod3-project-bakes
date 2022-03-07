const express = require('express');
const router = express.Router();
const jwtauthenticate = require("../middleware/jwtauthenticate");

router.use("/", (req, res, next) => {
    console.log("You have called a protected route.");
    next();
});

router.use(jwtauthenticate.isLoggedIn); // calling jwt verification for everyone.

// All to Initialize Own Protected Routers Here
// Janice
const UserController = require("../controller/user.controller")
const userController = new UserController();
router.get("/user", jwtauthenticate.isAdmin, userController.showAll);
router.delete("/user", jwtauthenticate.canEditUser, userController.deleteUser);








// JianNan
const RecipeController = require('../controller/recipe.controller');
const recipeController = new RecipeController();
router.post('/recipe',recipeController.createNew);// post new recipe with the following properties sent as json in body: recipeName(string), description(string), servings(int), prepTimeInMin(int), difficultyLevel(EASY, INTERMEDIATE or HARD) 
router.put('/recipe/:recipeId', recipeController.updateRecipe); 
// update recipe belonging to the recipe own. Accept following properties sents as json in body:  recipeName(string), description(string), servings(int), prepTimeInMin(int), difficultyLevel(EASY, INTERMEDIATE or HARD), onSale(boolean)
router.delete('/recipe/:recipeId', recipeController.deleteRecipe); //delete recipeId belonging to the recipe owner only. Must include query ?confirm=true
// router.get('/recipe/:recipeId', recipe.retrieveByID);
// router.get('/recipe/:recipeId',recipeController.retrieveByID);
// router.delete('/recipe/:recipeId',recipe.deleteByID);















// Michelle















// Norman















// Manuspon
const PurchaseHistoriesController = require("../controller/purchasehistories.controller")
const purchaseHistoriesController = new PurchaseHistoriesController();
router.get("/purchasehistories/user/:userId", purchaseHistoriesController.showAll);
router.post("/purchasehistories", purchaseHistoriesController.newPurchase);
router.put("/purchasehistories",purchaseHistoriesController.updatePurchase);
router.delete("/purchasehistories/:purchaseId",purchaseHistoriesController.deletePurchase);






















module.exports = router;