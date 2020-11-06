import { action, makeAutoObservable } from "mobx";
import { createContext } from "react";
import agent from "../api/agent";
import { IActivity } from "../models/activity";

class ActivityStore {
  activities: IActivity[] = [];
  loadingInitial = false;
  selectedActivity: IActivity | undefined;
  editMode = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action loadActivities = async () => {
    this.loadingInitial = true;
    try {
      const activities = await agent.Activities.list();
      activities.forEach((activity) => {
        activity.date = activity.date.split(".")[0];
        this.activities.push(activity);
      });
    } catch (error) {
      console.log(error);
    }
    this.loadingInitial = false;
  };

    agent.Activities.list()
      .then((activities) => {
        activities.forEach((activity) => {
          activity.date = activity.date.split(".")[0];
          this.activities.push(activity);
        });
      })
      .finally(() => (this.loadingInitial = false));
  };

  @action selectActivity = (id: string) => {
    this.selectedActivity = this.activities.find(
      (activity) => activity.id === id
    );
    this.editMode = false;
  };
}

export default createContext(new ActivityStore());
