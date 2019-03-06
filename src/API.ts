const API_KEY = '1ca0fde33b2140e882d9ab5e8b68f1db';

export async function newsSource() {
  let url = `https://newsapi.org/v2/sources?language=en&apiKey=${API_KEY}`;
  let response = await fetch(url);
  let result = await response.json();

  return result;
}

export async function newsList(source: string) {
  let url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`;
  let response = await fetch(url);
  let result = await response.json();

  return result;
}
