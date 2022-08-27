import React, {useState} from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../Button/Button";

const AddUser = (props) => {
    const [entredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault(); //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.
        console.log(entredUsername, enteredAge);
    };

   const onChangeUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
   };

   const onChangeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
   }
    
   return (
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={onChangeUsernameHandler} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" onChange={onChangeAgeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
    </Card>
   );
};

export default AddUser;