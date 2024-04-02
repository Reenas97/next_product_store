import { ProductInterface } from '@/services/products';
import { Col } from 'reactstrap';
import Image from "next/image";

interface ProductItemProps {
  product: ProductInterface;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
      <>
        <Col lg={6}>
          <Image
            className="card-img-top"
            src={product.image}
            alt={product.title}
            width={600}
            height={500}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </Col>
        <Col lg={6}>
          <p>{product.category}</p>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </Col>
      </>
  );
};

export default ProductItem;