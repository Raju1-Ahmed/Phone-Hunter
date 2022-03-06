// console.log('check');
const searchMobile = () =>{
    const SearchField = document.getElementById('Search-Field');
    const SearchFieldText = SearchField.value;
    SearchField.value = '';
    
    const url =` https://openapi.programming-hero.com/api/phones?search=${SearchFieldText}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayMobiles(data.data))
}

const displayMobiles = mobiledata =>{
    // console.log(mobiledata);
    const searchResultform = document.getElementById('searchResultAll')
    mobiledata.forEach(mobilename => {
        // console.log(mobilename);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img src="${mobilename.image}" class="w-50 h-50  card-img-top" alt="...">
        <div class="card-body">
          <h5 class="text-primary card-title">Phone Name: ${mobilename.phone_name}</h5>
          <h5 class="text-primary card-title">Brand: ${mobilename.brand}</h5>
          <button class="btn btn-outline-primary" onclick="loadMobileDetaild('${mobilename.slug}')">See Detail</button>  
        </div>
      </div>
        `;
            searchResultform.appendChild(div);

        // console.log(mobilename.phone_name);
    })
}

const loadMobileDetaild = seeDetails =>{
    // console.log(seeDetails);
    const url = ` https://openapi.programming-hero.com/api/phone/${seeDetails}`;
    fetch(url)
    .then(res => res.json())
    .then(data => MobileSingleDetails(data.data))
}
const  MobileSingleDetails= seesingleDetails =>{
    // console.log(seesingleDetails.mainFeatures);
    const searchResults = document.getElementById('search-Resultsingle');
    searchResults.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="border border-primary rounded card-body">
         <img src="${seesingleDetails.image}" class=" w-50 card-img-top" alt="...">
          <h5 class="card-title text-primary">Brand:  ${seesingleDetails.brand}
         </h5>

        <p class="card-text text-primary">storage:  ${seesingleDetails.mainFeatures.storage}
         </p> 

        <p class="card-text text-primary">displaySize:  ${seesingleDetails.mainFeatures.displaySize}
         </p>

        <p class="card-text text-primary">Chipset:  ${seesingleDetails.mainFeatures.chipSet}
        </p>

        <p class="card-text text-primary">Memory:  ${seesingleDetails.mainFeatures.memory} </p>

    </div>
    `;
    searchResults.appendChild(div);
}