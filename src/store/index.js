import { createStore } from "vuex";
import { textToSpeech } from "./modules/textToSpeech";
import { colorblind } from "./modules/colorblindTypes";
import { navigationList } from "./modules/navigationList";
import { profile } from "./modules/profile";

import router from "@/router";
import axios from "axios";

import UserService from "@/utils/UserService";
const { getUser, insertUser, logoutUser, verifyUser, generateToken } =
  UserService;

const store = createStore({
  state: {
    templateValidation: false,
    validateUsingLogin: false,
    test: null,
    accessToken: "",
    refreshToken: "",
    isGuest: true,
    message: "",
    ok: false,
    user: null,
    username: "",
    email: "",
    password: "",
    lists: [],
    listname: "",
    isDone: false,
  },
  mutations: {
    resetForm(state) {
      state.message = null;
      state.ok = false;
      state.username = null;
      state.email = null;
      state.password = null;
      state.user = null;

      // localStorage.removeItem("token");
      // localStorage.removeItem("sk");
    },

    notFoundMsg(state) {},
  },
  actions: {
    async setToken() {},
    async generateToken({ state }, { routename }) {
      const userId = sessionStorage.getItem("id");
      if (!userId) {
        state.isGuest = true;
        return;
      } else {
        state.isGuest = false;
      }

      const response = await generateToken();
      console.log(response, "RESPONSE");

      if (
        response.status === 401 ||
        response.status === 403 ||
        response.status === 500
      ) {
        state.message = response.data.message;

        setTimeout(async () => {
          await router.push("/notfound");
        }, 1000);

        return;
      }

      state.user = response.data.user;

      console.log(response.data.user, "103");

      state.ok = response.data.ok;
      state.templateValidation = response.data.ok;
    },

    async logoutUser({ state }) {
      state.isGuest = true;

      const data = await logoutUser(state.user.id);
      state.message = data.message;

      console.log(state);
      sessionStorage.clear();
      state.user = null;
      // console.log(data.message);

      await router.push("/notfound");
    },
    async getUsers({ state }) {
      const data = await axios.get("http://localhost:5000/sample");
      // state.test = data;

      console.log(data);
      // state.users = await getUser();
      // console.log(state.users);
      // console.log(await getUser());
    },
    async insertUser({ state }) {
      if (state.username == null || state.username == "")
        return (state.message = "Username is empty");

      if (state.email == null || state.email == "")
        return (state.message = "Email is empty");

      if (state.password == null || state.password == "")
        return (state.message = "Password is empty");

      const data = await insertUser(
        state.username,
        state.email,
        state.password
      );

      state.message = data.message;
      state.ok = data.ok;

      setTimeout(async () => {
        await router.push("/login");
      }, 2000);
    },
    async verifyUser({ state }) {
      if (state.email == "" && state.password == "") {
        state.message = "All fields are empty!";
        return;
      }

      if (state.email == null || state.email == "") {
        state.message = "Email is empty";
        return;
      }

      if (state.password == null || state.password == "")
        return (state.message = "Password is empty");

      const data = await verifyUser(state.email, state.password);

      if (!data.ok) {
        state.ok = data.ok;
        state.message = data.message;
        return;
      }

      console.log(data);

      state.user = data.user;
      state.message = data.message;
      state.ok = data.ok;
      state.templateValidation = true;
      state.validateUsingLogin = true;
      state.isGuest = false;

      sessionStorage.setItem("id", data.user.id);

      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      // console.log(state.email, state.password);

      // console.log(res);
      setTimeout(async () => {
        await router.push({ name: "profile" });
      }, 500);
    },
  },
  getters: {},
  modules: { textToSpeech, colorblind, navigationList, profile },
});

export default store;
