import { NextPage } from "next";
import { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import ProjectCard from "../components/project/projectCard";
import { IProjectData } from "../types/type";
import useSetProject from "../hook/useSetProject";
import ProjectModal from "../components/project/projectModal";

type Project = "Camplus" | "Yourssu Landing Page" | "realWorld";
/**
 * @returns 프로젝트 페이지 반환
 */
const Project: NextPage = () => {
  const [projects, setProjects] = useState<IProjectData[]>();
  const [project, setProject] = useState<Project>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    useSetProject(setProjects);
  }, []);

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center bg-[#0E3A5E]`}
    >
      <Layout>
        <div className={`flex`}>
          <div className="flex flex-col">
            {projects?.map((project) => (
              <ProjectCard
                title={project.title}
                image={project.image}
                onClickCard={() => {
                  if (project.title === "Camplus") {
                    setProject("Camplus");
                    openModal();
                  }
                  if (project.title === "Yourssu Landing Page") {
                    setProject("Yourssu Landing Page");
                    openModal();
                  }
                }}
              />
            ))}
          </div>
          {project === "Camplus" && projects && (
            <ProjectModal
              isModalOpen={isModalOpen}
              project={projects[0]}
              setProject={setProject}
              closeModal={closeModal}
            />
          )}
          {project === "Yourssu Landing Page" && projects && (
            <ProjectModal
              isModalOpen={isModalOpen}
              project={projects[1]}
              setProject={setProject}
              closeModal={closeModal}
            ></ProjectModal>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Project;
