import router from "../../../router/index";

export default {
  async login(context, payload) {
    context.commit("setIsLoading", true);
    context.commit("setErrorMessage", "");

    try {
      const userData = payload;

      context.commit("setUser", userData);
      router.push("/home");
    } catch (error) {
      context.commit("setErrorMessage", error.message);
    }

    context.commit("setIsLoading", false);
  },
};
