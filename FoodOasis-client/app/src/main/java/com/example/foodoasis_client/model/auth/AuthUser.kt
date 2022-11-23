package com.example.foodoasis_client.model.auth

data class AuthUser(
    val `data`: Data?,
    val message: String,
    val status_code: Int,
    val success: Boolean,
)