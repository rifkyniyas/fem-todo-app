import React from 'react'

const AddNewTodo = () => {
  return (
    <div>
        <input type="text" name='newTodo' placeholder='Create a new todo'
            className='py-4 px-8 rounded block w-full outline-none
            text-light-vd-g-blue' />
    </div>
  )
}

export default AddNewTodo