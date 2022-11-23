package com.example.foodoasis_client

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import android.widget.Toast

class LoginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        val login = findViewById<Button>(R.id.loginButton)
        val email = findViewById<TextView>(R.id.editTextEmailAddress)
        val password = findViewById<TextView>(R.id.editTextPassword)
        login.setOnClickListener{
            if (email.text.isNullOrBlank() || password.text.isNullOrBlank()){
                Toast.makeText(this, "Please fill your credentials", Toast.LENGTH_SHORT).show()
            }
            else{
                Toast.makeText(this, "About to write logic", Toast.LENGTH_SHORT).show()
            }
        }
    }
}