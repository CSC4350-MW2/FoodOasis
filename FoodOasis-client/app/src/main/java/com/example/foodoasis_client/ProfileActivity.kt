package com.example.foodoasis_client

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.foodoasis_client.adapter.ShopsAdapter
import com.example.foodoasis_client.model.shops.Shop
import com.example.foodoasis_client.viewModel.ShopsOwnedViewModel
import kotlinx.android.synthetic.main.activity_profile.*

class ProfileActivity : AppCompatActivity() {
    private lateinit var shopsOwnedViewModel: ShopsOwnedViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_profile)

        val bundle: Bundle? = intent.extras

        if (bundle?.containsKey(ARG_USERNAME)!! &&
            bundle.containsKey(ARG_USER_ID) &&
            bundle.containsKey(ARG_ACCESS_TOKEN)
        ){
            val username = intent.getStringExtra(ARG_USERNAME)!!
            val userId = intent.getStringExtra(ARG_USER_ID)!!
            val token = intent.getStringExtra(ARG_ACCESS_TOKEN)!!
            usernameInput.text = username
            loadShops(userId, token)

        }
    }

    private fun loadShops(userId: String, token: String){
        shopsOwnedViewModel = ViewModelProvider(this)[ShopsOwnedViewModel::class.java]
        shopsOwnedViewModel.getShopsOwnedData(this, userId, token)
        shopsOwnedViewModel.shopDataList.observe(this) {
            initShopsAdapter(it)
        }
    }

    private fun initShopsAdapter(data:List<Shop>){
        rvCreatedShopItem.layoutManager = LinearLayoutManager(this)
        rvCreatedShopItem.adapter = ShopsAdapter(data)
    }

    companion object {
        const val ARG_USERNAME = "username"
        const val ARG_USER_ID = "user_id"
        const val ARG_ACCESS_TOKEN = "access_token"
    }
}