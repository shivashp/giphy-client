function buildQueryParams(params) {
  const keys = Object.keys(params);
  return keys.reduce((string, key, index) => {
    const needsMoreParams = index !== keys.length - 1;
    const concatString = needsMoreParams ? '&' : '';
    return string.concat(key, '=', params[key], concatString);
  }, '?');
}

function buildRequest(endpoint) {
  return function request(urlMapping = {}) {
    const config = Object.assign(urlMapping, {
      api_key: 'P9QjPtgQd2o8ITH2917l27uTcgqYxZMk',
    });
    const params = buildQueryParams(config);
    const query = endpoint.concat(params);
    return fetch(query).then(response => response.json());
  };
}

export { buildQueryParams };
export default buildRequest;
