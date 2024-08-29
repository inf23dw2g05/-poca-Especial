const express = require('express');
const router = express.Router();
const auth = require('../midlewares/auth');
const passport = require('../midlewares/passport');

const ProductController = require('../controllers/ProductController');
const ProductCategoryController = require('../controllers/ProductCategoryController');
const UserController = require('../controllers/UserController');
const CartController = require('../controllers/CartController');
const AuthController = require('../controllers/AuthController');

// Rotas de categoria de produtos
router.get('/ProductCategories',ProductCategoryController.retrieveProductCategories); // Protected
router.get('/ProductCategories/:ID',ProductCategoryController.retrieveProductCategory); // Updated
router.post('/ProductCategories',ProductCategoryController.createProductCategory); // Protected
router.put('/ProductCategories/:ID', ProductCategoryController.updateProductCategory); // Updated
router.delete('/ProductCategories/:ID', ProductCategoryController.deleteProductCategory); // Updated

// Rotas de produtos
router.get('/Products', ProductController.retrieveProducts); // Protected
router.get('/Products/:ID', ProductController.retrieveProduct); // Updated
router.post('/Products', ProductController.createProduct); // Protected
router.put('/Products/:ID', ProductController.updateProduct); // Updated
router.delete('/Products/:ID', ProductController.deleteProduct); // Updated


// Rotas de usuários
router.get('/Users', UserController.retrieveUsers); // Protected
router.get('/Users/:ID', UserController.retrieveUser); // Updated
router.post('/Users', UserController.createUsers); // Protected
router.put('/Users/:ID', UserController.updateUsers); // Updated
router.delete('/Users/:ID', UserController.deleteUsers); // Updated

// Rotas de carrinho
router.get('/Cart', CartController.listCartItems); // Protected
router.post('/Cart', CartController.addProductToCart); // Protected
router.put('/Cart/:ID', CartController.updateCartItem); // Updated
router.delete('/Cart/:ID', CartController.removeProductFromCart); // Updated

// Routes for Authentication
router.get('/login', AuthController.login);
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error('Logout error:', err);
            return res.status(500).send('Logout failed');
        }
        res.redirect('/'); // Redireciona para a página inicial ou de login
    });
});

router.get('/', auth, AuthController.protected);
router.get('/auth/github', passport.authenticate("github", { scope: ["user:email"] }), AuthController.authGitHub);
router.get('/auth/github/callback', passport.authenticate("github", { failureRedirect: "/login" }), AuthController.authCallback);
router.get('/me', auth, AuthController.me);
router.get('/githubme', auth, AuthController.gitHubMe);


module.exports = router;