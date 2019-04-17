const esc = encodeURIComponent;
export const stringifyRequest = (url, params) =>
  `${url}?${Object.keys(params)
    .map(k => esc(k) + "=" + esc(params[k]))
    .join("&")}`;
