import { ProductInterface } from "./products";

export const fetchCategories= async () =>{
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const categories:[] = await response.json();
    return categories
}

export const fetchCategoryProducts = async (category: string) =>{
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const products = await response.json()
    return products
}

