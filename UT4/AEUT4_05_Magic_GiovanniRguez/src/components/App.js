import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import getCard from "../services/FetchData";

class App extends Component {
    constructor() {
        super();
    }

    state = {
        cardList: [],
        cardName: "",
        cardImage: "",
    };

    async component() {
        const cardList = await getCard();
        this.cardListCopy = cardList;
        this.setState({
            cardList: cardList
        });
    }

    async onPageChanged(data) {
        const { currentPage } = data;
        const cardList = await getCard(currentPage);
        this.setState({currentPage, cardList});
    }

    render() {
        const {cardList, cardName, cardImage} = this.state;

        return(
            <Router>
                <div className="App">
                    <Route exact render={props => (
                        <div className="container main-content">
                            <div className="row">
                                div
                            </div>
                        </div>
                    )}/>
                </div>
            </Router>
        );
    }
}