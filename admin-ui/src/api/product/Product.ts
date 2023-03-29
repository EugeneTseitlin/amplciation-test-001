import { Cart } from "../cart/Cart";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  cartId?: Array<Cart>;
};
