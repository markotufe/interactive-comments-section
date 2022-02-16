import { auth } from "../../../firebase/index";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  async login(context, payload) {
    const response = await signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );

    if (response) {
      context.commit("setUser", response.user);
    } else {
      throw new Error("Could not complete login");
    }
  },
};
