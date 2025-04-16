import React from 'react'

function ProductCard(product) {
  return (
    <div
      key={product.id}
      className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <figure className="px-10 pt-10">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-[30%] object-contain h-48"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title mb-4 text-gray-900 ">{product.title}</h2>
        <p className="text-gray-900 text-lg">{product.description}</p>
      </div>
    </div>
  )
}

export default ProductCard
