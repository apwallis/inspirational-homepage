
const API_URL = `https://api.pexels.com/v1/search?query=nature`;

export const getImages = async () => {
    const response = await fetch(API_URL,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: process.env.PEXEL_IMAGE_API_KEY,     //use the apikey you have generated
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
