import Big from "big.js";
import opera from './opera.js'
import isNumber from './isNumber.js'

export default function operations (st, nameButton)
{
    if(nameButton === 'AC')
    {
        return{
            total: null,
            next: null,
            operator: null
        }
    }

    if(isNumber(nameButton))
    {
        if(nameButton === '0' && st.next === '0') return {}

        if(st.operator)
        {
            if(st.next) return {next: st.next + nameButton}
            return {next: nameButton}
        }

        if(st.next)
        {
            const next = st.next === '0' ? nameButton: st.next + nameButton
            return {next, total: null}
        }

        return {next: nameButton, total: null} 
    }

    if(nameButton === '/')
    {
        if(st.operator && st.next)
        {
            const result = opera(st.total, st.next, st.operator)
            return {total: Big(result).div(Big('100').toString()), next: null, operator:null}
        }

        if(st.next)
        {
            return {next: Big(st.next).div(Big('100').toString())}
        }

        return {}
    }

    if(nameButton === '.')
    {
        if(st.next)
        {
            if(st.next.include('.')) return {}
            return {next: st.next + '.'}
        }

        
    }
   
}