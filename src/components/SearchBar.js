import React from 'react';

class SearchBar extends React.Component {

    onInputChange(event) {
        console.log(event.target.value);
    }

    // this.onInputChange() -> this method will be called when component is rendered.
    // if we don't want to do this, we should use it without parentheses
    render() {
        return (
            <div className="ui segment">
                <form action="" className="ui form">
                    <div className="field">
                        <label htmlFor="search">Image Search</label>
                        <input type="text"
                               onChange={this.onInputChange}
                               name="search"
                               id="search"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;