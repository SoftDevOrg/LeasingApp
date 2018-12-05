import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { connect } from 'react-redux'
import { setMode } from '../actions/mode'

import { colors } from '../config/colors'

import searchWhite from '../assets/images/search-white.png'
import searchBlue from '../assets/images/search-blue.png'
import publishWhite from '../assets/images/publish-white.png'
import publishBlue from '../assets/images/publish-blue.png'

class Mode extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mode: 0,
            translateY: new Animated.Value(0)
        }
    }

    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={22} color="#fff" style={{ marginLeft: 15 }} />
            </TouchableOpacity>
        )
    })

    move = mode => () => {
        const { firstBtnY, secondBtnY } = this.state
        const values = [ firstBtnY, secondBtnY ]
        this.setState({ mode })
        Animated.spring(this.state.translateY, {
            toValue: values[mode],
            duration: 120
        }).start()
    }

    onNext = () => {
        const { mode } = this.state
        const { dispatch, navigation } = this.props
        dispatch(setMode(mode))
        // navigation.navigate('')
    }

    render() {
        const { translateY, mode } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.selectorWrapper}>
                    <Animated.View style={[styles.indicator, { transform: [{ translateY }]}]} />
                    <TouchableOpacity 
                        style={styles.touchable} 
                        onPress={this.move(0)}
                        onLayout={ evt => this.setState({ firstBtnY: evt.nativeEvent.layout.y }) }
                    >
                        <View style={styles.wrapper}>
                            <Image source={mode === 0 ? searchWhite : searchBlue} style={styles.img} resizeMode="contain" />
                            <Text style={[styles.title, { color: mode === 0 ? '#fff' : colors.primary.main}]}>Buscar inmueble</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.touchable} 
                        onPress={this.move(1)}
                        onLayout={ evt => this.setState({ secondBtnY: evt.nativeEvent.layout.y }) }
                    >
                        <View style={styles.wrapper}>
                            <Image source={mode === 1 ? publishWhite : publishBlue} style={styles.img} resizeMode="contain" />
                            <Text style={[styles.title, { color: mode === 1 ? '#fff' : colors.primary.main}]}>Publicar inmueble</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.nextBtn}>
                        <Text style={styles.nextText}>Siguiente  <Icon name="arrow-right" size={17} color="#fff" /></Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    selectorWrapper: {
        flex: 1,
        flexDirection: 'column',
        height: '90%'
    },
    indicator: {
        position: 'absolute',
        width: '100%',
        height: '50%',
        backgroundColor: colors.secondary.dark
    },
    touchable: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    footer: {
        width: '100%',
        height: '10%'
    },
    nextBtn: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.primary.main,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nextText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    img: {
        width: 100,
        height: 100,
        marginBottom: 15
    }
})

export default connect()(Mode)