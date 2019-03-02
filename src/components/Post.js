import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default props => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <Text style={styles.subTitle}>
                {props.subTitle}
            </Text>
        </View>
        <View style={styles.div} />
        <View style={styles.content}>
            <Text style={styles.text}>
                {props.content}
            </Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        margin: 12,
        marginBottom: 6,
        borderRadius: 10,
        padding: 15,
        backgroundColor: 'white'
    },
    header: {
        flex: 1,
        paddingBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000"
    },
    subTitle: {
        marginVertical: 2,
        color: 'rgba(0,0,0,0.2)'
    },
    div: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.08)'
    },
    content: {
        flex: 2,
        paddingTop: 10,
    },
    text: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)'
    }
});