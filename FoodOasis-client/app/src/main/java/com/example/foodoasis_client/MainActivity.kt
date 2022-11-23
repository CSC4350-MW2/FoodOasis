package com.example.foodoasis_client

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val login = findViewById<Button>(R.id.loginButtonHome)
        val signup = findViewById<Button>(R.id.signupButtonHome)
        login.setOnClickListener { startActivity(Intent(this, LoginActivity::class.java)) }
        signup.setOnClickListener { startActivity(Intent(this, SignupActivity::class.java)) }
    }
}