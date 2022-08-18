import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ReactStars from "react-rating-stars-component";
import styles from "./UserSkillContainer.module.css";

const UserSkillContainer = ({ skill, rating }) => {
  const firstExample = {
    size: 30,
    value: rating,
    isHalf: true,
    activeColor: "#d83a52",
    edit: false,
  };
  return (
    <Box className={styles.UserSkillContainer_container}>
      <Text className={styles.UserSkillContainer_skill}>{skill}</Text>
      <ReactStars {...firstExample} />
    </Box>
  );
};

export default UserSkillContainer;
