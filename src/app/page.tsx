import CategoriesList from "@/components/Categories/CategoriesList";
import styles from "./page.module.css";
import { Col, Container, Row } from "reactstrap";

export default function Home() {
  return (
    <main>
      <section className="margintDefault marginbDefault">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h1 className={`${styles.homeMainText} text-center`}>Tudo o que você precisa com o <span>preço que você gosta</span>!</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="marginbDefault">
        <Container>
          <CategoriesList />
        </Container>
      </section>
    </main>
  );
}
