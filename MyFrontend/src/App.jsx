import Home from "./Home.jsx";
import Signup from "./Signup.jsx";

export default function App() {
  const path = window.location.pathname;

  return (
    <div style={{ padding: 30 }}>

      <nav style={{ marginBottom: 20 }}>
        <a href="/" style={{ marginRight: 10 }}>Home</a>
        <a href="/signup">Sign Up</a>
      </nav>

      {path === "/signup" || path === "/signup/"
        ? <Signup />
        : <Home />
      }

    </div>
  );
}