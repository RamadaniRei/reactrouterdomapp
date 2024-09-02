import * as yup from "yup";

const contactSchema = yup.object().shape({
  fullname: yup.string("Enter a Valid Input").required("Required"),
  email: yup
    .string("Enter a Valid Input")
    .email("Enter a Valid Email")
    .required("Required"),
  message: yup.string("Enter a Valid Input").required("Required"),
  phone: yup.string("Enter a Valid Input"),
  website: yup.string("Enter a Valid Input"),
});
export default contactSchema;
