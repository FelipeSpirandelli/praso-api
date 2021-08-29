import { pool } from '../models/pool';
import {
  insertCategory,
  insertProduct,
  insertUser,
  createCategoriesTable,
  createProductsTable,
  createUsersTable,
  dropCategoriesTable,
  dropProductsTable,
  dropUsersTable
} from './queries';

export const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    console.log(q)
    await pool.query(q)
    console.log(q)
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropCategoriesTable, dropProductsTable, dropUsersTable ]);
export const createTables = () => executeQueryArray([ createCategoriesTable, createProductsTable, createUsersTable ]);
export const insertIntoTables = () => executeQueryArray([ insertCategory, insertProduct, insertUser ]);