import axios from "axios";
import { API_BASE } from "../config/constants";

export const getNYTopStories = async () => {
  const response = await axios.get(`${API_BASE}/news`);

  return response.data;
};
