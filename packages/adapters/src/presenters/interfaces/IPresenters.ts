import {
  IOperationPresenter
} from "./IOperationPresenter";
import {
  IAuthPresenter
} from "./IAuthPresenter";

export default interface IPresenters {
  operation: IOperationPresenter,
  auth: IAuthPresenter
}
