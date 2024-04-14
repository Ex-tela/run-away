async function getData() {
  const res = await fetch('http://localhost:8080/product/01')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data soz')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

  return <main>
    <div>
      <img src={data.imageUrl}/>
    </div>
    <div>
      {data.name}
    </div>
    <div>
      {data.price}
    </div>
  </main>
}