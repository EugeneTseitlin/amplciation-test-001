/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { MyCustomerWhereUniqueInput } from "./MyCustomerWhereUniqueInput";

@ArgsType()
class DeleteMyCustomerArgs {
  @Field(() => MyCustomerWhereUniqueInput, { nullable: false })
  where!: MyCustomerWhereUniqueInput;
}

export { DeleteMyCustomerArgs as DeleteMyCustomerArgs };