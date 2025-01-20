import Link from "next/link";

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
    <Link href={`/${id}` || '#'}>
      <div className="bg-white md:w-[17rem] w-[100%]">
        <img src={imagePath} alt={title} className="w-full object-cover h-[25rem]" />
        <div className="pt-4 pb-4">
          <h2 className="text-custom-purple-dark text-bold headline-five mb-[1px]">{title}</h2>
          <p className="text-custom-purple-dark headline-five">{price}</p>
        </div>
      </div>
    </Link>
  );
}
