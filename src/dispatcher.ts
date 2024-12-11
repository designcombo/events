import { Subject } from "rxjs";
import { Dispatcher, EventBusData, DispatcherReturnType } from "./types";

let dispatcherInstance: DispatcherReturnType | null = null;

function createDispatcher(): DispatcherReturnType {
  if (!dispatcherInstance) {
    const subject = new Subject<EventBusData>();
    const dispatch: Dispatcher = (key, value) => subject.next({ key, value });
    dispatcherInstance = { subject, dispatch };
  }
  return dispatcherInstance;
}

export const { subject, dispatch } = createDispatcher();
export { filter } from "rxjs";
