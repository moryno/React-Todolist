import React, { useState } from "react";

function Form({onAdd}){
    const [inputValue, setInputValue] = useState("");

    function handleInputChange(event){
       const newInput = event.target.value;
       setInputValue(newInput);
    };

    function handleSubmit(event){
        event.preventDefault();
        if(inputValue.trim() === "") return;
        
         onAdd({
           title: inputValue,
           completed: false
         });
         
         setInputValue("");
    };

    return (
        <form className="ui form " onSubmit={handleSubmit}>
          <div className="ui grid center aligned">
              <div className="row">
                  <div className="column five wide">
                    <input 
                      type={"text"} 
                      onChange={handleInputChange} 
                      placeholder="What you wanna do...?" 
                      value={inputValue}>

                      </input>
                  </div>
                  <div className="column one wide">
                     <button 
                       type="submit" 
                       className="ui button circular icon green" 
                       ><i className="plus icon white"></i></button>
                  </div>
              </div>
          </div>
            
        </form>
    )
}


export default Form;