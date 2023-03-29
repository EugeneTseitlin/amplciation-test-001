import { CartCreateNestedManyWithoutProductsInput } from "./CartCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  cartId?: CartCreateNestedManyWithoutProductsInput;
};
