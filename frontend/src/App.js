import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";



const baseURL = "http://localhost:3000"; // URL do backend

export default function App() {

  // Estados para as tabelas
  const [Users, setUsers] = useState([]);
  const [Carts, setCarts] = useState([]);
  const [Products, setProducts] = useState([]);
  const [ProductCategories, setProductCategories] = useState([]);
  // Estados para novos registros
  const [newUser, setNewUser] = useState({ ID: "", UserName: "", Email: "", Pass: "" });
  const [newCart, setNewCart] = useState({ ID: "", UserId: "", ProductId: "", Quantity: "" });
  const [newProductCategory, setNewProductCategory] = useState({ ID: "", Name_category: "" });
  const [newProduct, setNewProduct] = useState({ ID: "", Name_products: "", Description_products: "", Price: "", CategoryId: "" });

  const [newPutUser, setNewPutUser] = useState({ ID: "", UserName: "", Email: "", Pass: "" });
  const [newPutCart, setNewPutCart] = useState({ ID: "", UserId: "", ProductId: "", Quantity: "" });
  const [newPutProductCategory, setNewPutProductCategory] = useState({ ID: "", Name_category: "" });
  const [newPutProduct, setNewPutProduct] = useState({ ID: "", Name_products: "", Description_products: "", Price: "", CategoryId: "" });
  const [githubUsername, setGithubUsername] = useState("");

  const handleGitHubLogin = () => {
    window.location.href = "http://localhost:3000/auth/github";
  
    axios.get(`${baseURL}/user`).then(response => {
      const username = response.data.username;
      setGithubUsername(username);
      // Redirect to localhost:3000 after successful login
      window.location.href = "http://localhost:3006";
    }).catch(error => {
      console.error("Failed to fetch GitHub username", error);
    });
  };

  // Funções CRUD para Users
  const fetchUsers = () => {
    axios.get(`${baseURL}/Users`).then(response => {
      setUsers(response.data);
    });
  };

  const createUser = () => { 
    const { ID, UserName, Email, Pass } = newUser;   
    if (!ID || !UserName || !Email || !Pass) {
      alert("Todos os campos são obrigatórios.");
      return;
    }
    axios.post(`${baseURL}/Users`, newUser).then(() => {
      fetchUsers();
      setNewUser({ ID: "", UserName: "", Email: "", Pass: "" });
    });
  };

  const updateUser = () => {
    const { ID, UserName, Email, Pass } = newPutUser;
    if (!ID || !UserName || !Email || !Pass) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Users/${ID}`, { ID, UserName, Email, Pass })
      .then(() => {
        fetchUsers();
        setNewPutUser({ ID: "", UserName: "", Email: "", Pass: "" });
      })
      .catch(error => {
        console.error("Ocorreu um erro ao atualizar o User!", error);
      });
  };

  const deleteUser = (ID) => {
    axios.delete(`${baseURL}/Users/${ID}`).then(() => {
      fetchUsers();
    });
  };

  // Funções CRUD para Carts
  const fetchCarts = () => {
    axios.get(`${baseURL}/Cart`).then(response => {
      setCarts(response.data);
    });
  };

  const createCart = () => {
    const { ID, UserId, ProductId, Quantity } = newCart;   
    if (!ID || !UserId || !ProductId || !Quantity) {
      alert("Todos os campos são obrigatórios.");
      return;
    }
    axios.post(`${baseURL}/cart`, newCart).then(() => {
      fetchCarts();
      setNewCart({ ID: "", UserId: "", ProductId: "", Quantity: "" });
    });
  };

  const updateCart = () => {
    const { ID, UserId, ProductId, Quantity } = newPutCart;
    if (!ID || !UserId || !ProductId || !Quantity) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Cart/${ID}`, { UserId, ProductId, Quantity })
      .then(() => {
        fetchCarts();
        setNewPutCart({ ID: "", UserId: "", ProductId: "", Quantity: "" });
      })
      .catch(error => {
        console.error("Ocorreu um erro ao atualizar o Cart!", error);
      });
  };

  const deleteCart = (ID) => {
    axios.delete(`${baseURL}/Cart/${ID}`).then(() => {
      fetchCarts();
    });
  };


  
  // Funções CRUD para Products
  const fetchProducts = () => {
    axios.get(`${baseURL}/Products`).then(response => {
      setProducts(response.data);
    });
  };

  const createProduct = () => {
    const { ID, Name_products, Description_products, Price, CategoryId } = newProduct;   
    if (!ID || !Name_products || !Description_products || !Price || !CategoryId) {
      alert("Todos os campos são obrigatórios.");
      return;
    }
    axios.post(`${baseURL}/Products`, newProduct)
      .then(() => {
        fetchProducts();
        setNewProduct({ ID: "", Name_products: "", Description_products: "", Price: "", CategoryId: "" });
      })
      .catch(error => {
        console.error("Erro ao criar o produto:", error); // Tratamento de erro adicionado
        alert("Ocorreu um erro ao criar o produto."); // Mensagem de erro para o usuário
      });
  };

  const updateProduct = () => {
    const { ID, Name_products, Description_products, Price, CategoryId } = newPutProduct;
    if (!ID || !Name_products || !Description_products || !Price || !CategoryId) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Products/${ID}`, { Name_products, Description_products, Price, CategoryId })
      .then(() => {
        fetchProducts();
        setNewPutProduct({ ID: "", Name_products: "", Description_products: "", Price: "", CategoryId: "" });
      })
      .catch(error => {
        console.error("Ocorreu um erro ao atualizar o Product!", error);
      });
  };

  const deleteProduct = (ID) => {
    axios.delete(`http://localhost:3000/products/${ID}`)
  .then(response => {
    console.log(response.data);
    // Lógica para lidar com sucesso
  })
  .catch(error => {
    console.error("Erro ao excluir o produto:", error.response ? error.response.data : error.message);
    // Lógica para lidar com erros
  })
    .then(() => {
      fetchProducts();
    });
  };

  // Funções CRUD para ProductCategories
  const fetchProductCategories = () => {
    axios.get(`${baseURL}/ProductCategories`).then(response => {
      setProductCategories(response.data);
    });
  };

  const createProductCategory = () => {
    const { ID, CategoryName } = newProductCategory;   
    if (!ID || !CategoryName) {
      alert("Todos os campos são obrigatórios.");
      return;
    }
    axios.post(`${baseURL}/ProductCategories`, newProductCategory)
      .then(() => {
        fetchProductCategories();
        setNewProductCategory({ ID: "", CategoryName: "" });
      })
      .catch(error => {
        console.error("Erro ao criar a categoria do produto:", error);
        alert("Ocorreu um erro ao criar a categoria do produto.");
      });
  };

  const updateProductCategory = () => {
    const { ID, CategoryName } = newPutProductCategory;
    if (!ID || !CategoryName) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/ProductCategories/${ID}`, { ID, CategoryName })
      .then(() => {
        fetchProductCategories();
        setNewPutProductCategory({ ID: "", CategoryName: "" });
      })
      .catch(error => {
        console.error("Ocorreu um erro ao atualizar a categoria do produto!", error);
      });
  };

  const deleteProductCategory = (ID) => {
    axios.delete(`${baseURL}/ProductCategories/${ID}`).then(() => {
      fetchProductCategories();
    });
  };

  useEffect(() => {
    fetchUsers();
    fetchCarts();
    fetchProducts();
    fetchProductCategories(); // Adicionado para buscar categorias de produtos
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
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(Users) && Users.map(User => ( // Check if Users is an array
            <tr key={User.ID}>
              <td>{User.ID}</td>
              <td>{User.UserName}</td>
              <td>{User.Email}</td>
              <td>{User.Pass}</td>
              <td>
                <button onClick={() => deleteUser(User.ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create User</h3>
      <input
        placeholder="UserID"
        value={newUser.ID}
        onChange={e => setNewUser({ ...newUser, ID: e.target.value })}
      />
      <input
        placeholder="Username"
        value={newUser.UserName}
        onChange={e => setNewUser({ ...newUser, UserName: e.target.value })}
      />
      <input
        placeholder="Email"
        value={newUser.Email}
        onChange={e => setNewUser({ ...newUser, Email: e.target.value })}
      />
      <input
        placeholder="Password"
        value={newUser.Pass}
        onChange={e => setNewUser({ ...newUser, Pass: e.target.value })}
      />
      <button onClick={createUser}>Create User</button>

      <h3>Update User</h3>
      <input
        placeholder="UserID"
        value={newPutUser.ID}
        onChange={e => setNewPutUser({ ...newPutUser, ID: e.target.value })}
      />
      <input
        placeholder="Username"
        value={newPutUser.UserName}
        onChange={e => setNewPutUser({ ...newPutUser, UserName: e.target.value })}
      />
      <input
        placeholder="Email"
        value={newPutUser.Email}
        onChange={e => setNewPutUser({ ...newPutUser, Email: e.target.value })}
      />
      <input
        placeholder="Password"
        value={newPutUser.Pass}
        onChange={e => setNewPutUser({ ...newPutUser, Pass: e.target.value })}
      />
      <button onClick={updateUser}>Update User</button>

      <h2>Carts</h2>
      <table>
        <thead>
          <tr>
            <th>CartID</th>
            <th>UserID</th>
            <th>ProductID</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(Carts) && Carts.map(Cart => (
            <tr key={Cart.ID}>
              <td>{Cart.ID}</td>
              <td>{Cart.UserID}</td>
              <td>{Cart.ProductID}</td>
              <td>{Cart.Quantity}</td>
              <td>
                <button onClick={() => deleteCart(Cart.ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Cart</h3>
      <input
        placeholder="CartID"
        value={newCart.ID}
        onChange={e => setNewCart({ ...newCart, ID: e.target.value })}
      />
      <input
        placeholder="UserID"
        value={newCart.UserId}
        onChange={e => setNewCart({ ...newCart, UserId: e.target.value })}
      />
      <input
        placeholder="ProductID"
        value={newCart.ProductId}
        onChange={e => setNewCart({ ...newCart, ProductId: e.target.value })}
      />
      <input
        placeholder="Quantity"
        value={newCart.Quantity}
        onChange={e => setNewCart({ ...newCart, Quantity: e.target.value })}
      />
      <button onClick={createCart}>Create Cart</button>

      <h3>Update Cart</h3>
      <input
        placeholder="CartID"
        value={newPutCart.ID}
        onChange={e => setNewPutCart({ ...newPutCart, ID: e.target.value })}
      />
      <input
        placeholder="UserID"
        value={newPutCart.UserId}
        onChange={e => setNewPutCart({ ...newPutCart, UserId: e.target.value })}
      />
      <input
        placeholder="ProductID"
        value={newPutCart.ProductId}
        onChange={e => setNewPutCart({ ...newPutCart, ProductId: e.target.value })}
      />
      <button onClick={updateCart}>Update Cart</button>

      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ProductID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>CategoryID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(Products) && Products.map(Product => (
            <tr key={Product.ID}>
              <td>{Product.ID}</td>
              <td>{Product.Name_products}</td>
              <td>{Product.Description_products}</td>
              <td>{Product.Price}</td>
              <td>{Product.CategoryID}</td>
              <td>
                <button onClick={() => deleteProduct(Product.ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Product</h3>
      <input
        placeholder="ProductID"
        value={newProduct.ID}
        onChange={e => setNewProduct({ ...newProduct, ID: e.target.value })}
      />
      <input
        placeholder="Name"
        value={newProduct.Name_products}
        onChange={e => setNewProduct({ ...newProduct, Name_products: e.target.value })}
      />
      <input
        placeholder="Description"
        value={newProduct.Description_products}
        onChange={e => setNewProduct({ ...newProduct, Description_products: e.target.value })}
      />
      <input
        placeholder="Price"
        value={newProduct.Price}
        onChange={e => setNewProduct({ ...newProduct, Price: e.target.value })}
      />
      <input
        placeholder="CategoryID"
        value={newProduct.CategoryId}
        onChange={e => setNewProduct({ ...newProduct, CategoryId: e.target.value })}
      />
      <button onClick={createProduct}>Create Product</button>

      <h3>Update Product</h3>
      <input
        placeholder="ProductID"
        value={newPutProduct.ID}
        onChange={e => setNewPutProduct({ ...newPutProduct, ID: e.target.value })}
      />
      <input
        placeholder="Name"
        value={newPutProduct.Name_products}
        onChange={e => setNewPutProduct({ ...newPutProduct, Name_products: e.target.value })}
      />
      <input
        placeholder="Description"
        value={newPutProduct.Description_products}
        onChange={e => setNewPutProduct({ ...newPutProduct, Description_products: e.target.value })}
      />
      <input
        placeholder="Price"
        value={newPutProduct.Price}
        onChange={e => setNewPutProduct({ ...newPutProduct, Price: e.target.value })}
      />
      <input
        placeholder="CategoryID"
        value={newPutProduct.CategoryId}
        onChange={e => setNewPutProduct({ ...newPutProduct, CategoryId: e.target.value })}
      />
      <button onClick={updateProduct}>Update Product</button>

      <h2>Product Categories</h2>
      <table>
        <thead>
          <tr>
            <th>CategoryID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(ProductCategories) && ProductCategories.map(Category => (
            <tr key={Category.ID}>
              <td>{Category.ID}</td>
              <td>{Category.CategoryName}</td>
              <td>
                <button onClick={() => deleteProductCategory(Category.ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Product Category</h3>
      <input
        placeholder="CategoryID"
        value={newProductCategory.ID}
        onChange={e => setNewProductCategory({ ...newProductCategory, ID: e.target.value })}
      />
      <input
        placeholder="Name"
        value={newProductCategory.CategoryName}
        onChange={e => setNewProductCategory({ ...newProductCategory, CategoryName: e.target.value })}
      />
      <button onClick={createProductCategory}>Create Product Category</button>

      <h3>Update Product Category</h3>
      <input
        placeholder="CategoryID"
        value={newPutProductCategory.ID}
        onChange={e => setNewPutProductCategory({ ...newPutProductCategory, ID: e.target.value })}
      />
      <input
        placeholder="Name"
        value={newPutProductCategory.CategoryName}
        onChange={e => setNewPutProductCategory({ ...newPutProductCategory, CategoryName: e.target.value })}
      />
      <button onClick={updateProductCategory}>Update Product Category</button>

    </div>
  );
} 