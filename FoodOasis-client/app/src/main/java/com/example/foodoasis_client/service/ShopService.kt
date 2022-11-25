package com.example.foodoasis_client.service

import com.example.foodoasis_client.model.shops.ShopsList
import retrofit2.Call
import retrofit2.http.GET

interface ShopService {
    @GET("shops")
    fun getShops(): Call<ShopsList>
}