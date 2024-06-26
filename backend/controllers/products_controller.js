import Products from "../modules/products_module.js";


export const listProducts = async (req, res) => {
    try {
        const products = await Products.find({ userRef: req.params.id });
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const addProduct = async (req, res) => {
    try {
        const product = await Products.create(req.body);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        if (!product) {
            return res.status(200).json({ success: false, error: "Product not found" });
        }
        await Products.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "Deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const updateProduct = async (req, res) => {
    const product = await Products.findById(req.params.id);
        if (!product) {
            return res.status(200).json({ success: false, error: "Product not found" });
        }
    try {
        const updatedProduct = await Products.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );
        res.status(200).json(updatedProduct)
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const detailsProduct = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        if (!product) {
            return res.status(200).json({ success: false, error: "Products not found" });
        }
        res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const searchProducts = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const start = parseInt(req.query.start) || 0;
    let category = req.query.category;
    if (category === undefined || category === "all") {
      category = { $in: ["Vegetables", "Fruits"]};
    }
    const search = req.query.search || "";
    const sort = req.query.sort || "createdAt";
    const order = req.query.order || "desc";
    const products = await Products.find({  
      title: { $regex: search, $options: 'i'}, category
    })
    .sort({ [sort]: order})
    .limit(limit)
    .skip(start)
    return res.status(200).json(products)
  } catch (error) {
    next(error);
  }
}
