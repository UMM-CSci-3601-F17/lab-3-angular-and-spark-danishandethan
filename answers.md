# Answers
1. Notice anything new in our `.gitignore`? There are actually multiple `.gitignore` files in this project. Where are they? Why might we have more than one, and how do they interact?
   - The first big visible thing is that there are now 3 `.gitignore` files
   - In the `.gitignore` that is outside of the client and server files there are some things that are no longer blocked including:CMake, Mongo, and Sensitive or high-churn files
   - We think the `.gitignore` within the client file only effects files within the client file, it will not effect the server
   - We think the `.gitignore` within the server file only effects files within the server file, it will not effect the client
2. Note also that there are now multiple build.gradle files as well! Why is this?  
   - We think that there are multiple `build.gradle` files to run different ends of the project
   - There is one dedicated to client side and server side
   - The one that is outside of the client and server files will build both of them
   - The one outside of the client and server is able to run any of the tests specified in either the client or server `build.gradle` files.
   - The `build.gradle` file within the server will run server specific tests
   - The `build.gradle` file within the client will run client specific tests
3. How does the navbar work in this project? Is our SparkJava server the only thing doing routing?
   - The navbar in this project works specifically through the client side of the project
   - The server is not the only thing doing the routing, if the server is off you can still use the website from the client side but it will not be able to get any data from the server.
   - The client side routing is limited though as it does not receive any data from the database but does have an error message if the server is offline.
4. What does the `user-list.service.ts` do? Why is it not just done in the `user-list.component.ts`?
   - `user-list.service.ts` sends a request to the server for all the users or a user with a specific id
   - It is not done in `user-list.component.ts` in the case that we do not want to filter any of the users.
