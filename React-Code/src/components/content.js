import React from 'react'

export default function Contents({userOne}) {
    return (
        <div style={{margin: "1em", textAlign: "center", color: "white"}}>
            <div className="card">
                <img src={userOne.picture.medium} alt="John" style={{width: "50%", height: "30%", marginLeft: "25%", marginTop: "2em", objectFit: "contain", borderRadius: "50%"}} />
                <h4><p>{`Name : ${userOne.name.title} ${userOne.name.first} ${userOne.name.last}`}</p></h4>
                <h5><p className="title">{`Email : ${userOne.email}`}</p></h5>
                <h5><p className="title">{`Gender : ${userOne.gender}`}</p></h5>
                <h5><p>{`Phone : ${userOne.phone}`}</p></h5>
                <div>
                    <a href="#"><i className="fa fa-dribbble" style={{margin: "1em", fontSize: "1.5em", color: "white"}}></i></a> 
                    <a href="#"><i className="fa fa-twitter" style={{margin: "1em", fontSize: "1.5em", color: "white"}}></i></a>  
                    <a href="#"><i className="fa fa-linkedin" style={{margin: "1em", fontSize: "1.5em", color: "white"}}></i></a>  
                    <a href="#"><i className="fa fa-facebook" style={{margin: "1em", fontSize: "1.5em", color: "white"}}></i></a>
                </div>
                <p><button className="btn btn-success">Contact</button></p>
            </div>
        </div>
    )
}
