import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "../../utils/CookieFun";

const initialState = {
   modalIsOpen: false,
    modalFun:(()=>null),

};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setOpenModal: (state, { payload }) => {
            state.modalIsOpen = payload;

        },
        setModalFun: (state, { payload }) => {
            state.modalFun = payload;

        },

    },
});

// Action creators are generated for each case reducer function
export const {
    setOpenModal,setModalFun
} = modalSlice.actions;

export default modalSlice.reducer;
