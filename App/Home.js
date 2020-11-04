import React, { Component } from 'react'
import { 
    View, Text, 
    TouchableOpacity, Image
} from 'react-native'
import { TabBar } from 'react-native-fluidbottomnavigation'
import Icon from 'react-native-vector-icons/Entypo'
import images from './Assets/Images';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: ''
        }
    }

    render() {
        return(
            <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#455a64' }}>
                <Text style={{ color: 'white', fontSize: 30 }}>Test Online React</Text>

                <TouchableOpacity
                    activeOpacity = {.7}
                    style = {style.button}
                    onPress = {() => this.props.navigation.navigate('Login')}
                >
                    <Text>
                        Login Page
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity = {.7}
                    style = {style.button}
                    onPress = {() => this.props.navigation.navigate('Essay')}
                >
                    <Text>
                        Essay Page
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = {
    // title: {
    //     font
    // },
    button: {
        marginTop: 20,
        padding: 10, 
        width: '50%', 
        backgroundColor: '#38bffc', 
        borderWidth: 1, 
        borderColor: '#0dadf5',
        borderRadius: 10,
        alignItems: 'center'
    }
}

export default Home;