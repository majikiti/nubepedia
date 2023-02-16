import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import TwitterProvider from "next-auth/providers/twitter"

import prisma from "~/libs/db"

const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = Number(process.env.SMTP_PORT)
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const SMTP_ADDR = process.env.SMTP_ADDR

const TWITTER_CLIENT_ID = process.env.TWITTER_CLIENT_ID
const TWITTER_CLIENT_SECRET = process.env.TWITTER_CLIENT_SECRET

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    TwitterProvider({
      clientId: TWITTER_CLIENT_ID,
      clientSecret: TWITTER_CLIENT_SECRET,
      version: "2.0",
    }),
    EmailProvider({
      server: {
        host: SMTP_HOST,
        port: SMTP_PORT,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      },
      from: SMTP_ADDR,
    }),
  ],
}

export default NextAuth(authOptions)
