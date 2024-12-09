-- Use the required database
USE Testing_OBOOK;

-- Create the NCAOrderBook table
CREATE TABLE NCAOrderBook (
  orderId VARCHAR(255) NOT NULL UNIQUE,
  instrument VARCHAR(255) NOT NULL,
  price FLOAT NOT NULL CHECK (price >= 0),
  quantity INT NOT NULL CHECK (quantity >= 1),
  PRIMARY KEY (orderId)
);

-- Insert sample data into the NCAOrderBook table
INSERT INTO NCAOrderBook (orderId, instrument, price, quantity) VALUES
('order001', 'Instrument1', 150.50, 10),
('order002', 'Instrument2', 200.75, 5),
('order003', 'Instrument3', 50.25, 20);

-- Retrieve all data from the NCAOrderBook table
SELECT * FROM NCAOrderBook;

-- Update an order in the NCAOrderBook table
UPDATE NCAOrderBook
SET instrument = 'UpdatedInstrument', price = 175.00, quantity = 15
WHERE orderId = 'order001';

-- Delete an order from the NCAOrderBook table
DELETE FROM NCAOrderBook WHERE orderId = 'order002';

-- Seeder file for inserting data
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('NCAOrderBook', [
    { orderId: 'order004', instrument: 'Instrument4', price: 100.00, quantity: 10 },
    { orderId: 'order005', instrument: 'Instrument5', price: 250.00, quantity: 8 }
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('NCAOrderBook', null, {})
};
