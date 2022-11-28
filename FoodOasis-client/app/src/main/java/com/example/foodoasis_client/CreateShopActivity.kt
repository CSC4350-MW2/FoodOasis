package com.example.foodoasis_client

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_create_shop.*

class CreateShopActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create_shop)

        homeButton.setOnClickListener { startActivity(Intent(this, MainActivity::class.java)) }
    }
}