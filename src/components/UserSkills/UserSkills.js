import { Box, Text } from "@chakra-ui/react";
import React from "react";
import UserSkillContainer from "../UserSkillContainer/UserSkillContainer";
import styles from "./UserSkills.module.css";

const UserSkills = () => {
  return (
    <>
      <Box className={styles.UserSkills_container}>
        <Text className={styles.UserSkills_header}>Skills</Text>
        <Box className={styles.UserSkills_skills_container}>
          <UserSkillContainer skill="HTML" rating={4} />
          <UserSkillContainer skill="CSS" rating={2.5} />
          <UserSkillContainer skill="JS" rating={5} />
        </Box>
      </Box>
    </>
  );
};

export default UserSkills;
