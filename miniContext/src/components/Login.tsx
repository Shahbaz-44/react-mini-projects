import { useState, useContext } from "react"
import UserContext from "../context/UserContext"

function login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // const {setUser} = useContext(UserContext)

    const context = useContext(UserContext);

    if (!context) {
    throw new Error("Login must be used within UserContextProvider");
    }

    const { setUser } = context;

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUser({username, password});
    };

  return (

    // <div>
    //   <h2>Login</h2>

    //   <input type="text"
    //    placeholder="username"
    //    value={username}
    //    onChange={(e) => setUsername(e.target.value) }
    //    />

    //   <input type="password"
    //   placeholder="password"
    //   value={password}
    //   onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleSubmit}>Submit</button>
      
    // </div>

    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>

  )
}

export default login







// import { useState, useContext } from "react";
// import UserContext from "../context/UserContext";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const context = useContext(UserContext);

//   if (!context) {
//     throw new Error("Login must be used within UserContextProvider");
//   }

//   const { setUser } = context;

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setUser({ username, password });
//   };

//   return (
//     <div>
//       <h2>Login</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Login;