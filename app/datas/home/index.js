/**
 * Created by glzc on 2017/12/21.
 */
import {observable, action} from 'mobx';

export default class HomeData {
    @observable
    count = 0;
    @action
    add(){
        ++this.count
    }
    @action
    reduce(){
        this.count > 0 ? --this.count : this.count = 0
    }
}