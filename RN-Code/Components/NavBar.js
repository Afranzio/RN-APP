import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{justifyContent: "space-between"}}>
                <div>
                    <a className="navbar-brand" href="#"><b>CIRCLE</b></a>  		
                    <button type="button" className="navbar-toggler .navbar-btn" data-toggle="collapse" data-target="#navbarCollapse" style={{marginLeft:"15em"}}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div id="navbarCollapse" className="collapse navbar-collapse justify-content-end">
                    <div className="navbar-nav">
                        <a href="#" className="nav-item nav-link"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="nav-item nav-link"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="nav-item nav-link"><i className="fa fa-google-plus"></i></a>
                        <a href="#" className="nav-item nav-link"><i className="fa fa-pinterest-p"></i></a>
                    </div>		
                </div>
            </nav>
        </div>
    )
}
