### E-commerce Controllers

CartController: Handles the creation, retrieval, update, and deletion of carts. Endpoints include:

* GET /Carts - Retrieve all carts.
* POST /Carts - Create a new cart.
* GET /Carts/{CartID} - Retrieve a specific cart.
* PUT /Carts/{CartID} - Update a specific cart.
* DELETE /Carts/{CartID} - Delete a specific cart.

CartCategoriesController: Manages cart categories, enabling users to organize tasks into categories. Endpoints include:

* GET /CartCategories - Retrieve all Cart categories.
* POST /CartCategories - Create a new Cart category.
* GET /CartCategories/{CategoryID} - Retrieve a specific Cart category.
* PUT /CartCategories/{CategoryID} - Update a specific Cart category.
* DELETE /CartCategories/{CategoryID} - Delete a specific Cart category.

ProductController: Manages the statuses of Products to track progress. Endpoints include:

* GET /Products - Retrieve all task Products.
* POST /Products - Create a new Product.
* GET /Product/{ProductID} - Retrieve a specific Product.
* PUT /Product/{ProductID} - Update a specific Product.
* DELETE /Product/{ProductID} - Delete a specific Product.

UsersController: Manages user information and operations. Endpoints include:

* GET /Users - Retrieve all users.
* POST /Users - Create a new user.
* GET /Users/{UserID} - Retrieve a specific user.
* PUT /Users/{UserID} - Update a specific user.
* DELETE /Users/{UserID} - Delete a specific user.
