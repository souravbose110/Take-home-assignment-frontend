import { Box, FormControl, FormLabel, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../../components/Container/Container";
import styles from "./ForgetPassword.module.css";

const ForgetPassword = () => {
  return (
    <Container>
      <Box className={styles.home_wrapper}>
        <h1>Forgot Password</h1>
        <Box className={styles.form_wrapper}>
          <Text className={styles.text}>
            No worries, we'll send you reset instructions.
          </Text>
          <FormControl
            className={styles.input_box}
            width={{ base: "280px", md: "380px" }}
          >
            <FormLabel
              padding={{ base: "2px 0 0 10px", md: "7px 0 0 10px" }}
              fontSize="14px"
              fontWeight="600"
            >
              <i className="fa-solid fa-envelope"></i> Email address
            </FormLabel>
            <input type="email" placeholder="Enter your email address here" />
          </FormControl>
        </Box>
        <button className={styles.forget_password_button}>Send</button>
      </Box>
    </Container>
  );
};

export default ForgetPassword;
