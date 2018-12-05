import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Image } from 'react-native'
import { Container, Content, Header, Body } from 'native-base'
import { DrawerItems } from 'react-navigation'

import { colors } from '../config/colors'
import logo from '../assets/images/search-white.png'

class Drawer extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Container>
                    <Header style={[{ height: 200, backgroundColor: colors.primary.main }, styles.flexStyle]}>
                        <Body style={styles.flexStyle}>
                            <Image source={logo} style={styles.logo} />
                        </Body>
                    </Header>
                    <Content>
                        <DrawerItems {...this.props} />
                    </Content>
                </Container>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 120,
        height: 120
    },
    flexStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Drawer