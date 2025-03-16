import React from 'react'
import './register.css'
import { Formik , Form , Field } from 'formik'

const Register = () => {
  return (
    <div className='registerPage'>
      <Formik>
        <Form>
          <h2>آکادمی سپهر</h2>
          <h3>ثبت نام</h3>
          <div className='question'>
            <a href='/login'>وارد شوید</a>
            <p>حساب کاربری دارید؟</p>
          </div>
          <Field placeholder="نام"/>
          <Field placeholder="شماره تماس"/>
          <Field placeholder="رمز عبور"/>    
          <button>ادامه</button>      
        </Form>
      </Formik>
    </div>
  )
}

export default Register