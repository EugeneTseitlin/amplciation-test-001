/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CartWhereUniqueInput } from "../../cart/base/CartWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductCreateInput {
  @ApiProperty({
    required: false,
    type: () => CartWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CartWhereUniqueInput)
  @IsOptional()
  @Field(() => CartWhereUniqueInput, {
    nullable: true,
  })
  my_cart?: CartWhereUniqueInput | null;
}

export { ProductCreateInput as ProductCreateInput };
