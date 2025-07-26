import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema ( {
  BucketItem: a 
    .model ( {
      title: a.string(),
      description: a.string(),
      image: a.string(),
    } )
    .authorization((allow) => [allow.owner()])
});

// only the user who created the item can read or write it
export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
