// src/auth.ts
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { 
  handlers, // Esto es para tus rutas API (ej. /api/auth/...)
  auth,     // Esta es la función que usará el middleware
  signIn, 
  signOut 
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  

  pages: {
    signIn: "/login",
  },
});