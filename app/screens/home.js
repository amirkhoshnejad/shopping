import React, { Component } from 'react';
import { Platform, StyleSheet, FlatList, Text, View, Image, Dimensions } from 'react-native';
import Header from "./../components/header"
const { width, height, scale, fontScale } = Dimensions.get("screen")
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 150000
        }
    }

    componentDidMount() {
        this.intval = setInterval(() => {
            this.setState({ timer: this.state.timer - 1 })
        }, 1000)
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.item} >
                <Text>{item}</Text>
            </View>
        )
    }
    render() {
        const data = [
            "کالای دیجیتال", "لوازم آرایشی", "خودرو", "مد و پوشاک", "کالای دیجیتال", "لوازم آرایشی", "خودرو", "مد و پوشاک", "کالای دیجیتال", "لوازم آرایشی", "خودرو", "مد و پوشاک", "کالای دیجیتال", "لوازم آرایشی", "خودرو", "مد و پوشاک", "کالای دیجیتال", "لوازم آرایشی", "خودرو", "مد و پوشاک"
        ]
        return (
            <View style={styles.container}>
                <Header />
                <Image source={require("./../images/1.jpg")} style={{ width: width, height: 230 }} />
                <FlatList
                    renderItem={this._renderItem}
                    data={data}
                    horizontal={true}
                    keyExtractor={() => Math.random().toString()}
                />
                <View style={styles.awesome} >
                    <Text style={{ color: "gray", fontSize: 40 }} >پیشنهاد شگفت انگیز</Text>
                    <Text style={{ color: "gray", fontSize: 40 }} >{Math.floor(this.state.timer / 3600) + " : " + Math.floor((this.state.timer % 3600) / 60) + " : " + Math.floor((this.state.timer % 3600) % 60)}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    item: {
        backgroundColor: "green",
        borderRadius: 5000,
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 50,
        marginHorizontal: 25
    },
    awesome: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
});
