#Hosted on https://connermosterthit238.glitch.me/
View Code : https://glitch.com/edit/#!/connermosterthit238?path=Index.js%3A1%3A0 (Note: Open this link first to activate the service, then you can visit the site)

# Conner_Mostert_HIT238
Application design for HIT238
Basic structure and functionality implemented in MVP with data being saved in JSON format. Information upload to Server hosting database is still required in future design. More HTML and CSS to be added later to improve the apearance of the App. 
The current code only covers the Client side of the application. Server side Javascript is still required to fetch the data, manage and store the Data.

Dependancies:
fs (npm install fs): file manager to allow saving to the database from the server
express (npm install express): Allow comunication between client and server.

Node:
To run server open powershell in the folder location> command: node Index.js> this will start the server and show which port it is broadcasting from
In your browser search: 127.0.0.1:3000> 3000 is the port the server is currently broadcasting from.

Excel file:
To create the excel table first open the Database.json file then add ] at the end to close the datablock and save.
>Open Excel > click Data in the top Ribbon > Select GEtData > From File > From JSON > Select database.JSON from file explorer > Select ToTable >
Keep settings and click Ok> in colom 1 click the arrows that point both ways > Make sure all fields are selected and click Ok > Select Transform from the top Ribbon and click DetectDataType > Select Home in the ribbon and click LoadTable > 
In the top row of the new table select the first row number values from Worability to Presentation then Click AutoSum in the Ribbon >
In Sheet 1 select Insert then Pivot table from the Ribbon > In select table field enter database and click ok > In the pivot table Menu drag 
Teamname to Rows then select every other field except Username. Pivot table is created and shows the Results from the judging 

