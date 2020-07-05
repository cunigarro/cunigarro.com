import environment from './../environment.js';

const headers = new Headers({
  'Content-type': 'application/json',
  'Authorization': `Bearer ${environment.ctfulDeliveryApiKey}`
});

const getArticlesUrl = `${environment.ctfulDeliveryApiUrl}/spaces/${environment.ctfulSpaceId}/environments/${environment.ctfulEnv}/entries`;

function getArticlesData() {
  return fetch(getArticlesUrl, {
    method: 'GET',
    headers
  }).then(resp => {
    return resp.json();
  }).then(resp => {
    return resp;
  });
}

function getArticleData(articleId) {
  return fetch(`${getArticlesUrl}/${articleId}`, {
    method: 'GET',
    headers
  }).then(resp => {
    return resp.json();
  }).then(resp => {
    return resp;
  });
}

export {
  getArticlesData,
  getArticleData
}
