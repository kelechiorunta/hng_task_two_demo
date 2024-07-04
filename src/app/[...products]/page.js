import React, { lazy } from 'react'

const AllProducts = lazy(async()=> await import('../components/AllProducts'))

export default function page({params}) {
    const {product} = params
  return (
    <div>
        <AllProducts product={product}/>
    </div>
  )
}
