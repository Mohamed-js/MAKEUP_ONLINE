import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemById } from '../actions';
import ProductShow from '../components/ProductShow';

const Product = () => {
  const prod = useParams(':id');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemById(prod.id));
  }, [dispatch, prod]);

  const product = useSelector((state) => state.makeup.item);

  return <div>{product && <ProductShow product={product} />}</div>;
};

export default Product;
