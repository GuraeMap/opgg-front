import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import KaKaoProvider from "next-auth/providers/kakao"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.REACT_APP_GOOGLE_ID,
      clientSecret: process.REACT_APP_env.GOOGLE_KEY,
    }),
    KaKaoProvider({
        clientId: process.env.REACT_APP_KAKAO_ID,
        clientSecret: process.env.REACT_APP_KAKAO_KEY,
    }),
    GithubProvider({
        clientId: process.env.REACT_APP_GITHUB_ID,
        clientSecret:process.env.REACT_APP_GITHUB_KEY,
    }),
  ],
  secret : process.env.REACT_APP_SECRET_KEY
}
export default NextAuth(authOptions)