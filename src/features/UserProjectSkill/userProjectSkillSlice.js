import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const addUserSkillsSlice = createSlice({
    name: "addUserSkills",
    initialState,
    reducers: {
        setAddUserSkills: (state, action) => {
            state.value = [...state.value, action.payload];
        },
    },
});

export const { setAddUserSkills } = addUserSkillsSlice.actions;

export default addUserSkillsSlice.reducer;
