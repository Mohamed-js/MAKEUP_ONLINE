import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      category: 'Blush',
      img: 'http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/017/original/open-uri20180630-4-1r5paz3?1530390370',
    },
    {
      category: 'Bronzer',
      img: 'http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/032/original/open-uri20180630-4-1bl3btv?1530390381',
    },
    {
      category: 'Eyebrow',
      img: 'http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/987/original/data?1514082776',
    },
    {
      category: 'Eyeliner',
      img: 'http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/041/original/open-uri20180630-4-1huiv9y?1530390387',
    },
    {
      category: 'Eyeshadow',
      img: 'http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/024/original/open-uri20180630-4-13b5ehh?1530390375',
    },
    {
      category: 'Foundation',
      img: 'http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/043/original/open-uri20180706-4-nszgw9?1530919194',
    },
    {
      category: 'Lipstick',
      img: 'http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/044/original/data?1531071233',
    },
    {
      category: 'Mascara',
      img: 'http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/018/original/open-uri20180630-4-g58t74?1530390371',
    },
  ];

  return (
    <div className="items categories">
      {categories.map((category) => (
        <div className="card" key={category.category}>
          <Link to={`category/${category.category}`}>
            <div className="product-img-container">
              <img src={category.img} alt={category.category} />
            </div>
            <h3>{category.category}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
