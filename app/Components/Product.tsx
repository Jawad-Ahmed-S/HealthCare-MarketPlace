import Link from "next/link";
import Image from "next/image";
interface ProductCardProps {
  imagePath: string;
  title: string;
  price: number;
  ProductId: number; 
  _id:string;
}

export default function ProductCard({ imagePath, title, price, ProductId }: ProductCardProps) {
  if (!ProductId) {
    console.error('ProductCard - Missing reference:', title);
  }

  return (
    <Link className="h-[65vh] rounded-sm overflow-hidden shadow-md hover:shadow-lg" href={`/${ProductId}` || '#'}>
      <div className="bg-white relative md:w-[17rem]  h-[50vh] w-[100%]">
       <div className="realtive h-[50vh]  w-[100%]">
       <Image
        src={imagePath}
        alt={title}
        layout="fill"
        objectFit="cover" 
        />
        </div>
      <div className="pt-4 pb-1 m-2">
          <h2 className="text-custom-purple-dark  headline-five mb-[1px]">{title}</h2>
          <p className="text-custom-purple-dark headline-five-bold">£{price}</p>
        </div>
      </div>
    </Link>
  );
}
