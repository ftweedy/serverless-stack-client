const config = {
  STRIPE_KEY: "pk_test_51JF64rHEWNxCw18v9KSWRriJ3xM761wWBEzcVqfxgicwO10uAEkaRxykOlgKo5Y72g6aoFFDNYyHBPC6EO3lkMgW00Kr1Krd91",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
      REGION: "us-east-1",
      BUCKET: "tweedy-notes",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://udoyqpowad.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_n3iSVYRBy",
      APP_CLIENT_ID: "15mqsh0qq0ldp4q6clfndiqmmm",
      IDENTITY_POOL_ID: "us-east-1:36b4bd30-077b-4f43-b9ac-f7a209c0bd0b",
    },
  };
  
  export default config;