import Model from '../models/model';

// Create instance of Model 
const messagesModel = new Model('messages');

// Create get function using select method to query data
export const messagesPage = async (req, res) => {
  try {
    const data = await messagesModel.select('name, message');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

// Create post function using insertWithReturn method to
// add data
export const addMessage = async (req, res) => {
    const { name, message } = req.body;
    const columns = 'name, message';
    const values = `'${name}', '${message}'`;
    try {
      const data = await messagesModel.insertWithReturn(columns, values);
      res.status(200).json({ messages: data.rows });
    } catch (err) {
      res.status(200).json({ messages: err.stack });
    }
  };