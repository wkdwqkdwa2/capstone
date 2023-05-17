import * as React from 'react';
import { 
    Avatar, 
    Box, 
    Button,     
    Container,   
    Grid,
    TextField,
    Typography
 } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Axios from 'axios';

import { useNavigate } from 'react-router-dom';



function Login(){ // 로그인 기본예제 틀
    const URL = 'http://127.0.0.1:3001/login'
    
   
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget);
        
        const email = data.get('email');
        const password = data.get('password');
            
        Axios.get(URL, {params:{email,password}}).then((res)=>{          
          if(res.data==='success'){
            navigate("/")
            console.log("둘다성공")
          }
            else if(res.data==='idfail'){
                console.log("아이디만 틀림")
            }
            else if(res.data==='pwdfail'){
                console.log("비밀번호 실패")
            }
            else if(res.data==="fail"){
                console.log("로그인 실패")
            }
        })
        
    }

   return  (  
    <Container component="main" maxWidth="xs" >
        <Box
            component="form"    
            onSubmit={handleSubmit}       
            sx={{
                marginTop: 15,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                       
                }}
            
        >       
            <Avatar sx={{ m:1, bgcolor:'#D4DFE6'}}>
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
            <Grid container>
            <Grid item xs>
                <Button onClick={()=>{navigate("/forgot")}}>Forgot password?</Button>
            </Grid>
            <Grid item>
            <Button onClick={()=>{navigate("/signup")}}>SignUp</Button>
            </Grid>
        </Grid>  
        </Box>

           
    </Container>   
    );
}
export default Login;