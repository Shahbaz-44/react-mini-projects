import { createContext, useContext } from "react";


export interface Todo {
     id: number;
     todo: string;
     completed: boolean;
     }

interface TodoContextType {
     todos: Todo[];
     addTodo: (todo: Omit<Todo, "id">) => void;
     updateTodo: (id: number, todo: string) => void;
     deleteTodo: (id: number) => void;
     toggleComplete: (id: number) => void;
     }

export const TodoContext = createContext<TodoContextType>({
    todos: [
        {
            id:1,
            todo: "todo msg",
            completed: false,
        }
    ], 

    addTodo: (todo: Omit<Todo, "id">) => {},
    updateTodo: (id: number, todo: string) => {},
    deleteTodo: (id: number) => {},
    toggleComplete: (id: number,) => {},
})

export const useTodo = () =>{
    return useContext(TodoContext)
}























// export interface Todo {
//      id: number;
//      todo: string;
//      completed: boolean;
//      }

// interface TodoContextType {
//      todos: Todo[];
//      addTodo: (todo: string) => void;
//      updateTodo: (id: number, todo: string) => void;
//      deleteTodo: (id: number) => void;
//      toggleComplete: (id: number) => void;
//      }

// export const TodoContext = createContext<TodoContextType>({
//      todos: [
//         {
//          id: 1,
//          todo: "todo msg",
//          completed: false,
//         },
//      ],
//       addTodo: (todo: string) => {},
//       updateTodo: (id: number, todo: string) => {},
//       deleteTodo: (id: number) => {},
//       toggleComplete: (_id: number) => {},
//      });


