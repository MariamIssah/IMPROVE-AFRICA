-- Create products table
CREATE TABLE
IF NOT EXISTS products
(
  id SERIAL PRIMARY KEY,
  name VARCHAR
(255) NOT NULL,
  type VARCHAR
(100) NOT NULL,
  region VARCHAR
(255),
  price INTEGER NOT NULL,
  price_max INTEGER,
  moq INTEGER,
  stock INTEGER DEFAULT 0,
  is_organic BOOLEAN DEFAULT FALSE,
  image_url VARCHAR
(255),
  description TEXT,
  created_at TIMESTAMP
WITH TIME ZONE DEFAULT NOW
(),
  updated_at TIMESTAMP
WITH TIME ZONE DEFAULT NOW
()
);

-- Create sample data
INSERT INTO products
    (name, type, region, price, price_max, moq, stock, is_organic, description, image_url)
VALUES
    ('Obatanpa Maize', 'Maize', 'Bono East', 280, 320, 20, 500, false, 'High-yielding, quality protein maize (QPM)', 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1000'),
    ('Jasmine Rice', 'Rice', 'Volta', 800, 950, 15, 300, false, 'Aromatic long-grain rice variety', 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=1000'),
    ('Pearl Millet', 'Millet', 'Northern', 400, 450, 10, 200, true, 'Traditional drought-resistant grain', 'https://images.unsplash.com/photo-1603431777007-61db4494a034?q=80&w=1000'),
    ('Red Sorghum', 'Sorghum', 'Upper West', 350, 400, 15, 250, false, 'Used for food and brewing', 'https://images.unsplash.com/photo-1603431777007-61db4494a034?q=80&w=1000'),
    ('Fonio', 'Fonio', 'Savannah', 900, 1100, 5, 100, true, 'Ancient indigenous super grain', 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=1000'); 