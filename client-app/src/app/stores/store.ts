import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommondStore from "./commondStore";

interface Store {
    activityStore: ActivityStore;
    commonStore: CommondStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommondStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}