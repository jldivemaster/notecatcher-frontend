
import React from 'react';
import '../Header.css';
import '../App.scss';
import '../note-taking6.png'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, Divider, IconButton, Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
  },
  root: {
    padding: '3px 3px 3px',
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#f8f2ec',
    opacity: '0.8',
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  input: {
    fontStyle: 'italic',
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  btnGrid: {
    float: 'right',
    marginLeft: theme.spacing(13),
    marginRight: theme.spacing(0),
    display: 'block',
    marginBottom: theme.spacing(0),
    padding: '1px 1px 1px 1px'
  },
  button: {
    backgroundColor: '#f8f2ec',
    opacity: '0.4',
  }
}));

export default function Header(props) {

  const [values, setValues] = React.useState({
    keyword: ""
  });

  const classes = useStyles();

  const updateKW = input => (e) => {
    setValues({...values, [input]: e.target.value })
  };

  const onSearch = () => {
    let keyword = values.keyword
    props.onSearch(keyword);
  };

  function showSearchBar () {
    if(props.showSearchBar) {
      return(
      <div>
        <Grid container className={classes.container} spacing={4} >
          <Grid item xs={9}>
            <Paper id="search-bar" className={classes.root}>
              <InputBase
                className={classes.input}
                name="keyword"
                placeholder="Filter Notes by Keyword"
                inputProps={{ 'aria-label': 'search by keyword' }}
                onChange={updateKW('keyword')}
                value={values.keyword}
              />
              <IconButton onClick={() => onSearch()} className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton color="primary" className={classes.iconButton} aria-label="assignment">
                <AssignmentIcon />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={2} className={classes.btnGrid}>
            <Button className={classes.button} variant="contained" size='small' onClick={props.onSignOut}>
              Log Out
            </Button>
          </Grid>
        </Grid>
      </div>
      )
  }};

  let bg = require('../note-taking6.png')
    return (
      <div className="header" style ={ { backgroundImage: "url("+bg+")" } }>
         <p className='credit'>Photo by Aaron Burden on Unsplash</p>
        <h1 className='head-title'>NoteCatcher</h1>
        <h5 className='head-subtitle'>A note organizer for Flatiron Students</h5>
        {showSearchBar()}
      </div>
    )
}
