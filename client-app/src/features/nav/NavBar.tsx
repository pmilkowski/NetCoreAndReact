import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import ActivityStore from '../../app/stores/activityStore'

const NavBar: React.FC = observer(() => {
  const activityStore = useContext(ActivityStore);
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: '10px' }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name='Activities' />
        <Menu.Item>
          <Button onClick={activityStore.openCreateForm} positive content='Create activity' />
        </Menu.Item>
      </Container>
    </Menu>
  );
});

export default NavBar;
