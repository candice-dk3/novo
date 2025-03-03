import {pool} from '../config/config.js';

const getProdsDb = async()=>{
  let [data] = await pool.query('SELECT * FROM products');
  return data;
}

const getProdDb = async (id) =>{
  const [data] = await pool.query('SELECT * FROM products WHERE prodID = ?', [id]);
  if (!data) {
    return null
  }
  return data;
}

const addProdDb = async (prodName, prodDesc, prodPrice, prodQuantity, Description, prodType, prodCategory, prodImg, Type, prodMaterial, Colour, prodCode, prodAssem) => {
    try {
      await pool.query(`
        INSERT INTO products (prodName, prodDesc, prodPrice, prodQuantity, Description, prodType, prodCategory, prodImg, Type, prodMaterial, Colour, prodCode, prodAssem)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
        `, [prodName, prodDesc, prodPrice, prodQuantity, Description, prodType, prodCategory, prodImg, Type, prodMaterial, Colour, prodCode, prodAssem]);
      return { message: 'Product added successfully' };
    } catch (error) {
      return { message: 'Error adding product' };
    }
};

const deleteProdDb = async(id)=>{
  await pool.query('DELETE FROM products WHERE prodID = ?',[id]);
  return { message: 'Product deleted successfully' };
}

const updateProdDb = async(prodName, prodDesc, prodPrice, prodQuantity, Description, prodType, prodCategory, prodImg, Type, prodMaterial, Colour, prodCode, prodAssem, prodID)=>{
  await pool.query('UPDATE products SET prodName = ?, prodDesc = ?, prodPrice = ?, prodQuantity = ?, Description = ?, prodType = ?, prodCategory = ?, prodImg = ?, Type = ?, prodMaterial = ?, Colour = ?, prodCode = ?, prodAssem = ? WHERE prodID = ?',
    [prodName, prodDesc, prodPrice, prodQuantity, Description, prodType, prodCategory, prodImg, Type, prodMaterial, Colour, prodCode, prodAssem, prodID]);
  return { message: 'Product updated successfully' };
}

export {getProdsDb, getProdDb, addProdDb, deleteProdDb, updateProdDb}
