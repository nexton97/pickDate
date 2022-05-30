import React from 'react'
import "./topbar.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import { Link } from "react-router-dom";


export default function Topbar() {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Pick Date With Me !</span>
            </div>
            <div className="topRight">
                <span className="topbartext">Are you Majid ?  </span>
                <Popup trigger={<span className="btnlogin">  Login</span>} modal>
                  <div className='LoginWindow'>
                    <div className='LoginField'>
                    <TextField
                      className='username'
                      id="outlined-name"
                      label="Username"/></div>

                      <div className='PasswordField'>
                      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                       endAdornment={
                      <InputAdornment position="end">
                      <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end">
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            
          /></div><Link to="/availibilities">
                    <div className='ButtonField'>
                    <Button variant="contained" color="primary">Log In</Button></div></Link>
                  </div>
  </Popup>
            </div>
        </div>
    </div>
  )
}
