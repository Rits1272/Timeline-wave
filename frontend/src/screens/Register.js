import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/NavBar';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
 paper:{
     marginTop : theme.spacing(20),
     display : 'flex',
     flexDirection : 'column',
     alignItems : 'center',
     padding : 30,
 },
 submit : {
    marginTop : theme.spacing(3)
 }
}));

export default function Register(){
    const classes = useStyles();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [cpassword, setCPassword] = useState();
                
    const submitRequest = (event) => {
      event.preventDefault();
      Axios.post('http://127.0.0.1:8000/api/v1/rest-auth/registration/', {
        username : username, 
        email : email,
        password1 : password,
        password2 : cpassword,
      })
      .then(res => {console.log(res); navigateLogin()})
      .catch(err => console.log(err));
    }

    const navigateLogin = () => {
      return(<Redirect to='/login'/>)
    }

    return(
      <div>
        <Navbar />
        {console.log(username)}
       <Container component="main" maxWidth='xs'>
            <Paper className={classes.paper}>
            <Typography component='h1' variant="h4" style={{marginBottom : 20}}>
                Sign Up
            </Typography>
                <form className={classes.root}>
                    <TextField
                        id='outlined-basic'
                        label='Username'
                        margin='normal'
                        variant='outlined'
                        fullWidth
                        onChange = {(e) => setUsername(e.target.value)}
                        
                    />
                     <TextField
                        id='outlined-basic'
                        label='Email'
                        margin='normal'
                        variant='outlined'
                        fullWidth
                        onChange = {(e) => setEmail(e.target.value)}  
                    />
                    <TextField 
                        id='outlined-basic'
                        label='Password'
                        variant='outlined'
                        margin='normal'
                        type='password'
                        fullWidth
                        onChange = {(e) => setPassword(e.target.value) }
                        />
                          <TextField 
                        id='outlined-basic'
                        label='Confirm Password'
                        variant='outlined'
                        margin='normal'
                        type='password'
                        fullWidth
                        onChange = {(e) => setCPassword(e.target.value) }

                        />
     <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {submitRequest}
          >
            Sign Up
          </Button>
            </form>
            <Typography style={{marginTop : 25}}>
              Already have an account?
            </Typography>
            <Typography>
              <Link to='/login' style={{textDecoration:'none'}}>Sign In</Link>
            </Typography>
            </Paper>
       </Container>
       </div>
    )
}