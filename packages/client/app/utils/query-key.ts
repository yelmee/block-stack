const AUTH = {
  GET_AUTH: (id: number) => ["auth", id],
};

const PAGE = {
  GET_LIST: ["space", "list"],
  ADD: ["space", "add"],
  UPDATE: ["space", "update"],
  DELETE: ["space", "delete"],
};

const BLOCK = {
  GET_LIST: ["block", "list"],
  ADD: ["block", "add"],
  UPDATE: ["block", "update"],
  DELETE: ["block", "delete"],
};

export const QUERY_KEY = { AUTH, PAGE, BLOCK };
