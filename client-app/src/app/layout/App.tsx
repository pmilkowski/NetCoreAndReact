import React, { Component } from 'react';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';

class App extends Component {
  state = {
    activities: [],
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/activities').then((response) => {
      this.setState({
        activities: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          NetCore and React
          <Header.Subheader>
            Manage your account settings and set e-mail preferences.
          </Header.Subheader>
        </Header>
        <List>
          {this.state.activities.map((activity: any) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
