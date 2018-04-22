# Skincare Look Up Website Server

Back-End is implemented in Node.js and designed as RESTful API, which means it sends JSON objects as response to clients instead of HTML content. Server is deployed on an AWS EC2 Linux instance. Its function is very simple that it searches the products in the database and return the target products which containing the user specified content in its name and brand field.

The server mainly consists of three parts, model, controller and router. Details are shown below.

### Model

Model defines the data structure of a product that is consistent with the object in database, and used to communicate with the database. It also has the same attributes as the item in web crawler project.

### Controller

Controller is responsible for fetching data from thedatabase. There are two functions in it, one is for fetching product information and another one is used to return the numberof products found. 

Controller is designed to return at most 60 items a timewhich is the maximum number of products displayed on a page. To implementpagination, it receives an integer as parameter which represents the pagenumber, and when query the database it skips first 60*page number items toreturn the corresponding products to the clients.

### Route

In router, it exposes two API corresponding to the towfunctions in controller. 

Because the communication between client and server is through Ajax (Asynchronous JavaScript and XML), which does not allow cross origin accessing, while origin is defined as the combination of protocol, domain and port number. An important function implemented in router module is that it adds CORS (Cross-Origin Resource Sharing) header to the response to enable data accessing from other sources, since front-end is not hosted in the same domain. 