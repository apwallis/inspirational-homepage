const API_URL = 'https://api.quotable.io/quotes/random?tags=technology,famous-quotes';

export const getQuote = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json;
};

const quotesApi = {
    getQuote
};
  
export default quotesApi;