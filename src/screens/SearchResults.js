import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class SearchResults extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Search Results</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1
    }
})

export default SearchResults