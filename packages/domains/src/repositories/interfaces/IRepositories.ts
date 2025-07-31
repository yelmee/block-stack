import {
  IIndexDBRepository
} from "./IIndexDBRepository";
import INetworkAuthRepository
  from "./INetworkAuthRepository";
import INetworkOperationRepository
  from "./INetworkOperationRepository";

export default interface IRepositories {
  indexDB: IIndexDBRepository
  auth: INetworkAuthRepository
  operation: INetworkOperationRepository
}
