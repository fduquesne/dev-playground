import { Product } from "@/app/_types/product.type";
import { delay } from "../helpers/delay.helper";
import { products } from "./data";

export async function getProductById(id: number): Promise<Product | null> {
  "use cache";
  await delay(1000);

  const product = products.find((product) => product.id === id);

  if (product) return product;
  return null;
}
