import { ProductInterface } from "@/services/products";
import Link from "next/link";
import Image from "next/image";
import { Card } from "reactstrap";
import styles from "./styles.module.css";
import ProductPrice from "./ProductPrice";

interface ProductCardProps {
    product: ProductInterface;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    if (!product){
        return <h1>Ainda não há produtos cadastrados!</h1>
    }

    return (
        <Card className={styles.product__card}>
            <Image
                className="card-img-top"
                src={product.image}
                alt={product.title}
                width={600}
                height={500}
                style={{ width: "150px", height: "auto" }}
                priority
            />
            <div className="my-4 text-center">
                <h2>{product.title}</h2>
                <ProductPrice
                    price = {product.price}
                />
            </div>
            <Link href={`/products/${product.id}`} className={styles.btnPurple}>Ver mais</Link>
        </Card>
    );
};

export default ProductCard;
