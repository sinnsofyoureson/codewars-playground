/*
 * Take a Ten Minute Walk
 *
 * You live in the city of Cartesia where all roads are laid out in 
 * a perfect grid. You arrived ten minutes too early to an appointment, 
 * so you decided to take the opportunity to go for a short walk. 
 * The city provides its citizens with a Walk Generating App on their 
 * phones -- everytime you press the button it sends you an array of 
 * one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
 * You always walk only a single block for each letter (direction) and you know 
 * it takes you one minute to traverse one city block, so create a function that 
 * will return true if the walk the app gives you will take you exactly ten minutes 
 * (you don't want to be early or late!) and will, of course, return you to your 
 * starting point. Return false otherwise.
 *
 * Note: you will always receive a valid array containing a random assortment 
 * of direction letters ('n', 's', 'e', or 'w' only). It will never give you 
 * an empty array (that's not a walk, that's standing still!).
 */

type Increment = {
  x: number;
  y: number;
};

const incrementByDirection: { [Key: string]: Increment } = {
  ["n"]: { x: 0, y: 1 },
  ["s"]: { x: 0, y: -1 },
  ["w"]: { x: -1, y: 0 },
  ["e"]: { x: 1, y: 0 },
};

export const isValidWalk = (walk: string[]) => {
  if (walk.length !== 10) {
    return false
  }

  let x = 0
  let y = 0

  walk.forEach(dir => {
    const increment = incrementByDirection[dir]

    x += increment.x
    y += increment.y
  })

  return x === 0 && y === 0
}
