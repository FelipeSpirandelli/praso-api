import express from 'express';
import { indexPage, productsPage, messagesPage } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);

indexRouter.get('/products', productsPage);

indexRouter.get('/messages', messagesPage);

export default indexRouter;