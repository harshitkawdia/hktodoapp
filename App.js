import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
   
  ]);
  const pressHandler = (key) =>{
    setTodos((prevTodos) => {
      alert('The TODO has been deleted');
      return prevTodos.filter(todo => todo.key != key);
    })
  }
  const submitHandler = (text) =>{
    setTodos ((prevTodos) =>
    {
     
      if(text != ''){
        alert('The TODO has been added to the list');
        return [ {text: text, key: Math.random().toString()},
          ...prevTodos];
      }
      else{
        alert('The TODO added is Empty!');
        return [ {text: '**EMPTY TODO**', key: Math.random().toString()},
        ...prevTodos];
      }
      
    })
  }
   
  
  return (
    <View style={styles.container} >
      <Header />
      <View style={styles.content} >
        {/* add todo form */}
        <AddTodo submitHandler= {submitHandler}/>
        <View>
      <Text style={{textAlign: 'center', marginTop: 10, color:'red'}}> To delete a TODO, Press and hold it!</Text>
      </View>

        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item = {item} pressHandler = {pressHandler}/>
            )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#70dbff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});