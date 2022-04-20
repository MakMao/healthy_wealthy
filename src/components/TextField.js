import React from 'react'
import {ErrorMessage, useField} from 'formik'
import styled from 'styled-components'
import ReportIcon from '@mui/icons-material/Report';


export const TextField = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return (
    <Container>
      <div className="form-control">
        <label htmlFor={field.name}>{label}</label>
        <input {...field}{...props} className={`${meta.error && meta.touched && 'invalid'}`}/>
            <ErrorMessage name={field.name}>
              {msg => 
              <div className="error-display">
                <ReportIcon className="icon"/>
                {msg}
              </div>}
            </ErrorMessage>
        </div>
    </Container>
  )
}

const Container = styled.div `

.form-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  position: relative;
}

.invalid {
  border-color: red; 
}

.icon {
  color: red;
}

.error-display {
  display: flex;
  border-radius: 5px;
  margin-top: 0.2em;
  color: red;
  align-items: center;
  background-color: rgba(244, 40, 40, 0.3);
}
` 