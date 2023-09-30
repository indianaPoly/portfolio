import axios, { AxiosResponse } from "axios";
import { IProjectData } from "../types/type";

export const projectApi = {
  get: () => {
    try {
      const response: Promise<AxiosResponse<IProjectData[]>> =
        axios.get("api/project");
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export const resumeApi = {
  get: () => {},
};
