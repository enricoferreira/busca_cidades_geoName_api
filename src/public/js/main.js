import { searchForCities, searchForCityDetail } from './require.js';
import { insertList } from './update-list.js';
import { insertTableModal } from './update-modal.js';

const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('[data-search]');
export const resultDiv = document.querySelector('[data-results]');
const modalBody = document.querySelector('#modal-body');

//evento da pesquisa pela lista das cidades
searchBtn.addEventListener('click', ()=>{    
    searchForCities(searchInput.value).then(cities =>{             
        console.log(cities);
        
        //inserindo os dados no html List
        resultDiv.innerHTML = insertList(cities);        
        //selecionando list-group-item
        const cityItem = document.querySelectorAll('[data-city-id]');
        cityItem.forEach(city => {                        
            //evento da pesquisa detalhada para cada cidade
            city.addEventListener('click',()=>{
                const idCity = city.getAttribute('data-city-id');
                searchForCityDetail(idCity).then(cityDetail => {
                    //inserindo os dados no html Table
                    modalBody.innerHTML = insertTableModal(cityDetail);
                })                
            })
        })
    }).catch(erro => {
        console.log(erro);        
    })
})