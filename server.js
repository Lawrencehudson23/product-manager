const express = require("express");
const cors = require('cors');
const app = express();

require("./server/config/mongoose.config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const productRoutes = require("./server/routes/product.routes");
productRoutes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port port 🔥`);