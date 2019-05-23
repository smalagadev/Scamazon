# Bamazon

## Description
An Amazon-like storefront CLI that takes in orders from customers and depletes stock from the store's inventory.

## Dependencies and APIs

  * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

  * [Axios](https://www.npmjs.com/package/axios)

  * [DotEnv](https://www.npmjs.com/package/dotenv)

  * [File System](https://nodejs.org/api/fs.html)

  * [MySQL]

  * [Inquirer]

## What Each Command Should Do

1. `node liri.js concert-this <artist>`

se moment to format this as "MM/DD/YYYY")

![concert-this](assets/images/concert-this.png)
Format: ![Alt Text](url)

2. `node liri.js spotify-this-song '<song>'`

   * This will show the following information about the song:

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.

![spotify-this](assets/images/spotify-this.png)
Format: ![Alt Text](url)

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

     * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

     * It's on Netflix!

![movie-this](assets/images/movie-this.png)
Format: ![Alt Text](url)

4. `node liri.js do-what-it-says`

   * LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

![do-this](assets/images/do-this.png)
Format: ![Alt Text](url)
