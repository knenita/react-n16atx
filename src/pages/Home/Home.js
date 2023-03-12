import * as React from 'react';

React.useEffect(() => {
  const list = fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then((response) => response.json())
    .then((data) => setCharactersList(data.results))
    .catch(console.error);
}, []);

const handleSelectedCard = (character) => {
  setSelectedCharacter(character);
  setSelected(true);
};
  return <main>Hola</main>;
  );
};

export default Home;