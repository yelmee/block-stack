import IInfrastructures
  from "adapters/src/infrastructures/interfaces/IInfrastructures";
import ApiDB
  from "adapters/src/infrastructures/ApiDB";
import IndexedDB
  from "adapters/src/infrastructures/IndexedDB";

const infrastructures = (url: string, key: string): IInfrastructures => {
  // if (!url || !key) {
  //   return {
  //     storage: new IndexedDB()
  //   }
  // }

  return {
    network: new ApiDB({
      url,
      key
    }),
    storage: new IndexedDB()
  };
}

export default infrastructures