import store from "@/store/index";
export const navigationList = {
  namespaced: true,
  state: {
    settingsLists: [
      {
        text: "Profile",
        icon: "mdi-account",
        name: "profile",
      },
      {
        text: "Audio",
        icon: "mdi-volume-high",
        name: "audio",
      },
      { text: "Appearance", icon: "mdi-brush", name: "appearance" },
      {
        text: "Change Password",
        icon: "mdi-lock-outline",
        name: "change_password",
      },
    ],

    navigationLists: [
      {
        text: "Home",
        icon: "mdi-home",
        name: "home",
      },
      {
        text: "About",
        icon: "mdi-information",
        name: "about",
      },
      {
        text: "Article",
        icon: "mdi-newspaper",
        name: "article",
      },
    ],
    logout: {
      text: "Logout",
      icon: "mdi-logout",
      func: () => {
        store.dispatch("logoutUser");
      },
    },
    login: {
      text: "Login",
      icon: "mdi-login",
      name: "login",
    },
  },

  mutations: {
    handleAccountList(state, userId) {
      console.log("somesssss", userId);
      //   if (!userId) {
      //     state.accountLists = [
      //       {
      //         text: "Login",
      //         icon: "mdi-login",
      //         name: "login",
      //       },
      //     ];
      //   } else {
      //     state.accountLists = [
      //       {
      //         text: "Logout",
      //         icon: "mdi-logout",
      //         func: () => {
      //           store.dispatch("logoutUser");
      //         },
      //       },
      //     ];
      //   }
    },
  },
};
