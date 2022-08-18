import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import MyProfile from "../MyProfile/MyProfile";
import MyProjects from "../MyProjects/MyProjects";
import MyReport from "../MyReport/MyReport";
import MySkills from "../MySkills/MySkills";
import styles from "./ItemContainer.module.css";

const ItemContainer = () => {
  const selected = useSelector((state) => state.selected.value);
  return (
    <Box
      className={styles.item_container}
      display={{ base: selected ? "flex" : "none", md: "flex" }}
      width={{ base: "100%", md: "68%" }}
    >
      {selected === 1 && <MyProfile />}
      {selected === 2 && <MySkills />}
      {selected === 3 && <MyProjects />}
      {selected === 4 && <MyReport />}
    </Box>
  );
};

export default ItemContainer;
