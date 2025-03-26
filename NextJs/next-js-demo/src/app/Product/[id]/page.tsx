// here [] is used for nested routing
// here id is used as a dynamic parameter
// here we can use any name instead of id
//
export default async function Product({params}:{params:{id: string}}){
  const{id} = await params;

  return <h1>Product: {id}</h1>
}