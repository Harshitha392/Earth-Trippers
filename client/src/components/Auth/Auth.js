import React , {useState} from 'react'
import {Avatar , Button , Paper, Grid, Typography, Container, TextField} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input1 from './Input1';
import useStyles from './styles';
//import {GoogleLogin} from 'react-google-login';
// import Icon from './Icon';
// import Icon1 from './Icon1';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {signin , signup} from '../../actions/auth';

const initialState = {firstName: '' ,lastName: '', email:'', password:'',confirmPassword:''};

const Auth = () => {
  const state=null;
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const [isSignup , setIsSignup] = useState(false);
  const dispatch  = useDispatch();
  const [formData ,setFormData] = useState(initialState);
  const history = useNavigate();
  const switchMode = () =>{
      setIsSignup((prevIsSignup) => !prevIsSignup);
      setShowPassword(false);
  };

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit  = (e) =>{
      e.preventDefault();

      if(isSignup){
        dispatch(signup(formData, history));
      }
      else{
        dispatch(signin(formData, history));
      }
  };
  const handleChange= (e) =>{
    setFormData({ ...formData , [e.target.name]: e.target.value});
  };
  // const googleSuccess =async (res) =>{
  //   // console.log("Google Sign In was Successful ."); 
  //   const result=res ?.profileObj;
  //   const token= res?.tokenId;

  //   try{
  //     dispatch({type : 'AUTH' , data : {result , token }});

  //     history.push('/');
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // };
  // const googleFailure = () =>{
  //   console.log("Google Sign In was unsuccessful. Try Again Later");
  // };
  return (
    <Container component="main" maxWidth={1}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
              {isSignup && (
                  <>
                  <Input1 name="firstName" label="First Name" handleChange={handleChange} autoFocus xs half/>
                  <Input1 name="LastName" label="Last Name" handleChange={handleChange} half/>
                  </>
                )}
                <Input1 name="email" label="Email Address" handleChange={handleChange} type="email"/>
                <Input1 name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                {isSignup && <Input1 name="confirmPassword" label = "Repeat Password" handleChange={handleChange} type="password"/>}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
          {/* <GoogleLogin
            clientId=""
            render = {(renderProps)=>{
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon1/>} variant="contained">
                Google Sign In
                </Button>
            }}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy ="single_host_origin"
          /> */}
          <Grid container justifyContent = "flex-end">
                  <Button onClick={switchMode}>
                  { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up" }
                  </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth

