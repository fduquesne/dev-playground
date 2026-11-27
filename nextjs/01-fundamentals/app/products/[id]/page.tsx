import Page from "@/app/_components/layout/page";
import ProductCard from "@/app/_components/ui/product-card";
import { Product } from "@/app/_types/product.type";

export default async function ProductPage(props: PageProps<"/products/[id]">) {
  const { id } = await props.params;
  const product: Product = { id: Number(id) };

  return (
    <Page>
      <ProductCard product={product} />
    </Page>
  );
}
