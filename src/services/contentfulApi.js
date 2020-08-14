import environment from './../environment.js';

const headers = new Headers({
  'Content-type': 'application/json',
  'Authorization': `Bearer ${environment.ctfulDeliveryApiKey}`
});

const getArticlesUrl = `${environment.ctfulDeliveryApiUrl}/spaces/${environment.ctfulSpaceId}/environments/${environment.ctfulEnv}/entries`;
const getAssetsUrl = `${environment.ctfulDeliveryApiUrl}/spaces/${environment.ctfulSpaceId}/environments/${environment.ctfulEnv}/assets`;

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

function getAssetsData() {
  return fetch(getAssetsUrl, {
    method: 'GET',
    headers
  }).then(resp => {
    return resp.json();
  }).then(resp => {
    return resp;
  });
}

function getAssetData(assetId) {
  return fetch(`${getAssetsUrl}/${assetId}`, {
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
  getArticleData,
  getAssetsData,
  getAssetData
}
