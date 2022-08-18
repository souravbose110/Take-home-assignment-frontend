import { Box, Button } from "@chakra-ui/react";
import React from "react";
import UserProjectContainer from "../UserProjectContainer/UserProjectContainer";
import { FaSearch } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import styles from "./MyProjects.module.css";
import AddProjectModal from "../AddProjectModal/AddProjectModal";

const MyProjects = () => {
  return (
    <>
      <Box className={styles.MyProjects_Search_Add_container}>
        <Box className={styles.MyProjects_search_bar_container}>
          <FaSearch className={styles.MyProjects_search_icon} />
          <input
            className={styles.MyProjects_search_bar}
            type="text"
            placeholder="Search for projects"
          />
        </Box>
        <AddProjectModal>
          <Button
            leftIcon={<BsPlusLg />}
            height="46px"
            width="165px"
            borderRadius="8px"
            colorScheme="#d83a52"
            bg="#d83a52"
          >
            Add a Project
          </Button>
        </AddProjectModal>
      </Box>
      <Box className={styles.MyProjects_container}>
        <Box className={styles.MyProjects_project_container}>
          <UserProjectContainer
            projectName="Project X"
            projectDesc="Description"
          />
          <UserProjectContainer
            projectName="Project Y"
            projectDesc="Description"
          />
        </Box>
      </Box>
    </>
  );
};

export default MyProjects;
