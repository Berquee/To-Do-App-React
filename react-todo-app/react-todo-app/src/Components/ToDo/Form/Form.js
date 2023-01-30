import React from 'react'
import { useEffect, useState } from 'react'
import "../../../App.css"

const initialValue = {text: "" };

function Form({matter, setMatter}) {
    const [form, setForm] = useState(initialValue);

    const onChangeHander = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();
    

    if (form.text === "") {
        return false;
    }

    setMatter ([
        ...matter,
        { id: Math.random(), form: form, isCompleted: false},
    ]);
}

    useEffect(() => {
        setForm(initialValue);
    }, [matter]);

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input className='new-todo' placeholder='What needs to be done?' value={form.text} name={"text"}
            onChange={onChangeHander} autoFocus/>
        </form>
    </div>
  )
}

export default Form