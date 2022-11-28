package com.example.foodoasis_client.service

import com.example.foodoasis_client.model.shop.Shop
import com.example.foodoasis_client.model.shop.ShopResponse
import com.example.foodoasis_client.model.shops.ShopsList
import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Path

interface ShopService {
    @GET("shops")
    fun getShops(): Call<ShopsList>

    @GET("shops/{id}")
    fun getShop(@Path("id") id: String): Call<ShopResponse>
}