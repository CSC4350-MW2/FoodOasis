package com.example.foodoasis_client.model.shops

data class ShopsList(
    val `data`: Data,
    val message: String,
    val status_code: Int,
    val success: Boolean
)