const products = [
    {
        name: "Yellow Maize",
        description: "High-quality yellow maize corn, perfect for animal feed and industrial use. Rich in carotenoids and essential nutrients.",
        price: 350,
        quantity: 1000,
        unit: "tons",
        category: "grains",
        images: ["yellow-maize.jpg"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Non-GMO"],
        status: "available"
    },
    {
        name: "White Maize",
        description: "Premium white maize corn, ideal for human consumption. Clean, well-sorted, and ready for processing.",
        price: 380,
        quantity: 800,
        unit: "tons",
        category: "grains",
        images: ["white-maize.jpg"],
        location: {
            country: "Ghana",
            region: "Brong-Ahafo",
            city: "Sunyani"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-20"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Basmati Rice",
        description: "Premium long-grain basmati rice known for its aromatic flavor and fluffy texture when cooked.",
        price: 1200,
        quantity: 500,
        unit: "tons",
        category: "grains",
        images: ["basmati-rice.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-15"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Hard Red Wheat",
        description: "High-protein hard red wheat, perfect for bread making and other baked goods.",
        price: 450,
        quantity: 1200,
        unit: "tons",
        category: "grains",
        images: ["hard-red-wheat.jpg"],
        location: {
            country: "Ghana",
            region: "Upper East",
            city: "Bolgatanga"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-01"),
        certifications: ["Non-GMO"],
        status: "available"
    },
    {
        name: "Two-row Barley",
        description: "Premium malting barley, ideal for brewing and distilling industries.",
        price: 400,
        quantity: 600,
        unit: "tons",
        category: "grains",
        images: ["barley.jpg"],
        location: {
            country: "Ghana",
            region: "Upper West",
            city: "Wa"
        },
        quality: "Grade B",
        harvestDate: new Date("2024-01-20"),
        certifications: ["Non-GMO"],
        status: "available"
    },
    {
        name: "Red Sorghum",
        description: "Traditional red sorghum variety, ideal for brewing traditional beverages. Rich color and robust flavor.",
        price: 320,
        quantity: 800,
        unit: "tons",
        category: "grains",
        images: ["red-sorghum.jpg"],
        location: {
            country: "Ghana",
            region: "Upper East",
            city: "Bolgatanga"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Brown Sorghum",
        description: "High-quality brown sorghum, excellent for livestock feed and beer production. Consistent quality.",
        price: 300,
        quantity: 1200,
        unit: "tons",
        category: "grains",
        images: ["brown-sorghum.jpg"],
        location: {
            country: "Ghana",
            region: "Upper West",
            city: "Wa"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Non-GMO"],
        status: "available"
    },
    {
        name: "Sweet Sorghum",
        description: "Specialized sweet sorghum variety for syrup and biofuel production. High sugar content and excellent yield.",
        price: 360,
        quantity: 1000,
        unit: "tons",
        category: "grains",
        images: ["sweet-sorghum.jpg"],
        location: {
            country: "Ghana",
            region: "Brong-Ahafo",
            city: "Sunyani"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-18"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Pearl Millet",
        description: "Nutritious pearl millet, rich in proteins and minerals. Ideal for human consumption.",
        price: 380,
        quantity: 400,
        unit: "tons",
        category: "grains",
        images: ["pearl-millet.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Savelugu"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-05"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Black Beans",
        description: "Premium quality black beans, rich in fiber and protein. Perfect for soups, stews, and Latin American cuisine.",
        price: 850,
        quantity: 500,
        unit: "tons",
        category: "legumes",
        images: ["black-beans.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-01"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Red Kidney Beans",
        description: "Large, dark red kidney beans with excellent texture and taste. High in protein and dietary fiber.",
        price: 900,
        quantity: 400,
        unit: "tons",
        category: "legumes",
        images: ["kidney-beans.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Non-GMO"],
        status: "available"
    },
    {
        name: "Pinto Beans",
        description: "Speckled, medium-sized pinto beans, perfect for Mexican dishes and refried beans. Rich in nutrients.",
        price: 800,
        quantity: 300,
        unit: "tons",
        category: "legumes",
        images: ["pinto-beans.jpg"],
        location: {
            country: "Ghana",
            region: "Central",
            city: "Cape Coast"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Navy Beans",
        description: "Small, white navy beans ideal for baked beans and soups. Excellent source of protein and fiber.",
        price: 780,
        quantity: 350,
        unit: "tons",
        category: "legumes",
        images: ["navy-beans.jpg"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Sekondi-Takoradi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-05"),
        certifications: ["Non-GMO"],
        status: "available"
    },
    {
        name: "Green Lentils",
        description: "Premium green lentils with a mild, earthy flavor. Perfect for salads and side dishes.",
        price: 950,
        quantity: 400,
        unit: "tons",
        category: "legumes",
        images: ["green-lentils.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-25"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Red Lentils",
        description: "Quick-cooking red lentils, ideal for soups and Indian dal. High in protein and iron.",
        price: 920,
        quantity: 450,
        unit: "tons",
        category: "legumes",
        images: ["red-lentils.jpg"],
        location: {
            country: "Ghana",
            region: "Upper East",
            city: "Bolgatanga"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-30"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Yellow Split Peas",
        description: "Dried yellow split peas, perfect for soups and Indian dishes. Rich in protein and fiber.",
        price: 750,
        quantity: 600,
        unit: "tons",
        category: "legumes",
        images: ["yellow-split-peas.jpg"],
        location: {
            country: "Ghana",
            region: "Brong-Ahafo",
            city: "Sunyani"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-08"),
        certifications: ["Non-GMO"],
        status: "available"
    },
    {
        name: "Chickpeas",
        description: "Premium garbanzo beans (chickpeas), ideal for hummus and Mediterranean cuisine. Excellent protein source.",
        price: 880,
        quantity: 500,
        unit: "tons",
        category: "legumes",
        images: ["chickpeas.jpg"],
        location: {
            country: "Ghana",
            region: "Greater Accra",
            city: "Tema"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Non-GMO Soybeans",
        description: "High-quality non-GMO soybeans, perfect for tofu production and animal feed. Rich in protein and essential nutrients.",
        price: 1100,
        quantity: 800,
        unit: "tons",
        category: "legumes",
        images: ["non-gmo-soybeans.jpg"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-18"),
        certifications: ["Non-GMO", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Edamame Soybeans",
        description: "Fresh edamame soybeans, harvested at peak maturity. Perfect for healthy snacking and Asian cuisine.",
        price: 1300,
        quantity: 300,
        unit: "tons",
        category: "legumes",
        images: ["edamame.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-20"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Conventional Soybeans",
        description: "High-quality conventional soybeans with excellent oil content. Ideal for oil extraction and protein products.",
        price: 950,
        quantity: 1000,
        unit: "tons",
        category: "oilseeds",
        images: ["conventional-soybeans.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Sustainable Farming"],
        status: "available"
    },
    {
        name: "High-Oleic Soybeans",
        description: "Premium high-oleic soybeans with enhanced oil stability. Perfect for food industry applications.",
        price: 1200,
        quantity: 800,
        unit: "tons",
        category: "oilseeds",
        images: ["high-oleic-soybeans.jpg"],
        location: {
            country: "Ghana",
            region: "Upper East",
            city: "Bolgatanga"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Non-GMO", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Runner Groundnuts",
        description: "Large, uniform runner peanuts ideal for peanut butter production. High oil content and excellent flavor.",
        price: 1500,
        quantity: 600,
        unit: "tons",
        category: "oilseeds",
        images: ["runner-groundnuts.jpg"],
        location: {
            country: "Ghana",
            region: "Brong-Ahafo",
            city: "Sunyani"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-25"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Spanish Groundnuts",
        description: "Small, round Spanish peanuts with high oil content. Perfect for confectionery and oil extraction.",
        price: 1400,
        quantity: 500,
        unit: "tons",
        category: "oilseeds",
        images: ["spanish-groundnuts.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-30"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Virginia Groundnuts",
        description: "Large, premium Virginia peanuts ideal for roasting and gourmet applications. Superior taste and quality.",
        price: 1600,
        quantity: 400,
        unit: "tons",
        category: "oilseeds",
        images: ["virginia-groundnuts.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-05"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Oilseed Sunflower",
        description: "High oil content sunflower seeds perfect for oil extraction. Rich in healthy fats and nutrients.",
        price: 1100,
        quantity: 700,
        unit: "tons",
        category: "oilseeds",
        images: ["oilseed-sunflower.jpg"],
        location: {
            country: "Ghana",
            region: "Upper West",
            city: "Wa"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-08"),
        certifications: ["Non-GMO"],
        status: "available"
    },
    {
        name: "Confectionary Sunflower",
        description: "Large, striped sunflower seeds ideal for snacking and food processing. Premium quality and taste.",
        price: 1300,
        quantity: 500,
        unit: "tons",
        category: "oilseeds",
        images: ["confectionary-sunflower.jpg"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "White Sesame Seeds",
        description: "Premium white sesame seeds with high oil content. Perfect for oil extraction and culinary applications.",
        price: 2200,
        quantity: 400,
        unit: "tons",
        category: "oilseeds",
        images: ["white-sesame.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Yendi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-20"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Black Sesame Seeds",
        description: "Aromatic black sesame seeds rich in nutrients. Ideal for culinary and pharmaceutical uses.",
        price: 2400,
        quantity: 300,
        unit: "tons",
        category: "oilseeds",
        images: ["black-sesame.jpg"],
        location: {
            country: "Ghana",
            region: "Upper East",
            city: "Bawku"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-25"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Tenera Palm Oil",
        description: "High-yielding Tenera variety palm oil fruits with excellent oil content. Ideal for commercial oil production.",
        price: 800,
        quantity: 2000,
        unit: "tons",
        category: "oilseeds",
        images: ["tenera-palm.jpg"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Takoradi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-01"),
        certifications: ["Sustainable Farming"],
        status: "available"
    },
    {
        name: "Tall Coconut",
        description: "Traditional tall coconut variety with high oil content and copra yield. Excellent for oil extraction.",
        price: 1000,
        quantity: 1500,
        unit: "tons",
        category: "oilseeds",
        images: ["tall-coconut.jpg"],
        location: {
            country: "Ghana",
            region: "Central",
            city: "Cape Coast"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Dwarf Coconut",
        description: "Early-bearing dwarf coconut variety, ideal for both oil production and fresh consumption.",
        price: 1100,
        quantity: 1200,
        unit: "tons",
        category: "oilseeds",
        images: ["dwarf-coconut.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Keta"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-20"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Bitter Cassava",
        description: "Traditional bitter cassava variety, perfect for industrial starch production and flour making. Requires proper processing.",
        price: 400,
        quantity: 2000,
        unit: "tons",
        category: "roots-tubers",
        images: ["bitter-cassava.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Sweet Cassava",
        description: "Sweet cassava variety ideal for direct consumption and local food processing. Low in toxins and great taste.",
        price: 450,
        quantity: 1800,
        unit: "tons",
        category: "roots-tubers",
        images: ["sweet-cassava.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "White Yam",
        description: "Premium white yam variety with firm texture and excellent taste. Perfect for traditional dishes.",
        price: 800,
        quantity: 1000,
        unit: "tons",
        category: "roots-tubers",
        images: ["white-yam.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-25"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Yellow Yam",
        description: "Nutritious yellow yam with rich flavor and smooth texture. High in vitamins and minerals.",
        price: 850,
        quantity: 800,
        unit: "tons",
        category: "roots-tubers",
        images: ["yellow-yam.jpg"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-30"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Water Yam",
        description: "Versatile water yam variety suitable for various culinary applications. Good storage capability.",
        price: 700,
        quantity: 600,
        unit: "tons",
        category: "roots-tubers",
        images: ["water-yam.jpg"],
        location: {
            country: "Ghana",
            region: "Brong-Ahafo",
            city: "Sunyani"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-05"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Russet Potato",
        description: "High-quality russet potatoes ideal for baking and frying. Excellent texture and taste.",
        price: 600,
        quantity: 1200,
        unit: "tons",
        category: "roots-tubers",
        images: ["russet-potato.jpg"],
        location: {
            country: "Ghana",
            region: "Upper East",
            city: "Bolgatanga"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-01"),
        certifications: ["Non-GMO"],
        status: "available"
    },
    {
        name: "Red Potato",
        description: "Premium red potatoes with smooth skin and creamy flesh. Perfect for boiling and salads.",
        price: 650,
        quantity: 900,
        unit: "tons",
        category: "roots-tubers",
        images: ["red-potato.jpg"],
        location: {
            country: "Ghana",
            region: "Upper West",
            city: "Wa"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-08"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Sweet Potato",
        description: "Nutritious orange-fleshed sweet potatoes rich in beta-carotene. Great for both savory and sweet dishes.",
        price: 550,
        quantity: 1500,
        unit: "tons",
        category: "roots-tubers",
        images: ["sweet-potato.jpg"],
        location: {
            country: "Ghana",
            region: "Central",
            city: "Cape Coast"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Dasheen Taro",
        description: "Large dasheen taro variety with excellent starch content. Perfect for traditional dishes.",
        price: 750,
        quantity: 400,
        unit: "tons",
        category: "roots-tubers",
        images: ["dasheen-taro.jpg"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Takoradi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-28"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Eddoe Taro",
        description: "Small-sized eddoe taro, perfect for specialty dishes. Rich, nutty flavor when cooked.",
        price: 800,
        quantity: 300,
        unit: "tons",
        category: "roots-tubers",
        images: ["eddoe-taro.jpg"],
        location: {
            country: "Ghana",
            region: "Greater Accra",
            city: "Tema"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-03"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Xanthosoma Cocoyam",
        description: "Traditional xanthosoma cocoyam variety with high starch content. Ideal for flour and paste production.",
        price: 680,
        quantity: 700,
        unit: "tons",
        category: "roots-tubers",
        images: ["xanthosoma-cocoyam.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-18"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Colocasia Cocoyam",
        description: "Premium colocasia cocoyam variety, excellent for traditional African dishes. Rich in nutrients.",
        price: 700,
        quantity: 600,
        unit: "tons",
        category: "roots-tubers",
        images: ["colocasia-cocoyam.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-20"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Sweet Orange",
        description: "Fresh, juicy sweet oranges with perfect balance of sweetness and acidity. Rich in Vitamin C.",
        price: 600,
        quantity: 1000,
        unit: "tons",
        category: "fruits",
        images: ["sweet-orange.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Meyer Lemon",
        description: "Premium Meyer lemons, sweeter and less acidic than regular lemons. Perfect for culinary use.",
        price: 800,
        quantity: 500,
        unit: "tons",
        category: "fruits",
        images: ["meyer-lemon.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Persian Lime",
        description: "Fresh Persian limes with bright, zesty flavor. Essential for beverages and cooking.",
        price: 750,
        quantity: 600,
        unit: "tons",
        category: "fruits",
        images: ["persian-lime.jpg"],
        location: {
            country: "Ghana",
            region: "Greater Accra",
            city: "Tema"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Ruby Red Grapefruit",
        description: "Sweet-tart Ruby Red grapefruits with vibrant flesh. High in antioxidants and vitamins.",
        price: 700,
        quantity: 800,
        unit: "tons",
        category: "fruits",
        images: ["ruby-grapefruit.jpg"],
        location: {
            country: "Ghana",
            region: "Central",
            city: "Cape Coast"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-08"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Honey Tangerine",
        description: "Sweet, easy-to-peel honey tangerines. Perfect for snacking and juicing.",
        price: 650,
        quantity: 700,
        unit: "tons",
        category: "fruits",
        images: ["honey-tangerine.jpg"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-05"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Kent Mango",
        description: "Premium Kent mangoes with rich, sweet flesh and minimal fiber. Excellent for fresh consumption.",
        price: 900,
        quantity: 1200,
        unit: "tons",
        category: "fruits",
        images: ["kent-mango.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-18"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Cavendish Banana",
        description: "Sweet, creamy Cavendish bananas at perfect ripeness. Ideal for direct consumption and processing.",
        price: 500,
        quantity: 1500,
        unit: "tons",
        category: "fruits",
        images: ["cavendish-banana.jpg"],
        location: {
            country: "Ghana",
            region: "Brong-Ahafo",
            city: "Sunyani"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-20"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Smooth Cayenne Pineapple",
        description: "Sweet, juicy Smooth Cayenne pineapples. Perfect balance of sweetness and acidity.",
        price: 750,
        quantity: 1000,
        unit: "tons",
        category: "fruits",
        images: ["smooth-cayenne-pineapple.jpg"],
        location: {
            country: "Ghana",
            region: "Central",
            city: "Cape Coast"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Red Lady Papaya",
        description: "Sweet, aromatic Red Lady papayas with bright orange flesh. Rich in vitamins and enzymes.",
        price: 600,
        quantity: 800,
        unit: "tons",
        category: "fruits",
        images: ["red-lady-papaya.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Pink Guava",
        description: "Fresh pink guavas with sweet-tart flavor. High in vitamin C and dietary fiber.",
        price: 550,
        quantity: 600,
        unit: "tons",
        category: "fruits",
        images: ["pink-guava.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Sweet Charlie Strawberry",
        description: "Premium Sweet Charlie strawberries, bright red and perfectly sweet. Excellent for fresh consumption.",
        price: 2200,
        quantity: 200,
        unit: "tons",
        category: "fruits",
        images: ["sweet-charlie-strawberry.jpg"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-08"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Highbush Blueberry",
        description: "Fresh highbush blueberries bursting with flavor. Rich in antioxidants.",
        price: 2500,
        quantity: 150,
        unit: "tons",
        category: "fruits",
        images: ["highbush-blueberry.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-05"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Heritage Raspberry",
        description: "Sweet, aromatic Heritage raspberries. Perfect for fresh consumption and processing.",
        price: 2800,
        quantity: 100,
        unit: "tons",
        category: "fruits",
        images: ["heritage-raspberry.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Yellow Peach",
        description: "Sweet, juicy yellow peaches with tender flesh. Perfect for fresh eating and preserves.",
        price: 1200,
        quantity: 400,
        unit: "tons",
        category: "fruits",
        images: ["yellow-peach.jpg"],
        location: {
            country: "Ghana",
            region: "Brong-Ahafo",
            city: "Sunyani"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Black Plum",
        description: "Sweet-tart black plums with deep purple flesh. Rich in antioxidants and flavor.",
        price: 1100,
        quantity: 300,
        unit: "tons",
        category: "fruits",
        images: ["black-plum.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Crimson Sweet Watermelon",
        description: "Sweet, crisp Crimson Sweet watermelons with bright red flesh. Perfect for fresh consumption.",
        price: 450,
        quantity: 2000,
        unit: "tons",
        category: "fruits",
        images: ["crimson-watermelon.jpg"],
        location: {
            country: "Ghana",
            region: "Upper East",
            city: "Bolgatanga"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-20"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Tuscan Cantaloupe",
        description: "Aromatic Tuscan cantaloupes with sweet, orange flesh. Rich in vitamins and minerals.",
        price: 600,
        quantity: 800,
        unit: "tons",
        category: "fruits",
        images: ["tuscan-cantaloupe.jpg"],
        location: {
            country: "Ghana",
            region: "Upper West",
            city: "Wa"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-18"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Honeydew Melon",
        description: "Sweet, juicy honeydew melons with pale green flesh. Excellent for fresh consumption.",
        price: 550,
        quantity: 700,
        unit: "tons",
        category: "fruits",
        images: ["honeydew-melon.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Baby Spinach",
        description: "Tender, young spinach leaves with mild flavor. Rich in iron and vitamins. Perfect for salads and cooking.",
        price: 1200,
        quantity: 300,
        unit: "tons",
        category: "vegetables",
        images: ["baby-spinach.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Curly Kale",
        description: "Fresh, crisp curly kale with deep green leaves. Packed with nutrients and antioxidants.",
        price: 1100,
        quantity: 400,
        unit: "tons",
        category: "vegetables",
        images: ["curly-kale.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Romaine Lettuce",
        description: "Crisp, elongated romaine lettuce heads. Perfect for salads and sandwiches.",
        price: 900,
        quantity: 500,
        unit: "tons",
        category: "vegetables",
        images: ["romaine-lettuce.jpg"],
        location: {
            country: "Ghana",
            region: "Greater Accra",
            city: "Tema"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-18"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Green Cabbage",
        description: "Large, firm heads of green cabbage. Excellent for cooking, slaws, and fermentation.",
        price: 600,
        quantity: 800,
        unit: "tons",
        category: "vegetables",
        images: ["green-cabbage.jpg"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Crown Broccoli",
        description: "Fresh broccoli crowns with tight, green florets. Rich in vitamins and fiber.",
        price: 1400,
        quantity: 400,
        unit: "tons",
        category: "vegetables",
        images: ["crown-broccoli.jpg"],
        location: {
            country: "Ghana",
            region: "Central",
            city: "Cape Coast"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Snow White Cauliflower",
        description: "Pure white, compact cauliflower heads. Perfect for various cooking methods.",
        price: 1300,
        quantity: 450,
        unit: "tons",
        category: "vegetables",
        images: ["snow-cauliflower.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Brussels Sprouts",
        description: "Fresh, firm Brussels sprouts. Sweet and nutty when cooked properly.",
        price: 1500,
        quantity: 300,
        unit: "tons",
        category: "vegetables",
        images: ["brussels-sprouts.jpg"],
        location: {
            country: "Ghana",
            region: "Brong-Ahafo",
            city: "Sunyani"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-08"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Nantes Carrots",
        description: "Sweet, cylindrical Nantes carrots. Perfect for fresh eating and cooking.",
        price: 800,
        quantity: 1000,
        unit: "tons",
        category: "vegetables",
        images: ["nantes-carrots.jpg"],
        location: {
            country: "Ghana",
            region: "Upper East",
            city: "Bolgatanga"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-20"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Detroit Dark Red Beetroot",
        description: "Deep red, smooth beetroots with sweet flavor. Excellent for cooking and juicing.",
        price: 750,
        quantity: 600,
        unit: "tons",
        category: "vegetables",
        images: ["detroit-beetroot.jpg"],
        location: {
            country: "Ghana",
            region: "Upper West",
            city: "Wa"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Cherry Belle Radish",
        description: "Bright red, round radishes with crisp texture. Perfect for salads and garnishing.",
        price: 900,
        quantity: 400,
        unit: "tons",
        category: "vegetables",
        images: ["cherry-radish.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Purple Top Turnip",
        description: "Classic purple-top white turnips. Versatile for cooking and storage.",
        price: 600,
        quantity: 700,
        unit: "tons",
        category: "vegetables",
        images: ["purple-turnip.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Yellow Onion",
        description: "All-purpose yellow onions with strong flavor. Essential for cooking.",
        price: 700,
        quantity: 1500,
        unit: "tons",
        category: "vegetables",
        images: ["yellow-onion.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-18"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "White Garlic",
        description: "Fresh white garlic bulbs with intense flavor. Essential cooking ingredient.",
        price: 1800,
        quantity: 400,
        unit: "tons",
        category: "vegetables",
        images: ["white-garlic.jpg"],
        location: {
            country: "Ghana",
            region: "Upper East",
            city: "Bolgatanga"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "American Flag Leek",
        description: "Long, straight leeks with white stems and dark green tops. Mild onion flavor.",
        price: 1100,
        quantity: 300,
        unit: "tons",
        category: "vegetables",
        images: ["american-leek.jpg"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "French Shallot",
        description: "Premium French shallots with delicate flavor. Perfect for gourmet cooking.",
        price: 2000,
        quantity: 200,
        unit: "tons",
        category: "vegetables",
        images: ["french-shallot.jpg"],
        location: {
            country: "Ghana",
            region: "Greater Accra",
            city: "Tema"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Cinderella Pumpkin",
        description: "Large, decorative pumpkins with sweet flesh. Perfect for cooking and decoration.",
        price: 800,
        quantity: 1000,
        unit: "tons",
        category: "vegetables",
        images: ["cinderella-pumpkin.jpg"],
        location: {
            country: "Ghana",
            region: "Central",
            city: "Cape Coast"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-20"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Black Beauty Zucchini",
        description: "Dark green zucchini with tender flesh. Versatile for cooking and grilling.",
        price: 900,
        quantity: 600,
        unit: "tons",
        category: "vegetables",
        images: ["black-zucchini.jpg"],
        location: {
            country: "Ghana",
            region: "Brong-Ahafo",
            city: "Sunyani"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Long Bottle Gourd",
        description: "Traditional bottle gourds, perfect for cooking and crafts. Tender when young.",
        price: 700,
        quantity: 800,
        unit: "tons",
        category: "vegetables",
        images: ["bottle-gourd.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Black Pepper",
        description: "Premium black peppercorns with intense aroma and pungent flavor. Essential spice for cooking.",
        price: 2800,
        quantity: 200,
        unit: "tons",
        category: "spices",
        images: ["black-pepper.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "White Pepper",
        description: "Clean, uniform white peppercorns with subtle heat. Perfect for light-colored dishes.",
        price: 3000,
        quantity: 150,
        unit: "tons",
        category: "spices",
        images: ["white-pepper.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Green Pepper",
        description: "Fresh green peppercorns with mild, bright flavor. Ideal for gourmet cooking.",
        price: 3200,
        quantity: 100,
        unit: "tons",
        category: "spices",
        images: ["green-pepper.jpg"],
        location: {
            country: "Ghana",
            region: "Greater Accra",
            city: "Tema"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Fresh Ginger",
        description: "Fresh, aromatic ginger root with spicy-sweet flavor. Essential for cooking and beverages.",
        price: 1200,
        quantity: 500,
        unit: "tons",
        category: "spices",
        images: ["fresh-ginger.jpg"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-18"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Dry Ginger",
        description: "Sun-dried ginger with concentrated flavor. Long shelf life and intense aroma.",
        price: 1800,
        quantity: 300,
        unit: "tons",
        category: "spices",
        images: ["dry-ginger.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Powdered Ginger",
        description: "Finely ground ginger powder with strong flavor. Perfect for baking and cooking.",
        price: 2200,
        quantity: 200,
        unit: "tons",
        category: "spices",
        images: ["powdered-ginger.jpg"],
        location: {
            country: "Ghana",
            region: "Brong-Ahafo",
            city: "Sunyani"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Alleppey Finger Turmeric",
        description: "Premium Alleppey finger turmeric with high curcumin content. Deep orange color.",
        price: 2500,
        quantity: 250,
        unit: "tons",
        category: "spices",
        images: ["alleppey-turmeric.jpg"],
        location: {
            country: "Ghana",
            region: "Upper East",
            city: "Bolgatanga"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Madras Turmeric",
        description: "Bright yellow Madras turmeric powder. Essential for curries and traditional dishes.",
        price: 2300,
        quantity: 300,
        unit: "tons",
        category: "spices",
        images: ["madras-turmeric.jpg"],
        location: {
            country: "Ghana",
            region: "Upper West",
            city: "Wa"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Ceylon Cinnamon",
        description: "True Ceylon cinnamon with delicate, sweet flavor. Premium quality bark.",
        price: 3500,
        quantity: 150,
        unit: "tons",
        category: "spices",
        images: ["ceylon-cinnamon.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-08"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Cassia Cinnamon",
        description: "Strong, spicy cassia cinnamon bark. Perfect for baking and cooking.",
        price: 2800,
        quantity: 200,
        unit: "tons",
        category: "spices",
        images: ["cassia-cinnamon.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Bourbon Vanilla",
        description: "Premium Bourbon vanilla beans with rich, creamy flavor. Perfect for baking.",
        price: 12000,
        quantity: 50,
        unit: "tons",
        category: "spices",
        images: ["bourbon-vanilla.jpg"],
        location: {
            country: "Ghana",
            region: "Greater Accra",
            city: "Tema"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-05"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Tahitian Vanilla",
        description: "Floral, fruity Tahitian vanilla beans. Ideal for desserts and beverages.",
        price: 13000,
        quantity: 40,
        unit: "tons",
        category: "spices",
        images: ["tahitian-vanilla.jpg"],
        location: {
            country: "Ghana",
            region: "Central",
            city: "Cape Coast"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Mexican Vanilla",
        description: "Bold, dark Mexican vanilla beans with rich aroma. Perfect for traditional baking.",
        price: 11500,
        quantity: 45,
        unit: "tons",
        category: "spices",
        images: ["mexican-vanilla.jpg"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "White Sorghum",
        description: "Premium white sorghum grains, perfect for making porridge, flour, and traditional dishes. Clean and well-sorted.",
        price: 340,
        quantity: 900,
        unit: "tons",
        category: "grains",
        images: ["white-sorghum.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    }
];

require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const createDefaultUser = require('./createDefaultUser');

async function seedProducts() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/improve-africa', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Get or create default user
        const defaultUser = await createDefaultUser();

        // Add seller ID to all products
        const productsWithSeller = products.map(product => ({
            ...product,
            seller: defaultUser._id
        }));

        // Clear existing products
        await Product.deleteMany({});

        // Insert new products
        const createdProducts = await Product.insertMany(productsWithSeller);
        
        console.log(`Successfully seeded ${createdProducts.length} products`);
        console.log('Products:', createdProducts.map(p => p.name).join(', '));

        // Disconnect from MongoDB
        await mongoose.disconnect();
    } catch (error) {
        console.error('Error seeding products:', error);
        process.exit(1);
    }
}

seedProducts(); 