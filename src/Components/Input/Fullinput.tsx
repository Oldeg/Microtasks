import React, {ChangeEvent, useState} from 'react';
type FullinputType = {
    addNewMessage: (title:string) => void
}
export const Fullinput = (props:FullinputType) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>)=> {
        setTitle(event.currentTarget.value)

    }
    const onClickButtonHandler = () => {
        props.addNewMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input onChange={onChangeInputHandler} value={title}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};
