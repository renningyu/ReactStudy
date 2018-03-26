/**
 * Created by msi on 2018/1/13.
 */
import React, {Component, PropTypes} from 'react';
import Checklist from './Checklist';
import marked from 'marked';

let titlePropTypes = (props, propName, componentName) => {
    if (props[propName]) {
        let value = props[propName];
        if (typeof value !== 'string' || value.length > 100) {
            return new Error(
                '${propName} in ${componentName} is longer than 80 characters'
            )
        }
    }
};

class Card extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            showDetails: false
        };
    }

    toggleDetails() {
        this.setState({showDetails: !this.state.showDetails})
    }

    render() {
        let cardDetails;
        if (this.state.showDetails) {
            cardDetails = (
                <div className="card_details">
                    <span dangerouslySetInnerHTML={{__html: marked(this.props.description)}}/>
                    {/*{marked(this.props.description)}*/}
                    <Checklist cardId={this.props.id} tasks={this.props.tasks} taskCallbacks={this.props.taskCallbacks}/>
                </div>
            );
        }
        ;

        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        };

        return (
            <div className="card">
                <div style={sideColor}/>
                <div className={
                    this.state.showDetails ? "card_title--is-open" : "card_title"
                } onClick={
                    this.toggleDetails.bind(this)
                }>
                    <span dangerouslySetInnerHTML={{__html: marked(this.props.title)}}/>
                </div>
                {cardDetails}
            </div>
        );
    }
}
Card.propTypes = {
    id: PropTypes.number,
    title: titlePropTypes,
    description: PropTypes.string,
    color: PropTypes.string,
    task: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
};
export default Card;