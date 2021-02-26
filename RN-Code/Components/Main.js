// Modules
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';


import './Main.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Main({navigation, route}){

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
                    <li className="active" onClick={() => {navigation.navigate('Brief', {userOne: each})}}>
                        <View className="d-flex bd-highlight"  style={styles.roundedCircle} >
                            <View className="img_cont">
                                <Image
                                    source={{
                                        uri: each.picture.medium,
                                    }}
                                    style={{ width: 100, height: 100, borderRadius: 100/2 }}
                                    />
                            </View>
                            <View className="user_info" style={styles.texts}>
                                <Text style={styles.name} >{`${each.name.first} ${each.name.last}`}</Text>
                                <Text style={styles.name} >{`${each.name.first} is online`}</Text>
                            </View>
                        </View>
                    </li>
                )
            })
        )
    }

    return(
        <View>
            <View className="card-body contacts_body">
                <ui className="contacts">
                    {listUser()}
                </ui>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    roundedCircle:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        display: "flex",
        flexDirection: "row"
    },
    name: {
        color: "white",
        fontSize: "400",
    },
    texts: {
        alignSelf: "center",
        marginLeft: "1em",
    },
    userImage: {
        marginLeft: "2em",
    }
  });