import MainContainer from "@/app/_components/layout/main-container";
import ProductCard from "@/app/products/[id]/_components/product-card";
import { getProductById } from "@/lib/db";

export default async function ProductPage(props: PageProps<"/products/[id]">) {
  const { id } = await props.params;
  const product = await getProductById(id);

  return (
    <MainContainer>
      {product ? (
        <ProductCard product={product} />
      ) : (
        <div className="space-y-2">
          <h1>Product not found</h1>
          <p className="text-neutral-400">No product matches the ID {id}.</p>
        </div>
      )}
    </MainContainer>
  );
}
