import { useEffect, useState } from "react";
import { FilterSettings } from "../components/layouts/index";
import { CardProduct, Spin } from "../components/common/index";
import { getRandomProducts } from "../service/products.api";
import { API_PRODUCT } from "../types/api_products.api";

export function Main() {
  const [products, setProducts] = useState<API_PRODUCT[] | null>(null);

  useEffect(() => {
    getRandomProducts(8).then((response) =>
      setProducts(response.body.products)
    );
    return () => setProducts(null);
  }, []);

  return (
    <div className="home">
      <div className="home__banner"></div>
      <FilterSettings />
      <div className="home__container__cards">
        {!products ? (
          <div className="home__container__products__spinner">
            <Spin key="key-spin-loagind-products" />
          </div>
        ) : (
          products.map((item) => (
            <CardProduct
              name={item.name}
              description={item.description}
              views={item.views}
              link_img={item.link_imagen}
              price={item.price}
              stars={parseFloat(item.rating)}
              key={`key${item.name}-${item.views}`}
            />
          ))
        )}
      </div>
    </div>
  );
}
