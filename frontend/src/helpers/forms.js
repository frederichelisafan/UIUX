const FORMS = {
  REGISTER: {
    USERNAME: {
      NAME: "username",
      LABEL: "Username",
    },
    EMAIL: {
      NAME: "email",
      LABEL: "Email Address",
    },
    PASSWORD: {
      NAME: "password",
      LABEL: "Password",
    },
  },
};

export const REGISTER_FORMS = [
  { name: FORMS.REGISTER.USERNAME.NAME, label: FORMS.REGISTER.USERNAME.LABEL },
  { name: FORMS.REGISTER.EMAIL.NAME, label: FORMS.REGISTER.EMAIL.LABEL },
  { name: FORMS.REGISTER.PASSWORD.NAME, label: FORMS.REGISTER.PASSWORD.LABEL },
];

export default FORMS;
