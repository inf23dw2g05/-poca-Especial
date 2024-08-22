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
  const [newUser, setNewUser] = useState({ id: "", userName: "", email: "", pass: "", age: "" });
  const [newProductCategory, setNewProductCategory] = useState({ id: "", categoryName: "" });
  const [newProduct, setNewProduct] = useState({ id: "", name: "", description: "", price: "", categoryId: "" });
  const [newCart, setNewCart] = useState({ id: "", userId: "", productId: "", quantity: "" });

  const [newPutUser, setNewPutUser] = useState({ id: "", userName: "", email: "", pass: "", age: "" });
  const [newPutProductCategory, setNewPutProductCategory] = useState({ id: "", categoryName: "" });
  const [newPutProduct, setNewPutProduct] = useState({ id: "", name: "", description: "", price: "", categoryId: "" });
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

  // Funções CRUD para Users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${baseURL}/Users`);
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  const createUser = async () => {
    try {
      await axios.post(`${baseURL}/Users`, newUser);
      fetchUsers();
      setNewUser({ id: "", userName: "", email: "", pass: "", age: "", rol: "", firstName: "", lastName: "", createdAt: "", updatedAt: "" });
    } catch (error) {
      console.error("Failed to create user", error);
    }
  };

  const updateUser = async () => {
    const { id, userName, email, pass, age } = newPutUser;
    if (!id || !userName || !email || !pass || !age) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    try {
      await axios.put(`${baseURL}/Users/${id}`, { userName, email, pass, age});
      fetchUsers();
      setNewPutUser({ id: "", userName: "", email: "", pass: "", age: ""});
    } catch (error) {
      console.error("Failed to update user", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${baseURL}/Users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

  // Funções CRUD para ProductCategories
  const fetchProductCategories = async () => {
    try {
      const response = await axios.get(`${baseURL}/ProductCategories`);
      setProductCategories(response.data);
    } catch (error) {
      console.error("Failed to fetch product categories", error);
    }
  };

  const createProductCategory = async () => {
    try {
      await axios.post(`${baseURL}/ProductCategories`, newProductCategory);
      fetchProductCategories();
      setNewProductCategory({ id: "", categoryName: "" });
    } catch (error) {
      console.error("Failed to create product category", error);
    }
  };

  const updateProductCategory = async () => {
    const { id, categoryName } = newPutProductCategory;
    if (!id || !categoryName) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    try {
      await axios.put(`${baseURL}/ProductCategories/${id}`, { categoryName });
      fetchProductCategories();
      setNewPutProductCategory({ id: "", categoryName: "" });
    } catch (error) {
      console.error("Failed to update product category", error);
    }
  };

  const deleteProductCategory = async (id) => {
    try {
      await axios.delete(`${baseURL}/ProductCategories/${id}`);
      fetchProductCategories();
    } catch (error) {
      console.error("Failed to delete product category", error);
    }
  };

  // Funções CRUD para Products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${baseURL}/Products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  const createProduct = async () => {
    try {
      await axios.post(`${baseURL}/Products`, newProduct);
      fetchProducts();
      setNewProduct({ id: "", name: "", description: "", price: "", categoryId: "" });
    } catch (error) {
      console.error("Failed to create product", error);
    }
  };

  const updateProduct = async () => {
    const { id, name, description, price, categoryId } = newPutProduct;
    if (!id || !name || !description || !price || !categoryId) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    try {
      await axios.put(`${baseURL}/Products/${id}`, { name, description, price,  categoryId });
      fetchProducts();
      setNewPutProduct({ id: "", name: "", description: "", price: "", categoryId: ""});
    } catch (error) {
      console.error("Failed to update product", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${baseURL}/Products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Failed to delete product", error);
    }
  };

  // Funções CRUD para Cart
  const fetchCart = async () => {
    try {
      const response = await axios.get(`${baseURL}/Cart`);
      setCart(response.data);
    } catch (error) {
      console.error("Failed to fetch cart", error);
    }
  };

  const createCart = async () => {
    try {
      await axios.post(`${baseURL}/Cart`, newCart);
      fetchCart();
      setNewCart({ id: "", userId: "", productId: "", quantity: "" });
    } catch (error) {
      console.error("Failed to create cart", error);
    }
  };

  const updateCart = async () => {
    const { id, userId, productId, quantity } = newPutCart;
    if (!id || !userId || !productId || !quantity) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    try {
      await axios.put(`${baseURL}/Cart/${id}`, { userId, productId, quantity });
      fetchCart();
      setNewPutCart({ id: "", userId: "", productId: "", quantity: "" });
    } catch (error) {
      console.error("Failed to update cart", error);
    }
  };

  const deleteCart = async (id) => {
    if (!id) {
      console.error("ID is undefined");
      return;
    }
    try {
      await axios.delete(`${baseURL}/Cart/${id}`);
      fetchCart();
    } catch (error) {
      console.error("Failed to delete cart", error);
    }
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
            <th>UsersID</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Pass</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {Users.map(Users => (
            <tr key={Users.id}>
              <td>{Users.id}</td>
              <td>{Users.userName}</td>
              <td>{Users.email}</td>
              <td>{Users.pass}</td>
              <td>{Users.age}</td>
              <td>
                <button onClick={() => deleteUser(Users.id)}>Delete</button>
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
      <button onClick={updateUser}>Update User</button>

     
      <h2>ProductCategories</h2>
      <table>
        <thead>
          <tr>
            <th>ProductCategoryID</th>
            <th>ProductCategoryName</th>
          </tr>
        </thead>
        <tbody>
          {ProductCategories.map(ProductCategories => (
            <tr key={ProductCategories.id}>
              <td>{ProductCategories.id}</td>
              <td>{ProductCategories.categoryName}</td>
              <td>
                <button onClick={() => deleteProductCategory(ProductCategories.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create ProductCategory</h3>
      <input
        placeholder="ProductCategoryID"
        value={newProductCategory.id}
        onChange={e => setNewProductCategory({ ...newProductCategory, id: e.target.value })}
      />
      <input
        placeholder="ProductCategoryName"
        value={newProductCategory.categoryName}
        onChange={e => setNewProductCategory({ ...newProductCategory, categoryName: e.target.value })}
      />
      <button onClick={createProductCategory}>Create ProductCategory</button>

      <h3>Update ProductCategory</h3>
      <input
        placeholder="ProductCategoryID"
        value={newPutProductCategory.id}
        onChange={e => setNewPutProductCategory({ ...newPutProductCategory, id: e.target.value })}
      />
      <input
        placeholder="ProductCategoryName"
        value={newPutProductCategory.categoryName}
        onChange={e => setNewPutProductCategory({ ...newPutProductCategory, categoryName: e.target.value })}
      />
      <button onClick={updateProductCategory}>Update ProductCategory</button>

      
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ProductID</th>
            <th>ProductName</th>
            <th>ProductDescription</th>
            <th>ProductPrice</th>
            <th>ProductCategoryID</th>
          </tr>
        </thead>
        <tbody>
          {Products.map(Products => (
            <tr key={Products.id}>
              <td>{Products.id}</td>
              <td>{Products.name}</td>
              <td>{Products.description}</td>
              <td>{Products.price}</td>
              <td>{Products.categoryId}</td>
              <td>
                <button onClick={() => deleteProduct(Products.id)}>Delete</button>
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
        placeholder="ProductDescription"
        value={newProduct.description}
        onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
      />
      <input
        placeholder="ProductPrice"
        value={newProduct.price}
        onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <input
        placeholder="ProductCategoryID"
        value={newProduct.categoryId}
        onChange={e => setNewProduct({ ...newProduct, categoryId: e.target.value })}
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
        placeholder="ProductDescription"
        value={newPutProduct.description}
        onChange={e => setNewPutProduct({ ...newPutProduct, description: e.target.value })}
      />
      <input
        placeholder="ProductPrice"
        value={newPutProduct.price}
        onChange={e => setNewPutProduct({ ...newPutProduct, price: e.target.value })}
      />
      <input
        placeholder="ProductCategoryID"
        value={newPutProduct.categoryId}
        onChange={e => setNewPutProduct({ ...newPutProduct, categoryId: e.target.value })}
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
          {Cart.map(Cart => (
            <tr key={Cart.id}>
              <td>{Cart.id}</td>
              <td>{Cart.userId}</td>
              <td>{Cart.productId}</td>
              <td>{Cart.quantity}</td>
              <td>
                <button onClick={() => deleteCart(Cart.id)}>Delete</button>
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
