import AuthUseCase
  from "domains/src/useCases/AuthUseCase";
import OperationUseCase
  from "domains/src/useCases/OperationUseCase";
import INetworkOperationRepository
  from "domains/src/repositories/interfaces/INetworkOperationRepository";
import {
  IIndexDBRepository
} from "domains/src/repositories/interfaces/IIndexDBRepository";
import INetworkAuthRepository
  from "domains/src/repositories/interfaces/INetworkAuthRepository";
import IUseCase
  from "./IUseCase";


const useCases = (indexDB: IIndexDBRepository, uNetwork: INetworkAuthRepository, aNetwork: INetworkOperationRepository): IUseCase => {
  return {
    auth: new AuthUseCase(uNetwork),
    operation: new OperationUseCase(indexDB, aNetwork),
  }
}
export default useCases