import React, {useRef, useState} from 'react';

const EventDemo = () => {
    const [value, setValue] = useState<string>('');
    const[isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('start')
    }
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true)
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
        console.log('drop')
    }
    return (
        <div>
            <input value={value} onChange={changeHandler} type='text' placeholder='Controll'/>
            <input ref={inputRef} type='text' placeholder='Uncontroll'/>
            <button onClick={clickHandler}>Click</button>
            <div onDrag={dragHandler} draggable style={{width: '800px', height: '200px', background: "green"}}>

            </div>
            <div onDrop={dropHandler}
                 onDragLeave={leaveHandler}
                 onDragOver={dragWithPreventHandler}
                 style={{width: '800px', height: '200px', background: isDrag ? "green" : "red", marginTop: '20px'}}>

            </div>
        </div>
    );
};

export default EventDemo;