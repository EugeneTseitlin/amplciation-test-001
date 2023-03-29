import { StringFilter } from "../../util/StringFilter";
import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";

export type ProductWhereInput = {
  id?: StringFilter;
  my_cart?: CartWhereUniqueInput;
};
