import infrastructuresFn
  from "./infrastructures"
import repositoriesFn
  from "./repositories"
import useCasesFn
  from "./useCases"
import presentersFn
  from "./presenters"
import {
  SUPABASE_KEY,
  SUPABASE_URL
} from "@app/utils/constants";

export default function useDi(url = SUPABASE_URL, key = SUPABASE_KEY) {
  const infrastructures = infrastructuresFn(url, key)
  const repositories = repositoriesFn(infrastructures)

  const useCases = useCasesFn(repositories.indexDB, repositories.auth, repositories.operation)

  return presentersFn(useCases)
}
