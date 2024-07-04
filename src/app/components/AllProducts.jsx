import Image from 'next/image'
import React from 'react'


export default function AllProducts({product}) {
  return (
    <div>
        {product && product.map(p => {
            return (
                <div className='grid grid-cols-2 gap-4 w-full max-w-screen-lg 
                bg-[rgba(0,0,0,0.4)] shadow-lg' key={p.id}>
                    <Image src={p.id} alt={`product ${id}`}/>
                    <p className='desc'>{p.description}</p>
                </div>
            )
        })}
    </div>
  )
}
