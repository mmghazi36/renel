import * as Yup from "yup";

const keyboardCheck = {
  name: "keyboard",
  message: "validation.keyboard",
  test: (value?: string) => !value || !/\p{Script=Arabic}/u.test(value),
};

export const schema = Yup.object({
  username: Yup.string()
    .trim()
    .required("validation.usernameRequired")
    .test(keyboardCheck),
  password: Yup.string()
    .required("validation.passwordRequired")
    .test(keyboardCheck),
});
export type AuthFormValues = Yup.InferType<typeof schema>;
