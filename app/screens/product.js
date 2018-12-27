import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";
import axios from "axios";
const { width, height, scale, fontScale } = Dimensions.get("screen")

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            product: {},
            loading: true,
            page: 1
        }
    }

    componentDidMount() {
        let req = {
            "url": "http://dadyshop.ir/?woo2app_product_cat&count=10&page=1&cat=%DA%A9%D8%A7%D9%84%D8%A7%DB%8C-%D8%AF%DB%8C%D8%AC%DB%8C%D8%AA%D8%A7%D9%84&orderby=date&order=DESC",
            "method": "get"
        }
        axios(req).then(response => {
            this.setState({ product: response.data.products[0], loading: false })
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        let product = this.state.product
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.state.loading
                        ?
                        <ActivityIndicator size={"large"} />
                        :
                        <View>
                            <View style={{ elevation: 5 }} >
                                <View style={styles.header} >
                                    <View style={styles.headerRight}>
                                        <Icon name="dots-vertical" size={25 * fontScale} color={"gray"} />
                                        <Icon1 name="shopping-cart" size={25 * fontScale} color={"gray"} />
                                    </View>
                                    <View style={styles.headerLeft} >
                                        <Icon1 name="angle-right" size={25 * fontScale} color={"gray"} />
                                    </View>
                                </View>
                                <View style={styles.productImage} >
                                    <Image source={{ uri: product.images[0].src }} style={{ width: width, height: width }} />
                                </View>
                                <View style={styles.headerRight}>
                                    <Icon2 name="share" size={25 * fontScale} color={"gray"} />
                                    <Icon2 name="heart" size={25 * fontScale} color={"gray"} />
                                </View>
                                <View style={styles.name} >
                                    <Text style={[styles.text, { color: "#000" }]} >لامپ ال ای دی 6 وات سان شاین</Text>
                                    <Text style={[styles.text, { fontSize: 12, textAlign: "right" }]} >Sunshine 6W LED Lamp</Text>
                                </View>
                            </View>

                            <View style={styles.buttons} >
                                <View style={styles.button} >
                                    <Text style={[styles.text, { textAlign: "right" }]} >مشخصات</Text>
                                </View>
                                <View style={styles.button} >
                                    <Text style={[styles.text, { textAlign: "right" }]} >نظرات کاربران</Text>
                                </View>
                            </View>

                        </View>
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafc',
    },
    header: {
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 5 * scale,
        paddingVertical: 2 * scale
    },
    headerLeft: {
        width: width * 0.15,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",

    },
    headerRight: {
        width: width * 0.25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        fontSize: 25
    },
    name: {
        padding: 10 * scale,
        width: width
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20
    }
});
