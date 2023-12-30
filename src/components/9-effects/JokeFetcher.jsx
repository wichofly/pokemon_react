import { useState, useEffect } from 'react';

const jokeUrl = 'https://api.chucknorris.io/jokes/random';

const JokeFetcher = () => {
  const [joke, setJoke] = useState({ value: '', author: 'Chuck' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    const response = await fetch(jokeUrl);
    const jsonResponse = await response.json();
    // const randomJoke = jsonResponse.joke;
    setJoke(jsonResponse);
    setIsLoading(false)
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <h4>{joke.value}</h4>
      <p>Chuck Norris</p>
      <button onClick={fetchJoke} style={{ marginTop: '15px' }}>
        Idea
      </button>
    </div>
  );
};

export default JokeFetcher;
