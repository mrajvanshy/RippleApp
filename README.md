RippleApp
=========
I decided to make an application that a user can directly input an API call into and can get a response back from the Ripple Network. This can be useful for users to get any information they need from the network without extra programming. 

My app has special functionality for 2 commands: subscribe and ledger. If the user inputs the command: subscribe, they will get the ledger hash of the most recent transactions. Instead of parsing through the entire object returned, I thought this information would be useful for a user to get more information about that transaction. If the user inputs the command: ledger, they will get the date at which the most recent transaction took place and the number of transactions that had occurred since they opened the connection. To take this further, I wanted to display this information into a calendar view using D3 to show the number of transactions that took place everyday, but given the limited amount of time, I wasn't able to incorporate this. For all other API commands, the output will be the full object that is supposed to be returned. 

In following the angularjs framework: the controller of my application is called maincontroller.js and the view is controlled by index.html. 

Method to Approaching the Problem:
Since this was my first time programming in Javascript, I first learnt the basics and how to connect it to the views in html. I even learnt the angularjs framework to use in my app. I then learnt how to connect to the Ripple network to be able to get live network updates. The api calls can be input directly by a user into my application. To incorporate my idea, I needed to keep a count of all the transactions being made since the user opened the network. I stored this information into a list and it is displayed when a transaction has been made. 

Some of my other initial ideas:
1.) Use the transaction hash to get the account info and figure out the ip that the transaction originated from. Then we could display live updates of the transactions coming in and display them on the map as well to show where transactions are coming from. Even in this idea, I saw that I could use a D3 display to show a map of the world. 

2.) When a customer is making a transaction, give them up-to-date information as to useful items they could buy on amazon.com or some other site as a fun sort of way of showing them how much their money is worth.

3.) Have a live display as to how the different currency exchanges are fluctuating throughout the day and have a graph to display how this has changed over time.


