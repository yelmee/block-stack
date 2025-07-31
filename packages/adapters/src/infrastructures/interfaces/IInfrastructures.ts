import ApiDB
    from "../ApiDB";
import IndexedDB
    from "../IndexedDB";

export default interface IInfrastructures {
  network: ApiDB
  storage: IndexedDB
}
