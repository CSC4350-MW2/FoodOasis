package com.example.foodoasis_client.model.shops

data class Address(
    val city: String,
    val country: String,
    val createdAt: String,
    val id: String,
    val shopId: String,
    val state: String,
    val street: String,
    val updatedAt: String,
    val zipCode: Int
)