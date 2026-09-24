import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";

import ButtonActive from "./ButtonActive";

import "./styles/Form.css";

const FORMSUBMIT_EMAIL = "5b2b2561db305264ccb4a9c46e384e7b";

const Toast = Swal.mixin({
  background: "var(--light-fond)",
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const Formulario = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [hack, setHack] = useState(false);

  useEffect(() => {
    // Check localStorage for form submission
    if (localStorage.getItem("sentForm")) {
      setSent(true);
    } else {
      setSent(false);
    }
  }, [sent]);

  return (
    <fieldset>
      <legend>
        <h2>Let's talk!</h2>
      </legend>
      <Formik
        initialValues={{
          from_name: "",
          reply_to: "",
          message: "",
        }}
        validate={(values) => {
          let errores = {};

          // Validacion name
          if (!values.from_name && !localStorage.getItem("sentForm")) {
            errores.from_name = "Please enter a name";
          }

          // Validacion mail
          if (!values.reply_to && !localStorage.getItem("sentForm")) {
            errores.reply_to = "Please enter your email";
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.reply_to) && !localStorage.getItem("sentForm")) {
            errores.reply_to = "Please enter a valid email";
          }

          // Validacion message
          if (!values.message && !localStorage.getItem("sentForm")) {
            errores.message = "Please enter your message";
          }

          return errores;
        }}
        onSubmit={(values, { resetForm }) => {
          setLoading(true);

          if (sent) {
            setLoading(false);
            setHack(true);

            Toast.fire({
              customClass: {
                title: "swal-title",
              },
              icon: "error",
              title: "Something went wrong 😱",
            });
            return;
          }

          const payload = {
            name: values.from_name,
            email: values.reply_to,
            message: values.message,
            _subject: `Portfolio contact from ${values.from_name}`,
            _captcha: "false",
            _template: "table",
          };

          fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(payload),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Request failed");
              }

              return response.json();
            })
            .then(() => {
              Toast.fire({
                customClass: {
                  title: "swal-title",
                },
                icon: "success",
                title: "Your message has been sent! 😎",
              });

              const submitBtn = document.getElementById("submit");
              if (submitBtn) {
                submitBtn.classList.add("disabled");
              }

              setSent(true);
              setLoading(false);
              resetForm();
            })
            .catch((err) => {
              Toast.fire({
                customClass: {
                  title: "swal-title",
                },
                icon: "error",
                title: "Something went wrong 😱",
              });
              console.error(err);
              setLoading(false);
            });
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <Field type="text" name="from_name" autoComplete="name" placeholder="Name" disabled={sent} />
            <ErrorMessage name="from_name" component={() => <p className="error">{errors.from_name}</p>} />
            <Field type="text" name="reply_to" autoComplete="email" placeholder="Mail" disabled={sent} />
            <ErrorMessage name="reply_to" component={() => <p className="error">{errors.reply_to}</p>} />
            <Field name="message" as="textarea" placeholder="Message" disabled={sent} />
            <ErrorMessage name="message" component={() => <p className="error">{errors.message}</p>} />

            <ButtonActive id="submit" className={sent ? "disabled" : null} disabled={sent ? true : null}>
              Send Message
            </ButtonActive>
            {loading && <p className="loading">Sending your mail...</p>}
            {hack && <p className="hack">You already sent an email 😱</p>}
            {sent && <p className="sent">I'll check your mail as soon as possible!</p>}
          </Form>
        )}
      </Formik>
    </fieldset>
  );
};

export default Formulario;
