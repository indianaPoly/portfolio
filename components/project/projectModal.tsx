import { Dispatch, SetStateAction } from "react";
import { IProjectData } from "../../types/type";
import { Box, Button, Modal } from "@mui/material";

type Project = "Camplus" | "Yourssu Landing Page" | "realWorld";

const ProjectModal = ({
  project,
  setProject,
  isModalOpen,
  closeModal,
}: {
  project: IProjectData;
  setProject: Dispatch<SetStateAction<Project | undefined>>;
  isModalOpen: boolean;
  closeModal: () => void;
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 700,
    width: 700,
    bgcolor: "background.paper",
    borderRadius: 16,
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 id="modal-title">{project.title}</h2>
          <p id="modal-description">{project.intro}</p>
          <Button
            onClick={() => {
              setProject(undefined);
            }}
          >
            X
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ProjectModal;
