import Link from "next/link"
import styles from "./styles.module.css"

export default function CategoryCard(props:any){
    return(
        <div className={styles.categoryItem}>
            <Link href={props.link}>
                <h2>{props.title}</h2>
            </Link>
        </div>
    )
}