package com.example.foodoasis_client.service

import com.example.foodoasis_client.model.auth.AuthUser
import com.example.foodoasis_client.model.auth.LoginCredentials
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.POST

interface AuthService {
    @POST("auth/login")
    fun login(@Body() newLoginCredentials: LoginCredentials): Call<AuthUser>

}