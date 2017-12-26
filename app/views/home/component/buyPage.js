/**
 * Created by glzc on 2017/12/25.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import buyPageStyles from './../../../styles/home/buyPageStyles';
import {observer} from 'mobx-react/native';
@observer
export default class BuyPage extends Component{
    constructor(props){
        super(props)
        this.data = this.props.navigation.state.params.data
    }
    _buyAmount(type){
        type === 'plus' ? this.data.modifyPurchase(0.5, 1) : this.data.modifyPurchase(0.5, 0)
    }
    modifyPurchase(v){
        this.data.modifyPurchase(v, 2)
    }
    render(){
        return (
            <View style={[buyPageStyles.container, buyPageStyles.topSpace]}>
                <View style={buyPageStyles.content}>
                    <View style={[buyPageStyles.flexRow, buyPageStyles.item, {justifyContent: 'flex-start'}]}>
                        <Text allowFontScaling={false} style={buyPageStyles.title}>购买{this.data.name}</Text>
                    </View>
                    <View style={[buyPageStyles.flexRow, buyPageStyles.item, {justifyContent: 'space-between'}]}>
                        <Text allowFontScaling={false} style={buyPageStyles.itemText}>单价(元／kg)：</Text>
                        <Text allowFontScaling={false} style={[buyPageStyles.itemText,{color: '#e94639'}]}>{this.data.price}</Text>
                    </View>
                    <View style={[buyPageStyles.flexRow, buyPageStyles.item, {justifyContent: 'space-between'}]}>
                        <Text allowFontScaling={false} style={buyPageStyles.itemText}>数量(kg)：</Text>
                        <View style={[buyPageStyles.flexRow]}>
                            <TouchableOpacity activeOpacity={0.7} onPress={this._buyAmount.bind(this, 'reduce')}>
                                <View style={[buyPageStyles.flexRow,buyPageStyles.btn]}>
                                    <Text allowFontScaling={false} style={buyPageStyles.itemText}>➖</Text>
                                </View>
                            </TouchableOpacity>
                            <TextInput
                                style={buyPageStyles.input}
                                underlineColorAndroid="transparent"
                                multiline={false}
                                keyboardType="numeric"
                                defaultValue={'1'}
                                value={this.data.purchase+''}
                                onChangeText={this.modifyPurchase.bind(this)}
                                />
                            <TouchableOpacity activeOpacity={0.7} onPress={this._buyAmount.bind(this, 'plus')}>
                                <View style={[buyPageStyles.flexRow,buyPageStyles.btn]}>
                                    <Text allowFontScaling={false} style={buyPageStyles.itemText}>➕</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[buyPageStyles.flexRow, buyPageStyles.item, {justifyContent: 'flex-end'}]}>
                        <View style={buyPageStyles.flexRow}>
                            <Text allowFontScaling={false} style={buyPageStyles.itemText}>总计：</Text>
                            <Text allowFontScaling={false} style={[buyPageStyles.itemText,{color: '#e94639'}]}>{this.data.price * this.data.purchase}</Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} style={[buyPageStyles.flexRow, buyPageStyles.submit]}>
                        <View style={[buyPageStyles.flexRow, buyPageStyles.submitBtn]}>
                            <Text allowFontScaling={false} style={[buyPageStyles.title,{color: '#ffffff'}]}>确认购买</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}