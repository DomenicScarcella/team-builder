import React from 'react';


export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='inputs'>
                <label>Name ->
                    <input 
                        name='name' 
                        type='text' 
                        value={values.name} 
                        onChange={onChange} 
                        placeholder='Enter your name' 
                        maxWidth='50'
                    />
                </label>
                <p />
                <label>Email ->
                    <input 
                        name='email' 
                        type='text' 
                        value={values.email} 
                        onChange={onChange}
                        placeholder='Enter your email'
                    />
                </label>
                <p />
                <label>Role ->
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value=''>- - - Select role - - -</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Guy who brings everyone&apos;s coffee'>Guy who brings everyone's coffee</option>
                    </select>
                </label>
                <p />
                <div className='subButton'>
                    <button disabled={!values.name || !values.email || !values.role}>
                        Submit
                    </button>
                </div>
            </div>



        </form>
    )
}