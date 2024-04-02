"use client"

import { useExchangeRate } from "@/hooks/useExchangeRate"
import styles from "./styles.module.css"

export default function ProductPrice(props:any){
    const exchangeRate = useExchangeRate()
    return(
        <>
            <p className={styles.ProductPrice}>
              R$ {(props.price * exchangeRate).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
            </p>
        </>
    )
}