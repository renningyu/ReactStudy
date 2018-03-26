/**
 * Created by msi on 2018/1/13.
 */
import React, {Component, PropTypes} from 'react';
import List from './List';

class KanBanBoard extends Component {
    render() {
        return (

            <div className="app">

                <List id="todo" title="TO DO" taskCallbacks={this.props.taskCallbacks} cards={
                    this.props.cards.filter((card) => card.status === "todo")
                }/>
                <List id="in-progress" title="In Progress" taskCallbacks={this.props.taskCallbacks} cards={
                    this.props.cards.filter((card) => card.status === "in-progress")
                }/>
                <List id="done" title="Done" taskCallbacks={this.props.taskCallbacks} cards={
                    this.props.cards.filter((card) => card.status === "done")
                }/>
            </div>
        );
    }
}
KanBanBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
};
export default KanBanBoard;