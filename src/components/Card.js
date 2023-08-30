import React from 'react';

const Card = ({ data}) => {
    const { title } = data;
  return (
    <div className="card">
      <h2 className="card-title text-red">{title}</h2>
      {/* {content.map((item) => (
        <div key={item.id} className="card-content">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Card;
