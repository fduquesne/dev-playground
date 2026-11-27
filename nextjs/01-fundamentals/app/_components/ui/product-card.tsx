import { Product } from "@/app/_types/product.type";

interface ProductCardProps {
  product: Product;
}

export default async function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-100 p-6 rounded-xl bg-neutral-700">
      <div className="text-neutral-400 text-xs">Product #{product.id}</div>
      <h2>{product.name}</h2>
      <div>€{product.price}</div>
    </div>
  );
}
