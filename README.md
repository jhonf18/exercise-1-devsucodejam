# Solution to excercise 1 of DevsuCodeJam 2011

## Exercise

Look at this series: 7, 6, 8, 4, 9, 2, 10, 0, 11, -2, …
Create a function that receives two integers: x and y. If any of them are 0 or negative, or if
they are greater than 255, the function should return -1
Otherwise, the function should return the sum of the x and y elements of the series.

For example: If the function receives x=1, y=3, it should return: 15. (Because the sum of the
first plus the third argument is 7+8=15). If the function receives x=8, y=9, it should return 11.
(Because the sum of the 8th plus the 9th element is 0+11=11)

The function will receive 2 integers, return an integer.

### Scripts

#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `npm run prettier-format`

Format your code.

#### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.

