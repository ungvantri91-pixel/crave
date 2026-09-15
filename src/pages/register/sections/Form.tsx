import '../css/form.css'

function Form() {
    return(
        <div className="form">
            <p className='title-1'>WELCOME TO CRAVE</p>
            <p className='title-2'>Create your account</p>
            <p className='title-3'>Sign in to see your favorites and track every order.</p>
            <form className="form-container" action="/" method="POST">
                <div className="form-group">
                    <label htmlFor="full-name">Full name</label>
                    <input id="full-name" required placeholder="Full name" name="fullName"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email-address">Email address</label>
                    <input id="email-address" type="email" required placeholder="you@example.com" name="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone-number">Phone number</label>
                    <input id="phone-number" type="tel" required placeholder="Your phone number" name="phoneNumber"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" required placeholder="Create a secure password" name="password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input id="confirm-password" type="password" required placeholder="Repeat your password" name="confirmPassword"/>
                </div>
                <button type="submit" className="btn">Create Account</button>
            </form>
            <p className='footer'>Already have an account? Log in</p>
        </div>
    )
}

export default Form;