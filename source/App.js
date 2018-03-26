/**
 * Created by msi on 2018/1/12.
 */
import React from 'react';
import KanBanBoardContainer from './KanbanBoardContainer';


// let cardsList = [
//     {
//         id:1,
//         title:"Read the Book",
//         description:"I shoule read the **whole** book",
//         color:'#BD8D31',
//         status:"in-progress",
//         tasks:[]
//     },
//     {
//         id:2,
//         title:"Write some code Code </br>along with the samples in the book.The complete source",
//         description:"Code along with the samples in the book.The complete source </br>" +
//         "can be found at [github](https://github.com/pro-react)",
//         color:'#3A7E28',
//         status:"todo",
//         tasks:[
//             {
//                 id:1,
//                 name:"ContactList Example",
//                 done:true
//             },
//             {
//                 id:2,
//                 name:"Kanban Example",
//                 done:false
//             },
//             {
//                 id:3,
//                 name:"My own experiments",
//                 done:false
//             }
//         ]
//     }
// ];

React.render(<KanBanBoardContainer />,document.getElementById("root"));
// class GroceryList extends React.Component {
//     render() {
//         return (
//             <ul>
//                 <ListItem quantity="1" name="Bread"></ListItem>
//                 <ListItem quantity="6" name="Eggs"></ListItem>
//                 <ListItem quantity="2" name="Mile"></ListItem>
//             </ul>
//         )
//     }
// }
//
// class ListItem extends React.Component{
//     render(){
//         return(
//             <li>
//                 {this.props.quantity}*{this.props.name} --{this.props.children}
//             </li>
//         )
//     }
// }
//
// React.render(<GroceryList />,document.getElementById('root'));
