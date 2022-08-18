import { Box, Button, FormControl, FormLabel, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import { signIn } from "../../utils/api/Api";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/UserSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";

const SignIn = () => {
    const [incorrect, setIncorrect] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async () => {
        setLoading(true);
        if (!email || !password) {
            alert("Please fill all fields");
            setLoading(false);
            return;
        }

        const response = await signIn(email, password);

        if (response.status === 401) {
            setLoading(false);
            setIncorrect(true);
        } else if (response.status === 200) {
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
                <h1>Sign In</h1>
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
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                </Box>
                <Box
                    width={{ base: "270px", md: "350px" }}
                    display="flex"
                    justifyContent="space-between"
                    fontSize={{ base: "12px", md: "16px" }}
                >
                    {incorrect && (
                        <p style={{ color: "#d83a52" }}>
                            <i className="fa-solid fa-exclamation"></i>{" "}
                            Incorrect password entered
                        </p>
                    )}

                    <Link
                        to="/forgetPassword"
                        textDecoration="underline"
                        marginLeft={
                            !incorrect && { base: "170px", md: "220px" }
                        }
                    >
                        Forgot Password?
                    </Link>
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
                    Sign In
                </Button>
                <Text className={styles.sign_up_anchor}>
                    Don't have an account yet? <Link to="/">Sign Up here</Link>.
                </Text>
            </Box>
        </Container>
    );
};

export default SignIn;
