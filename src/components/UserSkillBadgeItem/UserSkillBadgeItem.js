import { Box } from "@chakra-ui/react";
import React from "react";

const UserSkillBadgeItem = ({ skill, handleFunction }) => {
    return (
        <>
            <Box
                px={2}
                py={1}
                borderRadius="lg"
                m={1}
                mb={2}
                variant="solid"
                fontSize={16}
                backgroundColor="#d83a52"
                color="white"
                cursor="pointer"
                onClick={handleFunction}
            >
                {skill}
            </Box>
        </>
    );
};

export default UserSkillBadgeItem;
