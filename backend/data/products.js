// product.js:

const products = [
  {
    "name": "Classic Oxford Button-Down Shirt",
    "description": "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
    "price": 39.99,
    "discountPrice": 34.99,
    "countInStock": 20,
    "sku": "OX-SH-001",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Red",
      "Blue",
      "Yellow"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Classic Oxford Button-Down Shirt - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Classic Oxford Button-Down Shirt - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 12
  },
  {
    "name": "Slim-Fit Stretch Shirt",
    "description": "A versatile slim-fit shirt perfect for business or evening events. Designed with a fitted silhouette, the added stretch provides maximum comfort throughout the day. Features a crisp turn-down collar, button placket, and adjustable cuffs.",
    "price": 29.99,
    "discountPrice": 24.99,
    "countInStock": 35,
    "sku": "SLIM-SH-002",
    "category": "Top Wear",
    "brand": "Modern Fit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Navy Blue",
      "Burgundy"
    ],
    "collections": "Formal Wear",
    "material": "Cotton Blend",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Slim-Fit Stretch Shirt - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Slim-Fit Stretch Shirt - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 15
  },
  {
    "name": "Casual Denim Shirt",
    "description": "This casual denim shirt is made from lightweight cotton denim. It features a regular fit, snap buttons, and a straight hem. With Western-inspired details, this shirt is perfect for layering or wearing solo.",
    "price": 49.99,
    "discountPrice": 44.99,
    "countInStock": 15,
    "sku": "CAS-DEN-003",
    "category": "Top Wear",
    "brand": "Street Style",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Light Blue",
      "Dark Wash"
    ],
    "collections": "Casual Wear",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Casual Denim Shirt - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Casual Denim Shirt - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 8
  },
  {
    "name": "Printed Resort Shirt",
    "description": "Designed for summer, this printed resort shirt is perfect for vacation or weekend getaways. It features a relaxed fit, short sleeves, and a camp collar. The all-over tropical print adds a playful vibe.",
    "price": 29.99,
    "discountPrice": 22.99,
    "countInStock": 25,
    "sku": "PRNT-RES-004",
    "category": "Top Wear",
    "brand": "Beach Breeze",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Tropical Print",
      "Navy Palms"
    ],
    "collections": "Vacation Wear",
    "material": "Viscose",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Printed Resort Shirt - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Printed Resort Shirt - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 10
  },
  {
    "name": "Slim-Fit Easy-Iron Shirt",
    "description": "A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket, and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.",
    "price": 34.99,
    "discountPrice": 29.99,
    "countInStock": 30,
    "sku": "SLIM-EIR-005",
    "category": "Top Wear",
    "brand": "Urban Chic",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Gray"
    ],
    "collections": "Business Wear",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Slim-Fit Easy-Iron Shirt - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Slim-Fit Easy-Iron Shirt - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 14
  },
  {
    "name": "Polo T-Shirt with Ribbed Collar",
    "description": "A wardrobe classic, this polo t-shirt features a ribbed collar and cuffs. Made from 100% cotton, it offers breathability and comfort throughout the day. Tailored in a slim fit with a button placket at the neckline.",
    "price": 24.99,
    "discountPrice": 19.99,
    "countInStock": 50,
    "sku": "POLO-TSH-006",
    "category": "Top Wear",
    "brand": "Polo Classics",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Navy",
      "Red"
    ],
    "collections": "Casual Wear",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Polo T-Shirt with Ribbed Collar - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Polo T-Shirt with Ribbed Collar - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 22
  },
  {
    "name": "Oversized Graphic T-Shirt",
    "description": "An oversized graphic t-shirt that combines comfort with street style. Featuring bold prints across the chest, this relaxed fit tee offers a modern vibe, perfect for pairing with jeans or joggers.",
    "price": 19.99,
    "discountPrice": 15.99,
    "countInStock": 40,
    "sku": "OVS-GRF-007",
    "category": "Top Wear",
    "brand": "Street Vibes",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Gray"
    ],
    "collections": "Streetwear",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Oversized Graphic T-Shirt - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Oversized Graphic T-Shirt - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 30
  },
  {
    "name": "Regular-Fit Henley Shirt",
    "description": "A modern take on the classic Henley shirt, this regular-fit style features a buttoned placket and ribbed cuffs. Made from a soft cotton blend with a touch of elastane for stretch.",
    "price": 22.99,
    "discountPrice": 18.99,
    "countInStock": 35,
    "sku": "REG-HEN-008",
    "category": "Top Wear",
    "brand": "Heritage Wear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Heather Gray",
      "Olive",
      "Black"
    ],
    "collections": "Casual Wear",
    "material": "Cotton Blend",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Regular-Fit Henley Shirt - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Regular-Fit Henley Shirt - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 25
  },
  {
    "name": "Long-Sleeve Thermal Tee",
    "description": "Stay warm with this long-sleeve thermal tee, made from soft cotton with a waffle-knit texture. Ideal for layering in cooler months, the slim-fit design ensures a snug yet comfortable fit.",
    "price": 27.99,
    "discountPrice": 22.99,
    "countInStock": 20,
    "sku": "LST-THR-009",
    "category": "Top Wear",
    "brand": "Winter Basics",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Charcoal",
      "Dark Green",
      "Navy"
    ],
    "collections": "Winter Essentials",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Long-Sleeve Thermal Tee - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Long-Sleeve Thermal Tee - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 18
  },
  {
    "name": "V-Neck Classic T-Shirt",
    "description": "A classic V-neck t-shirt for everyday wear. This regular-fit tee is made from breathable cotton and features a clean, simple design with a flattering V-neckline. Lightweight fabric and soft texture make it perfect for casual looks.",
    "price": 14.99,
    "discountPrice": 11.99,
    "countInStock": 60,
    "sku": "VNECK-CLS-010",
    "category": "Top Wear",
    "brand": "Everyday Comfort",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Black",
      "Navy"
    ],
    "collections": "Basics",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "V-Neck Classic T-Shirt - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "V-Neck Classic T-Shirt - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 28
  },
  {
    "name": "Slim Fit Joggers",
    "description": "Slim-fit joggers with an elasticated drawstring waist. Features ribbed hems and side pockets. Ideal for casual outings or workouts.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 20,
    "sku": "BW-001",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Gray",
      "Navy"
    ],
    "collections": "Casual Collection",
    "material": "Cotton Blend",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Slim Fit Joggers - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Slim Fit Joggers - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 12
  },
  {
    "name": "Cargo Joggers",
    "description": "Relaxed-fit cargo joggers featuring multiple pockets for functionality. Drawstring waist and cuffed hems for a modern look.",
    "price": 45,
    "discountPrice": 40,
    "countInStock": 15,
    "sku": "BW-002",
    "category": "Bottom Wear",
    "brand": "UrbanStyle",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Black"
    ],
    "collections": "Urban Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Cargo Joggers - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Cargo Joggers - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 20
  },
  {
    "name": "Tapered Sweatpants",
    "description": "Tapered sweatpants designed for comfort. Elastic waistband with adjustable drawstring, perfect for lounging or athletic activities.",
    "price": 35,
    "discountPrice": 30,
    "countInStock": 25,
    "sku": "BW-003",
    "category": "Bottom Wear",
    "brand": "ChillZone",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Charcoal",
      "Blue"
    ],
    "collections": "Lounge Collection",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Tapered Sweatpants - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Tapered Sweatpants - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 18
  },
  {
    "name": "Denim Jeans",
    "description": "Classic slim-fit denim jeans with a slight stretch for comfort. Features a zip fly and five-pocket styling for a timeless look.",
    "price": 60,
    "discountPrice": 50,
    "countInStock": 30,
    "sku": "BW-004",
    "category": "Bottom Wear",
    "brand": "DenimCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Dark Blue",
      "Light Blue"
    ],
    "collections": "Denim Collection",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Denim Jeans - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Denim Jeans - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 22
  },
  {
    "name": "Chino Pants",
    "description": "Slim-fit chino pants made from stretch cotton twill. Features a button closure and front and back pockets. Ideal for both casual and semi-formal wear.",
    "price": 55,
    "discountPrice": 48,
    "countInStock": 40,
    "sku": "BW-005",
    "category": "Bottom Wear",
    "brand": "CasualLook",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Navy",
      "Black"
    ],
    "collections": "Smart Casual Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Chino Pants - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Chino Pants - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 15
  },
  {
    "name": "Track Pants",
    "description": "Comfortable track pants with an elasticated waistband and tapered leg. Features side stripes for a sporty look. Ideal for athletic and casual wear.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 20,
    "sku": "BW-006",
    "category": "Bottom Wear",
    "brand": "SportX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Red",
      "Blue"
    ],
    "collections": "Activewear Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Track Pants - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Track Pants - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 17
  },
  {
    "name": "Slim Fit Trousers",
    "description": "Tailored slim-fit trousers with belt loops and a hook-and-eye closure. Suitable for formal occasions or smart-casual wear.",
    "price": 65,
    "discountPrice": 55,
    "countInStock": 15,
    "sku": "BW-007",
    "category": "Bottom Wear",
    "brand": "ExecutiveStyle",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "collections": "Office Wear",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Slim Fit Trousers - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Slim Fit Trousers - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 10
  },
  {
    "name": "Cargo Pants",
    "description": "Loose-fit cargo pants with multiple utility pockets. Features adjustable ankle cuffs and a drawstring waist for versatility and comfort.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 25,
    "sku": "BW-008",
    "category": "Bottom Wear",
    "brand": "StreetWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Brown",
      "Black"
    ],
    "collections": "Street Style Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Cargo Pants - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Cargo Pants - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 13
  },
  {
    "name": "Relaxed Fit Sweatpants",
    "description": "Relaxed-fit sweatpants made from soft fleece fabric. Features an elastic waist and adjustable drawstring for a custom fit.",
    "price": 35,
    "discountPrice": 30,
    "countInStock": 35,
    "sku": "BW-009",
    "category": "Bottom Wear",
    "brand": "LoungeWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black",
      "Navy"
    ],
    "collections": "Lounge Collection",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Relaxed Fit Sweatpants - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Relaxed Fit Sweatpants - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 14
  },
  {
    "name": "Formal Dress Pants",
    "description": "Classic formal dress pants with a slim fit. Made from lightweight, wrinkle-resistant fabric for a polished look at the office or formal events.",
    "price": 70,
    "discountPrice": 60,
    "countInStock": 20,
    "sku": "BW-010",
    "category": "Bottom Wear",
    "brand": "ElegantStyle",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Navy"
    ],
    "collections": "Formal Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Formal Dress Pants - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Formal Dress Pants - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 8
  },
  {
    "name": "High-Waist Skinny Jeans",
    "description": "High-waist skinny jeans in stretch denim with a button and zip fly. Features a flattering fit that hugs your curves and enhances your silhouette.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 30,
    "sku": "BW-W-001",
    "category": "Bottom Wear",
    "brand": "DenimStyle",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Dark Blue",
      "Black",
      "Light Blue"
    ],
    "collections": "Denim Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "High-Waist Skinny Jeans - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "High-Waist Skinny Jeans - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 20
  },
  {
    "name": "Wide-Leg Trousers",
    "description": "Flowy, wide-leg trousers with a high waist and side pockets. Perfect for an elegant look that combines comfort and style.",
    "price": 60,
    "discountPrice": 55,
    "countInStock": 25,
    "sku": "BW-W-002",
    "category": "Bottom Wear",
    "brand": "ElegantWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Black",
      "White"
    ],
    "collections": "Formal Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Wide-Leg Trousers - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Wide-Leg Trousers - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 15
  },
  {
    "name": "Stretch Leggings",
    "description": "Soft, stretch leggings in a high-rise style. Perfect for lounging, working out, or casual wear, with a smooth fit that flatters your body.",
    "price": 25,
    "discountPrice": 20,
    "countInStock": 40,
    "sku": "BW-W-003",
    "category": "Bottom Wear",
    "brand": "ComfyFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Gray",
      "Navy"
    ],
    "collections": "Activewear Collection",
    "material": "Cotton Blend",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_dress.png",
        "altText": "Stretch Leggings - Front View"
      },
      {
        "url": "/images/evening_dress.png",
        "altText": "Stretch Leggings - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 30
  },
  {
    "name": "Pleated Midi Skirt",
    "description": "Elegant pleated midi skirt with a high waistband and soft fabric that drapes beautifully. Ideal for both formal and casual occasions.",
    "price": 55,
    "discountPrice": 50,
    "countInStock": 20,
    "sku": "BW-W-004",
    "category": "Bottom Wear",
    "brand": "ChicStyle",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Pink",
      "Navy",
      "Black"
    ],
    "collections": "Spring Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Pleated Midi Skirt - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Pleated Midi Skirt - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 18
  },
  {
    "name": "Flared Palazzo Pants",
    "description": "High-waist palazzo pants with a loose, flowing fit. Comfortable and stylish, making them perfect for casual outings or beach days.",
    "price": 45,
    "discountPrice": 40,
    "countInStock": 35,
    "sku": "BW-W-005",
    "category": "Bottom Wear",
    "brand": "BreezyVibes",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Beige",
      "Light Blue"
    ],
    "collections": "Summer Collection",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Flared Palazzo Pants - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Flared Palazzo Pants - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 22
  },
  {
    "name": "High-Rise Joggers",
    "description": "Comfortable high-rise joggers with an elastic waistband and drawstring for a perfect fit. Great for lounging or working out.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 30,
    "sku": "BW-W-006",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Black",
      "Gray",
      "Pink"
    ],
    "collections": "Loungewear Collection",
    "material": "Cotton Blend",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_dress.png",
        "altText": "High-Rise Joggers - Front View"
      },
      {
        "url": "/images/evening_dress.png",
        "altText": "High-Rise Joggers - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 25
  },
  {
    "name": "Paperbag Waist Shorts",
    "description": "Stylish paperbag waist shorts with a belted waist and wide legs. Perfect for summer outings and keeping cool in style.",
    "price": 35,
    "discountPrice": 30,
    "countInStock": 20,
    "sku": "BW-W-007",
    "category": "Bottom Wear",
    "brand": "SunnyStyle",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "White",
      "Khaki",
      "Blue"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Paperbag Waist Shorts - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Paperbag Waist Shorts - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 19
  },
  {
    "name": "Stretch Denim Shorts",
    "description": "Comfortable stretch denim shorts with a high-waisted fit and raw hem. Perfect for pairing with your favorite tops during warmer months.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 25,
    "sku": "BW-W-008",
    "category": "Bottom Wear",
    "brand": "DenimStyle",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Black",
      "White"
    ],
    "collections": "Denim Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Stretch Denim Shorts - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Stretch Denim Shorts - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 15
  },
  {
    "name": "Culottes",
    "description": "Wide-leg culottes with a flattering high waist and cropped length. The perfect blend of comfort and style for any casual occasion.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 30,
    "sku": "BW-W-009",
    "category": "Bottom Wear",
    "brand": "ChicStyle",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "White",
      "Olive"
    ],
    "collections": "Casual Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_dress.png",
        "altText": "Culottes - Front View"
      },
      {
        "url": "/images/evening_dress.png",
        "altText": "Culottes - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 23
  },
  {
    "name": "Classic Pleated Trousers",
    "description": "Timeless pleated trousers with a tailored fit. A wardrobe essential for workwear or formal occasions.",
    "price": 70,
    "discountPrice": 65,
    "countInStock": 25,
    "sku": "BW-W-010",
    "category": "Bottom Wear",
    "brand": "ElegantWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Black",
      "Gray"
    ],
    "collections": "Formal Collection",
    "material": "Wool Blend",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Pleated Trousers - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Pleated Trousers - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 20
  },
  {
    "name": "Knitted Cropped Top",
    "description": "A stylish knitted cropped top with a flattering fitted silhouette. Perfect for pairing with high-waisted jeans or skirts for a casual look.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 25,
    "sku": "TW-W-001",
    "category": "Top Wear",
    "brand": "ChicKnit",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Beige",
      "White"
    ],
    "collections": "Knits Collection",
    "material": "Cotton Blend",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_dress.png",
        "altText": "Knitted Cropped Top - Front View"
      },
      {
        "url": "/images/evening_dress.png",
        "altText": "Knitted Cropped Top - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 15
  },
  {
    "name": "Boho Floral Blouse",
    "description": "Flowy boho blouse with floral patterns, featuring a relaxed fit and balloon sleeves. Ideal for casual summer days.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 30,
    "sku": "TW-W-002",
    "category": "Top Wear",
    "brand": "BohoVibes",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Viscose",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_dress.png",
        "altText": "Boho Floral Blouse - Front View"
      },
      {
        "url": "/images/evening_dress.png",
        "altText": "Boho Floral Blouse - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 20
  },
  {
    "name": "Casual T-Shirt",
    "description": "A soft, breathable casual t-shirt with a classic fit. Features a round neckline and short sleeves, perfect for everyday wear.",
    "price": 25,
    "discountPrice": 20,
    "countInStock": 50,
    "sku": "TW-W-003",
    "category": "Top Wear",
    "brand": "ComfyTees",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "White",
      "Gray"
    ],
    "collections": "Essentials",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Casual T-Shirt - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Casual T-Shirt - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 25
  },
  {
    "name": "Off-Shoulder Top",
    "description": "An elegant off-shoulder top with ruffled sleeves and a flattering fit. Ideal for adding a touch of femininity to your outfit.",
    "price": 45,
    "discountPrice": 40,
    "countInStock": 35,
    "sku": "TW-W-004",
    "category": "Top Wear",
    "brand": "Elegance",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Red",
      "White",
      "Blue"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_dress.png",
        "altText": "Off-Shoulder Top - Front View"
      },
      {
        "url": "/images/evening_dress.png",
        "altText": "Off-Shoulder Top - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 18
  },
  {
    "name": "Lace-Trimmed Cami Top",
    "description": "A delicate cami top with lace trim and adjustable straps. The lightweight fabric makes it perfect for layering or wearing alone during warmer weather.",
    "price": 35,
    "discountPrice": 30,
    "countInStock": 40,
    "sku": "TW-W-005",
    "category": "Top Wear",
    "brand": "DelicateWear",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Black",
      "White"
    ],
    "collections": "Lingerie-Inspired",
    "material": "Silk Blend",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_dress.png",
        "altText": "Lace-Trimmed Cami Top - Front View"
      },
      {
        "url": "/images/evening_dress.png",
        "altText": "Lace-Trimmed Cami Top - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 22
  },
  {
    "name": "Graphic Print Tee",
    "description": "A trendy graphic print tee with a relaxed fit. Pair it with jeans or skirts for a cool and casual look.",
    "price": 30,
    "discountPrice": 25,
    "countInStock": 45,
    "sku": "TW-W-006",
    "category": "Top Wear",
    "brand": "StreetStyle",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Black"
    ],
    "collections": "Urban Collection",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_dress.png",
        "altText": "Graphic Print Tee - Front View"
      },
      {
        "url": "/images/evening_dress.png",
        "altText": "Graphic Print Tee - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 30
  },
  {
    "name": "Ribbed Long-Sleeve Top",
    "description": "A cozy ribbed long-sleeve top that offers comfort and style. Perfect for layering during cooler months.",
    "price": 55,
    "discountPrice": 50,
    "countInStock": 30,
    "sku": "TW-W-007",
    "category": "Top Wear",
    "brand": "ComfortFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Pink",
      "Brown"
    ],
    "collections": "Fall Collection",
    "material": "Cotton Blend",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_dress.png",
        "altText": "Ribbed Long-Sleeve Top - Front View"
      },
      {
        "url": "/images/evening_dress.png",
        "altText": "Ribbed Long-Sleeve Top - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 26
  },
  {
    "name": "Ruffle-Sleeve Blouse",
    "description": "A lightweight ruffle-sleeve blouse with a flattering fit. Perfect for a feminine touch to any outfit.",
    "price": 45,
    "discountPrice": 40,
    "countInStock": 20,
    "sku": "TW-W-008",
    "category": "Top Wear",
    "brand": "FeminineWear",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "White",
      "Navy",
      "Lavender"
    ],
    "collections": "Summer Collection",
    "material": "Viscose",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_dress.png",
        "altText": "Ruffle-Sleeve Blouse - Front View"
      },
      {
        "url": "/images/evening_dress.png",
        "altText": "Ruffle-Sleeve Blouse - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 19
  },
  {
    "name": "Classic Button-Up Shirt",
    "description": "A versatile button-up shirt that can be dressed up or down. Made from soft fabric with a tailored fit, it's perfect for both casual and formal occasions.",
    "price": 60,
    "discountPrice": 55,
    "countInStock": 25,
    "sku": "TW-W-009",
    "category": "Top Wear",
    "brand": "ClassicStyle",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Light Blue",
      "Black"
    ],
    "collections": "Office Collection",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Classic Button-Up Shirt - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Classic Button-Up Shirt - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 25
  },
  {
    "name": "V-Neck Wrap Top",
    "description": "A chic v-neck wrap top with a tie waist. Its elegant style makes it perfect for both casual and semi-formal occasions.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 30,
    "sku": "TW-W-010",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Red",
      "Black",
      "White"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_dress.png",
        "altText": "V-Neck Wrap Top - Front View"
      },
      {
        "url": "/images/evening_dress.png",
        "altText": "V-Neck Wrap Top - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 22
  },
  {
    "name": "Vintage Spandex Shirt - 0",
    "description": "A vintage shirt made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 52.99,
    "discountPrice": 48.99,
    "countInStock": 4,
    "sku": "GEN-1777784926957-0",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Vintage Spandex Shirt - 0 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Vintage Spandex Shirt - 0 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 21
  },
  {
    "name": "Chic Nylon Sweater - 1",
    "description": "A chic sweater made from high-quality nylon. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 33.99,
    "countInStock": 44,
    "sku": "GEN-1777784926959-1",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Chic Nylon Sweater - 1 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Chic Nylon Sweater - 1 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 68
  },
  {
    "name": "Chic Nylon Cardigan - 2",
    "description": "A chic cardigan made from high-quality nylon. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 92.99,
    "discountPrice": 89.99,
    "countInStock": 50,
    "sku": "GEN-1777784926959-2",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Pink"
    ],
    "collections": "Winter Wear",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Chic Nylon Cardigan - 2 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Chic Nylon Cardigan - 2 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 53
  },
  {
    "name": "Sleek Denim Shirt - 3",
    "description": "A sleek shirt made from high-quality denim. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 43.99,
    "countInStock": 40,
    "sku": "GEN-1777784926959-3",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Gray"
    ],
    "collections": "Summer Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Sleek Denim Shirt - 3 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Sleek Denim Shirt - 3 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 21
  },
  {
    "name": "Classic Spandex Jeans - 4",
    "description": "A classic jeans made from high-quality spandex. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 100.99,
    "discountPrice": 92.99,
    "countInStock": 75,
    "sku": "GEN-1777784926959-4",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Yellow"
    ],
    "collections": "Evening Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Spandex Jeans - 4 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Spandex Jeans - 4 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 25
  },
  {
    "name": "Urban Fleece Jeans - 5",
    "description": "A urban jeans made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 79.99,
    "countInStock": 86,
    "sku": "GEN-1777784926959-5",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Teal"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Urban Fleece Jeans - 5 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Urban Fleece Jeans - 5 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 53
  },
  {
    "name": "Cozy Wool Blazer - 6",
    "description": "A cozy blazer made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 80.99,
    "countInStock": 9,
    "sku": "GEN-1777784926959-6",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Purple"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Cozy Wool Blazer - 6 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Cozy Wool Blazer - 6 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 23
  },
  {
    "name": "Sleek Linen Hoodie - 7",
    "description": "A sleek hoodie made from high-quality linen. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 64.99,
    "countInStock": 69,
    "sku": "GEN-1777784926959-7",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Evening Collection",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sleek Linen Hoodie - 7 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sleek Linen Hoodie - 7 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 1
  },
  {
    "name": "Casual Denim Jacket - 8",
    "description": "A casual jacket made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 103.99,
    "discountPrice": 94.99,
    "countInStock": 46,
    "sku": "GEN-1777784926959-8",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Green"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Casual Denim Jacket - 8 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Casual Denim Jacket - 8 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 63
  },
  {
    "name": "Cozy Nylon Pants - 9",
    "description": "A cozy pants made from high-quality nylon. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 61.99,
    "discountPrice": 58.99,
    "countInStock": 2,
    "sku": "GEN-1777784926959-9",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Teal"
    ],
    "collections": "Evening Collection",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Nylon Pants - 9 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Nylon Pants - 9 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 26
  },
  {
    "name": "Vintage Linen Cardigan - 10",
    "description": "A vintage cardigan made from high-quality linen. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 60.99,
    "discountPrice": 55.99,
    "countInStock": 16,
    "sku": "GEN-1777784926959-10",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Yellow"
    ],
    "collections": "Evening Collection",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Vintage Linen Cardigan - 10 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Vintage Linen Cardigan - 10 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 51
  },
  {
    "name": "Cozy Spandex Cardigan - 11",
    "description": "A cozy cardigan made from high-quality spandex. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 86.99,
    "countInStock": 51,
    "sku": "GEN-1777784926960-11",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Cozy Spandex Cardigan - 11 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Cozy Spandex Cardigan - 11 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 46
  },
  {
    "name": "Vintage Polyester Shorts - 12",
    "description": "A vintage shorts made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 45.99,
    "countInStock": 21,
    "sku": "GEN-1777784926960-12",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Beige"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Vintage Polyester Shorts - 12 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Vintage Polyester Shorts - 12 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 97
  },
  {
    "name": "Premium Wool Vest - 13",
    "description": "A premium vest made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 29.99,
    "discountPrice": 24.99,
    "countInStock": 26,
    "sku": "GEN-1777784926960-13",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Pink"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Premium Wool Vest - 13 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Premium Wool Vest - 13 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 66
  },
  {
    "name": "Chic Nylon Cardigan - 14",
    "description": "A chic cardigan made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 79.99,
    "countInStock": 25,
    "sku": "GEN-1777784926960-14",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Red"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Chic Nylon Cardigan - 14 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Chic Nylon Cardigan - 14 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 82
  },
  {
    "name": "Durable Leather Cardigan - 15",
    "description": "A durable cardigan made from high-quality leather. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 46.99,
    "discountPrice": 37.99,
    "countInStock": 19,
    "sku": "GEN-1777784926960-15",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Yellow"
    ],
    "collections": "Everyday Basics",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Leather Cardigan - 15 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Leather Cardigan - 15 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 32
  },
  {
    "name": "Chic Linen Sweater - 16",
    "description": "A chic sweater made from high-quality linen. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 67.99,
    "countInStock": 75,
    "sku": "GEN-1777784926960-16",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "White"
    ],
    "collections": "Business Casual",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Chic Linen Sweater - 16 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Chic Linen Sweater - 16 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 48
  },
  {
    "name": "Elegant Spandex Vest - 17",
    "description": "A elegant vest made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 31.99,
    "discountPrice": 28.99,
    "countInStock": 61,
    "sku": "GEN-1777784926960-17",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Spandex Vest - 17 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Spandex Vest - 17 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 63
  },
  {
    "name": "Premium Linen Coat - 18",
    "description": "A premium coat made from high-quality linen. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 52.99,
    "countInStock": 35,
    "sku": "GEN-1777784926960-18",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Blue"
    ],
    "collections": "Evening Collection",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Premium Linen Coat - 18 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Premium Linen Coat - 18 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 85
  },
  {
    "name": "Sleek Polyester T-Shirt - 19",
    "description": "A sleek t-shirt made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 26.99,
    "countInStock": 17,
    "sku": "GEN-1777784926960-19",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Blue"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Sleek Polyester T-Shirt - 19 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Sleek Polyester T-Shirt - 19 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 7
  },
  {
    "name": "Durable Silk Pants - 20",
    "description": "A durable pants made from high-quality silk. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 44.99,
    "discountPrice": 38.99,
    "countInStock": 4,
    "sku": "GEN-1777784926960-20",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Olive"
    ],
    "collections": "Athleisure",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Silk Pants - 20 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Silk Pants - 20 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 67
  },
  {
    "name": "Lightweight Polyester Dress - 21",
    "description": "A lightweight dress made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 28.99,
    "discountPrice": 27.99,
    "countInStock": 5,
    "sku": "GEN-1777784926960-21",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Black"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Lightweight Polyester Dress - 21 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Lightweight Polyester Dress - 21 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 0
  },
  {
    "name": "Cozy Spandex Jeans - 22",
    "description": "A cozy jeans made from high-quality spandex. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 45.99,
    "countInStock": 63,
    "sku": "GEN-1777784926960-22",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Teal"
    ],
    "collections": "Business Casual",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Cozy Spandex Jeans - 22 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Cozy Spandex Jeans - 22 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 38
  },
  {
    "name": "Sleek Denim Shorts - 23",
    "description": "A sleek shorts made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 119.99,
    "discountPrice": 115.99,
    "countInStock": 59,
    "sku": "GEN-1777784926960-23",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Purple"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Sleek Denim Shorts - 23 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Sleek Denim Shorts - 23 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 24
  },
  {
    "name": "Rustic Nylon Jeans - 24",
    "description": "A rustic jeans made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 83.99,
    "discountPrice": 78.99,
    "countInStock": 42,
    "sku": "GEN-1777784926960-24",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Navy"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Rustic Nylon Jeans - 24 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Rustic Nylon Jeans - 24 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 82
  },
  {
    "name": "Chic Nylon Cardigan - 25",
    "description": "A chic cardigan made from high-quality nylon. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 118.99,
    "countInStock": 1,
    "sku": "GEN-1777784926960-25",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Beige"
    ],
    "collections": "Summer Collection",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Chic Nylon Cardigan - 25 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Chic Nylon Cardigan - 25 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 32
  },
  {
    "name": "Casual Fleece Coat - 26",
    "description": "A casual coat made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 114.99,
    "countInStock": 34,
    "sku": "GEN-1777784926960-26",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Casual Fleece Coat - 26 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Casual Fleece Coat - 26 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 30
  },
  {
    "name": "Casual Nylon Hoodie - 27",
    "description": "A casual hoodie made from high-quality nylon. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 33.99,
    "countInStock": 13,
    "sku": "GEN-1777784926960-27",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Maroon"
    ],
    "collections": "Everyday Basics",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Casual Nylon Hoodie - 27 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Casual Nylon Hoodie - 27 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 59
  },
  {
    "name": "Casual Nylon Hoodie - 28",
    "description": "A casual hoodie made from high-quality nylon. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 71.99,
    "countInStock": 93,
    "sku": "GEN-1777784926960-28",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Casual Nylon Hoodie - 28 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Casual Nylon Hoodie - 28 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 8
  },
  {
    "name": "Lightweight Polyester Vest - 29",
    "description": "A lightweight vest made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 59.99,
    "countInStock": 28,
    "sku": "GEN-1777784926960-29",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Beige"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Lightweight Polyester Vest - 29 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Lightweight Polyester Vest - 29 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 64
  },
  {
    "name": "Cozy Fleece Hoodie - 30",
    "description": "A cozy hoodie made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 25.99,
    "discountPrice": 15.989999999999998,
    "countInStock": 12,
    "sku": "GEN-1777784926960-30",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Olive"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Cozy Fleece Hoodie - 30 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Cozy Fleece Hoodie - 30 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 20
  },
  {
    "name": "Casual Wool Cardigan - 31",
    "description": "A casual cardigan made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 25.99,
    "discountPrice": 19.99,
    "countInStock": 65,
    "sku": "GEN-1777784926960-31",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Black"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Wool Cardigan - 31 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Wool Cardigan - 31 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 54
  },
  {
    "name": "Essential Linen Shorts - 32",
    "description": "A essential shorts made from high-quality linen. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 106.99,
    "discountPrice": 97.99,
    "countInStock": 53,
    "sku": "GEN-1777784926960-32",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Green"
    ],
    "collections": "Evening Collection",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Essential Linen Shorts - 32 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Essential Linen Shorts - 32 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 29
  },
  {
    "name": "Vintage Linen Hoodie - 33",
    "description": "A vintage hoodie made from high-quality linen. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 92.99,
    "discountPrice": 86.99,
    "countInStock": 84,
    "sku": "GEN-1777784926960-33",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Teal"
    ],
    "collections": "Everyday Basics",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Vintage Linen Hoodie - 33 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Vintage Linen Hoodie - 33 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 97
  },
  {
    "name": "Chic Spandex Blazer - 34",
    "description": "A chic blazer made from high-quality spandex. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 96.99,
    "countInStock": 30,
    "sku": "GEN-1777784926960-34",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Yellow"
    ],
    "collections": "Athleisure",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Chic Spandex Blazer - 34 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Chic Spandex Blazer - 34 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 50
  },
  {
    "name": "Essential Nylon Skirt - 35",
    "description": "A essential skirt made from high-quality nylon. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 37.99,
    "countInStock": 98,
    "sku": "GEN-1777784926960-35",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Black"
    ],
    "collections": "Summer Collection",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Essential Nylon Skirt - 35 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Essential Nylon Skirt - 35 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 1
  },
  {
    "name": "Sporty Linen Sweater - 36",
    "description": "A sporty sweater made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 48.99,
    "discountPrice": 41.99,
    "countInStock": 22,
    "sku": "GEN-1777784926960-36",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Green"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sporty Linen Sweater - 36 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sporty Linen Sweater - 36 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 94
  },
  {
    "name": "Sporty Polyester Coat - 37",
    "description": "A sporty coat made from high-quality polyester. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 100.99,
    "discountPrice": 96.99,
    "countInStock": 47,
    "sku": "GEN-1777784926960-37",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple"
    ],
    "collections": "Winter Wear",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Sporty Polyester Coat - 37 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Sporty Polyester Coat - 37 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 86
  },
  {
    "name": "Durable Linen Dress - 38",
    "description": "A durable dress made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 73.99,
    "countInStock": 56,
    "sku": "GEN-1777784926960-38",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Olive"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Durable Linen Dress - 38 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Durable Linen Dress - 38 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 86
  },
  {
    "name": "Urban Denim Jacket - 39",
    "description": "A urban jacket made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 107.99,
    "discountPrice": 104.99,
    "countInStock": 72,
    "sku": "GEN-1777784926960-39",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Blue"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Urban Denim Jacket - 39 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Urban Denim Jacket - 39 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 77
  },
  {
    "name": "Classic Leather Blazer - 40",
    "description": "A classic blazer made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 73.99,
    "countInStock": 18,
    "sku": "GEN-1777784926960-40",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Navy"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Classic Leather Blazer - 40 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Classic Leather Blazer - 40 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 22
  },
  {
    "name": "Vintage Leather Pants - 41",
    "description": "A vintage pants made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 53.99,
    "countInStock": 0,
    "sku": "GEN-1777784926960-41",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Vintage Leather Pants - 41 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Vintage Leather Pants - 41 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 81
  },
  {
    "name": "Vintage Spandex T-Shirt - 42",
    "description": "A vintage t-shirt made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 29.99,
    "countInStock": 18,
    "sku": "GEN-1777784926960-42",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Black"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Vintage Spandex T-Shirt - 42 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Vintage Spandex T-Shirt - 42 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 82
  },
  {
    "name": "Modern Spandex Skirt - 43",
    "description": "A modern skirt made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 78.99,
    "countInStock": 8,
    "sku": "GEN-1777784926960-43",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Maroon"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Modern Spandex Skirt - 43 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Modern Spandex Skirt - 43 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 12
  },
  {
    "name": "Durable Denim Jeans - 44",
    "description": "A durable jeans made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 84.99,
    "countInStock": 38,
    "sku": "GEN-1777784926960-44",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Teal"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Durable Denim Jeans - 44 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Durable Denim Jeans - 44 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 55
  },
  {
    "name": "Premium Leather Skirt - 45",
    "description": "A premium skirt made from high-quality leather. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 55.99,
    "discountPrice": 49.99,
    "countInStock": 84,
    "sku": "GEN-1777784926960-45",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Red"
    ],
    "collections": "Everyday Basics",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Premium Leather Skirt - 45 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Premium Leather Skirt - 45 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 36
  },
  {
    "name": "Durable Silk Skirt - 46",
    "description": "A durable skirt made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 74.99,
    "countInStock": 37,
    "sku": "GEN-1777784926960-46",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Durable Silk Skirt - 46 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Durable Silk Skirt - 46 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 9
  },
  {
    "name": "Lightweight Silk Shirt - 47",
    "description": "A lightweight shirt made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 72.99,
    "discountPrice": 63.989999999999995,
    "countInStock": 23,
    "sku": "GEN-1777784926960-47",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Lightweight Silk Shirt - 47 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Lightweight Silk Shirt - 47 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 73
  },
  {
    "name": "Lightweight Spandex Jacket - 48",
    "description": "A lightweight jacket made from high-quality spandex. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 27.99,
    "discountPrice": 26.99,
    "countInStock": 19,
    "sku": "GEN-1777784926960-48",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Purple"
    ],
    "collections": "Athleisure",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Lightweight Spandex Jacket - 48 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Lightweight Spandex Jacket - 48 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 41
  },
  {
    "name": "Essential Polyester Blazer - 49",
    "description": "A essential blazer made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 82.99,
    "countInStock": 82,
    "sku": "GEN-1777784926960-49",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Essential Polyester Blazer - 49 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Essential Polyester Blazer - 49 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 56
  },
  {
    "name": "Sporty Linen Cardigan - 50",
    "description": "A sporty cardigan made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 21.99,
    "discountPrice": 13.989999999999998,
    "countInStock": 73,
    "sku": "GEN-1777784926960-50",
    "category": "Dresses",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Gray"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Sporty Linen Cardigan - 50 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Sporty Linen Cardigan - 50 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 8
  },
  {
    "name": "Classic Nylon Sweater - 51",
    "description": "A classic sweater made from high-quality nylon. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 36.99,
    "discountPrice": 26.990000000000002,
    "countInStock": 91,
    "sku": "GEN-1777784926960-51",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Navy"
    ],
    "collections": "Business Casual",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Classic Nylon Sweater - 51 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Classic Nylon Sweater - 51 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 98
  },
  {
    "name": "Casual Fleece Jacket - 52",
    "description": "A casual jacket made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 100.99,
    "discountPrice": 98.99,
    "countInStock": 95,
    "sku": "GEN-1777784926960-52",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Blue"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Casual Fleece Jacket - 52 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Casual Fleece Jacket - 52 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 59
  },
  {
    "name": "Rustic Polyester T-Shirt - 53",
    "description": "A rustic t-shirt made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 92.99,
    "discountPrice": 87.99,
    "countInStock": 4,
    "sku": "GEN-1777784926960-53",
    "category": "Dresses",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Rustic Polyester T-Shirt - 53 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Rustic Polyester T-Shirt - 53 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 99
  },
  {
    "name": "Vintage Denim Shorts - 54",
    "description": "A vintage shorts made from high-quality denim. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 109.99,
    "discountPrice": 107.99,
    "countInStock": 85,
    "sku": "GEN-1777784926960-54",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Blue"
    ],
    "collections": "Summer Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Vintage Denim Shorts - 54 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Vintage Denim Shorts - 54 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 53
  },
  {
    "name": "Casual Polyester Blazer - 55",
    "description": "A casual blazer made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 37.99,
    "countInStock": 31,
    "sku": "GEN-1777784926960-55",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Purple"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Casual Polyester Blazer - 55 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Casual Polyester Blazer - 55 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 57
  },
  {
    "name": "Elegant Wool Skirt - 56",
    "description": "A elegant skirt made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 60.99,
    "discountPrice": 50.99,
    "countInStock": 95,
    "sku": "GEN-1777784926960-56",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "White"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Wool Skirt - 56 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Wool Skirt - 56 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 82
  },
  {
    "name": "Cozy Leather Hoodie - 57",
    "description": "A cozy hoodie made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 45.99,
    "discountPrice": 35.99,
    "countInStock": 4,
    "sku": "GEN-1777784926960-57",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Olive"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Cozy Leather Hoodie - 57 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Cozy Leather Hoodie - 57 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 53
  },
  {
    "name": "Cozy Linen Jeans - 58",
    "description": "A cozy jeans made from high-quality linen. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 67.99,
    "countInStock": 67,
    "sku": "GEN-1777784926960-58",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Cozy Linen Jeans - 58 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Cozy Linen Jeans - 58 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 78
  },
  {
    "name": "Rustic Leather Cardigan - 59",
    "description": "A rustic cardigan made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 89.99,
    "discountPrice": 81.99,
    "countInStock": 85,
    "sku": "GEN-1777784926960-59",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Purple"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Rustic Leather Cardigan - 59 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Rustic Leather Cardigan - 59 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 26
  },
  {
    "name": "Modern Spandex Shirt - 60",
    "description": "A modern shirt made from high-quality spandex. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 63.99,
    "discountPrice": 55.99,
    "countInStock": 48,
    "sku": "GEN-1777784926960-60",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Modern Spandex Shirt - 60 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Modern Spandex Shirt - 60 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 47
  },
  {
    "name": "Chic Linen Coat - 61",
    "description": "A chic coat made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 65.99,
    "discountPrice": 64.99,
    "countInStock": 51,
    "sku": "GEN-1777784926960-61",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Chic Linen Coat - 61 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Chic Linen Coat - 61 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 29
  },
  {
    "name": "Chic Wool T-Shirt - 62",
    "description": "A chic t-shirt made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 94.99,
    "countInStock": 13,
    "sku": "GEN-1777784926960-62",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Red"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Chic Wool T-Shirt - 62 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Chic Wool T-Shirt - 62 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 94
  },
  {
    "name": "Classic Denim Blazer - 63",
    "description": "A classic blazer made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 64.99,
    "discountPrice": 55.989999999999995,
    "countInStock": 92,
    "sku": "GEN-1777784926960-63",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Classic Denim Blazer - 63 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Classic Denim Blazer - 63 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 5
  },
  {
    "name": "Casual Cotton Dress - 64",
    "description": "A casual dress made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 48.99,
    "discountPrice": 38.99,
    "countInStock": 13,
    "sku": "GEN-1777784926960-64",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Gray"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Casual Cotton Dress - 64 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Casual Cotton Dress - 64 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 70
  },
  {
    "name": "Lightweight Denim Sweater - 65",
    "description": "A lightweight sweater made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 69.99,
    "countInStock": 15,
    "sku": "GEN-1777784926960-65",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Black"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Lightweight Denim Sweater - 65 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Lightweight Denim Sweater - 65 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 64
  },
  {
    "name": "Durable Nylon Shirt - 66",
    "description": "A durable shirt made from high-quality nylon. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 119.99,
    "discountPrice": 115.99,
    "countInStock": 13,
    "sku": "GEN-1777784926960-66",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Pink"
    ],
    "collections": "Everyday Basics",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Durable Nylon Shirt - 66 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Durable Nylon Shirt - 66 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 88
  },
  {
    "name": "Chic Wool Pants - 67",
    "description": "A chic pants made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 46.99,
    "countInStock": 40,
    "sku": "GEN-1777784926960-67",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Gray"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Chic Wool Pants - 67 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Chic Wool Pants - 67 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 48
  },
  {
    "name": "Premium Denim Vest - 68",
    "description": "A premium vest made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 61.99,
    "countInStock": 49,
    "sku": "GEN-1777784926960-68",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Navy"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Premium Denim Vest - 68 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Premium Denim Vest - 68 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 21
  },
  {
    "name": "Durable Spandex T-Shirt - 69",
    "description": "A durable t-shirt made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 109.99,
    "countInStock": 66,
    "sku": "GEN-1777784926960-69",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Durable Spandex T-Shirt - 69 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Durable Spandex T-Shirt - 69 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 66
  },
  {
    "name": "Vintage Leather Blazer - 70",
    "description": "A vintage blazer made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 83.99,
    "countInStock": 72,
    "sku": "GEN-1777784926960-70",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Vintage Leather Blazer - 70 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Vintage Leather Blazer - 70 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 81
  },
  {
    "name": "Sleek Denim Skirt - 71",
    "description": "A sleek skirt made from high-quality denim. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 28.99,
    "discountPrice": 23.99,
    "countInStock": 84,
    "sku": "GEN-1777784926960-71",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Green"
    ],
    "collections": "Everyday Basics",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Sleek Denim Skirt - 71 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Sleek Denim Skirt - 71 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 57
  },
  {
    "name": "Rustic Cotton Jeans - 72",
    "description": "A rustic jeans made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 29.99,
    "discountPrice": 23.99,
    "countInStock": 32,
    "sku": "GEN-1777784926960-72",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Navy"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Rustic Cotton Jeans - 72 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Rustic Cotton Jeans - 72 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 91
  },
  {
    "name": "Durable Silk Blazer - 73",
    "description": "A durable blazer made from high-quality silk. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 114.99,
    "countInStock": 33,
    "sku": "GEN-1777784926960-73",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Olive"
    ],
    "collections": "Athleisure",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Durable Silk Blazer - 73 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Durable Silk Blazer - 73 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 53
  },
  {
    "name": "Modern Silk Shorts - 74",
    "description": "A modern shorts made from high-quality silk. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 49.99,
    "countInStock": 35,
    "sku": "GEN-1777784926960-74",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "collections": "Summer Collection",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Modern Silk Shorts - 74 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Modern Silk Shorts - 74 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 24
  },
  {
    "name": "Classic Nylon Shorts - 75",
    "description": "A classic shorts made from high-quality nylon. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 37.99,
    "discountPrice": 32.99,
    "countInStock": 9,
    "sku": "GEN-1777784926960-75",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Teal"
    ],
    "collections": "Summer Collection",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Classic Nylon Shorts - 75 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Classic Nylon Shorts - 75 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 43
  },
  {
    "name": "Vintage Cotton Shirt - 76",
    "description": "A vintage shirt made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 69.99,
    "countInStock": 70,
    "sku": "GEN-1777784926960-76",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Olive"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Vintage Cotton Shirt - 76 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Vintage Cotton Shirt - 76 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 86
  },
  {
    "name": "Elegant Nylon Shirt - 77",
    "description": "A elegant shirt made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 55.99,
    "discountPrice": 48.99,
    "countInStock": 63,
    "sku": "GEN-1777784926960-77",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Olive"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Elegant Nylon Shirt - 77 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Elegant Nylon Shirt - 77 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 37
  },
  {
    "name": "Cozy Denim Shorts - 78",
    "description": "A cozy shorts made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 89.99,
    "discountPrice": 85.99,
    "countInStock": 9,
    "sku": "GEN-1777784926960-78",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Purple"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Cozy Denim Shorts - 78 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Cozy Denim Shorts - 78 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 93
  },
  {
    "name": "Premium Fleece Shorts - 79",
    "description": "A premium shorts made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 78.99,
    "discountPrice": 75.99,
    "countInStock": 96,
    "sku": "GEN-1777784926960-79",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Brown"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Premium Fleece Shorts - 79 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Premium Fleece Shorts - 79 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 20
  },
  {
    "name": "Chic Spandex Hoodie - 80",
    "description": "A chic hoodie made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 41.99,
    "discountPrice": 35.99,
    "countInStock": 60,
    "sku": "GEN-1777784926960-80",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Gray"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Chic Spandex Hoodie - 80 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Chic Spandex Hoodie - 80 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 17
  },
  {
    "name": "Durable Nylon Shorts - 81",
    "description": "A durable shorts made from high-quality nylon. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 37.99,
    "countInStock": 46,
    "sku": "GEN-1777784926960-81",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Durable Nylon Shorts - 81 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Durable Nylon Shorts - 81 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 73
  },
  {
    "name": "Essential Silk Jacket - 82",
    "description": "A essential jacket made from high-quality silk. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 76.99,
    "discountPrice": 69.99,
    "countInStock": 75,
    "sku": "GEN-1777784926960-82",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal"
    ],
    "collections": "Athleisure",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Essential Silk Jacket - 82 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Essential Silk Jacket - 82 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 37
  },
  {
    "name": "Casual Nylon Shorts - 83",
    "description": "A casual shorts made from high-quality nylon. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 44.99,
    "countInStock": 43,
    "sku": "GEN-1777784926960-83",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Casual Nylon Shorts - 83 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Casual Nylon Shorts - 83 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 38
  },
  {
    "name": "Casual Fleece Coat - 84",
    "description": "A casual coat made from high-quality fleece. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 38.99,
    "countInStock": 1,
    "sku": "GEN-1777784926960-84",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Brown"
    ],
    "collections": "Business Casual",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Casual Fleece Coat - 84 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Casual Fleece Coat - 84 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 90
  },
  {
    "name": "Chic Cotton Vest - 85",
    "description": "A chic vest made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 49.99,
    "discountPrice": 40.99,
    "countInStock": 70,
    "sku": "GEN-1777784926960-85",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Brown"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Chic Cotton Vest - 85 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Chic Cotton Vest - 85 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 56
  },
  {
    "name": "Durable Silk Pants - 86",
    "description": "A durable pants made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 50.99,
    "discountPrice": 42.99,
    "countInStock": 33,
    "sku": "GEN-1777784926960-86",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Black"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Silk Pants - 86 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Silk Pants - 86 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 77
  },
  {
    "name": "Premium Polyester Pants - 87",
    "description": "A premium pants made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 72.99,
    "countInStock": 61,
    "sku": "GEN-1777784926960-87",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Beige"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Premium Polyester Pants - 87 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Premium Polyester Pants - 87 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 91
  },
  {
    "name": "Durable Spandex Blazer - 88",
    "description": "A durable blazer made from high-quality spandex. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 55.99,
    "discountPrice": 49.99,
    "countInStock": 3,
    "sku": "GEN-1777784926960-88",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Pink"
    ],
    "collections": "Athleisure",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Durable Spandex Blazer - 88 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Durable Spandex Blazer - 88 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 81
  },
  {
    "name": "Vintage Polyester Skirt - 89",
    "description": "A vintage skirt made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 62.99,
    "countInStock": 23,
    "sku": "GEN-1777784926960-89",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Green"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Vintage Polyester Skirt - 89 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Vintage Polyester Skirt - 89 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 17
  },
  {
    "name": "Urban Polyester Vest - 90",
    "description": "A urban vest made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 99.99,
    "discountPrice": 91.99,
    "countInStock": 32,
    "sku": "GEN-1777784926960-90",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Urban Polyester Vest - 90 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Urban Polyester Vest - 90 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 5
  },
  {
    "name": "Premium Denim Shirt - 91",
    "description": "A premium shirt made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 64.99,
    "discountPrice": 59.989999999999995,
    "countInStock": 0,
    "sku": "GEN-1777784926960-91",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Teal"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Premium Denim Shirt - 91 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Premium Denim Shirt - 91 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 31
  },
  {
    "name": "Rustic Silk Shorts - 92",
    "description": "A rustic shorts made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 86.99,
    "discountPrice": 79.99,
    "countInStock": 33,
    "sku": "GEN-1777784926960-92",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Purple"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Rustic Silk Shorts - 92 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Rustic Silk Shorts - 92 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 20
  },
  {
    "name": "Casual Cotton Jeans - 93",
    "description": "A casual jeans made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 57.99,
    "discountPrice": 52.99,
    "countInStock": 95,
    "sku": "GEN-1777784926960-93",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Maroon"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Cotton Jeans - 93 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Cotton Jeans - 93 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 65
  },
  {
    "name": "Modern Linen Jacket - 94",
    "description": "A modern jacket made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 114.99,
    "discountPrice": 113.99,
    "countInStock": 7,
    "sku": "GEN-1777784926960-94",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Red"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Modern Linen Jacket - 94 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Modern Linen Jacket - 94 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 44
  },
  {
    "name": "Lightweight Wool Sweater - 95",
    "description": "A lightweight sweater made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 90.99,
    "discountPrice": 86.99,
    "countInStock": 57,
    "sku": "GEN-1777784926960-95",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Beige"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Lightweight Wool Sweater - 95 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Lightweight Wool Sweater - 95 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 21
  },
  {
    "name": "Essential Spandex T-Shirt - 96",
    "description": "A essential t-shirt made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 97.99,
    "discountPrice": 95.99,
    "countInStock": 77,
    "sku": "GEN-1777784926960-96",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Green"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Essential Spandex T-Shirt - 96 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Essential Spandex T-Shirt - 96 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 58
  },
  {
    "name": "Cozy Polyester Jeans - 97",
    "description": "A cozy jeans made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 104.99,
    "discountPrice": 99.99,
    "countInStock": 92,
    "sku": "GEN-1777784926960-97",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Gray"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Cozy Polyester Jeans - 97 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Cozy Polyester Jeans - 97 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 30
  },
  {
    "name": "Chic Denim Jacket - 98",
    "description": "A chic jacket made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 95.99,
    "countInStock": 66,
    "sku": "GEN-1777784926960-98",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Chic Denim Jacket - 98 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Chic Denim Jacket - 98 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 38
  },
  {
    "name": "Urban Nylon Hoodie - 99",
    "description": "A urban hoodie made from high-quality nylon. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 93.99,
    "countInStock": 26,
    "sku": "GEN-1777784926960-99",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "White"
    ],
    "collections": "Evening Collection",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Nylon Hoodie - 99 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Nylon Hoodie - 99 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 20
  },
  {
    "name": "Elegant Polyester Shirt - 100",
    "description": "A elegant shirt made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 108.99,
    "countInStock": 71,
    "sku": "GEN-1777784926960-100",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "White"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Elegant Polyester Shirt - 100 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Elegant Polyester Shirt - 100 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 34
  },
  {
    "name": "Modern Spandex Hoodie - 101",
    "description": "A modern hoodie made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 105.99,
    "discountPrice": 98.99,
    "countInStock": 22,
    "sku": "GEN-1777784926960-101",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Modern Spandex Hoodie - 101 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Modern Spandex Hoodie - 101 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 13
  },
  {
    "name": "Casual Polyester Sweater - 102",
    "description": "A casual sweater made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 50.99,
    "discountPrice": 43.99,
    "countInStock": 29,
    "sku": "GEN-1777784926960-102",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "White"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Casual Polyester Sweater - 102 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Casual Polyester Sweater - 102 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 14
  },
  {
    "name": "Lightweight Silk Shorts - 103",
    "description": "A lightweight shorts made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 70.99,
    "countInStock": 22,
    "sku": "GEN-1777784926960-103",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Lightweight Silk Shorts - 103 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Lightweight Silk Shorts - 103 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 25
  },
  {
    "name": "Urban Denim Jeans - 104",
    "description": "A urban jeans made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 48.99,
    "discountPrice": 47.99,
    "countInStock": 6,
    "sku": "GEN-1777784926960-104",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Urban Denim Jeans - 104 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Urban Denim Jeans - 104 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 79
  },
  {
    "name": "Urban Cotton Jacket - 105",
    "description": "A urban jacket made from high-quality cotton. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 92.99,
    "countInStock": 14,
    "sku": "GEN-1777784926960-105",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Teal"
    ],
    "collections": "Evening Collection",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Urban Cotton Jacket - 105 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Urban Cotton Jacket - 105 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 61
  },
  {
    "name": "Durable Fleece Sweater - 106",
    "description": "A durable sweater made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 49.99,
    "countInStock": 0,
    "sku": "GEN-1777784926960-106",
    "category": "Dresses",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Pink"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Durable Fleece Sweater - 106 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Durable Fleece Sweater - 106 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 88
  },
  {
    "name": "Vintage Polyester Blazer - 107",
    "description": "A vintage blazer made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 27.99,
    "countInStock": 73,
    "sku": "GEN-1777784926960-107",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Gray"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Vintage Polyester Blazer - 107 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Vintage Polyester Blazer - 107 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 62
  },
  {
    "name": "Durable Leather Cardigan - 108",
    "description": "A durable cardigan made from high-quality leather. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 70.99,
    "discountPrice": 66.99,
    "countInStock": 33,
    "sku": "GEN-1777784926960-108",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red"
    ],
    "collections": "Summer Collection",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Leather Cardigan - 108 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Leather Cardigan - 108 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 28
  },
  {
    "name": "Urban Leather Skirt - 109",
    "description": "A urban skirt made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 69.99,
    "countInStock": 43,
    "sku": "GEN-1777784926960-109",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Red"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Leather Skirt - 109 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Leather Skirt - 109 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 70
  },
  {
    "name": "Cozy Cotton Pants - 110",
    "description": "A cozy pants made from high-quality cotton. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 89.99,
    "countInStock": 71,
    "sku": "GEN-1777784926960-110",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Green"
    ],
    "collections": "Evening Collection",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Cotton Pants - 110 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Cotton Pants - 110 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 67
  },
  {
    "name": "Essential Cotton Vest - 111",
    "description": "A essential vest made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 54.99,
    "discountPrice": 44.99,
    "countInStock": 39,
    "sku": "GEN-1777784926960-111",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Essential Cotton Vest - 111 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Essential Cotton Vest - 111 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 61
  },
  {
    "name": "Vintage Leather Jeans - 112",
    "description": "A vintage jeans made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 42.99,
    "countInStock": 99,
    "sku": "GEN-1777784926960-112",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Yellow"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Vintage Leather Jeans - 112 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Vintage Leather Jeans - 112 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 54
  },
  {
    "name": "Essential Wool Hoodie - 113",
    "description": "A essential hoodie made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 84.99,
    "discountPrice": 81.99,
    "countInStock": 60,
    "sku": "GEN-1777784926960-113",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Gray"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Essential Wool Hoodie - 113 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Essential Wool Hoodie - 113 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 20
  },
  {
    "name": "Sleek Polyester Dress - 114",
    "description": "A sleek dress made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 27.99,
    "countInStock": 67,
    "sku": "GEN-1777784926960-114",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Purple"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Sleek Polyester Dress - 114 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Sleek Polyester Dress - 114 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 89
  },
  {
    "name": "Essential Linen Vest - 115",
    "description": "A essential vest made from high-quality linen. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 33.99,
    "discountPrice": 24.990000000000002,
    "countInStock": 29,
    "sku": "GEN-1777784926960-115",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Olive"
    ],
    "collections": "Business Casual",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Essential Linen Vest - 115 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Essential Linen Vest - 115 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 19
  },
  {
    "name": "Lightweight Spandex Dress - 116",
    "description": "A lightweight dress made from high-quality spandex. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 52.99,
    "discountPrice": 46.99,
    "countInStock": 24,
    "sku": "GEN-1777784926960-116",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Pink"
    ],
    "collections": "Athleisure",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Lightweight Spandex Dress - 116 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Lightweight Spandex Dress - 116 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 82
  },
  {
    "name": "Vintage Cotton Vest - 117",
    "description": "A vintage vest made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 72.99,
    "discountPrice": 69.99,
    "countInStock": 96,
    "sku": "GEN-1777784926960-117",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Teal"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Vintage Cotton Vest - 117 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Vintage Cotton Vest - 117 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 1
  },
  {
    "name": "Casual Leather Shorts - 118",
    "description": "A casual shorts made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 45.99,
    "discountPrice": 44.99,
    "countInStock": 59,
    "sku": "GEN-1777784926960-118",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Casual Leather Shorts - 118 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Casual Leather Shorts - 118 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 78
  },
  {
    "name": "Durable Nylon Cardigan - 119",
    "description": "A durable cardigan made from high-quality nylon. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 112.99,
    "discountPrice": 104.99,
    "countInStock": 36,
    "sku": "GEN-1777784926960-119",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Yellow"
    ],
    "collections": "Business Casual",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Nylon Cardigan - 119 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Nylon Cardigan - 119 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 24
  },
  {
    "name": "Rustic Wool Sweater - 120",
    "description": "A rustic sweater made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 23.99,
    "countInStock": 5,
    "sku": "GEN-1777784926960-120",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Rustic Wool Sweater - 120 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Rustic Wool Sweater - 120 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 47
  },
  {
    "name": "Lightweight Leather Sweater - 121",
    "description": "A lightweight sweater made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 75.99,
    "countInStock": 51,
    "sku": "GEN-1777784926960-121",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Brown"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Lightweight Leather Sweater - 121 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Lightweight Leather Sweater - 121 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 32
  },
  {
    "name": "Casual Polyester Cardigan - 122",
    "description": "A casual cardigan made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 57.99,
    "discountPrice": 51.99,
    "countInStock": 92,
    "sku": "GEN-1777784926960-122",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Brown"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Polyester Cardigan - 122 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Polyester Cardigan - 122 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 51
  },
  {
    "name": "Cozy Silk Dress - 123",
    "description": "A cozy dress made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 41.99,
    "countInStock": 22,
    "sku": "GEN-1777784926960-123",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "White"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Cozy Silk Dress - 123 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Cozy Silk Dress - 123 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 75
  },
  {
    "name": "Sporty Linen Shirt - 124",
    "description": "A sporty shirt made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 99.99,
    "discountPrice": 91.99,
    "countInStock": 73,
    "sku": "GEN-1777784926960-124",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Teal"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Sporty Linen Shirt - 124 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Sporty Linen Shirt - 124 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 76
  },
  {
    "name": "Sleek Polyester Sweater - 125",
    "description": "A sleek sweater made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 92.99,
    "discountPrice": 90.99,
    "countInStock": 28,
    "sku": "GEN-1777784926960-125",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Teal"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sleek Polyester Sweater - 125 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sleek Polyester Sweater - 125 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 59
  },
  {
    "name": "Casual Polyester Skirt - 126",
    "description": "A casual skirt made from high-quality polyester. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 24.99,
    "discountPrice": 17.99,
    "countInStock": 8,
    "sku": "GEN-1777784926960-126",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Casual Polyester Skirt - 126 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Casual Polyester Skirt - 126 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 83
  },
  {
    "name": "Lightweight Linen Shirt - 127",
    "description": "A lightweight shirt made from high-quality linen. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 44.99,
    "countInStock": 59,
    "sku": "GEN-1777784926960-127",
    "category": "Dresses",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Purple"
    ],
    "collections": "Business Casual",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Lightweight Linen Shirt - 127 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Lightweight Linen Shirt - 127 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 90
  },
  {
    "name": "Cozy Silk Dress - 128",
    "description": "A cozy dress made from high-quality silk. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 69.99,
    "countInStock": 48,
    "sku": "GEN-1777784926960-128",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Cozy Silk Dress - 128 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Cozy Silk Dress - 128 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 10
  },
  {
    "name": "Vintage Fleece Coat - 129",
    "description": "A vintage coat made from high-quality fleece. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 80.99,
    "countInStock": 31,
    "sku": "GEN-1777784926960-129",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Green"
    ],
    "collections": "Summer Collection",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Vintage Fleece Coat - 129 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Vintage Fleece Coat - 129 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 11
  },
  {
    "name": "Essential Wool Jacket - 130",
    "description": "A essential jacket made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 35.99,
    "countInStock": 25,
    "sku": "GEN-1777784926960-130",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Teal"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Essential Wool Jacket - 130 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Essential Wool Jacket - 130 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 43
  },
  {
    "name": "Vintage Denim Cardigan - 131",
    "description": "A vintage cardigan made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 77.99,
    "countInStock": 8,
    "sku": "GEN-1777784926960-131",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Gray"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Vintage Denim Cardigan - 131 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Vintage Denim Cardigan - 131 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 82
  },
  {
    "name": "Modern Fleece Vest - 132",
    "description": "A modern vest made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 91.99,
    "countInStock": 1,
    "sku": "GEN-1777784926960-132",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Modern Fleece Vest - 132 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Modern Fleece Vest - 132 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 75
  },
  {
    "name": "Elegant Silk Dress - 133",
    "description": "A elegant dress made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 40.99,
    "discountPrice": 33.99,
    "countInStock": 25,
    "sku": "GEN-1777784926960-133",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Black"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Elegant Silk Dress - 133 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Elegant Silk Dress - 133 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 38
  },
  {
    "name": "Classic Spandex Pants - 134",
    "description": "A classic pants made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 44.99,
    "countInStock": 60,
    "sku": "GEN-1777784926960-134",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Yellow"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Spandex Pants - 134 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Spandex Pants - 134 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 38
  },
  {
    "name": "Elegant Spandex Sweater - 135",
    "description": "A elegant sweater made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 59.99,
    "discountPrice": 58.99,
    "countInStock": 78,
    "sku": "GEN-1777784926960-135",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Yellow"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Elegant Spandex Sweater - 135 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Elegant Spandex Sweater - 135 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 4
  },
  {
    "name": "Vintage Cotton Jacket - 136",
    "description": "A vintage jacket made from high-quality cotton. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 30.99,
    "discountPrice": 29.99,
    "countInStock": 34,
    "sku": "GEN-1777784926960-136",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Red"
    ],
    "collections": "Athleisure",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Vintage Cotton Jacket - 136 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Vintage Cotton Jacket - 136 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 99
  },
  {
    "name": "Chic Silk T-Shirt - 137",
    "description": "A chic t-shirt made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 118.99,
    "countInStock": 63,
    "sku": "GEN-1777784926960-137",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Chic Silk T-Shirt - 137 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Chic Silk T-Shirt - 137 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 89
  },
  {
    "name": "Premium Leather Blazer - 138",
    "description": "A premium blazer made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 61.99,
    "countInStock": 52,
    "sku": "GEN-1777784926960-138",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Purple"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Premium Leather Blazer - 138 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Premium Leather Blazer - 138 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 21
  },
  {
    "name": "Lightweight Denim Coat - 139",
    "description": "A lightweight coat made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 29.99,
    "countInStock": 30,
    "sku": "GEN-1777784926960-139",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Olive"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Lightweight Denim Coat - 139 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Lightweight Denim Coat - 139 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 31
  },
  {
    "name": "Modern Leather T-Shirt - 140",
    "description": "A modern t-shirt made from high-quality leather. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 45.99,
    "countInStock": 42,
    "sku": "GEN-1777784926960-140",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "White"
    ],
    "collections": "Everyday Basics",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Modern Leather T-Shirt - 140 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Modern Leather T-Shirt - 140 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 29
  },
  {
    "name": "Casual Nylon Cardigan - 141",
    "description": "A casual cardigan made from high-quality nylon. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 52.99,
    "discountPrice": 42.99,
    "countInStock": 61,
    "sku": "GEN-1777784926960-141",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Nylon Cardigan - 141 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Nylon Cardigan - 141 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 38
  },
  {
    "name": "Sporty Wool Sweater - 142",
    "description": "A sporty sweater made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 99.99,
    "discountPrice": 92.99,
    "countInStock": 72,
    "sku": "GEN-1777784926960-142",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Green"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sporty Wool Sweater - 142 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sporty Wool Sweater - 142 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 87
  },
  {
    "name": "Premium Cotton Sweater - 143",
    "description": "A premium sweater made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 101.99,
    "discountPrice": 95.99,
    "countInStock": 15,
    "sku": "GEN-1777784926960-143",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Black"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Premium Cotton Sweater - 143 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Premium Cotton Sweater - 143 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 12
  },
  {
    "name": "Lightweight Nylon Shirt - 144",
    "description": "A lightweight shirt made from high-quality nylon. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 54.99,
    "countInStock": 35,
    "sku": "GEN-1777784926960-144",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal"
    ],
    "collections": "Business Casual",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Lightweight Nylon Shirt - 144 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Lightweight Nylon Shirt - 144 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 14
  },
  {
    "name": "Essential Fleece Blazer - 145",
    "description": "A essential blazer made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 29.99,
    "countInStock": 36,
    "sku": "GEN-1777784926960-145",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Yellow"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Essential Fleece Blazer - 145 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Essential Fleece Blazer - 145 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 22
  },
  {
    "name": "Vintage Spandex Jacket - 146",
    "description": "A vintage jacket made from high-quality spandex. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 36.99,
    "discountPrice": 31.990000000000002,
    "countInStock": 95,
    "sku": "GEN-1777784926960-146",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Vintage Spandex Jacket - 146 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Vintage Spandex Jacket - 146 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 10
  },
  {
    "name": "Chic Denim Dress - 147",
    "description": "A chic dress made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 81.99,
    "discountPrice": 77.99,
    "countInStock": 11,
    "sku": "GEN-1777784926960-147",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Green"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Chic Denim Dress - 147 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Chic Denim Dress - 147 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 21
  },
  {
    "name": "Urban Denim Vest - 148",
    "description": "A urban vest made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 107.99,
    "discountPrice": 97.99,
    "countInStock": 39,
    "sku": "GEN-1777784926960-148",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Urban Denim Vest - 148 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Urban Denim Vest - 148 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 64
  },
  {
    "name": "Durable Silk Cardigan - 149",
    "description": "A durable cardigan made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 27.99,
    "countInStock": 83,
    "sku": "GEN-1777784926960-149",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Olive"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Silk Cardigan - 149 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Silk Cardigan - 149 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 85
  },
  {
    "name": "Elegant Fleece T-Shirt - 150",
    "description": "A elegant t-shirt made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 88.99,
    "discountPrice": 79.99,
    "countInStock": 51,
    "sku": "GEN-1777784926960-150",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Yellow"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Elegant Fleece T-Shirt - 150 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Elegant Fleece T-Shirt - 150 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 39
  },
  {
    "name": "Modern Cotton Hoodie - 151",
    "description": "A modern hoodie made from high-quality cotton. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 103.99,
    "discountPrice": 102.99,
    "countInStock": 72,
    "sku": "GEN-1777784926960-151",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Navy"
    ],
    "collections": "Athleisure",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Modern Cotton Hoodie - 151 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Modern Cotton Hoodie - 151 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 35
  },
  {
    "name": "Vintage Fleece Sweater - 152",
    "description": "A vintage sweater made from high-quality fleece. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 23.99,
    "discountPrice": 18.99,
    "countInStock": 59,
    "sku": "GEN-1777784926960-152",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Pink"
    ],
    "collections": "Business Casual",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Vintage Fleece Sweater - 152 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Vintage Fleece Sweater - 152 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 76
  },
  {
    "name": "Urban Polyester Jacket - 153",
    "description": "A urban jacket made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 58.99,
    "discountPrice": 52.99,
    "countInStock": 28,
    "sku": "GEN-1777784926960-153",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Red"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Urban Polyester Jacket - 153 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Urban Polyester Jacket - 153 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 22
  },
  {
    "name": "Vintage Denim T-Shirt - 154",
    "description": "A vintage t-shirt made from high-quality denim. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 104.99,
    "discountPrice": 95.99,
    "countInStock": 56,
    "sku": "GEN-1777784926960-154",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Green"
    ],
    "collections": "Summer Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Vintage Denim T-Shirt - 154 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Vintage Denim T-Shirt - 154 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 2
  },
  {
    "name": "Chic Wool Jeans - 155",
    "description": "A chic jeans made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 97.99,
    "discountPrice": 87.99,
    "countInStock": 17,
    "sku": "GEN-1777784926960-155",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Brown"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Chic Wool Jeans - 155 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Chic Wool Jeans - 155 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 20
  },
  {
    "name": "Rustic Wool Cardigan - 156",
    "description": "A rustic cardigan made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 79.99,
    "countInStock": 34,
    "sku": "GEN-1777784926960-156",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Olive"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Rustic Wool Cardigan - 156 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Rustic Wool Cardigan - 156 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 82
  },
  {
    "name": "Sleek Denim Shirt - 157",
    "description": "A sleek shirt made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 83.99,
    "discountPrice": 81.99,
    "countInStock": 64,
    "sku": "GEN-1777784926960-157",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Navy"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Sleek Denim Shirt - 157 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Sleek Denim Shirt - 157 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 86
  },
  {
    "name": "Cozy Wool Skirt - 158",
    "description": "A cozy skirt made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 62.99,
    "countInStock": 50,
    "sku": "GEN-1777784926960-158",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Cozy Wool Skirt - 158 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Cozy Wool Skirt - 158 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 19
  },
  {
    "name": "Elegant Polyester Coat - 159",
    "description": "A elegant coat made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 76.99,
    "discountPrice": 74.99,
    "countInStock": 37,
    "sku": "GEN-1777784926960-159",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Elegant Polyester Coat - 159 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Elegant Polyester Coat - 159 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 26
  },
  {
    "name": "Casual Linen Shorts - 160",
    "description": "A casual shorts made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 44.99,
    "countInStock": 63,
    "sku": "GEN-1777784926960-160",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Brown"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Casual Linen Shorts - 160 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Casual Linen Shorts - 160 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 32
  },
  {
    "name": "Essential Spandex T-Shirt - 161",
    "description": "A essential t-shirt made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 42.99,
    "discountPrice": 36.99,
    "countInStock": 98,
    "sku": "GEN-1777784926960-161",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Black"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Essential Spandex T-Shirt - 161 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Essential Spandex T-Shirt - 161 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 98
  },
  {
    "name": "Sleek Leather Jacket - 162",
    "description": "A sleek jacket made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 21.99,
    "countInStock": 46,
    "sku": "GEN-1777784926960-162",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Sleek Leather Jacket - 162 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Sleek Leather Jacket - 162 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 48
  },
  {
    "name": "Elegant Cotton Jacket - 163",
    "description": "A elegant jacket made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 118.99,
    "countInStock": 54,
    "sku": "GEN-1777784926960-163",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Purple"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Elegant Cotton Jacket - 163 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Elegant Cotton Jacket - 163 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 14
  },
  {
    "name": "Essential Spandex Pants - 164",
    "description": "A essential pants made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 106.99,
    "countInStock": 48,
    "sku": "GEN-1777784926960-164",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Purple"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Essential Spandex Pants - 164 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Essential Spandex Pants - 164 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 46
  },
  {
    "name": "Sleek Spandex Jacket - 165",
    "description": "A sleek jacket made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 115.99,
    "countInStock": 23,
    "sku": "GEN-1777784926960-165",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Green"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Sleek Spandex Jacket - 165 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Sleek Spandex Jacket - 165 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 7
  },
  {
    "name": "Urban Leather Blazer - 166",
    "description": "A urban blazer made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 90.99,
    "discountPrice": 89.99,
    "countInStock": 85,
    "sku": "GEN-1777784926960-166",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Yellow"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Urban Leather Blazer - 166 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Urban Leather Blazer - 166 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 61
  },
  {
    "name": "Rustic Denim Shorts - 167",
    "description": "A rustic shorts made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 100.99,
    "countInStock": 1,
    "sku": "GEN-1777784926960-167",
    "category": "Dresses",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Olive"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Rustic Denim Shorts - 167 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Rustic Denim Shorts - 167 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 63
  },
  {
    "name": "Durable Nylon Pants - 168",
    "description": "A durable pants made from high-quality nylon. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 75.99,
    "countInStock": 76,
    "sku": "GEN-1777784926960-168",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Nylon Pants - 168 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Nylon Pants - 168 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 4
  },
  {
    "name": "Durable Polyester Jeans - 169",
    "description": "A durable jeans made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 113.99,
    "discountPrice": 107.99,
    "countInStock": 21,
    "sku": "GEN-1777784926960-169",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Durable Polyester Jeans - 169 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Durable Polyester Jeans - 169 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 22
  },
  {
    "name": "Sleek Denim T-Shirt - 170",
    "description": "A sleek t-shirt made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 71.99,
    "discountPrice": 68.99,
    "countInStock": 16,
    "sku": "GEN-1777784926960-170",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Blue"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Sleek Denim T-Shirt - 170 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Sleek Denim T-Shirt - 170 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 43
  },
  {
    "name": "Rustic Denim Cardigan - 171",
    "description": "A rustic cardigan made from high-quality denim. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 35.99,
    "countInStock": 3,
    "sku": "GEN-1777784926960-171",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Maroon"
    ],
    "collections": "Everyday Basics",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Rustic Denim Cardigan - 171 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Rustic Denim Cardigan - 171 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 5
  },
  {
    "name": "Urban Cotton Skirt - 172",
    "description": "A urban skirt made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 101.99,
    "discountPrice": 95.99,
    "countInStock": 91,
    "sku": "GEN-1777784926960-172",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Cotton Skirt - 172 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Cotton Skirt - 172 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 51
  },
  {
    "name": "Essential Linen Vest - 173",
    "description": "A essential vest made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 56.99,
    "discountPrice": 48.99,
    "countInStock": 25,
    "sku": "GEN-1777784926960-173",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Beige"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Essential Linen Vest - 173 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Essential Linen Vest - 173 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 66
  },
  {
    "name": "Lightweight Polyester Jacket - 174",
    "description": "A lightweight jacket made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 87.99,
    "discountPrice": 77.99,
    "countInStock": 72,
    "sku": "GEN-1777784926960-174",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Lightweight Polyester Jacket - 174 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Lightweight Polyester Jacket - 174 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 46
  },
  {
    "name": "Sleek Nylon Hoodie - 175",
    "description": "A sleek hoodie made from high-quality nylon. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 50.99,
    "countInStock": 42,
    "sku": "GEN-1777784926960-175",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "White"
    ],
    "collections": "Business Casual",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sleek Nylon Hoodie - 175 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sleek Nylon Hoodie - 175 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 33
  },
  {
    "name": "Elegant Cotton Dress - 176",
    "description": "A elegant dress made from high-quality cotton. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 105.99,
    "countInStock": 98,
    "sku": "GEN-1777784926960-176",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "White"
    ],
    "collections": "Evening Collection",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Elegant Cotton Dress - 176 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Elegant Cotton Dress - 176 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 75
  },
  {
    "name": "Urban Leather Dress - 177",
    "description": "A urban dress made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 57.99,
    "countInStock": 11,
    "sku": "GEN-1777784926960-177",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Urban Leather Dress - 177 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Urban Leather Dress - 177 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 82
  },
  {
    "name": "Elegant Silk Blazer - 178",
    "description": "A elegant blazer made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 63.99,
    "countInStock": 1,
    "sku": "GEN-1777784926960-178",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Pink"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Elegant Silk Blazer - 178 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Elegant Silk Blazer - 178 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 85
  },
  {
    "name": "Classic Wool Cardigan - 179",
    "description": "A classic cardigan made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 75.99,
    "countInStock": 78,
    "sku": "GEN-1777784926960-179",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "White"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Classic Wool Cardigan - 179 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Classic Wool Cardigan - 179 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 57
  },
  {
    "name": "Modern Fleece Shirt - 180",
    "description": "A modern shirt made from high-quality fleece. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 67.99,
    "countInStock": 31,
    "sku": "GEN-1777784926960-180",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Modern Fleece Shirt - 180 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Modern Fleece Shirt - 180 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 85
  },
  {
    "name": "Classic Cotton Sweater - 181",
    "description": "A classic sweater made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 100.99,
    "countInStock": 3,
    "sku": "GEN-1777784926960-181",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Classic Cotton Sweater - 181 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Classic Cotton Sweater - 181 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 3
  },
  {
    "name": "Classic Denim Dress - 182",
    "description": "A classic dress made from high-quality denim. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 112.99,
    "discountPrice": 108.99,
    "countInStock": 74,
    "sku": "GEN-1777784926960-182",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Brown"
    ],
    "collections": "Summer Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Classic Denim Dress - 182 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Classic Denim Dress - 182 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 92
  },
  {
    "name": "Casual Spandex Cardigan - 183",
    "description": "A casual cardigan made from high-quality spandex. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 81.99,
    "countInStock": 46,
    "sku": "GEN-1777784926960-183",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Yellow"
    ],
    "collections": "Business Casual",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Spandex Cardigan - 183 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Spandex Cardigan - 183 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 43
  },
  {
    "name": "Durable Leather Jeans - 184",
    "description": "A durable jeans made from high-quality leather. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 28.99,
    "discountPrice": 23.99,
    "countInStock": 16,
    "sku": "GEN-1777784926960-184",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Pink"
    ],
    "collections": "Everyday Basics",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Durable Leather Jeans - 184 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Durable Leather Jeans - 184 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 23
  },
  {
    "name": "Sporty Leather Hoodie - 185",
    "description": "A sporty hoodie made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 104.99,
    "discountPrice": 101.99,
    "countInStock": 7,
    "sku": "GEN-1777784926960-185",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Blue"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sporty Leather Hoodie - 185 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sporty Leather Hoodie - 185 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 42
  },
  {
    "name": "Durable Fleece Cardigan - 186",
    "description": "A durable cardigan made from high-quality fleece. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 51.99,
    "discountPrice": 41.99,
    "countInStock": 91,
    "sku": "GEN-1777784926960-186",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Fleece Cardigan - 186 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Fleece Cardigan - 186 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 97
  },
  {
    "name": "Urban Linen Jacket - 187",
    "description": "A urban jacket made from high-quality linen. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 30.99,
    "discountPrice": 25.99,
    "countInStock": 23,
    "sku": "GEN-1777784926960-187",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Urban Linen Jacket - 187 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Urban Linen Jacket - 187 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 99
  },
  {
    "name": "Essential Wool Sweater - 188",
    "description": "A essential sweater made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 29.99,
    "discountPrice": 26.99,
    "countInStock": 95,
    "sku": "GEN-1777784926960-188",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "White"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Essential Wool Sweater - 188 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Essential Wool Sweater - 188 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 56
  },
  {
    "name": "Essential Spandex T-Shirt - 189",
    "description": "A essential t-shirt made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 43.99,
    "discountPrice": 39.99,
    "countInStock": 95,
    "sku": "GEN-1777784926960-189",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Teal"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Essential Spandex T-Shirt - 189 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Essential Spandex T-Shirt - 189 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 85
  },
  {
    "name": "Urban Fleece Jeans - 190",
    "description": "A urban jeans made from high-quality fleece. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 78.99,
    "countInStock": 4,
    "sku": "GEN-1777784926960-190",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Black"
    ],
    "collections": "Business Casual",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Urban Fleece Jeans - 190 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Urban Fleece Jeans - 190 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 46
  },
  {
    "name": "Durable Linen Vest - 191",
    "description": "A durable vest made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 51.99,
    "discountPrice": 50.99,
    "countInStock": 34,
    "sku": "GEN-1777784926960-191",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Brown"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Durable Linen Vest - 191 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Durable Linen Vest - 191 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 38
  },
  {
    "name": "Sporty Nylon T-Shirt - 192",
    "description": "A sporty t-shirt made from high-quality nylon. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 38.99,
    "countInStock": 39,
    "sku": "GEN-1777784926960-192",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Teal"
    ],
    "collections": "Everyday Basics",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Sporty Nylon T-Shirt - 192 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Sporty Nylon T-Shirt - 192 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 70
  },
  {
    "name": "Modern Nylon Sweater - 193",
    "description": "A modern sweater made from high-quality nylon. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 30.99,
    "discountPrice": 21.99,
    "countInStock": 58,
    "sku": "GEN-1777784926960-193",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Maroon"
    ],
    "collections": "Evening Collection",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Modern Nylon Sweater - 193 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Modern Nylon Sweater - 193 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 55
  },
  {
    "name": "Classic Denim Jacket - 194",
    "description": "A classic jacket made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 89.99,
    "countInStock": 49,
    "sku": "GEN-1777784926960-194",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Beige"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Classic Denim Jacket - 194 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Classic Denim Jacket - 194 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 87
  },
  {
    "name": "Casual Nylon Hoodie - 195",
    "description": "A casual hoodie made from high-quality nylon. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 37.99,
    "discountPrice": 27.990000000000002,
    "countInStock": 56,
    "sku": "GEN-1777784926960-195",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Red"
    ],
    "collections": "Evening Collection",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Casual Nylon Hoodie - 195 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Casual Nylon Hoodie - 195 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 95
  },
  {
    "name": "Urban Silk Blazer - 196",
    "description": "A urban blazer made from high-quality silk. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 93.99,
    "countInStock": 62,
    "sku": "GEN-1777784926960-196",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Yellow"
    ],
    "collections": "Summer Collection",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Urban Silk Blazer - 196 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Urban Silk Blazer - 196 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 48
  },
  {
    "name": "Classic Spandex Pants - 197",
    "description": "A classic pants made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 89.99,
    "discountPrice": 79.99,
    "countInStock": 19,
    "sku": "GEN-1777784926960-197",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Spandex Pants - 197 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Spandex Pants - 197 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 52
  },
  {
    "name": "Modern Fleece Shorts - 198",
    "description": "A modern shorts made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 61.99,
    "discountPrice": 56.99,
    "countInStock": 30,
    "sku": "GEN-1777784926960-198",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Brown"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Modern Fleece Shorts - 198 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Modern Fleece Shorts - 198 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 39
  },
  {
    "name": "Durable Spandex Cardigan - 199",
    "description": "A durable cardigan made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 65.99,
    "countInStock": 17,
    "sku": "GEN-1777784926960-199",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Maroon"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Spandex Cardigan - 199 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Spandex Cardigan - 199 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 24
  },
  {
    "name": "Premium Fleece Blazer - 200",
    "description": "A premium blazer made from high-quality fleece. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 89.99,
    "discountPrice": 88.99,
    "countInStock": 41,
    "sku": "GEN-1777784926960-200",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "White"
    ],
    "collections": "Summer Collection",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Premium Fleece Blazer - 200 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Premium Fleece Blazer - 200 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 75
  },
  {
    "name": "Essential Fleece Shirt - 201",
    "description": "A essential shirt made from high-quality fleece. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 46.99,
    "discountPrice": 36.99,
    "countInStock": 53,
    "sku": "GEN-1777784926960-201",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Green"
    ],
    "collections": "Evening Collection",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Essential Fleece Shirt - 201 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Essential Fleece Shirt - 201 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 30
  },
  {
    "name": "Cozy Cotton Blazer - 202",
    "description": "A cozy blazer made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 26.99,
    "countInStock": 42,
    "sku": "GEN-1777784926960-202",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Cozy Cotton Blazer - 202 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Cozy Cotton Blazer - 202 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 56
  },
  {
    "name": "Elegant Denim Skirt - 203",
    "description": "A elegant skirt made from high-quality denim. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 80.99,
    "countInStock": 67,
    "sku": "GEN-1777784926960-203",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Navy"
    ],
    "collections": "Everyday Basics",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Denim Skirt - 203 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Denim Skirt - 203 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 0
  },
  {
    "name": "Sporty Cotton Sweater - 204",
    "description": "A sporty sweater made from high-quality cotton. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 30.99,
    "countInStock": 67,
    "sku": "GEN-1777784926960-204",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Red"
    ],
    "collections": "Evening Collection",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sporty Cotton Sweater - 204 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sporty Cotton Sweater - 204 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 32
  },
  {
    "name": "Premium Cotton Blazer - 205",
    "description": "A premium blazer made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 92.99,
    "discountPrice": 82.99,
    "countInStock": 63,
    "sku": "GEN-1777784926960-205",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Purple"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Premium Cotton Blazer - 205 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Premium Cotton Blazer - 205 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 63
  },
  {
    "name": "Rustic Wool Jeans - 206",
    "description": "A rustic jeans made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 114.99,
    "countInStock": 83,
    "sku": "GEN-1777784926960-206",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Rustic Wool Jeans - 206 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Rustic Wool Jeans - 206 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 84
  },
  {
    "name": "Sporty Denim Hoodie - 207",
    "description": "A sporty hoodie made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 76.99,
    "countInStock": 95,
    "sku": "GEN-1777784926960-207",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sporty Denim Hoodie - 207 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sporty Denim Hoodie - 207 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 15
  },
  {
    "name": "Premium Silk Dress - 208",
    "description": "A premium dress made from high-quality silk. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 85.99,
    "discountPrice": 82.99,
    "countInStock": 16,
    "sku": "GEN-1777784926960-208",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Teal"
    ],
    "collections": "Summer Collection",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Premium Silk Dress - 208 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Premium Silk Dress - 208 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 59
  },
  {
    "name": "Casual Silk Sweater - 209",
    "description": "A casual sweater made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 25.99,
    "countInStock": 96,
    "sku": "GEN-1777784926960-209",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Casual Silk Sweater - 209 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Casual Silk Sweater - 209 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 6
  },
  {
    "name": "Vintage Leather Vest - 210",
    "description": "A vintage vest made from high-quality leather. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 29.99,
    "discountPrice": 20.99,
    "countInStock": 86,
    "sku": "GEN-1777784926960-210",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal"
    ],
    "collections": "Everyday Basics",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Vintage Leather Vest - 210 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Vintage Leather Vest - 210 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 16
  },
  {
    "name": "Vintage Wool Pants - 211",
    "description": "A vintage pants made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 67.99,
    "countInStock": 20,
    "sku": "GEN-1777784926960-211",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Maroon"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Vintage Wool Pants - 211 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Vintage Wool Pants - 211 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 96
  },
  {
    "name": "Premium Nylon Jacket - 212",
    "description": "A premium jacket made from high-quality nylon. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 107.99,
    "countInStock": 82,
    "sku": "GEN-1777784926960-212",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Navy"
    ],
    "collections": "Business Casual",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Premium Nylon Jacket - 212 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Premium Nylon Jacket - 212 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 80
  },
  {
    "name": "Durable Wool Dress - 213",
    "description": "A durable dress made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 38.99,
    "discountPrice": 37.99,
    "countInStock": 98,
    "sku": "GEN-1777784926960-213",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Olive"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Durable Wool Dress - 213 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Durable Wool Dress - 213 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 99
  },
  {
    "name": "Modern Wool Blazer - 214",
    "description": "A modern blazer made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 38.99,
    "countInStock": 52,
    "sku": "GEN-1777784926960-214",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Pink"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Modern Wool Blazer - 214 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Modern Wool Blazer - 214 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 14
  },
  {
    "name": "Lightweight Linen T-Shirt - 215",
    "description": "A lightweight t-shirt made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 48.99,
    "countInStock": 48,
    "sku": "GEN-1777784926960-215",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Lightweight Linen T-Shirt - 215 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Lightweight Linen T-Shirt - 215 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 69
  },
  {
    "name": "Casual Denim Sweater - 216",
    "description": "A casual sweater made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 23.99,
    "discountPrice": 13.989999999999998,
    "countInStock": 23,
    "sku": "GEN-1777784926960-216",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Olive"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Casual Denim Sweater - 216 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Casual Denim Sweater - 216 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 9
  },
  {
    "name": "Sleek Linen Pants - 217",
    "description": "A sleek pants made from high-quality linen. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 75.99,
    "discountPrice": 74.99,
    "countInStock": 98,
    "sku": "GEN-1777784926960-217",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Blue"
    ],
    "collections": "Evening Collection",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Sleek Linen Pants - 217 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Sleek Linen Pants - 217 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 59
  },
  {
    "name": "Vintage Linen Hoodie - 218",
    "description": "A vintage hoodie made from high-quality linen. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 99.99,
    "discountPrice": 97.99,
    "countInStock": 35,
    "sku": "GEN-1777784926960-218",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Beige"
    ],
    "collections": "Evening Collection",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Vintage Linen Hoodie - 218 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Vintage Linen Hoodie - 218 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 66
  },
  {
    "name": "Cozy Fleece Blazer - 219",
    "description": "A cozy blazer made from high-quality fleece. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 65.99,
    "countInStock": 79,
    "sku": "GEN-1777784926960-219",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Cozy Fleece Blazer - 219 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Cozy Fleece Blazer - 219 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 27
  },
  {
    "name": "Sporty Fleece Jacket - 220",
    "description": "A sporty jacket made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 86.99,
    "countInStock": 38,
    "sku": "GEN-1777784926960-220",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Olive"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Sporty Fleece Jacket - 220 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Sporty Fleece Jacket - 220 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 41
  },
  {
    "name": "Durable Denim Shorts - 221",
    "description": "A durable shorts made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 48.99,
    "discountPrice": 47.99,
    "countInStock": 88,
    "sku": "GEN-1777784926960-221",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Teal"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Durable Denim Shorts - 221 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Durable Denim Shorts - 221 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 82
  },
  {
    "name": "Cozy Silk Coat - 222",
    "description": "A cozy coat made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 73.99,
    "countInStock": 61,
    "sku": "GEN-1777784926960-222",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Olive"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Cozy Silk Coat - 222 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Cozy Silk Coat - 222 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 12
  },
  {
    "name": "Premium Polyester Hoodie - 223",
    "description": "A premium hoodie made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 96.99,
    "countInStock": 9,
    "sku": "GEN-1777784926960-223",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Premium Polyester Hoodie - 223 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Premium Polyester Hoodie - 223 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 34
  },
  {
    "name": "Essential Wool Sweater - 224",
    "description": "A essential sweater made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 69.99,
    "discountPrice": 64.99,
    "countInStock": 51,
    "sku": "GEN-1777784926960-224",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Beige"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Essential Wool Sweater - 224 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Essential Wool Sweater - 224 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 66
  },
  {
    "name": "Durable Cotton Jacket - 225",
    "description": "A durable jacket made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 28.99,
    "countInStock": 93,
    "sku": "GEN-1777784926960-225",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Black"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Durable Cotton Jacket - 225 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Durable Cotton Jacket - 225 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 37
  },
  {
    "name": "Premium Denim Skirt - 226",
    "description": "A premium skirt made from high-quality denim. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 51.99,
    "discountPrice": 47.99,
    "countInStock": 11,
    "sku": "GEN-1777784926960-226",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Premium Denim Skirt - 226 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Premium Denim Skirt - 226 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 98
  },
  {
    "name": "Chic Fleece Shirt - 227",
    "description": "A chic shirt made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 106.99,
    "countInStock": 56,
    "sku": "GEN-1777784926960-227",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Brown"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Chic Fleece Shirt - 227 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Chic Fleece Shirt - 227 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 46
  },
  {
    "name": "Essential Leather Cardigan - 228",
    "description": "A essential cardigan made from high-quality leather. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 26.99,
    "countInStock": 29,
    "sku": "GEN-1777784926960-228",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Summer Collection",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Essential Leather Cardigan - 228 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Essential Leather Cardigan - 228 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 42
  },
  {
    "name": "Modern Nylon Coat - 229",
    "description": "A modern coat made from high-quality nylon. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 70.99,
    "discountPrice": 63.989999999999995,
    "countInStock": 99,
    "sku": "GEN-1777784926960-229",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Brown"
    ],
    "collections": "Winter Wear",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Modern Nylon Coat - 229 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Modern Nylon Coat - 229 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 0
  },
  {
    "name": "Durable Linen Sweater - 230",
    "description": "A durable sweater made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 119.99,
    "discountPrice": 117.99,
    "countInStock": 85,
    "sku": "GEN-1777784926960-230",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Black"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Durable Linen Sweater - 230 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Durable Linen Sweater - 230 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 69
  },
  {
    "name": "Essential Fleece T-Shirt - 231",
    "description": "A essential t-shirt made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 32.99,
    "discountPrice": 31.990000000000002,
    "countInStock": 2,
    "sku": "GEN-1777784926960-231",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Blue"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Essential Fleece T-Shirt - 231 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Essential Fleece T-Shirt - 231 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 86
  },
  {
    "name": "Durable Cotton Cardigan - 232",
    "description": "A durable cardigan made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 32.99,
    "countInStock": 14,
    "sku": "GEN-1777784926960-232",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Maroon"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Cotton Cardigan - 232 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Cotton Cardigan - 232 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 54
  },
  {
    "name": "Modern Polyester Dress - 233",
    "description": "A modern dress made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 20.99,
    "countInStock": 26,
    "sku": "GEN-1777784926960-233",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Modern Polyester Dress - 233 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Modern Polyester Dress - 233 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 42
  },
  {
    "name": "Rustic Spandex Vest - 234",
    "description": "A rustic vest made from high-quality spandex. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 20.99,
    "discountPrice": 12.989999999999998,
    "countInStock": 40,
    "sku": "GEN-1777784926960-234",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Beige"
    ],
    "collections": "Athleisure",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Rustic Spandex Vest - 234 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Rustic Spandex Vest - 234 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 81
  },
  {
    "name": "Rustic Linen Skirt - 235",
    "description": "A rustic skirt made from high-quality linen. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 69.99,
    "countInStock": 47,
    "sku": "GEN-1777784926960-235",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Yellow"
    ],
    "collections": "Everyday Basics",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Rustic Linen Skirt - 235 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Rustic Linen Skirt - 235 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 29
  },
  {
    "name": "Classic Spandex Coat - 236",
    "description": "A classic coat made from high-quality spandex. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 93.99,
    "countInStock": 21,
    "sku": "GEN-1777784926960-236",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Yellow"
    ],
    "collections": "Evening Collection",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Classic Spandex Coat - 236 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Classic Spandex Coat - 236 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 61
  },
  {
    "name": "Casual Leather Coat - 237",
    "description": "A casual coat made from high-quality leather. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 103.99,
    "countInStock": 67,
    "sku": "GEN-1777784926960-237",
    "category": "Dresses",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Teal"
    ],
    "collections": "Everyday Basics",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Casual Leather Coat - 237 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Casual Leather Coat - 237 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 76
  },
  {
    "name": "Chic Leather Cardigan - 238",
    "description": "A chic cardigan made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 115.99,
    "countInStock": 56,
    "sku": "GEN-1777784926960-238",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Pink"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Chic Leather Cardigan - 238 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Chic Leather Cardigan - 238 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 28
  },
  {
    "name": "Premium Spandex Shirt - 239",
    "description": "A premium shirt made from high-quality spandex. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 113.99,
    "discountPrice": 111.99,
    "countInStock": 62,
    "sku": "GEN-1777784926960-239",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Maroon"
    ],
    "collections": "Business Casual",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Premium Spandex Shirt - 239 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Premium Spandex Shirt - 239 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 67
  },
  {
    "name": "Sleek Spandex Cardigan - 240",
    "description": "A sleek cardigan made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 55.99,
    "countInStock": 39,
    "sku": "GEN-1777784926960-240",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Black"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Sleek Spandex Cardigan - 240 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Sleek Spandex Cardigan - 240 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 22
  },
  {
    "name": "Elegant Silk Blazer - 241",
    "description": "A elegant blazer made from high-quality silk. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 87,
    "sku": "GEN-1777784926960-241",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Green"
    ],
    "collections": "Athleisure",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Elegant Silk Blazer - 241 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Elegant Silk Blazer - 241 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 53
  },
  {
    "name": "Modern Linen Coat - 242",
    "description": "A modern coat made from high-quality linen. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 54.99,
    "discountPrice": 52.99,
    "countInStock": 16,
    "sku": "GEN-1777784926960-242",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Yellow"
    ],
    "collections": "Business Casual",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Modern Linen Coat - 242 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Modern Linen Coat - 242 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 7
  },
  {
    "name": "Urban Silk Jacket - 243",
    "description": "A urban jacket made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 79.99,
    "countInStock": 56,
    "sku": "GEN-1777784926960-243",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Urban Silk Jacket - 243 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Urban Silk Jacket - 243 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 62
  },
  {
    "name": "Modern Cotton Jeans - 244",
    "description": "A modern jeans made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 79.99,
    "discountPrice": 77.99,
    "countInStock": 69,
    "sku": "GEN-1777784926960-244",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Modern Cotton Jeans - 244 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Modern Cotton Jeans - 244 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 62
  },
  {
    "name": "Classic Polyester Vest - 245",
    "description": "A classic vest made from high-quality polyester. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 107.99,
    "discountPrice": 100.99,
    "countInStock": 81,
    "sku": "GEN-1777784926960-245",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal"
    ],
    "collections": "Winter Wear",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Polyester Vest - 245 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Polyester Vest - 245 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 76
  },
  {
    "name": "Rustic Leather Shorts - 246",
    "description": "A rustic shorts made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 36.99,
    "countInStock": 64,
    "sku": "GEN-1777784926960-246",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Gray"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Rustic Leather Shorts - 246 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Rustic Leather Shorts - 246 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 73
  },
  {
    "name": "Cozy Nylon Jacket - 247",
    "description": "A cozy jacket made from high-quality nylon. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 101.99,
    "countInStock": 49,
    "sku": "GEN-1777784926960-247",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Cozy Nylon Jacket - 247 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Cozy Nylon Jacket - 247 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 19
  },
  {
    "name": "Chic Leather Skirt - 248",
    "description": "A chic skirt made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 96.99,
    "countInStock": 99,
    "sku": "GEN-1777784926960-248",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Purple"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Chic Leather Skirt - 248 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Chic Leather Skirt - 248 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 86
  },
  {
    "name": "Urban Spandex Shirt - 249",
    "description": "A urban shirt made from high-quality spandex. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 65.99,
    "countInStock": 29,
    "sku": "GEN-1777784926960-249",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Urban Spandex Shirt - 249 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Urban Spandex Shirt - 249 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 71
  },
  {
    "name": "Lightweight Linen Vest - 250",
    "description": "A lightweight vest made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 101.99,
    "discountPrice": 93.99,
    "countInStock": 35,
    "sku": "GEN-1777784926960-250",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Olive"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Lightweight Linen Vest - 250 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Lightweight Linen Vest - 250 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 89
  },
  {
    "name": "Vintage Linen Skirt - 251",
    "description": "A vintage skirt made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 22.99,
    "discountPrice": 16.99,
    "countInStock": 49,
    "sku": "GEN-1777784926960-251",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Brown"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Vintage Linen Skirt - 251 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Vintage Linen Skirt - 251 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 89
  },
  {
    "name": "Modern Wool Jeans - 252",
    "description": "A modern jeans made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 116.99,
    "countInStock": 25,
    "sku": "GEN-1777784926960-252",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Beige"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Modern Wool Jeans - 252 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Modern Wool Jeans - 252 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 28
  },
  {
    "name": "Vintage Silk Pants - 253",
    "description": "A vintage pants made from high-quality silk. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 21.99,
    "discountPrice": 12.989999999999998,
    "countInStock": 23,
    "sku": "GEN-1777784926960-253",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "White"
    ],
    "collections": "Summer Collection",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Vintage Silk Pants - 253 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Vintage Silk Pants - 253 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 82
  },
  {
    "name": "Cozy Linen Skirt - 254",
    "description": "A cozy skirt made from high-quality linen. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 113.99,
    "discountPrice": 103.99,
    "countInStock": 51,
    "sku": "GEN-1777784926960-254",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Yellow"
    ],
    "collections": "Evening Collection",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Cozy Linen Skirt - 254 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Cozy Linen Skirt - 254 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 82
  },
  {
    "name": "Durable Polyester Skirt - 255",
    "description": "A durable skirt made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 54.99,
    "discountPrice": 45.99,
    "countInStock": 84,
    "sku": "GEN-1777784926960-255",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Durable Polyester Skirt - 255 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Durable Polyester Skirt - 255 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 63
  },
  {
    "name": "Casual Polyester Jacket - 256",
    "description": "A casual jacket made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 50.99,
    "countInStock": 77,
    "sku": "GEN-1777784926960-256",
    "category": "Dresses",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Purple"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Casual Polyester Jacket - 256 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Casual Polyester Jacket - 256 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 66
  },
  {
    "name": "Casual Nylon Jacket - 257",
    "description": "A casual jacket made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 103.99,
    "discountPrice": 96.99,
    "countInStock": 49,
    "sku": "GEN-1777784926960-257",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Gray"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Casual Nylon Jacket - 257 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Casual Nylon Jacket - 257 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 87
  },
  {
    "name": "Sleek Polyester Jacket - 258",
    "description": "A sleek jacket made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 25.99,
    "discountPrice": 22.99,
    "countInStock": 23,
    "sku": "GEN-1777784926960-258",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Pink"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Sleek Polyester Jacket - 258 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Sleek Polyester Jacket - 258 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 66
  },
  {
    "name": "Sporty Nylon T-Shirt - 259",
    "description": "A sporty t-shirt made from high-quality nylon. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 39.99,
    "countInStock": 5,
    "sku": "GEN-1777784926960-259",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Sporty Nylon T-Shirt - 259 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Sporty Nylon T-Shirt - 259 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 23
  },
  {
    "name": "Durable Leather Pants - 260",
    "description": "A durable pants made from high-quality leather. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 69.99,
    "discountPrice": 67.99,
    "countInStock": 35,
    "sku": "GEN-1777784926960-260",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Leather Pants - 260 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Leather Pants - 260 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 39
  },
  {
    "name": "Casual Denim Shorts - 261",
    "description": "A casual shorts made from high-quality denim. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 104.99,
    "countInStock": 5,
    "sku": "GEN-1777784926960-261",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Purple"
    ],
    "collections": "Everyday Basics",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Casual Denim Shorts - 261 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Casual Denim Shorts - 261 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 19
  },
  {
    "name": "Classic Polyester Jeans - 262",
    "description": "A classic jeans made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 97.99,
    "discountPrice": 89.99,
    "countInStock": 21,
    "sku": "GEN-1777784926960-262",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Purple"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Polyester Jeans - 262 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Polyester Jeans - 262 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 86
  },
  {
    "name": "Classic Cotton Vest - 263",
    "description": "A classic vest made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 112.99,
    "discountPrice": 103.99,
    "countInStock": 61,
    "sku": "GEN-1777784926960-263",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Cotton Vest - 263 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Cotton Vest - 263 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 13
  },
  {
    "name": "Urban Polyester Jacket - 264",
    "description": "A urban jacket made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 82.99,
    "countInStock": 22,
    "sku": "GEN-1777784926960-264",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "White"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Urban Polyester Jacket - 264 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Urban Polyester Jacket - 264 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 69
  },
  {
    "name": "Classic Spandex Vest - 265",
    "description": "A classic vest made from high-quality spandex. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 24.99,
    "countInStock": 90,
    "sku": "GEN-1777784926960-265",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Purple"
    ],
    "collections": "Athleisure",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Spandex Vest - 265 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Spandex Vest - 265 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 80
  },
  {
    "name": "Urban Denim Hoodie - 266",
    "description": "A urban hoodie made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 89.99,
    "discountPrice": 87.99,
    "countInStock": 19,
    "sku": "GEN-1777784926960-266",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Denim Hoodie - 266 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Denim Hoodie - 266 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 14
  },
  {
    "name": "Sporty Cotton Cardigan - 267",
    "description": "A sporty cardigan made from high-quality cotton. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 63.99,
    "discountPrice": 55.99,
    "countInStock": 50,
    "sku": "GEN-1777784926960-267",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Brown"
    ],
    "collections": "Athleisure",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Sporty Cotton Cardigan - 267 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Sporty Cotton Cardigan - 267 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 87
  },
  {
    "name": "Lightweight Leather Cardigan - 268",
    "description": "A lightweight cardigan made from high-quality leather. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 40.99,
    "discountPrice": 33.99,
    "countInStock": 64,
    "sku": "GEN-1777784926960-268",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Lightweight Leather Cardigan - 268 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Lightweight Leather Cardigan - 268 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 72
  },
  {
    "name": "Premium Denim Shorts - 269",
    "description": "A premium shorts made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 45.99,
    "countInStock": 93,
    "sku": "GEN-1777784926961-269",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Teal"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Premium Denim Shorts - 269 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Premium Denim Shorts - 269 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 64
  },
  {
    "name": "Casual Nylon Pants - 270",
    "description": "A casual pants made from high-quality nylon. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 21.99,
    "countInStock": 10,
    "sku": "GEN-1777784926961-270",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Maroon"
    ],
    "collections": "Evening Collection",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Casual Nylon Pants - 270 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Casual Nylon Pants - 270 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 92
  },
  {
    "name": "Vintage Denim Hoodie - 271",
    "description": "A vintage hoodie made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 118.99,
    "countInStock": 59,
    "sku": "GEN-1777784926961-271",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Red"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Vintage Denim Hoodie - 271 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Vintage Denim Hoodie - 271 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 85
  },
  {
    "name": "Chic Linen Skirt - 272",
    "description": "A chic skirt made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 97.99,
    "discountPrice": 87.99,
    "countInStock": 62,
    "sku": "GEN-1777784926961-272",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Beige"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Chic Linen Skirt - 272 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Chic Linen Skirt - 272 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 90
  },
  {
    "name": "Sleek Polyester Cardigan - 273",
    "description": "A sleek cardigan made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 103.99,
    "countInStock": 51,
    "sku": "GEN-1777784926961-273",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Sleek Polyester Cardigan - 273 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Sleek Polyester Cardigan - 273 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 25
  },
  {
    "name": "Chic Denim Jacket - 274",
    "description": "A chic jacket made from high-quality denim. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 118.99,
    "countInStock": 9,
    "sku": "GEN-1777784926961-274",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Green"
    ],
    "collections": "Everyday Basics",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Chic Denim Jacket - 274 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Chic Denim Jacket - 274 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 18
  },
  {
    "name": "Premium Denim Jeans - 275",
    "description": "A premium jeans made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 54.99,
    "countInStock": 31,
    "sku": "GEN-1777784926961-275",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Premium Denim Jeans - 275 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Premium Denim Jeans - 275 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 51
  },
  {
    "name": "Modern Spandex Pants - 276",
    "description": "A modern pants made from high-quality spandex. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 112.99,
    "countInStock": 27,
    "sku": "GEN-1777784926961-276",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "White"
    ],
    "collections": "Evening Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Modern Spandex Pants - 276 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Modern Spandex Pants - 276 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 21
  },
  {
    "name": "Urban Spandex Pants - 277",
    "description": "A urban pants made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 117.99,
    "countInStock": 1,
    "sku": "GEN-1777784926961-277",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Purple"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Urban Spandex Pants - 277 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Urban Spandex Pants - 277 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 19
  },
  {
    "name": "Cozy Nylon Cardigan - 278",
    "description": "A cozy cardigan made from high-quality nylon. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 43.99,
    "discountPrice": 34.99,
    "countInStock": 81,
    "sku": "GEN-1777784926961-278",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Cozy Nylon Cardigan - 278 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Cozy Nylon Cardigan - 278 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 12
  },
  {
    "name": "Premium Polyester Vest - 279",
    "description": "A premium vest made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 118.99,
    "countInStock": 51,
    "sku": "GEN-1777784926961-279",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Teal"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Premium Polyester Vest - 279 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Premium Polyester Vest - 279 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 0
  },
  {
    "name": "Durable Cotton Coat - 280",
    "description": "A durable coat made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 47.99,
    "discountPrice": 40.99,
    "countInStock": 36,
    "sku": "GEN-1777784926961-280",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Navy"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Durable Cotton Coat - 280 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Durable Cotton Coat - 280 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 89
  },
  {
    "name": "Chic Polyester Pants - 281",
    "description": "A chic pants made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 85.99,
    "countInStock": 15,
    "sku": "GEN-1777784926961-281",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Olive"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Chic Polyester Pants - 281 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Chic Polyester Pants - 281 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 7
  },
  {
    "name": "Cozy Spandex Pants - 282",
    "description": "A cozy pants made from high-quality spandex. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 49.99,
    "discountPrice": 48.99,
    "countInStock": 2,
    "sku": "GEN-1777784926961-282",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "White"
    ],
    "collections": "Business Casual",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Spandex Pants - 282 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Spandex Pants - 282 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 28
  },
  {
    "name": "Chic Linen Shorts - 283",
    "description": "A chic shorts made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 81.99,
    "countInStock": 19,
    "sku": "GEN-1777784926961-283",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Chic Linen Shorts - 283 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Chic Linen Shorts - 283 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 60
  },
  {
    "name": "Modern Fleece Pants - 284",
    "description": "A modern pants made from high-quality fleece. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 51.99,
    "countInStock": 61,
    "sku": "GEN-1777784926961-284",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Pink"
    ],
    "collections": "Evening Collection",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Modern Fleece Pants - 284 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Modern Fleece Pants - 284 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 77
  },
  {
    "name": "Rustic Denim Blazer - 285",
    "description": "A rustic blazer made from high-quality denim. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 52.99,
    "countInStock": 52,
    "sku": "GEN-1777784926961-285",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Rustic Denim Blazer - 285 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Rustic Denim Blazer - 285 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 6
  },
  {
    "name": "Lightweight Cotton Pants - 286",
    "description": "A lightweight pants made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 114.99,
    "discountPrice": 112.99,
    "countInStock": 3,
    "sku": "GEN-1777784926961-286",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Brown"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Lightweight Cotton Pants - 286 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Lightweight Cotton Pants - 286 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 56
  },
  {
    "name": "Sleek Denim Cardigan - 287",
    "description": "A sleek cardigan made from high-quality denim. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 26.99,
    "countInStock": 20,
    "sku": "GEN-1777784926961-287",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Brown"
    ],
    "collections": "Everyday Basics",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Sleek Denim Cardigan - 287 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Sleek Denim Cardigan - 287 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 38
  },
  {
    "name": "Elegant Linen Shirt - 288",
    "description": "A elegant shirt made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 113.99,
    "countInStock": 72,
    "sku": "GEN-1777784926961-288",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Navy"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Elegant Linen Shirt - 288 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Elegant Linen Shirt - 288 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 53
  },
  {
    "name": "Rustic Fleece T-Shirt - 289",
    "description": "A rustic t-shirt made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 72.99,
    "discountPrice": 66.99,
    "countInStock": 99,
    "sku": "GEN-1777784926961-289",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Beige"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Rustic Fleece T-Shirt - 289 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Rustic Fleece T-Shirt - 289 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 56
  },
  {
    "name": "Sporty Polyester Vest - 290",
    "description": "A sporty vest made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 103.99,
    "discountPrice": 93.99,
    "countInStock": 20,
    "sku": "GEN-1777784926961-290",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Sporty Polyester Vest - 290 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Sporty Polyester Vest - 290 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 78
  },
  {
    "name": "Vintage Wool Skirt - 291",
    "description": "A vintage skirt made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 59.99,
    "countInStock": 19,
    "sku": "GEN-1777784926961-291",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Beige"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Vintage Wool Skirt - 291 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Vintage Wool Skirt - 291 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 1
  },
  {
    "name": "Vintage Linen Shorts - 292",
    "description": "A vintage shorts made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 80.99,
    "countInStock": 55,
    "sku": "GEN-1777784926961-292",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Brown"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Vintage Linen Shorts - 292 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Vintage Linen Shorts - 292 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 93
  },
  {
    "name": "Durable Linen Dress - 293",
    "description": "A durable dress made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 47.99,
    "countInStock": 78,
    "sku": "GEN-1777784926961-293",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Green"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Durable Linen Dress - 293 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Durable Linen Dress - 293 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 69
  },
  {
    "name": "Vintage Denim Hoodie - 294",
    "description": "A vintage hoodie made from high-quality denim. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 44.99,
    "countInStock": 7,
    "sku": "GEN-1777784926961-294",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy"
    ],
    "collections": "Everyday Basics",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Vintage Denim Hoodie - 294 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Vintage Denim Hoodie - 294 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 32
  },
  {
    "name": "Chic Leather Jeans - 295",
    "description": "A chic jeans made from high-quality leather. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 66.99,
    "countInStock": 71,
    "sku": "GEN-1777784926961-295",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Gray"
    ],
    "collections": "Summer Collection",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Chic Leather Jeans - 295 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Chic Leather Jeans - 295 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 95
  },
  {
    "name": "Elegant Wool T-Shirt - 296",
    "description": "A elegant t-shirt made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 53.99,
    "discountPrice": 43.99,
    "countInStock": 73,
    "sku": "GEN-1777784926961-296",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Pink"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Elegant Wool T-Shirt - 296 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Elegant Wool T-Shirt - 296 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 53
  },
  {
    "name": "Durable Linen Skirt - 297",
    "description": "A durable skirt made from high-quality linen. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 115.99,
    "discountPrice": 106.99,
    "countInStock": 53,
    "sku": "GEN-1777784926961-297",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Durable Linen Skirt - 297 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Durable Linen Skirt - 297 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 44
  },
  {
    "name": "Classic Denim Vest - 298",
    "description": "A classic vest made from high-quality denim. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 117.99,
    "countInStock": 4,
    "sku": "GEN-1777784926961-298",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Summer Collection",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Denim Vest - 298 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Denim Vest - 298 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 46
  },
  {
    "name": "Sporty Fleece Jeans - 299",
    "description": "A sporty jeans made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 115.99,
    "countInStock": 43,
    "sku": "GEN-1777784926961-299",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Purple"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sporty Fleece Jeans - 299 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sporty Fleece Jeans - 299 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 78
  },
  {
    "name": "Sporty Silk Shorts - 300",
    "description": "A sporty shorts made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 38.99,
    "countInStock": 9,
    "sku": "GEN-1777784926961-300",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Red"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Sporty Silk Shorts - 300 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Sporty Silk Shorts - 300 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 2
  },
  {
    "name": "Sporty Leather T-Shirt - 301",
    "description": "A sporty t-shirt made from high-quality leather. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 21.99,
    "discountPrice": 13.989999999999998,
    "countInStock": 83,
    "sku": "GEN-1777784926961-301",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Pink"
    ],
    "collections": "Everyday Basics",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Sporty Leather T-Shirt - 301 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Sporty Leather T-Shirt - 301 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 88
  },
  {
    "name": "Chic Denim T-Shirt - 302",
    "description": "A chic t-shirt made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 33.99,
    "discountPrice": 26.990000000000002,
    "countInStock": 4,
    "sku": "GEN-1777784926961-302",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Green"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Chic Denim T-Shirt - 302 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Chic Denim T-Shirt - 302 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 31
  },
  {
    "name": "Premium Cotton Jacket - 303",
    "description": "A premium jacket made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 96.99,
    "discountPrice": 93.99,
    "countInStock": 96,
    "sku": "GEN-1777784926961-303",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Premium Cotton Jacket - 303 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Premium Cotton Jacket - 303 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 32
  },
  {
    "name": "Cozy Nylon Pants - 304",
    "description": "A cozy pants made from high-quality nylon. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 31.99,
    "countInStock": 17,
    "sku": "GEN-1777784926961-304",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Yellow"
    ],
    "collections": "Winter Wear",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Nylon Pants - 304 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Nylon Pants - 304 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 27
  },
  {
    "name": "Essential Spandex Sweater - 305",
    "description": "A essential sweater made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 97.99,
    "countInStock": 88,
    "sku": "GEN-1777784926961-305",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Essential Spandex Sweater - 305 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Essential Spandex Sweater - 305 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 19
  },
  {
    "name": "Classic Denim Hoodie - 306",
    "description": "A classic hoodie made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 27.99,
    "discountPrice": 17.99,
    "countInStock": 14,
    "sku": "GEN-1777784926961-306",
    "category": "Dresses",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Classic Denim Hoodie - 306 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Classic Denim Hoodie - 306 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 20
  },
  {
    "name": "Classic Leather Pants - 307",
    "description": "A classic pants made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 74.99,
    "countInStock": 72,
    "sku": "GEN-1777784926961-307",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Purple"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Leather Pants - 307 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Leather Pants - 307 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 89
  },
  {
    "name": "Modern Leather Cardigan - 308",
    "description": "A modern cardigan made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 100.99,
    "countInStock": 24,
    "sku": "GEN-1777784926961-308",
    "category": "Dresses",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Blue"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Modern Leather Cardigan - 308 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Modern Leather Cardigan - 308 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 31
  },
  {
    "name": "Vintage Spandex Shorts - 309",
    "description": "A vintage shorts made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 60.99,
    "discountPrice": 57.99,
    "countInStock": 6,
    "sku": "GEN-1777784926961-309",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Yellow"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Vintage Spandex Shorts - 309 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Vintage Spandex Shorts - 309 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 47
  },
  {
    "name": "Vintage Wool Hoodie - 310",
    "description": "A vintage hoodie made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 89.99,
    "countInStock": 42,
    "sku": "GEN-1777784926961-310",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Brown"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Vintage Wool Hoodie - 310 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Vintage Wool Hoodie - 310 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 76
  },
  {
    "name": "Sleek Nylon T-Shirt - 311",
    "description": "A sleek t-shirt made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 22.99,
    "countInStock": 65,
    "sku": "GEN-1777784926961-311",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Navy"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Sleek Nylon T-Shirt - 311 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Sleek Nylon T-Shirt - 311 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 21
  },
  {
    "name": "Essential Cotton Shorts - 312",
    "description": "A essential shorts made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 24.99,
    "countInStock": 4,
    "sku": "GEN-1777784926961-312",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Pink"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Essential Cotton Shorts - 312 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Essential Cotton Shorts - 312 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 54
  },
  {
    "name": "Urban Leather T-Shirt - 313",
    "description": "A urban t-shirt made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 110.99,
    "countInStock": 85,
    "sku": "GEN-1777784926961-313",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Olive"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Urban Leather T-Shirt - 313 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Urban Leather T-Shirt - 313 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 0
  },
  {
    "name": "Classic Wool Vest - 314",
    "description": "A classic vest made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 91.99,
    "discountPrice": 88.99,
    "countInStock": 3,
    "sku": "GEN-1777784926961-314",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Green"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Wool Vest - 314 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Wool Vest - 314 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 52
  },
  {
    "name": "Essential Wool Coat - 315",
    "description": "A essential coat made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 85.99,
    "discountPrice": 81.99,
    "countInStock": 27,
    "sku": "GEN-1777784926961-315",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Essential Wool Coat - 315 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Essential Wool Coat - 315 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 13
  },
  {
    "name": "Sleek Nylon Blazer - 316",
    "description": "A sleek blazer made from high-quality nylon. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 67.99,
    "countInStock": 96,
    "sku": "GEN-1777784926961-316",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Olive"
    ],
    "collections": "Evening Collection",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sleek Nylon Blazer - 316 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sleek Nylon Blazer - 316 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 10
  },
  {
    "name": "Classic Cotton Vest - 317",
    "description": "A classic vest made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 49.99,
    "discountPrice": 43.99,
    "countInStock": 83,
    "sku": "GEN-1777784926961-317",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Yellow"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Cotton Vest - 317 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Cotton Vest - 317 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 72
  },
  {
    "name": "Sporty Wool Shirt - 318",
    "description": "A sporty shirt made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 81.99,
    "countInStock": 9,
    "sku": "GEN-1777784926961-318",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Olive"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Sporty Wool Shirt - 318 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Sporty Wool Shirt - 318 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 81
  },
  {
    "name": "Casual Leather Cardigan - 319",
    "description": "A casual cardigan made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 43.99,
    "countInStock": 23,
    "sku": "GEN-1777784926961-319",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Leather Cardigan - 319 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Leather Cardigan - 319 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 96
  },
  {
    "name": "Vintage Nylon Blazer - 320",
    "description": "A vintage blazer made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 22.99,
    "discountPrice": 20.99,
    "countInStock": 83,
    "sku": "GEN-1777784926961-320",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Vintage Nylon Blazer - 320 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Vintage Nylon Blazer - 320 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 14
  },
  {
    "name": "Classic Silk Jacket - 321",
    "description": "A classic jacket made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 20.99,
    "countInStock": 58,
    "sku": "GEN-1777784926961-321",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Yellow"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Classic Silk Jacket - 321 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Classic Silk Jacket - 321 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 71
  },
  {
    "name": "Vintage Fleece Shirt - 322",
    "description": "A vintage shirt made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 99.99,
    "countInStock": 42,
    "sku": "GEN-1777784926961-322",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Vintage Fleece Shirt - 322 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Vintage Fleece Shirt - 322 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 45
  },
  {
    "name": "Chic Fleece Pants - 323",
    "description": "A chic pants made from high-quality fleece. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 114.99,
    "discountPrice": 108.99,
    "countInStock": 77,
    "sku": "GEN-1777784926961-323",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Maroon"
    ],
    "collections": "Business Casual",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Chic Fleece Pants - 323 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Chic Fleece Pants - 323 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 91
  },
  {
    "name": "Sporty Polyester Jacket - 324",
    "description": "A sporty jacket made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 26.99,
    "discountPrice": 19.99,
    "countInStock": 2,
    "sku": "GEN-1777784926961-324",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Sporty Polyester Jacket - 324 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Sporty Polyester Jacket - 324 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 1
  },
  {
    "name": "Urban Cotton Pants - 325",
    "description": "A urban pants made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 61.99,
    "countInStock": 55,
    "sku": "GEN-1777784926961-325",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Maroon"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Urban Cotton Pants - 325 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Urban Cotton Pants - 325 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 62
  },
  {
    "name": "Essential Leather Vest - 326",
    "description": "A essential vest made from high-quality leather. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 45.99,
    "discountPrice": 44.99,
    "countInStock": 2,
    "sku": "GEN-1777784926961-326",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Brown"
    ],
    "collections": "Everyday Basics",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Essential Leather Vest - 326 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Essential Leather Vest - 326 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 29
  },
  {
    "name": "Essential Wool Sweater - 327",
    "description": "A essential sweater made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 98.99,
    "countInStock": 19,
    "sku": "GEN-1777784926961-327",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Essential Wool Sweater - 327 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Essential Wool Sweater - 327 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 70
  },
  {
    "name": "Urban Leather Skirt - 328",
    "description": "A urban skirt made from high-quality leather. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 85.99,
    "countInStock": 33,
    "sku": "GEN-1777784926961-328",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Yellow"
    ],
    "collections": "Everyday Basics",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Leather Skirt - 328 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Leather Skirt - 328 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 79
  },
  {
    "name": "Chic Fleece Vest - 329",
    "description": "A chic vest made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 65.99,
    "countInStock": 25,
    "sku": "GEN-1777784926961-329",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Brown"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Chic Fleece Vest - 329 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Chic Fleece Vest - 329 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 78
  },
  {
    "name": "Durable Denim Shorts - 330",
    "description": "A durable shorts made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 57.99,
    "countInStock": 4,
    "sku": "GEN-1777784926961-330",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Blue"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Durable Denim Shorts - 330 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Durable Denim Shorts - 330 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 80
  },
  {
    "name": "Essential Leather Dress - 331",
    "description": "A essential dress made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 46.99,
    "countInStock": 9,
    "sku": "GEN-1777784926961-331",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Navy"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Essential Leather Dress - 331 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Essential Leather Dress - 331 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 51
  },
  {
    "name": "Essential Polyester Vest - 332",
    "description": "A essential vest made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 115.99,
    "countInStock": 65,
    "sku": "GEN-1777784926961-332",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "White"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Essential Polyester Vest - 332 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Essential Polyester Vest - 332 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 37
  },
  {
    "name": "Urban Fleece Skirt - 333",
    "description": "A urban skirt made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 36.99,
    "countInStock": 72,
    "sku": "GEN-1777784926961-333",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Green"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Fleece Skirt - 333 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Fleece Skirt - 333 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 39
  },
  {
    "name": "Premium Fleece Shorts - 334",
    "description": "A premium shorts made from high-quality fleece. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 90.99,
    "countInStock": 2,
    "sku": "GEN-1777784926961-334",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Maroon"
    ],
    "collections": "Summer Collection",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Premium Fleece Shorts - 334 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Premium Fleece Shorts - 334 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 96
  },
  {
    "name": "Lightweight Leather T-Shirt - 335",
    "description": "A lightweight t-shirt made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 95.99,
    "discountPrice": 93.99,
    "countInStock": 49,
    "sku": "GEN-1777784926961-335",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Black"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Lightweight Leather T-Shirt - 335 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Lightweight Leather T-Shirt - 335 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 41
  },
  {
    "name": "Casual Leather Coat - 336",
    "description": "A casual coat made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 84.99,
    "discountPrice": 78.99,
    "countInStock": 74,
    "sku": "GEN-1777784926961-336",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "White"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Casual Leather Coat - 336 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Casual Leather Coat - 336 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 56
  },
  {
    "name": "Chic Denim Jeans - 337",
    "description": "A chic jeans made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 71.99,
    "countInStock": 52,
    "sku": "GEN-1777784926961-337",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Chic Denim Jeans - 337 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Chic Denim Jeans - 337 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 30
  },
  {
    "name": "Classic Silk Cardigan - 338",
    "description": "A classic cardigan made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 80.99,
    "countInStock": 91,
    "sku": "GEN-1777784926961-338",
    "category": "Dresses",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Olive"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Classic Silk Cardigan - 338 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Classic Silk Cardigan - 338 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 3
  },
  {
    "name": "Sporty Polyester Sweater - 339",
    "description": "A sporty sweater made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 26.99,
    "countInStock": 79,
    "sku": "GEN-1777784926961-339",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sporty Polyester Sweater - 339 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sporty Polyester Sweater - 339 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 99
  },
  {
    "name": "Sporty Denim Blazer - 340",
    "description": "A sporty blazer made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 46.99,
    "discountPrice": 37.99,
    "countInStock": 56,
    "sku": "GEN-1777784926961-340",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Olive"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sporty Denim Blazer - 340 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sporty Denim Blazer - 340 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 12
  },
  {
    "name": "Vintage Spandex Dress - 341",
    "description": "A vintage dress made from high-quality spandex. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 38.99,
    "discountPrice": 30.990000000000002,
    "countInStock": 98,
    "sku": "GEN-1777784926961-341",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Red"
    ],
    "collections": "Evening Collection",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Vintage Spandex Dress - 341 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Vintage Spandex Dress - 341 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 20
  },
  {
    "name": "Lightweight Denim Pants - 342",
    "description": "A lightweight pants made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 32.99,
    "discountPrice": 27.990000000000002,
    "countInStock": 94,
    "sku": "GEN-1777784926961-342",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Navy"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Lightweight Denim Pants - 342 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Lightweight Denim Pants - 342 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 56
  },
  {
    "name": "Sleek Denim Blazer - 343",
    "description": "A sleek blazer made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 69.99,
    "discountPrice": 59.989999999999995,
    "countInStock": 83,
    "sku": "GEN-1777784926961-343",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Gray"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sleek Denim Blazer - 343 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sleek Denim Blazer - 343 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 45
  },
  {
    "name": "Sleek Wool Jeans - 344",
    "description": "A sleek jeans made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 93.99,
    "discountPrice": 87.99,
    "countInStock": 67,
    "sku": "GEN-1777784926961-344",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Yellow"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sleek Wool Jeans - 344 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sleek Wool Jeans - 344 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 52
  },
  {
    "name": "Durable Nylon Coat - 345",
    "description": "A durable coat made from high-quality nylon. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 48.99,
    "discountPrice": 38.99,
    "countInStock": 83,
    "sku": "GEN-1777784926961-345",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Navy"
    ],
    "collections": "Business Casual",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Durable Nylon Coat - 345 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Durable Nylon Coat - 345 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 0
  },
  {
    "name": "Casual Wool Pants - 346",
    "description": "A casual pants made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 41.99,
    "countInStock": 52,
    "sku": "GEN-1777784926961-346",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Casual Wool Pants - 346 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Casual Wool Pants - 346 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 63
  },
  {
    "name": "Lightweight Linen Skirt - 347",
    "description": "A lightweight skirt made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 103.99,
    "discountPrice": 93.99,
    "countInStock": 21,
    "sku": "GEN-1777784926961-347",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Green"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Lightweight Linen Skirt - 347 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Lightweight Linen Skirt - 347 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 96
  },
  {
    "name": "Essential Polyester Coat - 348",
    "description": "A essential coat made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 117.99,
    "countInStock": 76,
    "sku": "GEN-1777784926961-348",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Navy"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Essential Polyester Coat - 348 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Essential Polyester Coat - 348 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 93
  },
  {
    "name": "Lightweight Wool Jacket - 349",
    "description": "A lightweight jacket made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 79.99,
    "countInStock": 15,
    "sku": "GEN-1777784926961-349",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Gray"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Lightweight Wool Jacket - 349 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Lightweight Wool Jacket - 349 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 25
  },
  {
    "name": "Modern Nylon Sweater - 350",
    "description": "A modern sweater made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 75.99,
    "countInStock": 35,
    "sku": "GEN-1777784926961-350",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Yellow"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Modern Nylon Sweater - 350 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Modern Nylon Sweater - 350 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 84
  },
  {
    "name": "Elegant Polyester Vest - 351",
    "description": "A elegant vest made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 30.99,
    "discountPrice": 22.99,
    "countInStock": 55,
    "sku": "GEN-1777784926961-351",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Navy"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Polyester Vest - 351 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Polyester Vest - 351 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 72
  },
  {
    "name": "Casual Polyester Jeans - 352",
    "description": "A casual jeans made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 37.99,
    "discountPrice": 34.99,
    "countInStock": 16,
    "sku": "GEN-1777784926961-352",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Maroon"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Polyester Jeans - 352 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Polyester Jeans - 352 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 96
  },
  {
    "name": "Elegant Nylon T-Shirt - 353",
    "description": "A elegant t-shirt made from high-quality nylon. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 22.99,
    "discountPrice": 15.989999999999998,
    "countInStock": 81,
    "sku": "GEN-1777784926961-353",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Elegant Nylon T-Shirt - 353 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Elegant Nylon T-Shirt - 353 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 11
  },
  {
    "name": "Elegant Linen Skirt - 354",
    "description": "A elegant skirt made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 73.99,
    "discountPrice": 72.99,
    "countInStock": 88,
    "sku": "GEN-1777784926961-354",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Linen Skirt - 354 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Linen Skirt - 354 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 55
  },
  {
    "name": "Durable Fleece Jeans - 355",
    "description": "A durable jeans made from high-quality fleece. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 98.99,
    "countInStock": 85,
    "sku": "GEN-1777784926961-355",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Maroon"
    ],
    "collections": "Business Casual",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Durable Fleece Jeans - 355 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Durable Fleece Jeans - 355 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 18
  },
  {
    "name": "Sporty Linen Jacket - 356",
    "description": "A sporty jacket made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 92.99,
    "countInStock": 27,
    "sku": "GEN-1777784926961-356",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Yellow"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Sporty Linen Jacket - 356 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Sporty Linen Jacket - 356 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 7
  },
  {
    "name": "Elegant Silk Pants - 357",
    "description": "A elegant pants made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 50.99,
    "countInStock": 42,
    "sku": "GEN-1777784926961-357",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Elegant Silk Pants - 357 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Elegant Silk Pants - 357 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 75
  },
  {
    "name": "Lightweight Leather Sweater - 358",
    "description": "A lightweight sweater made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 90.99,
    "countInStock": 44,
    "sku": "GEN-1777784926961-358",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Olive"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Lightweight Leather Sweater - 358 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Lightweight Leather Sweater - 358 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 3
  },
  {
    "name": "Vintage Polyester Shorts - 359",
    "description": "A vintage shorts made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 91.99,
    "discountPrice": 89.99,
    "countInStock": 91,
    "sku": "GEN-1777784926961-359",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Vintage Polyester Shorts - 359 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Vintage Polyester Shorts - 359 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 15
  },
  {
    "name": "Sleek Linen Blazer - 360",
    "description": "A sleek blazer made from high-quality linen. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 24.99,
    "discountPrice": 20.99,
    "countInStock": 67,
    "sku": "GEN-1777784926961-360",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sleek Linen Blazer - 360 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sleek Linen Blazer - 360 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 7
  },
  {
    "name": "Urban Cotton Hoodie - 361",
    "description": "A urban hoodie made from high-quality cotton. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 100.99,
    "countInStock": 14,
    "sku": "GEN-1777784926962-361",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Cotton Hoodie - 361 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Cotton Hoodie - 361 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 87
  },
  {
    "name": "Classic Wool Jeans - 362",
    "description": "A classic jeans made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 85.99,
    "discountPrice": 78.99,
    "countInStock": 82,
    "sku": "GEN-1777784926962-362",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Wool Jeans - 362 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Wool Jeans - 362 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 34
  },
  {
    "name": "Elegant Spandex Shirt - 363",
    "description": "A elegant shirt made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 43.99,
    "discountPrice": 38.99,
    "countInStock": 30,
    "sku": "GEN-1777784926962-363",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Navy"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Elegant Spandex Shirt - 363 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Elegant Spandex Shirt - 363 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 41
  },
  {
    "name": "Sleek Leather Sweater - 364",
    "description": "A sleek sweater made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 27.99,
    "countInStock": 21,
    "sku": "GEN-1777784926962-364",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Yellow"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sleek Leather Sweater - 364 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sleek Leather Sweater - 364 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 43
  },
  {
    "name": "Rustic Fleece Vest - 365",
    "description": "A rustic vest made from high-quality fleece. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 87.99,
    "countInStock": 90,
    "sku": "GEN-1777784926962-365",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Purple"
    ],
    "collections": "Evening Collection",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Rustic Fleece Vest - 365 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Rustic Fleece Vest - 365 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 77
  },
  {
    "name": "Essential Denim Jeans - 366",
    "description": "A essential jeans made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 28.99,
    "countInStock": 97,
    "sku": "GEN-1777784926962-366",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Black"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Essential Denim Jeans - 366 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Essential Denim Jeans - 366 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 33
  },
  {
    "name": "Vintage Spandex Blazer - 367",
    "description": "A vintage blazer made from high-quality spandex. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 107.99,
    "countInStock": 39,
    "sku": "GEN-1777784926962-367",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Red"
    ],
    "collections": "Evening Collection",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Vintage Spandex Blazer - 367 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Vintage Spandex Blazer - 367 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 20
  },
  {
    "name": "Elegant Fleece Vest - 368",
    "description": "A elegant vest made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 41.99,
    "discountPrice": 39.99,
    "countInStock": 59,
    "sku": "GEN-1777784926962-368",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Olive"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Fleece Vest - 368 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Fleece Vest - 368 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 99
  },
  {
    "name": "Elegant Denim Vest - 369",
    "description": "A elegant vest made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 71.99,
    "countInStock": 35,
    "sku": "GEN-1777784926962-369",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Denim Vest - 369 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Denim Vest - 369 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 34
  },
  {
    "name": "Urban Wool Blazer - 370",
    "description": "A urban blazer made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 114.99,
    "countInStock": 17,
    "sku": "GEN-1777784926962-370",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Brown"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Urban Wool Blazer - 370 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Urban Wool Blazer - 370 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 85
  },
  {
    "name": "Sporty Fleece Skirt - 371",
    "description": "A sporty skirt made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 110.99,
    "discountPrice": 101.99,
    "countInStock": 79,
    "sku": "GEN-1777784926962-371",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Black"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Sporty Fleece Skirt - 371 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Sporty Fleece Skirt - 371 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 10
  },
  {
    "name": "Lightweight Wool Sweater - 372",
    "description": "A lightweight sweater made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 117.99,
    "discountPrice": 112.99,
    "countInStock": 91,
    "sku": "GEN-1777784926962-372",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Beige"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Lightweight Wool Sweater - 372 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Lightweight Wool Sweater - 372 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 81
  },
  {
    "name": "Chic Nylon Shorts - 373",
    "description": "A chic shorts made from high-quality nylon. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 43.99,
    "countInStock": 66,
    "sku": "GEN-1777784926962-373",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Olive"
    ],
    "collections": "Everyday Basics",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Chic Nylon Shorts - 373 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Chic Nylon Shorts - 373 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 67
  },
  {
    "name": "Rustic Silk Coat - 374",
    "description": "A rustic coat made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 98.99,
    "countInStock": 9,
    "sku": "GEN-1777784926962-374",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Green"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Rustic Silk Coat - 374 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Rustic Silk Coat - 374 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 21
  },
  {
    "name": "Urban Nylon Shirt - 375",
    "description": "A urban shirt made from high-quality nylon. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 53.99,
    "discountPrice": 51.99,
    "countInStock": 98,
    "sku": "GEN-1777784926962-375",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Yellow"
    ],
    "collections": "Business Casual",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Urban Nylon Shirt - 375 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Urban Nylon Shirt - 375 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 4
  },
  {
    "name": "Classic Spandex Blazer - 376",
    "description": "A classic blazer made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 71.99,
    "discountPrice": 61.989999999999995,
    "countInStock": 94,
    "sku": "GEN-1777784926962-376",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Navy"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Classic Spandex Blazer - 376 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Classic Spandex Blazer - 376 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 24
  },
  {
    "name": "Classic Cotton Coat - 377",
    "description": "A classic coat made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 92.99,
    "countInStock": 72,
    "sku": "GEN-1777784926962-377",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Classic Cotton Coat - 377 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Classic Cotton Coat - 377 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 21
  },
  {
    "name": "Vintage Cotton Blazer - 378",
    "description": "A vintage blazer made from high-quality cotton. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 68.99,
    "countInStock": 30,
    "sku": "GEN-1777784926962-378",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Vintage Cotton Blazer - 378 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Vintage Cotton Blazer - 378 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 59
  },
  {
    "name": "Lightweight Denim Blazer - 379",
    "description": "A lightweight blazer made from high-quality denim. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 105.99,
    "countInStock": 49,
    "sku": "GEN-1777784926962-379",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive"
    ],
    "collections": "Everyday Basics",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Lightweight Denim Blazer - 379 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Lightweight Denim Blazer - 379 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 79
  },
  {
    "name": "Vintage Polyester Skirt - 380",
    "description": "A vintage skirt made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 85.99,
    "countInStock": 54,
    "sku": "GEN-1777784926962-380",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Pink"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Vintage Polyester Skirt - 380 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Vintage Polyester Skirt - 380 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 40
  },
  {
    "name": "Chic Fleece Hoodie - 381",
    "description": "A chic hoodie made from high-quality fleece. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 30.99,
    "discountPrice": 20.99,
    "countInStock": 52,
    "sku": "GEN-1777784926962-381",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Green"
    ],
    "collections": "Summer Collection",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Chic Fleece Hoodie - 381 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Chic Fleece Hoodie - 381 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 98
  },
  {
    "name": "Urban Silk Skirt - 382",
    "description": "A urban skirt made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 113.99,
    "discountPrice": 106.99,
    "countInStock": 61,
    "sku": "GEN-1777784926962-382",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Silk Skirt - 382 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Silk Skirt - 382 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 27
  },
  {
    "name": "Essential Leather Coat - 383",
    "description": "A essential coat made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 104.99,
    "countInStock": 57,
    "sku": "GEN-1777784926962-383",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Gray"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Essential Leather Coat - 383 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Essential Leather Coat - 383 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 84
  },
  {
    "name": "Casual Nylon Pants - 384",
    "description": "A casual pants made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 40.99,
    "countInStock": 40,
    "sku": "GEN-1777784926962-384",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Green"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Casual Nylon Pants - 384 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Casual Nylon Pants - 384 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 71
  },
  {
    "name": "Cozy Denim T-Shirt - 385",
    "description": "A cozy t-shirt made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 61.99,
    "countInStock": 28,
    "sku": "GEN-1777784926962-385",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Navy"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Cozy Denim T-Shirt - 385 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Cozy Denim T-Shirt - 385 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 37
  },
  {
    "name": "Chic Fleece T-Shirt - 386",
    "description": "A chic t-shirt made from high-quality fleece. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 93.99,
    "discountPrice": 87.99,
    "countInStock": 33,
    "sku": "GEN-1777784926962-386",
    "category": "Dresses",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Yellow"
    ],
    "collections": "Summer Collection",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Chic Fleece T-Shirt - 386 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Chic Fleece T-Shirt - 386 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 24
  },
  {
    "name": "Elegant Cotton Sweater - 387",
    "description": "A elegant sweater made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 115.99,
    "countInStock": 21,
    "sku": "GEN-1777784926962-387",
    "category": "Dresses",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Blue"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Elegant Cotton Sweater - 387 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Elegant Cotton Sweater - 387 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 76
  },
  {
    "name": "Elegant Linen Dress - 388",
    "description": "A elegant dress made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 92.99,
    "countInStock": 49,
    "sku": "GEN-1777784926962-388",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Olive"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Elegant Linen Dress - 388 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Elegant Linen Dress - 388 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 54
  },
  {
    "name": "Essential Denim Skirt - 389",
    "description": "A essential skirt made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 57.99,
    "countInStock": 56,
    "sku": "GEN-1777784926962-389",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Black"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Essential Denim Skirt - 389 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Essential Denim Skirt - 389 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 16
  },
  {
    "name": "Modern Polyester Pants - 390",
    "description": "A modern pants made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 23.99,
    "discountPrice": 13.989999999999998,
    "countInStock": 67,
    "sku": "GEN-1777784926962-390",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Modern Polyester Pants - 390 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Modern Polyester Pants - 390 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 48
  },
  {
    "name": "Essential Wool Pants - 391",
    "description": "A essential pants made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 38.99,
    "countInStock": 96,
    "sku": "GEN-1777784926962-391",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Essential Wool Pants - 391 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Essential Wool Pants - 391 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 24
  },
  {
    "name": "Lightweight Wool Cardigan - 392",
    "description": "A lightweight cardigan made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 46.99,
    "discountPrice": 36.99,
    "countInStock": 65,
    "sku": "GEN-1777784926962-392",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Purple"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Lightweight Wool Cardigan - 392 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Lightweight Wool Cardigan - 392 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 96
  },
  {
    "name": "Casual Cotton Shirt - 393",
    "description": "A casual shirt made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 97.99,
    "countInStock": 53,
    "sku": "GEN-1777784926962-393",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Purple"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Casual Cotton Shirt - 393 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Casual Cotton Shirt - 393 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 85
  },
  {
    "name": "Classic Polyester Blazer - 394",
    "description": "A classic blazer made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 30.99,
    "discountPrice": 21.99,
    "countInStock": 88,
    "sku": "GEN-1777784926962-394",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Green"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Classic Polyester Blazer - 394 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Classic Polyester Blazer - 394 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 69
  },
  {
    "name": "Premium Linen Dress - 395",
    "description": "A premium dress made from high-quality linen. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 43.99,
    "countInStock": 3,
    "sku": "GEN-1777784926962-395",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black"
    ],
    "collections": "Everyday Basics",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Premium Linen Dress - 395 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Premium Linen Dress - 395 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 88
  },
  {
    "name": "Lightweight Wool Cardigan - 396",
    "description": "A lightweight cardigan made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 65.99,
    "countInStock": 79,
    "sku": "GEN-1777784926962-396",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "White"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Lightweight Wool Cardigan - 396 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Lightweight Wool Cardigan - 396 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 33
  },
  {
    "name": "Urban Polyester Hoodie - 397",
    "description": "A urban hoodie made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 48.99,
    "countInStock": 4,
    "sku": "GEN-1777784926962-397",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Teal"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Polyester Hoodie - 397 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Polyester Hoodie - 397 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 98
  },
  {
    "name": "Modern Wool Cardigan - 398",
    "description": "A modern cardigan made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 92.99,
    "countInStock": 71,
    "sku": "GEN-1777784926962-398",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Black"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Modern Wool Cardigan - 398 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Modern Wool Cardigan - 398 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 69
  },
  {
    "name": "Urban Wool Blazer - 399",
    "description": "A urban blazer made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 119.99,
    "discountPrice": 118.99,
    "countInStock": 28,
    "sku": "GEN-1777784926962-399",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "White"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Urban Wool Blazer - 399 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Urban Wool Blazer - 399 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 81
  },
  {
    "name": "Cozy Linen Cardigan - 400",
    "description": "A cozy cardigan made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 80.99,
    "discountPrice": 77.99,
    "countInStock": 25,
    "sku": "GEN-1777784926962-400",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Cozy Linen Cardigan - 400 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Cozy Linen Cardigan - 400 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 20
  },
  {
    "name": "Vintage Linen Cardigan - 401",
    "description": "A vintage cardigan made from high-quality linen. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 103.99,
    "countInStock": 52,
    "sku": "GEN-1777784926962-401",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Olive"
    ],
    "collections": "Everyday Basics",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Vintage Linen Cardigan - 401 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Vintage Linen Cardigan - 401 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 18
  },
  {
    "name": "Durable Polyester Shirt - 402",
    "description": "A durable shirt made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 30.99,
    "discountPrice": 21.99,
    "countInStock": 99,
    "sku": "GEN-1777784926962-402",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "White"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Durable Polyester Shirt - 402 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Durable Polyester Shirt - 402 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 85
  },
  {
    "name": "Elegant Cotton Sweater - 403",
    "description": "A elegant sweater made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 69.99,
    "discountPrice": 66.99,
    "countInStock": 35,
    "sku": "GEN-1777784926962-403",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Maroon"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Elegant Cotton Sweater - 403 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Elegant Cotton Sweater - 403 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 68
  },
  {
    "name": "Urban Spandex Pants - 404",
    "description": "A urban pants made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 73.99,
    "discountPrice": 69.99,
    "countInStock": 40,
    "sku": "GEN-1777784926962-404",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Urban Spandex Pants - 404 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Urban Spandex Pants - 404 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 67
  },
  {
    "name": "Rustic Polyester Hoodie - 405",
    "description": "A rustic hoodie made from high-quality polyester. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 34.99,
    "countInStock": 59,
    "sku": "GEN-1777784926962-405",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Rustic Polyester Hoodie - 405 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Rustic Polyester Hoodie - 405 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 19
  },
  {
    "name": "Casual Polyester Dress - 406",
    "description": "A casual dress made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 32.99,
    "discountPrice": 27.990000000000002,
    "countInStock": 45,
    "sku": "GEN-1777784926962-406",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Brown"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Casual Polyester Dress - 406 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Casual Polyester Dress - 406 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 73
  },
  {
    "name": "Classic Spandex Jeans - 407",
    "description": "A classic jeans made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 53.99,
    "discountPrice": 43.99,
    "countInStock": 29,
    "sku": "GEN-1777784926962-407",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Teal"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Spandex Jeans - 407 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Spandex Jeans - 407 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 87
  },
  {
    "name": "Sleek Silk Skirt - 408",
    "description": "A sleek skirt made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 75.99,
    "countInStock": 41,
    "sku": "GEN-1777784926962-408",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Sleek Silk Skirt - 408 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Sleek Silk Skirt - 408 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 68
  },
  {
    "name": "Sleek Nylon Vest - 409",
    "description": "A sleek vest made from high-quality nylon. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 92.99,
    "countInStock": 57,
    "sku": "GEN-1777784926962-409",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Red"
    ],
    "collections": "Evening Collection",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Sleek Nylon Vest - 409 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Sleek Nylon Vest - 409 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 11
  },
  {
    "name": "Classic Spandex Sweater - 410",
    "description": "A classic sweater made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 33.99,
    "discountPrice": 30.990000000000002,
    "countInStock": 61,
    "sku": "GEN-1777784926962-410",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Brown"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Classic Spandex Sweater - 410 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Classic Spandex Sweater - 410 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 83
  },
  {
    "name": "Classic Spandex Pants - 411",
    "description": "A classic pants made from high-quality spandex. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 55.99,
    "discountPrice": 48.99,
    "countInStock": 89,
    "sku": "GEN-1777784926962-411",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Spandex Pants - 411 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Spandex Pants - 411 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 60
  },
  {
    "name": "Vintage Denim Shorts - 412",
    "description": "A vintage shorts made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 56.99,
    "discountPrice": 48.99,
    "countInStock": 73,
    "sku": "GEN-1777784926962-412",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Gray"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Vintage Denim Shorts - 412 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Vintage Denim Shorts - 412 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 63
  },
  {
    "name": "Casual Wool Jeans - 413",
    "description": "A casual jeans made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 85.99,
    "discountPrice": 84.99,
    "countInStock": 67,
    "sku": "GEN-1777784926962-413",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Purple"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Wool Jeans - 413 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Wool Jeans - 413 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 94
  },
  {
    "name": "Elegant Linen T-Shirt - 414",
    "description": "A elegant t-shirt made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 61.99,
    "countInStock": 35,
    "sku": "GEN-1777784926962-414",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Elegant Linen T-Shirt - 414 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Elegant Linen T-Shirt - 414 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 26
  },
  {
    "name": "Casual Leather Cardigan - 415",
    "description": "A casual cardigan made from high-quality leather. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 119.99,
    "countInStock": 21,
    "sku": "GEN-1777784926962-415",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Navy"
    ],
    "collections": "Everyday Basics",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Leather Cardigan - 415 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Leather Cardigan - 415 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 82
  },
  {
    "name": "Premium Silk Dress - 416",
    "description": "A premium dress made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 46.99,
    "countInStock": 12,
    "sku": "GEN-1777784926962-416",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Gray"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Premium Silk Dress - 416 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Premium Silk Dress - 416 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 24
  },
  {
    "name": "Classic Silk Dress - 417",
    "description": "A classic dress made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 82.99,
    "countInStock": 73,
    "sku": "GEN-1777784926962-417",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Blue"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Classic Silk Dress - 417 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Classic Silk Dress - 417 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 53
  },
  {
    "name": "Chic Silk Jeans - 418",
    "description": "A chic jeans made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 78.99,
    "countInStock": 84,
    "sku": "GEN-1777784926962-418",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Chic Silk Jeans - 418 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Chic Silk Jeans - 418 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 88
  },
  {
    "name": "Chic Linen Dress - 419",
    "description": "A chic dress made from high-quality linen. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 100.99,
    "countInStock": 18,
    "sku": "GEN-1777784926962-419",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Yellow"
    ],
    "collections": "Business Casual",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Chic Linen Dress - 419 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Chic Linen Dress - 419 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 43
  },
  {
    "name": "Sleek Linen Jeans - 420",
    "description": "A sleek jeans made from high-quality linen. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 57.99,
    "countInStock": 28,
    "sku": "GEN-1777784926962-420",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "collections": "Everyday Basics",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sleek Linen Jeans - 420 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sleek Linen Jeans - 420 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 84
  },
  {
    "name": "Chic Cotton Coat - 421",
    "description": "A chic coat made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 74.99,
    "countInStock": 69,
    "sku": "GEN-1777784926962-421",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Blue"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Chic Cotton Coat - 421 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Chic Cotton Coat - 421 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 8
  },
  {
    "name": "Urban Silk Dress - 422",
    "description": "A urban dress made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 56.99,
    "countInStock": 63,
    "sku": "GEN-1777784926962-422",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Black"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Urban Silk Dress - 422 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Urban Silk Dress - 422 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 75
  },
  {
    "name": "Casual Cotton Skirt - 423",
    "description": "A casual skirt made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 29.99,
    "countInStock": 50,
    "sku": "GEN-1777784926962-423",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Maroon"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Casual Cotton Skirt - 423 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Casual Cotton Skirt - 423 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 79
  },
  {
    "name": "Classic Spandex Pants - 424",
    "description": "A classic pants made from high-quality spandex. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 108.99,
    "discountPrice": 106.99,
    "countInStock": 38,
    "sku": "GEN-1777784926962-424",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Spandex Pants - 424 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Spandex Pants - 424 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 21
  },
  {
    "name": "Sporty Linen Sweater - 425",
    "description": "A sporty sweater made from high-quality linen. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 92.99,
    "discountPrice": 86.99,
    "countInStock": 77,
    "sku": "GEN-1777784926962-425",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sporty Linen Sweater - 425 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sporty Linen Sweater - 425 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 84
  },
  {
    "name": "Premium Linen T-Shirt - 426",
    "description": "A premium t-shirt made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 44.99,
    "countInStock": 34,
    "sku": "GEN-1777784926962-426",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "White"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Premium Linen T-Shirt - 426 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Premium Linen T-Shirt - 426 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 82
  },
  {
    "name": "Cozy Spandex Dress - 427",
    "description": "A cozy dress made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 88.99,
    "discountPrice": 85.99,
    "countInStock": 63,
    "sku": "GEN-1777784926962-427",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "White"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Cozy Spandex Dress - 427 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Cozy Spandex Dress - 427 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 50
  },
  {
    "name": "Premium Leather Jacket - 428",
    "description": "A premium jacket made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 109.99,
    "countInStock": 5,
    "sku": "GEN-1777784926962-428",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Beige"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Premium Leather Jacket - 428 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Premium Leather Jacket - 428 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 36
  },
  {
    "name": "Sporty Denim Jeans - 429",
    "description": "A sporty jeans made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 61.99,
    "countInStock": 89,
    "sku": "GEN-1777784926962-429",
    "category": "Dresses",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Red"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sporty Denim Jeans - 429 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sporty Denim Jeans - 429 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 91
  },
  {
    "name": "Vintage Polyester Shorts - 430",
    "description": "A vintage shorts made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 82.99,
    "countInStock": 80,
    "sku": "GEN-1777784926962-430",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Maroon"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Vintage Polyester Shorts - 430 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Vintage Polyester Shorts - 430 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 54
  },
  {
    "name": "Urban Fleece Shirt - 431",
    "description": "A urban shirt made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 74.99,
    "countInStock": 23,
    "sku": "GEN-1777784926962-431",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Urban Fleece Shirt - 431 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Urban Fleece Shirt - 431 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 71
  },
  {
    "name": "Lightweight Polyester Skirt - 432",
    "description": "A lightweight skirt made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 34.99,
    "discountPrice": 28.990000000000002,
    "countInStock": 1,
    "sku": "GEN-1777784926962-432",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Lightweight Polyester Skirt - 432 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Lightweight Polyester Skirt - 432 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 74
  },
  {
    "name": "Essential Nylon T-Shirt - 433",
    "description": "A essential t-shirt made from high-quality nylon. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 37.99,
    "discountPrice": 35.99,
    "countInStock": 18,
    "sku": "GEN-1777784926962-433",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Essential Nylon T-Shirt - 433 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Essential Nylon T-Shirt - 433 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 44
  },
  {
    "name": "Urban Cotton Pants - 434",
    "description": "A urban pants made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 100.99,
    "countInStock": 1,
    "sku": "GEN-1777784926962-434",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "White"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Urban Cotton Pants - 434 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Urban Cotton Pants - 434 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 56
  },
  {
    "name": "Classic Leather Cardigan - 435",
    "description": "A classic cardigan made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 118.99,
    "discountPrice": 111.99,
    "countInStock": 54,
    "sku": "GEN-1777784926962-435",
    "category": "Dresses",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Pink"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Classic Leather Cardigan - 435 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Classic Leather Cardigan - 435 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 50
  },
  {
    "name": "Modern Silk Shorts - 436",
    "description": "A modern shorts made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 74.99,
    "discountPrice": 68.99,
    "countInStock": 99,
    "sku": "GEN-1777784926962-436",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Green"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Modern Silk Shorts - 436 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Modern Silk Shorts - 436 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 39
  },
  {
    "name": "Casual Polyester Jacket - 437",
    "description": "A casual jacket made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 95.99,
    "countInStock": 38,
    "sku": "GEN-1777784926962-437",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Casual Polyester Jacket - 437 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Casual Polyester Jacket - 437 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 10
  },
  {
    "name": "Cozy Linen T-Shirt - 438",
    "description": "A cozy t-shirt made from high-quality linen. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 24.99,
    "countInStock": 82,
    "sku": "GEN-1777784926962-438",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Green"
    ],
    "collections": "Evening Collection",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Cozy Linen T-Shirt - 438 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Cozy Linen T-Shirt - 438 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 32
  },
  {
    "name": "Urban Fleece Sweater - 439",
    "description": "A urban sweater made from high-quality fleece. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 112.99,
    "discountPrice": 107.99,
    "countInStock": 8,
    "sku": "GEN-1777784926962-439",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Black"
    ],
    "collections": "Evening Collection",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Urban Fleece Sweater - 439 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Urban Fleece Sweater - 439 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 97
  },
  {
    "name": "Classic Cotton Jacket - 440",
    "description": "A classic jacket made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 35.99,
    "countInStock": 35,
    "sku": "GEN-1777784926962-440",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Beige"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Classic Cotton Jacket - 440 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Classic Cotton Jacket - 440 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 28
  },
  {
    "name": "Cozy Linen Jacket - 441",
    "description": "A cozy jacket made from high-quality linen. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 22.99,
    "discountPrice": 12.989999999999998,
    "countInStock": 0,
    "sku": "GEN-1777784926962-441",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Pink"
    ],
    "collections": "Evening Collection",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Cozy Linen Jacket - 441 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Cozy Linen Jacket - 441 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 14
  },
  {
    "name": "Cozy Polyester Dress - 442",
    "description": "A cozy dress made from high-quality polyester. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 70.99,
    "countInStock": 87,
    "sku": "GEN-1777784926962-442",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Brown"
    ],
    "collections": "Winter Wear",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Cozy Polyester Dress - 442 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Cozy Polyester Dress - 442 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 13
  },
  {
    "name": "Lightweight Fleece Cardigan - 443",
    "description": "A lightweight cardigan made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 47.99,
    "discountPrice": 40.99,
    "countInStock": 80,
    "sku": "GEN-1777784926962-443",
    "category": "Dresses",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Olive"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Lightweight Fleece Cardigan - 443 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Lightweight Fleece Cardigan - 443 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 77
  },
  {
    "name": "Sleek Denim Dress - 444",
    "description": "A sleek dress made from high-quality denim. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 108.99,
    "countInStock": 59,
    "sku": "GEN-1777784926962-444",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Purple"
    ],
    "collections": "Everyday Basics",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Sleek Denim Dress - 444 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Sleek Denim Dress - 444 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 31
  },
  {
    "name": "Chic Linen T-Shirt - 445",
    "description": "A chic t-shirt made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 118.99,
    "countInStock": 72,
    "sku": "GEN-1777784926962-445",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Gray"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Chic Linen T-Shirt - 445 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Chic Linen T-Shirt - 445 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 83
  },
  {
    "name": "Durable Fleece Shorts - 446",
    "description": "A durable shorts made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 71.99,
    "countInStock": 67,
    "sku": "GEN-1777784926962-446",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Durable Fleece Shorts - 446 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Durable Fleece Shorts - 446 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 62
  },
  {
    "name": "Durable Nylon Pants - 447",
    "description": "A durable pants made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 46.99,
    "discountPrice": 42.99,
    "countInStock": 23,
    "sku": "GEN-1777784926962-447",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Teal"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Nylon Pants - 447 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Nylon Pants - 447 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 1
  },
  {
    "name": "Essential Silk Pants - 448",
    "description": "A essential pants made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 25.99,
    "discountPrice": 17.99,
    "countInStock": 45,
    "sku": "GEN-1777784926962-448",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Brown"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Essential Silk Pants - 448 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Essential Silk Pants - 448 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 53
  },
  {
    "name": "Vintage Linen Shirt - 449",
    "description": "A vintage shirt made from high-quality linen. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 90.99,
    "countInStock": 63,
    "sku": "GEN-1777784926962-449",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Vintage Linen Shirt - 449 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Vintage Linen Shirt - 449 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 60
  },
  {
    "name": "Cozy Fleece Shirt - 450",
    "description": "A cozy shirt made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 65.99,
    "countInStock": 45,
    "sku": "GEN-1777784926962-450",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "White"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Cozy Fleece Shirt - 450 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Cozy Fleece Shirt - 450 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 95
  },
  {
    "name": "Modern Leather Shirt - 451",
    "description": "A modern shirt made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 108.99,
    "discountPrice": 98.99,
    "countInStock": 54,
    "sku": "GEN-1777784926962-451",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Gray"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Modern Leather Shirt - 451 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Modern Leather Shirt - 451 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 0
  },
  {
    "name": "Elegant Linen Vest - 452",
    "description": "A elegant vest made from high-quality linen. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 38.99,
    "discountPrice": 31.990000000000002,
    "countInStock": 30,
    "sku": "GEN-1777784926962-452",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Brown"
    ],
    "collections": "Everyday Basics",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Linen Vest - 452 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Linen Vest - 452 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 4
  },
  {
    "name": "Classic Silk Cardigan - 453",
    "description": "A classic cardigan made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 61.99,
    "countInStock": 46,
    "sku": "GEN-1777784926962-453",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Black"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Classic Silk Cardigan - 453 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Classic Silk Cardigan - 453 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 69
  },
  {
    "name": "Elegant Fleece Hoodie - 454",
    "description": "A elegant hoodie made from high-quality fleece. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 44.99,
    "discountPrice": 36.99,
    "countInStock": 80,
    "sku": "GEN-1777784926962-454",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Blue"
    ],
    "collections": "Evening Collection",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Elegant Fleece Hoodie - 454 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Elegant Fleece Hoodie - 454 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 52
  },
  {
    "name": "Cozy Denim T-Shirt - 455",
    "description": "A cozy t-shirt made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 55.99,
    "discountPrice": 50.99,
    "countInStock": 11,
    "sku": "GEN-1777784926962-455",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Yellow"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Cozy Denim T-Shirt - 455 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Cozy Denim T-Shirt - 455 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 12
  },
  {
    "name": "Classic Fleece Jacket - 456",
    "description": "A classic jacket made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 45.99,
    "countInStock": 75,
    "sku": "GEN-1777784926962-456",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Classic Fleece Jacket - 456 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Classic Fleece Jacket - 456 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 26
  },
  {
    "name": "Vintage Fleece Skirt - 457",
    "description": "A vintage skirt made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 92.99,
    "discountPrice": 86.99,
    "countInStock": 82,
    "sku": "GEN-1777784926962-457",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Vintage Fleece Skirt - 457 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Vintage Fleece Skirt - 457 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 5
  },
  {
    "name": "Rustic Linen Dress - 458",
    "description": "A rustic dress made from high-quality linen. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 88.99,
    "discountPrice": 85.99,
    "countInStock": 23,
    "sku": "GEN-1777784926962-458",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Teal"
    ],
    "collections": "Everyday Basics",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Rustic Linen Dress - 458 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Rustic Linen Dress - 458 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 72
  },
  {
    "name": "Durable Spandex Vest - 459",
    "description": "A durable vest made from high-quality spandex. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 105.99,
    "discountPrice": 95.99,
    "countInStock": 20,
    "sku": "GEN-1777784926962-459",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Green"
    ],
    "collections": "Evening Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Durable Spandex Vest - 459 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Durable Spandex Vest - 459 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 53
  },
  {
    "name": "Rustic Spandex Jeans - 460",
    "description": "A rustic jeans made from high-quality spandex. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 36.99,
    "countInStock": 29,
    "sku": "GEN-1777784926962-460",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Gray"
    ],
    "collections": "Business Casual",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Rustic Spandex Jeans - 460 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Rustic Spandex Jeans - 460 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 18
  },
  {
    "name": "Urban Denim Shirt - 461",
    "description": "A urban shirt made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 68.99,
    "countInStock": 89,
    "sku": "GEN-1777784926962-461",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Purple"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Urban Denim Shirt - 461 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Urban Denim Shirt - 461 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 95
  },
  {
    "name": "Classic Denim Shirt - 462",
    "description": "A classic shirt made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 30.99,
    "discountPrice": 20.99,
    "countInStock": 75,
    "sku": "GEN-1777784926962-462",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Navy"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Classic Denim Shirt - 462 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Classic Denim Shirt - 462 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 97
  },
  {
    "name": "Modern Nylon Cardigan - 463",
    "description": "A modern cardigan made from high-quality nylon. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 104.99,
    "discountPrice": 97.99,
    "countInStock": 64,
    "sku": "GEN-1777784926962-463",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Red"
    ],
    "collections": "Everyday Basics",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Modern Nylon Cardigan - 463 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Modern Nylon Cardigan - 463 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 89
  },
  {
    "name": "Casual Spandex Jeans - 464",
    "description": "A casual jeans made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 80.99,
    "countInStock": 46,
    "sku": "GEN-1777784926962-464",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Brown"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Spandex Jeans - 464 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Spandex Jeans - 464 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 49
  },
  {
    "name": "Casual Wool Jacket - 465",
    "description": "A casual jacket made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 66.99,
    "discountPrice": 64.99,
    "countInStock": 63,
    "sku": "GEN-1777784926962-465",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Yellow"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Casual Wool Jacket - 465 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Casual Wool Jacket - 465 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 90
  },
  {
    "name": "Modern Wool T-Shirt - 466",
    "description": "A modern t-shirt made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 23.99,
    "discountPrice": 16.99,
    "countInStock": 18,
    "sku": "GEN-1777784926962-466",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Teal"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Modern Wool T-Shirt - 466 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Modern Wool T-Shirt - 466 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 53
  },
  {
    "name": "Chic Polyester Shirt - 467",
    "description": "A chic shirt made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 119.99,
    "discountPrice": 114.99,
    "countInStock": 16,
    "sku": "GEN-1777784926962-467",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Chic Polyester Shirt - 467 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Chic Polyester Shirt - 467 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 50
  },
  {
    "name": "Elegant Cotton Sweater - 468",
    "description": "A elegant sweater made from high-quality cotton. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 80.99,
    "discountPrice": 73.99,
    "countInStock": 43,
    "sku": "GEN-1777784926962-468",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy"
    ],
    "collections": "Evening Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Elegant Cotton Sweater - 468 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Elegant Cotton Sweater - 468 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 53
  },
  {
    "name": "Modern Wool Coat - 469",
    "description": "A modern coat made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 69.99,
    "discountPrice": 65.99,
    "countInStock": 45,
    "sku": "GEN-1777784926962-469",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Teal"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Modern Wool Coat - 469 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Modern Wool Coat - 469 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 51
  },
  {
    "name": "Durable Nylon Blazer - 470",
    "description": "A durable blazer made from high-quality nylon. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 112.99,
    "discountPrice": 107.99,
    "countInStock": 99,
    "sku": "GEN-1777784926962-470",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Teal"
    ],
    "collections": "Winter Wear",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Durable Nylon Blazer - 470 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Durable Nylon Blazer - 470 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 90
  },
  {
    "name": "Cozy Wool Jeans - 471",
    "description": "A cozy jeans made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 103.99,
    "countInStock": 32,
    "sku": "GEN-1777784926962-471",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Purple"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Cozy Wool Jeans - 471 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Cozy Wool Jeans - 471 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 90
  },
  {
    "name": "Vintage Leather Blazer - 472",
    "description": "A vintage blazer made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 69.99,
    "countInStock": 47,
    "sku": "GEN-1777784926962-472",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Navy"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Vintage Leather Blazer - 472 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Vintage Leather Blazer - 472 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 17
  },
  {
    "name": "Modern Spandex Jeans - 473",
    "description": "A modern jeans made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 61.99,
    "discountPrice": 56.99,
    "countInStock": 55,
    "sku": "GEN-1777784926962-473",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Navy"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Modern Spandex Jeans - 473 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Modern Spandex Jeans - 473 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 6
  },
  {
    "name": "Durable Fleece Hoodie - 474",
    "description": "A durable hoodie made from high-quality fleece. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 89.99,
    "countInStock": 63,
    "sku": "GEN-1777784926962-474",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "White"
    ],
    "collections": "Business Casual",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Durable Fleece Hoodie - 474 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Durable Fleece Hoodie - 474 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 60
  },
  {
    "name": "Lightweight Fleece Shirt - 475",
    "description": "A lightweight shirt made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 23.99,
    "discountPrice": 16.99,
    "countInStock": 78,
    "sku": "GEN-1777784926962-475",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Lightweight Fleece Shirt - 475 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Lightweight Fleece Shirt - 475 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 60
  },
  {
    "name": "Rustic Linen Pants - 476",
    "description": "A rustic pants made from high-quality linen. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 52.99,
    "discountPrice": 46.99,
    "countInStock": 81,
    "sku": "GEN-1777784926962-476",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Rustic Linen Pants - 476 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Rustic Linen Pants - 476 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 35
  },
  {
    "name": "Rustic Spandex Vest - 477",
    "description": "A rustic vest made from high-quality spandex. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 30.99,
    "countInStock": 99,
    "sku": "GEN-1777784926962-477",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Maroon"
    ],
    "collections": "Evening Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Rustic Spandex Vest - 477 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Rustic Spandex Vest - 477 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 80
  },
  {
    "name": "Premium Wool Blazer - 478",
    "description": "A premium blazer made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 64.99,
    "discountPrice": 55.989999999999995,
    "countInStock": 44,
    "sku": "GEN-1777784926962-478",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Black"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Premium Wool Blazer - 478 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Premium Wool Blazer - 478 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 44
  },
  {
    "name": "Modern Polyester Cardigan - 479",
    "description": "A modern cardigan made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 117.99,
    "discountPrice": 107.99,
    "countInStock": 28,
    "sku": "GEN-1777784926963-479",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Modern Polyester Cardigan - 479 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Modern Polyester Cardigan - 479 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 39
  },
  {
    "name": "Sporty Wool Jacket - 480",
    "description": "A sporty jacket made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 25.99,
    "discountPrice": 17.99,
    "countInStock": 89,
    "sku": "GEN-1777784926963-480",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Sporty Wool Jacket - 480 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Sporty Wool Jacket - 480 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 59
  },
  {
    "name": "Casual Wool Dress - 481",
    "description": "A casual dress made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 69.99,
    "countInStock": 57,
    "sku": "GEN-1777784926963-481",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Casual Wool Dress - 481 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Casual Wool Dress - 481 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 79
  },
  {
    "name": "Elegant Silk Vest - 482",
    "description": "A elegant vest made from high-quality silk. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 103.99,
    "discountPrice": 96.99,
    "countInStock": 83,
    "sku": "GEN-1777784926963-482",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Navy"
    ],
    "collections": "Athleisure",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Silk Vest - 482 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Silk Vest - 482 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 33
  },
  {
    "name": "Elegant Fleece Blazer - 483",
    "description": "A elegant blazer made from high-quality fleece. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 55.99,
    "countInStock": 56,
    "sku": "GEN-1777784926963-483",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Red"
    ],
    "collections": "Summer Collection",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Elegant Fleece Blazer - 483 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Elegant Fleece Blazer - 483 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 40
  },
  {
    "name": "Cozy Wool Shirt - 484",
    "description": "A cozy shirt made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 46.99,
    "countInStock": 17,
    "sku": "GEN-1777784926963-484",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "White"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Cozy Wool Shirt - 484 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Cozy Wool Shirt - 484 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 37
  },
  {
    "name": "Cozy Denim Dress - 485",
    "description": "A cozy dress made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 105.99,
    "countInStock": 4,
    "sku": "GEN-1777784926963-485",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "White"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Cozy Denim Dress - 485 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Cozy Denim Dress - 485 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 11
  },
  {
    "name": "Classic Silk Shorts - 486",
    "description": "A classic shorts made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 50.99,
    "countInStock": 12,
    "sku": "GEN-1777784926963-486",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Classic Silk Shorts - 486 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Classic Silk Shorts - 486 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 22
  },
  {
    "name": "Cozy Polyester Skirt - 487",
    "description": "A cozy skirt made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 49.99,
    "countInStock": 71,
    "sku": "GEN-1777784926963-487",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Cozy Polyester Skirt - 487 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Cozy Polyester Skirt - 487 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 49
  },
  {
    "name": "Sleek Spandex Skirt - 488",
    "description": "A sleek skirt made from high-quality spandex. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 82.99,
    "countInStock": 59,
    "sku": "GEN-1777784926963-488",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Pink"
    ],
    "collections": "Evening Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Sleek Spandex Skirt - 488 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Sleek Spandex Skirt - 488 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 41
  },
  {
    "name": "Classic Spandex Jeans - 489",
    "description": "A classic jeans made from high-quality spandex. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 31.99,
    "countInStock": 12,
    "sku": "GEN-1777784926963-489",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Blue"
    ],
    "collections": "Evening Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Spandex Jeans - 489 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Spandex Jeans - 489 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 5
  },
  {
    "name": "Sleek Polyester Vest - 490",
    "description": "A sleek vest made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 75.99,
    "countInStock": 32,
    "sku": "GEN-1777784926963-490",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Gray"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Sleek Polyester Vest - 490 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Sleek Polyester Vest - 490 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 92
  },
  {
    "name": "Chic Wool Sweater - 491",
    "description": "A chic sweater made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 109.99,
    "countInStock": 8,
    "sku": "GEN-1777784926963-491",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Green"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Chic Wool Sweater - 491 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Chic Wool Sweater - 491 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 12
  },
  {
    "name": "Durable Nylon Cardigan - 492",
    "description": "A durable cardigan made from high-quality nylon. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 95.99,
    "discountPrice": 92.99,
    "countInStock": 33,
    "sku": "GEN-1777784926963-492",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive"
    ],
    "collections": "Evening Collection",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Nylon Cardigan - 492 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Nylon Cardigan - 492 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 30
  },
  {
    "name": "Classic Fleece Jeans - 493",
    "description": "A classic jeans made from high-quality fleece. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 72.99,
    "countInStock": 51,
    "sku": "GEN-1777784926963-493",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Red"
    ],
    "collections": "Summer Collection",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Fleece Jeans - 493 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Fleece Jeans - 493 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 8
  },
  {
    "name": "Vintage Leather Blazer - 494",
    "description": "A vintage blazer made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 24.99,
    "countInStock": 55,
    "sku": "GEN-1777784926963-494",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Green"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Vintage Leather Blazer - 494 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Vintage Leather Blazer - 494 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 16
  },
  {
    "name": "Elegant Cotton Jeans - 495",
    "description": "A elegant jeans made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 70.99,
    "discountPrice": 62.989999999999995,
    "countInStock": 94,
    "sku": "GEN-1777784926963-495",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Elegant Cotton Jeans - 495 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Elegant Cotton Jeans - 495 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 19
  },
  {
    "name": "Elegant Silk Skirt - 496",
    "description": "A elegant skirt made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 108.99,
    "discountPrice": 105.99,
    "countInStock": 52,
    "sku": "GEN-1777784926963-496",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Olive"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Silk Skirt - 496 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Silk Skirt - 496 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 53
  },
  {
    "name": "Sporty Polyester Vest - 497",
    "description": "A sporty vest made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 109.99,
    "countInStock": 4,
    "sku": "GEN-1777784926963-497",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Sporty Polyester Vest - 497 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Sporty Polyester Vest - 497 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 19
  },
  {
    "name": "Sporty Linen Jeans - 498",
    "description": "A sporty jeans made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 102.99,
    "countInStock": 42,
    "sku": "GEN-1777784926963-498",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Green"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sporty Linen Jeans - 498 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sporty Linen Jeans - 498 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 60
  },
  {
    "name": "Modern Denim Skirt - 499",
    "description": "A modern skirt made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 76.99,
    "countInStock": 90,
    "sku": "GEN-1777784926963-499",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Green"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Modern Denim Skirt - 499 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Modern Denim Skirt - 499 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 82
  },
  {
    "name": "Vintage Nylon Pants - 500",
    "description": "A vintage pants made from high-quality nylon. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 25.99,
    "countInStock": 48,
    "sku": "GEN-1777784926963-500",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Vintage Nylon Pants - 500 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Vintage Nylon Pants - 500 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 64
  },
  {
    "name": "Sporty Leather Dress - 501",
    "description": "A sporty dress made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 21.99,
    "countInStock": 6,
    "sku": "GEN-1777784926963-501",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Maroon"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Sporty Leather Dress - 501 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Sporty Leather Dress - 501 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 68
  },
  {
    "name": "Lightweight Polyester Jeans - 502",
    "description": "A lightweight jeans made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 22.99,
    "countInStock": 64,
    "sku": "GEN-1777784926963-502",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Purple"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Lightweight Polyester Jeans - 502 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Lightweight Polyester Jeans - 502 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 77
  },
  {
    "name": "Cozy Silk Dress - 503",
    "description": "A cozy dress made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 29.99,
    "discountPrice": 19.99,
    "countInStock": 58,
    "sku": "GEN-1777784926963-503",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Gray"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Cozy Silk Dress - 503 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Cozy Silk Dress - 503 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 14
  },
  {
    "name": "Classic Cotton Shorts - 504",
    "description": "A classic shorts made from high-quality cotton. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 80.99,
    "discountPrice": 75.99,
    "countInStock": 5,
    "sku": "GEN-1777784926963-504",
    "category": "Dresses",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Beige"
    ],
    "collections": "Evening Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Classic Cotton Shorts - 504 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Classic Cotton Shorts - 504 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 92
  },
  {
    "name": "Chic Cotton Dress - 505",
    "description": "A chic dress made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 88.99,
    "discountPrice": 83.99,
    "countInStock": 29,
    "sku": "GEN-1777784926963-505",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Blue"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Chic Cotton Dress - 505 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Chic Cotton Dress - 505 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 35
  },
  {
    "name": "Elegant Polyester Cardigan - 506",
    "description": "A elegant cardigan made from high-quality polyester. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 30.99,
    "countInStock": 76,
    "sku": "GEN-1777784926963-506",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Teal"
    ],
    "collections": "Winter Wear",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Elegant Polyester Cardigan - 506 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Elegant Polyester Cardigan - 506 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 44
  },
  {
    "name": "Sporty Nylon Jeans - 507",
    "description": "A sporty jeans made from high-quality nylon. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 73.99,
    "countInStock": 52,
    "sku": "GEN-1777784926963-507",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Pink"
    ],
    "collections": "Winter Wear",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sporty Nylon Jeans - 507 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sporty Nylon Jeans - 507 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 62
  },
  {
    "name": "Lightweight Fleece Sweater - 508",
    "description": "A lightweight sweater made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 52.99,
    "discountPrice": 47.99,
    "countInStock": 48,
    "sku": "GEN-1777784926963-508",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Teal"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Lightweight Fleece Sweater - 508 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Lightweight Fleece Sweater - 508 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 78
  },
  {
    "name": "Durable Denim Shirt - 509",
    "description": "A durable shirt made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 53.99,
    "discountPrice": 52.99,
    "countInStock": 97,
    "sku": "GEN-1777784926963-509",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Olive"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Durable Denim Shirt - 509 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Durable Denim Shirt - 509 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 20
  },
  {
    "name": "Classic Wool Jeans - 510",
    "description": "A classic jeans made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 48.99,
    "countInStock": 72,
    "sku": "GEN-1777784926963-510",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Purple"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Wool Jeans - 510 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Wool Jeans - 510 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 31
  },
  {
    "name": "Vintage Denim Shirt - 511",
    "description": "A vintage shirt made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 44.99,
    "countInStock": 21,
    "sku": "GEN-1777784926963-511",
    "category": "Dresses",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Yellow"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Vintage Denim Shirt - 511 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Vintage Denim Shirt - 511 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 44
  },
  {
    "name": "Chic Wool Cardigan - 512",
    "description": "A chic cardigan made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 83.99,
    "countInStock": 14,
    "sku": "GEN-1777784926963-512",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Teal"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Chic Wool Cardigan - 512 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Chic Wool Cardigan - 512 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 65
  },
  {
    "name": "Classic Denim Skirt - 513",
    "description": "A classic skirt made from high-quality denim. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 35.99,
    "countInStock": 19,
    "sku": "GEN-1777784926963-513",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Purple"
    ],
    "collections": "Everyday Basics",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Classic Denim Skirt - 513 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Classic Denim Skirt - 513 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 55
  },
  {
    "name": "Rustic Leather Shirt - 514",
    "description": "A rustic shirt made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 88.99,
    "discountPrice": 84.99,
    "countInStock": 18,
    "sku": "GEN-1777784926963-514",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Olive"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Rustic Leather Shirt - 514 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Rustic Leather Shirt - 514 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 7
  },
  {
    "name": "Essential Silk Jacket - 515",
    "description": "A essential jacket made from high-quality silk. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 94.99,
    "countInStock": 66,
    "sku": "GEN-1777784926963-515",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Essential Silk Jacket - 515 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Essential Silk Jacket - 515 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 35
  },
  {
    "name": "Sleek Cotton Jeans - 516",
    "description": "A sleek jeans made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 30.99,
    "countInStock": 14,
    "sku": "GEN-1777784926963-516",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Black"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sleek Cotton Jeans - 516 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sleek Cotton Jeans - 516 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 14
  },
  {
    "name": "Premium Leather Skirt - 517",
    "description": "A premium skirt made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 50.99,
    "countInStock": 58,
    "sku": "GEN-1777784926963-517",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Purple"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Premium Leather Skirt - 517 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Premium Leather Skirt - 517 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 24
  },
  {
    "name": "Sporty Linen Blazer - 518",
    "description": "A sporty blazer made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 26.99,
    "countInStock": 97,
    "sku": "GEN-1777784926963-518",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Purple"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sporty Linen Blazer - 518 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sporty Linen Blazer - 518 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 47
  },
  {
    "name": "Sporty Cotton Blazer - 519",
    "description": "A sporty blazer made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 104.99,
    "discountPrice": 95.99,
    "countInStock": 8,
    "sku": "GEN-1777784926963-519",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sporty Cotton Blazer - 519 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sporty Cotton Blazer - 519 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 0
  },
  {
    "name": "Lightweight Wool T-Shirt - 520",
    "description": "A lightweight t-shirt made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 109.99,
    "discountPrice": 108.99,
    "countInStock": 37,
    "sku": "GEN-1777784926963-520",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Lightweight Wool T-Shirt - 520 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Lightweight Wool T-Shirt - 520 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 23
  },
  {
    "name": "Chic Silk Hoodie - 521",
    "description": "A chic hoodie made from high-quality silk. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 77.99,
    "discountPrice": 74.99,
    "countInStock": 28,
    "sku": "GEN-1777784926963-521",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Purple"
    ],
    "collections": "Athleisure",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Chic Silk Hoodie - 521 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Chic Silk Hoodie - 521 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 98
  },
  {
    "name": "Urban Silk Skirt - 522",
    "description": "A urban skirt made from high-quality silk. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 35.99,
    "countInStock": 40,
    "sku": "GEN-1777784926963-522",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Maroon"
    ],
    "collections": "Summer Collection",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Silk Skirt - 522 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Silk Skirt - 522 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 10
  },
  {
    "name": "Cozy Nylon Shorts - 523",
    "description": "A cozy shorts made from high-quality nylon. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 88.99,
    "discountPrice": 84.99,
    "countInStock": 79,
    "sku": "GEN-1777784926963-523",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Gray"
    ],
    "collections": "Everyday Basics",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Cozy Nylon Shorts - 523 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Cozy Nylon Shorts - 523 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 76
  },
  {
    "name": "Sporty Wool Coat - 524",
    "description": "A sporty coat made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 35.99,
    "countInStock": 32,
    "sku": "GEN-1777784926963-524",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Sporty Wool Coat - 524 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Sporty Wool Coat - 524 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 8
  },
  {
    "name": "Lightweight Cotton Hoodie - 525",
    "description": "A lightweight hoodie made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 105.99,
    "discountPrice": 99.99,
    "countInStock": 10,
    "sku": "GEN-1777784926963-525",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Lightweight Cotton Hoodie - 525 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Lightweight Cotton Hoodie - 525 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 98
  },
  {
    "name": "Chic Linen Shorts - 526",
    "description": "A chic shorts made from high-quality linen. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 56.99,
    "discountPrice": 47.99,
    "countInStock": 72,
    "sku": "GEN-1777784926963-526",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Green"
    ],
    "collections": "Business Casual",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Chic Linen Shorts - 526 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Chic Linen Shorts - 526 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 18
  },
  {
    "name": "Sleek Linen Blazer - 527",
    "description": "A sleek blazer made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 72.99,
    "countInStock": 9,
    "sku": "GEN-1777784926963-527",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Yellow"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sleek Linen Blazer - 527 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sleek Linen Blazer - 527 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 7
  },
  {
    "name": "Durable Fleece Jeans - 528",
    "description": "A durable jeans made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 54.99,
    "countInStock": 69,
    "sku": "GEN-1777784926963-528",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Durable Fleece Jeans - 528 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Durable Fleece Jeans - 528 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 8
  },
  {
    "name": "Sleek Linen Pants - 529",
    "description": "A sleek pants made from high-quality linen. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 88.99,
    "countInStock": 1,
    "sku": "GEN-1777784926963-529",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Teal"
    ],
    "collections": "Everyday Basics",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Sleek Linen Pants - 529 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Sleek Linen Pants - 529 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 4
  },
  {
    "name": "Lightweight Leather Vest - 530",
    "description": "A lightweight vest made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 24.99,
    "discountPrice": 20.99,
    "countInStock": 81,
    "sku": "GEN-1777784926963-530",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Yellow"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Lightweight Leather Vest - 530 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Lightweight Leather Vest - 530 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 91
  },
  {
    "name": "Lightweight Silk Dress - 531",
    "description": "A lightweight dress made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 70.99,
    "discountPrice": 69.99,
    "countInStock": 57,
    "sku": "GEN-1777784926963-531",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "White"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Lightweight Silk Dress - 531 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Lightweight Silk Dress - 531 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 76
  },
  {
    "name": "Cozy Silk Pants - 532",
    "description": "A cozy pants made from high-quality silk. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 22.99,
    "countInStock": 66,
    "sku": "GEN-1777784926963-532",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Yellow"
    ],
    "collections": "Athleisure",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Silk Pants - 532 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Silk Pants - 532 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 90
  },
  {
    "name": "Casual Fleece Coat - 533",
    "description": "A casual coat made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 105.99,
    "countInStock": 39,
    "sku": "GEN-1777784926963-533",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Black"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Casual Fleece Coat - 533 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Casual Fleece Coat - 533 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 64
  },
  {
    "name": "Urban Linen Sweater - 534",
    "description": "A urban sweater made from high-quality linen. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 88.99,
    "discountPrice": 86.99,
    "countInStock": 15,
    "sku": "GEN-1777784926963-534",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Gray"
    ],
    "collections": "Business Casual",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Urban Linen Sweater - 534 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Urban Linen Sweater - 534 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 79
  },
  {
    "name": "Cozy Wool Pants - 535",
    "description": "A cozy pants made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 25.99,
    "discountPrice": 19.99,
    "countInStock": 7,
    "sku": "GEN-1777784926963-535",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Wool Pants - 535 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Wool Pants - 535 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 25
  },
  {
    "name": "Chic Cotton Blazer - 536",
    "description": "A chic blazer made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 88.99,
    "countInStock": 68,
    "sku": "GEN-1777784926963-536",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Maroon"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Chic Cotton Blazer - 536 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Chic Cotton Blazer - 536 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 19
  },
  {
    "name": "Elegant Wool Skirt - 537",
    "description": "A elegant skirt made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 115.99,
    "discountPrice": 106.99,
    "countInStock": 97,
    "sku": "GEN-1777784926963-537",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Brown"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Wool Skirt - 537 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Wool Skirt - 537 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 78
  },
  {
    "name": "Chic Polyester Vest - 538",
    "description": "A chic vest made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 63.99,
    "countInStock": 14,
    "sku": "GEN-1777784926963-538",
    "category": "Dresses",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Chic Polyester Vest - 538 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Chic Polyester Vest - 538 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 52
  },
  {
    "name": "Modern Cotton Shorts - 539",
    "description": "A modern shorts made from high-quality cotton. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 65.99,
    "countInStock": 0,
    "sku": "GEN-1777784926963-539",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Teal"
    ],
    "collections": "Athleisure",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Modern Cotton Shorts - 539 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Modern Cotton Shorts - 539 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 82
  },
  {
    "name": "Durable Polyester Pants - 540",
    "description": "A durable pants made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 75.99,
    "discountPrice": 66.99,
    "countInStock": 79,
    "sku": "GEN-1777784926963-540",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Red"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Polyester Pants - 540 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Polyester Pants - 540 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 20
  },
  {
    "name": "Premium Spandex T-Shirt - 541",
    "description": "A premium t-shirt made from high-quality spandex. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 76.99,
    "discountPrice": 75.99,
    "countInStock": 2,
    "sku": "GEN-1777784926963-541",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Beige"
    ],
    "collections": "Athleisure",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Premium Spandex T-Shirt - 541 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Premium Spandex T-Shirt - 541 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 28
  },
  {
    "name": "Modern Wool Vest - 542",
    "description": "A modern vest made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 40.99,
    "countInStock": 54,
    "sku": "GEN-1777784926963-542",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Teal"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Modern Wool Vest - 542 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Modern Wool Vest - 542 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 96
  },
  {
    "name": "Cozy Linen Jeans - 543",
    "description": "A cozy jeans made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 106.99,
    "countInStock": 59,
    "sku": "GEN-1777784926963-543",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Navy"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Cozy Linen Jeans - 543 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Cozy Linen Jeans - 543 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 21
  },
  {
    "name": "Sporty Silk Dress - 544",
    "description": "A sporty dress made from high-quality silk. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 70.99,
    "countInStock": 62,
    "sku": "GEN-1777784926963-544",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "White"
    ],
    "collections": "Athleisure",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Sporty Silk Dress - 544 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Sporty Silk Dress - 544 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 69
  },
  {
    "name": "Casual Nylon Pants - 545",
    "description": "A casual pants made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 46.99,
    "discountPrice": 42.99,
    "countInStock": 25,
    "sku": "GEN-1777784926963-545",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Olive"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Casual Nylon Pants - 545 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Casual Nylon Pants - 545 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 5
  },
  {
    "name": "Urban Wool Jacket - 546",
    "description": "A urban jacket made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 110.99,
    "discountPrice": 101.99,
    "countInStock": 94,
    "sku": "GEN-1777784926963-546",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Urban Wool Jacket - 546 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Urban Wool Jacket - 546 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 52
  },
  {
    "name": "Chic Fleece Cardigan - 547",
    "description": "A chic cardigan made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 29.99,
    "countInStock": 2,
    "sku": "GEN-1777784926963-547",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Teal"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Chic Fleece Cardigan - 547 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Chic Fleece Cardigan - 547 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 63
  },
  {
    "name": "Urban Fleece Jacket - 548",
    "description": "A urban jacket made from high-quality fleece. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 74.99,
    "discountPrice": 64.99,
    "countInStock": 10,
    "sku": "GEN-1777784926963-548",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Red"
    ],
    "collections": "Evening Collection",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Urban Fleece Jacket - 548 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Urban Fleece Jacket - 548 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 22
  },
  {
    "name": "Durable Cotton Jeans - 549",
    "description": "A durable jeans made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 74.99,
    "discountPrice": 71.99,
    "countInStock": 76,
    "sku": "GEN-1777784926963-549",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Olive"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Durable Cotton Jeans - 549 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Durable Cotton Jeans - 549 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 60
  },
  {
    "name": "Cozy Wool Shirt - 550",
    "description": "A cozy shirt made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 114.99,
    "countInStock": 66,
    "sku": "GEN-1777784926963-550",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Green"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Cozy Wool Shirt - 550 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Cozy Wool Shirt - 550 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 33
  },
  {
    "name": "Chic Polyester Hoodie - 551",
    "description": "A chic hoodie made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 98.99,
    "discountPrice": 94.99,
    "countInStock": 73,
    "sku": "GEN-1777784926963-551",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "White"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Chic Polyester Hoodie - 551 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Chic Polyester Hoodie - 551 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 94
  },
  {
    "name": "Casual Cotton Jacket - 552",
    "description": "A casual jacket made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 38.99,
    "countInStock": 14,
    "sku": "GEN-1777784926963-552",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Olive"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Casual Cotton Jacket - 552 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Casual Cotton Jacket - 552 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 41
  },
  {
    "name": "Durable Fleece Hoodie - 553",
    "description": "A durable hoodie made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 119.99,
    "discountPrice": 118.99,
    "countInStock": 37,
    "sku": "GEN-1777784926963-553",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Durable Fleece Hoodie - 553 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Durable Fleece Hoodie - 553 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 64
  },
  {
    "name": "Elegant Denim Shirt - 554",
    "description": "A elegant shirt made from high-quality denim. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 112.99,
    "countInStock": 38,
    "sku": "GEN-1777784926963-554",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "White"
    ],
    "collections": "Summer Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Elegant Denim Shirt - 554 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Elegant Denim Shirt - 554 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 17
  },
  {
    "name": "Classic Spandex Pants - 555",
    "description": "A classic pants made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 111.99,
    "countInStock": 34,
    "sku": "GEN-1777784926963-555",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Spandex Pants - 555 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Spandex Pants - 555 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 47
  },
  {
    "name": "Premium Wool Cardigan - 556",
    "description": "A premium cardigan made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 80.99,
    "countInStock": 40,
    "sku": "GEN-1777784926963-556",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Teal"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Premium Wool Cardigan - 556 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Premium Wool Cardigan - 556 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 5
  },
  {
    "name": "Vintage Spandex T-Shirt - 557",
    "description": "A vintage t-shirt made from high-quality spandex. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 115.99,
    "countInStock": 72,
    "sku": "GEN-1777784926963-557",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Maroon"
    ],
    "collections": "Business Casual",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Vintage Spandex T-Shirt - 557 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Vintage Spandex T-Shirt - 557 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 40
  },
  {
    "name": "Premium Leather Vest - 558",
    "description": "A premium vest made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 107.99,
    "countInStock": 10,
    "sku": "GEN-1777784926963-558",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Beige"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Premium Leather Vest - 558 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Premium Leather Vest - 558 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 30
  },
  {
    "name": "Durable Denim Jacket - 559",
    "description": "A durable jacket made from high-quality denim. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 29.99,
    "countInStock": 36,
    "sku": "GEN-1777784926963-559",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Durable Denim Jacket - 559 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Durable Denim Jacket - 559 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 48
  },
  {
    "name": "Durable Spandex Pants - 560",
    "description": "A durable pants made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 100.99,
    "discountPrice": 98.99,
    "countInStock": 75,
    "sku": "GEN-1777784926963-560",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Purple"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Spandex Pants - 560 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Spandex Pants - 560 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 6
  },
  {
    "name": "Urban Cotton Hoodie - 561",
    "description": "A urban hoodie made from high-quality cotton. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 85.99,
    "discountPrice": 79.99,
    "countInStock": 55,
    "sku": "GEN-1777784926963-561",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Pink"
    ],
    "collections": "Evening Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Cotton Hoodie - 561 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Cotton Hoodie - 561 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 96
  },
  {
    "name": "Premium Wool Coat - 562",
    "description": "A premium coat made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 117.99,
    "discountPrice": 108.99,
    "countInStock": 28,
    "sku": "GEN-1777784926963-562",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Red"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Premium Wool Coat - 562 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Premium Wool Coat - 562 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 72
  },
  {
    "name": "Modern Linen Jeans - 563",
    "description": "A modern jeans made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 101.99,
    "discountPrice": 94.99,
    "countInStock": 57,
    "sku": "GEN-1777784926963-563",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Modern Linen Jeans - 563 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Modern Linen Jeans - 563 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 53
  },
  {
    "name": "Premium Denim Jacket - 564",
    "description": "A premium jacket made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 74.99,
    "discountPrice": 68.99,
    "countInStock": 18,
    "sku": "GEN-1777784926963-564",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Premium Denim Jacket - 564 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Premium Denim Jacket - 564 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 79
  },
  {
    "name": "Rustic Cotton T-Shirt - 565",
    "description": "A rustic t-shirt made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 72.99,
    "discountPrice": 64.99,
    "countInStock": 10,
    "sku": "GEN-1777784926963-565",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Gray"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Rustic Cotton T-Shirt - 565 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Rustic Cotton T-Shirt - 565 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 78
  },
  {
    "name": "Rustic Silk T-Shirt - 566",
    "description": "A rustic t-shirt made from high-quality silk. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 105.99,
    "discountPrice": 101.99,
    "countInStock": 96,
    "sku": "GEN-1777784926963-566",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Red"
    ],
    "collections": "Athleisure",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Rustic Silk T-Shirt - 566 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Rustic Silk T-Shirt - 566 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 64
  },
  {
    "name": "Premium Silk Shirt - 567",
    "description": "A premium shirt made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 90.99,
    "discountPrice": 84.99,
    "countInStock": 67,
    "sku": "GEN-1777784926963-567",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "White"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Premium Silk Shirt - 567 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Premium Silk Shirt - 567 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 30
  },
  {
    "name": "Modern Spandex Hoodie - 568",
    "description": "A modern hoodie made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 79.99,
    "countInStock": 80,
    "sku": "GEN-1777784926963-568",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Green"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Modern Spandex Hoodie - 568 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Modern Spandex Hoodie - 568 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 86
  },
  {
    "name": "Vintage Spandex Hoodie - 569",
    "description": "A vintage hoodie made from high-quality spandex. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 60.99,
    "countInStock": 76,
    "sku": "GEN-1777784926963-569",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Purple"
    ],
    "collections": "Business Casual",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Vintage Spandex Hoodie - 569 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Vintage Spandex Hoodie - 569 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 18
  },
  {
    "name": "Vintage Spandex Dress - 570",
    "description": "A vintage dress made from high-quality spandex. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 67.99,
    "discountPrice": 57.989999999999995,
    "countInStock": 94,
    "sku": "GEN-1777784926963-570",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Vintage Spandex Dress - 570 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Vintage Spandex Dress - 570 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 25
  },
  {
    "name": "Durable Wool Dress - 571",
    "description": "A durable dress made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 110.99,
    "discountPrice": 108.99,
    "countInStock": 84,
    "sku": "GEN-1777784926963-571",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Brown"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Durable Wool Dress - 571 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Durable Wool Dress - 571 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 30
  },
  {
    "name": "Elegant Polyester Blazer - 572",
    "description": "A elegant blazer made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 113.99,
    "countInStock": 78,
    "sku": "GEN-1777784926963-572",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Elegant Polyester Blazer - 572 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Elegant Polyester Blazer - 572 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 57
  },
  {
    "name": "Cozy Polyester Jacket - 573",
    "description": "A cozy jacket made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 96.99,
    "discountPrice": 95.99,
    "countInStock": 14,
    "sku": "GEN-1777784926963-573",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Cozy Polyester Jacket - 573 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Cozy Polyester Jacket - 573 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 22
  },
  {
    "name": "Casual Wool Vest - 574",
    "description": "A casual vest made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 47.99,
    "discountPrice": 42.99,
    "countInStock": 55,
    "sku": "GEN-1777784926963-574",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Casual Wool Vest - 574 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Casual Wool Vest - 574 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 11
  },
  {
    "name": "Lightweight Polyester Jeans - 575",
    "description": "A lightweight jeans made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 109.99,
    "discountPrice": 105.99,
    "countInStock": 65,
    "sku": "GEN-1777784926963-575",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Navy"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Lightweight Polyester Jeans - 575 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Lightweight Polyester Jeans - 575 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 87
  },
  {
    "name": "Elegant Wool Coat - 576",
    "description": "A elegant coat made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 72.99,
    "countInStock": 61,
    "sku": "GEN-1777784926963-576",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Green"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Elegant Wool Coat - 576 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Elegant Wool Coat - 576 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 86
  },
  {
    "name": "Casual Cotton Jeans - 577",
    "description": "A casual jeans made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 64.99,
    "countInStock": 60,
    "sku": "GEN-1777784926963-577",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Teal"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Cotton Jeans - 577 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Cotton Jeans - 577 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 52
  },
  {
    "name": "Urban Silk T-Shirt - 578",
    "description": "A urban t-shirt made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 91.99,
    "discountPrice": 90.99,
    "countInStock": 14,
    "sku": "GEN-1777784926963-578",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Purple"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Urban Silk T-Shirt - 578 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Urban Silk T-Shirt - 578 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 38
  },
  {
    "name": "Urban Polyester Shirt - 579",
    "description": "A urban shirt made from high-quality polyester. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 57.99,
    "discountPrice": 54.99,
    "countInStock": 90,
    "sku": "GEN-1777784926963-579",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Urban Polyester Shirt - 579 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Urban Polyester Shirt - 579 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 5
  },
  {
    "name": "Premium Wool Skirt - 580",
    "description": "A premium skirt made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 55.99,
    "countInStock": 63,
    "sku": "GEN-1777784926963-580",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Olive"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Premium Wool Skirt - 580 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Premium Wool Skirt - 580 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 78
  },
  {
    "name": "Modern Cotton Hoodie - 581",
    "description": "A modern hoodie made from high-quality cotton. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 72.99,
    "discountPrice": 67.99,
    "countInStock": 53,
    "sku": "GEN-1777784926963-581",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Pink"
    ],
    "collections": "Athleisure",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Modern Cotton Hoodie - 581 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Modern Cotton Hoodie - 581 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 81
  },
  {
    "name": "Sleek Spandex Blazer - 582",
    "description": "A sleek blazer made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 89.99,
    "discountPrice": 85.99,
    "countInStock": 53,
    "sku": "GEN-1777784926963-582",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Yellow"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sleek Spandex Blazer - 582 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sleek Spandex Blazer - 582 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 48
  },
  {
    "name": "Elegant Leather Dress - 583",
    "description": "A elegant dress made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 104.99,
    "discountPrice": 94.99,
    "countInStock": 84,
    "sku": "GEN-1777784926963-583",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Pink"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Elegant Leather Dress - 583 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Elegant Leather Dress - 583 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 33
  },
  {
    "name": "Modern Spandex T-Shirt - 584",
    "description": "A modern t-shirt made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 105.99,
    "countInStock": 29,
    "sku": "GEN-1777784926963-584",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Brown"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Modern Spandex T-Shirt - 584 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Modern Spandex T-Shirt - 584 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 13
  },
  {
    "name": "Premium Linen Shorts - 585",
    "description": "A premium shorts made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 89.99,
    "countInStock": 50,
    "sku": "GEN-1777784926963-585",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Teal"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Premium Linen Shorts - 585 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Premium Linen Shorts - 585 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 29
  },
  {
    "name": "Lightweight Wool Skirt - 586",
    "description": "A lightweight skirt made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 91.99,
    "countInStock": 18,
    "sku": "GEN-1777784926963-586",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Teal"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Lightweight Wool Skirt - 586 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Lightweight Wool Skirt - 586 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 99
  },
  {
    "name": "Urban Fleece Coat - 587",
    "description": "A urban coat made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 42.99,
    "discountPrice": 33.99,
    "countInStock": 4,
    "sku": "GEN-1777784926963-587",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Urban Fleece Coat - 587 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Urban Fleece Coat - 587 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 99
  },
  {
    "name": "Casual Leather Pants - 588",
    "description": "A casual pants made from high-quality leather. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 81.99,
    "countInStock": 65,
    "sku": "GEN-1777784926963-588",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "White"
    ],
    "collections": "Everyday Basics",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Casual Leather Pants - 588 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Casual Leather Pants - 588 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 98
  },
  {
    "name": "Rustic Silk Shirt - 589",
    "description": "A rustic shirt made from high-quality silk. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 107.99,
    "discountPrice": 101.99,
    "countInStock": 2,
    "sku": "GEN-1777784926963-589",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Rustic Silk Shirt - 589 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Rustic Silk Shirt - 589 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 94
  },
  {
    "name": "Sporty Silk Skirt - 590",
    "description": "A sporty skirt made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 87.99,
    "discountPrice": 78.99,
    "countInStock": 80,
    "sku": "GEN-1777784926963-590",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Sporty Silk Skirt - 590 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Sporty Silk Skirt - 590 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 2
  },
  {
    "name": "Lightweight Wool Shirt - 591",
    "description": "A lightweight shirt made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 109.99,
    "discountPrice": 99.99,
    "countInStock": 7,
    "sku": "GEN-1777784926963-591",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Gray"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Lightweight Wool Shirt - 591 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Lightweight Wool Shirt - 591 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 15
  },
  {
    "name": "Sleek Wool Vest - 592",
    "description": "A sleek vest made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 46.99,
    "countInStock": 45,
    "sku": "GEN-1777784926963-592",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Red"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Sleek Wool Vest - 592 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Sleek Wool Vest - 592 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 4
  },
  {
    "name": "Modern Denim Dress - 593",
    "description": "A modern dress made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 104.99,
    "countInStock": 21,
    "sku": "GEN-1777784926963-593",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Maroon"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Modern Denim Dress - 593 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Modern Denim Dress - 593 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 8
  },
  {
    "name": "Lightweight Leather T-Shirt - 594",
    "description": "A lightweight t-shirt made from high-quality leather. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 34.99,
    "discountPrice": 29.990000000000002,
    "countInStock": 11,
    "sku": "GEN-1777784926963-594",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Navy"
    ],
    "collections": "Summer Collection",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Lightweight Leather T-Shirt - 594 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Lightweight Leather T-Shirt - 594 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 26
  },
  {
    "name": "Vintage Cotton Dress - 595",
    "description": "A vintage dress made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 114.99,
    "discountPrice": 107.99,
    "countInStock": 83,
    "sku": "GEN-1777784926963-595",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Green"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Vintage Cotton Dress - 595 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Vintage Cotton Dress - 595 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 77
  },
  {
    "name": "Casual Leather Jacket - 596",
    "description": "A casual jacket made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 73.99,
    "discountPrice": 64.99,
    "countInStock": 96,
    "sku": "GEN-1777784926963-596",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Green"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Casual Leather Jacket - 596 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Casual Leather Jacket - 596 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 38
  },
  {
    "name": "Chic Linen Shirt - 597",
    "description": "A chic shirt made from high-quality linen. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 44.99,
    "countInStock": 62,
    "sku": "GEN-1777784926963-597",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Chic Linen Shirt - 597 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Chic Linen Shirt - 597 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 63
  },
  {
    "name": "Urban Silk Skirt - 598",
    "description": "A urban skirt made from high-quality silk. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 76.99,
    "discountPrice": 67.99,
    "countInStock": 96,
    "sku": "GEN-1777784926963-598",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Pink"
    ],
    "collections": "Athleisure",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Silk Skirt - 598 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Silk Skirt - 598 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 28
  },
  {
    "name": "Rustic Linen Blazer - 599",
    "description": "A rustic blazer made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 112.99,
    "discountPrice": 111.99,
    "countInStock": 16,
    "sku": "GEN-1777784926963-599",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Teal"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Rustic Linen Blazer - 599 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Rustic Linen Blazer - 599 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 31
  },
  {
    "name": "Lightweight Spandex Blazer - 600",
    "description": "A lightweight blazer made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 75.99,
    "discountPrice": 70.99,
    "countInStock": 38,
    "sku": "GEN-1777784926963-600",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Yellow"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Lightweight Spandex Blazer - 600 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Lightweight Spandex Blazer - 600 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 89
  },
  {
    "name": "Lightweight Fleece Jacket - 601",
    "description": "A lightweight jacket made from high-quality fleece. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 46.99,
    "discountPrice": 38.99,
    "countInStock": 30,
    "sku": "GEN-1777784926963-601",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Navy"
    ],
    "collections": "Summer Collection",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Lightweight Fleece Jacket - 601 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Lightweight Fleece Jacket - 601 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 18
  },
  {
    "name": "Urban Polyester T-Shirt - 602",
    "description": "A urban t-shirt made from high-quality polyester. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 92.99,
    "countInStock": 56,
    "sku": "GEN-1777784926963-602",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "collections": "Winter Wear",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Urban Polyester T-Shirt - 602 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Urban Polyester T-Shirt - 602 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 76
  },
  {
    "name": "Classic Denim Pants - 603",
    "description": "A classic pants made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 75.99,
    "discountPrice": 72.99,
    "countInStock": 57,
    "sku": "GEN-1777784926963-603",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Denim Pants - 603 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Denim Pants - 603 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 7
  },
  {
    "name": "Chic Wool Pants - 604",
    "description": "A chic pants made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 20.99,
    "discountPrice": 17.99,
    "countInStock": 0,
    "sku": "GEN-1777784926963-604",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "White"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Chic Wool Pants - 604 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Chic Wool Pants - 604 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 88
  },
  {
    "name": "Urban Cotton Shorts - 605",
    "description": "A urban shorts made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 22.99,
    "discountPrice": 19.99,
    "countInStock": 88,
    "sku": "GEN-1777784926963-605",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Yellow"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Urban Cotton Shorts - 605 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Urban Cotton Shorts - 605 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 83
  },
  {
    "name": "Rustic Fleece Vest - 606",
    "description": "A rustic vest made from high-quality fleece. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 69.99,
    "countInStock": 20,
    "sku": "GEN-1777784926963-606",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Rustic Fleece Vest - 606 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Rustic Fleece Vest - 606 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 61
  },
  {
    "name": "Sporty Wool Dress - 607",
    "description": "A sporty dress made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 104.99,
    "discountPrice": 94.99,
    "countInStock": 88,
    "sku": "GEN-1777784926963-607",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Sporty Wool Dress - 607 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Sporty Wool Dress - 607 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 88
  },
  {
    "name": "Classic Leather Cardigan - 608",
    "description": "A classic cardigan made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 25.99,
    "discountPrice": 20.99,
    "countInStock": 10,
    "sku": "GEN-1777784926963-608",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Olive"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Classic Leather Cardigan - 608 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Classic Leather Cardigan - 608 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 47
  },
  {
    "name": "Urban Wool Vest - 609",
    "description": "A urban vest made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 55.99,
    "countInStock": 91,
    "sku": "GEN-1777784926963-609",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Urban Wool Vest - 609 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Urban Wool Vest - 609 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 51
  },
  {
    "name": "Durable Spandex T-Shirt - 610",
    "description": "A durable t-shirt made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 98.99,
    "countInStock": 17,
    "sku": "GEN-1777784926963-610",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Teal"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Durable Spandex T-Shirt - 610 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Durable Spandex T-Shirt - 610 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 32
  },
  {
    "name": "Elegant Spandex Cardigan - 611",
    "description": "A elegant cardigan made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 116.99,
    "countInStock": 30,
    "sku": "GEN-1777784926963-611",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Black"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Elegant Spandex Cardigan - 611 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Elegant Spandex Cardigan - 611 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 59
  },
  {
    "name": "Durable Denim Jeans - 612",
    "description": "A durable jeans made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 76.99,
    "discountPrice": 67.99,
    "countInStock": 57,
    "sku": "GEN-1777784926963-612",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Maroon"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Durable Denim Jeans - 612 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Durable Denim Jeans - 612 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 17
  },
  {
    "name": "Durable Polyester Vest - 613",
    "description": "A durable vest made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 20.99,
    "discountPrice": 16.99,
    "countInStock": 9,
    "sku": "GEN-1777784926963-613",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "White"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Durable Polyester Vest - 613 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Durable Polyester Vest - 613 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 60
  },
  {
    "name": "Urban Silk Cardigan - 614",
    "description": "A urban cardigan made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 100.99,
    "discountPrice": 99.99,
    "countInStock": 89,
    "sku": "GEN-1777784926963-614",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Purple"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Urban Silk Cardigan - 614 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Urban Silk Cardigan - 614 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 69
  },
  {
    "name": "Classic Cotton Cardigan - 615",
    "description": "A classic cardigan made from high-quality cotton. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 80.99,
    "countInStock": 40,
    "sku": "GEN-1777784926963-615",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Classic Cotton Cardigan - 615 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Classic Cotton Cardigan - 615 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 78
  },
  {
    "name": "Urban Fleece Shorts - 616",
    "description": "A urban shorts made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 38.99,
    "discountPrice": 37.99,
    "countInStock": 96,
    "sku": "GEN-1777784926963-616",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Brown"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Urban Fleece Shorts - 616 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Urban Fleece Shorts - 616 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 45
  },
  {
    "name": "Rustic Denim Pants - 617",
    "description": "A rustic pants made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 91.99,
    "countInStock": 2,
    "sku": "GEN-1777784926963-617",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Teal"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Rustic Denim Pants - 617 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Rustic Denim Pants - 617 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 72
  },
  {
    "name": "Sleek Polyester Pants - 618",
    "description": "A sleek pants made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 27.99,
    "discountPrice": 24.99,
    "countInStock": 86,
    "sku": "GEN-1777784926963-618",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Olive"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Sleek Polyester Pants - 618 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Sleek Polyester Pants - 618 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 27
  },
  {
    "name": "Chic Polyester Jeans - 619",
    "description": "A chic jeans made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 106.99,
    "discountPrice": 101.99,
    "countInStock": 15,
    "sku": "GEN-1777784926963-619",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Gray"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Chic Polyester Jeans - 619 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Chic Polyester Jeans - 619 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 42
  },
  {
    "name": "Essential Cotton Vest - 620",
    "description": "A essential vest made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 32.99,
    "discountPrice": 26.990000000000002,
    "countInStock": 20,
    "sku": "GEN-1777784926963-620",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Red"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Essential Cotton Vest - 620 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Essential Cotton Vest - 620 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 65
  },
  {
    "name": "Vintage Leather T-Shirt - 621",
    "description": "A vintage t-shirt made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 74.99,
    "countInStock": 78,
    "sku": "GEN-1777784926963-621",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Olive"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Vintage Leather T-Shirt - 621 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Vintage Leather T-Shirt - 621 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 29
  },
  {
    "name": "Modern Cotton Skirt - 622",
    "description": "A modern skirt made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 24.99,
    "discountPrice": 14.989999999999998,
    "countInStock": 68,
    "sku": "GEN-1777784926963-622",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Gray"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Modern Cotton Skirt - 622 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Modern Cotton Skirt - 622 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 59
  },
  {
    "name": "Vintage Cotton Sweater - 623",
    "description": "A vintage sweater made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 39.99,
    "discountPrice": 33.99,
    "countInStock": 24,
    "sku": "GEN-1777784926963-623",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Vintage Cotton Sweater - 623 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Vintage Cotton Sweater - 623 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 83
  },
  {
    "name": "Modern Cotton Coat - 624",
    "description": "A modern coat made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 43.99,
    "countInStock": 67,
    "sku": "GEN-1777784926963-624",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Modern Cotton Coat - 624 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Modern Cotton Coat - 624 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 78
  },
  {
    "name": "Premium Spandex Dress - 625",
    "description": "A premium dress made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 115.99,
    "discountPrice": 107.99,
    "countInStock": 36,
    "sku": "GEN-1777784926963-625",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Premium Spandex Dress - 625 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Premium Spandex Dress - 625 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 54
  },
  {
    "name": "Premium Denim Vest - 626",
    "description": "A premium vest made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 61.99,
    "countInStock": 56,
    "sku": "GEN-1777784926963-626",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "White"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Premium Denim Vest - 626 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Premium Denim Vest - 626 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 81
  },
  {
    "name": "Cozy Leather Jacket - 627",
    "description": "A cozy jacket made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 82.99,
    "countInStock": 30,
    "sku": "GEN-1777784926963-627",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Olive"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Cozy Leather Jacket - 627 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Cozy Leather Jacket - 627 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 38
  },
  {
    "name": "Classic Leather Pants - 628",
    "description": "A classic pants made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 64.99,
    "discountPrice": 58.989999999999995,
    "countInStock": 30,
    "sku": "GEN-1777784926963-628",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Gray"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Leather Pants - 628 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Leather Pants - 628 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 88
  },
  {
    "name": "Sleek Wool Pants - 629",
    "description": "A sleek pants made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 76.99,
    "discountPrice": 69.99,
    "countInStock": 42,
    "sku": "GEN-1777784926963-629",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Brown"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Sleek Wool Pants - 629 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Sleek Wool Pants - 629 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 63
  },
  {
    "name": "Essential Spandex Jacket - 630",
    "description": "A essential jacket made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 24.99,
    "countInStock": 59,
    "sku": "GEN-1777784926963-630",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Essential Spandex Jacket - 630 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Essential Spandex Jacket - 630 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 25
  },
  {
    "name": "Modern Denim Vest - 631",
    "description": "A modern vest made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 84.99,
    "countInStock": 92,
    "sku": "GEN-1777784926963-631",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Modern Denim Vest - 631 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Modern Denim Vest - 631 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 31
  },
  {
    "name": "Sleek Fleece Sweater - 632",
    "description": "A sleek sweater made from high-quality fleece. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 116.99,
    "countInStock": 24,
    "sku": "GEN-1777784926963-632",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sleek Fleece Sweater - 632 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sleek Fleece Sweater - 632 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 85
  },
  {
    "name": "Chic Wool Jeans - 633",
    "description": "A chic jeans made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 105.99,
    "discountPrice": 100.99,
    "countInStock": 61,
    "sku": "GEN-1777784926963-633",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Chic Wool Jeans - 633 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Chic Wool Jeans - 633 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 58
  },
  {
    "name": "Elegant Spandex Jeans - 634",
    "description": "A elegant jeans made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 41.99,
    "countInStock": 47,
    "sku": "GEN-1777784926963-634",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Pink"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Elegant Spandex Jeans - 634 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Elegant Spandex Jeans - 634 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 45
  },
  {
    "name": "Durable Cotton Vest - 635",
    "description": "A durable vest made from high-quality cotton. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 84.99,
    "discountPrice": 74.99,
    "countInStock": 26,
    "sku": "GEN-1777784926963-635",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "White"
    ],
    "collections": "Athleisure",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Durable Cotton Vest - 635 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Durable Cotton Vest - 635 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 87
  },
  {
    "name": "Durable Leather Jacket - 636",
    "description": "A durable jacket made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 96.99,
    "countInStock": 10,
    "sku": "GEN-1777784926963-636",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Olive"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Durable Leather Jacket - 636 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Durable Leather Jacket - 636 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 38
  },
  {
    "name": "Modern Denim Shirt - 637",
    "description": "A modern shirt made from high-quality denim. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 109.99,
    "countInStock": 41,
    "sku": "GEN-1777784926963-637",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Blue"
    ],
    "collections": "Summer Collection",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Modern Denim Shirt - 637 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Modern Denim Shirt - 637 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 75
  },
  {
    "name": "Chic Polyester Dress - 638",
    "description": "A chic dress made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 83.99,
    "discountPrice": 81.99,
    "countInStock": 8,
    "sku": "GEN-1777784926963-638",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "White"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Chic Polyester Dress - 638 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Chic Polyester Dress - 638 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 17
  },
  {
    "name": "Sporty Wool Vest - 639",
    "description": "A sporty vest made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 52.99,
    "countInStock": 16,
    "sku": "GEN-1777784926963-639",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Olive"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Sporty Wool Vest - 639 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Sporty Wool Vest - 639 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 62
  },
  {
    "name": "Vintage Denim Vest - 640",
    "description": "A vintage vest made from high-quality denim. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 24.99,
    "countInStock": 61,
    "sku": "GEN-1777784926963-640",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Yellow"
    ],
    "collections": "Everyday Basics",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Vintage Denim Vest - 640 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Vintage Denim Vest - 640 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 98
  },
  {
    "name": "Modern Nylon Jacket - 641",
    "description": "A modern jacket made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 28.99,
    "discountPrice": 26.99,
    "countInStock": 9,
    "sku": "GEN-1777784926963-641",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Green"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Modern Nylon Jacket - 641 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Modern Nylon Jacket - 641 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 99
  },
  {
    "name": "Durable Spandex Pants - 642",
    "description": "A durable pants made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 35.99,
    "countInStock": 97,
    "sku": "GEN-1777784926963-642",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Teal"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Spandex Pants - 642 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Spandex Pants - 642 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 59
  },
  {
    "name": "Urban Fleece Blazer - 643",
    "description": "A urban blazer made from high-quality fleece. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 77.99,
    "discountPrice": 76.99,
    "countInStock": 50,
    "sku": "GEN-1777784926963-643",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Urban Fleece Blazer - 643 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Urban Fleece Blazer - 643 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 61
  },
  {
    "name": "Vintage Fleece Jacket - 644",
    "description": "A vintage jacket made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 56.99,
    "countInStock": 78,
    "sku": "GEN-1777784926963-644",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Navy"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Vintage Fleece Jacket - 644 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Vintage Fleece Jacket - 644 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 95
  },
  {
    "name": "Sleek Spandex Sweater - 645",
    "description": "A sleek sweater made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 50.99,
    "countInStock": 24,
    "sku": "GEN-1777784926963-645",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Green"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sleek Spandex Sweater - 645 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sleek Spandex Sweater - 645 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 41
  },
  {
    "name": "Rustic Polyester Shorts - 646",
    "description": "A rustic shorts made from high-quality polyester. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 73.99,
    "discountPrice": 70.99,
    "countInStock": 38,
    "sku": "GEN-1777784926963-646",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Purple"
    ],
    "collections": "Winter Wear",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Rustic Polyester Shorts - 646 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Rustic Polyester Shorts - 646 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 16
  },
  {
    "name": "Urban Silk Cardigan - 647",
    "description": "A urban cardigan made from high-quality silk. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 115.99,
    "countInStock": 59,
    "sku": "GEN-1777784926963-647",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Purple"
    ],
    "collections": "Summer Collection",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Urban Silk Cardigan - 647 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Urban Silk Cardigan - 647 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 4
  },
  {
    "name": "Chic Denim Sweater - 648",
    "description": "A chic sweater made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 88.99,
    "discountPrice": 85.99,
    "countInStock": 45,
    "sku": "GEN-1777784926963-648",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "White"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Chic Denim Sweater - 648 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Chic Denim Sweater - 648 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 6
  },
  {
    "name": "Elegant Silk Coat - 649",
    "description": "A elegant coat made from high-quality silk. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 75.99,
    "countInStock": 89,
    "sku": "GEN-1777784926963-649",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Purple"
    ],
    "collections": "Summer Collection",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Elegant Silk Coat - 649 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Elegant Silk Coat - 649 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 79
  },
  {
    "name": "Vintage Fleece Vest - 650",
    "description": "A vintage vest made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 117.99,
    "discountPrice": 109.99,
    "countInStock": 16,
    "sku": "GEN-1777784926963-650",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Pink"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Vintage Fleece Vest - 650 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Vintage Fleece Vest - 650 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 98
  },
  {
    "name": "Sleek Silk Shirt - 651",
    "description": "A sleek shirt made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 46.99,
    "countInStock": 77,
    "sku": "GEN-1777784926963-651",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Sleek Silk Shirt - 651 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Sleek Silk Shirt - 651 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 4
  },
  {
    "name": "Sporty Cotton Vest - 652",
    "description": "A sporty vest made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 113.99,
    "discountPrice": 104.99,
    "countInStock": 64,
    "sku": "GEN-1777784926963-652",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Sporty Cotton Vest - 652 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Sporty Cotton Vest - 652 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 67
  },
  {
    "name": "Vintage Wool Skirt - 653",
    "description": "A vintage skirt made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 115.99,
    "countInStock": 87,
    "sku": "GEN-1777784926963-653",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Red"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Vintage Wool Skirt - 653 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Vintage Wool Skirt - 653 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 76
  },
  {
    "name": "Sporty Wool Cardigan - 654",
    "description": "A sporty cardigan made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 115.99,
    "discountPrice": 109.99,
    "countInStock": 32,
    "sku": "GEN-1777784926963-654",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Purple"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Sporty Wool Cardigan - 654 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Sporty Wool Cardigan - 654 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 85
  },
  {
    "name": "Lightweight Silk Dress - 655",
    "description": "A lightweight dress made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 102.99,
    "countInStock": 31,
    "sku": "GEN-1777784926963-655",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Gray"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Lightweight Silk Dress - 655 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Lightweight Silk Dress - 655 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 80
  },
  {
    "name": "Casual Linen Jeans - 656",
    "description": "A casual jeans made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 119.99,
    "discountPrice": 117.99,
    "countInStock": 21,
    "sku": "GEN-1777784926963-656",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Blue"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Linen Jeans - 656 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Linen Jeans - 656 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 22
  },
  {
    "name": "Essential Spandex Sweater - 657",
    "description": "A essential sweater made from high-quality spandex. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 69.99,
    "discountPrice": 67.99,
    "countInStock": 30,
    "sku": "GEN-1777784926963-657",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Essential Spandex Sweater - 657 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Essential Spandex Sweater - 657 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 43
  },
  {
    "name": "Premium Linen Coat - 658",
    "description": "A premium coat made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 45.99,
    "discountPrice": 42.99,
    "countInStock": 61,
    "sku": "GEN-1777784926963-658",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Purple"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Premium Linen Coat - 658 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Premium Linen Coat - 658 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 20
  },
  {
    "name": "Durable Polyester Jacket - 659",
    "description": "A durable jacket made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 20.99,
    "discountPrice": 11.989999999999998,
    "countInStock": 55,
    "sku": "GEN-1777784926963-659",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Black"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Durable Polyester Jacket - 659 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Durable Polyester Jacket - 659 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 9
  },
  {
    "name": "Rustic Cotton Shirt - 660",
    "description": "A rustic shirt made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 43.99,
    "discountPrice": 35.99,
    "countInStock": 36,
    "sku": "GEN-1777784926963-660",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "White"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Rustic Cotton Shirt - 660 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Rustic Cotton Shirt - 660 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 64
  },
  {
    "name": "Chic Leather Jacket - 661",
    "description": "A chic jacket made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 103.99,
    "countInStock": 73,
    "sku": "GEN-1777784926963-661",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Chic Leather Jacket - 661 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Chic Leather Jacket - 661 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 62
  },
  {
    "name": "Essential Spandex Hoodie - 662",
    "description": "A essential hoodie made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 60.99,
    "discountPrice": 54.99,
    "countInStock": 58,
    "sku": "GEN-1777784926963-662",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Essential Spandex Hoodie - 662 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Essential Spandex Hoodie - 662 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 77
  },
  {
    "name": "Essential Nylon Pants - 663",
    "description": "A essential pants made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 67.99,
    "countInStock": 88,
    "sku": "GEN-1777784926963-663",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Beige"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Essential Nylon Pants - 663 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Essential Nylon Pants - 663 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 0
  },
  {
    "name": "Modern Linen Hoodie - 664",
    "description": "A modern hoodie made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 88.99,
    "countInStock": 40,
    "sku": "GEN-1777784926963-664",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Modern Linen Hoodie - 664 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Modern Linen Hoodie - 664 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 95
  },
  {
    "name": "Sporty Silk Hoodie - 665",
    "description": "A sporty hoodie made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 46.99,
    "discountPrice": 44.99,
    "countInStock": 77,
    "sku": "GEN-1777784926963-665",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sporty Silk Hoodie - 665 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sporty Silk Hoodie - 665 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 32
  },
  {
    "name": "Elegant Silk Pants - 666",
    "description": "A elegant pants made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 95.99,
    "discountPrice": 88.99,
    "countInStock": 72,
    "sku": "GEN-1777784926963-666",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Pink"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Elegant Silk Pants - 666 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Elegant Silk Pants - 666 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 73
  },
  {
    "name": "Lightweight Cotton Sweater - 667",
    "description": "A lightweight sweater made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 87.99,
    "countInStock": 38,
    "sku": "GEN-1777784926963-667",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Gray"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Lightweight Cotton Sweater - 667 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Lightweight Cotton Sweater - 667 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 38
  },
  {
    "name": "Rustic Silk Skirt - 668",
    "description": "A rustic skirt made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 38.99,
    "discountPrice": 29.990000000000002,
    "countInStock": 75,
    "sku": "GEN-1777784926963-668",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Rustic Silk Skirt - 668 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Rustic Silk Skirt - 668 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 42
  },
  {
    "name": "Chic Fleece Cardigan - 669",
    "description": "A chic cardigan made from high-quality fleece. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 74.99,
    "countInStock": 3,
    "sku": "GEN-1777784926963-669",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Chic Fleece Cardigan - 669 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Chic Fleece Cardigan - 669 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 96
  },
  {
    "name": "Elegant Leather Pants - 670",
    "description": "A elegant pants made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 103.99,
    "countInStock": 3,
    "sku": "GEN-1777784926963-670",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Brown"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Elegant Leather Pants - 670 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Elegant Leather Pants - 670 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 81
  },
  {
    "name": "Sporty Leather Vest - 671",
    "description": "A sporty vest made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 104.99,
    "countInStock": 81,
    "sku": "GEN-1777784926963-671",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Purple"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Sporty Leather Vest - 671 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Sporty Leather Vest - 671 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 49
  },
  {
    "name": "Sleek Silk Vest - 672",
    "description": "A sleek vest made from high-quality silk. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 54.99,
    "discountPrice": 46.99,
    "countInStock": 27,
    "sku": "GEN-1777784926963-672",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Purple"
    ],
    "collections": "Summer Collection",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Sleek Silk Vest - 672 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Sleek Silk Vest - 672 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 91
  },
  {
    "name": "Rustic Wool Shorts - 673",
    "description": "A rustic shorts made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 81.99,
    "countInStock": 80,
    "sku": "GEN-1777784926963-673",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Purple"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Rustic Wool Shorts - 673 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Rustic Wool Shorts - 673 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 51
  },
  {
    "name": "Premium Denim Skirt - 674",
    "description": "A premium skirt made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 59.99,
    "discountPrice": 56.99,
    "countInStock": 80,
    "sku": "GEN-1777784926963-674",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Premium Denim Skirt - 674 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Premium Denim Skirt - 674 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 77
  },
  {
    "name": "Classic Fleece Dress - 675",
    "description": "A classic dress made from high-quality fleece. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 28.99,
    "discountPrice": 26.99,
    "countInStock": 77,
    "sku": "GEN-1777784926963-675",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Teal"
    ],
    "collections": "Business Casual",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Classic Fleece Dress - 675 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Classic Fleece Dress - 675 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 57
  },
  {
    "name": "Sleek Spandex Coat - 676",
    "description": "A sleek coat made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 112.99,
    "discountPrice": 105.99,
    "countInStock": 65,
    "sku": "GEN-1777784926963-676",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Brown"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Sleek Spandex Coat - 676 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Sleek Spandex Coat - 676 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 4
  },
  {
    "name": "Cozy Denim Pants - 677",
    "description": "A cozy pants made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 52.99,
    "discountPrice": 49.99,
    "countInStock": 74,
    "sku": "GEN-1777784926963-677",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Denim Pants - 677 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Denim Pants - 677 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 21
  },
  {
    "name": "Premium Spandex Coat - 678",
    "description": "A premium coat made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 103.99,
    "discountPrice": 99.99,
    "countInStock": 92,
    "sku": "GEN-1777784926963-678",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Premium Spandex Coat - 678 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Premium Spandex Coat - 678 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 5
  },
  {
    "name": "Lightweight Cotton Blazer - 679",
    "description": "A lightweight blazer made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 20.99,
    "countInStock": 40,
    "sku": "GEN-1777784926963-679",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "White"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Lightweight Cotton Blazer - 679 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Lightweight Cotton Blazer - 679 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 9
  },
  {
    "name": "Essential Nylon Pants - 680",
    "description": "A essential pants made from high-quality nylon. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 76.99,
    "discountPrice": 73.99,
    "countInStock": 97,
    "sku": "GEN-1777784926963-680",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black"
    ],
    "collections": "Everyday Basics",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Essential Nylon Pants - 680 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Essential Nylon Pants - 680 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 45
  },
  {
    "name": "Modern Spandex Jeans - 681",
    "description": "A modern jeans made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 78.99,
    "countInStock": 21,
    "sku": "GEN-1777784926963-681",
    "category": "Dresses",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Yellow"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Modern Spandex Jeans - 681 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Modern Spandex Jeans - 681 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 73
  },
  {
    "name": "Cozy Denim Blazer - 682",
    "description": "A cozy blazer made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 105.99,
    "countInStock": 28,
    "sku": "GEN-1777784926963-682",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Purple"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Cozy Denim Blazer - 682 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Cozy Denim Blazer - 682 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 29
  },
  {
    "name": "Classic Silk Hoodie - 683",
    "description": "A classic hoodie made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 90.99,
    "countInStock": 32,
    "sku": "GEN-1777784926963-683",
    "category": "Dresses",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Green"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Classic Silk Hoodie - 683 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Classic Silk Hoodie - 683 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 3
  },
  {
    "name": "Sporty Silk Blazer - 684",
    "description": "A sporty blazer made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 97.99,
    "discountPrice": 94.99,
    "countInStock": 56,
    "sku": "GEN-1777784926963-684",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Red"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sporty Silk Blazer - 684 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sporty Silk Blazer - 684 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 61
  },
  {
    "name": "Elegant Nylon Shirt - 685",
    "description": "A elegant shirt made from high-quality nylon. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 38.99,
    "countInStock": 73,
    "sku": "GEN-1777784926963-685",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "collections": "Evening Collection",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Elegant Nylon Shirt - 685 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Elegant Nylon Shirt - 685 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 12
  },
  {
    "name": "Essential Linen Dress - 686",
    "description": "A essential dress made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 52.99,
    "discountPrice": 47.99,
    "countInStock": 56,
    "sku": "GEN-1777784926963-686",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Black"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Essential Linen Dress - 686 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Essential Linen Dress - 686 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 48
  },
  {
    "name": "Urban Nylon Hoodie - 687",
    "description": "A urban hoodie made from high-quality nylon. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 83.99,
    "countInStock": 96,
    "sku": "GEN-1777784926963-687",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Yellow"
    ],
    "collections": "Summer Collection",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Nylon Hoodie - 687 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Nylon Hoodie - 687 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 39
  },
  {
    "name": "Vintage Silk T-Shirt - 688",
    "description": "A vintage t-shirt made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 84.99,
    "discountPrice": 79.99,
    "countInStock": 90,
    "sku": "GEN-1777784926963-688",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Vintage Silk T-Shirt - 688 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Vintage Silk T-Shirt - 688 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 21
  },
  {
    "name": "Classic Fleece Vest - 689",
    "description": "A classic vest made from high-quality fleece. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 70.99,
    "countInStock": 21,
    "sku": "GEN-1777784926963-689",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Gray"
    ],
    "collections": "Business Casual",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Fleece Vest - 689 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Fleece Vest - 689 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 61
  },
  {
    "name": "Classic Denim T-Shirt - 690",
    "description": "A classic t-shirt made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 103.99,
    "discountPrice": 97.99,
    "countInStock": 33,
    "sku": "GEN-1777784926963-690",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Classic Denim T-Shirt - 690 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Classic Denim T-Shirt - 690 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 41
  },
  {
    "name": "Elegant Linen Shirt - 691",
    "description": "A elegant shirt made from high-quality linen. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 92.99,
    "countInStock": 48,
    "sku": "GEN-1777784926963-691",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Green"
    ],
    "collections": "Everyday Basics",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Elegant Linen Shirt - 691 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Elegant Linen Shirt - 691 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 43
  },
  {
    "name": "Durable Linen Skirt - 692",
    "description": "A durable skirt made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 24.99,
    "discountPrice": 20.99,
    "countInStock": 63,
    "sku": "GEN-1777784926964-692",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Red"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Durable Linen Skirt - 692 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Durable Linen Skirt - 692 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 65
  },
  {
    "name": "Elegant Spandex Shorts - 693",
    "description": "A elegant shorts made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 59.99,
    "discountPrice": 49.99,
    "countInStock": 47,
    "sku": "GEN-1777784926964-693",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Teal"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Elegant Spandex Shorts - 693 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Elegant Spandex Shorts - 693 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 81
  },
  {
    "name": "Essential Denim Dress - 694",
    "description": "A essential dress made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 106.99,
    "countInStock": 54,
    "sku": "GEN-1777784926964-694",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Brown"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Essential Denim Dress - 694 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Essential Denim Dress - 694 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 38
  },
  {
    "name": "Casual Cotton Hoodie - 695",
    "description": "A casual hoodie made from high-quality cotton. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 73.99,
    "discountPrice": 65.99,
    "countInStock": 55,
    "sku": "GEN-1777784926964-695",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Yellow"
    ],
    "collections": "Evening Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Casual Cotton Hoodie - 695 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Casual Cotton Hoodie - 695 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 14
  },
  {
    "name": "Sporty Leather Hoodie - 696",
    "description": "A sporty hoodie made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 78.99,
    "discountPrice": 71.99,
    "countInStock": 97,
    "sku": "GEN-1777784926964-696",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Black"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sporty Leather Hoodie - 696 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sporty Leather Hoodie - 696 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 13
  },
  {
    "name": "Rustic Fleece Skirt - 697",
    "description": "A rustic skirt made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 98.99,
    "discountPrice": 89.99,
    "countInStock": 89,
    "sku": "GEN-1777784926964-697",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Rustic Fleece Skirt - 697 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Rustic Fleece Skirt - 697 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 8
  },
  {
    "name": "Casual Spandex Jeans - 698",
    "description": "A casual jeans made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 60.99,
    "discountPrice": 58.99,
    "countInStock": 85,
    "sku": "GEN-1777784926964-698",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "White"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Spandex Jeans - 698 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Spandex Jeans - 698 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 92
  },
  {
    "name": "Cozy Leather Pants - 699",
    "description": "A cozy pants made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 90.99,
    "discountPrice": 81.99,
    "countInStock": 21,
    "sku": "GEN-1777784926964-699",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Red"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Leather Pants - 699 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Leather Pants - 699 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 58
  },
  {
    "name": "Modern Fleece Blazer - 700",
    "description": "A modern blazer made from high-quality fleece. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 34.99,
    "discountPrice": 24.990000000000002,
    "countInStock": 41,
    "sku": "GEN-1777784926964-700",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Green"
    ],
    "collections": "Business Casual",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Modern Fleece Blazer - 700 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Modern Fleece Blazer - 700 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 38
  },
  {
    "name": "Elegant Cotton Skirt - 701",
    "description": "A elegant skirt made from high-quality cotton. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 82.99,
    "countInStock": 1,
    "sku": "GEN-1777784926964-701",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Cotton Skirt - 701 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Cotton Skirt - 701 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 86
  },
  {
    "name": "Urban Polyester Jeans - 702",
    "description": "A urban jeans made from high-quality polyester. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 66.99,
    "discountPrice": 57.989999999999995,
    "countInStock": 17,
    "sku": "GEN-1777784926964-702",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Brown"
    ],
    "collections": "Winter Wear",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Urban Polyester Jeans - 702 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Urban Polyester Jeans - 702 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 53
  },
  {
    "name": "Vintage Wool Jacket - 703",
    "description": "A vintage jacket made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 27.99,
    "countInStock": 47,
    "sku": "GEN-1777784926964-703",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Pink"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Vintage Wool Jacket - 703 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Vintage Wool Jacket - 703 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 75
  },
  {
    "name": "Sleek Wool Hoodie - 704",
    "description": "A sleek hoodie made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 119.99,
    "countInStock": 4,
    "sku": "GEN-1777784926964-704",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Gray"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sleek Wool Hoodie - 704 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sleek Wool Hoodie - 704 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 39
  },
  {
    "name": "Cozy Wool Blazer - 705",
    "description": "A cozy blazer made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 107.99,
    "countInStock": 56,
    "sku": "GEN-1777784926964-705",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Pink"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Cozy Wool Blazer - 705 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Cozy Wool Blazer - 705 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 30
  },
  {
    "name": "Vintage Fleece Vest - 706",
    "description": "A vintage vest made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 43.99,
    "countInStock": 70,
    "sku": "GEN-1777784926964-706",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Pink"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Vintage Fleece Vest - 706 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Vintage Fleece Vest - 706 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 37
  },
  {
    "name": "Elegant Polyester Skirt - 707",
    "description": "A elegant skirt made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 24.99,
    "countInStock": 9,
    "sku": "GEN-1777784926964-707",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Purple"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Polyester Skirt - 707 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Polyester Skirt - 707 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 98
  },
  {
    "name": "Casual Denim Skirt - 708",
    "description": "A casual skirt made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 24.99,
    "countInStock": 63,
    "sku": "GEN-1777784926964-708",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Brown"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Casual Denim Skirt - 708 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Casual Denim Skirt - 708 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 9
  },
  {
    "name": "Elegant Leather Dress - 709",
    "description": "A elegant dress made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 49.99,
    "discountPrice": 48.99,
    "countInStock": 90,
    "sku": "GEN-1777784926964-709",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Elegant Leather Dress - 709 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Elegant Leather Dress - 709 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 7
  },
  {
    "name": "Modern Polyester Jacket - 710",
    "description": "A modern jacket made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 59.99,
    "countInStock": 6,
    "sku": "GEN-1777784926964-710",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Purple"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Modern Polyester Jacket - 710 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Modern Polyester Jacket - 710 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 61
  },
  {
    "name": "Durable Fleece Shorts - 711",
    "description": "A durable shorts made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 105.99,
    "countInStock": 62,
    "sku": "GEN-1777784926964-711",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "White"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Durable Fleece Shorts - 711 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Durable Fleece Shorts - 711 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 51
  },
  {
    "name": "Premium Spandex Jeans - 712",
    "description": "A premium jeans made from high-quality spandex. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 20.99,
    "discountPrice": 17.99,
    "countInStock": 73,
    "sku": "GEN-1777784926964-712",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "collections": "Business Casual",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Premium Spandex Jeans - 712 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Premium Spandex Jeans - 712 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 0
  },
  {
    "name": "Elegant Nylon Jeans - 713",
    "description": "A elegant jeans made from high-quality nylon. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 24.99,
    "countInStock": 70,
    "sku": "GEN-1777784926964-713",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Pink"
    ],
    "collections": "Evening Collection",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Elegant Nylon Jeans - 713 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Elegant Nylon Jeans - 713 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 22
  },
  {
    "name": "Urban Leather Sweater - 714",
    "description": "A urban sweater made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 79.99,
    "discountPrice": 73.99,
    "countInStock": 63,
    "sku": "GEN-1777784926964-714",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Black"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Urban Leather Sweater - 714 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Urban Leather Sweater - 714 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 20
  },
  {
    "name": "Rustic Silk Pants - 715",
    "description": "A rustic pants made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 53.99,
    "discountPrice": 48.99,
    "countInStock": 16,
    "sku": "GEN-1777784926964-715",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Rustic Silk Pants - 715 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Rustic Silk Pants - 715 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 86
  },
  {
    "name": "Lightweight Leather Blazer - 716",
    "description": "A lightweight blazer made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 109.99,
    "countInStock": 91,
    "sku": "GEN-1777784926964-716",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Yellow"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Lightweight Leather Blazer - 716 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Lightweight Leather Blazer - 716 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 4
  },
  {
    "name": "Sleek Silk Shirt - 717",
    "description": "A sleek shirt made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 82.99,
    "countInStock": 83,
    "sku": "GEN-1777784926964-717",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Green"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Sleek Silk Shirt - 717 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Sleek Silk Shirt - 717 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 97
  },
  {
    "name": "Lightweight Wool Jacket - 718",
    "description": "A lightweight jacket made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 26.99,
    "discountPrice": 22.99,
    "countInStock": 67,
    "sku": "GEN-1777784926964-718",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Black"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Lightweight Wool Jacket - 718 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Lightweight Wool Jacket - 718 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 85
  },
  {
    "name": "Durable Linen Jacket - 719",
    "description": "A durable jacket made from high-quality linen. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 83.99,
    "discountPrice": 78.99,
    "countInStock": 9,
    "sku": "GEN-1777784926964-719",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Durable Linen Jacket - 719 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Durable Linen Jacket - 719 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 3
  },
  {
    "name": "Vintage Linen T-Shirt - 720",
    "description": "A vintage t-shirt made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 29.99,
    "discountPrice": 23.99,
    "countInStock": 96,
    "sku": "GEN-1777784926964-720",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Gray"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Vintage Linen T-Shirt - 720 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Vintage Linen T-Shirt - 720 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 47
  },
  {
    "name": "Sleek Denim Coat - 721",
    "description": "A sleek coat made from high-quality denim. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 53.99,
    "countInStock": 82,
    "sku": "GEN-1777784926964-721",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Green"
    ],
    "collections": "Summer Collection",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Sleek Denim Coat - 721 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Sleek Denim Coat - 721 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 14
  },
  {
    "name": "Durable Wool Shorts - 722",
    "description": "A durable shorts made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 85.99,
    "discountPrice": 79.99,
    "countInStock": 13,
    "sku": "GEN-1777784926964-722",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Durable Wool Shorts - 722 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Durable Wool Shorts - 722 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 66
  },
  {
    "name": "Lightweight Leather Coat - 723",
    "description": "A lightweight coat made from high-quality leather. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 39.99,
    "countInStock": 97,
    "sku": "GEN-1777784926964-723",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Lightweight Leather Coat - 723 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Lightweight Leather Coat - 723 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 58
  },
  {
    "name": "Classic Linen Coat - 724",
    "description": "A classic coat made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 117.99,
    "countInStock": 69,
    "sku": "GEN-1777784926964-724",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Black"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Classic Linen Coat - 724 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Classic Linen Coat - 724 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 91
  },
  {
    "name": "Lightweight Polyester Vest - 725",
    "description": "A lightweight vest made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 101.99,
    "countInStock": 97,
    "sku": "GEN-1777784926964-725",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Lightweight Polyester Vest - 725 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Lightweight Polyester Vest - 725 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 29
  },
  {
    "name": "Lightweight Silk T-Shirt - 726",
    "description": "A lightweight t-shirt made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 39.99,
    "discountPrice": 31.990000000000002,
    "countInStock": 7,
    "sku": "GEN-1777784926964-726",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Lightweight Silk T-Shirt - 726 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Lightweight Silk T-Shirt - 726 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 23
  },
  {
    "name": "Rustic Spandex Pants - 727",
    "description": "A rustic pants made from high-quality spandex. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 106.99,
    "countInStock": 35,
    "sku": "GEN-1777784926964-727",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Navy"
    ],
    "collections": "Athleisure",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Rustic Spandex Pants - 727 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Rustic Spandex Pants - 727 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 9
  },
  {
    "name": "Essential Fleece Vest - 728",
    "description": "A essential vest made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 69.99,
    "countInStock": 11,
    "sku": "GEN-1777784926964-728",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Pink"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Essential Fleece Vest - 728 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Essential Fleece Vest - 728 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 75
  },
  {
    "name": "Casual Cotton Cardigan - 729",
    "description": "A casual cardigan made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 85.99,
    "discountPrice": 82.99,
    "countInStock": 93,
    "sku": "GEN-1777784926964-729",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Blue"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Cotton Cardigan - 729 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Cotton Cardigan - 729 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 23
  },
  {
    "name": "Lightweight Wool Vest - 730",
    "description": "A lightweight vest made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 60.99,
    "countInStock": 60,
    "sku": "GEN-1777784926964-730",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Black"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Lightweight Wool Vest - 730 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Lightweight Wool Vest - 730 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 23
  },
  {
    "name": "Vintage Denim Sweater - 731",
    "description": "A vintage sweater made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 106.99,
    "discountPrice": 105.99,
    "countInStock": 30,
    "sku": "GEN-1777784926964-731",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "White"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Vintage Denim Sweater - 731 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Vintage Denim Sweater - 731 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 28
  },
  {
    "name": "Classic Denim Skirt - 732",
    "description": "A classic skirt made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 67.99,
    "countInStock": 21,
    "sku": "GEN-1777784926964-732",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Purple"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Classic Denim Skirt - 732 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Classic Denim Skirt - 732 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 30
  },
  {
    "name": "Sleek Denim Shorts - 733",
    "description": "A sleek shorts made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 24.99,
    "discountPrice": 20.99,
    "countInStock": 2,
    "sku": "GEN-1777784926964-733",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Brown"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Sleek Denim Shorts - 733 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Sleek Denim Shorts - 733 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 88
  },
  {
    "name": "Rustic Cotton Pants - 734",
    "description": "A rustic pants made from high-quality cotton. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 39.99,
    "countInStock": 6,
    "sku": "GEN-1777784926964-734",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Pink"
    ],
    "collections": "Athleisure",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Rustic Cotton Pants - 734 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Rustic Cotton Pants - 734 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 17
  },
  {
    "name": "Chic Nylon Sweater - 735",
    "description": "A chic sweater made from high-quality nylon. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 37.99,
    "countInStock": 89,
    "sku": "GEN-1777784926964-735",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Black"
    ],
    "collections": "Summer Collection",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Chic Nylon Sweater - 735 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Chic Nylon Sweater - 735 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 29
  },
  {
    "name": "Sporty Cotton Jacket - 736",
    "description": "A sporty jacket made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 101.99,
    "countInStock": 34,
    "sku": "GEN-1777784926964-736",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Green"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Sporty Cotton Jacket - 736 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Sporty Cotton Jacket - 736 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 63
  },
  {
    "name": "Chic Polyester Blazer - 737",
    "description": "A chic blazer made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 96.99,
    "countInStock": 5,
    "sku": "GEN-1777784926964-737",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Pink"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Chic Polyester Blazer - 737 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Chic Polyester Blazer - 737 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 15
  },
  {
    "name": "Durable Leather Skirt - 738",
    "description": "A durable skirt made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 102.99,
    "countInStock": 8,
    "sku": "GEN-1777784926964-738",
    "category": "Bottom Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Durable Leather Skirt - 738 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Durable Leather Skirt - 738 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 11
  },
  {
    "name": "Essential Cotton Sweater - 739",
    "description": "A essential sweater made from high-quality cotton. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 21.99,
    "countInStock": 84,
    "sku": "GEN-1777784926964-739",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black"
    ],
    "collections": "Athleisure",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Essential Cotton Sweater - 739 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Essential Cotton Sweater - 739 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 48
  },
  {
    "name": "Lightweight Polyester Vest - 740",
    "description": "A lightweight vest made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 80.99,
    "discountPrice": 72.99,
    "countInStock": 74,
    "sku": "GEN-1777784926964-740",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Teal"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Lightweight Polyester Vest - 740 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Lightweight Polyester Vest - 740 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 31
  },
  {
    "name": "Sporty Spandex T-Shirt - 741",
    "description": "A sporty t-shirt made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 109.99,
    "discountPrice": 99.99,
    "countInStock": 68,
    "sku": "GEN-1777784926964-741",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Maroon"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Sporty Spandex T-Shirt - 741 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Sporty Spandex T-Shirt - 741 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 86
  },
  {
    "name": "Cozy Wool Cardigan - 742",
    "description": "A cozy cardigan made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 72.99,
    "countInStock": 79,
    "sku": "GEN-1777784926964-742",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Olive"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Cozy Wool Cardigan - 742 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Cozy Wool Cardigan - 742 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 90
  },
  {
    "name": "Cozy Cotton Coat - 743",
    "description": "A cozy coat made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 37.99,
    "discountPrice": 35.99,
    "countInStock": 64,
    "sku": "GEN-1777784926964-743",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Black"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Cozy Cotton Coat - 743 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Cozy Cotton Coat - 743 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 89
  },
  {
    "name": "Lightweight Denim Skirt - 744",
    "description": "A lightweight skirt made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 75.99,
    "discountPrice": 67.99,
    "countInStock": 15,
    "sku": "GEN-1777784926964-744",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Teal"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Lightweight Denim Skirt - 744 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Lightweight Denim Skirt - 744 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 27
  },
  {
    "name": "Rustic Polyester Coat - 745",
    "description": "A rustic coat made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 29.99,
    "discountPrice": 25.99,
    "countInStock": 39,
    "sku": "GEN-1777784926964-745",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Blue"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Rustic Polyester Coat - 745 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Rustic Polyester Coat - 745 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 30
  },
  {
    "name": "Chic Leather Sweater - 746",
    "description": "A chic sweater made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 92.99,
    "countInStock": 97,
    "sku": "GEN-1777784926964-746",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Brown"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Chic Leather Sweater - 746 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Chic Leather Sweater - 746 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 92
  },
  {
    "name": "Premium Silk Shorts - 747",
    "description": "A premium shorts made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 29.99,
    "discountPrice": 21.99,
    "countInStock": 23,
    "sku": "GEN-1777784926964-747",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Yellow"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Premium Silk Shorts - 747 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Premium Silk Shorts - 747 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 25
  },
  {
    "name": "Urban Cotton Blazer - 748",
    "description": "A urban blazer made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 83.99,
    "discountPrice": 74.99,
    "countInStock": 64,
    "sku": "GEN-1777784926964-748",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Pink"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Urban Cotton Blazer - 748 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Urban Cotton Blazer - 748 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 93
  },
  {
    "name": "Premium Wool Dress - 749",
    "description": "A premium dress made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 103.99,
    "countInStock": 75,
    "sku": "GEN-1777784926964-749",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Premium Wool Dress - 749 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Premium Wool Dress - 749 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 43
  },
  {
    "name": "Premium Polyester Shirt - 750",
    "description": "A premium shirt made from high-quality polyester. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 78.99,
    "countInStock": 1,
    "sku": "GEN-1777784926964-750",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Navy"
    ],
    "collections": "Everyday Basics",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Premium Polyester Shirt - 750 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Premium Polyester Shirt - 750 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 71
  },
  {
    "name": "Casual Wool Jeans - 751",
    "description": "A casual jeans made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 96.99,
    "countInStock": 99,
    "sku": "GEN-1777784926964-751",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "White"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Wool Jeans - 751 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Wool Jeans - 751 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 29
  },
  {
    "name": "Premium Wool Vest - 752",
    "description": "A premium vest made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 70.99,
    "discountPrice": 68.99,
    "countInStock": 35,
    "sku": "GEN-1777784926964-752",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Premium Wool Vest - 752 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Premium Wool Vest - 752 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 90
  },
  {
    "name": "Modern Linen Cardigan - 753",
    "description": "A modern cardigan made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 23.99,
    "countInStock": 34,
    "sku": "GEN-1777784926964-753",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Blue"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Modern Linen Cardigan - 753 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Modern Linen Cardigan - 753 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 6
  },
  {
    "name": "Classic Leather Dress - 754",
    "description": "A classic dress made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 71.99,
    "countInStock": 25,
    "sku": "GEN-1777784926964-754",
    "category": "Dresses",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "White"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Classic Leather Dress - 754 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Classic Leather Dress - 754 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 52
  },
  {
    "name": "Premium Linen T-Shirt - 755",
    "description": "A premium t-shirt made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 43.99,
    "countInStock": 43,
    "sku": "GEN-1777784926964-755",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Teal"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Premium Linen T-Shirt - 755 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Premium Linen T-Shirt - 755 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 10
  },
  {
    "name": "Elegant Silk Jacket - 756",
    "description": "A elegant jacket made from high-quality silk. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 22.99,
    "countInStock": 85,
    "sku": "GEN-1777784926964-756",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Elegant Silk Jacket - 756 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Elegant Silk Jacket - 756 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 56
  },
  {
    "name": "Chic Denim T-Shirt - 757",
    "description": "A chic t-shirt made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 95.99,
    "countInStock": 52,
    "sku": "GEN-1777784926964-757",
    "category": "Dresses",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Chic Denim T-Shirt - 757 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Chic Denim T-Shirt - 757 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 63
  },
  {
    "name": "Casual Wool Jeans - 758",
    "description": "A casual jeans made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 31.99,
    "discountPrice": 26.99,
    "countInStock": 30,
    "sku": "GEN-1777784926964-758",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Navy"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Wool Jeans - 758 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Casual Wool Jeans - 758 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 59
  },
  {
    "name": "Modern Denim Skirt - 759",
    "description": "A modern skirt made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 53.99,
    "discountPrice": 48.99,
    "countInStock": 55,
    "sku": "GEN-1777784926964-759",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Gray"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Modern Denim Skirt - 759 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Modern Denim Skirt - 759 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 18
  },
  {
    "name": "Casual Leather Coat - 760",
    "description": "A casual coat made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 103.99,
    "discountPrice": 101.99,
    "countInStock": 42,
    "sku": "GEN-1777784926964-760",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Green"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Casual Leather Coat - 760 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Casual Leather Coat - 760 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 86
  },
  {
    "name": "Premium Leather Jacket - 761",
    "description": "A premium jacket made from high-quality leather. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 79.99,
    "countInStock": 53,
    "sku": "GEN-1777784926964-761",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Gray"
    ],
    "collections": "Summer Collection",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Premium Leather Jacket - 761 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Premium Leather Jacket - 761 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 58
  },
  {
    "name": "Urban Leather Shirt - 762",
    "description": "A urban shirt made from high-quality leather. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 97.99,
    "discountPrice": 89.99,
    "countInStock": 54,
    "sku": "GEN-1777784926964-762",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Urban Leather Shirt - 762 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Urban Leather Shirt - 762 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 17
  },
  {
    "name": "Cozy Silk Coat - 763",
    "description": "A cozy coat made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 62.99,
    "countInStock": 73,
    "sku": "GEN-1777784926964-763",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Cozy Silk Coat - 763 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Cozy Silk Coat - 763 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 74
  },
  {
    "name": "Durable Linen Cardigan - 764",
    "description": "A durable cardigan made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 100.99,
    "countInStock": 38,
    "sku": "GEN-1777784926964-764",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Red"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Linen Cardigan - 764 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Durable Linen Cardigan - 764 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 95
  },
  {
    "name": "Classic Linen Vest - 765",
    "description": "A classic vest made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 94.99,
    "discountPrice": 87.99,
    "countInStock": 53,
    "sku": "GEN-1777784926964-765",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Olive"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Linen Vest - 765 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Linen Vest - 765 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 88
  },
  {
    "name": "Essential Wool Dress - 766",
    "description": "A essential dress made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 98.99,
    "countInStock": 8,
    "sku": "GEN-1777784926964-766",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Essential Wool Dress - 766 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Essential Wool Dress - 766 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 8
  },
  {
    "name": "Urban Fleece Pants - 767",
    "description": "A urban pants made from high-quality fleece. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 59.99,
    "countInStock": 21,
    "sku": "GEN-1777784926964-767",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Teal"
    ],
    "collections": "Business Casual",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Urban Fleece Pants - 767 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Urban Fleece Pants - 767 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 99
  },
  {
    "name": "Urban Wool Dress - 768",
    "description": "A urban dress made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 91.99,
    "discountPrice": 90.99,
    "countInStock": 2,
    "sku": "GEN-1777784926964-768",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Maroon"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Urban Wool Dress - 768 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Urban Wool Dress - 768 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 65
  },
  {
    "name": "Casual Denim Skirt - 769",
    "description": "A casual skirt made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 36.99,
    "discountPrice": 32.99,
    "countInStock": 97,
    "sku": "GEN-1777784926964-769",
    "category": "Dresses",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Black"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Casual Denim Skirt - 769 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Casual Denim Skirt - 769 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 38
  },
  {
    "name": "Classic Linen Hoodie - 770",
    "description": "A classic hoodie made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 51.99,
    "countInStock": 82,
    "sku": "GEN-1777784926964-770",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Purple"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Classic Linen Hoodie - 770 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Classic Linen Hoodie - 770 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 96
  },
  {
    "name": "Essential Wool Hoodie - 771",
    "description": "A essential hoodie made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 24.99,
    "discountPrice": 20.99,
    "countInStock": 92,
    "sku": "GEN-1777784926964-771",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Red"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Essential Wool Hoodie - 771 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Essential Wool Hoodie - 771 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 13
  },
  {
    "name": "Cozy Denim Cardigan - 772",
    "description": "A cozy cardigan made from high-quality denim. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 74.99,
    "discountPrice": 67.99,
    "countInStock": 61,
    "sku": "GEN-1777784926964-772",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Cozy Denim Cardigan - 772 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Cozy Denim Cardigan - 772 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 80
  },
  {
    "name": "Lightweight Wool Jacket - 773",
    "description": "A lightweight jacket made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 20.99,
    "countInStock": 65,
    "sku": "GEN-1777784926964-773",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Lightweight Wool Jacket - 773 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Lightweight Wool Jacket - 773 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 26
  },
  {
    "name": "Chic Linen Hoodie - 774",
    "description": "A chic hoodie made from high-quality linen. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 85.99,
    "discountPrice": 75.99,
    "countInStock": 87,
    "sku": "GEN-1777784926964-774",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Chic Linen Hoodie - 774 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Chic Linen Hoodie - 774 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 99
  },
  {
    "name": "Premium Fleece Pants - 775",
    "description": "A premium pants made from high-quality fleece. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 118.99,
    "countInStock": 11,
    "sku": "GEN-1777784926964-775",
    "category": "Dresses",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Gray"
    ],
    "collections": "Business Casual",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Premium Fleece Pants - 775 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Premium Fleece Pants - 775 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 68
  },
  {
    "name": "Essential Polyester Jeans - 776",
    "description": "A essential jeans made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 106.99,
    "countInStock": 65,
    "sku": "GEN-1777784926964-776",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Navy"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Essential Polyester Jeans - 776 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Essential Polyester Jeans - 776 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 73
  },
  {
    "name": "Cozy Silk Jacket - 777",
    "description": "A cozy jacket made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 86.99,
    "countInStock": 3,
    "sku": "GEN-1777784926964-777",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Cozy Silk Jacket - 777 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Cozy Silk Jacket - 777 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 32
  },
  {
    "name": "Vintage Fleece T-Shirt - 778",
    "description": "A vintage t-shirt made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 87.99,
    "discountPrice": 82.99,
    "countInStock": 35,
    "sku": "GEN-1777784926964-778",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Vintage Fleece T-Shirt - 778 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Vintage Fleece T-Shirt - 778 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 55
  },
  {
    "name": "Durable Denim Shirt - 779",
    "description": "A durable shirt made from high-quality denim. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 89.99,
    "discountPrice": 87.99,
    "countInStock": 6,
    "sku": "GEN-1777784926964-779",
    "category": "Dresses",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Maroon"
    ],
    "collections": "Summer Collection",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Durable Denim Shirt - 779 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Durable Denim Shirt - 779 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 66
  },
  {
    "name": "Elegant Silk Skirt - 780",
    "description": "A elegant skirt made from high-quality silk. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 40.99,
    "discountPrice": 30.990000000000002,
    "countInStock": 48,
    "sku": "GEN-1777784926964-780",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Navy"
    ],
    "collections": "Summer Collection",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Silk Skirt - 780 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Elegant Silk Skirt - 780 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 26
  },
  {
    "name": "Sleek Leather Dress - 781",
    "description": "A sleek dress made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 83.99,
    "countInStock": 63,
    "sku": "GEN-1777784926964-781",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Navy"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Sleek Leather Dress - 781 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Sleek Leather Dress - 781 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 17
  },
  {
    "name": "Durable Silk Shirt - 782",
    "description": "A durable shirt made from high-quality silk. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 70.99,
    "discountPrice": 67.99,
    "countInStock": 38,
    "sku": "GEN-1777784926964-782",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Yellow"
    ],
    "collections": "Summer Collection",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Durable Silk Shirt - 782 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Durable Silk Shirt - 782 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 35
  },
  {
    "name": "Premium Denim Jeans - 783",
    "description": "A premium jeans made from high-quality denim. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 53.99,
    "countInStock": 90,
    "sku": "GEN-1777784926964-783",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Yellow"
    ],
    "collections": "Summer Collection",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Premium Denim Jeans - 783 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Premium Denim Jeans - 783 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 11
  },
  {
    "name": "Essential Fleece Shorts - 784",
    "description": "A essential shorts made from high-quality fleece. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 93.99,
    "countInStock": 65,
    "sku": "GEN-1777784926964-784",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Olive"
    ],
    "collections": "Business Casual",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Essential Fleece Shorts - 784 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Essential Fleece Shorts - 784 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 96
  },
  {
    "name": "Sleek Polyester Vest - 785",
    "description": "A sleek vest made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 97.99,
    "discountPrice": 94.99,
    "countInStock": 94,
    "sku": "GEN-1777784926964-785",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Black"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Sleek Polyester Vest - 785 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Sleek Polyester Vest - 785 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 26
  },
  {
    "name": "Modern Wool Blazer - 786",
    "description": "A modern blazer made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 31.99,
    "discountPrice": 28.99,
    "countInStock": 94,
    "sku": "GEN-1777784926964-786",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Purple"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Modern Wool Blazer - 786 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Modern Wool Blazer - 786 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 75
  },
  {
    "name": "Elegant Silk Hoodie - 787",
    "description": "A elegant hoodie made from high-quality silk. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 32.99,
    "discountPrice": 28.990000000000002,
    "countInStock": 50,
    "sku": "GEN-1777784926964-787",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Green"
    ],
    "collections": "Athleisure",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Elegant Silk Hoodie - 787 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Elegant Silk Hoodie - 787 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 9
  },
  {
    "name": "Casual Nylon Jacket - 788",
    "description": "A casual jacket made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 50.99,
    "countInStock": 30,
    "sku": "GEN-1777784926964-788",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Casual Nylon Jacket - 788 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Casual Nylon Jacket - 788 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 23
  },
  {
    "name": "Urban Cotton Hoodie - 789",
    "description": "A urban hoodie made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 40.99,
    "countInStock": 22,
    "sku": "GEN-1777784926964-789",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "White"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Cotton Hoodie - 789 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Cotton Hoodie - 789 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 75
  },
  {
    "name": "Cozy Polyester Hoodie - 790",
    "description": "A cozy hoodie made from high-quality polyester. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 98.99,
    "countInStock": 92,
    "sku": "GEN-1777784926964-790",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Cozy Polyester Hoodie - 790 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Cozy Polyester Hoodie - 790 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 4
  },
  {
    "name": "Sleek Cotton Hoodie - 791",
    "description": "A sleek hoodie made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 81.99,
    "discountPrice": 75.99,
    "countInStock": 8,
    "sku": "GEN-1777784926964-791",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Red"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sleek Cotton Hoodie - 791 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sleek Cotton Hoodie - 791 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 46
  },
  {
    "name": "Elegant Denim Blazer - 792",
    "description": "A elegant blazer made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 110.99,
    "countInStock": 28,
    "sku": "GEN-1777784926964-792",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Teal"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Elegant Denim Blazer - 792 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Elegant Denim Blazer - 792 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 69
  },
  {
    "name": "Cozy Fleece Blazer - 793",
    "description": "A cozy blazer made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 111.99,
    "discountPrice": 106.99,
    "countInStock": 26,
    "sku": "GEN-1777784926964-793",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Red"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Cozy Fleece Blazer - 793 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Cozy Fleece Blazer - 793 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 19
  },
  {
    "name": "Rustic Fleece Vest - 794",
    "description": "A rustic vest made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 100.99,
    "discountPrice": 94.99,
    "countInStock": 9,
    "sku": "GEN-1777784926964-794",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Rustic Fleece Vest - 794 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Rustic Fleece Vest - 794 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 16
  },
  {
    "name": "Casual Denim Cardigan - 795",
    "description": "A casual cardigan made from high-quality denim. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 52.99,
    "discountPrice": 49.99,
    "countInStock": 25,
    "sku": "GEN-1777784926964-795",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Black"
    ],
    "collections": "Business Casual",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Denim Cardigan - 795 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Denim Cardigan - 795 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 12
  },
  {
    "name": "Vintage Fleece Jeans - 796",
    "description": "A vintage jeans made from high-quality fleece. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 27.99,
    "discountPrice": 23.99,
    "countInStock": 69,
    "sku": "GEN-1777784926964-796",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Beige"
    ],
    "collections": "Evening Collection",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Vintage Fleece Jeans - 796 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Vintage Fleece Jeans - 796 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 37
  },
  {
    "name": "Sleek Polyester Jacket - 797",
    "description": "A sleek jacket made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 118.99,
    "countInStock": 83,
    "sku": "GEN-1777784926964-797",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Pink"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Sleek Polyester Jacket - 797 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Sleek Polyester Jacket - 797 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 92
  },
  {
    "name": "Premium Spandex Blazer - 798",
    "description": "A premium blazer made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 52.99,
    "discountPrice": 42.99,
    "countInStock": 61,
    "sku": "GEN-1777784926964-798",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Premium Spandex Blazer - 798 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Premium Spandex Blazer - 798 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 25
  },
  {
    "name": "Urban Nylon Jacket - 799",
    "description": "A urban jacket made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 53.99,
    "discountPrice": 43.99,
    "countInStock": 29,
    "sku": "GEN-1777784926964-799",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Beige"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Urban Nylon Jacket - 799 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Urban Nylon Jacket - 799 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 44
  },
  {
    "name": "Chic Fleece Jacket - 800",
    "description": "A chic jacket made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 81.99,
    "countInStock": 52,
    "sku": "GEN-1777784926964-800",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Blue"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Chic Fleece Jacket - 800 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Chic Fleece Jacket - 800 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 35
  },
  {
    "name": "Urban Linen Hoodie - 801",
    "description": "A urban hoodie made from high-quality linen. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 119.99,
    "discountPrice": 112.99,
    "countInStock": 92,
    "sku": "GEN-1777784926964-801",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Teal"
    ],
    "collections": "Business Casual",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Linen Hoodie - 801 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Urban Linen Hoodie - 801 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 52
  },
  {
    "name": "Durable Wool T-Shirt - 802",
    "description": "A durable t-shirt made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 51.99,
    "countInStock": 84,
    "sku": "GEN-1777784926964-802",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Durable Wool T-Shirt - 802 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Durable Wool T-Shirt - 802 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 18
  },
  {
    "name": "Casual Nylon T-Shirt - 803",
    "description": "A casual t-shirt made from high-quality nylon. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 106.99,
    "countInStock": 70,
    "sku": "GEN-1777784926964-803",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Red"
    ],
    "collections": "Summer Collection",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Casual Nylon T-Shirt - 803 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Casual Nylon T-Shirt - 803 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 2
  },
  {
    "name": "Classic Fleece Vest - 804",
    "description": "A classic vest made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 57.99,
    "discountPrice": 47.99,
    "countInStock": 92,
    "sku": "GEN-1777784926964-804",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Brown"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Fleece Vest - 804 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Fleece Vest - 804 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 4
  },
  {
    "name": "Cozy Polyester Hoodie - 805",
    "description": "A cozy hoodie made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 51.99,
    "countInStock": 93,
    "sku": "GEN-1777784926964-805",
    "category": "Dresses",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Brown"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Cozy Polyester Hoodie - 805 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Cozy Polyester Hoodie - 805 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 49
  },
  {
    "name": "Cozy Silk Shorts - 806",
    "description": "A cozy shorts made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 51.99,
    "countInStock": 28,
    "sku": "GEN-1777784926964-806",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Teal"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Cozy Silk Shorts - 806 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Cozy Silk Shorts - 806 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 3
  },
  {
    "name": "Classic Silk Shorts - 807",
    "description": "A classic shorts made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 109.99,
    "discountPrice": 108.99,
    "countInStock": 26,
    "sku": "GEN-1777784926964-807",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Navy"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Classic Silk Shorts - 807 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Classic Silk Shorts - 807 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 7
  },
  {
    "name": "Premium Polyester Shorts - 808",
    "description": "A premium shorts made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 100.99,
    "discountPrice": 92.99,
    "countInStock": 56,
    "sku": "GEN-1777784926964-808",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Brown"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Premium Polyester Shorts - 808 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Premium Polyester Shorts - 808 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 58
  },
  {
    "name": "Casual Polyester Skirt - 809",
    "description": "A casual skirt made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 70.99,
    "countInStock": 9,
    "sku": "GEN-1777784926964-809",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Teal"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Casual Polyester Skirt - 809 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Casual Polyester Skirt - 809 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 69
  },
  {
    "name": "Sporty Nylon Hoodie - 810",
    "description": "A sporty hoodie made from high-quality nylon. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 35.99,
    "discountPrice": 27.990000000000002,
    "countInStock": 57,
    "sku": "GEN-1777784926964-810",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Red"
    ],
    "collections": "Evening Collection",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sporty Nylon Hoodie - 810 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sporty Nylon Hoodie - 810 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 58
  },
  {
    "name": "Rustic Polyester Pants - 811",
    "description": "A rustic pants made from high-quality polyester. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 119.99,
    "discountPrice": 110.99,
    "countInStock": 22,
    "sku": "GEN-1777784926964-811",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Beige"
    ],
    "collections": "Athleisure",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Rustic Polyester Pants - 811 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Rustic Polyester Pants - 811 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 35
  },
  {
    "name": "Lightweight Silk Pants - 812",
    "description": "A lightweight pants made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 61.99,
    "discountPrice": 54.99,
    "countInStock": 6,
    "sku": "GEN-1777784926964-812",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Lightweight Silk Pants - 812 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Lightweight Silk Pants - 812 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 67
  },
  {
    "name": "Sleek Wool Pants - 813",
    "description": "A sleek pants made from high-quality wool. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 107.99,
    "countInStock": 7,
    "sku": "GEN-1777784926964-813",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Sleek Wool Pants - 813 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Sleek Wool Pants - 813 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 20
  },
  {
    "name": "Modern Denim Shorts - 814",
    "description": "A modern shorts made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 102.99,
    "countInStock": 82,
    "sku": "GEN-1777784926964-814",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Black"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Modern Denim Shorts - 814 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Modern Denim Shorts - 814 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 58
  },
  {
    "name": "Classic Wool Vest - 815",
    "description": "A classic vest made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 55.99,
    "discountPrice": 51.99,
    "countInStock": 96,
    "sku": "GEN-1777784926964-815",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Gray"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Wool Vest - 815 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Classic Wool Vest - 815 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 58
  },
  {
    "name": "Urban Cotton Skirt - 816",
    "description": "A urban skirt made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 41.99,
    "countInStock": 87,
    "sku": "GEN-1777784926964-816",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Black"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Cotton Skirt - 816 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Urban Cotton Skirt - 816 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 2
  },
  {
    "name": "Lightweight Silk Shirt - 817",
    "description": "A lightweight shirt made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 35.99,
    "discountPrice": 25.990000000000002,
    "countInStock": 29,
    "sku": "GEN-1777784926964-817",
    "category": "Top Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Yellow"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Lightweight Silk Shirt - 817 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Lightweight Silk Shirt - 817 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 21
  },
  {
    "name": "Sleek Fleece Sweater - 818",
    "description": "A sleek sweater made from high-quality fleece. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 90.99,
    "countInStock": 38,
    "sku": "GEN-1777784926964-818",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Yellow"
    ],
    "collections": "Athleisure",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sleek Fleece Sweater - 818 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sleek Fleece Sweater - 818 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 16
  },
  {
    "name": "Lightweight Spandex Jacket - 819",
    "description": "A lightweight jacket made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 83.99,
    "countInStock": 20,
    "sku": "GEN-1777784926964-819",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "White"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Lightweight Spandex Jacket - 819 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Lightweight Spandex Jacket - 819 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 30
  },
  {
    "name": "Classic Polyester Pants - 820",
    "description": "A classic pants made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 72.99,
    "discountPrice": 65.99,
    "countInStock": 7,
    "sku": "GEN-1777784926964-820",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Yellow"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Polyester Pants - 820 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Polyester Pants - 820 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 50
  },
  {
    "name": "Modern Fleece Skirt - 821",
    "description": "A modern skirt made from high-quality fleece. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 88.99,
    "discountPrice": 82.99,
    "countInStock": 23,
    "sku": "GEN-1777784926964-821",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Blue"
    ],
    "collections": "Evening Collection",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Modern Fleece Skirt - 821 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Modern Fleece Skirt - 821 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 26
  },
  {
    "name": "Premium Wool Vest - 822",
    "description": "A premium vest made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 97.99,
    "countInStock": 51,
    "sku": "GEN-1777784926964-822",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Yellow"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Premium Wool Vest - 822 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Premium Wool Vest - 822 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 82
  },
  {
    "name": "Essential Polyester Shirt - 823",
    "description": "A essential shirt made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 83.99,
    "countInStock": 1,
    "sku": "GEN-1777784926964-823",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Navy"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Essential Polyester Shirt - 823 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Essential Polyester Shirt - 823 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 90
  },
  {
    "name": "Durable Fleece T-Shirt - 824",
    "description": "A durable t-shirt made from high-quality fleece. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 109.99,
    "discountPrice": 101.99,
    "countInStock": 62,
    "sku": "GEN-1777784926964-824",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Durable Fleece T-Shirt - 824 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Durable Fleece T-Shirt - 824 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 26
  },
  {
    "name": "Cozy Spandex Coat - 825",
    "description": "A cozy coat made from high-quality spandex. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 35.99,
    "countInStock": 15,
    "sku": "GEN-1777784926964-825",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "collections": "Business Casual",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Cozy Spandex Coat - 825 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Cozy Spandex Coat - 825 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 17
  },
  {
    "name": "Sleek Spandex Sweater - 826",
    "description": "A sleek sweater made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 66.99,
    "countInStock": 25,
    "sku": "GEN-1777784926964-826",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Beige"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sleek Spandex Sweater - 826 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sleek Spandex Sweater - 826 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 82
  },
  {
    "name": "Sporty Cotton Hoodie - 827",
    "description": "A sporty hoodie made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 65.99,
    "countInStock": 46,
    "sku": "GEN-1777784926964-827",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "White"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sporty Cotton Hoodie - 827 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sporty Cotton Hoodie - 827 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 8
  },
  {
    "name": "Elegant Denim Coat - 828",
    "description": "A elegant coat made from high-quality denim. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 85.99,
    "countInStock": 96,
    "sku": "GEN-1777784926964-828",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Teal"
    ],
    "collections": "Everyday Basics",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Elegant Denim Coat - 828 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Elegant Denim Coat - 828 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 38
  },
  {
    "name": "Modern Cotton Sweater - 829",
    "description": "A modern sweater made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 34.99,
    "discountPrice": 33.99,
    "countInStock": 58,
    "sku": "GEN-1777784926964-829",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Modern Cotton Sweater - 829 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Modern Cotton Sweater - 829 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 52
  },
  {
    "name": "Modern Denim Pants - 830",
    "description": "A modern pants made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 103.99,
    "countInStock": 6,
    "sku": "GEN-1777784926964-830",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Green"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Modern Denim Pants - 830 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Modern Denim Pants - 830 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 31
  },
  {
    "name": "Chic Fleece Shirt - 831",
    "description": "A chic shirt made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 102.99,
    "countInStock": 68,
    "sku": "GEN-1777784926964-831",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Green"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Chic Fleece Shirt - 831 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Chic Fleece Shirt - 831 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 90
  },
  {
    "name": "Chic Leather Shorts - 832",
    "description": "A chic shorts made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 80.99,
    "countInStock": 55,
    "sku": "GEN-1777784926964-832",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Maroon"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Chic Leather Shorts - 832 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Chic Leather Shorts - 832 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 11
  },
  {
    "name": "Sleek Silk Jacket - 833",
    "description": "A sleek jacket made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 117.99,
    "countInStock": 83,
    "sku": "GEN-1777784926964-833",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Gray"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Sleek Silk Jacket - 833 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Sleek Silk Jacket - 833 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 28
  },
  {
    "name": "Classic Polyester Dress - 834",
    "description": "A classic dress made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 108.99,
    "countInStock": 85,
    "sku": "GEN-1777784926964-834",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Purple"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Classic Polyester Dress - 834 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Classic Polyester Dress - 834 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 67
  },
  {
    "name": "Sleek Leather Jeans - 835",
    "description": "A sleek jeans made from high-quality leather. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 50.99,
    "discountPrice": 48.99,
    "countInStock": 50,
    "sku": "GEN-1777784926964-835",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Brown"
    ],
    "collections": "Business Casual",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sleek Leather Jeans - 835 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sleek Leather Jeans - 835 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 99
  },
  {
    "name": "Chic Leather Coat - 836",
    "description": "A chic coat made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 30.99,
    "countInStock": 51,
    "sku": "GEN-1777784926964-836",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Chic Leather Coat - 836 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Chic Leather Coat - 836 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 97
  },
  {
    "name": "Elegant Leather Vest - 837",
    "description": "A elegant vest made from high-quality leather. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 66.99,
    "discountPrice": 61.989999999999995,
    "countInStock": 20,
    "sku": "GEN-1777784926964-837",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Leather Vest - 837 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Leather Vest - 837 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 26
  },
  {
    "name": "Classic Cotton Shirt - 838",
    "description": "A classic shirt made from high-quality cotton. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 38.99,
    "countInStock": 26,
    "sku": "GEN-1777784926964-838",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Gray"
    ],
    "collections": "Athleisure",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Classic Cotton Shirt - 838 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Classic Cotton Shirt - 838 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 0
  },
  {
    "name": "Lightweight Nylon Cardigan - 839",
    "description": "A lightweight cardigan made from high-quality nylon. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 94.99,
    "discountPrice": 89.99,
    "countInStock": 15,
    "sku": "GEN-1777784926964-839",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Yellow"
    ],
    "collections": "Business Casual",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Lightweight Nylon Cardigan - 839 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Lightweight Nylon Cardigan - 839 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 11
  },
  {
    "name": "Rustic Silk Shorts - 840",
    "description": "A rustic shorts made from high-quality silk. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 64.99,
    "discountPrice": 54.989999999999995,
    "countInStock": 64,
    "sku": "GEN-1777784926964-840",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Red"
    ],
    "collections": "Summer Collection",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Rustic Silk Shorts - 840 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Rustic Silk Shorts - 840 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 44
  },
  {
    "name": "Premium Nylon Jeans - 841",
    "description": "A premium jeans made from high-quality nylon. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 99.99,
    "discountPrice": 96.99,
    "countInStock": 13,
    "sku": "GEN-1777784926964-841",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Premium Nylon Jeans - 841 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Premium Nylon Jeans - 841 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 37
  },
  {
    "name": "Casual Wool Skirt - 842",
    "description": "A casual skirt made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 101.99,
    "countInStock": 77,
    "sku": "GEN-1777784926964-842",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Casual Wool Skirt - 842 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Casual Wool Skirt - 842 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 50
  },
  {
    "name": "Rustic Wool Jeans - 843",
    "description": "A rustic jeans made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 21.99,
    "discountPrice": 11.989999999999998,
    "countInStock": 25,
    "sku": "GEN-1777784926964-843",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Maroon"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Rustic Wool Jeans - 843 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Rustic Wool Jeans - 843 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 68
  },
  {
    "name": "Sporty Cotton Jacket - 844",
    "description": "A sporty jacket made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 96.99,
    "countInStock": 82,
    "sku": "GEN-1777784926964-844",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Olive"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Sporty Cotton Jacket - 844 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Sporty Cotton Jacket - 844 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 71
  },
  {
    "name": "Lightweight Leather Coat - 845",
    "description": "A lightweight coat made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 76.99,
    "countInStock": 42,
    "sku": "GEN-1777784926964-845",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Beige"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Lightweight Leather Coat - 845 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Lightweight Leather Coat - 845 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 76
  },
  {
    "name": "Sporty Linen Blazer - 846",
    "description": "A sporty blazer made from high-quality linen. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 56.99,
    "discountPrice": 46.99,
    "countInStock": 57,
    "sku": "GEN-1777784926964-846",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Blue"
    ],
    "collections": "Winter Wear",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sporty Linen Blazer - 846 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sporty Linen Blazer - 846 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 28
  },
  {
    "name": "Classic Wool Pants - 847",
    "description": "A classic pants made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 90.99,
    "discountPrice": 86.99,
    "countInStock": 20,
    "sku": "GEN-1777784926964-847",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Gray"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Wool Pants - 847 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Wool Pants - 847 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 85
  },
  {
    "name": "Premium Polyester Jeans - 848",
    "description": "A premium jeans made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 63.99,
    "countInStock": 95,
    "sku": "GEN-1777784926964-848",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Premium Polyester Jeans - 848 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Premium Polyester Jeans - 848 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 4
  },
  {
    "name": "Urban Silk Jeans - 849",
    "description": "A urban jeans made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 102.99,
    "countInStock": 35,
    "sku": "GEN-1777784926964-849",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Olive"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Urban Silk Jeans - 849 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Urban Silk Jeans - 849 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 46
  },
  {
    "name": "Classic Denim Sweater - 850",
    "description": "A classic sweater made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 36.99,
    "discountPrice": 34.99,
    "countInStock": 22,
    "sku": "GEN-1777784926964-850",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Maroon"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Classic Denim Sweater - 850 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Classic Denim Sweater - 850 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 49
  },
  {
    "name": "Urban Silk Vest - 851",
    "description": "A urban vest made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 49.99,
    "countInStock": 81,
    "sku": "GEN-1777784926964-851",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Green"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Urban Silk Vest - 851 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Urban Silk Vest - 851 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 17
  },
  {
    "name": "Elegant Silk Sweater - 852",
    "description": "A elegant sweater made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 83.99,
    "discountPrice": 77.99,
    "countInStock": 42,
    "sku": "GEN-1777784926964-852",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Elegant Silk Sweater - 852 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Elegant Silk Sweater - 852 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 77
  },
  {
    "name": "Rustic Polyester T-Shirt - 853",
    "description": "A rustic t-shirt made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 57.99,
    "countInStock": 34,
    "sku": "GEN-1777784926964-853",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Rustic Polyester T-Shirt - 853 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Rustic Polyester T-Shirt - 853 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 15
  },
  {
    "name": "Classic Silk Sweater - 854",
    "description": "A classic sweater made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 77.99,
    "countInStock": 67,
    "sku": "GEN-1777784926964-854",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Teal"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Classic Silk Sweater - 854 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Classic Silk Sweater - 854 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 77
  },
  {
    "name": "Casual Nylon Pants - 855",
    "description": "A casual pants made from high-quality nylon. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 63.99,
    "countInStock": 83,
    "sku": "GEN-1777784926964-855",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Purple"
    ],
    "collections": "Business Casual",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Casual Nylon Pants - 855 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Casual Nylon Pants - 855 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 79
  },
  {
    "name": "Classic Silk Blazer - 856",
    "description": "A classic blazer made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 94.99,
    "countInStock": 0,
    "sku": "GEN-1777784926964-856",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Gray"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Classic Silk Blazer - 856 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Classic Silk Blazer - 856 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 72
  },
  {
    "name": "Rustic Nylon Pants - 857",
    "description": "A rustic pants made from high-quality nylon. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 67.99,
    "countInStock": 35,
    "sku": "GEN-1777784926964-857",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Gray"
    ],
    "collections": "Athleisure",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Rustic Nylon Pants - 857 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Rustic Nylon Pants - 857 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 86
  },
  {
    "name": "Chic Spandex Sweater - 858",
    "description": "A chic sweater made from high-quality spandex. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 84.99,
    "discountPrice": 79.99,
    "countInStock": 61,
    "sku": "GEN-1777784926964-858",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon"
    ],
    "collections": "Evening Collection",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Chic Spandex Sweater - 858 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Chic Spandex Sweater - 858 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 41
  },
  {
    "name": "Lightweight Leather Shirt - 859",
    "description": "A lightweight shirt made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 72.99,
    "countInStock": 41,
    "sku": "GEN-1777784926964-859",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Lightweight Leather Shirt - 859 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Lightweight Leather Shirt - 859 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 53
  },
  {
    "name": "Casual Cotton Coat - 860",
    "description": "A casual coat made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 21.99,
    "discountPrice": 14.989999999999998,
    "countInStock": 74,
    "sku": "GEN-1777784926964-860",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Casual Cotton Coat - 860 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Casual Cotton Coat - 860 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 67
  },
  {
    "name": "Durable Cotton Dress - 861",
    "description": "A durable dress made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 45.99,
    "discountPrice": 35.99,
    "countInStock": 41,
    "sku": "GEN-1777784926964-861",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Green"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Durable Cotton Dress - 861 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Durable Cotton Dress - 861 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 57
  },
  {
    "name": "Essential Cotton Cardigan - 862",
    "description": "A essential cardigan made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 87.99,
    "countInStock": 84,
    "sku": "GEN-1777784926964-862",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Pink"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Essential Cotton Cardigan - 862 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Essential Cotton Cardigan - 862 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 74
  },
  {
    "name": "Durable Leather Blazer - 863",
    "description": "A durable blazer made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 108.99,
    "countInStock": 54,
    "sku": "GEN-1777784926964-863",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Brown"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Durable Leather Blazer - 863 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Durable Leather Blazer - 863 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 6
  },
  {
    "name": "Durable Fleece Coat - 864",
    "description": "A durable coat made from high-quality fleece. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 98.99,
    "countInStock": 40,
    "sku": "GEN-1777784926964-864",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Brown"
    ],
    "collections": "Summer Collection",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Durable Fleece Coat - 864 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Durable Fleece Coat - 864 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 99
  },
  {
    "name": "Urban Wool Blazer - 865",
    "description": "A urban blazer made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 61.99,
    "countInStock": 87,
    "sku": "GEN-1777784926964-865",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Pink"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Urban Wool Blazer - 865 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Urban Wool Blazer - 865 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 33
  },
  {
    "name": "Premium Silk Coat - 866",
    "description": "A premium coat made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 44.99,
    "countInStock": 76,
    "sku": "GEN-1777784926964-866",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Gray"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Premium Silk Coat - 866 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Premium Silk Coat - 866 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 48
  },
  {
    "name": "Casual Nylon Cardigan - 867",
    "description": "A casual cardigan made from high-quality nylon. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 79.99,
    "countInStock": 73,
    "sku": "GEN-1777784926964-867",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Maroon"
    ],
    "collections": "Business Casual",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Nylon Cardigan - 867 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Casual Nylon Cardigan - 867 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 6
  },
  {
    "name": "Durable Wool Shorts - 868",
    "description": "A durable shorts made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 109.99,
    "countInStock": 91,
    "sku": "GEN-1777784926964-868",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Purple"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Durable Wool Shorts - 868 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Durable Wool Shorts - 868 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 24
  },
  {
    "name": "Premium Leather Shirt - 869",
    "description": "A premium shirt made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 115.99,
    "countInStock": 6,
    "sku": "GEN-1777784926965-869",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Navy"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Premium Leather Shirt - 869 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Premium Leather Shirt - 869 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 36
  },
  {
    "name": "Sleek Denim Shorts - 870",
    "description": "A sleek shorts made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 103.99,
    "countInStock": 65,
    "sku": "GEN-1777784926965-870",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Purple"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Sleek Denim Shorts - 870 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Sleek Denim Shorts - 870 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 58
  },
  {
    "name": "Classic Cotton Jeans - 871",
    "description": "A classic jeans made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 58.99,
    "countInStock": 74,
    "sku": "GEN-1777784926965-871",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Purple"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Cotton Jeans - 871 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Classic Cotton Jeans - 871 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 35
  },
  {
    "name": "Sleek Cotton Shorts - 872",
    "description": "A sleek shorts made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 24.99,
    "countInStock": 33,
    "sku": "GEN-1777784926965-872",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Sleek Cotton Shorts - 872 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Sleek Cotton Shorts - 872 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 4
  },
  {
    "name": "Urban Leather Cardigan - 873",
    "description": "A urban cardigan made from high-quality leather. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 110.99,
    "discountPrice": 100.99,
    "countInStock": 38,
    "sku": "GEN-1777784926965-873",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Red"
    ],
    "collections": "Everyday Basics",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Urban Leather Cardigan - 873 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Urban Leather Cardigan - 873 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 58
  },
  {
    "name": "Durable Nylon Blazer - 874",
    "description": "A durable blazer made from high-quality nylon. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 32.99,
    "discountPrice": 28.990000000000002,
    "countInStock": 18,
    "sku": "GEN-1777784926965-874",
    "category": "Activewear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Purple"
    ],
    "collections": "Everyday Basics",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Durable Nylon Blazer - 874 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Durable Nylon Blazer - 874 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 17
  },
  {
    "name": "Urban Silk Vest - 875",
    "description": "A urban vest made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 110.99,
    "discountPrice": 106.99,
    "countInStock": 7,
    "sku": "GEN-1777784926965-875",
    "category": "Dresses",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Purple"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Urban Silk Vest - 875 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Urban Silk Vest - 875 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 22
  },
  {
    "name": "Urban Fleece Cardigan - 876",
    "description": "A urban cardigan made from high-quality fleece. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 41.99,
    "discountPrice": 35.99,
    "countInStock": 79,
    "sku": "GEN-1777784926965-876",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Beige"
    ],
    "collections": "Summer Collection",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Urban Fleece Cardigan - 876 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Urban Fleece Cardigan - 876 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 45
  },
  {
    "name": "Sleek Wool Hoodie - 877",
    "description": "A sleek hoodie made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 40.99,
    "countInStock": 17,
    "sku": "GEN-1777784926965-877",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Red"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sleek Wool Hoodie - 877 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Sleek Wool Hoodie - 877 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 13
  },
  {
    "name": "Urban Fleece Vest - 878",
    "description": "A urban vest made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 103.99,
    "countInStock": 90,
    "sku": "GEN-1777784926965-878",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Brown"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Urban Fleece Vest - 878 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Urban Fleece Vest - 878 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 94
  },
  {
    "name": "Durable Spandex Jacket - 879",
    "description": "A durable jacket made from high-quality spandex. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 41.99,
    "discountPrice": 34.99,
    "countInStock": 97,
    "sku": "GEN-1777784926965-879",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Green"
    ],
    "collections": "Summer Collection",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Durable Spandex Jacket - 879 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Durable Spandex Jacket - 879 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 61
  },
  {
    "name": "Durable Denim T-Shirt - 880",
    "description": "A durable t-shirt made from high-quality denim. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 101.99,
    "countInStock": 59,
    "sku": "GEN-1777784926965-880",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Durable Denim T-Shirt - 880 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Durable Denim T-Shirt - 880 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 62
  },
  {
    "name": "Lightweight Leather Hoodie - 881",
    "description": "A lightweight hoodie made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 58.99,
    "discountPrice": 53.99,
    "countInStock": 60,
    "sku": "GEN-1777784926965-881",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Gray"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Lightweight Leather Hoodie - 881 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Lightweight Leather Hoodie - 881 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 86
  },
  {
    "name": "Chic Cotton Vest - 882",
    "description": "A chic vest made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 55.99,
    "discountPrice": 50.99,
    "countInStock": 58,
    "sku": "GEN-1777784926965-882",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Chic Cotton Vest - 882 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Chic Cotton Vest - 882 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 97
  },
  {
    "name": "Premium Silk T-Shirt - 883",
    "description": "A premium t-shirt made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 22.99,
    "discountPrice": 17.99,
    "countInStock": 29,
    "sku": "GEN-1777784926965-883",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Blue"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Premium Silk T-Shirt - 883 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Premium Silk T-Shirt - 883 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 88
  },
  {
    "name": "Modern Nylon Shorts - 884",
    "description": "A modern shorts made from high-quality nylon. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 107.99,
    "discountPrice": 97.99,
    "countInStock": 29,
    "sku": "GEN-1777784926965-884",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Teal"
    ],
    "collections": "Winter Wear",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Modern Nylon Shorts - 884 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Modern Nylon Shorts - 884 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 69
  },
  {
    "name": "Classic Fleece Skirt - 885",
    "description": "A classic skirt made from high-quality fleece. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 35.99,
    "discountPrice": 26.990000000000002,
    "countInStock": 30,
    "sku": "GEN-1777784926965-885",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Classic Fleece Skirt - 885 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Classic Fleece Skirt - 885 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 4
  },
  {
    "name": "Rustic Denim Shirt - 886",
    "description": "A rustic shirt made from high-quality denim. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 39.99,
    "countInStock": 52,
    "sku": "GEN-1777784926965-886",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Gray"
    ],
    "collections": "Everyday Basics",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Rustic Denim Shirt - 886 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Rustic Denim Shirt - 886 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 38
  },
  {
    "name": "Sleek Leather Blazer - 887",
    "description": "A sleek blazer made from high-quality leather. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 69.99,
    "countInStock": 95,
    "sku": "GEN-1777784926965-887",
    "category": "Dresses",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown"
    ],
    "collections": "Summer Collection",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sleek Leather Blazer - 887 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Sleek Leather Blazer - 887 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 71
  },
  {
    "name": "Durable Denim Shirt - 888",
    "description": "A durable shirt made from high-quality denim. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 86.99,
    "discountPrice": 78.99,
    "countInStock": 51,
    "sku": "GEN-1777784926965-888",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Brown"
    ],
    "collections": "Evening Collection",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Durable Denim Shirt - 888 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Durable Denim Shirt - 888 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 12
  },
  {
    "name": "Casual Polyester Sweater - 889",
    "description": "A casual sweater made from high-quality polyester. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 38.99,
    "discountPrice": 35.99,
    "countInStock": 30,
    "sku": "GEN-1777784926965-889",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Teal"
    ],
    "collections": "Business Casual",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Casual Polyester Sweater - 889 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Casual Polyester Sweater - 889 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 9
  },
  {
    "name": "Cozy Denim Pants - 890",
    "description": "A cozy pants made from high-quality denim. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 57.99,
    "countInStock": 83,
    "sku": "GEN-1777784926965-890",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Pink"
    ],
    "collections": "Everyday Basics",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Denim Pants - 890 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Cozy Denim Pants - 890 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 44
  },
  {
    "name": "Casual Leather Pants - 891",
    "description": "A casual pants made from high-quality leather. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 80.99,
    "countInStock": 33,
    "sku": "GEN-1777784926965-891",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Navy"
    ],
    "collections": "Summer Collection",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Casual Leather Pants - 891 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Casual Leather Pants - 891 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 42
  },
  {
    "name": "Premium Nylon Shirt - 892",
    "description": "A premium shirt made from high-quality nylon. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 27.99,
    "discountPrice": 18.99,
    "countInStock": 2,
    "sku": "GEN-1777784926965-892",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Navy"
    ],
    "collections": "Everyday Basics",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Premium Nylon Shirt - 892 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Premium Nylon Shirt - 892 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 60
  },
  {
    "name": "Lightweight Cotton Jeans - 893",
    "description": "A lightweight jeans made from high-quality cotton. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 33.99,
    "discountPrice": 24.990000000000002,
    "countInStock": 11,
    "sku": "GEN-1777784926965-893",
    "category": "Outerwear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Black"
    ],
    "collections": "Athleisure",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Lightweight Cotton Jeans - 893 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Lightweight Cotton Jeans - 893 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 92
  },
  {
    "name": "Vintage Spandex Pants - 894",
    "description": "A vintage pants made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 108.99,
    "countInStock": 90,
    "sku": "GEN-1777784926965-894",
    "category": "Dresses",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Blue"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Vintage Spandex Pants - 894 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Vintage Spandex Pants - 894 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 88
  },
  {
    "name": "Essential Linen Sweater - 895",
    "description": "A essential sweater made from high-quality linen. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 70.99,
    "discountPrice": 60.989999999999995,
    "countInStock": 38,
    "sku": "GEN-1777784926965-895",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Yellow"
    ],
    "collections": "Athleisure",
    "material": "Linen",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Essential Linen Sweater - 895 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Essential Linen Sweater - 895 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 30
  },
  {
    "name": "Classic Leather Pants - 896",
    "description": "A classic pants made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 75.99,
    "countInStock": 7,
    "sku": "GEN-1777784926965-896",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Teal"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Leather Pants - 896 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Classic Leather Pants - 896 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 72
  },
  {
    "name": "Rustic Cotton Hoodie - 897",
    "description": "A rustic hoodie made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 98.99,
    "countInStock": 38,
    "sku": "GEN-1777784926965-897",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Rustic Cotton Hoodie - 897 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Rustic Cotton Hoodie - 897 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 10
  },
  {
    "name": "Vintage Cotton Hoodie - 898",
    "description": "A vintage hoodie made from high-quality cotton. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 39.99,
    "countInStock": 79,
    "sku": "GEN-1777784926965-898",
    "category": "Dresses",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Vintage Cotton Hoodie - 898 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Vintage Cotton Hoodie - 898 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 36
  },
  {
    "name": "Cozy Leather Blazer - 899",
    "description": "A cozy blazer made from high-quality leather. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 76.99,
    "countInStock": 31,
    "sku": "GEN-1777784926965-899",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Olive"
    ],
    "collections": "Summer Collection",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Cozy Leather Blazer - 899 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Cozy Leather Blazer - 899 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 43
  },
  {
    "name": "Vintage Wool Coat - 900",
    "description": "A vintage coat made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 48.99,
    "countInStock": 59,
    "sku": "GEN-1777784926965-900",
    "category": "Dresses",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Vintage Wool Coat - 900 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Vintage Wool Coat - 900 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 90
  },
  {
    "name": "Sporty Cotton Sweater - 901",
    "description": "A sporty sweater made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 115.99,
    "countInStock": 35,
    "sku": "GEN-1777784926965-901",
    "category": "Bottom Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sporty Cotton Sweater - 901 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Sporty Cotton Sweater - 901 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 14
  },
  {
    "name": "Rustic Silk Shirt - 902",
    "description": "A rustic shirt made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 44.99,
    "discountPrice": 41.99,
    "countInStock": 54,
    "sku": "GEN-1777784926965-902",
    "category": "Dresses",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Rustic Silk Shirt - 902 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Rustic Silk Shirt - 902 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 77
  },
  {
    "name": "Lightweight Polyester Cardigan - 903",
    "description": "A lightweight cardigan made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 90.99,
    "discountPrice": 85.99,
    "countInStock": 18,
    "sku": "GEN-1777784926965-903",
    "category": "Outerwear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Navy"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Lightweight Polyester Cardigan - 903 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Lightweight Polyester Cardigan - 903 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 31
  },
  {
    "name": "Essential Wool Pants - 904",
    "description": "A essential pants made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 116.99,
    "discountPrice": 113.99,
    "countInStock": 19,
    "sku": "GEN-1777784926965-904",
    "category": "Activewear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Essential Wool Pants - 904 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Essential Wool Pants - 904 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 58
  },
  {
    "name": "Sporty Leather Jeans - 905",
    "description": "A sporty jeans made from high-quality leather. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 58.99,
    "countInStock": 91,
    "sku": "GEN-1777784926965-905",
    "category": "Outerwear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Olive"
    ],
    "collections": "Winter Wear",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sporty Leather Jeans - 905 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sporty Leather Jeans - 905 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 1
  },
  {
    "name": "Modern Nylon Shirt - 906",
    "description": "A modern shirt made from high-quality nylon. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 59.99,
    "discountPrice": 52.99,
    "countInStock": 24,
    "sku": "GEN-1777784926965-906",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Modern Nylon Shirt - 906 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Modern Nylon Shirt - 906 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 91
  },
  {
    "name": "Casual Silk Dress - 907",
    "description": "A casual dress made from high-quality silk. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 92.99,
    "discountPrice": 83.99,
    "countInStock": 23,
    "sku": "GEN-1777784926965-907",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Brown"
    ],
    "collections": "Summer Collection",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Casual Silk Dress - 907 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Casual Silk Dress - 907 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 50
  },
  {
    "name": "Durable Nylon T-Shirt - 908",
    "description": "A durable t-shirt made from high-quality nylon. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 115.99,
    "discountPrice": 114.99,
    "countInStock": 41,
    "sku": "GEN-1777784926965-908",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Brown"
    ],
    "collections": "Business Casual",
    "material": "Nylon",
    "gender": "Women",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Durable Nylon T-Shirt - 908 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Durable Nylon T-Shirt - 908 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 26
  },
  {
    "name": "Chic Denim Blazer - 909",
    "description": "A chic blazer made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 36.99,
    "discountPrice": 26.990000000000002,
    "countInStock": 71,
    "sku": "GEN-1777784926965-909",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Blue"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Chic Denim Blazer - 909 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Chic Denim Blazer - 909 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 11
  },
  {
    "name": "Modern Wool Shorts - 910",
    "description": "A modern shorts made from high-quality wool. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 118.99,
    "countInStock": 59,
    "sku": "GEN-1777784926965-910",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Olive"
    ],
    "collections": "Evening Collection",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Modern Wool Shorts - 910 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Modern Wool Shorts - 910 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 98
  },
  {
    "name": "Elegant Fleece Sweater - 911",
    "description": "A elegant sweater made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 106.99,
    "countInStock": 95,
    "sku": "GEN-1777784926965-911",
    "category": "Top Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Navy"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Men",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Elegant Fleece Sweater - 911 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Elegant Fleece Sweater - 911 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 12
  },
  {
    "name": "Elegant Cotton Cardigan - 912",
    "description": "A elegant cardigan made from high-quality cotton. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 77.99,
    "countInStock": 11,
    "sku": "GEN-1777784926965-912",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Blue"
    ],
    "collections": "Evening Collection",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Elegant Cotton Cardigan - 912 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Elegant Cotton Cardigan - 912 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 58
  },
  {
    "name": "Casual Silk Hoodie - 913",
    "description": "A casual hoodie made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 58.99,
    "discountPrice": 51.99,
    "countInStock": 45,
    "sku": "GEN-1777784926965-913",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Olive"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Casual Silk Hoodie - 913 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Casual Silk Hoodie - 913 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 64
  },
  {
    "name": "Urban Cotton Pants - 914",
    "description": "A urban pants made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 67.99,
    "countInStock": 86,
    "sku": "GEN-1777784926965-914",
    "category": "Top Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Teal"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Urban Cotton Pants - 914 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Urban Cotton Pants - 914 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 31
  },
  {
    "name": "Vintage Leather Jeans - 915",
    "description": "A vintage jeans made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 75.99,
    "discountPrice": 70.99,
    "countInStock": 51,
    "sku": "GEN-1777784926965-915",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Black"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Vintage Leather Jeans - 915 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Vintage Leather Jeans - 915 - Side View"
      }
    ],
    "rating": 3.6,
    "numReviews": 70
  },
  {
    "name": "Chic Spandex Shorts - 916",
    "description": "A chic shorts made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 88.99,
    "discountPrice": 78.99,
    "countInStock": 18,
    "sku": "GEN-1777784926965-916",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Chic Spandex Shorts - 916 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Chic Spandex Shorts - 916 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 89
  },
  {
    "name": "Essential Spandex Coat - 917",
    "description": "A essential coat made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 112.99,
    "discountPrice": 102.99,
    "countInStock": 56,
    "sku": "GEN-1777784926965-917",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Beige"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Essential Spandex Coat - 917 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Essential Spandex Coat - 917 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 69
  },
  {
    "name": "Sleek Wool Coat - 918",
    "description": "A sleek coat made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 83.99,
    "countInStock": 76,
    "sku": "GEN-1777784926965-918",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Maroon"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Sleek Wool Coat - 918 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Sleek Wool Coat - 918 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 50
  },
  {
    "name": "Durable Wool Dress - 919",
    "description": "A durable dress made from high-quality wool. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 110.99,
    "discountPrice": 109.99,
    "countInStock": 56,
    "sku": "GEN-1777784926965-919",
    "category": "Top Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Teal"
    ],
    "collections": "Athleisure",
    "material": "Wool",
    "gender": "Men",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Durable Wool Dress - 919 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Durable Wool Dress - 919 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 77
  },
  {
    "name": "Sleek Polyester Jeans - 920",
    "description": "A sleek jeans made from high-quality polyester. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 52.99,
    "countInStock": 61,
    "sku": "GEN-1777784926965-920",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Green"
    ],
    "collections": "Summer Collection",
    "material": "Polyester",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sleek Polyester Jeans - 920 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sleek Polyester Jeans - 920 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 71
  },
  {
    "name": "Premium Leather Jacket - 921",
    "description": "A premium jacket made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 54.99,
    "countInStock": 2,
    "sku": "GEN-1777784926965-921",
    "category": "Bottom Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Pink"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Premium Leather Jacket - 921 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Premium Leather Jacket - 921 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 17
  },
  {
    "name": "Premium Wool Shorts - 922",
    "description": "A premium shorts made from high-quality wool. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 51.99,
    "countInStock": 80,
    "sku": "GEN-1777784926965-922",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White"
    ],
    "collections": "Business Casual",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Premium Wool Shorts - 922 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Premium Wool Shorts - 922 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 77
  },
  {
    "name": "Cozy Polyester Shirt - 923",
    "description": "A cozy shirt made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 102.99,
    "countInStock": 11,
    "sku": "GEN-1777784926965-923",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Beige"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Cozy Polyester Shirt - 923 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Cozy Polyester Shirt - 923 - Side View"
      }
    ],
    "rating": 3.9,
    "numReviews": 75
  },
  {
    "name": "Sleek Cotton Vest - 924",
    "description": "A sleek vest made from high-quality cotton. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 32.99,
    "countInStock": 14,
    "sku": "GEN-1777784926965-924",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Purple"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Sleek Cotton Vest - 924 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Sleek Cotton Vest - 924 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 70
  },
  {
    "name": "Elegant Nylon Cardigan - 925",
    "description": "A elegant cardigan made from high-quality nylon. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 60.99,
    "countInStock": 83,
    "sku": "GEN-1777784926965-925",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Maroon"
    ],
    "collections": "Everyday Basics",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Elegant Nylon Cardigan - 925 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Elegant Nylon Cardigan - 925 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 39
  },
  {
    "name": "Rustic Nylon Coat - 926",
    "description": "A rustic coat made from high-quality nylon. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 52.99,
    "countInStock": 99,
    "sku": "GEN-1777784926965-926",
    "category": "Bottom Wear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Green"
    ],
    "collections": "Summer Collection",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Rustic Nylon Coat - 926 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Rustic Nylon Coat - 926 - Side View"
      }
    ],
    "rating": 3.3,
    "numReviews": 66
  },
  {
    "name": "Elegant Spandex Pants - 927",
    "description": "A elegant pants made from high-quality spandex. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 93.99,
    "countInStock": 60,
    "sku": "GEN-1777784926965-927",
    "category": "Top Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White"
    ],
    "collections": "Business Casual",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Elegant Spandex Pants - 927 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Elegant Spandex Pants - 927 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 91
  },
  {
    "name": "Vintage Linen Jacket - 928",
    "description": "A vintage jacket made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 37.99,
    "countInStock": 77,
    "sku": "GEN-1777784926965-928",
    "category": "Dresses",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "White"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Vintage Linen Jacket - 928 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Vintage Linen Jacket - 928 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 41
  },
  {
    "name": "Essential Spandex Blazer - 929",
    "description": "A essential blazer made from high-quality spandex. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 91.99,
    "discountPrice": 90.99,
    "countInStock": 23,
    "sku": "GEN-1777784926965-929",
    "category": "Bottom Wear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Yellow",
      "Blue"
    ],
    "collections": "Winter Wear",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Essential Spandex Blazer - 929 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Essential Spandex Blazer - 929 - Side View"
      }
    ],
    "rating": 3.2,
    "numReviews": 64
  },
  {
    "name": "Modern Silk Shorts - 930",
    "description": "A modern shorts made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 112.99,
    "countInStock": 49,
    "sku": "GEN-1777784926965-930",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Modern Silk Shorts - 930 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Modern Silk Shorts - 930 - Side View"
      }
    ],
    "rating": 3,
    "numReviews": 63
  },
  {
    "name": "Premium Denim Sweater - 931",
    "description": "A premium sweater made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 65.99,
    "discountPrice": 58.989999999999995,
    "countInStock": 31,
    "sku": "GEN-1777784926965-931",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Olive"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Premium Denim Sweater - 931 - Front View"
      },
      {
        "url": "/images/cozy_sweater.png",
        "altText": "Premium Denim Sweater - 931 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 87
  },
  {
    "name": "Rustic Denim T-Shirt - 932",
    "description": "A rustic t-shirt made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 36.99,
    "discountPrice": 32.99,
    "countInStock": 63,
    "sku": "GEN-1777784926965-932",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Gray"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Rustic Denim T-Shirt - 932 - Front View"
      },
      {
        "url": "/images/graphic_tshirt.png",
        "altText": "Rustic Denim T-Shirt - 932 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 61
  },
  {
    "name": "Classic Denim Coat - 933",
    "description": "A classic coat made from high-quality denim. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 95.99,
    "countInStock": 67,
    "sku": "GEN-1777784926965-933",
    "category": "Dresses",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Teal"
    ],
    "collections": "Winter Wear",
    "material": "Denim",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Classic Denim Coat - 933 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Classic Denim Coat - 933 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 48
  },
  {
    "name": "Sporty Fleece Cardigan - 934",
    "description": "A sporty cardigan made from high-quality fleece. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 24.99,
    "discountPrice": 16.99,
    "countInStock": 14,
    "sku": "GEN-1777784926965-934",
    "category": "Outerwear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Teal",
      "Red"
    ],
    "collections": "Evening Collection",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Sporty Fleece Cardigan - 934 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Sporty Fleece Cardigan - 934 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 59
  },
  {
    "name": "Sporty Cotton Pants - 935",
    "description": "A sporty pants made from high-quality cotton. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 63.99,
    "countInStock": 35,
    "sku": "GEN-1777784926965-935",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Navy"
    ],
    "collections": "Evening Collection",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Sporty Cotton Pants - 935 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Sporty Cotton Pants - 935 - Side View"
      }
    ],
    "rating": 4.3,
    "numReviews": 36
  },
  {
    "name": "Lightweight Linen Jeans - 936",
    "description": "A lightweight jeans made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 48.99,
    "discountPrice": 44.99,
    "countInStock": 18,
    "sku": "GEN-1777784926965-936",
    "category": "Activewear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Black"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Lightweight Linen Jeans - 936 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Lightweight Linen Jeans - 936 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 63
  },
  {
    "name": "Sporty Spandex Jacket - 937",
    "description": "A sporty jacket made from high-quality spandex. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 119.99,
    "discountPrice": 115.99,
    "countInStock": 0,
    "sku": "GEN-1777784926965-937",
    "category": "Bottom Wear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Gray"
    ],
    "collections": "Evening Collection",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Sporty Spandex Jacket - 937 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Sporty Spandex Jacket - 937 - Side View"
      }
    ],
    "rating": 3.8,
    "numReviews": 64
  },
  {
    "name": "Premium Polyester Jacket - 938",
    "description": "A premium jacket made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 44.99,
    "countInStock": 7,
    "sku": "GEN-1777784926965-938",
    "category": "Bottom Wear",
    "brand": "Luxe",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Blue"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/winter_jacket.png",
        "altText": "Premium Polyester Jacket - 938 - Front View"
      },
      {
        "url": "/images/leather_jacket.png",
        "altText": "Premium Polyester Jacket - 938 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 44
  },
  {
    "name": "Vintage Cotton Skirt - 939",
    "description": "A vintage skirt made from high-quality cotton. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 58.99,
    "discountPrice": 52.99,
    "countInStock": 38,
    "sku": "GEN-1777784926965-939",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "White"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Vintage Cotton Skirt - 939 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Vintage Cotton Skirt - 939 - Side View"
      }
    ],
    "rating": 5,
    "numReviews": 84
  },
  {
    "name": "Cozy Silk Cardigan - 940",
    "description": "A cozy cardigan made from high-quality silk. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 84.99,
    "countInStock": 60,
    "sku": "GEN-1777784926965-940",
    "category": "Top Wear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige"
    ],
    "collections": "Everyday Basics",
    "material": "Silk",
    "gender": "Men",
    "images": [
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Cozy Silk Cardigan - 940 - Front View"
      },
      {
        "url": "/images/knit_cardigan.png",
        "altText": "Cozy Silk Cardigan - 940 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 80
  },
  {
    "name": "Premium Cotton Dress - 941",
    "description": "A premium dress made from high-quality cotton. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 81.99,
    "countInStock": 55,
    "sku": "GEN-1777784926965-941",
    "category": "Activewear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red"
    ],
    "collections": "Evening Collection",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "/images/evening_dress.png",
        "altText": "Premium Cotton Dress - 941 - Front View"
      },
      {
        "url": "/images/casual_dress.png",
        "altText": "Premium Cotton Dress - 941 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 23
  },
  {
    "name": "Elegant Wool Hoodie - 942",
    "description": "A elegant hoodie made from high-quality wool. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 92.99,
    "discountPrice": 86.99,
    "countInStock": 17,
    "sku": "GEN-1777784926965-942",
    "category": "Top Wear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Brown"
    ],
    "collections": "Summer Collection",
    "material": "Wool",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Elegant Wool Hoodie - 942 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Elegant Wool Hoodie - 942 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 47
  },
  {
    "name": "Chic Spandex Coat - 943",
    "description": "A chic coat made from high-quality spandex. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 43.99,
    "countInStock": 32,
    "sku": "GEN-1777784926965-943",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "Pink"
    ],
    "collections": "Business Casual",
    "material": "Spandex",
    "gender": "Women",
    "images": [
      {
        "url": "/images/elegant_coat.png",
        "altText": "Chic Spandex Coat - 943 - Front View"
      },
      {
        "url": "/images/elegant_coat.png",
        "altText": "Chic Spandex Coat - 943 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 4
  },
  {
    "name": "Modern Silk Hoodie - 944",
    "description": "A modern hoodie made from high-quality silk. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 59.99,
    "discountPrice": 50.99,
    "countInStock": 78,
    "sku": "GEN-1777784926965-944",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Red"
    ],
    "collections": "Winter Wear",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Modern Silk Hoodie - 944 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Modern Silk Hoodie - 944 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 82
  },
  {
    "name": "Lightweight Wool Hoodie - 945",
    "description": "A lightweight hoodie made from high-quality wool. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 39.99,
    "discountPrice": 31.990000000000002,
    "countInStock": 12,
    "sku": "GEN-1777784926965-945",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Pink"
    ],
    "collections": "Everyday Basics",
    "material": "Wool",
    "gender": "Women",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Lightweight Wool Hoodie - 945 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Lightweight Wool Hoodie - 945 - Side View"
      }
    ],
    "rating": 4.6,
    "numReviews": 79
  },
  {
    "name": "Rustic Fleece Hoodie - 946",
    "description": "A rustic hoodie made from high-quality fleece. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 27.99,
    "discountPrice": 21.99,
    "countInStock": 7,
    "sku": "GEN-1777784926965-946",
    "category": "Activewear",
    "brand": "Aero",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Purple"
    ],
    "collections": "Evening Collection",
    "material": "Fleece",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Rustic Fleece Hoodie - 946 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Rustic Fleece Hoodie - 946 - Side View"
      }
    ],
    "rating": 3.4,
    "numReviews": 88
  },
  {
    "name": "Chic Fleece Skirt - 947",
    "description": "A chic skirt made from high-quality fleece. Perfect for winter wear. Features a comfortable fit and durable design.",
    "price": 49.99,
    "discountPrice": 48.99,
    "countInStock": 7,
    "sku": "GEN-1777784926965-947",
    "category": "Outerwear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Winter Wear",
    "material": "Fleece",
    "gender": "Women",
    "images": [
      {
        "url": "/images/summer_skirt.png",
        "altText": "Chic Fleece Skirt - 947 - Front View"
      },
      {
        "url": "/images/summer_skirt.png",
        "altText": "Chic Fleece Skirt - 947 - Side View"
      }
    ],
    "rating": 4.8,
    "numReviews": 42
  },
  {
    "name": "Rustic Leather Blazer - 948",
    "description": "A rustic blazer made from high-quality leather. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 22.99,
    "countInStock": 58,
    "sku": "GEN-1777784926965-948",
    "category": "Outerwear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Black"
    ],
    "collections": "Athleisure",
    "material": "Leather",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/formal_blazer.png",
        "altText": "Rustic Leather Blazer - 948 - Front View"
      },
      {
        "url": "/images/formal_blazer.png",
        "altText": "Rustic Leather Blazer - 948 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 33
  },
  {
    "name": "Sporty Spandex Vest - 949",
    "description": "A sporty vest made from high-quality spandex. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 112.99,
    "discountPrice": 111.99,
    "countInStock": 75,
    "sku": "GEN-1777784926965-949",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Maroon",
      "Purple"
    ],
    "collections": "Everyday Basics",
    "material": "Spandex",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Sporty Spandex Vest - 949 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Sporty Spandex Vest - 949 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 35
  },
  {
    "name": "Elegant Cotton Vest - 950",
    "description": "A elegant vest made from high-quality cotton. Perfect for athleisure. Features a comfortable fit and durable design.",
    "price": 24.99,
    "discountPrice": 19.99,
    "countInStock": 80,
    "sku": "GEN-1777784926965-950",
    "category": "Activewear",
    "brand": "ClassicFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown"
    ],
    "collections": "Athleisure",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Cotton Vest - 950 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Elegant Cotton Vest - 950 - Side View"
      }
    ],
    "rating": 4,
    "numReviews": 86
  },
  {
    "name": "Chic Linen Jeans - 951",
    "description": "A chic jeans made from high-quality linen. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 91.99,
    "discountPrice": 86.99,
    "countInStock": 5,
    "sku": "GEN-1777784926965-951",
    "category": "Activewear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Maroon"
    ],
    "collections": "Summer Collection",
    "material": "Linen",
    "gender": "Women",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Chic Linen Jeans - 951 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Chic Linen Jeans - 951 - Side View"
      }
    ],
    "rating": 4.4,
    "numReviews": 31
  },
  {
    "name": "Essential Nylon Hoodie - 952",
    "description": "A essential hoodie made from high-quality nylon. Perfect for summer collection. Features a comfortable fit and durable design.",
    "price": 31.99,
    "countInStock": 64,
    "sku": "GEN-1777784926965-952",
    "category": "Outerwear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Purple",
      "Red"
    ],
    "collections": "Summer Collection",
    "material": "Nylon",
    "gender": "Men",
    "images": [
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Essential Nylon Hoodie - 952 - Front View"
      },
      {
        "url": "/images/sporty_hoodie.png",
        "altText": "Essential Nylon Hoodie - 952 - Side View"
      }
    ],
    "rating": 4.9,
    "numReviews": 20
  },
  {
    "name": "Durable Silk Pants - 953",
    "description": "A durable pants made from high-quality silk. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 69.99,
    "countInStock": 48,
    "sku": "GEN-1777784926965-953",
    "category": "Outerwear",
    "brand": "StyleCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Maroon"
    ],
    "collections": "Business Casual",
    "material": "Silk",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Silk Pants - 953 - Front View"
      },
      {
        "url": "/images/casual_pants.png",
        "altText": "Durable Silk Pants - 953 - Side View"
      }
    ],
    "rating": 4.2,
    "numReviews": 31
  },
  {
    "name": "Rustic Leather Shirt - 954",
    "description": "A rustic shirt made from high-quality leather. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 117.99,
    "countInStock": 70,
    "sku": "GEN-1777784926965-954",
    "category": "Activewear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Purple"
    ],
    "collections": "Evening Collection",
    "material": "Leather",
    "gender": "Men",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Rustic Leather Shirt - 954 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Rustic Leather Shirt - 954 - Side View"
      }
    ],
    "rating": 3.7,
    "numReviews": 40
  },
  {
    "name": "Casual Silk Vest - 955",
    "description": "A casual vest made from high-quality silk. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 114.99,
    "discountPrice": 108.99,
    "countInStock": 54,
    "sku": "GEN-1777784926965-955",
    "category": "Outerwear",
    "brand": "TrendSetter",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Black"
    ],
    "collections": "Evening Collection",
    "material": "Silk",
    "gender": "Women",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Casual Silk Vest - 955 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Casual Silk Vest - 955 - Side View"
      }
    ],
    "rating": 3.5,
    "numReviews": 64
  },
  {
    "name": "Sleek Cotton Shirt - 956",
    "description": "A sleek shirt made from high-quality cotton. Perfect for everyday basics. Features a comfortable fit and durable design.",
    "price": 55.99,
    "countInStock": 3,
    "sku": "GEN-1777784926965-956",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Olive"
    ],
    "collections": "Everyday Basics",
    "material": "Cotton",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/classic_shirt.png",
        "altText": "Sleek Cotton Shirt - 956 - Front View"
      },
      {
        "url": "/images/classic_shirt.png",
        "altText": "Sleek Cotton Shirt - 956 - Side View"
      }
    ],
    "rating": 4.7,
    "numReviews": 10
  },
  {
    "name": "Lightweight Nylon Vest - 957",
    "description": "A lightweight vest made from high-quality nylon. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 103.99,
    "discountPrice": 99.99,
    "countInStock": 49,
    "sku": "GEN-1777784926965-957",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Brown",
      "Purple"
    ],
    "collections": "Evening Collection",
    "material": "Nylon",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/running_vest.png",
        "altText": "Lightweight Nylon Vest - 957 - Front View"
      },
      {
        "url": "/images/running_vest.png",
        "altText": "Lightweight Nylon Vest - 957 - Side View"
      }
    ],
    "rating": 4.5,
    "numReviews": 90
  },
  {
    "name": "Sporty Linen Jeans - 958",
    "description": "A sporty jeans made from high-quality linen. Perfect for business casual. Features a comfortable fit and durable design.",
    "price": 115.99,
    "countInStock": 87,
    "sku": "GEN-1777784926965-958",
    "category": "Activewear",
    "brand": "DenimX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Green",
      "White"
    ],
    "collections": "Business Casual",
    "material": "Linen",
    "gender": "Unisex",
    "images": [
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sporty Linen Jeans - 958 - Front View"
      },
      {
        "url": "/images/denim_jeans.png",
        "altText": "Sporty Linen Jeans - 958 - Side View"
      }
    ],
    "rating": 4.1,
    "numReviews": 70
  },
  {
    "name": "Vintage Polyester Shorts - 959",
    "description": "A vintage shorts made from high-quality polyester. Perfect for evening collection. Features a comfortable fit and durable design.",
    "price": 32.99,
    "countInStock": 66,
    "sku": "GEN-1777784926965-959",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Pink",
      "Beige"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "/images/vintage_shorts.png",
        "altText": "Vintage Polyester Shorts - 959 - Front View"
      },
      {
        "url": "/images/sports_shorts.png",
        "altText": "Vintage Polyester Shorts - 959 - Side View"
      }
    ],
    "rating": 3.1,
    "numReviews": 25
  }
];

module.exports = products;
