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
router.get('/ProductCategories/:id', ProductController.retrieveProductCategory);
router.post('/ProductCategories', ProductController.createProductCategory);
router.put('/ProductCategories/:id', ProductController.updateProductCategory);
router.delete('/ProductCategories/:id', ProductController.deleteProductCategory);

// Rotas de usuários
router.get('/Users', UserController.retrieveUsers);
router.get('/Users/:ID', UserController.retrieveUser);
router.post('/Users', UserController.createUsers);
router.put('/Users/:ID', UserController.updateUsers);
router.delete('/Users/:ID', UserController.deleteUsers);

// Rotas de carrinho
router.get('/cart', CartController.listCartItems);
router.post('/cart', CartController.addProductToCart);
router.put('/cart/:CartID', CartController.updateCartItem);
router.delete('/cart/:CartID', CartController.removeProductFromCart);

// Routes for Authentication
router.get('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/', auth, AuthController.protected);
router.get('/auth/github', passport.authenticate("github", { scope: ["user:email"] }), AuthController.authGitHub);
router.get('/auth/github/callback', passport.authenticate("github", { failureRedirect: "/login" }), AuthController.authCallback);
router.get('/me', auth, AuthController.me);
router.get('/githubme', auth, AuthController.gitHubMe);

module.exports = router;