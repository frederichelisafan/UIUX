const transformErrorMessage = (error = "") => {
  return error
    .replace("Firebase: Error (auth/", "")
    .replace(").", "")
    .replaceAll("-", " ");
};

export default transformErrorMessage;
