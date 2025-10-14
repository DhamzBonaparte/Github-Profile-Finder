export default function Profile({result,show}) {
  return (
    <>
      <div
        className="profile"
        style={show ? { display: "block" } : { display: "none" }}
      >
        <div className="showw">
          <div className="vitra">
            <div className="upar">
              <img src={result.avatar_url} alt="" height="200" />
              <h1>{result.name}</h1>
            </div>
            <div className="niche">
              <h1>
                <a href={result.url} target="_blank">
                  {result.login}
                </a>
              </h1>
              <div className="follow">
                <h2>
                  Followers:{" "}
                  <a href={result.followers_url} target="_blank">
                    {result.followers}
                  </a>
                </h2>
                <h2>
                  Following:{" "}
                  <a href={result.following_url} target="_blank">
                    {result.following}
                  </a>
                </h2>
              </div>
              <div className="date">
                <h3>Created At: {result.created_at?.slice(0, 10)}</h3>
                <h3>Updated At: {result.updated_at?.slice(0, 10)}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
