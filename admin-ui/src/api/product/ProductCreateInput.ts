import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";

export type ProductCreateInput = {
  my_cart?: CartWhereUniqueInput | null;
};
