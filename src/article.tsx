import { Component, h } from 'preact';

export class Article {
  title:string = "Lab Mice Strike"
}

export class Co extends Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <p>hello</p>
      <p>world</p>
    </div>
  }
}
