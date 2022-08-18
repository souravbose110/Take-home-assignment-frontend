import { Box, Text } from "@chakra-ui/react";
import React from "react";
import UserProjectContainer from "../UserProjectContainer/UserProjectContainer";
import styles from "./UserProjects.module.css";

const UserProjects = () => {
  return (
    <Box className={styles.UserProjects_container}>
      <Text className={styles.UserProjects_title}>Projects</Text>
      <Box className={styles.UserProjects_project_container}>
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
  );
};

export default UserProjects;
