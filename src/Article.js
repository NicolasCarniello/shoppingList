import React from 'react'

const Articles = ({ id, title, img, price }) => {
  return (
    <div className="item" key={id}>
      <img src={img} alt={title} width={70} />
      <h5>{title}</h5>
      <h3 className="price">${price}</h3>
      <hr />
    </div>
  )
}

export default Articles
