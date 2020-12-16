import React, { useEffect } from "react";
import styles from "./ProductsGrid.module.css";
import Filters from "./Filters";
import ProductsList from "./ProductsList";
import { useStoreData } from "../../contexts/StoreDataContext";

export default function ProductsGrid({ match }) {
  const { setCategory } = useStoreData();
  const {
    params: { category },
  } = match;
  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  return (
    <div className={styles.container}>
      <Filters />
      <ProductsList />
    </div>
  );
}
