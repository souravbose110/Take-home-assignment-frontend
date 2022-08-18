import { configureStore } from "@reduxjs/toolkit";
import selectedReducer from "../features/SelectedSlice/selectedSlice";
import userReducer from "../features/UserSlice/userSlice";
import addSkillsReducer from "../features/UserSkillsSlice/userSkillsSlice";
import addUserSkillsReducer from "../features/UserProjectSkill/userProjectSkillSlice";

export const store = configureStore({
    reducer: {
        selected: selectedReducer,
        user: userReducer,
        addSkills: addSkillsReducer,
        addUserSkills: addUserSkillsReducer,
    },
});
