import ProductCard from "../Components/Product";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import ProductInterface from "../Components/Productinterface";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

type Params = { Category: string }; 
export default function CategoryListing({ params }: { params: Params }) {
  const { Category } = params; 

  const [productData, setProductData] = useState<ProductInterface[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == "Product"] {
          poster,
          productname,
          price,
          description,
          category, 
          dimensions {
            height,
            width,
            depth
          },
          id
        }
      `);
      setProductData(data);

      const filtered = data.filter(
        (product: any) => product.category?.toLowerCase() === Category.toLowerCase()
      );
      setFilteredProducts(filtered);
    };

    fetchData();
  }, [Category]); 
  return (
    <div className="bg-white h-full m-auto">
      <section className="flex flex-col gap-5 justify-center items-center">
        <h1 className="headline-three text-custom-purple-dark capitalize mt-6">
          {Category.replace("-", " ")} 
        </h1>
        <div className="grid grid-cols-1 gap-6 w-[90%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: any, index: number) => (
              <ProductCard
                key={product.id}
                imagePath={urlFor(product.poster).url()}
                title={product.productname}
                price={product.price}
                id={product.id}
              />
            ))
          ) : (
            <p className="text-custom-purple-dark">No products found for this category.</p>
          )}
        </div>
      </section>
    </div>
  );
}
