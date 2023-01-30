import React from 'react'
import { useState } from 'react'
import List from './ToDo/List/List';
import Form from './ToDo/Form/Form';
import "../App.css"

function Todo() {
  const [matter, setMatter] = useState([]);
  return (
    <div className='todoapp'>
      <div>
          <h1>todos</h1>
        </div>
		  <div>
        <Form matter={matter} setMatter={setMatter}> </Form>
      </div>

      <div>
        <List matter={matter} setMatter={setMatter}></List>
      </div>
    
    </div>
  )
}

export default Todo 