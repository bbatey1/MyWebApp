import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    alert(`Submitted: ${name}, ${email}`);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>SIGNUP PAGE </h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: 320 }}>
        <label>Name</label>
        <input style={{ width: "100%", marginBottom: 10 }}
          value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email</label>
        <input style={{ width: "100%", marginBottom: 10 }}
          value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password" style={{ width: "100%", marginBottom: 10 }}
          value={password} onChange={(e) => setPassword(e.target.value)} />

        <label>Confirmation</label>
        <input type="password" style={{ width: "100%", marginBottom: 15 }}
          value={confirm} onChange={(e) => setConfirm(e.target.value)} />

        <button type="submit">Create my account</button>
      </form>
    </div>
  );
}

export default Signup;