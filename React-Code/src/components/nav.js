import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid"> <a className="navbar-brand" href="#"><h1 style={{fontFamily: "'Quicksand', sans-serif"}}>Circle</h1></a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        </ul>
                        <div className="d-flex">
                            <ul>
                                <li><span className="social-icon social-facebook"><i className="fa fa-facebook"></i></span></li>
                                <li><span className="social-icon social-google"><i className="fa fa-google"></i></span></li>
                                <li><span className="social-icon social-linkedin"><i className="fa fa-linkedin"></i></span></li>
                                <li><span className="social-icon social-instagram"><i className="fa fa-instagram"></i></span></li>
                                <li><span className="social-icon social-twitter"><i className="fa fa-twitter"></i></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
