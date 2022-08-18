import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "./Container.module.css";

const Container = ({ children }) => {
  return <Box className={styles.container}>{children}</Box>;
};

export default Container;
