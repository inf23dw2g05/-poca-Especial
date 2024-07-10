const express = require('express');
const router = express.Router();
const auth = require('../midlewares/auth');
const passport = require('../midlewares/passport');

const ProductController = require('../controllers/ProductController');
const UserController = require('../controllers/UserController');
const CartController = require('../controllers/CartController');
const AuthController = require('../controllers/AuthController');

// Rotas de produtos
router.get('/ProductCategories', ProductController.retrieveProductCategories);
router.get('/ProductCategories/:ID', ProductController.retrieveProductCategory); // Updated
router.post('/ProductCategories', ProductController.createProductCategory);
router.put('/ProductCategories/:ID', ProductController.updateProductCategory); // Updated
router.delete('/ProductCategories/:ID', ProductController.deleteProductCategory); // Updated

// Rotas de usuários
router.get('/Users', UserController.retrieveUsers);
router.get('/Users/:ID', UserController.retrieveUser); // Updated
router.post('/Users', UserController.createUsers);
router.put('/Users/:ID', UserController.updateUsers); // Updated
router.delete('/Users/:ID', UserController.deleteUsers); // Updated

// Rotas de carrinho
router.get('/Cart', CartController.listCartItems);
router.post('/Cart', CartController.addProductToCart);
router.put('/Cart/:ID', CartController.updateCartItem); // Updated
router.delete('/Cart/:ID', CartController.removeProductFromCart); // Updated

// Routes for Authentication
router.get('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/', auth, AuthController.protected);
router.get('/auth/github', passport.authenticate("github", { scope: ["user:email"] }), AuthController.authGitHub);
router.get('/auth/github/callback', passport.authenticate("github", { failureRedirect: "/login" }), AuthController.authCallback);
router.get('/me', auth, AuthController.me);
router.get('/githubme', auth, AuthController.gitHubMe);

module.exports = router;