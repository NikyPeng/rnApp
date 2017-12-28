/**
 * Created by glzc on 2017/12/28.
 */
let ScrollableMixin = {
    getInnerViewNode(): any {
        return this.getScrollResponder().getInnerViewNode();
    },

    scrollTo(destY?: number, destX?: number) {
    this.getScrollResponder().scrollTo(destY, destX);
},

scrollWithoutAnimationTo(destY?: number, destX?: number) {
    this.getScrollResponder().scrollWithoutAnimationTo(destY, destX);
},
};

module.exports = ScrollableMixin;