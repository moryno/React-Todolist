import React from "react";

import ToDo from "./ToDo";

function List({list, onDelete, onEdit}){
    return(
        <div className="ui grid center aligned">
        {list.map((item)=>{
           return (
               <ToDo 
                  title = {item.title} 
                  key={item._id} 
                  edited={(updatedItem)=>onEdit(item._id, updatedItem)} 
                  checked= {item.completed} 
                  remove={()=>onDelete(item._id)} />
                  );
        })}
            
        </div>
    )
}

export default List;