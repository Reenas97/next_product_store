import ProductList from '@/components/Products/ProductList';
import { fetchProducts, ProductInterface } from '../../services/products';
import { Container } from 'reactstrap';

export const metadata = {
    title: "Produtos | Fake Store",
    description: "Muitos produtos fakes com o preço que você gosta",
    openGraph: {
        title: "Produtos | Fake Store",
        description: "Muitos produtos fakes com o preço que você gosta",
    }
}

export default async function ProductsPage() {

    const products:ProductInterface[] = await fetchProducts()

    return (
        <main className='margintDefault marginbDefault'>
            <Container>
                <h1>Produtos</h1>
                <ProductList 
                 products={products}
                />
            </Container>
        </main>
    );
}