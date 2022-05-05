// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const mqtt = require('mqtt');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  const client  = mqtt.connect('mqtt://mqtt.polalab.me:1883');
 
//  function welcome(agent) {
//    agent.add(`Welcome to my agent!`);
//  }
 
//  function fallback(agent) {
//    agent.add(`I didn't understand`);
//   agent.add(`I'm sorry, can you try again?`);
//  }
  
  function openalllight(agent){
    agent.add(`ไฟเปิดหมดเเล้ว`);
	client.on('connect', function () {
  		client.subscribe('nonniceiblue', function (err) {
    	if (!err) {
      		client.publish('nonniceiblue', 'onall');
        }
      });
    });
  }
  
  function closealllight(agent) {
    agent.add(`ไฟปิดหมดเเล้ว`);
	client.on('connect', function () {
  		client.subscribe('nonniceiblue', function (err) {
    	if (!err) {
      		client.publish('nonniceiblue', 'offall');
        }
      });
    });
  }
  
  function onlight1(agent){
    agent.add(`ไฟห้องนอนเปิดเเล้ว`);
	client.on('connect', function () {
  		client.subscribe('nonniceiblue', function (err) {
    	if (!err) {
      		client.publish('nonniceiblue', 'on1');
        }
      });
    });
  }

  function onlight2(agent){
    agent.add(`ไฟห้องนั่งเล่นเปิดเเล้ว`);
	client.on('connect', function () {
  		client.subscribe('nonniceiblue', function (err) {
    	if (!err) {
      		client.publish('nonniceiblue', 'on2');
        }
      });
    });
  }
  
  function offlight1(agent){
    agent.add(`ไฟห้องนอนปิดเเล้ว`);
	client.on('connect', function () {
  		client.subscribe('nonniceiblue', function (err) {
    	if (!err) {
      		client.publish('nonniceiblue', 'off1');
        }
      });
    });
  }
  
  function offlight2(agent){
    agent.add(`ไฟห้องนั่งเล่นปิดเเล้ว`);
	client.on('connect', function () {
  		client.subscribe('nonniceiblue', function (err) {
    	if (!err) {
      		client.publish('nonniceiblue', 'off2');
        }
      });
    });
  }
  // // Uncomment and edit to make your own intent handler
  // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function yourFunctionHandler(agent) {
  //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
  //   agent.add(new Card({
  //       title: `Title: this is a card title`,
  //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
  //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
  //       buttonText: 'This is a button',
  //       buttonUrl: 'https://assistant.google.com/'
  //     })
  //   );
  //   agent.add(new Suggestion(`Quick Reply`));
  //   agent.add(new Suggestion(`Suggestion`));
  //   agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
  // }

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }
  // // See https://github.com/dialogflow/fulfillment-actions-library-nodejs
  // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  //intentMap.set('Default Welcome Intent', welcome);
  //intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('openalllight-intent', openalllight);
  intentMap.set('closealllight-intent', closealllight);
  intentMap.set('onlight1-intent', onlight1);
  intentMap.set('onlight2-intent', onlight2);
  intentMap.set('offlight1-intent', offlight1);
  intentMap.set('offlight2-intent', offlight2);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});