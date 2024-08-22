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
router.get('/ProductCategories'/*auth*/, ProductCategoryController.retrieveProductCategories); // Protected
router.get('/ProductCategories/:ID'/*auth*/, ProductCategoryController.retrieveProductCategory); // Updated
router.post('/ProductCategories'/*auth*/, ProductCategoryController.createProductCategory); // Protected
router.put('/ProductCategories/:ID'/*auth*/, ProductCategoryController.updateProductCategory); // Updated
router.delete('/ProductCategories/:ID'/*auth*/, ProductCategoryController.deleteProductCategory); // Updated

// Rotas de produtos
router.get('/Products', passport.authenticate("github", { failureRedirect: "/login" }), ProductController.retrieveProducts); // Protected
router.get('/Products/:ID'/*auth*/, ProductController.retrieveProduct); // Updated
router.post('/Products'/*auth*/, ProductController.createProduct); // Protected
router.put('/Products/:ID'/*auth*/, ProductController.updateProduct); // Updated
router.delete('/Products/:ID'/*auth*/, ProductController.deleteProduct); // Updated


// Rotas de usuários
router.get('/Users', passport.authenticate("github", { failureRedirect: "/login" }), UserController.retrieveUsers); // Protected
router.get('/Users/:ID'/*auth*/, UserController.retrieveUser); // Updated
router.post('/Users'/*auth*/, UserController.createUsers); // Protected
router.put('/Users/:ID'/*auth*/, UserController.updateUsers); // Updated
router.delete('/Users/:ID'/*auth*/, UserController.deleteUsers); // Updated

// Rotas de carrinho
router.get('/Cart'/*auth*/, CartController.listCartItems); // Protected
router.post('/Cart'/*auth*/, CartController.addProductToCart); // Protected
router.put('/Cart/:ID'/*auth*/, CartController.updateCartItem); // Updated
router.delete('/Cart/:ID'/*auth*/, CartController.removeProductFromCart); // Updated

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