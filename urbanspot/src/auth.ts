// src/auth.ts
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { 
  handlers,
  auth,
  signIn, 
  signOut 
} = NextAuth({
  providers: [
    // ¡COMENTA ESTA LÍNEA!
    /*
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    */
  ],
  pages: {
    signIn: "/login",
  },
});