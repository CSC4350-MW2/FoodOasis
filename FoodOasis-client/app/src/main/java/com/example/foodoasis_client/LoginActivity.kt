package com.example.foodoasis_client

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import com.example.foodoasis_client.api.AuthService
import com.example.foodoasis_client.api.ServiceBuilder
import com.example.foodoasis_client.model.auth.AuthUser
import com.example.foodoasis_client.model.auth.LoginCredentials
import kotlinx.android.synthetic.main.activity_login.*
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

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
                            Toast.makeText(context, body?.message, Toast.LENGTH_SHORT).show()
                        } else {
                            Toast.makeText(context, body?.message, Toast.LENGTH_SHORT).show()
                        }
                    }

                    override fun onFailure(call: Call<AuthUser>, t: Throwable) {
                        Toast.makeText( context, t.message, Toast.LENGTH_SHORT).show()
                    }
                })
            }
        }
    }
}