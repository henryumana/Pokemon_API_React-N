/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import Pokemons from './Components/pokemons';
import Details from './Components/pok_details';




const App: () => React$Node = () => {
  return (
      <SafeAreaView>
        <ScrollView>
          <View>
         <Pokemons/>
         </View>  
        </ScrollView>
      </SafeAreaView>
 
  );
};

export default App;
