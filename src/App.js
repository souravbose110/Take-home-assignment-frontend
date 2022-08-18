import { Route, Routes } from "react-router-dom";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Constraints from "./utils/routes/routes";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={Constraints.Root} element={<SignUp />} />
                <Route path={Constraints.SignIn} element={<SignIn />} />
                <Route
                    path={Constraints.ForgetPassword}
                    element={<ForgetPassword />}
                />
                <Route path={Constraints.Profile} element={<Profile />} />
            </Routes>
        </>
    );
};

export default App;
