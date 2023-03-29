import { CartCreateNestedManyWithoutProductsInput } from "./CartCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  my_cart?: CartCreateNestedManyWithoutProductsInput;
};
