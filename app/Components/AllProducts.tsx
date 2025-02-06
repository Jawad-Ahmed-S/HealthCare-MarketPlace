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
export default function CategoryListing({
  params,
  searchQuery,
}: {
  params: Params;
  searchQuery: string;
}) {
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
          packet_size,
          ProductId
        }
      `);
      setProductData(data);

      // Default category-based filtering
      const filtered = data.filter(
        (product: any) =>
          product.category?.toLowerCase() === Category.toLowerCase()
      );
      setFilteredProducts(filtered);
    };

    fetchData();
  }, [Category]);

  useEffect(() => {
    
    if (searchQuery) {
      const filtered = productData.filter(
        (product: any) =>
          product.productname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
     
      const filtered = productData.filter(
        (product: any) =>
          product.category?.toLowerCase() === Category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, productData, Category]);

  return (
    <div className="bg-white h-full m-auto">
      <section className="flex flex-col gap-5 justify-center items-center">
        <h1 className="headline-three text-custom-purple-dark capitalize mt-6">
          {searchQuery.replace("-", " ")}
        </h1>
        <div className="grid grid-cols-1 gap-6 w-[90%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: any) => (
              <ProductCard
                key={product.ProductId}
                imagePath={urlFor(product.poster).url()}
                title={product.productname}
                price={product.price}
                ProductId={product.ProductId}
                _id={product._id}
              />
            ))
          ) : (
            <p className="text-custom-purple-dark">No products found for this search.</p>
          )}
        </div>
      </section>
    </div>
  );
}
