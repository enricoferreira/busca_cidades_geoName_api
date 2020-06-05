import { key } from './user-id.js';

const { id } = key;

const searchForCities = (input) =>
    fetch(`http://api.geonames.org/searchJSON?name=${input}&username=${id}`)
    .then(cities => cities.json())
    .then(json => json)

const searchForCityDetail = (cityId) =>
    fetch(`http://api.geonames.org/getJSON?geonameId=${cityId}&username=${id}`)
    .then(cityDetails => cityDetails.json())
    .then(json => json)

export {searchForCities, searchForCityDetail};