const fs = require('fs');
const path = require('path');
const products = require('./data/products.js');

const imageMapping = [
    { keyword: 'skirt', files: ['summer_skirt.png'] },
    { keyword: 'dress', files: ['evening_dress.png', 'casual_dress.png'] },
    { keyword: 't-shirt', files: ['graphic_tshirt.png'] },
    { keyword: 'shirt', files: ['classic_shirt.png'] },
    { keyword: 'jeans', files: ['denim_jeans.png'] },
    { keyword: 'shorts', files: ['vintage_shorts.png', 'sports_shorts.png'] },
    { keyword: 'pants', files: ['casual_pants.png'] },
    { keyword: 'trousers', files: ['casual_pants.png'] },
    { keyword: 'jacket', files: ['winter_jacket.png', 'leather_jacket.png'] },
    { keyword: 'sweater', files: ['cozy_sweater.png'] },
    { keyword: 'hoodie', files: ['sporty_hoodie.png'] },
    { keyword: 'coat', files: ['elegant_coat.png'] },
    { keyword: 'blazer', files: ['formal_blazer.png'] },
    { keyword: 'cardigan', files: ['knit_cardigan.png'] },
    { keyword: 'vest', files: ['running_vest.png'] }
];

const availableImages = [
  'casual_dress.png', 'casual_pants.png', 'classic_shirt.png', 'cozy_sweater.png', 
  'denim_jeans.png', 'elegant_coat.png', 'evening_dress.png', 'formal_blazer.png', 
  'graphic_tshirt.png', 'knit_cardigan.png', 'leather_jacket.png', 'running_vest.png', 
  'sports_shorts.png', 'sporty_hoodie.png', 'summer_skirt.png', 'vintage_shorts.png', 
  'winter_jacket.png'
];

const updatedProducts = products.map(product => {
    const nameLower = product.name.toLowerCase();
    
    let validFiles = [];
    for (const mapping of imageMapping) {
        if (nameLower.includes(mapping.keyword)) {
            validFiles = mapping.files;
            break;
        }
    }
    
    // Fallback if no matching keyword
    if (validFiles.length === 0) {
        if (product.gender === 'Women') {
            validFiles = ['casual_dress.png', 'evening_dress.png', 'summer_skirt.png'];
        } else {
            validFiles = ['classic_shirt.png', 'graphic_tshirt.png', 'denim_jeans.png'];
        }
    }

    // Now map over existing images and replace their URL with a valid file
    const newImages = product.images.map((img, index) => {
        // cycle through valid files so we don't pick random and end up with same image twice if possible
        const chosenFile = validFiles[index % validFiles.length]; 
        return {
            ...img,
            url: `/images/${chosenFile}`
        };
    });

    return {
        ...product,
        images: newImages
    };
});

const outputContent = `// product.js:\n\nconst products = ${JSON.stringify(updatedProducts, null, 2)};\n\nmodule.exports = products;\n`;

fs.writeFileSync(path.join(__dirname, 'data', 'products.js'), outputContent, 'utf-8');
console.log('Fixed images in products.js');
