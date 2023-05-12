import * as React from 'react';
import { Avatar, Box, Button, TextField } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Axios from 'axios';

function SignUp() { //회원가입 미완성

  const URL = 'http://127.0.0.1:8000/signup'

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      name: data.get('name')
    })
    const email = data.get('email');
    const password = data.get('password');
    const name = data.get('name');

    Axios.post(URL, { email, password, name }).then((res) => {
      console.log(res)
    })



  }



  return <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    component="form"
     onSubmit={handleSubmit}>
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <AccountBoxIcon />
    </Avatar>

    <TextField
      margin="normal"
      label="이메일 아이디"
      fullWidth
      name="email"
    />

    <TextField
      margin="normal"
      label="비밀번호"
      type="Password"
      fullWidth
      name="password"
    />

    <TextField
      margin="normal"
      label="비밀번호 확인"
      type="Password"
      required
      fullWidth
      name="pwdCheck"
      id="pwdCheck"
    />
    <TextField
      margin="normal"
      label="이름"
      fullWidth
      name="name"
      id="name"

    />
    <Button type="submit" variant="outlined" sx={{ marginTop: 2, marginBottom: 3 }}>가입하기</Button>
  </Box>
}

export default SignUp;

