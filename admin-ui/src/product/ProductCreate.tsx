import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CartTitle } from "../cart/CartTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="my_cart.id" reference="Cart" label="my_cart">
          <SelectInput optionText={CartTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
