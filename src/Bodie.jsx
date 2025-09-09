import { useEffect, useState } from "react";

function Bodie() {

  const [Profile, setProfile] = useState([]);
  const [numberofProfile , setnumberofProfile] = useState();

  async function generateProfile(count) {
    const randoms = Math.floor(1+Math.random()*10000)
    let response = await fetch(`https://api.github.com/users?since=${randoms}&per_page=${count}`);
    let data = await response.json();
    setProfile(data);
  }

  useEffect(() => {
    generateProfile(13);
  }, []);

  return (
     <div className="but">
      <input type="number" className="inputs" placeholder="Search Here" value={numberofProfile}
      onChange={(e) => setnumberofProfile(e.target.value)} />
      <button onClick={()=>generateProfile(numberofProfile)}> Search Profiles </button>

    <div className="profiles">
      {Profile.map((val) => (
        <div key={val.id} className="cards">
          <img src={val.avatar_url} alt="" />
          <p>{val.login}</p>
          <a href={val.html_url} target="_blank">
            Profile
          </a>
        </div>
      ))}
    </div>
      </div>
  );
}

export default Bodie;

// try catch
// usecallback : ? how
// search on basis of name