# @designcombo/events

A lightweight, RxJS-powered event bus system for JavaScript and TypeScript applications.

## Features

- 🚀 Built on RxJS for powerful reactive programming
- 💪 TypeScript support out of the box
- 🎯 Simple API with EventEmitter pattern
- 📦 Tree-shakeable and lightweight
- 🔄 Universal module support (ESM and UMD)

## Installation

```bash
npm install @designcombo/events

```

## Usage

```ts
import { dispatch, subject, filter } from "@designcombo/events";

// Subscribe to specific events
subject
  .pipe(filter((event) => event.key === "notification"))
  .subscribe((event) => {
    console.log("Notification received:", event.value);
  });

// Dispatch events
dispatch("notification", { message: "Hello World!" });
```

## License

MIT © [Design Combo](https://github.com/designcombo)
