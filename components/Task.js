import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const Task = (props) => {
    return(
        <View style={style.itemContainer}>
            <View style={style.itemLeft}>
             <View style={style.square}></View>
            <Text style={style.itemText}>{props.text}</Text>
            </View>
            <View style={style.circle}>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    itemContainer:{
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'

    },
    square: {
        height: 24,
        width: 24,
        backgroundColor: '#55BCf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 10,



    },
    itemText: {
        maxWidth: '80%',
    },
    circle: {
        borderRadius: 25,
        height: 10,
        width: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,

    }

})

export default Task;