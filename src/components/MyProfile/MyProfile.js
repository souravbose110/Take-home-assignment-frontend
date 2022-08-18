import { Avatar, Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { editUserDetails } from "../../utils/api/Api";
import { setUser } from "../../features/UserSlice/userSlice";
import styles from "./MyProfile.module.css";

const MyProfile = () => {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [contact, setContact] = useState("");
    const [about, setAbout] = useState("");

    const user = useSelector((state) => state.user.value);

    const dispatch = useDispatch();

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

    const handleEdit = async () => {
        if (edit === false) {
            const response = await editUserDetails(
                user.token,
                user._id,
                name,
                city,
                country,
                contact,
                about
            );

            if (response.status === 200) {
                dispatch(setUser(response.data));
            } else {
                alert(response.msg);
            }
        }
        setEdit(!edit);
    };

    return (
        <>
            <Box className={styles.MyProfile_profile_container}>
                <Avatar
                    className={styles.MyProfile_avatar_container}
                    size="xl"
                    name={user.name.length === 0 ? getUserName() : user.name}
                    bg="#d83a52"
                />
                <Box className={styles.MyProfile_details_container}>
                    <Text className={styles.MyProfile_name}>
                        {user.name.length === 0 ? getUserName() : user.name}
                    </Text>
                    {/*  Since no where to update city and country hence by default Mumbai, India*/}
                    <Text className={styles.MyProfile_address}>
                        Mumbai, India
                    </Text>
                </Box>
                <Box
                    style={
                        edit
                            ? {
                                  backgroundColor: "#939499",
                              }
                            : {}
                    }
                >
                    <RiPencilFill
                        className={styles.MyProfile_edit_icon}
                        onClick={handleEdit}
                    />
                </Box>
            </Box>
            <>
                <Box className={styles.MyProfile_email_contact_container}>
                    <Text className={styles.MyProfile_about_me_title}>
                        Email address
                    </Text>
                    <Box className={styles.MyProfile_email_contact_box}>
                        <input
                            type="text"
                            className={styles.MyProfile_email_contact_input}
                            placeholder="Enter your email"
                            value={user.email}
                            disabled={true}
                        />
                    </Box>
                </Box>
                <Box className={styles.MyProfile_email_contact_container}>
                    <Text className={styles.MyProfile_about_me_title}>
                        Contact
                    </Text>
                    <Box className={styles.MyProfile_email_contact_box}>
                        <input
                            type="text"
                            className={styles.MyProfile_email_contact_input}
                            placeholder="Enter your contact number"
                            value={
                                user.contact.length > 0 ? user.contact : contact
                            }
                            onChange={(e) => setContact(e.target.value)}
                            disabled={!edit}
                        />
                    </Box>
                </Box>
                <Box className={styles.MyProfile_about_me}>
                    <Text className={styles.MyProfile_about_me_title}>
                        About Me
                    </Text>
                    <Box className={styles.MyProfile_about_me_description}>
                        <input
                            type="text"
                            className={styles.MyProfile_email_contact_input}
                            placeholder="Tell us what you do"
                            value={user.about.length > 0 ? user.about : about}
                            onChange={(e) => setAbout(e.target.value)}
                            disabled={!edit}
                        />
                    </Box>
                </Box>
            </>
        </>
    );
};

export default MyProfile;
