import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Post from './components/Post';

const post = {
   title: 'Aprendendo React Native',
   subTitle: 'Matheus Maciel Melchiades',
   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

export default class App extends Component {
   state = {
      posts: []
   }

   render() {

      const posts = Array(20).fill(post);

      return (
         <ScrollView style={styles.container}>
            {posts.map(post => (
               <Post key={Math.random()} {...post} />
            ))}
         </ScrollView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#fa6f67',
   }
});
