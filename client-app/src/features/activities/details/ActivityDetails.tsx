import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import ActivityStore from '../../../app/stores/activityStore';

const ActivityDetails: React.FC = observer((
) => {
  const activityStore = useContext(ActivityStore);
  const { activity, openEditForm, cancelSelectedActivity } = activityStore;
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity!.category}.png`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity!.title}</Card.Header>
        <Card.Meta>
          <span>{activity!.date}</span>
        </Card.Meta>
        <Card.Description>{activity!.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group>
          <Button
            onClick={() => openEditForm(activity!.id)}
            basic
            color='blue'
            content='Edit'
          />
          <Button
            onClick={() => cancelSelectedActivity()}
            basic
            color='grey'
            content='Cancel'
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
});

export default ActivityDetails;
