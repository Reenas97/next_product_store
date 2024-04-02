import ProductList from "@/components/Products/ProductList"
import { fetchCategoryProducts } from "@/services/categories"
import { ProductInterface } from "@/services/products"
import { Container } from "reactstrap"

export default async function MenClothing(){


    const category = `jewelery`

    const products:ProductInterface[] = await fetchCategoryProducts(category)

    return(
        <main className="margintDefault marginbDefault">
            <Container>
            <ProductList 
                 products={products}
                />
            </Container>
        </main>
    )
}