import React, { Component } from 'react';
import { Button, Grid } from '@material-ui/core';
import '../Note.css';

export default class NewNote extends Component {
    constructor(props){
      super(props)
      this.state = {
                title: '',
                  ref: '',
                  body: '',
                  mod: this.props.mod
                    }
    };

    handleChange = name => (e) => {
      this.setState({ [name]: e.target.value })
      this.autoExpand(e)
    };

    handleClick = () => {
      let note = this.state
      this.props.onNewNote(note)
      this.props.onToggle()
    };

    autoExpand = (e) => {
      let field = e.target
      field.style.height = "inherit";
      let computed = window.getComputedStyle(field)
      let height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                 + parseInt(computed.getPropertyValue('padding-top'), 10)
                 + field.scrollHeight
                 + parseInt(computed.getPropertyValue('padding-bottom'), 10)
                 + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
      field.style.height = height + 'px';
    };

  render() {

    return(
      <div className='new-note'>

        <h3>New Note Form</h3>
        <form className='new-form'>
          <input type="text" className='new-title-input' placeholder="Lab Title" name="title" value={this.state.title} onChange={this.handleChange('title')} />
          <input type="text" className='new-ref-input' placeholder="Quick Reference" name="ref" value={this.state.ref} onChange={this.handleChange('ref')} />
          <textarea cols='40' className='new-body-input' placeholder="Note Body" name="body" value={this.state.body} onChange={this.handleChange('body')}>{this.state.body}</textarea>
          <br />
          <p>Mod # {this.props.mod}</p>
          <Grid container className='note-btn-container'>
            <Grid>
              <Button className='new-btn' variant='contained' onClick={this.handleClick}>Save Note</Button>
            </Grid>
            <Grid>
              <Button className='new-btn' variant='contained' onClick={this.props.onToggle}>Cancel</Button>
            </Grid>
          </Grid>
        </form>
      </div>
  )};
}
