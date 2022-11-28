package com.example.foodoasis_client.model.shop

data class Shop(
    val address: Address,
    val category: Category,
    val contact: Contact,
    val gps: Gps,
    val id: String,
    val name: String
)