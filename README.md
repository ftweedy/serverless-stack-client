# A Serverless Web App

This project was created following the tutorial on the [Serverless-Stack](https://docs.serverless-stack.com/installation) website.  The tutorial results in a fully functional and public serverless website that has dabase connections, full CRUD operations and user authentication and account creation. \

I built the app using AWS Cognito, Lambda, S3, and DynamoDB for the back-end.  I used Javascript with React for the front, connecting it to the API endpoints for the Lambda functions.  I also connected Stripe for the payment processing, updating the old instructions from Serverless-Stack that don't work for React 7.0 and later.  This required me to [migrate](https://github.com/stripe/react-stripe-js/blob/master/docs/migrating.md) the old code I already had.\

Finally, this repository is only for the front-end.  The code for the back-end is in [serverless-stack-api](https://github.com/ftweedy/serverless-stack-api).  That code contains the instructions for AWS CLoudFormation to build out the back-end.  The process is started with the 'serverless-deploy' command.