import { MyCustomerWhereInput } from "./MyCustomerWhereInput";
import { MyCustomerOrderByInput } from "./MyCustomerOrderByInput";

export type MyCustomerFindManyArgs = {
  where?: MyCustomerWhereInput;
  orderBy?: Array<MyCustomerOrderByInput>;
  skip?: number;
  take?: number;
};
