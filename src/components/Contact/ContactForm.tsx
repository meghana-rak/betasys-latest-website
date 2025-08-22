

import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { postInquiry } from '../../store/contactThunk.js'

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(50, 'First name too long')
    .required('First name is required'),
  lastName: Yup.string()
    .max(50, 'Last name too long')
    .required('Last name is required'),
  phoneNumber: Yup.string()
    .matches(/^\+?\d{10,15}$/, 'Invalid phone number')
    .required('Phone number is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  company: Yup.string()
    .max(100, 'Company name too long')
    .required('Company is required'),
});



const ContactForm: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        company: '',
      }}
      validationSchema={ContactFormSchema}
      onSubmit={(values, { resetForm }) => {
        const payload = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phoneNumber,        // ✅ mapped correctly
          companyName: values.company,      // ✅ mapped correctly
          source: "company",
        };

        console.log("Payload to API:", payload);

        dispatch(postInquiry(payload))
          .unwrap()
          .then(() => resetForm())
          .catch((err) => console.error("Inquiry failed:", err));
      }}

    >
      {({ isSubmitting }) => (
        <Form className="space-y-4 shadow-md p-5 font-poppins text-[18px] md:text-[22px]">

          {/* Name Fields */}
          {/* First Name & Last Name in two columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label htmlFor="firstName" className="block font-medium mb-1">First Name</label>
              <Field
                name="firstName"
                type="text"
                className="w-full border border-gray-300 rounded-md p-1  focus:outline-none focus:border-emerald-500"
              />
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-[16px] mt-1" />
            </div>

            <div>
              <label htmlFor="lastName" className="block font-medium mb-1">Last Name</label>
              <Field
                name="lastName"
                type="text"
                className="w-full border border-gray-300 rounded-md p-1  focus:outline-none focus:border-emerald-500"
              />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-[16px] mt-1" />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block font-medium mb-1">Phone Number</label>
            <Field
              name="phoneNumber"
              type="text"
              className="w-full border border-gray-300 rounded-md p-1  focus:outline-none focus:border-emerald-500"
            />
            <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-[16px] mt-1" />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <Field
              name="email"
              type="email"
              className="w-full border border-gray-300 rounded-md p-1  focus:outline-none focus:border-emerald-500"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-[16px] mt-1" />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block font-medium mb-1">Company</label>
            <Field
              name="company"
              type="text"
              className="w-full border border-gray-300 rounded-md p-1  focus:outline-none focus:border-emerald-500"
            />
            <ErrorMessage name="company" component="div" className="text-red-500 text-[16px] mt-1" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#00A148] font-semibold font-poppins text-white px-6 py-2 rounded-md hover:bg-green-700 transition disabled:opacity-50"
          >
            Submit Inquiry
          </button>
        </Form>
      )}
    </Formik>
  )
};

export default ContactForm;
