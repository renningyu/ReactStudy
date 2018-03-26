/**
 * Created by msi on 2018/1/13.
 */
import React, {Component, PropTypes} from 'react';

class Checklist extends Component {
    checkInputKeyPress(evt){
        if(evt.key === 'Enter'){
            this.props.taskCallbacks.add(this.props.cardId,evt.target.value);
            evt.target.value = '';
        }
    }
    render() {
        let tasks = this.props.tasks.map((task, taskIndex) => (
            <li key={task.id} className="checklist_task">
                <input type="checkbox" defaultChecked={task.done} onChange={
                    this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)
                }/>
                {task.name}
                <a href="#" className="checklist_task--remove" onClick={
                    this.props.taskCallbacks.deletes.bind(null, this.props.cardId, task.id, taskIndex)
                }/>
            </li>
        ));
        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text"
                       className="checklist--add-task"
                       placeholder="Type then hit Enter to add a task"
                       onKeyPress={this.checkInputKeyPress.bind(this)}
                />
            </div>
        );
    }
}

Checklist.propType = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    cardId: PropTypes.number
};

export default Checklist;