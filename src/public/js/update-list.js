
export const insertList = (cities) =>`
        <div class="list-group shadow h-50 overflow-auto">
            ${cities.geonames.length > 0 ? cities.geonames.map(city => `
            <a href="#" data-toggle="modal" data-target="#modal-detail-city" class="list-group-item list-group-item-action pointer" data-city-id="${city.geonameId}">${city.toponymName}</a>
            `).join(' '): 
            `
            <div class="alert alert-danger" role="alert">
                None city found!
            </div>
            `}            
        </div>        
        `