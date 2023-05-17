import {Box,TextField,Button,Typography} from "@mui/material";


function Forgot(){
    const handleSubmit = (e) => {
        
    }
return(
   
<Box component="form" onSubmit={handleSubmit} sx={{
                marginTop: 50,
                display: 'flex',
                margin : 'auto',
                flexDirection: 'column',
                alignItems: 'center', 
                width: 600,
                height: 200,                            
            }}                               
                >
<Typography component="h1" variant="h5" sx={{marginBottom:'50px'}}>
    찾고자하는 아이디를 입력해주세요.
</Typography>
<TextField
margin="normal"
label="이름"
fullWidth
name="name"
autoFocus
/>
<TextField
margin="normal"
label="이메일 아이디"
fullWidth
name="email"
autoComplete="email"
 />

<Button type="submit" variant="outlined" sx={{ marginTop: 2, marginBottom: 3 }}>비밀번호 찾기 </Button>
</Box>

)}
export default Forgot;