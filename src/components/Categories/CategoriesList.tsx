import { fetchCategories } from "@/services/categories"
import { Col, Row } from "reactstrap"
import CategoryCard from "./CategoryCard"

export default async function CategoriesList(){

    const categories:string[] = await fetchCategories()

    return(
        <Row>
            {categories.map((category, index) => {
                const formattedCategory = category.toLowerCase().replace(/'s/g, '').replace(/\s+/g, '-')
                return (
                    <Col xs={6} sm={6} md={4} lg={3} key={index} className="h-100 my-2">
                        <CategoryCard 
                            link={`/categories/${encodeURIComponent(formattedCategory)}`}
                            title={category}
                        />
                    </Col>
                );
            })}
        </Row>
    )
}
