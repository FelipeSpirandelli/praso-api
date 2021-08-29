import express from 'express';
import { indexPage, productsPage, addProduct, categoriesPage, addCategory, authPage } from '../controllers';
import { authMiddleware } from '../middleware';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);

indexRouter.post('/auth', authPage);

indexRouter.get('/categories', authMiddleware, categoriesPage);

indexRouter.post('/categories', authMiddleware, addCategory);

indexRouter.get('/products', authMiddleware, productsPage);

indexRouter.post('/products', authMiddleware, addProduct);

export default indexRouter;