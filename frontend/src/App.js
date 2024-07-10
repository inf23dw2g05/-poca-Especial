import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const baseURL = "http://localhost:3000"; // URL do backend

export default function App() {
  // Estados para as tabelas
  const [Users, setUsers] = useState([]);
  const [ProductCategories, setProductCategories] = useState([]);
  const [Products, setProducts] = useState([]);
  const [Cart, setCart] = useState([]);

  // Estados para novos registros
  const [newUser, setNewUser] = useState({ id: "", userName: "", email: "", pass: "", age: "", rol: "", firstName: "", lastName: "", createdAt: "", updatedAt: "" });
  const [newProductCategory, setNewProductCategory] = useState({ id: "", categoryName: "" });
  const [newProduct, setNewProduct] = useState({ id: "", name: "", description: "", image: "", price: "", priceUnit: "", categoryId: "", createdAt: "", updatedAt: "" });
  const [newCart, setNewCart] = useState({ id: "", userId: "", productId: "", quantity: "" });

  const [newPutUser, setNewPutUser] = useState({ id: "", userName: "", email: "", pass: "", age: "", rol: "", firstName: "", lastName: "", createdAt: "", updatedAt: "" });
  const [newPutProductCategory, setNewPutProductCategory] = useState({ id: "", categoryName: "" });
  const [newPutProduct, setNewPutProduct] = useState({ id: "", name: "", description: "", image: "", price: "", priceUnit: "", categoryId: "", createdAt: "", updatedAt: "" });
  const [newPutCart, setNewPutCart] = useState({ id: "", userId: "", productId: "", quantity: "" });
  const [githubUsername, setGithubUsername] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      // Use the token for authentication or store it in your application state
      console.log('Token:', token);
    }
  }, []);

  const handleGitHubLogin = () => {
    window.location.href = "http://localhost:3000/auth/github";
  };

  // Funçes CRUD para Users
  const fetchUsers = () => {
    axios.get(`${baseURL}/Users`).then(response => {
      setUsers(response.data);
    }).catch(error => {
      console.error("Failed to fetch users", error);
    });
  };

  const createUser = () => {
    axios.post(`${baseURL}/Users`, newUser).then(() => {
      fetchUsers();
      setNewUser({ id: "", userName: "", email: "", pass: "", age: "", rol: "", firstName: "", lastName: "", createdAt: "", updatedAt: "" });
    }).catch(error => {
      console.error("Failed to create user", error);
    });
  };

  const updateUser = () => {
    const { id, userName, email, pass, age, rol, firstName, lastName, createdAt, updatedAt } = newPutUser;
    if (!id || !userName || !email || !pass ) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Users/${id}`, { userName, email, pass, age, rol, firstName, lastName, createdAt, updatedAt })
      .then(() => {
        fetchUsers();
        setNewPutUser({ id: "", userName: "", email: "", pass: "", age: "", rol: "", firstName: "", lastName: "", createdAt: "", updatedAt: "" });
      })
      .catch(error => {
        console.error("Failed to update user", error);
      });
  };

  const deleteUser = (id) => {
    axios.delete(`${baseURL}/Users/${id}`).then(() => {
      fetchUsers();
    }).catch(error => {
      console.error("Failed to delete user", error);
    });
  };

  // Funções CRUD para ProductCategories
  const fetchProductCategories = () => {
    axios.get(`${baseURL}/ProductCategories`).then(response => {
      setProductCategories(response.data);
    }).catch(error => {
      console.error("Failed to fetch product categories", error);
    });
  };

  const createProductCategory = () => {
    axios.post(`${baseURL}/ProductCategories`, newProductCategory).then(() => {
      fetchProductCategories();
      setNewProductCategory({ id: "", categoryName: "" });
    }).catch(error => {
      console.error("Failed to create product category", error);
    });
  };

  const updateProductCategory = () => {
    const { id, categoryName } = newPutProductCategory;
    if (!id || !categoryName) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/ProductCategories/${id}`, { categoryName })
      .then(() => {
        fetchProductCategories();
        setNewPutProductCategory({ id: "", categoryName: "" });
      })
      .catch(error => {
        console.error("Failed to update product category", error);
      });
  };

  const deleteProductCategory = (id) => {
    axios.delete(`${baseURL}/ProductCategories/${id}`).then(() => {
      fetchProductCategories();
    }).catch(error => {
      console.error("Failed to delete product category", error);
    });
  };

  // Funções CRUD para Products
  const fetchProducts = () => {
    axios.get(`${baseURL}/Products`).then(response => {
      setProducts(response.data);
    }).catch(error => {
      console.error("Failed to fetch products", error);
    });
  };

  const createProduct = () => {
    axios.post(`${baseURL}/Products`, newProduct).then(() => {
      fetchProducts();
      setNewProduct({ id: "", name: "", description: "", image: "", price: "", priceUnit: "", categoryId: "", createdAt: "", updatedAt: "" });
    }).catch(error => {
      console.error("Failed to create product", error);
    });
  };

  const updateProduct = () => {
    const { id, name, description, image, price, priceUnit, categoryId, createdAt, updatedAt } = newPutProduct;
    if (!id || !name || !description || !image || !price || !priceUnit || !categoryId || !createdAt || !updatedAt) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Products/${id}`, { name, description, image, price, priceUnit, categoryId, createdAt, updatedAt })
      .then(() => {
        fetchProducts();
        setNewPutProduct({ id: "", name: "", description: "", image: "", price: "", priceUnit: "", categoryId: "", createdAt: "", updatedAt: "" });
      })
      .catch(error => {
        console.error("Failed to update product", error);
      });
  };

  const deleteProduct = (id) => {
    axios.delete(`${baseURL}/Products/${id}`).then(() => {
      fetchProducts();
    }).catch(error => {
      console.error("Failed to delete product", error);
    });
  };

  // Funções CRUD para Cart
  const fetchCart = () => {
    axios.get(`${baseURL}/Cart`).then(response => {
      setCart(response.data);
    }).catch(error => {
      console.error("Failed to fetch cart", error);
    });
  };

  const createCart = () => {
    axios.post(`${baseURL}/Cart`, newCart).then(() => {
      fetchCart();
      setNewCart({ id: "", userId: "", productId: "", quantity: "" });
    }).catch(error => {
      console.error("Failed to create cart", error);
    });
  };

  const updateCart = () => {
    const { id, userId, productId, quantity } = newPutCart;
    if (!id || !userId || !productId || !quantity) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Cart/${id}`, { userId, productId, quantity })
      .then(() => {
        fetchCart();
        setNewPutCart({ id: "", userId: "", productId: "", quantity: "" });
      })
      .catch(error => {
        console.error("Failed to update cart", error);
      });
  };

  const deleteCart = (id) => {
    axios.delete(`${baseURL}/Cart/${id}`).then(() => {
      fetchCart();
    }).catch(error => {
      console.error("Failed to delete cart", error);
    });
  };

  useEffect(() => {
    fetchUsers();
    fetchProductCategories();
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <div>
        <button onClick={handleGitHubLogin}>Login with GitHub</button>
        {githubUsername && <p>GitHub Username: {githubUsername}</p>}
      </div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>UserID</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Pass</th>
            <th>Age</th>
            <th>Rol</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
          </tr>
        </thead>
        <tbody>
          {Users.map(User => (
            <tr key={User.id}>
              <td>{User.id}</td>
              <td>{User.userName}</td>
              <td>{User.email}</td>
              <td>{User.pass}</td>
              <td>{User.age}</td>
              <td>{User.rol}</td>
              <td>{User.firstName}</td>
              <td>{User.lastName}</td>
              <td>{User.createdAt}</td>
              <td>{User.updatedAt}</td>
              <td>
                <button onClick={() => deleteUser(User.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create User</h3>
      <input
        placeholder="UserID"
        value={newUser.id}
        onChange={e => setNewUser({ ...newUser, id: e.target.value })}
      />
      <input
        placeholder="UserName"
        value={newUser.userName}
        onChange={e => setNewUser({ ...newUser, userName: e.target.value })}
      />
      <input
        placeholder="Email"
        value={newUser.email}
        onChange={e => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        placeholder="Pass"
        value={newUser.pass}
        onChange={e => setNewUser({ ...newUser, pass: e.target.value })}
      />
      <input
        placeholder="Age"
        value={newUser.age}
        onChange={e => setNewUser({ ...newUser, age: e.target.value })}
      />
      <input
        placeholder="Rol"
        value={newUser.rol}
        onChange={e => setNewUser({ ...newUser, rol: e.target.value })}
      />
      <input
        placeholder="FirstName"
        value={newUser.firstName}
        onChange={e => setNewUser({ ...newUser, firstName: e.target.value })}
      />
      <input
        placeholder="LastName"
        value={newUser.lastName}
        onChange={e => setNewUser({ ...newUser, lastName: e.target.value })}
      />
      <input
        placeholder="CreatedAt"
        value={newUser.createdAt}
        onChange={e => setNewUser({ ...newUser, createdAt: e.target.value })}
      />
      <input
        placeholder="UpdatedAt"
        value={newUser.updatedAt}
        onChange={e => setNewUser({ ...newUser, updatedAt: e.target.value })}
      />
      <button onClick={createUser}>Create User</button>

      <h3>Update User</h3>
      <input
        placeholder="UserID"
        value={newPutUser.id}
        onChange={e => setNewPutUser({ ...newPutUser, id: e.target.value })}
      />
      <input
        placeholder="UserName"
        value={newPutUser.userName}
        onChange={e => setNewPutUser({ ...newPutUser, userName: e.target.value })}
      />
      <input
        placeholder="Email"
        value={newPutUser.email}
        onChange={e => setNewPutUser({ ...newPutUser, email: e.target.value })}
      />
      <input
        placeholder="Pass"
        value={newPutUser.pass}
        onChange={e => setNewPutUser({ ...newPutUser, pass: e.target.value })}
      />
      <input
        placeholder="Age"
        value={newPutUser.age}
        onChange={e => setNewPutUser({ ...newPutUser, age: e.target.value })}
      />
      <input
        placeholder="Rol"
        value={newPutUser.rol}
        onChange={e => setNewPutUser({ ...newPutUser, rol: e.target.value })}
      />
      <input
        placeholder="FirstName"
        value={newPutUser.firstName}
        onChange={e => setNewPutUser({ ...newPutUser, firstName: e.target.value })}
      />
      <input
        placeholder="LastName"
        value={newPutUser.lastName}
        onChange={e => setNewPutUser({ ...newPutUser, lastName: e.target.value })}
      />
      <input
        placeholder="CreatedAt"
        value={newPutUser.createdAt}
        onChange={e => setNewPutUser({ ...newPutUser, createdAt: e.target.value })}
      />
      <input
        placeholder="UpdatedAt"
        value={newPutUser.updatedAt}
        onChange={e => setNewPutUser({ ...newPutUser, updatedAt: e.target.value })}
      />
      <button onClick={updateUser}>Update User</button>

      <h2>Product Categories</h2>
      <table>
        <thead>
          <tr>
            <th>CategoryID</th>
            <th>CategoryName</th>
          </tr>
        </thead>
        <tbody>
          {ProductCategories.map(ProductCategory => (
            <tr key={ProductCategory.id}>
              <td>{ProductCategory.id}</td>
              <td>{ProductCategory.categoryName}</td>
              <td>
                <button onClick={() => deleteProductCategory(ProductCategory.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Product Category</h3>
      <input
        placeholder="CategoryID"
        value={newProductCategory.id}
        onChange={e => setNewProductCategory({ ...newProductCategory, id: e.target.value })}
      />
      <input
        placeholder="CategoryName"
        value={newProductCategory.categoryName}
        onChange={e => setNewProductCategory({ ...newProductCategory, categoryName: e.target.value })}
      />
      <button onClick={createProductCategory}>Create Product Category</button>

      <h3>Update Product Category</h3>
      <input
        placeholder="CategoryID"
        value={newPutProductCategory.id}
        onChange={e => setNewPutProductCategory({ ...newPutProductCategory, id: e.target.value })}
      />
      <input
        placeholder="CategoryName"
        value={newPutProductCategory.categoryName}
        onChange={e => setNewPutProductCategory({ ...newPutProductCategory, categoryName: e.target.value })}
      />
      <button onClick={updateProductCategory}>Update Product Category</button>

      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ProductID</th>
            <th>ProductName</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price</th>
            <th>PriceUnit</th>
            <th>CategoryID</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
          </tr>
        </thead>
        <tbody>
          {Products.map(Product => (
            <tr key={Product.id}>
              <td>{Product.id}</td>
              <td>{Product.name}</td>
              <td>{Product.description}</td>
              <td>{Product.image}</td>
              <td>{Product.price}</td>
              <td>{Product.priceUnit}</td>
              <td>{Product.categoryId}</td>
              <td>{Product.createdAt}</td>
              <td>{Product.updatedAt}</td>
              <td>
                <button onClick={() => deleteProduct(Product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Product</h3>
      <input
        placeholder="ProductID"
        value={newProduct.id}
        onChange={e => setNewProduct({ ...newProduct, id: e.target.value })}
      />
      <input
        placeholder="ProductName"
        value={newProduct.name}
        onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        placeholder="Description"
        value={newProduct.description}
        onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
      />
      <input
        placeholder="Image"
        value={newProduct.image}
        onChange={e => setNewProduct({ ...newProduct, image: e.target.value })}
      />
      <input
        placeholder="Price"
        value={newProduct.price}
        onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <input
        placeholder="PriceUnit"
        value={newProduct.priceUnit}
        onChange={e => setNewProduct({ ...newProduct, priceUnit: e.target.value })}
      />
      <input
        placeholder="CategoryID"
        value={newProduct.categoryId}
        onChange={e => setNewProduct({ ...newProduct, categoryId: e.target.value })}
      />
      <input
        placeholder="CreatedAt"
        value={newProduct.createdAt}
        onChange={e => setNewProduct({ ...newProduct, createdAt: e.target.value })}
      />
      <input
        placeholder="UpdatedAt"
        value={newProduct.updatedAt}
        onChange={e => setNewProduct({ ...newProduct, updatedAt: e.target.value })}
      />
      <button onClick={createProduct}>Create Product</button>

      <h3>Update Product</h3>
      <input
        placeholder="ProductID"
        value={newPutProduct.id}
        onChange={e => setNewPutProduct({ ...newPutProduct, id: e.target.value })}
      />
      <input
        placeholder="ProductName"
        value={newPutProduct.name}
        onChange={e => setNewPutProduct({ ...newPutProduct, name: e.target.value })}
      />
      <input
        placeholder="Description"
        value={newPutProduct.description}
        onChange={e => setNewPutProduct({ ...newPutProduct, description: e.target.value })}
      />
      <input
        placeholder="Image"
        value={newPutProduct.image}
        onChange={e => setNewPutProduct({ ...newPutProduct, image: e.target.value })}
      />
      <input
        placeholder="Price"
        value={newPutProduct.price}
        onChange={e => setNewPutProduct({ ...newPutProduct, price: e.target.value })}
      />
      <input
        placeholder="PriceUnit"
        value={newPutProduct.priceUnit}
        onChange={e => setNewPutProduct({ ...newPutProduct, priceUnit: e.target.value })}
      />
      <input
        placeholder="CategoryID"
        value={newPutProduct.categoryId}
        onChange={e => setNewPutProduct({ ...newPutProduct, categoryId: e.target.value })}
      />
      <input
        placeholder="CreatedAt"
        value={newPutProduct.createdAt}
        onChange={e => setNewPutProduct({ ...newPutProduct, createdAt: e.target.value })}
      />
      <input
        placeholder="UpdatedAt"
        value={newPutProduct.updatedAt}
        onChange={e => setNewPutProduct({ ...newPutProduct, updatedAt: e.target.value })}
      />
      <button onClick={updateProduct}>Update Product</button>

      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>CartID</th>
            <th>UserID</th>
            <th>ProductID</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {Cart.map(CartItem => (
            <tr key={CartItem.id}>
              <td>{CartItem.id}</td>
              <td>{CartItem.userId}</td>
              <td>{CartItem.productId}</td>
              <td>{CartItem.quantity}</td>
              <td>
                <button onClick={() => deleteCart(CartItem.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Cart</h3>
      <input
        placeholder="CartID"
        value={newCart.id}
        onChange={e => setNewCart({ ...newCart, id: e.target.value })}
      />
      <input
        placeholder="UserID"
        value={newCart.userId}
        onChange={e => setNewCart({ ...newCart, userId: e.target.value })}
      />
      <input
        placeholder="ProductID"
        value={newCart.productId}
        onChange={e => setNewCart({ ...newCart, productId: e.target.value })}
      />
      <input
        placeholder="Quantity"
        value={newCart.quantity}
        onChange={e => setNewCart({ ...newCart, quantity: e.target.value })}
      />
      <button onClick={createCart}>Create Cart</button>

      <h3>Update Cart</h3>
      <input
        placeholder="CartID"
        value={newPutCart.id}
        onChange={e => setNewPutCart({ ...newPutCart, id: e.target.value })}
      />
      <input
        placeholder="UserID"
        value={newPutCart.userId}
        onChange={e => setNewPutCart({ ...newPutCart, userId: e.target.value })}
      />
      <input
        placeholder="ProductID"
        value={newPutCart.productId}
        onChange={e => setNewPutCart({ ...newPutCart, productId: e.target.value })}
      />
      <input
        placeholder="Quantity"
        value={newPutCart.quantity}
        onChange={e => setNewPutCart({ ...newPutCart, quantity: e.target.value })}
      />
      <button onClick={updateCart}>Update Cart</button>
    </div>
  );
}