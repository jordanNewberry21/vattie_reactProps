// imports
import { Component } from 'react';
// class
class MoodList extends Component {
    render() {
        return(
            <div>
                <h2>
                    hello from MoodList component
                </h2>
                <p>
                    Mood List props: {JSON.stringify(this.props)}
                </p>
            </div>
        ); // end return
    } // end render
} // end class

// export
export default MoodList;