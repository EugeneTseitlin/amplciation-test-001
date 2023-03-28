import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MyCustomerResolverBase } from "./base/myCustomer.resolver.base";
import { MyCustomer } from "./base/MyCustomer";
import { MyCustomerService } from "./myCustomer.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MyCustomer)
export class MyCustomerResolver extends MyCustomerResolverBase {
  constructor(
    protected readonly service: MyCustomerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
