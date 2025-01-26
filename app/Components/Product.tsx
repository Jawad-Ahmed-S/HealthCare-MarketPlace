import Link from "next/link";
import Image from "next/image";
interface ProductCardProps {
  imagePath: string;
  title: string;
  price: number;
  id: number; 
}

export default function ProductCard({ imagePath, title, price, id }: ProductCardProps) {
  if (!id) {
    console.error('ProductCard - Missing reference:', title);
  }

  return (
    <Link className="h-[70vh]" href={`/${id}` || '#'}>
      <div className="bg-white relative md:w-[17rem]  h-[50vh] w-[100%]">
       <div className="realtive h-[50vh] w-[100%]">
       <Image
        src={imagePath}
        alt={title}
        layout="fill"
        objectFit="cover" 
        />
        </div>
      <div className="pt-4 pb-4">
          <h2 className="text-custom-purple-dark  headline-five mb-[1px]">{title}</h2>
          <p className="text-custom-purple-dark headline-five-bold">£{price}</p>
        </div>
      </div>
    </Link>
  );
}
