import React, { Component } from 'react';
import { Text, View, FlatList, Image, Button } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
    data: []
  };
  }

  componentDidMount(){
    this.fetchData();
  }
  

  fetchData = () =>{
    return fetch('https://test.comeriver.com/manuel/json.json')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
      data:responseJson
      });
     
      
});
  }

  render() {
    return (
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:'steelblue'}}>
        <View style={{justifyContent:'space-between',backgroundColor: '#222222',flexDirection:'row', marginTop: '5%'}}>
        <View style={{flex:1}}>
            <Image style={{ marginTop:'5%',marginLeft:'3%', width:60, height:60}} source={require('./assets/whitelogo.png')} alt='logo'/>
          </View>
          <View style={{flex:1,flex:'end', marginTop:'5%', marginRight:'3%'}}>
            <Button title="Menu" color="white"/>
            </View>
        </View>
        <Text style={{height:55, fontWeight:'bold', fontSize:26,color: 'white', marginTop:'10%'}}>My First React Native App</Text>
        <View style={{flex:2,flexDirection:'row',padding:10}}>
            
            <View style={{flex:1,padding:10}}>
               <Image style={{flex:1, width:140, height:50, borderRadius:20}} source={require('./assets/property.jpeg')} alt='logo'/>
            </View>
            <View style={{flex:1,padding:10}}>
               <Image style={{flex:1, width:140, height:50, borderRadius:20}} source={require('./assets/property1.jpg')} alt='logo'/>
            </View>
        </View>
        <Button title='See More' color="#841584"/>
            <View style={{flex:3,backgroundColor: 'steelblue', marginBottom:'5%'}}>
              <Text style={{fontSize:23,textAlign: 'center' }}>List of Users</Text>
              <FlatList data={this.state.data} renderItem={(
                {item, index}) =>(
              <Text style={{backgroundColor: '#fff',padding: 10,marginVertical: 6,marginHorizontal: 16}}>
                {item.username} {item.email} {item.password}
              </Text>
            )}
            keyExtractor={(item, index) => index.toString()}
            />
            </View>
          <View style={{flex:1,flexDirection:'row',padding:7}}>
            <View style={{flex:1,padding:7}}>
            <Image style={{flex:1, width:60, height:40}} source={require('./assets/insta.png')} alt='logo'/>
            </View>

            <View style={{flex:1,padding:7}}>
            <Image style={{flex:1, width:60, height:60}} source={require('./assets/TWITTER.png')} alt='logo'/>
            </View>
            <View style={{flex:1,padding:7}}>
            <Image style={{flex:1, width:40, height:40}} source={require('./assets/LINKEDIN.png')} alt='logo'/>
            </View>
            <View style={{flex:1,padding:7}}>
            <Image style={{flex:1, width:60, height:40}} source={require('./assets/githubsticky.png')} alt='logo'/>
            </View>
          </View>
      </View>
    );
  }

}