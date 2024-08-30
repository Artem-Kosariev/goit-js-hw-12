import axios from 'axios';

export async function fetchData(tags, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '45587687-18c2674304307818951f0e796',
      q: `${tags.trim()}`,
      image_type: 'photo',
      per_page: 15,
      page: page,
      safesearch: true,
      orientation: 'horizontal',
    },
  });
  return response.data;
}
