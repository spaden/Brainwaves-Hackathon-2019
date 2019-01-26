# Brainwaves-Hackathon-2019

Step 1: Create a database named stockdata

Step 2: Create a table named hgdata    
   
              Note: Please make sure that you create the database and table name as mentioned, in order to view the project as shown in the screen shots.

Step 3: Execute the following sql query in stockdata database

           create table hgdata (id int primary key auto_increment not null, data datatime not null, symbol varchar(40), open double, close double, low double, high double, volume double);



Step 4: Import the dumpfile csv data into mysql using the following query
    
                  load data infile 'D:/software/xampp/htdocs/Brainwaves/files/prices.csv' into table hgdata fields terminated by ',' lines terminated by '\n' (date, symbol, open, close, low, high, volume);
         
         Note: The above path is in reference to my project, it may wary how you proceed with the project.   The dump file is placed in Brainwaves/files/prices.csv   and also in dumpfile/prices.csv

         Note: For reference for the above step follow up this link for exact steps        'https://www.youtube.com/watch?v=1jvV_NYdAcQ'



Step 5: Just paste only the Brainwaves folder in xampp htdocs, since this project is done entirely using php, mysql and apache server.


        Note: Make sure that you paste only 'Brainwaves' folder into xampp/htdocs path. To view the project as it is.


Step 6: Type 'http://localhost/Brainwaves/' in your web browser after starting the apache and mysql server. Since the provided data is enormous in size, the webpage may take a couple of seconds to fetch and display the stock data.



Step 7: Click in the list of companies or just search for a particular one of your choice. 



Step 8: Immediately after that you will see the overall data of the selected company from 2005 - 2016 in a graph. 



Step 9: To get a clear inference of the company on a particular date, select from the provided list below to view and analyze the data on that specific date.



Step 10: Thanks for viewing my project.




             Skills used: Html, Css, JavaScript, Bootstrap, AngularJs, Php, MySql

             Incase any trouble viewing the project please see the video provided in the project folder. It contains the entire working of the project.
