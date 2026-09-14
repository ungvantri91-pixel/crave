import './header.css'

function Header() {
    return(
        <div className="header">
            <div className="logo">crave.</div>
            <div className="nav">
                <div className="nav-item">Home</div>
                <div className="nav-item">Food</div>
                <div className="nav-item">Drink</div>
                <div className="nav-item">Promotion</div>
                <div className="nav-item">Order</div>
            </div>
            <div className="header-right">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="login">Log in</div>
            </div>
        </div>
    )
}

export default Header;