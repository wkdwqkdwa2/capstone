import * as React from 'react';
import { Avatar, Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function SignUp(){ //회원가입 미완성
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwdCheck, setPwdCheck] = useState("");

  const [open, setOpen] = React.useState(true);

    const onEmailChange = (e) => {
        setEmail(e.target.value); //이메일아이디 이벤트값 설정
    }
    const onPwdChange = (e) => {
        setPwd(e.target.value); //비밀번호 이벤트값 설정
    }
    const onPwdCheckChange = (e) => {
        setPwdCheck(e.target.value); //비밀번호 확인 이벤트값 설정
    }
   
      const handleClose = () => {
        setOpen(false);
      };


return (
    <Container component="main" maxWidth="sm" sx={{ marginTop:8, textAlign: 'center', border: 2, borderRadius: 10, borderColor: '#372D2B'}}>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>

        <DialogContent>
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            
             <Avatar sx={{ m:1, bgcolor:'secondary.main'}}>
                <AccountBoxIcon /> 
            </Avatar>

            <Typography component="h1" variant="h5">회원가입</Typography>
        
            <TextField  
                margin="normal"
                label="이메일 아이디" 
                fullWidth
                name="email"
                autoComplete="email"    
                autoFocus
                onChange={onEmailChange}
                value={email}
                error={email === ""}
                helperText={email === "" ? '이메일 아이디를 입력해주세요 ' : ' '}/>

             <TextField  
              margin="normal"
              label="비밀번호" 
              type="Password"              
              fullWidth
              name="password"
              id="password"
              autoComplete="current-password"
              onChange={onPwdChange}
              value={pwd}
              error={pwd === ""}
              helperText={pwd === "" ? '비밀번호를 입력해주세요 ' : ' '}/>
            <TextField  
              margin="normal"
              label="비밀번호 확인" 
              type="Password"              
              required
              fullWidth
              name="pwdCheck"
              id="pwdCheck"
              autoComplete="current-password"
              onChange={onPwdCheckChange}
              value={pwdCheck}
              error={pwd !== pwdCheck}
              helperText={pwd !== pwdCheck ? '비밀번호가 다릅니다. ' : ' '}/>
            
            <TextField   
              margin="normal"
              label="이름"       
              fullWidth
              name="name"
              id="name"
              />
            
            
            <Button variant="outlined" sx={{ marginTop:2, marginBottom:3}} onClick={(event) => {event.preventDefault();                        
                    if(pwd !== pwdCheck) {
                        alert('비밀번호가 일치하지 않습니다!!')
                        setPwd('');
                        setPwdCheck('');}


            }}> 가입하기 </Button>
            
          
        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>  
        </Dialog>   
    </Container>
        
    );
} export default SignUp;