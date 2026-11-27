import { Product } from "@/types/product.type";
import { delay } from "@/helpers/delay.helper";
import { products } from "./data";

export async function getProductById(id: string): Promise<Product | null> {
  await delay(1000);

  const product = products.find((product) => product.id === id);
  return product ?? null;
}
