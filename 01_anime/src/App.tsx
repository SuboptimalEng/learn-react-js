import React, {
  useEffect,
  useState,
} from 'react';
import './App.css';

interface IAnime {
  title: string;
  image_url: string;
  episodes: number;
  synopsis: string;
  score: number;
}

export const App = () => {
  // const [likedAnime, setLikedAnime] = useState<Array<IAnime>>([]);
  // const [dislikedAnime, setDislikedAnime] = useState<Array<IAnime>>([]);
  const [query, setQuery] =
    useState<string>('naruto');
  const [results, setResults] = useState<
    Array<IAnime>
  >([]);

  // Fetch anime data on page load.
  useEffect(() => {
    fetchAnimeData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Testing useEffect.
  // useEffect(() => {
  //   console.log(query);
  // }, [query]);

  const fetchAnimeData = (): void => {
    // Define the config we'll need for our Api request
    const url = `https://api.jikan.moe/v3/search/anime?q=${query}`;

    // Make the HTTP Api request
    fetch(url)
      .then((response: Response) =>
        response.json()
      )
      .then((data) => {
        setResults([...data.results]);
      })
      .catch((error) => {
        alert('Error, check console');
        console.error(error);
      });
  };

  return (
    <div className="font-sans antialiased  bg-gray-900 text-white">
      <div className="text-center">
        {/* Search */}
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            className="text-black"
          />
          <button onClick={fetchAnimeData}>
            Search
          </button>
        </div>

        {/* Results */}
        <div className="flex flex-col space-y-2">
          {results.map((result, i) => {
            return (
              <div className="border">
                <div
                  key={i}
                  className="flex flex-col place-items-center"
                >
                  <img
                    src={result.image_url}
                    alt=""
                    className="w-40"
                  />
                  <div>{result.title}</div>
                  <div>{result.score}</div>
                  <div>{result.episodes}</div>
                  <div>{result.synopsis}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// class App extends React.Component {
//   fetchAnimeData = () => {
//     // Define the config we'll need for our Api request
//     let url = 'https://api.jikan.moe/v3/anime/1';
//     // Make the HTTP Api request
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => {
//         alert('Error, check console');
//         console.error(error);
//       });
//   };
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <button onClick={this.fetchAnimeData}>fetch</button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
