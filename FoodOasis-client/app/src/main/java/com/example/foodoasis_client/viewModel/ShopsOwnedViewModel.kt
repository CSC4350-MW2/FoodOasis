package com.example.foodoasis_client.viewModel

import android.content.Context
import android.widget.Toast
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.foodoasis_client.model.shops.Shop
import com.example.foodoasis_client.model.shops.ShopsList
import com.example.foodoasis_client.service.ShopService
import com.example.foodoasis_client.service.ShopServiceBuilder
import org.json.JSONObject
import retrofit2.Call
import retrofit2.Callback
import retrofit2.HttpException
import retrofit2.Response
import java.io.IOException

class ShopsOwnedViewModel: ViewModel() {
    var shopDataList = MutableLiveData<List<Shop>>()

    fun getShopsOwnedData(context: Context, id: String, token: String){
        val shopService = ShopServiceBuilder.buildService(ShopService::class.java)
        val requestCall = shopService.getOwnedShops(id, "Bearer $token")

        requestCall.enqueue(object: Callback<ShopsList> {
            override fun onResponse(call: Call<ShopsList>, response: Response<ShopsList>) {
                val body = response.body()!!
                if (response.isSuccessful) {
                    shopDataList.value = body.data.shops
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

    }
}