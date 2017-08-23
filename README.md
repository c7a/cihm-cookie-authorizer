# cihm-cookie-authorizer

cihm-cookie-authorizer validates C7A2 JWTs and passes them into a cookie. This allows services at a particular domain to grant access to pre-approved requests.

## Configuration

The service currently expects a `config.json` file in the root directory, with the following contents:

    {
        "secrets": {"$SECRET_KEY_ID": "$SECRET_KEY"}
    }
