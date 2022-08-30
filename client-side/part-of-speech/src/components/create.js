import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import  { useState } from 'react';
import axios from 'axios';
// const Create = () => (

//   <Form className="create-form">
//     <Form.Field>
//       <label>First Name</label>
//       <input placeholder='First Name' />
//     </Form.Field>
//     <Form.Field>
//       <label>Last Name</label>
//       <input placeholder='Last Name' />
//     </Form.Field>
//     <Form.Field>
//       <Checkbox label='I agree to the Terms and Conditions' />
//     </Form.Field>
//     <Button type='submit'>Submit</Button>
//   </Form>
// )

export default function Create() {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post(`https://630d77bc109c16b9abe64e91.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
                </Form.Field>
                <Button type='submit' onClick={postData} >Submit</Button>
            </Form>
        </div>
    )
}

// export default Create;