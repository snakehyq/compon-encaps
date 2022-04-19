export default () => {
    function plus(leftValue, rightValue) {
        console.log('lef',leftValue);
        return leftValue + rightValue
    }
    function minus(leftValue, rightValue) {
        return leftValue - rightValue
    }
    function mul(leftValue, rightValue) {
        return leftValue * rightValue
    }
    function div(leftValue, rightValue) {
        return leftValue / rightValue
    }
    return {
        plus,
        minus,
        mul,
        div
    }
}