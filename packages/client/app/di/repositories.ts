import IInfrastructures
  from "adapters/src/infrastructures/interfaces/IInfrastructures";
import AuthRepository
  from "../../../adapters/src/repositories/auth/AuthRepository";
import IndexDBRepository
  from "adapters/src/repositories/operation/IndexDBRepository";
import NetworkRepository
  from "adapters/src/repositories/operation/NetworkRepository";
import IRepositories
  from "domains/src/repositories/interfaces/IRepositories";


const repositories = (infrastructures: IInfrastructures): IRepositories=> {
  // if(!infrastructures.storage || !infrastructures.network || !infrastructures.network) return null
  return {
    indexDB: new IndexDBRepository(infrastructures.storage),
    auth: new AuthRepository(infrastructures.network),
    operation: new NetworkRepository(infrastructures.network)
  }
}

export default repositories