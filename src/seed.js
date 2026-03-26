
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase/config.js";

const products = [
    {
        name: "Smartphone X",
        price: 999,
        stock: 10,
        category: "electronics",
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1780&auto=format&fit=crop",
        description: "Latest smartphone with advanced features."
    },
    {
        name: "Laptop Pro",
        price: 1299,
        stock: 5,
        category: "electronics",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
        description: "High performance laptop for professionals."
    },
    {
        name: "Wireless Headphones",
        price: 199,
        stock: 20,
        category: "electronics",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
        description: "Noise cancelling wireless headphones."
    },
    {
        name: "T-Shirt Basic",
        price: 25,
        stock: 50,
        category: "clothing",
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop",
        description: "Comfortable cotton t-shirt."
    },
    {
        name: "Jeans Classic",
        price: 60,
        stock: 30,
        category: "clothing",
        img: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=2070&auto=format&fit=crop",
        description: "Classic blue jeans looking good."
    }
];

const seedDatabase = async () => {
    try {
        const productsCollection = collection(db, "products");
        console.log("Seeding database...");

        for (const product of products) {
            const docRef = await addDoc(productsCollection, product);
            console.log(`Product added with ID: ${docRef.id}`);
        }

        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};

seedDatabase();
