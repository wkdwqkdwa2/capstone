import * as React from 'react';
import { 
    Avatar, 
    Box, 
    Button, 
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
 } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import SignUp from './SignUp'

function Login(){ // 로그인 기본예제 틀

    const [open, setOpen] = React.useState(false);
    const [title, settitle] = React.useState("");
    
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
                <Link name="forgot"onClick={handleClickOpen}>Forgot_password?</Link>
            </Grid>
            <Grid item>
                <Link name="register"onClick={handleClickOpen}>Sign_Up</Link>
            </Grid>
        </Grid>
        

        <div>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            
            </DialogTitle>
            <DialogContent>
                <SignUp name={title}/> 
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
                Agree
            </Button>
            </DialogActions>
        </Dialog>
        </div>

        </Container>
        

          

    );
}
export default Login;