import { Box, Button, FormControl, FormLabel, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import { signUp } from "../../utils/api/Api";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../features/UserSlice/userSlice";

const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(undefined);
    const [password, setPasword] = useState(undefined);
    const [confirmPassword, setConfirmPassword] = useState(undefined);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const submitHandler = async () => {
        setLoading(true);
        if (!email || !password || !confirmPassword) {
            alert("Please fill all fields");
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            setLoading(false);
            return;
        }

        const response = await signUp(email, password);

        if (response.status === 201) {
            dispatch(setUser(response.data));
            localStorage.setItem("userInfo", JSON.stringify(response.data));
            setLoading(false);
            navigate("/profile");
        } else {
            setLoading(false);
            alert(response.msg);
        }
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if (user) {
            navigate("/profile");
        }
    }, []);

    return (
        <Container>
            <Box className={styles.home_wrapper}>
                <h1>Sign Up</h1>
                <Box className={styles.form_wrapper}>
                    <FormControl
                        className={styles.input_box}
                        width={{ base: "280px", md: "380px" }}
                    >
                        <FormLabel
                            padding={{
                                base: "2px 0 0 10px",
                                md: "7px 0 0 10px",
                            }}
                            fontSize="14px"
                            fontWeight="600"
                        >
                            <i className="fa-solid fa-envelope"></i> Email
                            address
                        </FormLabel>
                        <input
                            type="email"
                            placeholder="Enter your email address here"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl
                        className={styles.input_box}
                        width={{ base: "280px", md: "380px" }}
                    >
                        <FormLabel
                            padding={{
                                base: "2px 0 0 10px",
                                md: "7px 0 0 10px",
                            }}
                            fontSize="14px"
                            fontWeight="600"
                        >
                            <i className="fa-solid fa-key"></i> Password
                        </FormLabel>
                        <input
                            type="password"
                            placeholder="Enter your password here"
                            onChange={(e) => setPasword(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl
                        className={styles.input_box}
                        width={{ base: "280px", md: "380px" }}
                    >
                        <FormLabel
                            padding={{
                                base: "2px 0 0 10px",
                                md: "7px 0 0 10px",
                            }}
                            fontSize="14px"
                            fontWeight="600"
                        >
                            <i className="fa-solid fa-key"></i> Password
                        </FormLabel>
                        <input
                            type="password"
                            placeholder="Re-enter your password here"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </FormControl>
                </Box>
                <Button
                    className={styles.signUp_button}
                    backgroundColor="#d83a52"
                    colorScheme="#d83a52"
                    color="white"
                    border="none"
                    cursor="pointer"
                    height="60px"
                    width="180px"
                    borderRadius="8px"
                    fontSize="20px"
                    fontWeight="600"
                    marginTop="5rem"
                    isLoading={loading}
                    onClick={submitHandler}
                >
                    Sign Up
                </Button>
                <Text className={styles.sign_in_anchor}>
                    Already have an account?{" "}
                    <Link to="/signin">Sign In here</Link>.
                </Text>
            </Box>
        </Container>
    );
};

export default SignUp;
