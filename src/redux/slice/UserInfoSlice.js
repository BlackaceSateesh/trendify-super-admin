import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { getDecryptedValue } from "../../utils/localStorage";

function setInitialState() {
    const token = getDecryptedValue("token");
    if (token) {
        const decodeToken = jwtDecode(token);
        return Object.assign(decodeToken, { token });
    }

    return { token: "" };
}

export const UserInfo = createSlice({
    initialState: setInitialState(),
    name: "UserInfo",
    reducers: {
        setUserInfo: (state, action) => {
            return action.payload;
        },
        updateUserInfo: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

export const { setUserInfo, updateUserInfo } = UserInfo.actions;
export default UserInfo.reducer;