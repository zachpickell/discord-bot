const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    console.log(`Logged in as ${client.user.tag}`);
    // Bulk overwrite: adds new, updates changed, and removes deleted commands globally.
    const registered = await client.application.commands.set(client.commands.map(c => c.data));
    console.log(`Registered ${registered.size} slash commands.`);
  },
};
