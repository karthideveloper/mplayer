import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { searchYouTube } from "./services";
function App() {
  const [query, setQuery] = useState("European history");
  const [list, setList] = useState(null);

  const search = (e) => {
    e.preventDefault();
    searchYouTube(query).then((res) => {
      setList(res);
    });
  };

  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <div className="app">
      <form onSubmit={search}>
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search YouTube</button>
      </form>
      {list &&
        (list.length === 0 ? (
          <p>No results</p>
        ) : (
          <ul className="items">
            {list.map((item) => (
              <li className="item" key={item.id}>
                <ReactPlayer
                  url={item.url}
                  controls={true}
                  onReady={() => console.log("onReady")}
                  onStart={() => console.log("onStart")}
                  onBuffer={() => console.log("onBuffer")}
                  onSeek={(e) => console.log("onSeek", e)}
                  onError={(e) => console.log("onError", e)}
                />
                <div>
                  <b>
                    <a href={item.link}>{item.title}</a>
                  </b>
                  <p>{item.description}</p>
                </div>
                <ul className="meta">
                  <li>
                    By: <a href={item.author.ref}>{item.author.name}</a>
                  </li>
                  <li>Views: {item.views}</li>
                  <li>Duration: {item.duration}</li>
                  <li>Uploaded: {item.uploaded_at}</li>
                </ul>
                <img alt="" src={item.thumbnail} />
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
}

export default App;
