import React, {useState} from "react";

function ToDo(props){
 const [isDone, setIsDone] = useState(false);
 const [value, setValue] = useState(props.title);
 const [tempValue, setTempValue] = useState(props.title);
 const [completed, setCompleted] = useState(props.checked);

   function handleDoubleClick(){
       setIsDone(true);
   }

   

   function handleKeyDown(event){
       const key = event.keyCode;
       
        if(key === 13){
            props.edited({title: tempValue});
            setValue(tempValue);
            setIsDone(false);
        }
        else if(key === 27){
            setTempValue(value)
            setIsDone(false)
        }
       
       
   }

   function handleCheck(){
    setCompleted(prevState => {
        const newState = !prevState;
        props.edited({completed: newState});
        return newState;
    });
}

   function handleChange(event){
       const newValue = event.target.value;
       setTempValue(newValue);
   }

   

    return (
        <div className="row" >
            {isDone?
            
                <div className="column seven wide" >
                    <div className="ui input fluid">
                        <input 
                        onChange={handleChange}
                        onKeyDown={handleKeyDown} 
                        autoFocus={true}  
                        value={tempValue}  
                        />
                    </div>
                </div>
            :
            <>
                <div className="column five wide" onDoubleClick={handleDoubleClick}>
                        <h2 className={"ui header" + (completed &&" purple") }>{value}</h2>
                    </div>
                    <div className="column one wide ">
                        <button type="submit" className={"ui button circular icon" + (completed ? " blue": " green")} onClick={handleCheck}><i className="check icon white"></i></button>
                    </div>
                    <div className="column one wide ">
                        <button type="submit" className="ui button circular icon red" onClick={props.remove}><i className="remove icon white"></i></button>
                </div>
                    </>        
            }        
        </div>
    )
}

export default ToDo;