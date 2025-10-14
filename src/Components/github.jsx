import "./github.scss";
import { useState } from "react";
import Profile from "./profile";

export default function Github() {
  const [name, setName] = useState("Sulav");
  const [result, setResult] = useState({});
  const [show, setshow] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handle(user) {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const result = await response.json();
      setshow(true);
      setResult(result);
      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSearch() {
    handle(name);
  }

  return (
    <>
      <h1 className="hww">
        <img
          style={{ borderRadius: "50%", marginRight: "20px" }}
          height="50"
          src="https://www.vhv.rs/dpng/d/419-4198735_github-logo-png-transparent-png.png"
          alt=""
        />
        GitHub Profile Finder
      </h1>
      <div className="glass">
        <input
          type="text"
          placeholder="Enter Profile..."
          value={name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      {loading?<p className="load">Loading...</p>:""}
      <Profile result={result} show={show} />
    </>
  );
}
