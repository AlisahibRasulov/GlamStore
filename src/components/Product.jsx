// import React from 'react'

const Product = ({product}) => {
  const {id,image,category,title,description,price,rating} = product;
  return (
    <div className="bg-white ring-1 ring-slate-900/5 rounded-xl group">
        <div className="bg-white flexCenter m-1.5 py-10 rounded-xl ring-1 ring-slate-200/20 shadow-sm relative">
            <img src={image} alt="productImg" height={122} width={122} className="object-contain aspect-square"/>
        </div>
        <div>
          <h5>{category}</h5>
          <h4>{title}</h4>
          <p>{description}</p>
          <div>
            <h6>${price}</h6>
            <p>sales ({rating.count})</p>
          </div>
        </div>
    </div>
  )
}

export default Product