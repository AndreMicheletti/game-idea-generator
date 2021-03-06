import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import queryString from 'query-string'
import { defineMessages, injectIntl } from 'react-intl'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Slider from '@material-ui/core/Slider'
import Tooltip from '@material-ui/core/Tooltip'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

import IconButton from '@material-ui/core/IconButton'
import ShareIcon from '@material-ui/icons/Share'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CloseIcon from '@material-ui/icons/Close'

import {
  EmailShareButton,
  EmailIcon,
  RedditShareButton,
  RedditIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

import RandomTag from './components/RandomTag'
import * as data from './data'

import gamepadIcon from './images/gamepad_white.svg'
import ptIcon from './images/pt.svg'
import enIcon from './images/en.svg'

const PUBLIC_URL = ''

const translateMessages = defineMessages({
	genre: {
		id: 'app.genre',
		defaultMessage: 'Genre'
	},
	mechanic: {
		id: 'app.mechanic',
		defaultMessage: 'Mechanic'
	},
	theme: {
		id: 'app.theme',
		defaultMessage: 'Theme'
	},
	genres: {
		id: 'app.genres',
		defaultMessage: 'Genres'
	},
	mechanics: {
		id: 'app.mechanics',
		defaultMessage: 'Mechanics'
	},
	themes: {
		id: 'app.themes',
		defaultMessage: 'Themes'
	},
	randomize: {
		id: 'app.randomize',
		defaultMessage: 'Randomize'
	},
	share: {
		id: 'app.share',
		defaultMessage: 'Share'
	},
	title: {
		id: 'app.title',
		defaultMessage: 'Game Idea Generator'
	},
	by: {
		id: 'app.by',
		defaultMessage: 'by'
	},
	and: {
		id: 'app.and',
		defaultMessage: 'and'
	},
	madeWith: {
		id: 'app.madeWith',
		defaultMessage: 'Made with'
	},
	mechanicSliderLabel: {
		id: 'app.mechanicSlider.label',
		defaultMessage: 'How many Mechanics?'
	},
	gameIdeaTitle: {
		id: 'app.gameIdea.title',
		defaultMessage: 'What about a'
	},
	howToFineTune: {
		id: 'app.howTo.fineTune',
		defaultMessage: 'You can click on each tag to randomize it and fine-tune your game idea!'
	},
	howToEnd: {
		id: 'app.howTo.end',
		defaultMessage: 'to generate a random set of tags.'
	},
	howToMiddle: {
		id: 'app.howTo.middle',
		defaultMessage: 'you\'ll want and click'
	},
	howToStart: {
		id: 'app.howTo.start',
		defaultMessage: 'Select how many'
	},
	howToDescription: {
		id: 'app.howTo.description',
		defaultMessage: 'You game idea is a combination of three tags:'
	},
	howToTitle: {
		id: 'app.howTo.title',
		defaultMessage: 'How to use?'
	},
	howToMiddle: {
		id: 'app.howTo.middle',
		defaultMessage: 'you\'ll want and click'
	},
	howToMiddle: {
		id: 'app.howTo.middle',
		defaultMessage: 'you\'ll want and click'
	},
})

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/AndreMicheletti/game-idea-generator/blob/master/LICENSE">
        André Micheletti
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
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
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
	},
	toolbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center'
	},
  card: {
    backgroundColor: "#333",
    padding: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  formBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dataLine: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  instructionsBox: {
    marginTop: 28,
  },
  slider: {
    width: 200,
  },
  theme: {
    color: '#087b08',
    fontWeight: 500
  },
  genre: {
    color: '#e66d52',
    fontWeight: 500
  },
  mechanic: {
    color: '#3b28da',
    fontWeight: 500
  },
  dialogRoot: {
    margin: 0,
    padding: theme.spacing(2),
  },
  dialogCloseButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogTextBox: {
    padding: 8,
    backgroundColor: '#e8e8e8'
  },
  clickable: {
    cursor: 'pointer'
  }
}))


