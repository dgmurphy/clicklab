import React, { Component } from 'react';
import { Button, TextArea } from "@blueprintjs/core";
import autobind from 'react-autobind';


class App extends Component {

  constructor(props) {

    super(props)
    autobind(this);

    this.state = { 
      postText: "Post this text.",
      responseFromPost: "No response yet",
      responseFromGet: "No response yet."
    }

    
  }

 
  componentDidMount() {
    console.log("component did mount")
  }


  handlePostResponse(data) {
   
    this.setState({responseFromPost: data.text})

    let jsonStr = JSON.stringify(data)
    console.log(jsonStr)

  }


  testPost() {

    let payload = { 'text': this.state.postText }
    let jsonStr = JSON.stringify(payload)

    let self = this

    fetch('/test-post', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: jsonStr})
      .then((res) => res.json())
      .then((data) => self.handlePostResponse(data))
      .catch((err) => console.log(err))    
  }


  onInputChange(textContent) {

    this.setState({ postText: textContent.target.value })

  } 



  handleGetResponse(data) {
   
    this.setState({responseFromGet: data.text})

    let jsonStr = JSON.stringify(data)
    console.log(jsonStr)

  }


  testGet() {

    let self = this

    let endpoint = '/test-get'
    let queryParam1 = 'hello'
    let queryParam2 = 'there'
    let url = endpoint + "?param1=" + queryParam1 +
      "&param2=" + queryParam2

    fetch(url)
      .then((res) => res.json())
      .then((data) => self.handleGetResponse(data))
      .catch((err) => console.log(err))    

  }


  render() {
    return (
      <div className="app">

        <div className="posttext">
            <TextArea fill={false} 
              onChange={this.onInputChange} 
              value={this.state.postText} 
              rows={1} cols={20}
            />
        </div>

        <div>
          <Button onClick={this.testPost}> Post It</Button>
        </div>

        <div className="response">
          Response:
          <p>{this.state.responseFromPost}</p>
        </div>

        <br/>

        <div>
          <Button onClick={this.testGet}> Get It</Button>
        </div>

        <div className="response">
          Response:
          <p>{this.state.responseFromGet}</p>
        </div>


      </div>
    )
  }
}

export default App;
