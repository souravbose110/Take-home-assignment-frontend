import { Box, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./UserProjectContainer.module.css";

const UserProjectContainer = ({ projectName, projectDesc }) => {
  return (
    <Box className={styles.UserProjectContainer_container}>
      <Text className={styles.UserProjectContainer_title}>{projectName}</Text>
      <Text className={styles.UserProjectContainer_description}>
        {projectDesc}
      </Text>
    </Box>
  );
};

export default UserProjectContainer;
