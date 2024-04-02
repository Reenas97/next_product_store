import { ProductInterface } from "@/services/products";
import { Col, Row } from "reactstrap";
import ProductCard from "./ProductCard";


interface ProductListProps{
    products: ProductInterface[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {

    if (!products){
        return <h1>Ainda não há produtos cadastrados!</h1>
    }

    return (
        <Row className="justify-content-center">
            {products.map(product =>(
                <Col md={6} lg={4} key={product.id} className="my-2 h-auto">
                    <ProductCard
                        product={product}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default ProductList