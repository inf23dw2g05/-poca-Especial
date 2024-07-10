-- Criação do esquema e uso do mesmo
CREATE DATABASE IF NOT EXISTS api_ecommerce;
SHOW DATABASES;
USE api_ecommerce;

-- Criação da tabela de usuários
START TRANSACTION;
CREATE TABLE IF NOT EXISTS Users (
    ID INT PRIMARY KEY AUTO_INCREMENT, -- Renomeado de UserID para ID
    UserName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Pass VARCHAR(64) NOT NULL,
    Age INT,
    Rol VARCHAR(10),
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    CreatedAt DATE,
    UpdatedAt DATE
);

-- Criação da tabela de categorias de produtos
CREATE TABLE IF NOT EXISTS ProductCategories (
    ID INT PRIMARY KEY AUTO_INCREMENT, -- Renomeado de CategoryID para ID
    CategoryName VARCHAR(50) NOT NULL
);

-- Criação da tabela de produtos
CREATE TABLE IF NOT EXISTS Products (
    ID INT PRIMARY KEY AUTO_INCREMENT, -- Renomeado de ProductID para ID
    Name_products VARCHAR(100),
    Description_products TEXT,
    Image_products VARCHAR(255),
    Price DECIMAL(10, 2),
    PriceUnit VARCHAR(10),
    CategoryID INT,
    CreatedAt DATE,
    UpdatedAt DATE,
    FOREIGN KEY (CategoryID) REFERENCES ProductCategories(ID) -- Atualizado para referenciar ID
);

-- Criação da tabela de carrinho de compras
CREATE TABLE IF NOT EXISTS Cart (
    ID INT PRIMARY KEY AUTO_INCREMENT, -- Renomeado de CartID para ID
    UserID INT,
    ProductID INT,
    Quantity INT,
    FOREIGN KEY (UserID) REFERENCES Users(ID), -- Atualizado para referenciar ID
    FOREIGN KEY (ProductID) REFERENCES Products(ID) -- Atualizado para referenciar ID
);
COMMIT;

-- Inserção de dados
START TRANSACTION;

-- Inserção de dados na tabela Users
INSERT IGNORE INTO Users (UserName, Email, Pass, Age, Rol, FirstName, LastName, CreatedAt, UpdatedAt)
VALUES
    ('john.doe', 'john.doe@example.com', 'hashed_password_1', 33, 'user', 'John', 'Doe', '2023-05-12', '2024-05-12'),
    ('jane.smith', 'jane.smith@example.com', 'hashed_password_2', 29, 'admin', 'Jane', 'Smith', '2023-05-12', '2024-05-12'),
    ('robert.johnson', 'robert.johnson@example.com', 'hashed_password_3', 40, 'user', 'Robert', 'Johnson', '2023-05-12', '2024-05-12'),
    ('alice.brown', 'alice.brown@example.com', 'hashed_password_4', 25, 'user', 'Alice', 'Brown', '2023-05-12', '2024-05-12'),
    ('charlie.davis', 'charlie.davis@example.com', 'hashed_password_5', 30, 'user', 'Charlie', 'Davis', '2023-05-12', '2024-05-12'),
    ('emily.evans', 'emily.evans@example.com', 'hashed_password_6', 28, 'admin', 'Emily', 'Evans', '2023-05-12', '2024-05-12'),
    ('frank.garcia', 'frank.garcia@example.com', 'hashed_password_7', 35, 'user', 'Frank', 'Garcia', '2023-05-12', '2024-05-12'),
    ('grace.harris', 'grace.harris@example.com', 'hashed_password_8', 32, 'user', 'Grace', 'Harris', '2023-05-12', '2024-05-12'),
    ('henry.jackson', 'henry.jackson@example.com', 'hashed_password_9', 27, 'user', 'Henry', 'Jackson', '2023-05-12', '2024-05-12'),
    ('isabella.king', 'isabella.king@example.com', 'hashed_password_10', 26, 'admin', 'Isabella', 'King', '2023-05-12', '2024-05-12'),
    ('jack.lee', 'jack.lee@example.com', 'hashed_password_11', 34, 'user', 'Jack', 'Lee', '2023-05-12', '2024-05-12'),
    ('karen.martin', 'karen.martin@example.com', 'hashed_password_12', 31, 'user', 'Karen', 'Martin', '2023-05-12', '2024-05-12'),
    ('larry.moore', 'larry.moore@example.com', 'hashed_password_13', 29, 'user', 'Larry', 'Moore', '2023-05-12', '2024-05-12'),
    ('mary.perez', 'mary.perez@example.com', 'hashed_password_14', 33, 'admin', 'Mary', 'Perez', '2023-05-12', '2024-05-12'),
    ('nancy.roberts', 'nancy.roberts@example.com', 'hashed_password_15', 36, 'user', 'Nancy', 'Roberts', '2023-05-12', '2024-05-12'),
    ('oliver.smith', 'oliver.smith@example.com', 'hashed_password_16', 38, 'user', 'Oliver', 'Smith', '2023-05-12', '2024-05-12'),
    ('paul.taylor', 'paul.taylor@example.com', 'hashed_password_17', 37, 'user', 'Paul', 'Taylor', '2023-05-12', '2024-05-12'),
    ('quincy.thomas', 'quincy.thomas@example.com', 'hashed_password_18', 39, 'admin', 'Quincy', 'Thomas', '2023-05-12', '2024-05-12'),
    ('rachel.white', 'rachel.white@example.com', 'hashed_password_19', 28, 'user', 'Rachel', 'White', '2023-05-12', '2024-05-12'),
    ('steve.wilson', 'steve.wilson@example.com', 'hashed_password_20', 32, 'user', 'Steve', 'Wilson', '2023-05-12', '2024-05-12'),
    ('tina.young', 'tina.young@example.com', 'hashed_password_21', 30, 'user', 'Tina', 'Young', '2023-05-12', '2024-05-12'),
    ('ursula.zimmerman', 'ursula.zimmerman@example.com', 'hashed_password_22', 35, 'admin', 'Ursula', 'Zimmerman', '2023-05-12', '2024-05-12'),
    ('victor.adams', 'victor.adams@example.com', 'hashed_password_23', 40, 'user', 'Victor', 'Adams', '2023-05-12', '2024-05-12'),
    ('wendy.baker', 'wendy.baker@example.com', 'hashed_password_24', 29, 'user', 'Wendy', 'Baker', '2023-05-12', '2024-05-12'),
    ('xander.clark', 'xander.clark@example.com', 'hashed_password_25', 31, 'user', 'Xander', 'Clark', '2023-05-12', '2024-05-12'),
    ('yara.davis', 'yara.davis@example.com', 'hashed_password_26', 27, 'admin', 'Yara', 'Davis', '2023-05-12', '2024-05-12'),
    ('zachary.evans', 'zachary.evans@example.com', 'hashed_password_27', 34, 'user', 'Zachary', 'Evans', '2023-05-12', '2024-05-12'),
    ('amy.franklin', 'amy.franklin@example.com', 'hashed_password_28', 33, 'user', 'Amy', 'Franklin', '2023-05-12', '2024-05-12'),
    ('brian.gonzalez', 'brian.gonzalez@example.com', 'hashed_password_29', 36, 'user', 'Brian', 'Gonzalez', '2023-05-12', '2024-05-12'),
    ('carol.hall', 'carol.hall@example.com', 'hashed_password_30', 38, 'admin', 'Carol', 'Hall', '2023-05-12', '2024-05-12');

