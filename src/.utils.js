export const fetchTrending = () => `${process.env.REACT_APP_API_URL}/trending?${process.env.REACT_APP_API_KEY}`;

export const search = name => `${process.env.REACT_APP_API_URL}/search?${process.env.REACT_APP_API_KEY}&q=${name}`;