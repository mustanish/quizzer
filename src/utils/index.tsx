export const requestParams = (params: Record<string, string>) => {
  const queryString = [];
  for (const key in params) {
    queryString.push(`${key}=${params[key]}`);
  }
  return queryString.join('&');
};
