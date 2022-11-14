package com.example.foodoasis_client

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val loginbtn = findViewById<Button>(R.id.button)
        val email = findViewById<TextView>(R.id.editTextTextEmailAddress)
        val password = findViewById<TextView>(R.id.editTextTextPassword)
        loginbtn.setOnClickListener {
            if (email.text.isNullOrBlank() || password.text.isNullOrBlank()){
                Toast.makeText(this, "Please fill your credentials", Toast.LENGTH_SHORT).show()
            }
            else{
                Toast.makeText(this, "About to write logic", Toast.LENGTH_SHORT).show()
            }
        }
    }
}