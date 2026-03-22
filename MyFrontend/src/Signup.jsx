import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5217/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Server error:", text);
        alert("Server error: " + text);
        return;
      }

      const data = await response.json();
      alert("User created: " + data.name);
    } catch (error) {
      console.error("Fetch failed:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>SIGNUP PAGE</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: 320 }}>
        <label>Name</label>
        <input
          style={{ width: "100%", marginBottom: 10 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          style={{ width: "100%", marginBottom: 10 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          style={{ width: "100%", marginBottom: 10 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirmation</label>
        <input
          type="password"
          style={{ width: "100%", marginBottom: 15 }}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button type="submit">Create my account</button>
      </form>
    </div>
  );
}

export default Signup;