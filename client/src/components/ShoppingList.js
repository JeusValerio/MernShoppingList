import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux';
import { getItems, deleteItem } from '../actions/ItemAction';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }
    
    render() {
        const { item } = this.props;    
        return (
            <Container>
                <Button
                    color="dark"    
                    style={{ marginBottom: '2rem' }}	
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if (name) {
                            this.setState(state => ({
                                item: [...state.item, { id: uuidv4(), name }]
                            }));
                        }
                    }}
                >
                    Add Item
                </Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {item.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                   <Button
                                   className="remove-btn"
                                   color="danger"
                                   size = "sm"
                                   onClick={this.onDeleteClick.bind(this, id)}
                                   >
                                    &times;</Button> 
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.array.isRequired
}   

const mapStateToProps = (state) => ({
    item: state.item.item
});

export default connect (mapStateToProps, { getItems, deleteItem })(ShoppingList);
