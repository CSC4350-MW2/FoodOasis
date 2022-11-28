package com.example.foodoasis_client.viewModel

import android.content.Context
import android.widget.Toast
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.foodoasis_client.model.auth.AuthUser
import com.example.foodoasis_client.model.auth.Data
import com.example.foodoasis_client.model.auth.LoginCredentials
import com.example.foodoasis_client.service.AuthService
import com.example.foodoasis_client.service.AuthServiceBuilder
import org.json.JSONObject
import retrofit2.Call
import retrofit2.Callback
import retrofit2.HttpException
import retrofit2.Response
import java.io.IOException

class AuthViewModel: ViewModel() {
    var verifiedUser = MutableLiveData<Data?>()

    fun loginUser(context: Context, loginCredentials: LoginCredentials){
        val authService = AuthServiceBuilder.buildService(AuthService::class.java)
        val requestCall = authService.login(loginCredentials)

        requestCall.enqueue(object: Callback<AuthUser> {
            override fun onResponse(call: Call<AuthUser>, response: Response<AuthUser>) {
                val body = response.body()!!
                if (response.isSuccessful) {
                    verifiedUser.value = body.data
                    Toast.makeText(context, body.message, Toast.LENGTH_SHORT).show()
                } else {
                    try {
                        val jObjError = JSONObject(response.errorBody()!!.charStream().readText())
                        Toast.makeText(
                            context,
                            jObjError.getString("message"),
                            Toast.LENGTH_LONG
                        ).show()
                    } catch (e: Exception) {
                        Toast.makeText(context, e.message, Toast.LENGTH_LONG).show()
                    }
                }
            }


            override fun onFailure(call: Call<AuthUser>, t: Throwable) {
                val errorMessage = when (t) {
                    is IOException -> "No internet connection"
                    is HttpException -> "Something went wrong!"
                    else -> t.localizedMessage
                }
                Toast.makeText( context, errorMessage, Toast.LENGTH_SHORT).show()
            }
        })
    }
}
