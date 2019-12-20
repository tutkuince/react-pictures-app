import React from "react";
import axios from 'axios';

import SearchBar from "./SearchBar";


class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID 177b21be1c6a9b01f891a40839c277ebb078e69f54e983039da392a8757969d1'
            }
        }).then((response) => {
            console.log(response.data.results);
        });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;