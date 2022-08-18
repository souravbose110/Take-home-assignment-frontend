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
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { addSkills } from "../../utils/api/Api";
import { setAddSkills } from "../../features/UserSkillsSlice/userSkillsSlice";
import { useDispatch } from "react-redux";
import styles from "./AddSkillModal.module.css";

const AddSkillModal = ({ children, fetchAgain, setFetchAgain }) => {
    const [loading, setLoading] = useState(false);
    const [skill, setSkill] = useState(undefined);
    const [rating, setRating] = useState(undefined);
    const [allSkills, setAllSkills] = useState([]);

    const user = useSelector((state) => state.user.value);
    const addSkills = useSelector((state) => state.addSkills.value);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useDispatch();

    const addSkill = async () => {
        setLoading(true);
        if (!skill || !rating) {
            alert("Please fill all fields");
            setLoading(false);
            return;
        }

        const response = await addSkills(user.token, user._id, skill, rating);

        if (response.status === 201) {
            setLoading(false);
            setAllSkills([...addSkills, response.data]);
            dispatch(setAddSkills(allSkills));
        } else {
            setLoading(false);
            alert(response.msg);
        }
        setFetchAgain(!fetchAgain);
        onClose();
    };

    return (
        <>
            <span onClick={onOpen}>{children}</span>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent width="656px">
                    <ModalHeader className={styles.AddSkillModal_title}>
                        Add a New Skill
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>
                            <Text className={styles.AddSkillModal_text}>
                                Skill
                            </Text>
                            <Box className={styles.AddSkillModal_box}>
                                <input
                                    type="text"
                                    className={styles.AddSkillModal_input}
                                    placeholder="Enter your skill"
                                    value={skill}
                                    onChange={(e) => setSkill(e.target.value)}
                                />
                            </Box>
                            <Text className={styles.AddSkillModal_text}>
                                How would you rate yourself?
                            </Text>
                            <ReactStars
                                size={50}
                                activeColor="#d83a52"
                                isHalf={true}
                                onChange={(val) => setRating(val)}
                            />
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
                            onClick={addSkill}
                        >
                            Add a Skill
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddSkillModal;
