import {Box,TextField,Button} from "@mui/material";


function Forgot(){
    const handleSubmit = (e) => {
        
    }
return(  <Box component="form" onSubmit={handleSubmit}>
<TextField
margin="normal"
label="이름"
fullWidth
name="name"
/>
<TextField
margin="normal"
label="이메일 아이디"
fullWidth
name="email"
autoComplete="email"
autoFocus
 />

<Button type="submit" variant="outlined" sx={{ marginTop: 2, marginBottom: 3 }}>비밀번호 찾기 </Button>
</Box>
)}
export default Forgot;