-- Inserção de dados na tabela ProductCategories
INSERT IGNORE INTO ProductCategories (CategoryName)
VALUES
    ('Electronics'),
    ('Clothing'),
    ('Books'),
    ('Furniture'),
    ('Toys'),
    ('Sports Equipment'),
    ('Beauty Products'),
    ('Home Appliances'),
    ('Jewelry'),
    ('Food and Beverages'),
    ('Stationery'),
    ('Pet Supplies'),
    ('Outdoor Gear'),
    ('Health and Wellness'),
    ('Baby Products'),
    ('Automotive Parts'),
    ('Musical Instruments'),
    ('Art and Crafts'),
    ('Gardening Supplies'),
    ('Fitness Accessories'),
    ('Electrical Supplies'),
    ('Party Supplies'),
    ('Travel Accessories'),
    ('Kitchenware'),
    ('Tech Gadgets'),
    ('DIY Tools'),
    ('Fashion Accessories'),
    ('Books and Magazines'),
    ('Home Decor'),
    ('Office Furniture');

-- Inserção de dados na tabela Products
INSERT IGNORE INTO Products (Name_products, Description_products, Image_products, Price, PriceUnit, CategoryID, CreatedAt, UpdatedAt)
VALUES
    ('Microsoft Sculpt Ergonomic Wireless Keyboard', 'Designed for comfort and functionality, offers protection for your joints.', 'https://example.com/sculpt_keyboard.jpg', 80.95, 'USD', 1, '2023-05-12', '2023-05-12'),
    ('Logitech MK345 Wireless Keyboard and Mouse Set', 'Generous palm rest and spill-resistant design makes it comfortable to use.', 'https://example.com/mk345_keyboard.jpg', 39.99, 'USD', 1, '2023-05-12', '2023-05-12'),
    ('Product 3 Name', 'Product 3 Description', 'https://example.com/product3.jpg', 50.00, 'USD', 2, '2023-05-12', '2023-05-12'),
    ('Product 4 Name', 'Product 4 Description', 'https://example.com/product4.jpg', 60.00, 'USD', 2, '2023-05-12', '2023-05-12'),
    ('Product 5 Name', 'Product 5 Description', 'https://example.com/product5.jpg', 70.00, 'USD', 3, '2023-05-12', '2023-05-12'),
    ('Product 6 Name', 'Product 6 Description', 'https://example.com/product6.jpg', 80.00, 'USD', 3, '2023-05-12', '2023-05-12'),
    ('Product 7 Name', 'Product 7 Description', 'https://example.com/product7.jpg', 90.00, 'USD', 4, '2023-05-12', '2023-05-12'),
    ('Product 8 Name', 'Product 8 Description', 'https://example.com/product8.jpg', 100.00, 'USD', 4, '2023-05-12', '2023-05-12'),
    ('Product 9 Name', 'Product 9 Description', 'https://example.com/product9.jpg', 110.00, 'USD', 5, '2023-05-12', '2023-05-12'),
    ('Product 10 Name', 'Product 10 Description', 'https://example.com/product10.jpg', 120.00, 'USD', 5, '2023-05-12', '2023-05-12'),
    ('Product 11 Name', 'Product 11 Description', 'https://example.com/product11.jpg', 130.00, 'USD', 6, '2023-05-12', '2023-05-12'),
    ('Product 12 Name', 'Product 12 Description', 'https://example.com/product12.jpg', 140.00, 'USD', 6, '2023-05-12', '2023-05-12'),
    ('Product 13 Name', 'Product 13 Description', 'https://example.com/product13.jpg', 150.00, 'USD', 7, '2023-05-12', '2023-05-12'),
    ('Product 14 Name', 'Product 14 Description', 'https://example.com/product14.jpg', 160.00, 'USD', 7, '2023-05-12', '2023-05-12'),
    ('Product 15 Name', 'Product 15 Description', 'https://example.com/product15.jpg', 170.00, 'USD', 8, '2023-05-12', '2023-05-12'),
    ('Product 16 Name', 'Product 16 Description', 'https://example.com/product16.jpg', 180.00, 'USD', 8, '2023-05-12', '2023-05-12'),
    ('Product 17 Name', 'Product 17 Description', 'https://example.com/product17.jpg', 190.00, 'USD', 9, '2023-05-12', '2023-05-12'),
    ('Product 18 Name', 'Product 18 Description', 'https://example.com/product18.jpg', 200.00, 'USD', 9, '2023-05-12', '2023-05-12'),
    ('Product 19 Name', 'Product 19 Description', 'https://example.com/product19.jpg', 210.00, 'USD', 10, '2023-05-12', '2023-05-12'),
    ('Product 20 Name', 'Product 20 Description', 'https://example.com/product20.jpg', 220.00, 'USD', 10, '2023-05-12', '2023-05-12'),
    ('Product 21 Name', 'Product 21 Description', 'https://example.com/product21.jpg', 230.00, 'USD', 11, '2023-05-12', '2023-05-12'),
    ('Product 22 Name', 'Product 22 Description', 'https://example.com/product22.jpg', 240.00, 'USD', 11, '2023-05-12', '2023-05-12'),
    ('Product 23 Name', 'Product 23 Description', 'https://example.com/product23.jpg', 250.00, 'USD', 12, '2023-05-12', '2023-05-12'),
    ('Product 24 Name', 'Product 24 Description', 'https://example.com/product24.jpg', 260.00, 'USD', 12, '2023-05-12', '2023-05-12'),
    ('Product 25 Name', 'Product 25 Description', 'https://example.com/product25.jpg', 270.00, 'USD', 13, '2023-05-12', '2023-05-12'),
    ('Product 26 Name', 'Product 26 Description', 'https://example.com/product26.jpg', 280.00, 'USD', 13, '2023-05-12', '2023-05-12'),
    ('Product 27 Name', 'Product 27 Description', 'https://example.com/product27.jpg', 290.00, 'USD', 14, '2023-05-12', '2023-05-12'),
    ('Product 28 Name', 'Product 28 Description', 'https://example.com/product28.jpg', 300.00, 'USD', 14, '2023-05-12', '2023-05-12'),
    ('Product 29 Name', 'Product 29 Description', 'https://example.com/product29.jpg', 310.00, 'USD', 15, '2023-05-12', '2023-05-12'),
    ('Product 30 Name', 'Product 30 Description', 'https://example.com/product30.jpg', 320.00, 'USD', 15, '2023-05-12', '2023-05-12');

-- Inserção de dados na tabela Cart
INSERT IGNORE INTO Cart (UserID, ProductID, Quantity)
VALUES
    (1, 1, 1),
    (2, 2, 2),
    (3, 1, 3),
    (4, 3, 1),
    (5, 4, 2),
    (6, 5, 3),
    (7, 6, 1),
    (8, 7, 2),
    (9, 8, 3),
    (10, 9, 1),
    (11, 10, 2),
    (12, 11, 3),
    (13, 12, 1),
    (14, 13, 2),
    (15, 14, 3),
    (16, 15, 1),
    (17, 16, 2),
    (18, 17, 3),
    (19, 18, 1),
    (20, 19, 2),
    (21, 20, 3),
    (22, 21, 1),
    (23, 22, 2),
    (24, 23, 3),
    (25, 24, 1),
    (26, 25, 2),
    (27, 26, 3),
    (28, 27, 1),
    (29, 28, 2),
    (30, 29, 3);

COMMIT;

GRANT ALL PRIVILEGES ON api_ecommerce.* TO 'API'@'%' IDENTIFIED BY 'API' with grant option;
FLUSH PRIVILEGES;