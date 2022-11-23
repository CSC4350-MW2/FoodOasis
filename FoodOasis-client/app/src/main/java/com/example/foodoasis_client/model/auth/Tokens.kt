package com.example.foodoasis_client.model.auth

data class Tokens(
    val accessToken: String,
    val expiresAt: String,
    val refreshToken: String,
    val tokenType: String
)