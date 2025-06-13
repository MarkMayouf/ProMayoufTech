import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Form,Button,Row,Col}from "react-bootstrap"
import {useDispatch,useSelector } from "react-redux"
import Message from '../components/Message'
import Loader from "../components/Loader"
import { register } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import {  useLocation,useNavigate } from 'react-router-dom';


const RegisterScreen = ()=> {
const navigate = useNavigate()
 const[name,setName]=useState("")
 const[email,setEmail]=useState("")
 const[password,setPassword]=useState("")
 const[confirmPassword,setConfirmPassword]=useState("")
 const[message,setMessage]=useState(null)

// const location = useLocation();
 const dispatch=useDispatch()


 const userRegister=useSelector(state => state.userRegister)
 const {loading,error,userInfo}=userRegister


 const { search } = useLocation(); 
 const redirectInUrl = new URLSearchParams(search).get('redirect'); 
 const redirect = redirectInUrl ? redirectInUrl : '/';


 useEffect(()=>{
    if(userInfo){
       navigate(redirect)
    }
 },[userInfo,redirect])

 const submitHandler=(e)=>{
    e.preventDefault()
        //Dispatch Register
        if(password!==confirmPassword){
            setMessage("Password do not match")

        }else{
        dispatch(register(name,email,password))
        }
    
 }



  return (
    <FormContainer>
    <h1>Sign Up </h1>
    {message && <Message variant="danger">{message}</Message> }
    {error && <Message variant="danger">{error}</Message> }

    {loading && <Loader/>}
    <Form onSubmit={submitHandler}>
    <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" value={name}
        onChange={(e)=>setName(e.target.value)}></Form.Control>
        
     </Form.Group>
        <Form.Group controlId="email">
        <Form.Label> Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={email}
        onChange={(e)=>setEmail(e.target.value)}></Form.Control>
        
     </Form.Group>
      <Form.Group controlId="password">
         <Form.Label>Password</Form.Label>
         <Form.Control  className='pt-3'  type="password" placeholder="Enter Password" value={password}
       onChange={(e)=>setPassword(e.target.value)}></Form.Control>
     </Form.Group>
      
      <Form.Group controlId="password">
         <Form.Label>Confirm Password</Form.Label>
         <Form.Control  className='pt-3'  type="password" placeholder="Confirm Password" value={confirmPassword}
       onChange={(e)=>setConfirmPassword(e.target.value)}></Form.Control>
     </Form.Group>

       <Button  style={{ marginTop:20  }}  type="submit" variant='primary'>
        Register
       </Button>
    </Form>
       <Row className='py-3'>
    <Col>
     Have an Account ? <Link to={redirect ?`/Login?redirect=${redirect}`:"/Login"}> Login</Link>
    </Col>
    </Row>
    </FormContainer>
  )
}

export default RegisterScreen