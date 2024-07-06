const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:sss')}`;
  const logItem = `${dateTime} \t${uuid()}\t${message}`;
  console.log(logItem);

  try {
    await fsPromises.appendFile(path.join(__dirname, 'logss', 'eventLog.txt'), logItem);

  } catch (err) {
    console.err(err);
  }
};

module.exports = logEvents;