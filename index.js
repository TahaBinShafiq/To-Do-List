var cities = getDataFromStorage() || []
var list = document.getElementById("list");
updateList();

function addToList() {
    var city = document.getElementById("input").value;
    if (city === '' || city === null) {
        alert('Please write a city name')
    } else if (cities.some(c => c.toLowerCase() === city.toLowerCase())) {
        alert("City is already in the list")
    } else {
        cities.push(city)
        saveToStorage(cities)
        updateList()
        document.getElementById("input").value = "";
    }
}

function updateList() {
    var dataFormStorage = getDataFromStorage()
    list.innerHTML = ''
    for (var i = 0; i < dataFormStorage?.length; i++) {
        list.innerHTML += `<li style="display:flex; gap:5px;">${dataFormStorage[i]} <span><svg onclick="deleteItem(${i})" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" fill="black" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</span>
<span><svg onclick="editCity(${i})" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path fill="black" stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
</span>
</li>`;
    }
}

function deleteItem(index) {
    cities.splice(index, 1)
    saveToStorage(cities)
    updateList()
}


function editCity(index) {
    var userValue = prompt("Enter the new city", cities[index])
    if (userValue === null) {
        return;
    } else if (userValue.trim() === '') {
        alert('Please write a city name')
    } else {
        cities[index] = userValue;
        saveToStorage(cities)
        updateList()
    }
}

function saveToStorage(cities){
    localStorage.setItem("cities" , JSON.stringify(cities)); 
}

function getDataFromStorage(){
    var myCities = localStorage.getItem("cities");
    var wapisArrayWalaResult = JSON.parse(myCities);
    return wapisArrayWalaResult;
}


