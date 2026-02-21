
import { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle
} from "@mui/material";
 
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Register = ()=>{
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [avatar,setAvater] = useState(null);
    const [message,setMessage] = useState("");
    const [ok,setOK] = useState(false)
    const [open,setOpen] = useState(false);

const inputFileRef = useRef()
const navigate = useNavigate();
    const handleFileClick = ()=>{
        inputFileRef.current.click()
    }
const choosePicture = (e)=>{
  setAvater(e.target.files[0])
};
const goToSignIn=()=>{
  if(ok){
navigate("/login")
  }else{
    setOpen(false)
  }
  
}
const submitHandle = async (e) => {
  e.preventDefault();
  
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("avatar", avatar);
 
  for (let [key, value] of formData.entries()) {
  console.log(key, value);
}
  try {
    const response = await fetch(
      "http://localhost:9000/users/register",
      {
        method: "POST",
        body: formData, // 👈 just pass it here
      }
    );

    const data = await response.json();
    console.log(data);
    setOK(true)
    setMessage("🎉 You have successfully signed in!")
  setOpen(true)
  } catch (error) {
  setOpen(true)

    setMessage(`Error : ${error}`)
    console.error(error);
  }
};
const handleClose = ()=>{
  setOpen(false)
}


return(
    <Container maxWidth="sm">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Paper elevation={6} sx={{ p: 4, width: "100%" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Create Account
          </Typography>

          <Box component="form" onSubmit={submitHandle} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              margin="normal"
              value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              margin="normal"
              value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              margin="normal"
              value={password}
                          onChange={(e)=>setPassword(e.target.value)}

            />
 <Typography
              variant="body2"
              sx={{ mt: 2, cursor: "pointer", color: "primary.main" }}
              onClick={handleFileClick}
            >
              Choose your profile picture
            </Typography>

            <input
            type="file"
            accept="image/*"
            ref={inputFileRef}
            style={{display:"none"}}
            
            onChange={choosePicture}
            />
            {/* {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )} */}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3 }}
            >
              Sign Up
            </Button>
          
              <Dialog
        
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Success
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
             {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={goToSignIn} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

          </Box>
        </Paper>
      </Box>
    </Container>
)
}
export default Register;
