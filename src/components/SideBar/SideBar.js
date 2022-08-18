import { Box } from "@chakra-ui/react";
import React from "react";
import SideBarListItem from "../SideBarListItem/SideBarListItem";
import { useSelector } from "react-redux";
import styles from "./SideBar.module.css";

const SideBar = () => {
    const selected = useSelector((state) => state.selected.value);

    return (
        <Box
            className={styles.side_bar_container}
            display={{ base: selected ? "none" : "flex", md: "flex" }}
            width={{ base: "100%", md: "30%" }}
        >
            <Box className={styles.options_container}>
                <SideBarListItem
                    logo={<i className="fa-solid fa-user"></i>}
                    text="My Profile"
                    id={1}
                />
                <SideBarListItem
                    logo={<i className="fa-solid fa-calendar-days"></i>}
                    text="My Skills"
                    id={2}
                />
                <SideBarListItem
                    logo={<i className="fa-solid fa-credit-card"></i>}
                    text="My Projects"
                    id={3}
                />
                <SideBarListItem
                    logo={<i className="fa-solid fa-clipboard-list"></i>}
                    text="My Report"
                    id={4}
                />
            </Box>
            <Box className={styles.rectangle}></Box>
            <Box style={{ marginTop: "3rem" }}>
                <SideBarListItem
                    logo={
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    }
                    text="Sign Out"
                    id={5}
                />
            </Box>
        </Box>
    );
};

export default SideBar;
