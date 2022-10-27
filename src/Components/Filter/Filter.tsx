import React, {useState} from 'react';
import NewComponent from "./NewComponent";

export type FilterType = 'all' | 'Dollars' | 'RUBLS';

export const Filter = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState('all')
    let currentMoney = money;
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'RUBLS') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (

        <NewComponent currentMoney={currentMoney} callBack={onClickFilterHandler}/>
    )


    /*<>
        <ul>
            {currentMoney.map((objForMoneyArr, index) => {
                return (
                    <li key={index}>
                        <span>{objForMoneyArr.banknots} </span>
                        <span>{objForMoneyArr.value}</span>
                        <span>{objForMoneyArr.number} </span>
                    </li>
                )
            })}
        </ul>
        <button onClick={() => onClickFilterHandler('all')}>all</button>
        <button onClick={() => onClickFilterHandler('RUBLS')}>Rubls</button>
        <button onClick={() => onClickFilterHandler('Dollars')}>Dollar</button>
    </>*/

}


