
import { Link } from 'react-router-dom';
import './App.css'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value;
    const name = form.name.value;
    const user = { name, email }
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          alert("USer Created Successfully!!")
          form.reset()
        }
      })
  }
  return (
    <>
      <div>
        <Link to={"/users"}><button>Users</button></Link>
        <h1>Crud Client</h1>

        <form onSubmit={handleSubmit}>
          <input className='input' placeholder='email' type="email" name='email' /><br />
          <input className='input' placeholder='name' type="text" name='name' /> <br />
          <input className='input' type="submit" value="Add User" />
        </form>
      </div>
    </>
  )
}

export default App
