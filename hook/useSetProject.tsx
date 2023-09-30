import { projectApi } from "../api/api";
import { IProjectData } from "../types/type";
import { Dispatch, SetStateAction } from "react";

/**
 * **useSetProject** projects state 변경 함수
 * @param setProjects projects state 변경 함수
 */
const useSetProject = async (
  setProjects: Dispatch<SetStateAction<IProjectData[] | undefined>>
) => {
  const response = await projectApi.get();
  if (response !== undefined) {
    setProjects(response?.data);
  }
};

export default useSetProject;
