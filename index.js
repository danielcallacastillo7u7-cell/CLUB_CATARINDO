import express from "express";
import cors from "cors"; // 1. Importamos CORS

const app = express();

// 2. Habilitamos CORS para que Next.js pueda consultar la API
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

// Cambié "/prod" a "/products" para que coincida con el front
app.get("/products", (req, res) => {
    res.json([
        {
            id: 10 , // Si en el front usas number, aquí debe ser número
            name: "laptop prueba",
        },
    ]);
});

app.listen(port, () => {
    console.log('🚀 Server ready on port', port);
});