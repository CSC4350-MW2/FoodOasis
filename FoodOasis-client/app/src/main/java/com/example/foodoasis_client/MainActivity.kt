package com.example.foodoasis_client

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.foodoasis_client.adapter.ShopsAdapter
import com.example.foodoasis_client.model.auth.AuthUser
import com.example.foodoasis_client.model.shops.ShopsList
import com.example.foodoasis_client.service.AuthService
import com.example.foodoasis_client.service.ServiceBuilder
import com.example.foodoasis_client.service.ShopService
import kotlinx.android.synthetic.main.activity_main.*
import org.json.JSONObject
import retrofit2.Call
import retrofit2.Callback
import retrofit2.HttpException
import retrofit2.Response
import java.io.IOException

class MainActivity : AppCompatActivity() {

    private lateinit var shopsAdapter: ShopsAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val context = this

        val destinationService = ServiceBuilder.buildService(ShopService::class.java)
        val requestCall = destinationService.getShops()

        requestCall.enqueue(object: Callback<ShopsList> {
            override fun onResponse(call: Call<ShopsList>, response: Response<ShopsList>) {
                val body = response.body()!!
                if (response.isSuccessful) {
                    shopsAdapter = ShopsAdapter(body.data.shops)

                    rvShopItems.adapter = shopsAdapter
                    rvShopItems.layoutManager = LinearLayoutManager(context)

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


            override fun onFailure(call: Call<ShopsList>, t: Throwable) {
                val errorMessage = when (t) {
                    is IOException -> "No internet connection"
                    is HttpException -> "Something went wrong!"
                    else -> t.localizedMessage
                }
                Toast.makeText(context, errorMessage, Toast.LENGTH_SHORT).show()
            }
        })

        val login = findViewById<Button>(R.id.loginButtonHome)
        val signup = findViewById<Button>(R.id.signupButtonHome)
        login.setOnClickListener { startActivity(Intent(this, LoginActivity::class.java)) }
        signup.setOnClickListener { startActivity(Intent(this, SignupActivity::class.java)) }
    }
}