import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MyCustomerService } from "./myCustomer.service";
import { MyCustomerControllerBase } from "./base/myCustomer.controller.base";

@swagger.ApiTags("myCustomers")
@common.Controller("myCustomers")
export class MyCustomerController extends MyCustomerControllerBase {
  constructor(
    protected readonly service: MyCustomerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
