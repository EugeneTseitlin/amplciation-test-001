/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MyCustomerWhereInput } from "./MyCustomerWhereInput";
import { Type } from "class-transformer";
import { MyCustomerOrderByInput } from "./MyCustomerOrderByInput";

@ArgsType()
class MyCustomerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MyCustomerWhereInput,
  })
  @Field(() => MyCustomerWhereInput, { nullable: true })
  @Type(() => MyCustomerWhereInput)
  where?: MyCustomerWhereInput;

  @ApiProperty({
    required: false,
    type: [MyCustomerOrderByInput],
  })
  @Field(() => [MyCustomerOrderByInput], { nullable: true })
  @Type(() => MyCustomerOrderByInput)
  orderBy?: Array<MyCustomerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MyCustomerFindManyArgs as MyCustomerFindManyArgs };
