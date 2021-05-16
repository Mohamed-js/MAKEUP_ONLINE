import React from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';

const Cover = () => (
  <div className="cover">
    <div className="cover-pic">
      <img src={img1} alt="cover" />
    </div>
    <div className="cover-pic">
      <img src={img2} alt="cover" />
    </div>
    <div className="cover-pic middle">
      <img src={img3} alt="cover" />
    </div>
    <div className="cover-pic">
      <img src={img4} alt="cover" />
    </div>
    <div className="cover-pic">
      <img src={img5} alt="cover" />
    </div>
  </div>
);

export default Cover;
