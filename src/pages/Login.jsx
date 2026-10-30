import "./Login.css";
import img from '../assets/building.jpeg';
function Login() {
    
    function handleSubmit(event){
        event.preventDefault();


    }
    return (
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

    );

}

export default Login;