import React, { useState } from 'react';
import './App.css';

export const App = () => {
  const [shows, setShows] = useState<Array<any>>([]);

  const fetchAnimeData = () => {
    // Define the config we'll need for our Api request
    const url = 'https://api.jikan.moe/v3/anime/1';

    // Make the HTTP Api request
    fetch(url)
      .then((response: Response) => response.json())
      .then((data) => {
        console.log(data, shows);
        setShows([...shows, data.abc]);
      })
      .catch((error) => {
        alert('Error, check console');
        console.error(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchAnimeData}>fetch</button>
      </header>
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
