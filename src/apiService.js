import axios from "axios";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.get(
      `${axios.defaults.baseURL}Login/UserLogin?userName=${encodeURIComponent(
        username
      )}&password=${encodeURIComponent(password)}`
    );
    if (response.data.StatusCode === 200 && response.data.Result) {
      return { success: true, token: response.data.Result };
    } else {
      return {
        success: false,
        //message: "Invalid credentials. Please try again.",
      };
    }
  } catch (err) {
    console.error("Login error:", err);
    return {
      success: false,
      //message: "An error occurred. Please try again later.",
    };
  }
};
