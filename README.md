# GENERIC CRUD LIST

## Project Goal
Make a project that allows you to enter and rate books you've read. You can also edit the entries you have made, as well as delete them. This is the essential function of a CRUD app. 

Using state to track the info you're entering, we will then POST the information to an API we've made in AWS.

The API will consist of an API Gateway that is proxying a lambda script, this lambda script will enter the data into DynamoDB. 

Eventually I will add unit tests into this project.
