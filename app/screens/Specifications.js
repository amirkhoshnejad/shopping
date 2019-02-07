import React,{Component} from 'react';
import{Platform,StyleSheet,Text,View,Image,Dimensions,ActivityIndicator,ScrollView,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import {Table, Row, Rows} from 'react-native-table-component';

const {width,height,scale,fontScale}=Dimensions.get("screen")

export default class App2 extends Component{  
    constructor(props){
        super(props);
        this.state={
            tableHead:['گوشی موبایل بلک بری مدل KEYone ظرفیت 32 گیگابایت'],
            tableData:[
                ['مشخصات کلی'],
                ['9.4*72.5*149.3 میلی متر','ابعاد'],
                ['سایز نانو(8.8*12.3 میلی متر)','توضیحات سیم کارت'],
                ['180 گرم','وزن'],
                ['پلاستیک و فلز\nمجهز به حسگر اثر انگشت (fingerprint Sensor)','ساختار بدنه'],
                ['مجهز به حسگر اثر انگشت، دارای صفحه کلید، مناسب برای عکاسی','ویژگی های خاص'],
                ['تک سیم کارت','تعداد سیم کارت'],
                ['پردازنده'],
                ['Qualcomm MSM8953 Snapdragon625 Chipset','تراشه'],
                ['Octa-core Cortex-A53 CPU','پرازنده ی مرکزی'],
                ['64 بیت','نوع پردازنده'],
                ['','فرکانس پردازنده ی مرکزی'],
                ['','پردازنده ی گرافیکی'],
                ['حافظه'],
                ['32 گیگابایت','حافظه داخلی'],
                ['3 گیگابایت','مقدار RAM'],
                ['microSd','پشتیبانی از کارت حافظه'],
                ['2 ترابایت','حداکثر ظرفیت کارت حافظه'],
                ['صفحه نمایش'],
                ['*','صفحه نمایش رنگی'], 
                ['*','صفحه نمایش لمسی'],
                ['LCD','نوع'],
                ['IPS','فناوری'],
                ['4.5 تا 5.0اینچ','بازه ی سایز صفحه نمایش'],
                ['4.5 اینچ','اندازه'],
                ['1080*1620','رزولوشن'],
                ['433 پیکسل بر هر اینچ','تراکم پیکسلی'],
                ['Corning Gorilla Glass 4','محافظت'],
                ['16 میلیون رنگ','تعداد رنگ'],
                ['قابلیت دریافت تا 2 لماس همزمان','سایر قابلیت ها'],
                ['ارتباطات'],
                ['2G,3G,4G','شبکه های ارتباطی'],
                ['GSM 850/ 900 / 1800 / 1900','شبکه 2G'],
                ['HSDPA 850 / 900 / 1700 / 1900 / 2100\nHSPA با سرعت دانلود 42.2 مگابیت بر ثانیه و آپلود 5.76 مگابیت بر ثانیه','شبکه 3G'],
                ['LTE band 1|2100, 3|1800, 7|2600, 8|900, 28|700\nLTE از نوع Cat9 با سرعت دانلود 450مگابیت بر ثانیه و آپلود 50 مگابیت بر ثانیه','شبکه 4G'],
                ['بلوتوث,OTG,NFC,GPRS,EDGE,رادیو,Wi-Fi','فن آوری های ارتباطی'],
                ['Wi-Fi 802.11 a/b/g/n/ac Dual-band, Wi-Fi Direct, hotspot','Wi-Fi'],
                ['نسخه 4.2\nA2DP,LE,EDR','بلوتوث'],
                ['رادیوFM','رادیو'],
                ['A-GPS, GLONASS','فن آوری مکان یابی'],
                ['USB Type-C 1.0 v3.1','درگاه ارتباطی'],
                ['دوربین'],
                ['*','دوربین'],
                ['12.0 مگاپیکسل','رزولوشن عکس'],
                ['Phase Detectin','فناوری فوکوس'],
                ['Dual Tone','فلش'],
                ['','قابلیت های دوربین'],
                ['','فیلم برداری'],
                ['','دوربین سلفی'],
                ['صدا'],
                ['*','بلندگو'],
                ['*','خروجی صدا'],
                ['امکانات نرم افزاری'],
                ['Android','سیستم عامل'],
                ['Nougat 7.1','نسخه سیستم عامل'],
                ['*','پشتیبانی از زبان فارسی'],
                ['*','منوی فارسی'],
                ['','قابلیت های نرم افزاری'],
                ['با امکان افزودن مخاطب به تعداد بی نهایت','دفترچه تلفن'],
                ['Flac,MP3,WAV','موسیقی'],
                ['DivX,H.265,MP4,XviD','ویدیو'],
                ['*','ضبط'],
                ['سایر مشخصات'],
                ['','حسگرها'],
                ['-','باتری قابل تعویض'],
                ['','مشخصات باتری'],
                ['','سایر قابلیت ها'],
                ['شارژر،هندزفری،کابل USB،دفترچه راهنما','اقلام همراه گوشی'],
            ]
        }
    }
    render(){
        const state=this.state;
        return(
            <View style={styles.container}>
                <ScrollView>
                            <View style={{elevation:5}}>
                                <View style={styles.header}>
                                
                                    <View style={styles.headerRight}>
                                    <Text style={[styles.text1,{color:"#000"}]}>مشخصات</Text>
                                    <TouchableOpacity >
                                        <Icon name="close" size={30*fontScale} color={"black"}/>
                                    </TouchableOpacity>
                                    
                                    </View>
                                </View>
                            </View>
                            <View style={styles.tables}>
                                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                                    <Rows data={state.tableData} textStyle={styles.texts}/>
                                </Table>
                             </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    tables: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    texts: { margin: 6},
    container:{
        flex:1,
        backgroundColor:'#f9fafc',
    },
    header:{
        backgroundColor:"red",
        justifyContent:"flex-end",
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal:10*scale,
        paddingVertical:2*scale,
    },
    headerRight:{
        width:width*0.25,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    text: {
        fontSize: 15,
    },
    text1: {
        fontSize: 25,
    },
    name: {
        padding: 10 * scale,
        width: width
    },
});
