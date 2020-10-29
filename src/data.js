
const GENRES = [
  "tactics strategy",
  "real time strategy",
  "platformer",
  "rogue-like",
  "mmo rpg",
  "rpg",
  "shoot em up",
  "racing",
  "first person shooter",
  "arcade",
  "street fighter",
]

const MECHANICS = [
  "duel",
  "card game",
  "steal the flag",
  "tower defense",
  "survive to the end",
  "find all items",
  "with timer",
  "build structures",
  "build your player",
  "sandbox",
  "procedural generated",
  "investigation",
  "manage your shop",
  "manage your vehicle",
  "must co-op",
]

const THEMES = [
  "medieval",
  "fantasy",
  "non sense",
  "japanese",
  "hi-tech",
  "modern",
  "abstract",
  "steampunk",
  "cyberpunk",
  "egypt",
  "vintage",
  "dark fantasy",
]

export const getGenre = (i) => GENRES[i]
export const getMechanic = (i) => MECHANICS[i]
export const getTheme = (i) => THEMES[i]

export const getRandomGenre = () => {
  return GENRES[Math.floor(Math.random() * GENRES.length)]
}
export const getRandomMechanic = () => {
  return MECHANICS[Math.floor(Math.random() * MECHANICS.length)]
}
export const getRandomTheme = () => {
  return THEMES[Math.floor(Math.random() * THEMES.length)]
}

export const buildUrl = (genres, themes, mechanics, sliderValue) => {
  const genreIndexes = genres.map(value => GENRES.indexOf(value))
  const mechIndexes = mechanics.map(value => MECHANICS.indexOf(value))
  const themeIndexes = themes.map(value => THEMES.indexOf(value))
  const gString = themeIndexes.concat(mechIndexes).concat(genreIndexes).join('.')
  return `?g=${gString}&m=${sliderValue}`
}
