export const insertTableModal = (cityDetail) =>{ 
    const {countryName, timezone, population, lat, lng, wikipediaURL} = cityDetail;
    return `                    
    <td>${countryName}</td>
    <td>${timezone.timeZoneId}</td>
    <td>${population.toLocaleString('pt-br')}</td>
    <td>${lat}</td>
    <td>${lng}</td>
    <td>${wikipediaURL != undefined ? `<a target="_blank" href="https://${wikipediaURL}">${wikipediaURL}</a>` :  `Sem dados para pesquisa no wikipedia`}</td>
`                
}