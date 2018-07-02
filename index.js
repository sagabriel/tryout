/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This application demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

'use strict';
  // [START pubsub_list_subscriptions]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);
  // Creates a client
  const pubsub = new PubSub();
  var topic = prompt("From what topic you want to list all the subscriptions?");
exports.listSubscriptions = (req, res) => {
  if (req.body.topic === undefined) {
    res.status(400).send('No Topic defined!');
    } 
  else {
    // Everything is ok
  pubsub
  .topic(topic)
  .getSubscriptions()
  .then(results => {
    const subscriptions = results[0];
    console.log(`Subscriptions for ${topicName}:`);
    subscriptions.forEach(subscription => console.log(subscription.name));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
  console.log(req.body.topic);
  res.status(200).end();
  }
}
