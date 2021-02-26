import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Brief({navigation, route}) {
    return (
        <View style={{margin: "1em", textAlign: "center", color: "white", backgroundColor: "#68a0cf"}}>
            <View className="card">
                <Image
                    source={{
                        uri: route.params.userOne.picture.large,
                    }}
                    style={{width: "50%", height: "30%", marginLeft: "25%", marginTop: "2em", objectFit: "contain", borderRadius: "50%"}}
                />
                <h4><p>{`Name : ${route.params.userOne.name.title} ${route.params.userOne.name.first} ${route.params.userOne.name.last}`}</p></h4>
                <h5><p className="title">{`Email : ${route.params.userOne.email}`}</p></h5>
                <h5><p className="title">{`Gender : ${route.params.userOne.gender}`}</p></h5>
                <h5><p>{`Phone : ${route.params.userOne.phone}`}</p></h5>
                <View>
                    <a href="#"><i className="fa fa-dribbble" style={{margin: "1em", fontSize: "1.5em", color: "white"}}></i></a> 
                    <a href="#"><i className="fa fa-twitter" style={{margin: "1em", fontSize: "1.5em", color: "white"}}></i></a>  
                    <a href="#"><i className="fa fa-linkedin" style={{margin: "1em", fontSize: "1.5em", color: "white"}}></i></a>  
                    <a href="#"><i className="fa fa-facebook" style={{margin: "1em", fontSize: "1.5em", color: "white"}}></i></a>
                </View>
                <p><button onClick="" className="btn btn-success" style={{color: "white", padding: "1em", backgroundColor: "black", border: "none", borderRadius: "5px"}} onClick={() => {navigation.navigate('Main')}} >Back</button></p>
            </View>
        </View>
    )
}
