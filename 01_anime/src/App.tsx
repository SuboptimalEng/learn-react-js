import React, { useEffect, useState } from 'react';
import { AnimeCard } from './components/AnimeCard';
import './App.css';

export interface IAnime {
  i?: number;
  title: string;
  image_url: string;
  episodes: number;
  synopsis: string;
  score: number;
}

export const App = () => {
  // const [likedAnime, setLikedAnime] = useState<Array<IAnime>>([]);
  // const [dislikedAnime, setDislikedAnime] = useState<Array<IAnime>>([]);
  const [query, setQuery] = useState<string>('naruto');
  const [results, setResults] = useState<Array<IAnime>>([]);

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
      .then((response: Response) => response.json())
      .then((data) => {
        setResults([...data.results]);
      })
      .catch((error) => {
        alert('Error, check console');
        console.error(error);
      });
  };

  return (
    <div className="font-sans antialiased  bg-black text-white py-8 px-40">
      <div className="text-center flex flex-col space-y-8">
        {/* Search */}
        <div className="">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="text-white bg-black border focus:outline-none rounded-l-lg p-2"
          />
          <button onClick={fetchAnimeData} className="border rounded-r-lg p-2">
            Search
          </button>
        </div>

        {/* Results */}
        <div className="flex flex-col space-y-8">
          {results.map((result, i) => {
            return (
              <AnimeCard
                key={i}
                image_url={result.image_url}
                title={result.title}
                score={result.score}
                episodes={result.episodes}
                synopsis={result.synopsis}
              ></AnimeCard>
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
