package com.example.foodoasis_client

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.foodoasis_client.adapter.ShopsAdapter
import com.example.foodoasis_client.model.shops.Shop
import com.example.foodoasis_client.viewModel.ShopsViewModel
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    private lateinit var shopViewModel: ShopsViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        loadShops()

        val login = findViewById<Button>(R.id.loginButtonHome)
        val signup = findViewById<Button>(R.id.signupButtonHome)
        login.setOnClickListener { startActivity(Intent(this, LoginActivity::class.java)) }
        signup.setOnClickListener { startActivity(Intent(this, SignupActivity::class.java)) }
    }

    private fun loadShops(){
        shopViewModel = ViewModelProvider(this)[ShopsViewModel::class.java]
        shopViewModel.getShopsData(this)
        shopViewModel.shopDataList.observe(this) {
            initShopsAdapter(it)
        }
    }

    private fun initShopsAdapter(data:List<Shop>){
        rvShopItems.layoutManager = LinearLayoutManager(this)
        rvShopItems.adapter = ShopsAdapter(data)
    }
}