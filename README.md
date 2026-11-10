# discord-bot

A discord.js bot with dynamic command and event loaders. Slash commands register themselves on startup, so there's no separate deploy step and the bot works in every server it joins.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Copy `.env.example` to `.env` and add your bot token:
   ```sh
   cp .env.example .env
   ```
   ```
   DISCORD_TOKEN=your-token-here
   ```
3. Start the bot:
   ```sh
   npm start
   ```

On startup the bot logs in and registers every command globally. Command changes can take up to an hour to appear in Discord.

## Project structure

```
src/
  index.js                     # creates the client, loads commands/ and events/, logs in
  commands/                    # one file per slash command
    ping.js                    # example: /ping
  events/                      # one file per gateway event
    ready.js                   # registers slash commands on startup
    interactionCreate.js       # dispatches commands, reports errors
```

## Adding a command

Drop a file in `src/commands/` that exports `data` (a `SlashCommandBuilder`) and an `execute` function:

```js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('hello').setDescription('Say hello'),
  async execute(interaction) {
    await interaction.reply('Hello!');
  },
};
```

## Adding an event

Drop a file in `src/events/` that exports `name`, an optional `once`, and an `execute` function:

```js
const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    // ...
  },
};
```
