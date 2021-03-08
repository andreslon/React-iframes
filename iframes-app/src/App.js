import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText' 
import './App.css';
const drawerWidth = 240
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    height: window.innerHeight,
    width: '100%',
  }
}))

const forms = [
  { text: 'Hubspot', page: 'https://www.hubspot.com' },
  { text: 'Monday', page: 'https://monday.com' }
]

const App = (props) => {

  const [Url, setUrl] = useState('')

  const redirectUrl = (selectedRoute) => {
    const urlRedirect = `${selectedRoute}`
    console.log('loading:', urlRedirect)
    setUrl(urlRedirect)
  }

  const classes = useStyles()

  const Select = (page) => () => {
    redirectUrl(page)
  } 

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List>
          {forms.map((form) => (
            <ListItem button key={form.text} onClick={Select(form.page)}>
              <ListItemText primary={form.text} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>
      <main className={classes.content}>
        <iframe
          title="mod4"
          src={Url}
          height="100%"
          width="100%"
          frameBorder="0"
        ></iframe>
      </main>
    </div>
  );
}

export default App
 
