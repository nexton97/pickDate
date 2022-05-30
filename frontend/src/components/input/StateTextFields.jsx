import * as React from 'react';
import TextField from '@mui/material/TextField';
import "./StateTextFields.css";

export default function StateTextFields() {
  const [name, setName] = React.useState();
  const [namee, setEmail] = React.useState();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
    const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className='TextF'>
    <div className='TextFsolo' >
      <TextField
        id="outlined-name"
        label="Title"
        value={name}
        onChange={handleNameChange}
      />
      </div><div className='TextFsolo' >
          <div className='InputWidth'>
      <TextField
        id="outlined-name"
        label="email"
        sx={{'&': {width : 350 } }}
        value={namee}
        onChange={handleEmailChange}
      /></div></div>

    </div>
  );
}