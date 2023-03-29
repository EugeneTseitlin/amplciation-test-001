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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { CartWhereUniqueInput } from "../../cart/base/CartWhereUniqueInput";

@InputType()
class ProductWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
  my_cart?: CartWhereUniqueInput;
}

export { ProductWhereInput as ProductWhereInput };