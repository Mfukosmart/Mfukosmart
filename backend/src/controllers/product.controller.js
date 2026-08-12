let products = [
  {
    id: 1,
    name: "Tomatoes",
    category: "Vegetables",
    buyingPrice: 80,
    sellingPrice: 120,
    quantity: 50,
    unit: "Kg",
    reorderLevel: 10,
  },
];

// GET ALL PRODUCTS
exports.getProducts = (req, res) => {
  res.json(products);
};

// GET SINGLE PRODUCT
exports.getProduct = (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.json(product);
};

// CREATE PRODUCT
exports.createProduct = (req, res) => {
  const {
    name,
    category,
    buyingPrice,
    sellingPrice,
    quantity,
    unit,
    reorderLevel,
  } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Product name is required",
    });
  }

  const product = {
    id: products.length + 1,
    name,
    category,
    buyingPrice,
    sellingPrice,
    quantity,
    unit,
    reorderLevel,
  };

  products.push(product);

  res.status(201).json({
    success: true,
    message: "Product added successfully",
    product,
  });
};

// UPDATE PRODUCT
exports.updateProduct = (req, res) => {
  const id = Number(req.params.id);

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  products[index] = {
    ...products[index],
    ...req.body,
  };

  res.json({
    success: true,
    message: "Product updated successfully",
    product: products[index],
  });
};

// DELETE PRODUCT
exports.deleteProduct = (req, res) => {
  const id = Number(req.params.id);

  products = products.filter((p) => p.id !== id);

  res.json({
    success: true,
    message: "Product deleted successfully",
  });
};