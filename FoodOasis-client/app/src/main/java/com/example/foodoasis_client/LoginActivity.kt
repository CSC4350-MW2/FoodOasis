package com.example.foodoasis_client

import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.foodoasis_client.service.AuthService
import com.example.foodoasis_client.service.ServiceBuilder
import com.example.foodoasis_client.model.auth.AuthUser
import com.example.foodoasis_client.model.auth.LoginCredentials
import kotlinx.android.synthetic.main.activity_login.*
import org.json.JSONObject
import retrofit2.Call
import retrofit2.Callback
import retrofit2.HttpException
import retrofit2.Response
import java.io.IOException

class LoginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        val context = this
        val newLoginCredentials = LoginCredentials()

        login_btn.setOnClickListener{

            if (email_address.text.isNullOrBlank() || password.text.isNullOrBlank()){
                Toast.makeText(context, "Please fill your credentials", Toast.LENGTH_SHORT).show()
            }
            else{
                newLoginCredentials.email = email_address.text.toString()
                newLoginCredentials.password = password.text.toString()

                val destinationService = ServiceBuilder.buildService(AuthService::class.java)
                val requestCall = destinationService.login(newLoginCredentials)

                requestCall.enqueue(object: Callback<AuthUser> {
                    override fun onResponse(call: Call<AuthUser>, response: Response<AuthUser>) {
                        val body = response.body()
                        if (response.isSuccessful) {
                            finish() // Move back to AuthUser
                            Toast.makeText(context, body?.data?.user?.id, Toast.LENGTH_SHORT).show()
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
    }
}