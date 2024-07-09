import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const baseURL = "http://localhost:3000"; // URL do backend

export default function App() {
  // Estados para as tabelas
  const [Categories, setCategories] = useState([]);
  const [Products, setProducts] = useState([]);
  const [Customers, setCustomers] = useState([]);
  const [Orders, setOrders] = useState([]);
  const [OrderDetails, setOrderDetails] = useState([]);

  // Estados para novos registros
  const [newCategory, setNewCategory] = useState({ id: "", name: "" });
  const [newProduct, setNewProduct] = useState({ id: "", name: "", categoryId: "", price: "" });
  const [newCustomer, setNewCustomer] = useState({ id: "", name: "", email: "" });
  const [newOrder, setNewOrder] = useState({ id: "", customerId: "", orderDate: "" });
  const [newOrderDetail, setNewOrderDetail] = useState({ id: "", orderId: "", productId: "", quantity: "" });

  const [newPutCategory, setNewPutCategory] = useState({ id: "", name: "" });
  const [newPutProduct, setNewPutProduct] = useState({ id: "", name: "", categoryId: "", price: "" });
  const [newPutCustomer, setNewPutCustomer] = useState({ id: "", name: "", email: "" });
  const [newPutOrder, setNewPutOrder] = useState({ id: "", customerId: "", orderDate: "" });
  const [newPutOrderDetail, setNewPutOrderDetail] = useState({ id: "", orderId: "", productId: "", quantity: "" });
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

  // Funçes CRUD para Categories
  const fetchCategories = () => {
    axios.get(`${baseURL}/Categories`).then(response => {
      setCategories(response.data);
    }).catch(error => {
      console.error("Failed to fetch categories", error);
    });
  };

  const createCategory = () => {
    axios.post(`${baseURL}/Categories`, newCategory).then(() => {
      fetchCategories();
      setNewCategory({ id: "", name: "" });
    }).catch(error => {
      console.error("Failed to create category", error);
    });
  };

  const updateCategory = () => {
    const { id, name } = newPutCategory;
    if (!id || !name) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Categories/${id}`, { id, name })
      .then(() => {
        fetchCategories();
        setNewPutCategory({ id: "", name: "" });
      })
      .catch(error => {
        console.error("Failed to update category", error);
      });
  };

  const deleteCategory = (id) => {
    axios.delete(`${baseURL}/Categories/${id}`).then(() => {
      fetchCategories();
    }).catch(error => {
      console.error("Failed to delete category", error);
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
      setNewProduct({ id: "", name: "", categoryId: "", price: "" });
    }).catch(error => {
      console.error("Failed to create product", error);
    });
  };

  const updateProduct = () => {
    const { id, name, categoryId, price } = newPutProduct;
    if (!id || !name || !categoryId || !price) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Products/${id}`, { name, categoryId, price })
      .then(() => {
        fetchProducts();
        setNewPutProduct({ id: "", name: "", categoryId: "", price: "" });
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

  // Funções CRUD para Customers
  const fetchCustomers = () => {
    axios.get(`${baseURL}/Customers`).then(response => {
      setCustomers(response.data);
    }).catch(error => {
      console.error("Failed to fetch customers", error);
    });
  };

  const createCustomer = () => {
    axios.post(`${baseURL}/Customers`, newCustomer).then(() => {
      fetchCustomers();
      setNewCustomer({ id: "", name: "", email: "" });
    }).catch(error => {
      console.error("Failed to create customer", error);
    });
  };

  const updateCustomer = () => {
    const { id, name, email } = newPutCustomer;
    if (!id || !name || !email) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Customers/${id}`, { name, email })
      .then(() => {
        fetchCustomers();
        setNewPutCustomer({ id: "", name: "", email: "" });
      })
      .catch(error => {
        console.error("Failed to update customer", error);
      });
  };

  const deleteCustomer = (id) => {
    axios.delete(`${baseURL}/Customers/${id}`).then(() => {
      fetchCustomers();
    }).catch(error => {
      console.error("Failed to delete customer", error);
    });
  };

  // Funções CRUD para Orders
  const fetchOrders = () => {
    axios.get(`${baseURL}/Orders`).then(response => {
      setOrders(response.data);
    }).catch(error => {
      console.error("Failed to fetch orders", error);
    });
  };

  const createOrder = () => {
    axios.post(`${baseURL}/Orders`, newOrder).then(() => {
      fetchOrders();
      setNewOrder({ id: "", customerId: "", orderDate: "" });
    }).catch(error => {
      console.error("Failed to create order", error);
    });
  };

  const updateOrder = () => {
    const { id, customerId, orderDate } = newPutOrder;
    if (!id || !customerId || !orderDate) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Orders/${id}`, { customerId, orderDate })
      .then(() => {
        fetchOrders();
        setNewPutOrder({ id: "", customerId: "", orderDate: "" });
      })
      .catch(error => {
        console.error("Failed to update order", error);
      });
  };

  const deleteOrder = (id) => {
    axios.delete(`${baseURL}/Orders/${id}`).then(() => {
      fetchOrders();
    }).catch(error => {
      console.error("Failed to delete order", error);
    });
  };

  // Funções CRUD para OrderDetails
  const fetchOrderDetails = () => {
    axios.get(`${baseURL}/OrderDetails`).then(response => {
      setOrderDetails(response.data);
    }).catch(error => {
      console.error("Failed to fetch order details", error);
    });
  };

  const createOrderDetail = () => {
    axios.post(`${baseURL}/OrderDetails`, newOrderDetail).then(() => {
      fetchOrderDetails();
      setNewOrderDetail({ id: "", orderId: "", productId: "", quantity: "" });
    }).catch(error => {
      console.error("Failed to create order detail", error);
    });
  };

  const updateOrderDetail = () => {
    const { id, orderId, productId, quantity } = newPutOrderDetail;
    if (!id || !orderId || !productId || !quantity) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/OrderDetails/${id}`, { orderId, productId, quantity })
      .then(() => {
        fetchOrderDetails();
        setNewPutOrderDetail({ id: "", orderId: "", productId: "", quantity: "" });
      })
      .catch(error => {
        console.error("Failed to update order detail", error);
      });
  };

  const deleteOrderDetail = (id) => {
    axios.delete(`${baseURL}/OrderDetails/${id}`).then(() => {
      fetchOrderDetails();
    }).catch(error => {
      console.error("Failed to delete order detail", error);
    });
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    fetchCustomers();
    fetchOrders();
    fetchOrderDetails();
  }, []);

  return (
    <div>
      <div>
        <button onClick={handleGitHubLogin}>Login with GitHub</button>
        {githubUsername && <p>GitHub Username: {githubUsername}</p>}
      </div>
      <h2>Categories</h2>
      <table>
        <thead>
          <tr>
            <th>CategoryID</th>
            <th>CategoryName</th>
          </tr>
        </thead>
        <tbody>
          {Categories.map(Category => (
            <tr key={Category.id}>
              <td>{Category.id}</td>
              <td>{Category.name}</td>
              <td>
                <button onClick={() => deleteCategory(Category.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Category</h3>
      <input
        placeholder="CategoryID"
        value={newCategory.id}
        onChange={e => setNewCategory({ ...newCategory, id: e.target.value })}
      />
      <input
        placeholder="CategoryName"
        value={newCategory.name}
        onChange={e => setNewCategory({ ...newCategory, name: e.target.value })}
      />
      <button onClick={createCategory}>Create Category</button>

      <h3>Update Category</h3>
      <input
        placeholder="CategoryID"
        value={newPutCategory.id}
        onChange={e => setNewPutCategory({ ...newPutCategory, id: e.target.value })}
      />
      <input
        placeholder="CategoryName"
        value={newPutCategory.name}
        onChange={e => setNewPutCategory({ ...newPutCategory, name: e.target.value })}
      />
      <button onClick={updateCategory}>Update Category</button>

      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ProductID</th>
            <th>ProductName</th>
            <th>CategoryID</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Products.map(Product => (
            <tr key={Product.id}>
              <td>{Product.id}</td>
              <td>{Product.name}</td>
              <td>{Product.categoryId}</td>
              <td>{Product.price}</td>
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
        placeholder="CategoryID"
        value={newProduct.categoryId}
        onChange={e => setNewProduct({ ...newProduct, categoryId: e.target.value })}
      />
      <input
        placeholder="Price"
        value={newProduct.price}
        onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
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
        placeholder="CategoryID"
        value={newPutProduct.categoryId}
        onChange={e => setNewPutProduct({ ...newPutProduct, categoryId: e.target.value })}
      />
      <input
        placeholder="Price"
        value={newPutProduct.price}
        onChange={e => setNewPutProduct({ ...newPutProduct, price: e.target.value })}
      />
      <button onClick={updateProduct}>Update Product</button>

      <h2>Customers</h2>
      <table>
        <thead>
          <tr>
            <th>CustomerID</th>
            <th>CustomerName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {Customers.map(Customer => (
            <tr key={Customer.id}>
              <td>{Customer.id}</td>
              <td>{Customer.name}</td>
              <td>{Customer.email}</td>
              <td>
                <button onClick={() => deleteCustomer(Customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Customer</h3>
      <input
        placeholder="CustomerID"
        value={newCustomer.id}
        onChange={e => setNewCustomer({ ...newCustomer, id: e.target.value })}
      />
      <input
        placeholder="CustomerName"
        value={newCustomer.name}
        onChange={e => setNewCustomer({ ...newCustomer, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={newCustomer.email}
        onChange={e => setNewCustomer({ ...newCustomer, email: e.target.value })}
      />
      <button onClick={createCustomer}>Create Customer</button>

      <h3>Update Customer</h3>
      <input
        placeholder="CustomerID"
        value={newPutCustomer.id}
        onChange={e => setNewPutCustomer({ ...newPutCustomer, id: e.target.value })}
      />
      <input
        placeholder="CustomerName"
        value={newPutCustomer.name}
        onChange={e => setNewPutCustomer({ ...newPutCustomer, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={newPutCustomer.email}
        onChange={e => setNewPutCustomer({ ...newPutCustomer, email: e.target.value })}
      />
      <button onClick={updateCustomer}>Update Customer</button>

      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>OrderID</th>
            <th>CustomerID</th>
            <th>OrderDate</th>
          </tr>
        </thead>
        <tbody>
          {Orders.map(Order => (
            <tr key={Order.id}>
              <td>{Order.id}</td>
              <td>{Order.customerId}</td>
              <td>{Order.orderDate}</td>
              <td>
                <button onClick={() => deleteOrder(Order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Order</h3>
      <input
        placeholder="OrderID"
        value={newOrder.id}
        onChange={e => setNewOrder({ ...newOrder, id: e.target.value })}
      />
      <input
        placeholder="CustomerID"
        value={newOrder.customerId}
        onChange={e => setNewOrder({ ...newOrder, customerId: e.target.value })}
      />
      <input
        placeholder="OrderDate"
        value={newOrder.orderDate}
        onChange={e => setNewOrder({ ...newOrder, orderDate: e.target.value })}
      />
      <button onClick={createOrder}>Create Order</button>

      <h3>Update Order</h3>
      <input
        placeholder="OrderID"
        value={newPutOrder.id}
        onChange={e => setNewPutOrder({ ...newPutOrder, id: e.target.value })}
      />
      <input
        placeholder="CustomerID"
        value={newPutOrder.customerId}
        onChange={e => setNewPutOrder({ ...newPutOrder, customerId: e.target.value })}
      />
      <input
        placeholder="OrderDate"
        value={newPutOrder.orderDate}
        onChange={e => setNewPutOrder({ ...newPutOrder, orderDate: e.target.value })}
      />
      <button onClick={updateOrder}>Update Order</button>

      <h2>Order Details</h2>
      <table>
        <thead>
          <tr>
            <th>OrderDetailID</th>
            <th>OrderID</th>
            <th>ProductID</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {OrderDetails.map(OrderDetail => (
            <tr key={OrderDetail.id}>
              <td>{OrderDetail.id}</td>
              <td>{OrderDetail.orderId}</td>
              <td>{OrderDetail.productId}</td>
              <td>{OrderDetail.quantity}</td>
              <td>
                <button onClick={() => deleteOrderDetail(OrderDetail.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Order Detail</h3>
      <input
        placeholder="OrderDetailID"
        value={newOrderDetail.id}
        onChange={e => setNewOrderDetail({ ...newOrderDetail, id: e.target.value })}
      />
      <input
        placeholder="OrderID"
        value={newOrderDetail.orderId}
        onChange={e => setNewOrderDetail({ ...newOrderDetail, orderId: e.target.value })}
      />
      <input
        placeholder="ProductID"
        value={newOrderDetail.productId}
        onChange={e => setNewOrderDetail({ ...newOrderDetail, productId: e.target.value })}
      />
      <input
        placeholder="Quantity"
        value={newOrderDetail.quantity}
        onChange={e => setNewOrderDetail({ ...newOrderDetail, quantity: e.target.value })}
      />
      <button onClick={createOrderDetail}>Create Order Detail</button>

      <h3>Update Order Detail</h3>
      <input
        placeholder="OrderDetailID"
        value={newPutOrderDetail.id}
        onChange={e => setNewPutOrderDetail({ ...newPutOrderDetail, id: e.target.value })}
      />
      <input
        placeholder="OrderID"
        value={newPutOrderDetail.orderId}
        onChange={e => setNewPutOrderDetail({ ...newPutOrderDetail, orderId: e.target.value })}
      />
      <input
        placeholder="ProductID"
        value={newPutOrderDetail.productId}
        onChange={e => setNewPutOrderDetail({ ...newPutOrderDetail, productId: e.target.value })}
      />
      <input
        placeholder="Quantity"
        value={newPutOrderDetail.quantity}
        onChange={e => setNewPutOrderDetail({ ...newPutOrderDetail, quantity: e.target.value })}
      />
      <button onClick={updateOrderDetail}>Update Order Detail</button>
    </div>
  );
}