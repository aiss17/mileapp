import React, { Component } from 'react'
import { 
    View, Text, 
    TouchableOpacity, Image, BackHandler
} from 'react-native'

class Essay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbersA: [1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
            numbersB: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 34, 34, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 83, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 92, 93, 94, 95, 96, 97, 98, 99, 100],
            noSatu: false,
            noDua: false,
            noTiga: false,
            noEmpat: false,
            noLima: false,
            noEnamA: false,
            noEnamB: false,
            noEnamC: false,
            noEnamD: false,
            numberMissing: []
        }
    }

    no6a() {
        var a = 3;
        var b = 5;

        a = a ^ b;
        b = a ^ b;
        a = a ^ b;

        alert('A is now: ' + a + ' and B is now: ' + b)
        console.log('a is now:', a);
        console.log('b is now:', b);
    }

    no6b() {
        let hasil = [];

        for (var i = 0; i < this.state.numbersA.length; i++) {
            var temp = this.state.numbersA[i] + 1;
            if (i < this.state.numbersA.length-1 && this.state.numbersA[i + 1] != temp) {
              hasil.push(temp);
            }
        }

        this.setState({
            numberMissing: hasil
        }, () => alert(this.state.numberMissing))
    }

    no6c() {
        let hasil = [];
        
        for (var i = 0; i < this.state.numbersB.length; i++) {
            if (this.state.numbersB[i] == this.state.numbersB[i +1]) {   
                if(hasil.includes(this.state.numbersB[i]) == false) {
                    hasil.push(this.state.numbersB[i]);
                }
            }
        }

        this.setState({
            numberMissing: hasil
        }, () => alert(this.state.numberMissing))
    }

    backPressed = () => {
		this.props.navigation.goBack();
		return true;
    };

    componentWillMount() {
		BackHandler.addEventListener('hardwareBackPress', this.backPressed);
	}
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    render() {
        return(
            <View style={{flex: 1, margin: 25}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={style.text}>
                        1. 
                    </Text>
                    {this.state.noSatu ?
                        <Text style={style.textAnswer}>I prefer React, because from my experience in the current office uses React</Text>
                        :
                        <TouchableOpacity
                            activeOpacity = {.7}
                            onPress = {() => this.setState({noSatu: true})}
                            style={style.button}
                        >
                            <Text style={style.text}>
                                See it!
                            </Text>
                        </TouchableOpacity>
                    }
                </View>

                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Text style={style.text}>
                        2. 
                    </Text>
                    {this.state.noDua ?
                        <Text style={style.textAnswer}>Create a travel route point from start to finish using the google API and geolocation library</Text>
                        :
                        <TouchableOpacity
                            activeOpacity = {.7}
                            onPress = {() => this.setState({noDua: true})}
                            style={style.button}
                        >
                            <Text style={style.text}>
                                See it!
                            </Text>
                        </TouchableOpacity>
                    }
                </View>

                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Text style={style.text}>
                        3. 
                    </Text>
                    {this.state.noTiga ?
                        <Text style={style.textAnswer}>UI developers must know and understand UX because user experience is very necessary. It looks useless if the display is good, but the user doesn't understand how to run the application due to a bad user experience.</Text>
                        :
                        <TouchableOpacity
                            activeOpacity = {.7}
                            onPress = {() => this.setState({noTiga: true})}
                            style={style.button}
                        >
                            <Text style={style.text}>
                                See it!
                            </Text>
                        </TouchableOpacity>
                    }
                </View>

                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Text style={style.text}>
                        4. 
                    </Text>
                    {this.state.noEmpat ?
                        <Text style={style.textAnswer}>the design is too simple. There are several features that are important on the login page, but they don't appear here, such as not having to login using a password, if the user forgets the password, inviting the user to create a new account.</Text>
                        :
                        <TouchableOpacity
                            activeOpacity = {.7}
                            onPress = {() => this.setState({noEmpat: true})}
                            style={style.button}
                        >
                            <Text style={style.text}>
                                See it!
                            </Text>
                        </TouchableOpacity>
                    }
                </View>

                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Text style={style.text}>
                        5. 
                    </Text>

                    <TouchableOpacity
                        activeOpacity = {.7}
                        onPress = {() => this.props.navigation.navigate('Login')}
                        style={style.button}
                    >
                        <Text style={style.text}>
                            Open the screen!
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Text style={style.text}>
                        6A. 
                    </Text>

                    <TouchableOpacity
                        activeOpacity = {.7}
                        onPress = {() => this.no6a()}
                        style={style.button}
                    >
                        <Text style={style.text}>
                            See it!
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Text style={style.text}>
                        6B. 
                    </Text>

                    <TouchableOpacity
                        activeOpacity = {.7}
                        onPress = {() => this.no6b()}
                        style={style.button}
                    >
                        <Text style={style.text}>
                            See it!
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Text style={style.text}>
                        6C. 
                    </Text>

                    <TouchableOpacity
                        activeOpacity = {.7}
                        onPress = {() => this.no6c()}
                        style={style.button}
                    >
                        <Text style={style.text}>
                            See it!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

export default Essay;

const style = {
    text: {
        fontSize: 15,
        textAlign: 'center'
    },
    textAnswer: {
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 10
    },
    button: {
        marginLeft: 10, 
        width: '40%', 
        backgroundColor: '#38bffc', 
        borderWidth: 1, 
        borderColor: '#0dadf5',
        borderRadius: 5
    }
}