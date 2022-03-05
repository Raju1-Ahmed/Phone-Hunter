// console.log('check');
const searchMobile = () =>{
    const SearchField = document.getElementById('Search-Field');
    const SearchFieldText = SearchField.value;
    
    const url =` https://openapi.programming-hero.com/api/phones?search=${SearchFieldText}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayMobiles(data.data))
}

const displayMobiles = mobiledata =>{
    const searchResultform = document.getElementById('searchResult')
    console.log(mobiledata.brand);
    mobiledata.forEach(mobilename => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img src="${mobilename.image}" class="w-50 h-50  card-img-top" alt="...">
        <div class="card-body">
          <h5 class="text-primary card-title">Phone Name: ${mobilename.phone_name}</h5>
          <h5 class="text-primary card-title">Brand: ${mobilename.brand}</h5>
          <p class="card-text"></p>
        </div>
      </div>
        `;
            searchResultform.appendChild(div);

        // console.log(mobilename.phone_name);
    });
}