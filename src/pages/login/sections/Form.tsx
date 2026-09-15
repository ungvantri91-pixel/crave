import '../css/form.css'

function Form() {
    return(
        <div className="form">
            <p className='title-1'>WELCOME BACK</p>
            <p className='title-2'>Ready for something <br />good?</p>
            <p className='title-3'>Sign in to see your favorites and track every order.</p>
            <form className="form-container" action="/" method="POST">
                <div className="form-group">
                    <label htmlFor="email-address">Email address</label>
                    <input id="email-address" type="email" required placeholder="you@example.com" name="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" required placeholder="Your password" name="password"/>
                </div>
                <button type="submit" className="btn">Log in</button>
            </form>
            <p className='footer'>New to Crave? Create an account</p>
        </div>
    )
}

export default Form;