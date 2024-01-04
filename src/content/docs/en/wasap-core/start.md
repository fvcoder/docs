---
title: wasap-core
template: doc
---
It is a toolkit designed for [wasap-bot](https://www.npmjs.com/package/wasap-bot), with potential applications in various chatbot projects.

## Installation
```bash
npm install wasap-core
```

## Usage
The library utilizes conversation flows, which can be stored in memory or a database based on your preference.

Initialize the library by importing the `Flow` class:

```typescript
import { Flow } from "wasap-core"

const f = new Flow()
```

Adding a flow is achieved by invoking `addKeyword`:

```typescript
const flow1 = f.addKeyword({
    action: ['ping'] // required
})
// ... (output details)

```

To add a response, use `addAnswer`:

```typescript
f.addAnswer(flow1.uid, {
    action: ['pong'] // required
})
// ... (output details)
```

Retrieve the conversation flow with `getObject`:

```typescript
f.getObject(flow1.uid)
// ... (output details)
```

## Tips
1. Extend the class for customization.
2. For dynamic bot behavior, use the `callback` from `answerCtx` to redirect between flows using the `uid`.
3. Consider implementing a database to store conversation flows.

**Database Example:**

|  id  | data | type | hash | hashParent |
| ---- | ---- | ---- | ---- | ---------- |
|   1  | "{ 'action:' [ 'ping' ]...}"  | "keyword"  | "947263..." |  |
|   2  | "{ 'action:' [ 'pong' ]...}"  | "answer"   | "64cebd..." | "947263..." |
