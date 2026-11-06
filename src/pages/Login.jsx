import "./Login.css";
import img from '../assets/building.jpeg';
function Login() {
    
    function handleSubmit(event){
        event.preventDefault();


    }
    return (
        <><div id="loginHeader" >ACCESS / Secure Login</div>
        <div id="LoginContainer">
            <div id="LoginBlock">
                <span style={{fontSize:"25px"}} >Welcome back</span>
                <span style={{opacity:"0.6"}}>Sign in to your account to access the system</span>
                
                <form id="loginForm" onSubmit={handleSubmit}>
                    
                        <div className="Field">
                    <label htmlFor="email" >Work Email</label>
                    <input id="email" type="email" name="email"/></div>
                    <div className="Field">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password"/></div>
                    <input id="signIn" type="submit" value="Sign in"/>
                    
                </form>
                <a href="/passwordRecovery" style={{color:"green",textDecoration:"none"}} >Forgot your password?</a>
                
            </div>
            <div id="imgBlock">
                <img id="sideImg" src={img} alt="Picture of a KFUPM building" />
                <span style={{color:"white",position:"absolute",zIndex:"4",fontWeight:"Bold",fontSize:"2vw",top:"7%",left:"2%"}}>Maintenance</span>
                <span style={{color:"white",position:"absolute",zIndex:"4",fontWeight:"Bold",fontSize:"1vw",bottom:"13%",left:"2%"}}>KFUPM - Buidling Maintenance</span>
                <span style={{color:"white",position:"absolute",zIndex:"4",fontWeight:"Bold",fontSize:"2vw",bottom:"7%",left:"2%"}}>Better buildings. Better Lives.</span>
            </div>
        </div>
        </>

    );

}

export default Login;