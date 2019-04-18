const esc = encodeURIComponent;
export const stringifyRequest = (url, params) =>
  `${url}?${Object.keys(params)
    .map(k => {
      console.log(params[k]);
      return (
        esc(k) +
        "=" +
        (Array.isArray(params[k])
          ? params[k].map(p => esc(p)).join("&")
          : esc(params[k]))
      );
    })
    .join("&")}`;
