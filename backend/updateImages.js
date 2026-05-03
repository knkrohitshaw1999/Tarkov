const fs = require('fs');
const path = require('path');
const products = require('./data/products.js');

const brainDir = 'C:\\Users\\knkro\\.gemini\\antigravity\\brain\\86d46004-2544-4bd0-bb19-19cb16b354df';
const publicImagesDir = 'C:\\Users\\knkro\\OneDrive\\Desktop\\Tarkov\\frontend\\public\\images';

const imageMapping = [
    { keyword: 'shorts', files: ['vintage_shorts', 'sports_shorts'] },
    { keyword: 't-shirt', files: ['graphic_tshirt'] },
    { keyword: 'shirt', files: ['classic_shirt'] },
    { keyword: 'jeans', files: ['denim_jeans'] },
    { keyword: 'pants', files: ['casual_pants'] },
    { keyword: 'trousers', files: ['casual_pants'] },
    { keyword: 'jacket', files: ['winter_jacket', 'leather_jacket'] },
    { keyword: 'dress', files: ['evening_dress', 'casual_dress'] },
    { keyword: 'sweater', files: ['cozy_sweater'] },
    { keyword: 'hoodie', files: ['sporty_hoodie'] },
    { keyword: 'skirt', files: ['summer_skirt'] },
    { keyword: 'coat', files: ['elegant_coat'] },
    { keyword: 'blazer', files: ['formal_blazer'] },
    { keyword: 'cardigan', files: ['knit_cardigan'] },
    { keyword: 'vest', files: ['running_vest'] }
];

// Gather all generated images
const files = fs.readdirSync(brainDir);
const generatedImages = files.filter(f => f.endsWith('.png') && !f.startsWith('media_'));

// Copy and rename images
const availableImages = [];
generatedImages.forEach(file => {
    // extract base name e.g., casual_dress from casual_dress_1777785741094.png
    const baseName = file.split('_').slice(0, 2).join('_');
    const newFileName = `${baseName}.png`;
    availableImages.push(newFileName);
    fs.copyFileSync(path.join(brainDir, file), path.join(publicImagesDir, newFileName));
});

console.log(`Copied ${availableImages.length} images to frontend/public/images.`);

// Update products
const updatedProducts = products.map(product => {
    let matchedFile = null;
    const nameLower = product.name.toLowerCase();
    
    // Find matching category
    for (const mapping of imageMapping) {
        if (nameLower.includes(mapping.keyword)) {
            // Find an available image for this keyword
            const validImages = availableImages.filter(img => mapping.files.some(f => img.includes(f)));
            if (validImages.length > 0) {
                // Pick random from valid ones
                matchedFile = validImages[Math.floor(Math.random() * validImages.length)];
                break;
            }
        }
    }
    
    // Fallback to random if no match found
    if (!matchedFile) {
        matchedFile = availableImages[Math.floor(Math.random() * availableImages.length)];
    }
    
    return {
        ...product,
        images: [
            {
                url: `/images/${matchedFile}`,
                altText: `${product.name} Front View`
            }
        ]
    };
});

const outputContent = `// product.js:\n\nconst products = ${JSON.stringify(updatedProducts, null, 2)};\n\nmodule.exports = products;\n`;

fs.writeFileSync(path.join(__dirname, 'data', 'products.js'), outputContent, 'utf-8');
console.log('Successfully updated 1000 products with generated image URLs.');
