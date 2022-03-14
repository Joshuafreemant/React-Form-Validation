import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function SignIn() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().max(15, "Must be 15 Characters or Less").required("This is Required"),
      email: Yup.string().email("Invalid Email Address").required("This is Required"),
      password: Yup.string().matches(/[a-zA-Z]/, "Password must contain Latin letters").min(8, "Password must contain 8 Minimum Char").required("This is Required")

    }),
    onSubmit: (values) => {
      console.log(values)

    },
  })
  return (

    // the JSX form fields
    <div>
      <h2>Formik Form Validation</h2>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="">
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? <p>{formik.errors.fullName}</p> : null}

        </div>

        <div className="">
          <label htmlFor="">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            onBlur={formik.handleBlur}

            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}

        </div>

        <div className="">
          <label htmlFor="">Password</label>

          <div>
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              id="password"
              onBlur={formik.handleBlur}

              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {passwordShown ? (
              <button onClick={togglePassword}><AiFillEye /></button>

            ) : (
              <button onClick={togglePassword}><AiFillEyeInvisible
              /></button>

            )}
          </div>


          {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}

        </div>
        <button type="submit" >Sign In</button>


      </form>
    </div>
  )
}

export default SignIn