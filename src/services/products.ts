export interface ProductInterface {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export const fetchProducts = async () =>{
    const response = await fetch("https://fakestoreapi.com/products?limit=1000");
    const products: ProductInterface[] = await response.json();
    return products;
} //todos os produtos

export const fetchProduct = async (id: string | number) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product: ProductInterface = await response.json()
    return product
} //produto especifico
