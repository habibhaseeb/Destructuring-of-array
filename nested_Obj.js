const data = {
    user: {

      name: 'Alice',

      favorites: ['JavaScript', 'React'], // These are two VALUES.
    },
  };
  
  const {

    user: { name, favorites: [firstFavorite, secondFavorite] },
 
} = data;
  
  console.log(name); // Alice

   console.log(firstFavorite); //
 JavaScript

      console.log(secondFavorite); // React
  
