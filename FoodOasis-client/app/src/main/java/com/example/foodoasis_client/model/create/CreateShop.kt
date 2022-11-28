package com.example.foodoasis_client.model.create

data class CreateShop(
    val address: Address,
    val category: Category,
    val contact: Contact,
    val gps: Gps,
    val name: String
)