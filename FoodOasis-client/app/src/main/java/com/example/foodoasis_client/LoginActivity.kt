package com.example.foodoasis_client

import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModelProvider
import com.example.foodoasis_client.model.auth.LoginCredentials
import com.example.foodoasis_client.viewModel.AuthViewModel
import kotlinx.android.synthetic.main.activity_login.*

class LoginActivity : AppCompatActivity() {

    private lateinit var authViewModel: AuthViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        val newLoginCredentials = LoginCredentials()

        login_btn.setOnClickListener{
            if (email_address.text.isNullOrBlank() || password.text.isNullOrBlank()){
                Toast.makeText(this, "Please fill your credentials", Toast.LENGTH_SHORT).show()
            }
            else{
                newLoginCredentials.email = email_address.text.toString()
                newLoginCredentials.password = password.text.toString()
                loginUser(newLoginCredentials)
            }
        }
    }

    private fun loginUser(newLoginCredentials: LoginCredentials){
        authViewModel = ViewModelProvider(this)[AuthViewModel::class.java]
        authViewModel.loginUser(this, newLoginCredentials)
        authViewModel.verifiedUser.observe(this) {

        }
    }
}