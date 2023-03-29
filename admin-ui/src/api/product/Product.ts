import { Cart } from "../cart/Cart";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  cart_id?: Array<Cart>;
};
