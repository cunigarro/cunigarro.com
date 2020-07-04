import environment from './../environment.js';

const headers = new Headers({
  'Content-type': 'application/json',
  'Authorization': `Bearer ${environment.ctfulDeliveryApiKey}`
});

const getEntriesUrl = `${environment.ctfulDeliveryApiUrl}/spaces/${environment.ctfulSpaceId}/environments/${environment.ctfulEnv}/entries`;

export default function getArticlesData() {
  return fetch(getEntriesUrl, {
    method: 'GET',
    headers
  }).then(resp => {
    return resp.json();
  }).then(resp => {
    console.log(resp);
    return resp;
  })
}
