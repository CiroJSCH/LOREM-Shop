// Libraries
import { useContext } from "react";
import { Button } from "@mui/material";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { serverTimestamp, collection, doc, setDoc, updateDoc, increment } from "firebase/firestore";

// Context
import { CartContext } from "../context/CartContext";

// Firebase
import { db } from "../firebase/firebaseConfig";

// Util
import initialValues from "../util/initialValues";
import { validationSchema } from "../util/validationSchema";
import CustomTextField from "../util/customTextField";

const ConfirmationForm = ({ setShowForm }) => {
  const { cartList, calcTotal, emptyCar } = useContext(CartContext);

  const createOrder = (values, formikHelpers) => {
    let order = {
      buyer: {
        name: values.name,
        email: values.email,
        phone: values.phone,
      },
      date: serverTimestamp(),
      items: cartList.map((item) => ({
        id: item.id,
        price: item.price,
        title: item.name,
        qty: item.quantity,
      })),
      total: calcTotal(),
    };

    const orderInFirestore = async() => {
      const newOrderRef = doc(collection(db, 'orders'));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }

    orderInFirestore()
      .then(response => {
        cartList.map(async (item) => {
          const itemRef = doc(db, 'products', item.id);
          await updateDoc(itemRef, {
            stock: increment(-item.quantity)
          });
        })
        emptyCar();
      })
      .catch(error => console.log(error));

    formikHelpers.resetForm();
  };


  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, formikHelpers) => {
          createOrder(values, formikHelpers);
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
