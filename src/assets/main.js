const API = 'https://placedog.p.rapidapi.com/300/200';
//const API = "https://dog.ceo/api/breeds/image/random";

const content = null || document.getElementById('dogImage');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa1eac7878msh47005f58cd15404p1b5283jsn63c40d879ce0',
		'X-RapidAPI-Host': 'placedog.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi,options);
    console.log(response);
    const data = btoa(response);
    return data;
}

// Recursive functionq
(async () => {
    try{
        const data = await fetchData(API);
        content.src = 'data:image/png;base64,' + data;
    }
    catch (error){
        console.log(error);
    }
})();