import { Cart } from "../cart/Cart";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  my_cart?: Array<Cart>;
};
