import Model from '../models/model';

// Create instance of Model 
const categoriesModel = new Model('categories');

// Create get function using select method to query data
export const categoriesPage = async (req, res) => {
  try {
    const data = await categoriesModel.select('name, description, keywords');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

// Create post function using insertWithReturn method to
// add data
export const addCategory = async (req, res) => {
    const 
    { 
      name,
      description,
      keywords  
    } = req.body;
    const columns = 'name, description, keywords';
    const values = `'${name}', '${description}', '${keywords}'`;
    try {
      const data = await categoriesModel.insertWithReturn(columns, values);
      res.status(200).json({ messages: data.rows });
    } catch (err) {
      res.status(200).json({ messages: err.stack });
    }
  };