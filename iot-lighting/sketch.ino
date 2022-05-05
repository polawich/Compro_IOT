#include "WiFi.h"
#include <PubSubClient.h>

const char* ssid = "Wokwi-GUEST";
const char* password = "";
const char* mqtt_server = "mqtt.polalab.me";

WiFiClient espClient;
PubSubClient client(espClient);
long lastMsg = 0;
char msg[50];
int value = 0;

void setup_wifi() {

  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  randomSeed(micros());

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  // Function เปิดปิดไฟตามเเต่ละห้อง
  }
  Serial.println();
  //เปิดไฟห้องนั่งเล่น (on1)
  if ((char)payload[0] == 'o' && (char)payload[1] == 'n' && (char)payload[2] == '1') { 
    digitalWrite(5, HIGH); 
  } //ปิดไฟห้องนั่งเล่น (off1)
  else if ((char)payload[0] == 'o' && (char)payload[1] == 'f' && (char)payload[2] == 'f' && (char)payload[3] == '1') {
    digitalWrite(5, LOW);
  }
  //เปิดไฟห้องนอน (on2)
  if ((char)payload[0] == 'o' && (char)payload[1] == 'n' && (char)payload[2] == '2') {
    digitalWrite(2, HIGH); 
  }//ปิดไฟห้องนอน (off2)
  else if ((char)payload[0] == 'o' && (char)payload[1] == 'f' && (char)payload[2] == 'f' && (char)payload[3] == '2') {
    digitalWrite(2, LOW);
  }//เปิดไฟทุกดวง (onall)
  if ((char)payload[0] == 'o' && (char)payload[1] == 'n' && (char)payload[2] == 'a' && (char)payload[3] == 'l'&& (char)payload[4] == 'l') {
    digitalWrite(5, HIGH); 
    digitalWrite(2, HIGH); 
  }//ปิดไฟทุกดวง (offall)
  else if ((char)payload[0] == 'o' && (char)payload[1] == 'f' && (char)payload[2] == 'f' && (char)payload[3] == 'a' && (char)payload[4] == 'l' && (char)payload[5] == 'l') {
    digitalWrite(5, LOW); 
    digitalWrite(2, LOW); 
  }

}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    String clientId = "ESP8266Client-145212";
    clientId += String(random(0xffff), HEX);
    if (client.connect(clientId.c_str())) {
      Serial.println("connected");
      client.publish("nonniceiblue", "hello world from wokwi");
      client.subscribe("nonniceiblue");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void setup() {
  pinMode(5, OUTPUT); //outputห้องนั่งเล่น
  pinMode(2, OUTPUT); //outputห้องนอน
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883); //port เชื่อม mqtt
  client.setCallback(callback);
}

void loop() {

  if (!client.connected()) {
    reconnect();
  }
  client.loop();
}