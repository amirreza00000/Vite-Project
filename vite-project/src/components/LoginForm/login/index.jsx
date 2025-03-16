import React from 'react'
import './login.css'
import { Formik , Form , Field } from 'formik'

const Login = () => {
  return (
        <div className='loginPage'>
          <Formik>
            <Form>
              <h2>آکادمی سپهر</h2>
              <h3>ورود</h3>
              <div className='question'>
                <a href='/register'>ثبت نام کنید</a>
                <p>حساب کاربری ندارید؟</p>
              </div>
              <Field placeholder="شماره موبایل"/>    
              <button><a href=''>ادامه</a></button>
              <a href=''>حریم خصوصی</a>
            </Form>
          </Formik>
        </div>
  )
}

export default Login