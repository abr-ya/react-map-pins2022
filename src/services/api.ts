import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.API_URL;

export const getAllPins = async () => {
  let allPins: AxiosResponse | false = false;
  try {
    allPins = await axios.get(`${baseUrl}pins/`);
  } catch (err) {
    console.log(err);
  }

  return allPins ? allPins.data : false;
};
