package com.example.foodoasis_client.service

import com.example.foodoasis_client.model.shop.Shop
import com.example.foodoasis_client.model.shop.ShopResponse
import com.example.foodoasis_client.model.shops.ShopsList
import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Header
import retrofit2.http.Path
import retrofit2.http.Query

interface ShopService {
    @GET("shops")
    fun getShops(@Query("lat") lat: Double, @Query("long") long: Double): Call<ShopsList>

    @GET("shops/user/{id}")
    fun getOwnedShops(@Path("id") id: String, @Header("Authorization") header: String): Call<ShopsList>

    @GET("shops/{id}")
    fun getShop(@Path("id") id: String): Call<ShopResponse>
}