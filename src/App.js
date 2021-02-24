import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form';
import Member from './Member';

const iniFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {

  const [members, setMembers] = useState ([])

  const [formValues, setFormValues] = useState(iniFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    setMembers(members.concat(newMember))
    setFormValues(iniFormValues)
    
  }
  return (
    <div className="App">
      <h1>Members List</h1>
      <Form
        values={formValues} 
        update={updateForm} 
        submit={submitForm} 
      />
      {
        members.map(member => {
          return(
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}
