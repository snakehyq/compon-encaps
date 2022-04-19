import reducer from '@/reducers/calcular'
import { PLUS, MINUS, MUL, DIV } from '@/actions/calcular'

export default (ctx) => {
    const { plus, minus, mul, div } = reducer()
    return function (type, ...args) {
        console.log(type,PLUS);
        switch (type) {
            case PLUS: {
                console.log('dada');
                ctx.result = plus(...args);
            } break;
            case MINUS: ctx.result = minus(...args); break;
            case MUL: ctx.result = mul(...args); break;
            case DIV: ctx.result = div(...args); break;
            default: break;
        }
    }
}