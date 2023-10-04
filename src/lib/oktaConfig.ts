export const oktaConfig = {
    clientId: "0oabmvp86t6q9DG8q5d7",
    issuer: "https://dev-85965405.okta.com/oauth2/default",
    redirectUri: "https://localhost:3000/login/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: true,
}