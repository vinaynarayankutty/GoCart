import api from './api';

const listProducts = async () => {
  return api.get('/products').then(response => response.data);
};

const getProductDetails = async ({id}: {id: number}) => {
  return api.get(`/products/${id}`).then(response => response.data);
};

export {listProducts, getProductDetails};