function App(props) {
	const { formatMessage } = props.intl
  const classes = useStyles()

  const [genres, setGenre] = React.useState([ data.getRandomGenre() ])
  const [mechanics, setMechanic] = React.useState([ data.getRandomMechanic() ])
  const [themes, setTheme] = React.useState([ data.getRandomTheme() ])
  const [mechSlider, setSlider] = React.useState(1)
  const [openDialog, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const updArrayOnIndex = (arr, index, value) => {
    const aux = [...arr]
    aux[index] = value
    return [...aux]
  }

  const updArraySize = (arr, newSize, newDataCallback) => {
    const aux = [...arr]
    if (aux.length > newSize) {
      // remove item
      return aux.slice(0, newSize)
    } else {
      // add items
      [...Array(newSize - aux.length).keys()].forEach(index => {
        aux.push(newDataCallback())
      })
    }
    return [...aux]
  }

  const onRandomize = () => {
    setGenre(genres.map(_ => data.getRandomGenre()))
    setTheme(themes.map(_ => data.getRandomTheme()))
    setMechanic(mechanics.map(_ => data.getRandomMechanic()))
  }

  const handleSlider = (value) => {
    setSlider(value)
    setMechanic(updArraySize(mechanics, value, data.getRandomMechanic))
  }

  useEffect(() => {
    // check url querystring
    try {
      const parsed = queryString.parse(location.search)
      if (parsed && parsed.g) {
        const m = !!parsed.m ? parseInt(parsed.m) : 1
        const indexes = parsed.g.split('.')
        if (indexes.length !== 2 + m) {
          throw 'Not enough parameters. malformed querystring'
        }
        const pThemes = indexes.slice(0, 1)
        const pMechanics = indexes.slice(1, 1+m)
        const pGenres = indexes.slice(1+m, 2+m)
        setGenre(pGenres.map(i => data.getGenre(i)))
        setMechanic(pMechanics.map(i => data.getMechanic(i)))
        setTheme(pThemes.map(i => data.getTheme(i)))
        setSlider(m)
      }
    } catch (e) {
      console.warn(e)
      setGenre([data.getRandomGenre()])
      setMechanic([data.getRandomMechanic()])
      setTheme([data.getRandomTheme()])
    }
  }, [])

  const renderGenreTags = () => {
    return genres.map((genre, index) => {
      return (
        <RandomTag
          key={`genre-${index}`}
          text={genre}
          color="#e66d52"
          tooltip={formatMessage(translateMessages.genre)}
          onClick={() => { setGenre(updArrayOnIndex(genres, index, data.getRandomGenre()))}}
        />
      )
    })
  }

  const renderMechanicTags = () => {
    return mechanics.map((mech, index) => {
      return (
        <RandomTag
          key={`mech-${index}`}
          text={mech}
          color="#3b28da"
          tooltip={formatMessage(translateMessages.mechanic)}
          onClick={() => { setMechanic(updArrayOnIndex(mechanics, index, data.getRandomMechanic()))}}
        />
      )
    })
  }

  const renderThemeTags = () => {
    return themes.map((theme, index) => {
      return (
        <RandomTag
          key={`theme-${index}`}
          text={theme}
          color="#087b08"
          tooltip={formatMessage(translateMessages.theme)}
          onClick={() => { setTheme(updArrayOnIndex(themes, index, data.getRandomTheme()))}}
        />
      )
    })
  }

  const changeLang = (toLang) => {
    sessionStorage.setItem('lang', toLang)
    document.location.reload()
  }

  const protocol = 'https'
  const githubName = 'andremicheletti'
  const repoName = 'game-idea-generator'
  const shareUrl = `${protocol}://${githubName}.github.io/${repoName}/${data.buildUrl(genres, themes, mechanics, mechSlider)}`
  const shareTitle = 'Check out this game idea'
  const shareMessage = "I've generated a random game idea using this simple tool, check it out!"

  return (
    <div className={classes.root}>

      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
					<div style={{ display: 'flex', flexDirection: 'row', flexShrink: 1, alignItems: 'center' }}>
						<img src={gamepadIcon} width="100" height="50" />
						<a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
							<Typography variant="h4" color="inherit" noWrap>
								{formatMessage(translateMessages.title)}
							</Typography>
						</a>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row', flex: 1, flexGrow: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
						<div className={classes.clickable} onClick={() => changeLang('pt')}>
							<img src={ptIcon} width="35" height="35"/>
						</div>
						<div style={{ width: 10 }}></div>
						<div className={classes.clickable} onClick={() => changeLang('en')}>
							<img src={enIcon} width="35" height="35"/>
						</div>
					</div>
        </Toolbar>
      </AppBar>

      <Dialog open={openDialog}>
        <DialogTitle className={classes.dialogRoot}>
          <Typography component="p" variant="h5">{formatMessage(translateMessages.share)}</Typography>
          <IconButton aria-label="close" className={classes.dialogCloseButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className={classes.dialogTextBox}>
            <Typography variant="subtitle1" style={{ fontWeight: 'normal' }}>
              {shareUrl}
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <EmailShareButton url={shareUrl} title={shareTitle} body={shareMessage}>
            <EmailIcon round />
          </EmailShareButton>
          <FacebookShareButton url={shareUrl} quote={shareMessage}>
            <FacebookIcon round />
          </FacebookShareButton>
          <RedditShareButton url={shareUrl} title={shareMessage}>
            <RedditIcon round />
          </RedditShareButton>
          <WhatsappShareButton url={shareUrl} title={shareMessage}>
            <WhatsappIcon round />
          </WhatsappShareButton>
          <TelegramShareButton url={shareUrl} title={shareMessage}>
            <TelegramIcon round />
          </TelegramShareButton>
          <TwitterShareButton url={shareUrl} title={shareMessage}>
            <TwitterIcon round />
          </TwitterShareButton>
        </DialogActions>
      </Dialog>

      <main>
        <Container component="main" className={classes.main} maxWidth="md">

          <Box my={4} className={classes.formBox}>
            <div>
              <Typography id="discrete-slider" gutterBottom>
                {formatMessage(translateMessages.mechanicSliderLabel)}
              </Typography>
              <Slider
                className={classes.slider}
                defaultValue={1}
                value={mechSlider}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1} marks
                min={1}
                max={3}
                onChangeCommitted={(_, value) => { handleSlider(value)}}
              />
            </div>
            <Button variant="contained" color="primary" onClick={() => onRandomize()}>
              {formatMessage(translateMessages.randomize)}
            </Button>
          </Box>

          <Card className={classes.card}>
            <CardHeader
              title={(
                <Typography variant="h4" style={{ color: 'white' }}>
                  {formatMessage(translateMessages.gameIdeaTitle)}
                </Typography>
              )}
            />
            <CardContent>
              <div className={classes.dataLine}>
                {renderThemeTags()}
                {renderMechanicTags()}
                {renderGenreTags()}
              </div>
            </CardContent>
            <CardActions>
              <Tooltip title={formatMessage(translateMessages.share)} aria-label="share">
                <IconButton aria-label="share" color="primary" onClick={() => handleOpen()}>
                  <ShareIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>

          <Container maxWidth="sm" className={classes.instructionsBox}>
            <Typography variant="h4">
							{formatMessage(translateMessages.howToTitle)}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 3 }}>
							{formatMessage(translateMessages.howToDescription)}
              <span className={classes.theme}> {formatMessage(translateMessages.theme)}</span>, 
              <span className={classes.mechanic}> {formatMessage(translateMessages.mechanics)}</span> {formatMessage(translateMessages.and)} 
              <span className={classes.genre}> {formatMessage(translateMessages.genre)}</span>
            </Typography>
            <br />
            <Typography variant="body1">
              
							{formatMessage(translateMessages.howToStart)} <span className={classes.mechanic}>{" "}{formatMessage(translateMessages.mechanics)}</span> 
							{" "} {formatMessage(translateMessages.howToMiddle)}
              <Typography color="primary" variant="button">
               {" "} {formatMessage(translateMessages.randomize)} {" "}
              </Typography>
							{formatMessage(translateMessages.howToEnd)}
               
            </Typography>
            <br />
            <Typography variant="body1">
							{formatMessage(translateMessages.howToFineTune)}
            </Typography>
          </Container>

        </Container>
      </main>

      <footer className={classes.footer}>
        <Container maxWidth="sm" className={classes.footerContainer}>
          <Typography variant="body1">
						{formatMessage(translateMessages.madeWith)}
						<FavoriteIcon color="error" />
						{formatMessage(translateMessages.by)}
						<Link href="https://andregamedev.itch.io/">{" "}AndreGameDev</Link>
					</Typography>
          <Copyright />
        </Container>
      </footer>

    </div>
  )
}

export default injectIntl(App)
