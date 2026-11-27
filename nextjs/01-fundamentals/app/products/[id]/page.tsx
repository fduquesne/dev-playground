import Page from "@/app/_components/layout/page";
import ProductCard from "@/app/products/[id]/_components/product-card";
import { getProductById } from "@/lib/db";

export default async function ProductPage(props: PageProps<"/products/[id]">) {
  const { id } = await props.params;
  const product = await getProductById(id);

  if (!product)
    return (
      <Page>
        <div className="space-y-2">
          <h1>Product not found</h1>
          <p className="text-neutral-400">No product matches the ID {id}.</p>
        </div>
      </Page>
    );

  return (
    <Page>
      <ProductCard product={product} />
    </Page>
  );
}
