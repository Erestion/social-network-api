# Installation

## Встановлення SDK
Для використання згенерованого клієнта у вашому TypeScript/JavaScript проєкті:

```bash
npm install ./generated-sdk

## Приклад ініціалізації
import { DefaultApi, Configuration } from "social-network-sdk";

const config = new Configuration({
  basePath: "[https://api.socialnetwork.com](https://api.socialnetwork.com)",
});

const api = new DefaultApi(config);