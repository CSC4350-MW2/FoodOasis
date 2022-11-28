package com.example.foodoasis_client

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.foodoasis_client.adapter.ShopsAdapter
import com.example.foodoasis_client.model.shops.Shop
import com.example.foodoasis_client.viewModel.ShopsViewModel
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    private lateinit var shopsViewModel: ShopsViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        loadShops()

        loginButtonHome.setOnClickListener { startActivity(Intent(this, LoginActivity::class.java)) }
        signupButtonHome.setOnClickListener { startActivity(Intent(this, SignupActivity::class.java)) }
    }

    private fun loadShops(){
        shopsViewModel = ViewModelProvider(this)[ShopsViewModel::class.java]
        shopsViewModel.getShopsData(this)
        shopsViewModel.shopDataList.observe(this) {
            initShopsAdapter(it)
        }
    }

    private fun initShopsAdapter(data:List<Shop>){
        rvShopItems.layoutManager = LinearLayoutManager(this)
        rvShopItems.adapter = ShopsAdapter(data)
    }
}