
const GENRES = [
  {value: "tactics strategy", name: "tactics strategy"},
  {value: "real time strategy", name: "real time strategy"},
  {value: "platformer", name: "platformer"},
  {value: "rogue-like", name: "rogue-like"},
  {value: "mmo rpg", name: "mmo rpg"},
  {value: "rpg", name: "rpg"},
  {value: "shoot em up", name: "shoot'em up"},
  {value: "racing", name: "racing"},
  {value: "first person shooter", name: "first person shooter"},
  {value: "arcade", name: "arcade"},
  {value: "street fighter", name: "street fighter"},
]

const MECHANICS = [
  {value: "duel", name: "duel"},
  {value: "card game", name: "card game"},
  {value: "steal the flag", name: "steal the flag"},
  {value: "tower defense", name: "tower defense"},
  {value: "survive to the end", name: "survive to the end"},
  {value: "find all items", name: "find all items"},
  {value: "with timer", name: "with timer"},
  {value: "build structures", name: "build structures"},
  {value: "build your player", name: "build your player"},
  {value: "sandbox", name: "sandbox"},
  {value: "procedural generated", name: "procedural generated"},
  {value: "investigation", name: "investigation"},
  {value: "manage your shop", name: "manage your shop"},
  {value: "manage your vehicle", name: "manage your vehicle"},
  {value: "must co-op", name: "must co-op"},
]

const THEMES = [
  {value: "medieval", name: "medieval"},
  {value: "fantasy", name: "fantasy"},
  {value: "non sense", name: "non sense"},
  {value: "japanese", name: "japanese"},
  {value: "hi-tech", name: "hi-tech"},
  {value: "modern", name: "modern"},
  {value: "abstract", name: "abstract"},
  {value: "steampunk", name: "steampunk"},
  {value: "cyberpunk", name: "cyberpunk"},
  {value: "egypt", name: "egypt"},
  {value: "vintage", name: "vintage"},
  {value: "dark fantasy", name: "dark fantasy"},
]

export const getRandomGenre = () => {
  return GENRES[Math.floor(Math.random() * GENRES.length)].value
}
export const getRandomMechanic = () => {
  return MECHANICS[Math.floor(Math.random() * MECHANICS.length)].value
}
export const getRandomTheme = () => {
  return THEMES[Math.floor(Math.random() * THEMES.length)].value
}
