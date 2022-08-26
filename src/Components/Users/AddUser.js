import React from "react";

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault(); //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.
    }
   return (
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"/>
        <button type="submit">Add User</button>
    </form>
   );
};

export default AddUser;