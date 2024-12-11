import { Subject } from "rxjs";

export type EventBusData = {
  key: string;
  value?: {
    payload: any;
    options?: any;
  };
};

export type Dispatcher = (
  key: string,
  value?: {
    payload: any;
    options?: any;
  }
) => void;

export interface DispatcherReturnType {
  subject: Subject<EventBusData>;
  dispatch: Dispatcher;
}
