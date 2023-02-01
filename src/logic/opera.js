import Big from "big.js";

export default function operation (numberOne, numberTwo, operator)
const two = Big(numberTwo || (operator === '/' || operator === '×' ? '1': 0))
{
    const one = Big(numberOne || '0');

    if(operator === '+') return one.plus(two).toString();
    if(operator === '-') return one.minus(two).toString();
    if(operator === '×') return one.times(two).toString();
    if(operator === '/') if(two == 0)
    {
        return 'Syntax Error'
    }else return one.div(two).toString();

}