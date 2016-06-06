import React, { PropTypes, Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Done from 'material-ui/svg-icons/action/done';
import Schedule from 'material-ui/svg-icons/action/schedule';
import VisibilityIcon from 'material-ui/svg-icons/action/visibility';



const style = {
  margin: 12
};

export default class VisibilityFilter extends Component {

  render() {
    const { todos, 
      setVisibilityFilter } = this.props;

    const { visibility } = this.props.visibilityFilter;

    return <div>
      <FlatButton 
        label={ 'all (' + todos.length + ')' } 
        secondary={true} 
        style={style} 
        onClick={() => setVisibilityFilter('all')}
        disabled={ visibility === 'all' }
        icon={<VisibilityIcon />}/>
      <FlatButton 
        label={ 'active (' + todos.filter( el => el.completed === false).length + ')' } 
        secondary={true} 
        style={style} 
        onClick={() => setVisibilityFilter('active')}
        disabled={ visibility === 'active' }
        icon={<Schedule />}/>
      <FlatButton 
        label={ 'completed (' + todos.filter( el => el.completed === true).length + ')' }
        secondary={true} 
        style={style} 
        onClick={() => setVisibilityFilter('completed')}
        disabled={ visibility === 'completed' }
        icon={<Done />}/>
    </div>
  }
}

VisibilityFilter.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};