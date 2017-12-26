/**
 * Created by glzc on 2017/12/21.
 */
import {observable, action} from 'mobx';
import ListPageData from './listPageData'

export default class HomeData {
    @observable
    count = 0;
    @observable
    listDatas = [];
    @action
    add(){
        ++this.count
    }
    @action
    reduce(){
        this.count > 0 ? --this.count : this.count = 0
    }
    @action
    setListDatas(obj){
        this.listDatas.push(new ListPageData(obj))
    }
}