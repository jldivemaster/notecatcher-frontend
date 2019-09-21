import React from 'react'
import '../NoteList.scss'
import Note from './Note'
import NewNote from './NewNote'
// import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete'
import { List, ListItem, Divider, Fab, Button, Grid } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//   fab: {
//     margin: theme.spacing(1),
//     opacity: '0.4'
//      }
// }) );

export default class NoteList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newNote: false
    }
  }

  setModNum = () => {
    if(this.props.mod === '0'){
      return 'Pre-Work'
    } else {
      return 'Mod ' + this.props.mod
    }
  };

  handleNoteDelete = e => {
    e.persist();
    // console.log(e.currentTarget.id)
    this.props.handleNoteDelete(e.currentTarget.id)
  };

  handleNewNote = (note) => {
    this.props.newNote(note)
  }

  toggleView = () => {
    this.setState({ newNote: !this.state.newNote })
  };

  newNoteView = () => {
    if(this.state.newNote){
      return(
        <NewNote mod={this.props.mod} onNewNote={this.handleNewNote} onToggle={this.toggleView}/>
    )} else {
      return(
        <Button className='new-btn' variant='contained' onClick={this.toggleView}>Add A Note</Button>
    )}
  };

  render() {
    return(
      <div {...{ className: "wrapper" }}>
      <h2>{this.setModNum()}</h2>
         <Grid container className='new-note-container'>{this.newNoteView()}</Grid>
        <List {...{ className: "accordian-list" }} >
          {this.props.notes.map((note, key) => {
            return (
              <ul {...{ className: "accordian-list__item", key }}>
              <ListItem >
                <Note note={note} handleNoteEdit={this.props.handleNoteEdit} handleNoteDelete={this.handleNoteDelete}/>
                <Fab aria-label="delete" size='small' id={note.id} style={{ 'opacity': 0.5 }} onClick={this.handleNoteDelete}>
                <DeleteIcon className='delete-btn' label='Delete' />
                </Fab>
              </ListItem>
              <Divider variant="inset" />
              </ul>
            )
          })}
        </List>
      </div>
    )}
}
