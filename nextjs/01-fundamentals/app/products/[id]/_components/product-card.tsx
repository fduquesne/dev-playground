import { Product } from "@/types/product.type";
import LikeButton from "./like-button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-100 p-6 rounded-xl bg-neutral-700">
      <div className="text-neutral-400 text-xs">Product #{product.id}</div>
      <h2>{product.name}</h2>
      <div>€{product.price}</div>
      <div className="mt-4">
        <LikeButton />
      </div>
    </div>
  );
}
