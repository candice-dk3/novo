import { getProdsDb, getProdDb, addProdDb, deleteProdDb, updateProdDb } from '../model/itemDb.js';

const getProds = async (req, res) => {
  try {
    const prods = await getProdsDb();
    res.json(prods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products' });
  }
};

const getProd = async (req, res) => {
  try {
    const prod = await getProdDb(req.params.id);
    if (!prod) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(prod)
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching prod' });
  }
};

const addProd = async (req, res) => {
    try {
      const { prodName, prodDesc, prodPrice, prodQuantity, Description, prodType, prodCategory, prodImg, prodImg2, prodImg3, prodImg4, prodImg5, Type, prodMaterial, Colour, prodCode, prodAssem } = req.body;

      const newProd = await addProdDb(prodName, prodDesc, prodPrice, prodQuantity, Description, prodType, prodCategory, prodImg, prodImg2, prodImg3, prodImg4, prodImg5, Type, prodMaterial, Colour, prodCode, prodAssem);
      res.json(newProd);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding product' });
    }
};

const deleteProd = async (req, res) => {
    try {
        let {id }= req.body;
        await deleteProdDb(req.params.id);
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting product' });
    }
}

const updateProd = async (req, res) => {
try {
    const { id } = req.params;
    const { prodName, prodDesc, prodPrice, prodQuantity, Description, prodType, prodCategory, prodImg, prodImg2, prodImg3, prodImg4, prodImg5, Type, prodMaterial, Colour, prodCode, prodAssem, } = req.body;
    const item = await getProdDb(id);
    if (!item) {
    res.status(404).json({ message: 'Product not found' });
    } else {
    await updateProdDb(prodName, prodDesc, prodPrice, prodQuantity, Description, prodType, prodCategory, prodImg, prodImg2, prodImg3, prodImg4, prodImg5, Type, prodMaterial, Colour, prodCode, prodAssem, id);
    res.json({ message: 'Product updated successfully' });
    }
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating product' });
}
};

export { getProds, getProd, addProd, deleteProd, updateProd }