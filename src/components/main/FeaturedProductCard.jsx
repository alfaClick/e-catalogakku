import React from 'react'

function FeaturedProductCard(props) {
  return (
    <div className="h-full">
      <div className="card bg-base-100 max-w-[20rem] w-full shadow-xl hover:shadow-2xl transition duration-300 ease-in-out h-full flex flex-col">
        <figure className="px-10 pt-10 flex-shrink-0">
          <img
            src={props.image}
            alt="Product"
            className="rounded-xl w-[70%] object-contain"
          />
        </figure>
        <div className="card-body flex-1 flex flex-col justify-between items-center text-center p-6">
          <div className="flex flex-col items-center justify-center flex-1 w-full">
            <h2 className="card-title mb-4">{props.title}</h2>
            <p className="text-center flex-1 w-full">{props.description}</p>
          </div>
          <p className="mt-auto pt-4 opacity-70">{props.kind}</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProductCard
