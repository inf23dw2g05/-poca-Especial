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
    Age INT
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
    Price DECIMAL(10, 2),
    CategoryID INT,
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
INSERT IGNORE INTO Users (UserName, Email, Pass, Age)
VALUES
    ('john.doe', 'john.doe@example.com', 'hashed_password_1', 33),
    ('jane.smith', 'jane.smith@example.com', 'hashed_password_2', 29),
    ('robert.johnson', 'robert.johnson@example.com', 'hashed_password_3', 40),
    ('alice.brown', 'alice.brown@example.com', 'hashed_password_4', 25),
    ('charlie.davis', 'charlie.davis@example.com', 'hashed_password_5', 30),
    ('emily.evans', 'emily.evans@example.com', 'hashed_password_6', 28),
    ('frank.garcia', 'frank.garcia@example.com', 'hashed_password_7', 35),
    ('grace.harris', 'grace.harris@example.com', 'hashed_password_8', 32),
    ('henry.jackson', 'henry.jackson@example.com', 'hashed_password_9', 27),
    ('isabella.king', 'isabella.king@example.com', 'hashed_password_10', 26),
    ('jack.lee', 'jack.lee@example.com', 'hashed_password_11', 34),
    ('karen.martin', 'karen.martin@example.com', 'hashed_password_12', 31),
    ('larry.moore', 'larry.moore@example.com', 'hashed_password_13', 29),
    ('mary.perez', 'mary.perez@example.com', 'hashed_password_14', 33),
    ('nancy.roberts', 'nancy.roberts@example.com', 'hashed_password_15', 36),
    ('oliver.smith', 'oliver.smith@example.com', 'hashed_password_16', 38),
    ('paul.taylor', 'paul.taylor@example.com', 'hashed_password_17', 37),
    ('quincy.thomas', 'quincy.thomas@example.com', 'hashed_password_18', 39),
    ('rachel.white', 'rachel.white@example.com', 'hashed_password_19', 28),
    ('steve.wilson', 'steve.wilson@example.com', 'hashed_password_20', 32),
    ('tina.young', 'tina.young@example.com', 'hashed_password_21', 30),
    ('ursula.zimmerman', 'ursula.zimmerman@example.com', 'hashed_password_22', 35),
    ('victor.adams', 'victor.adams@example.com', 'hashed_password_23', 40),
    ('wendy.baker', 'wendy.baker@example.com', 'hashed_password_24', 29),
    ('xander.clark', 'xander.clark@example.com', 'hashed_password_25', 31),
    ('yara.davis', 'yara.davis@example.com', 'hashed_password_26', 27),
    ('zachary.evans', 'zachary.evans@example.com', 'hashed_password_27', 34),
    ('amy.franklin', 'amy.franklin@example.com', 'hashed_password_28', 33),
    ('brian.gonzalez', 'brian.gonzalez@example.com', 'hashed_password_29', 36),
    ('carol.hall', 'carol.hall@example.com', 'hashed_password_30', 38);

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
INSERT IGNORE INTO Products (Name_products, Description_products, Price, CategoryID)
VALUES
    ('Microsoft Sculpt Ergonomic Wireless Keyboard', 'Designed for comfort and functionality, offers protection for your joints.', 80.95, 1),
    ('Logitech MK345 Wireless Keyboard and Mouse Set', 'Generous palm rest and spill-resistant design makes it comfortable to use.', 39.99, 1),
    ('Product 3 Name', 'Product 3 Description', 50.00, 2),
    ('Product 4 Name', 'Product 4 Description', 60.00, 2),
    ('Product 5 Name', 'Product 5 Description', 70.00, 3),
    ('Product 6 Name', 'Product 6 Description', 80.00, 3),
    ('Product 7 Name', 'Product 7 Description', 90.00, 4),
    ('Product 8 Name', 'Product 8 Description', 100.00, 4),
    ('Product 9 Name', 'Product 9 Description', 110.00, 5),
    ('Product 10 Name', 'Product 10 Description', 120.00, 5),
    ('Product 11 Name', 'Product 11 Description', 130.00, 6),
    ('Product 12 Name', 'Product 12 Description', 140.00, 6),
    ('Product 13 Name', 'Product 13 Description', 150.00, 7),
    ('Product 14 Name', 'Product 14 Description', 160.00, 7),
    ('Product 15 Name', 'Product 15 Description', 170.00, 8),
    ('Product 16 Name', 'Product 16 Description', 180.00, 8),
    ('Product 17 Name', 'Product 17 Description', 190.00, 9),
    ('Product 18 Name', 'Product 18 Description', 200.00, 9),
    ('Product 19 Name', 'Product 19 Description', 210.00, 10),
    ('Product 20 Name', 'Product 20 Description', 220.00, 10),
    ('Product 21 Name', 'Product 21 Description', 230.00, 11),
    ('Product 22 Name', 'Product 22 Description', 240.00, 11),
    ('Product 23 Name', 'Product 23 Description', 250.00, 12),
    ('Product 24 Name', 'Product 24 Description', 260.00, 12),
    ('Product 25 Name', 'Product 25 Description', 270.00, 13),
    ('Product 26 Name', 'Product 26 Description', 280.00, 13),
    ('Product 27 Name', 'Product 27 Description', 290.00, 14),
    ('Product 28 Name', 'Product 28 Description', 300.00, 14),
    ('Product 29 Name', 'Product 29 Description', 310.00, 15),
    ('Product 30 Name', 'Product 30 Description', 320.00, 15);

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