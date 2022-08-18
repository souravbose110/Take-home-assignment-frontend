import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import SideBar from "../../components/SideBar/SideBar";
import { setUser } from "../../features/UserSlice/userSlice";
import styles from "./Profile.module.css";

const Profile = () => {
    const user = useSelector((state) => state.user.value);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        if (!userInfo) {
            navigate("/");
        } else {
            dispatch(setUser(userInfo));
        }
    }, []);

    return (
        <Container>
            <Box className={styles.profile_items_container}>
                {user && <SideBar />}
                {user && <ItemContainer />}
            </Box>
        </Container>
    );
};

export default Profile;
