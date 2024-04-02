import { fetchProduct } from '@/services/products';
import { Col, Container, Row } from 'reactstrap';
import Image from "next/image";
import Link from 'next/link';
import styles from './styles.module.css'
import ProductPrice from '@/components/Products/ProductPrice';

interface Iparams {
  productId?: string | number
}


const Product = async ({ params }:any) => {

  const pathname = params.id

  const product = await fetchProduct(pathname);

  return (
    <div className='margintDefault marginbDefault'>
        <Container>
            <Row className='g-md-5'>
                {product ? (
                    <>
                        <Col lg={5}>
                            <Image
                                className="card-img-top mx-auto mx-lg-0"
                                src={product.image}
                                alt={product.title}
                                width={600}
                                height={500}
                                style={{ width: "400px", height: "auto", display:"block" }}
                                priority
                            />
                        </Col>
                        <Col lg={7}>
                            <Link 
                              href={`/categories/${product.category.toLowerCase().replace(/'s/g, '').replace(/\s+/g, '-')}`}
                              className={styles.ProductCategoryLink}
                            >
                              {product.category}
                            </Link>
                            <h1 className={styles.ProductTitle}>{product.title}</h1>
                            <p>{product.description}</p>
                            <ProductPrice 
                              price = {product.price}
                            />
                        </Col>
                    </>
                ) : (
                  <Col>
                    <h1>Carregando...</h1>
                  </Col>
                )}           
            </Row>
        </Container>
    </div>
  );
};

export default Product;
