import { Component } from 'react';
import Display from './display.jsx'


export default class KeyBoard extends Component
{
    state = 
    {
        total: null,
        next: null,
        operator: null
    }

    render()
    {
            return(
                <>
                <div className='calculator'>
                    <nav>
                        <a>Calculator</a>
                    </nav>
                <div className='data'>
                    <Display value = {this.state.next || this.state.total || "0"}/>
                </div>
                <div className='containerOperations'>
                <button className='operations'>
                    Functions
                </button>
                    <button className='graph'>Show graph</button>
                </div><div className='containerButtons'>
                        <div className='lineOne'>
                            <button className='function'>MC</button>
                            <button className='function'>MR</button>
                            <button className='function'>MS</button>
                            <button className='function'>M+</button>
                            <button className='function'>M-</button>
                        </div>
                        <div className='lineTwo'>
                            <button className='function'>←</button>
                            <button className='function'>CE</button>
                            <button className='function'>C</button>
                            <button className='function'>±</button>
                            <button className='function'>√</button>
                        </div>
                        <div className='lineThree'>
                            <button className='number'>7</button>
                            <button className='number'>8</button>
                            <button className='number'>9</button>
                            <button className='function'>/</button>
                            <button className='function'>x²</button>
                        </div>
                        <div className='lineFour'>
                            <button className='number'>4</button>
                            <button className='number'>5</button>
                            <button className='number'>6</button>
                            <button className='function'>*</button>
                            <button className='function'>%</button>
                        </div>
                        <div className='lineFive'>
                            <button className='number'>1</button>
                            <button className='number'>2</button>
                            <button className='number'>3</button>
                            <button className='function'>-</button>
                            <button className='function'>=</button>
                        </div>
                        <div className='lineSix'>
                            <button className='number'>0</button>
                            <button className='function'>.</button>
                            <button className='number'>a,b,c</button>
                            <button className='function'>+</button>
                            <button className='function'>00</button>
                        </div>
                    </div>
                    </div></>
        )
    }
}

