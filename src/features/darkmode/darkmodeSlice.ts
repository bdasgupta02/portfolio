import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "darkmode",
  initialState: {
    isDarkmode:
      "isDarkmode" in localStorage
        ? localStorage.getItem("isDarkmode") !== "" &&
          localStorage.getItem("isDarkmode") === "true"
        : true,
  } as {
    isDarkmode: boolean;
  },
  reducers: {
    toggleDarkmode: (state) => {
      const previousMode = state.isDarkmode;
      state.isDarkmode = !previousMode;
      localStorage.setItem("isDarkmode", `${!previousMode}`);
    },
  },
});

export default authSlice;
export const { toggleDarkmode } = authSlice.actions;
