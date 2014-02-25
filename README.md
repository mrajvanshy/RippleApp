RippleApp
=========
I decided to make an application that a user can directly into an API call into and can get a response back from the Ripple Network. This can be useful for users to get any information they need from the network. 

My app works specifically well if a user wants to get the dates of the most recent transactions or the ledger hash. I thought it would be interesting information to be able to tell how many transactions have been completed since a user logs into the network so this count is displayed as well. To take this further, I wanted to display this information into a calendar view using D3 to show the number of transactions that took place everyday. 

Method to Approaching the Problem:
Since this was my first time programming in Javascript, I first learnt the basics and how to connect it to the views in html. I then learnt how to connect to the Ripple network to be able to get live network updates. The api calls can be inputted directly be a user into my application. To incorporate my idea, I needed to keep a count of all the transactions being made since the user opened the network. 

Some of my other initial ideas:
1.) Use the transaction hash to get the account info and figure out the ip that the transaction originated from. Then we could display live updates of the transactions coming in and display them on the map as well to show where transactions are coming from. 

2.) When a customer is making a transaction, give them up-to-date information as to useful items they could buy on amazon.com or some other site as a fun sort of way of showing them how much their money is worth.

3.) Have a live display as to how the different currency exchanges are fluctuating throughout the day and have a graph to display how this has changed over time.


