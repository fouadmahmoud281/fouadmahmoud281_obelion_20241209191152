CREATE TABLE NCAOrderBooks (
    orderId VARCHAR(255) NOT NULL UNIQUE,
    instrument VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (orderId)
);

INSERT INTO NCAOrderBooks (orderId, instrument, price, quantity) VALUES
('order1', 'instrument1', 100.0, 10),
('order2', 'instrument2', 200.5, 20),
('order3', 'instrument3', 300.75, 30);

SELECT * FROM NCAOrderBooks;

UPDATE NCAOrderBooks SET instrument = 'updatedInstrument', price = 150.0, quantity = 15 WHERE orderId = 'order1';

DELETE FROM NCAOrderBooks WHERE orderId = 'order3';
