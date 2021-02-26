// Modules
import React, {useState, useEffect} from 'react'
import Navbar from './nav';

function GetAPI({setUserOne}){

    const[data, setData] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=100')
        .then(response => response.json())
        .then(json => setData(json.results))
    },[])

    function listUser(){
        return(
            data.map(each => {
                return (
                    <li className="active" onClick={() => {setUserOne(each); window.location="/#user"}}>
                        <div className="d-flex bd-highlight">
                            <div className="img_cont">
                                <Image src={each.picture.medium} className="rounded-circle user_img" />
                                {/* <span className="online_icon"></span> */}
                            </div>
                            <div className="user_info">
                                <span>{`${each.name.first} ${each.name.last}`}</span>
                                <p>{`${each.name.first} is online`}</p>
                            </div>
                        </div>
                    </li>
                )
            })
        )
    }

    return(
        <div>
            <Navbar />
            <div className="card-body contacts_body">
                <ui className="contacts">
                    {listUser()}
                </ui>
            </div>
        </div>
    )
}
export default GetAPI;
