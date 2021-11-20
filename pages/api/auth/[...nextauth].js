import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  providers: [
    // OAuth authentication providers
  
    Providers.Google({
      clientId: '318472078169-4nek0u7u1dj9crne2etubprsafasqb2g.apps.googleusercontent.com',
      clientSecret: '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',
    }),
   
  ],

})