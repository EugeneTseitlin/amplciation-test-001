import { Product } from "../product/Product";

export type Cart = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  products?: Array<Product>;
};
