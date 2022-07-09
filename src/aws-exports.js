/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": import.meta.env.VITE_POOL_ID,
    "aws_user_pools_web_client_id": import.meta.env.VITE_CLIENT_POOL_ID,
    "oauth": {
        "domain": "ixjlyupy1m-6rdmomtmcau7muhjatgibipfp5.auth.us-east-1.amazoncognito.com",
        "scope": [
            "aws.cognito.signin.user.admin",
            "email",
            "openid",
            "profile"
        ],
        "redirectSignIn": "SATSAPPNAME://",
        "redirectSignOut": "SATSAPPNAME://",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "NAME"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": [
            "REQUIRES_LOWERCASE",
            "REQUIRES_UPPERCASE",
            "REQUIRES_NUMBERS",
            "REQUIRES_SYMBOLS"
        ]
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;
