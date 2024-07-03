export interface ProfileFormValues {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
}

export const initialValues: ProfileFormValues = {
  email: "",
  username: "",
  firstName: "",
  lastName: "",
};