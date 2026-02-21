
import { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";

const Login = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [open,setOpen] = useState(false);
    const [ok,setOk] = useState(false);
    const [user,setUser] = useState()
const [message,setMessage] = useState("")
    const navigate = useNavigate();
    const handleClose = ()=>{
  setOpen(false)
}               
const goToHomePage = ()=>{
  if(ok){
navigate(`/${user?.user._id}`)
  }else{
    setOpen(false)
  }
}
    const submitHandleLogin = async(e)=>{
      e.preventDefault();


      try{
const res = await fetch("http://localhost:9000/users/login",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    email,
    password
  })
})

const data = await res.json();
setUser(data)
console.log(data);
setOpen(true)
setOk(true)
setMessage("Your logging Successfuly");
localStorage.setItem("token",data?.user.token)

      }catch(err){
setOpen(true)

        setMessage(`Error : ${err}`)
        console.log(err)
      }
    }
return(
<div>
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

          <Box component="form" onSubmit={submitHandleLogin} sx={{ mt: 2 }}>
          

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
              Login
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
                    <Button onClick={goToHomePage} autoFocus>
                             <Link to={`/${user?.user._id}`} className="btn">OK</Link>
                      
                    </Button>
                  </DialogActions>
                </Dialog>
                    </Box>
        </Paper>
                           </Box>
    </Container>
    </div>
)
}
export default Login;
