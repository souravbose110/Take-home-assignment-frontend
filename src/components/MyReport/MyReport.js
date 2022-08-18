import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { BsShareFill } from "react-icons/bs";
import styles from "./MyReport.module.css";
import UserSkills from "../UserSkills/UserSkills";
import UserProjects from "../UserProjects/UserProjects";
import { useSelector } from "react-redux";

const MyReport = () => {
    const user = useSelector((state) => state.user.value);

    const handleDownload = () => {
        window.print();
    };

    const getUserName = () => {
        let name = "";
        let i = 0;
        while (
            (user.email[i] >= "a" && user.email[i] <= "z") ||
            (user.email[i] >= "A" && user.email[i] <= "Z")
        ) {
            name += user.email[i++];
        }
        return name[0].toUpperCase() + name.slice(1);
    };

    return (
        <>
            <>
                <Box className={styles.MyReport_header}>
                    <Text className={styles.MyReport_title}>My Report</Text>
                    <Box className={styles.MyReport_button_group}>
                        <Button
                            className={styles.MyReport_button}
                            color="#d83a52"
                            colorScheme="#d83a52"
                            leftIcon={<BsShareFill />}
                            variant="outline"
                        >
                            Share Report
                        </Button>
                        <Button
                            className={styles.MyReport_button}
                            colorScheme="#d83a52"
                            bg="#d83a52"
                            color="#ffffff"
                            leftIcon={<FiDownload />}
                            variant="solid"
                            onClick={handleDownload}
                        >
                            Download Report
                        </Button>
                    </Box>
                </Box>
            </>
            <>
                <Box className={styles.MyReport_profle_container}>
                    <Avatar
                        className={styles.MyReport_avatar_container}
                        size="xl"
                        name="John Dough"
                        bg="#d83a52"
                    />
                    <Box className={styles.MyReport_details_container}>
                        <Text className={styles.MyReport_name}>
                            {user.name.length === 0 ? getUserName() : user.name}
                        </Text>
                        <Text className={styles.MyReport_address}>
                            Mumbai, India
                        </Text>
                        <Box
                            className={
                                styles.MyReport_contact_details_container
                            }
                        >
                            <Text className={styles.MyReport_details}>
                                {user.email}
                            </Text>
                            <Text className={styles.MyReport_details}>
                                {user.contact.length === 0
                                    ? "+91 987654321"
                                    : user.contact}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </>
            <>
                <Box className={styles.MyReport_about_me}>
                    <Text className={styles.MyReport_about_me_title}>
                        About Me
                    </Text>
                    <Box className={styles.MyReport_about_me_description}>
                        <Text
                            className={
                                styles.MyReport_about_me_description_text
                            }
                        >
                            {user.about.length === 0
                                ? "I am a software Enginner with over 5 years of experience"
                                : user.about}
                        </Text>
                    </Box>
                </Box>
            </>
            <UserSkills />
            <UserProjects />
        </>
    );
};

export default MyReport;
