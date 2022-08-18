import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import UserSkillBadgeItem from "../UserSkillBadgeItem/UserSkillBadgeItem";

const UserSkillModal = ({ children, userSkills }) => {
    const [loading, setLoading] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleAddUserSkills = (s) => {
        userSkills?.filter(userSkills.map((us) => us !== s));
    };
    return (
        <>
            <span onClick={onOpen}>{children}</span>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Skills Used for Project</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display="flex"
                        flexDir="column"
                        alignItems="center"
                    >
                        <Box w="100%" display="flex" flexWrap="wrap">
                            {userSkills?.map((s) => (
                                <UserSkillBadgeItem
                                    skill={s.skill}
                                    handleFunction={() =>
                                        handleAddUserSkills(s)
                                    }
                                />
                            ))}
                        </Box>
                    </ModalBody>

                    <ModalFooter justifyContent="center">
                        <Button
                            height="46px"
                            width="165px"
                            borderRadius="8px"
                            colorScheme="#d83a52"
                            bg="#d83a52"
                            isLoading={loading}
                        >
                            Add Skill Used
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default UserSkillModal;
