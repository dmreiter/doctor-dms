# doctor-dms
DeltaHacks IV project. Made by Damian Reiter, Jay Shrivastava, Alexander Egorov, and Jason Xian.

Built using stdlib API, apimedic API and Vue.js. Built three seperate services, "messaging", "doctor" and "deltahacks" to create a service where users can text a number and recieve medical data based on symptoms they input. Additionally, a URL to a webpage containing more detailed data is returned to the user.

In order to use, text the messenger bird number any of these commands (without the square brackets, but with commans between symptoms):

Diagnosis [age] [gender] [symptom],[symptom] -> returns data about given symptoms and possible illness
Treat [illness] -> returns data about how to treat given illness
Describe [illness] -> returns data about related symptoms about illness for better self-diagnosis