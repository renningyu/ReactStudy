/**
 * Created by renningyu on 2018/3/23.
 */
import React, {Component} from 'react';
import KanbanBoard from './KanBanBoard';
import 'whatwg-fetch';
import 'babel-polyfill';
import update from 'react-addons-update';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'
};

class KanbanBoardContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            cards: [],
        };
    }

    componentDidMount() {
        // fetch(API_URL+'/cards',{header:API_HEADERS})
        //fetch('http://localhost:8081/helloboot/test.json',{mode: 'no-cors',header:API_HEADERS})
        fetch('./public/contacts.json')
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                this.setState({cards: responseData});
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            });
    }

    addTask(cardId, taskName) {
    }

    deleteTask(cardId, taskId, taskIndex) {
        let cardIndex = this.state.cards.findIndex((card)=>card.id == cardId);
        let nextState = update(this.state.cards,{
            [cardIndex]:{
                tasks:{$splice:[[taskIndex,1]]}
            }
        });
        this.setState({cards:nextState});
    }

    toggleTask(cardId, taskId, taskIndex) {
    }

    render() {
        //console.log(this.state);
        return <KanbanBoard cards={this.state.cards}
                            taskCallbacks={{
                                toggle: this.toggleTask.bind(this),
                                deletes: this.deleteTask.bind(this),
                                add: this.addTask.bind(this)
                            }}
        />
    }
}
export default KanbanBoardContainer;

