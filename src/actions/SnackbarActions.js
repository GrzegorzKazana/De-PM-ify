import { showSnack } from "react-redux-snackbar";
import uuid from "uuid";

const defaultTimeout = 5000;
export const displaySnackbarMessage = message =>
  showSnack(uuid.v4(), {
    label: message,
    timeout: defaultTimeout,
    button: { label: "OK" }
  });
