export function FormLogin({ formData, setFormData, handlerSubmit }) {
  return (
    <div className="form-login">
      <form className="form-login__form" onSubmit={handlerSubmit}>
        <label className="form-field" htmlFor="name">
          <span>Username</span>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your username"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>

        <label className="form-field" htmlFor="password">
          <span>Password</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </label>

        <div className="form-login__actions">
          <button type="submit" className="button-primary">
            Sign Up
          </button>
          <button type="button" className="button-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
