import React from 'react';
import { StyleSheet, Text , TouchableOpacity }  from 'react-native';

export default function TodoItem({item, pressHandler}){

    return  (

        <TouchableOpacity onLongPress={() => pressHandler(item.key) }>
            <Text style = {styles.item}>
                {item.text}
            </Text>
        </TouchableOpacity>
    )
    }
    const styles = StyleSheet.create(
        {
           item: {
               padding: 18,
               marginTop: 18,
               borderColor: '#000',
               borderWidth: 2,
               borderRadius: 10

           } 
        }
    )



