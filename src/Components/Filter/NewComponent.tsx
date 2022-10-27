import React from 'react'
import {FilterType} from "./Filter";

type NewComponentType = {
    currentMoney: Array<ArrayType>
    callBack: (nameButton: FilterType) => void
}
type ArrayType = {
    banknots: string
    value: number
    number: string
}

const NewComponent = (props: NewComponentType) => {


    return (
        <>
            <ul>
                {props.currentMoney.map((objForMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objForMoneyArr.banknots} </span>
                            <span>{objForMoneyArr.value}</span>
                            <span>{objForMoneyArr.number} </span>
                        </li>
                    )
                })}
            </ul>

            <button onClick={() => props.callBack('all')}>all</button>
            <button onClick={() => props.callBack('RUBLS')}>Rubls</button>
            <button onClick={() => props.callBack('Dollars')}>Dollar</button>
        </>
    );
};

export default NewComponent;