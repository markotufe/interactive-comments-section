import { auth } from "../../../firebase/index";
import { signInWithEmailAndPassword } from "firebase/auth";
import router from "../../../router/index";

export default {
  async login(context, payload) {
    context.commit("setIsLoading", true);
    context.commit("setErrorMessage", "");

    try {
      const response = await signInWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );

      const userData = {
        ...response.user,
        displayName: response.user?.email?.split("@")[0],
      };

      context.commit("setUser", userData);
      router.push("/home");
    } catch (error) {
      let tempErrorMessage = "";

      if (error.message.includes("wrong-password")) {
        tempErrorMessage = "Please enter valid password";
      } else if (error.message.includes("user-not-found")) {
        tempErrorMessage = "Please enter valid data";
      } else {
        tempErrorMessage = "Somethings goes wrong...";
      }

      context.commit("setErrorMessage", tempErrorMessage);
    }

    context.commit("setIsLoading", false);
  },
};
