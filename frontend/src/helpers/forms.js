const FORMS = {
  AUTH: {
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
  { name: FORMS.AUTH.USERNAME.NAME, label: FORMS.AUTH.USERNAME.LABEL },
  { name: FORMS.AUTH.EMAIL.NAME, label: FORMS.AUTH.EMAIL.LABEL },
  { name: FORMS.AUTH.PASSWORD.NAME, label: FORMS.AUTH.PASSWORD.LABEL },
];

export const LOGIN_FORMS = [
  { name: FORMS.AUTH.EMAIL.NAME, label: FORMS.AUTH.EMAIL.LABEL },
  { name: FORMS.AUTH.PASSWORD.NAME, label: FORMS.AUTH.PASSWORD.LABEL },
];

export default FORMS;
