// Libraries
import { Button } from "@mui/material";
import { Field, Form, Formik, ErrorMessage } from "formik";

// Util
import initialValues from "../util/initialValues";
import { validationSchema } from "../util/validationSchema";
import CustomTextField from "../util/customTextField";

const ConfirmationForm = ({ setShowForm }) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="d-flex flex-column w-75 mx-auto gap-3">
            <Field
              name="name"
              type="text"
              as={CustomTextField}
              variant="outlined"
              label="Full name"
            />
            <ErrorMessage name="name" component="span" className="error" />
            <Field
              name="email"
              type="email"
              as={CustomTextField}
              variant="outlined"
              label="Email"
            />
            <ErrorMessage name="email" component="span" className="error" />
            <Field
              name="address"
              type="text"
              as={CustomTextField}
              variant="outlined"
              label="Address"
            />
            <ErrorMessage name="address" component="span" className="error" />
            <Field
              name="phone"
              type="tel"
              as={CustomTextField}
              variant="outlined"
              label="Phone"
            />
            <ErrorMessage name="phone" component="span" className="error" />
            <Button
              type="submit"
              variant="outlined"
              style={{
                borderColor: "#2823bc",
                color: "white",
              }}
            >
              Confirm
            </Button>
            <Button
              variant="outlined"
              style={{
                borderColor: "coral",
                color: "white",
              }}
              onClick={() => setShowForm(false)}
            >
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ConfirmationForm;
