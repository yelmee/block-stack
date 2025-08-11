import OperationPresenter
  from "adapters/src/presenters/OperationPresenter";
import IPresenters
  from "adapters/src/presenters/interfaces/IPresenters";
import AuthPresenter
  from "adapters/src/presenters/AuthPresenter";
import IUseCase
  from "./IUseCase";

const presenters = (useCases: IUseCase): IPresenters => {
  return {
    operation: new OperationPresenter(useCases.operation),
    auth: new AuthPresenter(useCases.auth)
  }
}
export default presenters