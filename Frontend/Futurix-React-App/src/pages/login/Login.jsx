import "./login.css"

const AdminLogin = () => {
  return (
    <div className="login">
      <form action="post">
        <div>
          <label htmlFor="email">Email : </label>
          <input type="text" value={""} name="email" />
        </div>
        <div>
          <label htmlFor="password">Pasword : </label>
          <input type="text" value={""} name="password" />
        </div>
        <div>
          <input type="submit" value={"Submit"}/>
        </div>
      </form>
    </div>
  )
}

export default AdminLogin