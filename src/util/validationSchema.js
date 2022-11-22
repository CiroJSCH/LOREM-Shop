import * as yup from "yup";

const onlyLetters = (value) => /^[A-Za-z ]+$/.test(value);
const onlyNumbers = (value) => /^[\d()\+]+$/.test(value);

export const validationSchema = yup.object({
  name: yup
    .string()
    .required("This field is required")
    .test("Only Letters", "Only Letters", onlyLetters)
    .min(4, "Min 4 characters")
    .max(25, "Max 25 characters")
    .transform((value) => value.trim()),
  email: yup
    .string()
    .required("This field is required")
    .transform((value) => value.trim())
    .email("Enter a valid mail"),
  address: yup
    .string()
    .required("This field is required")
    .min(8, "Min 8 characters")
    .max(50, "Max 50 characters")
    .transform((value) => value.trim()),
  phone: yup
    .string()
    .required("This field is required")
    .test("Only Numbers", "Only numbers or + or ()", onlyNumbers)
    .min(10, "Min 10 numbers"),
});
