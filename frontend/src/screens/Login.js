import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/NavBar';
import { Link } from 'react-router-dom';
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

export default function Login(){
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SubmitRequest = (event) => {
        event.preventDefault();
        Axios.post('http://127.0.0.1:8000/api/v1/rest-auth/login/', {
            username : username,
            email : email,
            password : password,
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    return(
        <div>
        <Navbar />
       <Container component="main" maxWidth='xs'>
            <Paper className={classes.paper}>
            <Typography component='h1' variant="h4" style={{marginBottom : 20}}>
                Sign In
            </Typography>
                <form className={classes.root}>
                    <TextField
                        id='outlined-basic'
                        label='Username'
                        variant='outlined'
                        fullWidth
                        margin='normal'
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
                        onChange = {(e) => setPassword(e.target.value)}
                        />
     <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {SubmitRequest}
          >
            Sign In
          </Button>
            </form>
            <Typography style={{marginTop : 25}}>
                New Here? 
            </Typography>
            <Typography>
                <Link to="/register" style={{textDecoration:'none'}}>Register</Link>
            </Typography>

            </Paper>
       </Container>
       </div>
    )
}