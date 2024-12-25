import {useState} from "react";
function Todolist() {
 const [todos,setTodos] = useState([]);
 const [newTodo,setNewtodo] = useState('');

 // them 1 cong  viec moi 
  const addTodo = () =>{
    if(newTodo.trim() !== ''){
        setTodos([...todos,newTodo]);
        setNewtodo('');
    }
  };
  // xoa 1 viec khoi danh sach
  const deleteTodo = (index) => {
    const updateTodos = todos.filter((_,todoIndex) => todoIndex !== index);
    setTodos(updateTodos);
  };
  
 return(
        <div>
            <h1>To do List</h1>
            <input type='text' value={newTodo} onChange={(e)=> setNewtodo(e.target.value)}
             placeholder="Them 1 danh sach moi">
            </input>
            <button onClick={addTodo}>
                Thêm mới
            </button>
            <ul>
                {todos.map((todo,index) =>(
                    <li key={index}>
                        {todo}
                        <button onClick={() => deleteTodo(index)}> Xóa </button>
                    </li>
                ))}
            </ul>
        </div>
 );
}
export default Todolist;