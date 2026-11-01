import "./Login.css";
import img from '../assets/building.jpeg';
import Sidebar from "../components/Sidebar";
function Login() {
    
    function handleSubmit(event){
        event.preventDefault();


    }
    return (
        <><div style={{backgroundColor:"green",color:"white",height:"2rem",fontWeight:"bold"}}>ACCESS / Secure Login</div>
        <Sidebar role="Admin" id="Sidebar" elms={[{ link: "first", name: "First"},{link:"second",name:"Second"}]} />
        <div id="LoginContainer">
            <div id="LoginBlock">
                <span style={{fontSize:"25px"}} >Welcome back</span>
                
                <form onSubmit={handleSubmit}>
                    
                        <div className="Field">
                    <label htmlFor="email" >Work Email</label>
                    <input id="email" type="email" name="email"/></div>
                    <div className="Field">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password"/></div>
                    <input id="signIn" type="submit" value="Sign in"/>
                    
                </form>
                
            </div>
            <div id="imgBlock">
                <img id="sideImg" src={img} alt="Picture of a KFUPM building" />
            </div>
        </div>
        </>

    );

}

export default Login;