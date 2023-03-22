import UserService from "@/utils/UserService";

const { updateUserProfile } = UserService;
export const profile = {
  namespaced: true,
  state: {
    isUpdateDialog: false,
    profileImage: null,
  },
  mutations: {
    handleUpdateDialog(state) {
      state.isUpdateDialog = !state.isUpdateDialog;
      console.log(state.isUpdateDialog);
    },
    updateProfile(state, userProfile) {
      state.isUpdateDialog = !state.isUpdateDialog;
      updateUserProfile(userProfile);
      //   console.log(state.isUpdateDialog);
      console.log(userProfile);
    },
    selectedFile(state, profileImage) {
      state.profileImage = profileImage;
    },
  },
  actions: {},
};
