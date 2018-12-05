import React from 'react'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'

import { colors } from '../config/colors'

import Mode from '../screens/Mode'
import Search from '../screens/Search'
import SearchResults from '../screens/SearchResults'

import Drawer from '../components/Drawer'

const searchStack = createStackNavigator({
    Mode, Search, SearchResults
}, {
    initialRouteName: 'Mode',
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary.main,
            height: 50
        }
    }
})

const drawerNav = createDrawerNavigator({
    Main: {
        screen: searchStack,
        navigationOptions: {
            drawerLabel: 'Buscar / Publicar Inmuebles'
        }
    },
    MyProperties: {
        screen: Mode,
        navigationOptions: {
            drawerLabel: 'Mis Inmuebles'
        }
    },
    Messages: {
        screen: Mode,
        navigationOptions: {
            drawerLabel: 'Mensajes'
        }
    },
    Notifications: {
        screen: Mode,
        navigationOptions: {
            drawerLabel: 'Notificaciones'
        }
    },
    Support: {
        screen: Mode,
        navigationOptions: {
            drawerLabel: 'Soporte'
        }
    },
    Guides: {
        screen: Mode,
        navigationOptions: {
            drawerLabel: 'Guías Jurídicas'
        }
    },
    Terms: {
        screen: Mode,
        navigationOptions: {
            drawerLabel: 'Términos de uso'
        }
    },
    User: {
        screen: Mode,
        navigationOptions: {
            drawerLabel: 'Mi Usuario'
        }
    }
}, {
    initialRouteName: 'Main',
    contentComponent: Drawer
})

export default drawerNav