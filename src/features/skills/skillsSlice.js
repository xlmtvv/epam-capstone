import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    status: 'idle',
    error: null,
};

export const fetchSkills = createAsyncThunk(
    'skills/fetchSkills',
    async () => {
        const skills = JSON.parse(localStorage.getItem('skills')) || [];
        return skills;
    }
);

export const addSkill = createAsyncThunk(
    'skills/addSkill',
    async (newSkill, { getState }) => {
        const state = getState();
        const updatedSkills = [...state.skills.list, newSkill];
        localStorage.setItem('skills', JSON.stringify(updatedSkills));
        return newSkill;
    }
);

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSkills.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSkills.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            .addCase(fetchSkills.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addSkill.fulfilled, (state, action) => {
                state.list.push(action.payload);
            });
    },
});

export default skillsSlice.reducer;
