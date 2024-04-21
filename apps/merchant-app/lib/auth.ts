import GoogleProvider from "next-auth/providers/google";
import db from "@repo/db/client";

export const authoptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    callbacks: {
      async signIn({ user}: {
        user: {
          email: string;
          name: string
        },
      }) {
        if (!user || !user.email) {
          return false;
        }

        await db.merchant.upsert({
          select: {
            id: true
          },
          where: {
            email: user.email
          },
          create: {
            email: user.email,
            name: user.name,
            auth_type: "Google" 
          },
          update: {
            name: user.name,
            auth_type: "Google" 
          }
        });

        return true;
      }
    },
    secret: process.env.NEXTAUTH_SECRET || "secret"
  }