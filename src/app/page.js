import Image from "next/image";

export async function generateStaticParams(){
    const products = await fetch('/products.json').then(r => r.json())

    products.map(p=>{
      return {product: p}
    })
}

export async function getProducts(){
  const products = await fetch('/products.json').then(r => r.json())
  return products

}

export default function Home({params:{product}}) {
  const allProducts = getProducts()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {allProducts.map(p=>{
        return(
          <div className="grid grid-cols-4 gap-4 max-w-screen-lg w-[90%]">
            <h1>{p.desc}</h1>
            <Image src={p.src} width={'100px'} height={'100px'} alt={`pic${p.id}`}/>
          </div>
          
        )
      })}
    </main>
  );
}
