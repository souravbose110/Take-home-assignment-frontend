import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import AddSkillModal from "../AddSkillModal/AddSkillModal";
import UserSkillContainer from "../UserSkillContainer/UserSkillContainer";
import { useSelector } from "react-redux";
import styles from "./MySkills.module.css";

const MySkills = () => {
    const [fetchAgain, setFetchAgain] = useState(false);

    const addSkills = useSelector((state) => state.addSkills.value);

    useEffect(() => {}, [fetchAgain]);

    return (
        <>
            <Box className={styles.MySkills_Search_Add_container}>
                <Box className={styles.MySkills_search_bar_container}>
                    <FaSearch className={styles.MySkills_search_icon} />
                    <input
                        className={styles.MySkills_search_bar}
                        type="text"
                        placeholder="Search for Skills"
                    />
                </Box>
                <AddSkillModal
                    fetchAgain={fetchAgain}
                    setFetchAgain={setFetchAgain}
                >
                    <Button
                        leftIcon={<BsPlusLg />}
                        height="46px"
                        width="165px"
                        borderRadius="8px"
                        colorScheme="#d83a52"
                        bg="#d83a52"
                    >
                        Add a Skill
                    </Button>
                </AddSkillModal>
            </Box>
            <Box className={styles.MySkills_container}>
                <Box className={styles.MySkills_skill_container}>
                    {addSkills?.map((s) => (
                        <UserSkillContainer skill={s.skill} rating={s.rating} />
                    ))}
                    <UserSkillContainer skill={"JAVA"} rating={4} />
                    <UserSkillContainer skill={"C++"} rating={4} />
                    <UserSkillContainer skill={"Python"} rating={3} />
                </Box>
            </Box>
        </>
    );
};

export default MySkills;
