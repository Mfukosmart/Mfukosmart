let sales = [];

exports.getSales = (req, res) => {
  res.status(200).json(sales);
};

exports.getSaleById = (req, res) => {
  const id = Number(req.params.id);

  const sale = sales.find((s) => s.id === id);

  if (!sale) {
    return res.status(404).json({
      success: false,
      message: "Sale not found",
    });
  }

  res.json(sale);
};

exports.createSale = (req, res) => {
  const { customer, paymentMethod, items } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({
      success: false,
      message: "No products selected",
    });
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.cartQty * item.sellingPrice,
    0
  );

  const vat = subtotal * 0.16;
  const total = subtotal + vat;

  const sale = {
    id: sales.length + 1,
    receiptNo: `MT-${Date.now()}`,
    customer: customer || "Walk-in Customer",
    paymentMethod,
    items,
    subtotal,
    vat,
    total,
    createdAt: new Date(),
  };

  sales.push(sale);

  res.status(201).json({
    success: true,
    message: "Sale completed successfully",
    sale,
  });
};