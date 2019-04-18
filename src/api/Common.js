const esc = encodeURIComponent;
export const stringifyRequest = (url, params) =>
  `${url}?${Object.keys(params)
    .map(
      k =>
        esc(k) +
        "=" +
        (Array.isArray(params[k])
          ? params[k].map(p => esc(p)).join("&")
          : esc(params[k]))
    )
    .join("&")}`;
