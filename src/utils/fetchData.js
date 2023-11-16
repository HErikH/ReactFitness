export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '411c62eb65mshc6b27b67b7ec0a1p1210fdjsn7f5c127155ae',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '411c62eb65mshc6b27b67b7ec0a1p1210fdjsn7f5c127155ae',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export async function fetchData(url, options) {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}

     