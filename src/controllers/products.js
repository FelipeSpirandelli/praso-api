import Model from '../models/model';

// Create instance of Model 
const productsModel = new Model('products');

// Create get function using select method to query data
export const productsPage = async (req, res) => {
  try {
    const data = await productsModel.select( 'category_id, name, price_box, box_unit_size, price_unit, weight, discount_per_volume, stock, description, keywords');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(500).json({ messages: err.stack });
  }
};

// Create post function using insertWithReturn method to
// add data
export const addProduct = async (req, res) => {
    const 
    { 
      category_id,
      name,
      price_box,
      box_unit_size,
      price_unit,
      weight,
      discount_per_volume,
      stock,
      description,
      keywords,  
    } = req.body;
    const columns = 'category_id, name, price_box, box_unit_size, price_unit, weight, discount_per_volume, stock, description, keywords';
    const values = `'${category_id}', '${name}', '${price_box}', '${box_unit_size}', '${price_unit}', '${weight}', '${discount_per_volume}', '${stock}', '${description}', '${keywords}'`;
    try {
      const data = await productsModel.insertWithReturn(columns, values);
      res.status(200).json({ messages: data.rows });
    } catch (err) {
      res.status(200).json({ messages: err.stack });
    }
  };