
const API_URL = `https://api.pexels.com/v1/search?query=nature`;
const API_KEY = 'rQep8aHmyWrErlBrDkFUjw8CkRfgbAJJx3nohydtgQEpdvMEfY2GFiTD';

export const getImages = async () => {
    const response = await fetch(API_URL,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: API_KEY,     //use the apikey you have generated
            },
        }
    );
    const json = await response.json();
    return json.photos.map((photo) => photo.src.original);
};

const pexelApi = {
  getImages
};

export default pexelApi;
