import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

class mapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search : ''
    };
  }

  _onChange = (data) => {
     this.setState({
       search : data
     })
  }

  render() {
   const mapStyle=[
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
    return (
      <View > 
        
				 <MapView
          style={{height:'100%', width:'100%'}}
          customMapStyle={mapStyle}
          ref={ref => {this.map = ref;}}
          initialRegion={{
            latitude: 37.600425,
            longitude: -122.385861,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0922,
          }}
        >
         
        </MapView>
        <TextInput
        underlineColorAndroid = "transparent"
        placeholder = "Search for a place"
        value={this.state.search}
        onChangeText = {text => this._onChange(text)}
        style={{ height: 50,width:240,paddingLeft:15,paddingRight:15,
          backgroundColor: "#ffffff",
         
  borderTopLeftRadius:5,borderBottomLeftRadius:5,
          shadowColor: "#000000",
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 0
          },
           zIndex:5,
          position:'absolute',
          elevation:9,
          marginTop:50,
          marginLeft:30
          
        }}
        ></TextInput>
     
<View style={styles.search}></View>
    
    


    <View style={styles.whiteicon}></View>

    </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignSelf:'center',
    position:'absolute'
  },
  search:{
    backgroundColor: "#4F6DD8",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    position:'absolute',
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 3
    },
    elevation:6,
    height: 50,
    width: 50,
    marginTop:50  ,
    borderRadius:5,
    marginLeft:268,
    zIndex:100

    

    
  },
  whiteicon:{
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOpacity: 1,
    position:'absolute',
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 3
    },
    elevation:6,
    height: 50,
    width: 50,
    marginTop:50  ,
    borderRadius:5,
    marginLeft:325,
    

  }

});

export default mapScreen;
