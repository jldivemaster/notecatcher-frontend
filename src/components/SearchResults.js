import React from 'react'
import '../NoteList.scss'
import Note from './Note'
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete'
import { List, ListItem, Fab, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    opacity: '0.4'
      }
}) );

export default function SearchResults(props) {

  const classes = useStyles();

  const handleNoteDelete = (e) => {
    props.handleNoteDelete(e.target.id)
    alert("Note successfully deleted")
  };

    return(
      <div {...{ className: "wrapper" }}>
        <h2>Search Results</h2>
        <List {...{ className: "accordian-list" }}>
          {props.notes.map((note, key) => {
            return (
              <ul {...{ className: "accordian-list__item", key }}>
               <ListItem>
                <Note note={note} handleNoteDelete={props.handleNoteDelete} handleNoteEdit={props.handleNoteEdit} />
                <Fab aria-label="delete" className={classes.fab} size='small' id={note.id} onClick={handleNoteDelete} >
                  <DeleteIcon className='delete-btn' label='Delete' />
                </Fab>
              </ListItem>
              </ul>
            )
          })}
        </List>
        <div>
        <Button variant='contained' className='return-btn' onClick={props.returnHome}>Return to Home Page</Button>
        </div>
      </div>
    )
}
