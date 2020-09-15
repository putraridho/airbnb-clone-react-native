interface Error {
  path: string;
  message: string;
}

export const normalizeErrors = (errors: Error[] | null) => {
  const errMap: { [key: string]: string } = {};

  errors?.forEach((err) => {
    errMap[err.path] = err.message;
  });

  return errMap;
};
