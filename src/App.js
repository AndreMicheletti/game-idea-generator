import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Selector from './components/Selector';

const GENRES = [
  {value: "tactics strategy", name: "tactics strategy"},
  {value: "real time strategy", name: "real time strategy"},
  {value: "platformer", name: "platformer"},
  {value: "rogue-like", name: "rogue-like"},
  {value: "mmo rpg", name: "mmo rpg"},
  {value: "rpg", name: "rpg"},
  {value: "shoot em up", name: "shoot'em up"},
  {value: "race", name: "race"},
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
  {value: "arabic", name: "arabic"},
  {value: "vintage", name: "vintage"},
  {value: "dark fantasy", name: "dark fantasy"},
]

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));
export default function App() {
  const classes = useStyles();
  const [genre, setGenre] = React.useState('');
  const [mechanic, setMechanic] = React.useState('');
  const [theme, setTheme] = React.useState('');

  const handleGenre = (event) => {
    setGenre(event.target.value);
  };
  const handleMechanic = (event) => {
    setMechanic(event.target.value);
  };
  const handleTheme = (event) => {
    setTheme(event.target.value);
  };

  const onGenerate = () => {
    setGenre(GENRES[Math.floor(Math.random() * GENRES.length)].value);
    setMechanic(MECHANICS[Math.floor(Math.random() * MECHANICS.length)].value);
    setTheme(THEMES[Math.floor(Math.random() * THEMES.length)].value);
  };

  return (
    <div className={classes.root}>

      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Game Idea Generator
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Container component="main" className={classes.main} maxWidth="md">
          <Box my={4}>
            <center>
              <Selector name="Themes" options={THEMES} handleChange={handleTheme} selected={theme} />
              +
              <Selector name="Mechanics" options={MECHANICS} handleChange={handleMechanic} selected={mechanic} />
              +
              <Selector name="Genres" options={GENRES} handleChange={handleGenre} selected={genre} />
            </center>
          </Box>

          <Box my={4}>
            <center>
              <Button variant="contained" color="primary" onClick={onGenerate}>
                Generate
              </Button>
            </center>
          </Box>

        </Container>
      </main>

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </footer>

    </div>
  );
}
