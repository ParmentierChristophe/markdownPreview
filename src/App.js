import React, {Component} from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: "",
        }
    }

    handleChange(event) {
        this.setState({markdown: marked(event.target.value)})
    }


    render() {
        return (
            <div className="App">
                <div className="markdown-window">

                    <textarea onChange={this.handleChange.bind(this)} className="markdown-editor common-rules-cell"
                              name="" id="" defaultValue="# "></textarea>

                    <div className="markdown-preview common-rules-cell">
                        <div dangerouslySetInnerHTML={{__html: this.state.markdown}}>

                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }
}

export default App;
