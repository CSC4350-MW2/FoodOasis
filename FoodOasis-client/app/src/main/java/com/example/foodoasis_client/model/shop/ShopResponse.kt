package com.example.foodoasis_client.model.shop

data class ShopResponse(
    val `data`: Data,
    val message: String,
    val status_code: Int,
    val success: Boolean
)