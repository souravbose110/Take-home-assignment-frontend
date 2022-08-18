import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const addSkillsSlice = createSlice({
    name: "addSkills",
    initialState,
    reducers: {
        setAddSkills: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setAddSkills } = addSkillsSlice.actions;

export default addSkillsSlice.reducer;
