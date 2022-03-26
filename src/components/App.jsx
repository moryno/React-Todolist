import React, {useState, useEffect} from "react";
import todos from "../apis";
import List from "./List";
import Form from "./Form";
import Section from "./Section";


const appTitle = "To-Do App"


function App(){
    const [todoList, setTodoList] = useState([]);

    useEffect(()=>{
       async function fetchData(){
            const {data} = await todos.get("/todos");
            setTodoList(data);
        }
        fetchData();
    }, []);
    
    async function addTodo(item){
        const {data} = await todos.post("/todos", item, {headers: {
            'Content-Type': 'application/json'
        }});
        setTodoList(prevList=>[...prevList, data]);
        console.log(data);
        
    };
    
    async function deleteTodo(id){
        await todos.delete(`/todos/${id}`);

        setTodoList(prevList=>{
            return prevList.filter((item)=>{
                return item._id !== id;
            });
        });
    };

    async function editTodo(id,item){
       await todos.put(`/todos/${id}`,item );

    }

    return (
        <div className="ui container center aligned">
            <Section>
              <h1>{appTitle}</h1>
            </Section>
            <Section>
              <Form onAdd={addTodo} />
            </Section>
            <Section>
              <List list={todoList} onDelete = {deleteTodo} onEdit={editTodo} />
            </Section>
        </div>
        
    )
}

export default App;