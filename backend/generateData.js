const fs = require('fs');
const path = require('path');
const existingProducts = require('./data/products.js');

const adjectives = ["Classic", "Modern", "Vintage", "Elegant", "Casual", "Sporty", "Chic", "Urban", "Rustic", "Premium", "Essential", "Cozy", "Lightweight", "Durable", "Sleek"];
const clothingTypes = ["Shirt", "T-Shirt", "Pants", "Jeans", "Jacket", "Sweater", "Hoodie", "Shorts", "Dress", "Skirt", "Coat", "Blazer", "Cardigan", "Vest"];
const colors = ["Red", "Blue", "Green", "Black", "White", "Gray", "Yellow", "Purple", "Pink", "Brown", "Navy", "Olive", "Beige", "Maroon", "Teal"];
const materials = ["Cotton", "Polyester", "Wool", "Linen", "Denim", "Leather", "Silk", "Fleece", "Nylon", "Spandex"];
const brands = ["Urban Threads", "ChicWrap", "StyleCo", "Aero", "DenimX", "ActiveWear", "ClassicFit", "Luxe", "TrendSetter"];
const categories = ["Top Wear", "Bottom Wear", "Outerwear", "Dresses", "Activewear"];
const genders = ["Men", "Women", "Unisex"];
const collectionsList = ["Summer Collection", "Winter Wear", "Business Casual", "Athleisure", "Evening Collection", "Everyday Basics"];

const newProducts = [];
const existingNames = new Set(existingProducts.map(p => p.name));

let count = 0;
while (newProducts.length < 960) {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const type = clothingTypes[Math.floor(Math.random() * clothingTypes.length)];
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  const material = materials[Math.floor(Math.random() * materials.length)];
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const gender = genders[Math.floor(Math.random() * genders.length)];
  const collection = collectionsList[Math.floor(Math.random() * collectionsList.length)];
  
  const name = `${adjective} ${material} ${type} - ${count}`;
  if (existingNames.has(name)) {
    count++;
    continue;
  }
  
  const basePrice = Math.floor(Math.random() * 100) + 20 + 0.99;
  const hasDiscount = Math.random() > 0.5;
  const discountPrice = hasDiscount ? basePrice - Math.floor(Math.random() * 10) - 1 : undefined;
  
  const product = {
    name,
    description: `A ${adjective.toLowerCase()} ${type.toLowerCase()} made from high-quality ${material.toLowerCase()}. Perfect for ${collection.toLowerCase()}. Features a comfortable fit and durable design.`,
    price: basePrice,
    discountPrice,
    countInStock: Math.floor(Math.random() * 100),
    sku: `GEN-${Date.now()}-${count}`,
    category,
    brand,
    sizes: ["S", "M", "L", "XL"],
    colors: Array.from(new Set([color1, color2])),
    collections: collection,
    material,
    gender,
    images: [
      {
        url: `https://picsum.photos/500/500?random=${count + 100}`,
        altText: `${name} Front View`,
      }
    ],
    rating: Number((Math.random() * 2 + 3).toFixed(1)), // 3.0 to 5.0
    numReviews: Math.floor(Math.random() * 100)
  };
  
  if (product.discountPrice === undefined) {
      delete product.discountPrice;
  }
  
  newProducts.push(product);
  existingNames.add(name);
  count++;
}

const allProducts = [...existingProducts, ...newProducts];

const outputContent = `// product.js:

const products = ${JSON.stringify(allProducts, null, 2)};

module.exports = products;
`;

fs.writeFileSync(path.join(__dirname, 'data', 'products.js'), outputContent, 'utf-8');
console.log('Successfully added 960 new products to products.js. Total products:', allProducts.length);
