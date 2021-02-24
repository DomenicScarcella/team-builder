import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form';
import Member from './Member';
import axios from 'react';

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
    if (!newMember.username || !newMember.email || !newMember.role) {
      return;
    }
    axios.post('fakeapi.com', newMember)
      .then(res => {
       setMembers([...members, res.data])
       setFormValues(iniFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    axios.get('fakeapi.com').then(res => setMembers(res.data))
  }, [])

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
