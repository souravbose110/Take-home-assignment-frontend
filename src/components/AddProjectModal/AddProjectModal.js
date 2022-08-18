import {
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import UserSkillModal from "../../UserSkillModal/UserSkillModal";
import { allUserSkills } from "../../utils/api/Api";
import { useSelector } from "react-redux";
import styles from "./AddProjectModal.module.css";

const AddProjectModal = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [projectTitle, setProjectTitle] = useState(undefined);
    const [projectDesc, setProjectDesc] = useState(undefined);
    const [skillsUsed, setSkillsUsed] = useState([]);
    const [userSkills, setUserSkills] = useState([]);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const user = useSelector((state) => state.user.value);

    const addProject = async () => {
        setLoading(true);

        if (!projectTitle || !projectDesc || skillsUsed.length === 0) {
            alert("Please fill all fields");
            setLoading(false);
            return;
        }
    };

    const getUserSkills = async () => {
        const response = await allUserSkills(user.token, user._id);

        if (response.status === 200) {
            setUserSkills(response.data);
        } else {
            alert(response.msg);
        }
    };

    return (
        <>
            <span onClick={onOpen}>{children}</span>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader className={styles.AddProjectModal_title}>
                        Add a New Project
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text className={styles.AddProjectModal_text}>
                            Project Title
                        </Text>
                        <Box className={styles.AddProjectModal_box}>
                            <input
                                type="text"
                                className={styles.AddProjectModal_input}
                                placeholder="Enter your poject title"
                                value={projectTitle}
                                onChange={setProjectTitle}
                            />
                        </Box>
                        <Text className={styles.AddProjectModal_text}>
                            Project Description
                        </Text>
                        <Box className={styles.AddProjectModal_box}>
                            <input
                                type="text"
                                className={styles.AddProjectModal_input}
                                placeholder="Enter your project description"
                                value={projectDesc}
                                onChange={setProjectDesc}
                            />
                        </Box>
                        <Text className={styles.AddProjectModal_text}>
                            Add Project skills
                        </Text>
                        <Box
                            className={styles.AddProjectModal_box}
                            display="flex"
                            alignItems="center"
                        >
                            <UserSkillModal
                                userSkills={userSkills}
                                skillsUsed={skillsUsed}
                                setSkillsUsed={setSkillsUsed}
                            >
                                <BsFillPlusCircleFill
                                    className={styles.AddProjectModal_logo}
                                    onClick={getUserSkills}
                                />
                            </UserSkillModal>
                        </Box>
                    </ModalBody>

                    <ModalFooter marginBottom="2rem" justifyContent="center">
                        <Button
                            height="46px"
                            width="165px"
                            borderRadius="8px"
                            colorScheme="#d83a52"
                            bg="#d83a52"
                            isLoading={loading}
                            onClick={addProject}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddProjectModal;
