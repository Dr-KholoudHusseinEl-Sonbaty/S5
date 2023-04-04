const yargs = require('yargs');
const user = require('./modules/user');

yargs
  .usage('$0 <command> [options]')
  .command({
    command: 'add',
    describe: 'Add a new user',
    builder: {
      id: { demandOption: true, type: 'number', describe: 'User ID' },
      name: { demandOption: true, type: 'string', describe: 'User name' },
      email: { demandOption: true, type: 'string', describe: 'User email' },
      age: { demandOption: true, type: 'number', describe: 'User age' },
      phone: { demandOption: true, type: 'string', describe: 'User phone' }
    },
    handler: (argv) => {
      user.addUser(argv);
    }
  })
  .command({
    command: 'delete',
    describe: 'Delete a user',
    builder: {
      id: { demandOption: true, type: 'number', describe: 'User ID' },
    },
    handler: (argv) => {
      user.deleteOneUser(argv.id);
    }
  })
  .command({
    command: 'edit',
    describe: 'Edit a user',
    builder: {
      id: { demandOption: true, type: 'number', describe: 'User ID' },
      name: { type: 'string', describe: 'User name' },
      email: { type: 'string', describe: 'User email' },
      age: { type: 'number', describe: 'User age' },
      phone: { type: 'string', describe: 'User phone' }
    },
    handler: (argv) => {
      user.editUser(argv);
    }
  })
  .command({
    command: 'list',
    describe: 'List all users',
    handler: () => {
      user.showAllUsers();
    }
  })
  .command({
    command: 'clear',
    describe: 'Delete all users',
    handler: () => {
      user.deleteAllUsers();
    }
  })
  .help()
  .alias('help', 'h')
  .interactive();

