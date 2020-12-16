import React, { useContext, useEffect, useState } from "react";

const StoreDataContext = React.createContext();

export function useStoreData() {
  return useContext(StoreDataContext);
}

export function StoreDataProvider({ children }) {
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");
  const [productsList, setProductsList] = useState([]);
  const [productSpecs, setProductSpecs] = useState({});

  useEffect(() => {
    const storeData = [
      {
        category: "acoustic-guitar",
        id: "1",
        name: "Acoustic Guitar",
        photo:
          "https://wi.wallpapertip.com/wsimgs/25-251810_1080p-acoustic-guitar-wallpaper-hd.jpg",
        price: "5,500",
      },
      {
        category: "acoustic-guitar",
        id: "2",
        name: "Acoustic Guitar",
        price: "5,500",
      },
      {
        category: "acoustic-guitar",
        id: "3",
        name: "Acoustic Guitar",
        price: "5,500",
      },
      {
        category: "acoustic-guitar",
        id: "4",
        name: "Acoustic Guitar",
        price: "5,500",
      },
    ];
    for (let i = 0; i < storeData.length; i++) {
      if (id !== "") {
        if (id === storeData[i].id) {
          setProductSpecs(storeData[i]);
          break;
        }
      } else {
        if (category === storeData[i].category) {
          setProductsList(storeData[i]);
          console.log("category changed");
        }
      }
    }
    setProductSpecs(storeData);
  }, [category, id]);

  const value = { productsList, productSpecs, setCategory, setId };

  return (
    <StoreDataContext.Provider value={value}>
      {children}
    </StoreDataContext.Provider>
  );
}
