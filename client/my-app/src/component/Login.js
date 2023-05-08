import * as React from 'react';
import { 
    Avatar, 
    Box, 
    Button,     
    Container,    
    Grid,
    Link,
    TextField,
    Typography
 } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Axios from 'axios';
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function Login(){ // 로그인 기본예제 틀

    const URL = 'http://127.0.0.1:8000/login'
   
    const [cookies, setCookie] = useCookies(['id'])
    
    const navigate = useNavigate();
        
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        

        Axios.post(URL,{email,password}).then((res) => {
            console.log(res)
            setCookie('id', res.data.token)
            navigate('/amain')
        })
    }


   return  (
    
    <Container component="main" maxWidth="xs" >
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        component="form" 
        onSubmit={handleSubmit}
        >
        
        <Avatar sx={{ m:1, bgcolor:'secondary.main'}}>
            <LockOutlinedIcon /> 
        </Avatar>
        
        <Typography component="h1" variant="h5">
            Sign in
        </Typography>

        <TextField  
            margin="normal"
            label="Email Address" 
            required
            fullWidth 
            name="email"
            autoComplete="email"
            autoFocus
        />
        
        <TextField  
            label="Password" 
            type="Password"
            margin="normal"
            required
            fullWidth
            name="password"
            id="password"
            autoComplete="current-password"
         />
                
        <Button type="submit" fullWidth variant="contained" sx={ {mt:3, mb:2} }>
            로그인
        </Button>
        </Box>
        <Grid container>
            <Grid item xs>
                <Link name="forgot">Forgot_password?</Link>
            </Grid>
            <Grid item>
                <Link name="register">Sign_Up</Link>
            </Grid>
        </Grid>
       
        </Container>
        

          

    );
}
export default Login;



