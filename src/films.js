// Exercise 1: Get the array of all directors.

/* Exercise 1
Only the directors of the films should be displayed to the user.

To get the array of directors, you must create the getAllDirectors() function.

You don't have to render the result in this function,
 you have to return the array of directors. 
The goal is to keep each function with a single responsibility.
*/
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
/*
Another necessary functionality is to show the movies for a certain director.
For this, you will need to create a getMoviesFromDirector() function.

This function takes as a parameter the director
 whose movies are to be searched for, and returns 
 the array of movies he directed.

*/
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director);
  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
/*
To have more information about this director, it is requested to calculate
 the average scores of his films.
For this, you will have to implement the moviesAverage() function, 
which receives an array of movies and returns the average score, with two decimal places.
Help:
Since you want to get a single value, the .reduce() method can be useful.
*/
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = getMoviesFromDirector(array, director);
  let totalScore = Number(
    moviesFromDirector.reduce((total, movie) => total + movie.score, 0)
  );
  let result = totalScore / moviesFromDirector.length.toFixed(2);
  console.log('EXERCICE 3 ->', result);
  return parseFloat(result);
  
}

// Exercise 4:  Alphabetic order by title
/*
CONGRATULATIONS!, you have already created all the filters that will allow you 
to extract all the necessary information about the directors!
Now in this exercise and the next you will implement the logic to sort the movies, 
a fundamental part of any data visualization tool.
In this section, you will have to create a function that, receiving an
 array of movies, returns it sorted alphabetically by title.
Only the first 20 films ordered must be returned.
Help:
To find out if you should return an array with all the information about 
the movies or an array containing only the names of the movies, 
analyze the test file called "films.spec.js" and check the tests of exercise 4.
*/
function orderAlphabetically(array) {
  const sortedMovies = array
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b)) 
    .slice(0, 20); 
  console.log('EXERCICE 4 ->', sortedMovies);
  return sortedMovies;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const copyArray = [...array];
  const sortedYearTitle = copyArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year; 
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sortedYearTitle; 
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const genreMovies = array.filter((movie) => movie.genre.includes(genre));
  if (genreMovies.length === 0) {
    return 0;
  }
  const totalScore = parseFloat(
    genreMovies.reduce((total, movie) => total + movie.score, 0)
  );
  const result = (totalScore / genreMovies.length).toFixed(2);
  return parseFloat(result);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const modifyDuration = array.map((movie) => {
    let totalMinutes = 0;
    const durationSplit = movie.duration.split(' ');

    for (let part of durationSplit) {
      if (part.includes('h')) {
        let hours = parseInt(part.replace('h', '')); 
        totalMinutes += hours * 60; 
      } else if (part.includes('min')) {
        let minutes = parseInt(part.replace('min', '')); 
        totalMinutes += minutes; 
      }
    }
    return {
      ...movie,
      duration: totalMinutes
    };
  });
  return modifyDuration;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const sameYearBestScore = array
    .filter((movie) => movie.year === year)
    .reduce((a, b) => (a.score > b.score ? a : b)); 

  return [sameYearBestScore]; 
}


// The following is required to make unit tests work.

if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
