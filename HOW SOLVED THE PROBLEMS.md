# Solution
- I used Fedora 21 as OS in my computer
- Used the terminal to enter the server IP and the initial port 8080
- Server did not wanted to start. In bin folder, i modified the file check_java.sh using vim as editor to change it in order to accept openjdk version and java version as well. I initialized the _RUNJAVA variable because wasn`t initialized originally
- Server started correctly with sh start-jira.sh command
- Configuring the ip and jira in my browser didn't work because database issues, actually, had a permissions problem in database folder, i changed the permissions to public with the command chmod 777 -R /home/test-user/jira/jira_home/database
- Restarted the server and everything worked sucessfully
- Changed the port of the server going to conf folder, in the file server.xml is changed the port to 8081
- Changed the heap size to 2048 M (2GB) with the command export CATALINA_OPTS "-Xms512M -Xmx2048M"

-APP

- To get the app jirarestapi up and running in the port 3000, i got problems due to lack of modules and dependencies, i installed them using npm
install, the needed dependencies and modules were the following:
- Express
- React
- React-Dom
- Request
- Body-parser
- I modified the file index.js in order to listen from the port 3021 instead of 3000, as requested
- I modified the index.js file in the folder public/javascript changing the URL from
url:"http://localhost:3000/ok" to
 url:"/ok"

- After this change the search worked as expected.

-SERVER AND APP ROUTES
- SERVER: http://104.198.143.16:8081/secure/RapidBoard.jspa?rapidView=1&projectKey=TP
- APP: http://104.198.143.16:3021/
