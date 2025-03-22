/**
 * Seed data for products in the IMPROVE AFRICA marketplace
 * All prices are in Ghana Cedis (GH₵)
 * All locations use the 16 regions of Ghana
 * All image filenames must match exactly with files in the images/marketplace directory
 * File extensions must be correct: jpg, jpeg, webp, png, or avif as appropriate
 */

const products = [
    {
        name: "Yellow Maize",
        description: "High-quality yellow maize corn, perfect for animal feed and industrial use. Rich in carotenoids and essential nutrients.",
        price: 350,
        quantity: 1000,
        unit: "tons",
        category: "grains",
        images: ["Yellow Maize.jpeg"],
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
        images: ["White Maize.jpeg"],
        location: {
            country: "Ghana",
            region: "Bono",
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
        images: ["Basmati Rice.webp"],
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
        images: ["Hard Red Wheat.jpg"],
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
        images: ["Barley.webp"],
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
        images: ["Red Sorghum.jpg"],
        location: {
            country: "Ghana",
            region: "Savannah",
            city: "Damongo"
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
        images: ["Brown Sorghum.jpg"],
        location: {
            country: "Ghana",
            region: "North East",
            city: "Nalerigu"
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
        images: ["Sweet Sorghum.jpg"],
        location: {
            country: "Ghana",
            region: "Bono East",
            city: "Techiman"
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
        images: ["Pearl Millet.jpg"],
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
        description: "Premium quality black beans with rich flavor and creamy texture when cooked. Excellent source of protein and fiber.",
        price: 420,
        quantity: 500,
        unit: "tons",
        category: "legumes",
        images: ["Black Beans.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-03-05"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Red Kidney Beans",
        description: "Large, dark red kidney beans with excellent texture and taste. High in protein and dietary fiber.",
        price: 900,
        quantity: 400,
        unit: "tons",
        category: "legumes",
        images: ["Kidney Beans.jpg"],
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
        images: ["Pinto Beans.jpg"],
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
        description: "Small, white navy beans with mild flavor. Perfect for soups and stews.",
        price: 850,
        quantity: 600,
        unit: "tons",
        category: "legumes",
        images: ["Navy Beans.webp"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Non-GMO"],
        status: "available"
    },
    {
        name: "Green Lentils",
        description: "Nutritious green lentils that hold their shape when cooked. Perfect for salads, soups, and side dishes.",
        price: 1400,
        quantity: 300,
        unit: "tons",
        category: "legumes",
        images: ["Green Lentils.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-20"),
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
        images: ["Red Lentils.jpeg"],
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
        images: ["Yellow Split Peas.jpg"],
        location: {
            country: "Ghana",
            region: "Bono",
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
        images: ["Chickpeas.jpg"],
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
        images: ["Non-GMO Soybeans.jpg"],
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
        name: "Edamame",
        description: "Fresh green edamame beans in pods. High in protein, fiber, and nutrients.",
        price: 1100,
        quantity: 300,
        unit: "tons",
        category: "legumes",
        images: ["Edamame.avif"],
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
        name: "Conventional Soybeans",
        description: "High-quality conventional soybeans with excellent oil content. Ideal for oil extraction and protein products.",
        price: 950,
        quantity: 1000,
        unit: "tons",
        category: "oilseeds",
        images: ["Conventional Soybeans.jpg"],
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
        images: ["High-Oleic Soybeans.jpg"],
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
        images: ["Runner Groundnuts.webp"],
        location: {
            country: "Ghana",
            region: "Bono",
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
        images: ["Spanish Groundnuts.webp"],
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
        images: ["Virginia Groundnuts.webp"],
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
        images: ["Oilseed Sunflower.jpg"],
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
        images: ["Confectionary Sunflower.jpg"],
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
        description: "Premium hulled white sesame seeds with nutty flavor. High in calcium and ideal for baking, cooking, and oil production.",
        price: 1800,
        quantity: 250,
        unit: "kg",
        category: "oilseeds",
        images: ["White Sesame.webp"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-20"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Black Sesame Seeds",
        description: "Aromatic black sesame seeds rich in nutrients. Ideal for culinary and pharmaceutical uses.",
        price: 2400,
        quantity: 300,
        unit: "tons",
        category: "oilseeds",
        images: ["Black Sesame.webp"],
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
        images: ["Tenera Palm.jpg"],
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
        description: "Traditional tall-growing coconut palms with excellent yields.",
        price: 950,
        quantity: 2000,
        unit: "kg",
        category: "oilseeds",
        images: ["Dwarf Coconut.webp"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Axim"
        },
        quality: "Premium",
        harvestDate: new Date("2024-01-20"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Dwarf Coconut",
        description: "Sweet, tender dwarf coconuts with abundant water and soft meat. Early bearing variety.",
        price: 1800,
        quantity: 500,
        unit: "tons",
        category: "oilseeds",
        images: ["Dwarf Coconut.webp"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Axim"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Bitter Cassava",
        description: "High-starch bitter cassava requiring proper processing to remove cyanide compounds. Used for industrial starch and traditional preparations.",
        price: 380,
        quantity: 1200,
        unit: "kg",
        category: "roots-tubers",
        images: ["Bitter Cassava.jpg"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Takoradi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-05"),
        certifications: [],
        status: "available"
    },
    {
        name: "Sweet Cassava",
        description: "Low-cyanide sweet cassava with white, starchy flesh. Excellent for boiling, frying, or making fufu.",
        price: 450,
        quantity: 900,
        unit: "kg",
        category: "roots-tubers",
        images: ["Sweet Cassava.jpg"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Sekondi-Takoradi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-08"),
        certifications: ["Pesticide-Free"],
        status: "available"
    },
    {
        name: "White Yam",
        description: "Premium white yam tubers with smooth skin and starchy white flesh.",
        price: 550,
        quantity: 800,
        unit: "kg",
        category: "roots-tubers",
        images: ["White Yam.webp"],
        location: {
            country: "Ghana",
            region: "Bono East",
            city: "Techiman"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-05"),
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
        images: ["Yellow Yam.jpg"],
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
        description: "Purple-skinned water yams with moist, white flesh. Excellent for soups, stews, and traditional African dishes.",
        price: 750,
        quantity: 600,
        unit: "kg",
        category: "roots-tubers",
        images: ["Water Yam.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Pesticide-Free"],
        status: "available"
    },
    {
        name: "Russet Potato",
        description: "High-starch russet potatoes with fluffy interior. Perfect for baking, mashing, and french fries.",
        price: 650,
        quantity: 900,
        unit: "kg",
        category: "roots-tubers",
        images: ["Russet Potato.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-25"),
        certifications: ["Pesticide-Free"],
        status: "available"
    },
    {
        name: "Red Potato",
        description: "Waxy red potatoes with smooth skin and creamy flesh. Excellent for roasting, soups, and potato salads.",
        price: 700,
        quantity: 750,
        unit: "kg",
        category: "roots-tubers",
        images: ["Red Potato.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-20"),
        certifications: ["Pesticide-Free"],
        status: "available"
    },
    {
        name: "Sweet Potato",
        description: "Orange-fleshed sweet potatoes rich in beta-carotene. Sweet flavor and versatile for roasting, mashing, or desserts.",
        price: 550,
        quantity: 1000,
        unit: "kg",
        category: "roots-tubers",
        images: ["Sweet Potato.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-30"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Dasheen Taro",
        description: "Large dasheen taro with starchy flesh and earthy flavor. Excellent for stews, chips, and traditional dishes.",
        price: 680,
        quantity: 500,
        unit: "kg",
        category: "roots-tubers",
        images: ["Dasheen Taro.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Pesticide-Free"],
        status: "available"
    },
    {
        name: "Eddoe Taro",
        description: "Small-sized eddoe taro with crisp texture when cooked. Ideal for curries, soups, and frying.",
        price: 720,
        quantity: 400,
        unit: "kg",
        category: "roots-tubers",
        images: ["Eddoe Taro.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Keta"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Pesticide-Free"],
        status: "available"
    },
    {
        name: "Xanthosoma Cocoyam",
        description: "Starchy root crop with nutritious, delicious tubers.",
        price: 400,
        quantity: 600,
        unit: "kg",
        category: "roots-tubers",
        images: ["Xanthosoma Cocoyam.png"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Tarkwa"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-10"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Colocasia Cocoyam",
        description: "Heart-shaped leaf colocasia cocoyam with purple stems. Both corms and leaves are edible and nutritious.",
        price: 630,
        quantity: 550,
        unit: "kg",
        category: "roots-tubers",
        images: ["Colocasia Cocoyam.jpg"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Sekondi-Takoradi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Pesticide-Free"],
        status: "available"
    },
    {
        name: "Sweet Orange",
        description: "Sweet, juicy oranges with balanced flavor. Excellent for fresh eating, juicing, or zesting.",
        price: 800,
        quantity: 600,
        unit: "kg",
        category: "fruits",
        images: ["Sweet Orange.jpg"],
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
        name: "Meyer Lemon",
        description: "Hybrid lemons with sweeter, less acidic flavor than regular lemons. Great for desserts and cocktails.",
        price: 900,
        quantity: 400,
        unit: "kg",
        category: "fruits",
        images: ["Meyer Lemon.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Aburi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-08"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Persian Lime",
        description: "Seedless Persian limes with bright, aromatic flavor. Excellent for cooking, beverages, and desserts.",
        price: 950,
        quantity: 450,
        unit: "kg",
        category: "fruits",
        images: ["Persian Lime.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Aburi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-12"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Ruby Grapefruit",
        description: "Sweet-tart grapefruit with vibrant red flesh, excellent for juicing or fresh eating.",
        price: 750,
        quantity: 600,
        unit: "kg",
        category: "fruits",
        images: ["Sweet Orange.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Premium",
        harvestDate: new Date("2024-01-15"),
        certifications: ["Non-GMO"],
        status: "available"
    },
    {
        name: "Honey Tangerine",
        description: "Sweet, easy-peel honey tangerines with rich orange flavor. Low acid and excellent eating quality.",
        price: 1900,
        quantity: 300,
        unit: "tons",
        category: "fruits",
        images: ["Honey Tangerine.png"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-18"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Kent Mango",
        description: "Large, juicy Kent mangoes with rich, sweet flavor and minimal fiber. Perfect for fresh eating or desserts.",
        price: 1200,
        quantity: 800,
        unit: "kg",
        category: "fruits",
        images: ["Kent Mango.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-25"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Cavendish Banana",
        description: "Sweet and creamy Cavendish bananas, perfect for direct consumption or food processing.",
        price: 280,
        quantity: 650,
        unit: "tons",
        category: "fruits",
        images: ["Cavendish Banana.jpg"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Takoradi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-03-10"),
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
        images: ["Smooth Cayenne Pineapple.jpg"],
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
        description: "Sweet, orange-fleshed Red Lady papayas with high yield and excellent flavor. Rich in vitamins and enzymes.",
        price: 900,
        quantity: 700,
        unit: "kg",
        category: "fruits",
        images: ["Red Lady Papaya.jpg"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Takoradi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Pink Guava",
        description: "Aromatic pink guavas with sweet, tropical flavor. Rich in vitamin C and antioxidants.",
        price: 1700,
        quantity: 250,
        unit: "tons",
        category: "fruits",
        images: ["Pink Guava.webp"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Sekondi-Takoradi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-25"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Sweet Charlie Strawberry",
        description: "Sweet, juicy strawberries with excellent flavor and bright red color.",
        price: 1350,
        quantity: 250,
        unit: "kg",
        category: "fruits",
        images: ["Heritage Raspberry.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-04-05"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Highbush Blueberry",
        description: "Plump, sweet-tart blueberries with deep blue color. Rich in antioxidants and perfect for fresh eating or desserts.",
        price: 3200,
        quantity: 150,
        unit: "kg",
        category: "fruits",
        images: ["Highbush Blueberry.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Aburi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-18"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Heritage Raspberry",
        description: "Bright red, flavorful Heritage raspberries with excellent balance of sweetness and acidity. Great for fresh eating or desserts.",
        price: 3500,
        quantity: 120,
        unit: "kg",
        category: "fruits",
        images: ["Heritage Raspberry.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Aburi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-20"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Yellow Peach",
        description: "Sweet, juicy yellow peaches with excellent aroma and flavor. Perfect for fresh eating and preserving.",
        price: 2100,
        quantity: 200,
        unit: "tons",
        category: "fruits",
        images: ["Yellow Peach.png"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Black Plum",
        description: "Sweet and juicy black plums with deep purple skin. Perfect for fresh eating and preserving.",
        price: 1800,
        quantity: 250,
        unit: "tons",
        category: "fruits",
        images: ["Black Plum.avif"],
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
        name: "Crimson Sweet Watermelon",
        description: "Large, oval watermelons with vibrant red flesh and sweet, crisp texture. Perfect for summer refreshment.",
        price: 1300,
        quantity: 450,
        unit: "kg",
        category: "fruits",
        images: ["Crimson Watermelon.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-03-05"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Tuscan Cantaloupe",
        description: "Sweet, aromatic Tuscan cantaloupe with orange flesh and netted rind. Rich in vitamins A and C.",
        price: 1100,
        quantity: 400,
        unit: "kg",
        category: "fruits",
        images: ["Tuscan Cantaloupe.jpg"],
        location: {
            country: "Ghana",
            region: "Upper East",
            city: "Bolgatanga"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-03-01"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Honeydew Melon",
        description: "Sweet, juicy honeydew melons with pale green flesh. Excellent dessert quality.",
        price: 1400,
        quantity: 400,
        unit: "tons",
        category: "fruits",
        images: ["Honeydew Melon.webp"],
        location: {
            country: "Ghana",
            region: "Upper East",
            city: "Bolgatanga"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-03-01"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Baby Spinach",
        description: "Tender, young spinach leaves with mild flavor. Perfect for salads and quick cooking.",
        price: 1800,
        quantity: 100,
        unit: "tons",
        category: "vegetables",
        images: ["Baby Spinach.jpeg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-03-01"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Curly Kale",
        description: "Nutrient-rich curly kale with deep green leaves. Excellent for salads, stir-fries, and smoothies.",
        price: 550,
        quantity: 400,
        unit: "kg",
        category: "vegetables",
        images: ["Curly Kale.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Aburi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-15"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Romaine Lettuce",
        description: "Crisp, elongated romaine lettuce with green outer leaves and pale heart. Perfect for salads and wraps.",
        price: 480,
        quantity: 350,
        unit: "kg",
        category: "vegetables",
        images: ["Romaine Lettuce.jpg"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-10"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Green Cabbage",
        description: "Compact, round green cabbage with crisp texture. Versatile for slaws, stir-fries, or fermenting.",
        price: 400,
        quantity: 600,
        unit: "kg",
        category: "vegetables",
        images: ["Green Cabbage.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-20"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Crown Broccoli",
        description: "Compact broccoli crowns with tight, dark green florets. Excellent nutrition and flavor.",
        price: 1900,
        quantity: 120,
        unit: "tons",
        category: "vegetables",
        images: ["Crown Broccoli.webp"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-28"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Snow White Cauliflower",
        description: "Pure white cauliflower heads with tight florets. Excellent for roasting, steaming, or making cauliflower rice.",
        price: 750,
        quantity: 450,
        unit: "kg",
        category: "vegetables",
        images: ["Snow Cauliflower.webp"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-20"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Brussels Sprouts",
        description: "Firm, compact Brussels sprouts with excellent flavor. Perfect size for culinary applications.",
        price: 2100,
        quantity: 80,
        unit: "tons",
        category: "vegetables",
        images: ["Brussels Sprouts.webp"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-25"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Nantes Carrots",
        description: "Sweet, cylindrical carrots with minimal core and bright orange color. Excellent for fresh eating and cooking.",
        price: 480,
        quantity: 700,
        unit: "kg",
        category: "vegetables",
        images: ["Nantes Carrot.jpg"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-10"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Detroit Dark Red Beetroot",
        description: "Deep red beetroot with sweet, earthy flavor. Excellent for roasting, juicing, or pickling.",
        price: 550,
        quantity: 500,
        unit: "kg",
        category: "vegetables",
        images: ["Detroit Beetroot.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-18"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Cherry Belle Radish",
        description: "Bright red, round radishes with crisp white flesh. Perfect for salads, garnishes, and quick pickling.",
        price: 450,
        quantity: 350,
        unit: "kg",
        category: "vegetables",
        images: ["Cherry Radish.webp"],
        location: {
            country: "Ghana",
            region: "Greater Accra",
            city: "Accra"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-15"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Purple Top Turnip",
        description: "Sweet and mild purple top turnips with crisp white flesh. Excellent for roasting, mashing, or adding to stews.",
        price: 480,
        quantity: 400,
        unit: "kg",
        category: "vegetables",
        images: ["Purple Turnip.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-25"),
        certifications: ["Pesticide-Free"],
        status: "available"
    },
    {
        name: "Yellow Onion",
        description: "Versatile, all-purpose onions with golden skin and mild flavor.",
        price: 420,
        quantity: 800,
        unit: "kg",
        category: "vegetables",
        images: ["Yellow Onion.webp"],
        location: {
            country: "Ghana",
            region: "Upper East",
            city: "Bolgatanga"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-02-15"),
        certifications: ["Non-GMO"],
        status: "available"
    },
    {
        name: "White Garlic",
        description: "Large, flavorful garlic bulbs with easy-to-peel cloves and strong aroma.",
        price: 550,
        quantity: 650,
        unit: "kg",
        category: "vegetables",
        images: ["White Garlic.avif"],
        location: {
            country: "Ghana",
            region: "Upper East",
            city: "Bolgatanga"
        },
        quality: "Premium",
        harvestDate: new Date("2024-02-20"),
        certifications: ["Non-GMO"],
        status: "available"
    },
    {
        name: "American Flag Leek",
        description: "Large, thick-stemmed leeks with a mild onion flavor. Ideal for soups, stews, and sautéing.",
        price: 750,
        quantity: 300,
        unit: "kg",
        category: "vegetables",
        images: ["American Leek.jpg"],
        location: {
            country: "Ghana",
            region: "Central",
            city: "Cape Coast"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-15"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "French Shallot",
        description: "Mild, aromatic French shallots with copper skin and pink-purple flesh. Perfect for sauces and dressings.",
        price: 850,
        quantity: 250,
        unit: "kg",
        category: "vegetables",
        images: ["French Shallot.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-18"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Cinderella Pumpkin",
        description: "Large, ribbed Cinderella pumpkins with sweet, smooth flesh. Ideal for pies, roasting, and fall displays.",
        price: 800,
        quantity: 350,
        unit: "kg",
        category: "vegetables",
        images: ["Cinderella Pumpkin.jpg"],
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
        name: "Black Beauty Zucchini",
        description: "Dark green, slender zucchini with tender flesh and delicate flavor. Perfect for grilling, stir-fries, and baking.",
        price: 600,
        quantity: 450,
        unit: "kg",
        category: "vegetables",
        images: ["Black Zucchini.jpg"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-25"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Bottle Gourd",
        description: "Fresh, young bottle gourds with tender flesh. Perfect for traditional dishes.",
        price: 1200,
        quantity: 150,
        unit: "tons",
        category: "vegetables",
        images: ["Bottle Gourd.webp"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-03-05"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Black Pepper",
        description: "Premium black peppercorns with strong, pungent flavor. Perfect for table grinders and cooking.",
        price: 3000,
        quantity: 80,
        unit: "tons",
        category: "spices",
        images: ["Black Pepper.png"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Sekondi-Takoradi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-20"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "White Pepper",
        description: "Clean, uniform white peppercorns with subtle heat. Perfect for light-colored dishes.",
        price: 850,
        quantity: 400,
        unit: "kg",
        category: "spices",
        images: ["White Pepper.webp"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Sekondi-Takoradi"
        },
        quality: "Premium",
        harvestDate: new Date("2024-01-05"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Green Pepper",
        description: "Crisp, mild green bell peppers with thick walls. Perfect for stuffing, salads, and cooking.",
        price: 550,
        quantity: 650,
        unit: "kg",
        category: "vegetables",
        images: ["Green Pepper.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-30"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Fresh Ginger",
        description: "Fresh, aromatic ginger root with spicy-sweet flavor. Essential for cooking and beverages.",
        price: 1200,
        quantity: 500,
        unit: "tons",
        category: "spices",
        images: ["Fresh Ginger.jpg"],
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
        description: "Dehydrated ginger with concentrated flavor and aroma. Perfect for spice blends and cooking.",
        price: 2800,
        quantity: 150,
        unit: "tons",
        category: "spices",
        images: ["Dry Ginger.jpeg"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-20"),
        certifications: ["Organic", "Sustainable Farming"],
        status: "available"
    },
    {
        name: "Powdered Ginger",
        description: "Finely ground ginger powder, perfect for baking, cooking, and medicinal uses.",
        price: 3800,
        quantity: 50,
        unit: "tons",
        category: "spices",
        images: ["Powdered Ginger.webp"],
        location: {
            country: "Ghana",
            region: "Eastern",
            city: "Koforidua"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-15"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Alleppey Finger Turmeric",
        description: "High-curcumin Alleppey turmeric with deep orange interior. Premium quality for curries, medicinal uses, and dyeing.",
        price: 1900,
        quantity: 200,
        unit: "kg",
        category: "spices",
        images: ["Alleppey Turmeric.jpg"],
        location: {
            country: "Ghana",
            region: "Volta",
            city: "Ho"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-15"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Madras Turmeric",
        description: "Aromatic Madras turmeric with deep color and balanced flavor. Perfect for culinary and medicinal uses.",
        price: 3400,
        quantity: 70,
        unit: "tons",
        category: "spices",
        images: ["Madras Turmeric.webp"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-15"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Ceylon Cinnamon",
        description: "True Ceylon cinnamon with delicate, sweet flavor. Premium quality for culinary and medicinal uses.",
        price: 4200,
        quantity: 40,
        unit: "tons",
        category: "spices",
        images: ["Ceylon Cinnamon.jpg"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Sekondi-Takoradi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-10"),
        certifications: ["Organic", "Non-GMO"],
        status: "available"
    },
    {
        name: "Cassia Cinnamon",
        description: "Aromatic cassia cinnamon with strong, spicy flavor. Perfect for baking and cooking.",
        price: 3800,
        quantity: 50,
        unit: "tons",
        category: "spices",
        images: ["Cassia Cinnamon.jpg"],
        location: {
            country: "Ghana",
            region: "Central",
            city: "Cape Coast"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-15"),
        certifications: ["Organic"],
        status: "available"
    },
    {
        name: "Bourbon Vanilla",
        description: "Premium Bourbon vanilla beans with deep, rich flavor. Ideal for baking and desserts.",
        price: 12000,
        quantity: 50,
        unit: "kg",
        category: "spices",
        images: ["Bourbon Vanilla.jpg"],
        location: {
            country: "Ghana",
            region: "Western",
            city: "Sekondi-Takoradi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-10"),
        certifications: ["Organic", "Fair Trade"],
        status: "available"
    },
    {
        name: "Tahitian Vanilla",
        description: "Fragrant Tahitian vanilla beans with floral notes. Premium quality for gourmet products.",
        price: 14000,
        quantity: 40,
        unit: "kg",
        category: "spices",
        images: ["Tahitian Vanilla.webp"],
        location: {
            country: "Ghana",
            region: "Greater Accra",
            city: "Accra"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-05"),
        certifications: ["Organic", "Fair Trade"],
        status: "available"
    },
    {
        name: "Mexican Vanilla",
        description: "Authentic Mexican vanilla beans with bold, spicy notes. Excellent for savory and sweet applications.",
        price: 11000,
        quantity: 60,
        unit: "kg",
        category: "spices",
        images: ["Mexican Vanilla.webp"],
        location: {
            country: "Ghana",
            region: "Ashanti",
            city: "Kumasi"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-08"),
        certifications: ["Organic", "Fair Trade"],
        status: "available"
    },
    {
        name: "White Sorghum",
        description: "High-yield white sorghum with large, pale grains. Excellent for flour, porridge, and brewing.",
        price: 420,
        quantity: 1000,
        unit: "tons",
        category: "grains",
        images: ["White Sorghum.jpg"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Grade A",
        harvestDate: new Date("2024-01-25"),
        certifications: ["Non-GMO"],
        status: "available"
    },
    {
        name: "Premium White Sesame",
        description: "Clean, high-oil content white sesame seeds for food and oil production.",
        price: 1800,
        quantity: 400,
        unit: "kg",
        category: "oilseeds",
        images: ["White Sesame.webp"],
        location: {
            country: "Ghana",
            region: "Northern",
            city: "Tamale"
        },
        quality: "Premium",
        harvestDate: new Date("2024-01-10"),
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
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/improve-africa');

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