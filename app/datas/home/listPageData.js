/**
 * Created by glzc on 2017/12/22.
 */
import {observable, action} from 'mobx'
export default class ListPageData{
    @observable
    name;
    @observable
    price;
    @observable
    store;
    @observable
    purchase;
    constructor(props){
        this.id = props.id
        this.name = props.name
        this.price = props.price
        this.store = props.store
        this.purchase = 1
    }
    @action
    increaseStore(num){
        this.store += num
    }
    @action
    isEnough(num){
       return this.store >= num
    }
    @action
    decreaseStore(num){
        this.store -= num
    }
    @action
    modifyPrice(price){
        this.price = price
    }
    @action
    modifyName(name){
        this.name = name
    }
    @action
    modifyPurchase(n, flag){
        flag === 0 ? this.purchase -= n : flag === 1 ? this.purchase = (this.purchase - 0) + n : this.purchase = n
}

}