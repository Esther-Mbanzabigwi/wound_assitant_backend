export default () => ({
  "users-permissions": {
    config: {
      register: {
        allowedFields: ["username", "email", "password", "phone"],
        emailConfirmation: false,
      },
    },
  },
});
