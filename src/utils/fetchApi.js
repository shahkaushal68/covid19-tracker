import axios from "axios";

export const baseUrl = "https://disease.sh/v3/covid-19";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
