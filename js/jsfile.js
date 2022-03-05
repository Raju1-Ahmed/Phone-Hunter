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
    console.log(mobiledata);
    mobiledata.forEach(mobilename => {
        console.log(mobilename.phone_name);
    });
}