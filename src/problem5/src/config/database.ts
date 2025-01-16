import { createConnection } from 'typeorm';
import { Product } from '../models/Product';

export const connectDB = async () => {
    try {
        await createConnection({
            type: "postgres",
            host: process.env.DB_HOST || "localhost",
            port: parseInt(process.env.DB_PORT || "5432"),
            username: process.env.DB_USER || "postgres",
            password: process.env.DB_PASSWORD || "postgres",
            database: process.env.DB_NAME || "product_db",
            entities: [Product],
            synchronize: true
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
}; 