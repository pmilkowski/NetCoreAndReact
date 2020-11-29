import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import ActivityDetails from '../details/ActivityDetails';
import { ActivityForm } from '../form/ActivityForm';
import ActivityList from './ActivityList';
import ActivityStore from '../../../app/stores/activityStore';

const ActivityDashboard: React.FC = observer(() => {
  const activityStore = useContext(ActivityStore);
  const { editMode, selectedActivity, deleteActivity, submitting, target } = activityStore;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
          deleteActivity={deleteActivity}
          submitting={submitting}
          target={target}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !editMode && (
          <ActivityDetails />
        )}
        {editMode && (
          <ActivityForm
            key={(selectedActivity && selectedActivity.id) || 0}
            activity={selectedActivity!}
          />
        )}
      </Grid.Column>
    </Grid>
  );
});

export default ActivityDashboard;
