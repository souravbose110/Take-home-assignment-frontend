import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelected } from "../../features/SelectedSlice/selectedSlice";
import { setUser } from "../../features/UserSlice/userSlice";
import styles from "./SideBarListItem.module.css";

const SideBarListItem = ({ logo, text, id }) => {
    const selected = useSelector((state) => state.selected.value);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleClick = () => {
        if (id === 5) {
            dispatch(setUser(undefined));
            localStorage.removeItem("userInfo");
            navigate("/");
        } else {
            dispatch(setSelected(id));
        }
    };

    return (
        <Box
            className={
                selected !== id ? styles.list_item : styles.selected_list_item
            }
            onClick={handleClick}
        >
            <Box
                className={selected !== id ? styles.logo : styles.selected_logo}
            >
                {logo}
            </Box>
            <Text>{text}</Text>
        </Box>
    );
};

export default SideBarListItem;
