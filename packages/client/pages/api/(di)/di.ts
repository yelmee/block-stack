import infrastructuresFn
  from "./infrastructures"
import repositoriesFn
  from "./repositories"
import useCasesFn
  from "./useCases"
import presentersFn
  from "./presenters"

export default function di(url: string, key: string) {
  const infrastructures = infrastructuresFn(url, key)
  const repositories = repositoriesFn(infrastructures)

  const useCases = useCasesFn(repositories.indexDB, repositories.auth, repositories.operation)

  return presentersFn(useCases)
}
