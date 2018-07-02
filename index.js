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
'use strict';

// [START functions_pubsub_setup]
const PubSub = require('@google-cloud/pubsub');

// Instantiates a client
const pubsub = PubSub();
// [END functions_pubsub_setup]

const Buffer = require('safe-buffer').Buffer;
/**
 * This application demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */
exports.listSubscriptions = (event, callback) => {
  const pubsubMessage = event.data;

  // We're just going to log the message to prove that it worked!
  console.log(Buffer.from(pubsubMessage.data, 'base64').toString());

  // Don't forget to call the callback!
  callback();
};
// exports.listSubscriptions = (req, res) => {
//   'use strict';
//   const PubSub = require(`@google-cloud/pubsub`);
//   const pubsub = new PubSub();
  
//   var topic = prompt("From what topic you want to list all the subscriptions?");
//   if (req.body.topic === undefined) {
//     res.status(400).send('No Topic defined!');
//     } 
//   else {
//     // Everything is ok
//   pubsub
//   .topic(topic)
//   .getSubscriptions()
//   .then(results => {
//     const subscriptions = results[0];
//     console.log(`Subscriptions for ${topicName}:`);
//     subscriptions.forEach(subscription => console.log(subscription.name));
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });
//   // console.log(req.body.topic);
//   res.status(200).end();
//   }
// }
