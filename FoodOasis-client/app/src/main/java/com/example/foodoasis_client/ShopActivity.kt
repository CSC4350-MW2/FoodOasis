package com.example.foodoasis_client

import android.annotation.SuppressLint
import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.lifecycle.ViewModelProvider
import com.example.foodoasis_client.viewModel.ShopViewModel
import kotlinx.android.synthetic.main.activity_shop.*

class ShopActivity : AppCompatActivity() {

    private lateinit var shopViewModel: ShopViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_shop)
        goHomeDirections.setOnClickListener { startActivity(Intent(this, MainActivity::class.java)) }
        val bundle: Bundle? = intent.extras

        if (bundle?.containsKey(ARG_ITEM_ID)!!) {

            val id = intent.getStringExtra(ARG_ITEM_ID)!!
            loadShop(id)

        }
    }

    @SuppressLint("SetTextI18n")
    private fun loadShop(id: String){
        shopViewModel = ViewModelProvider(this)[ShopViewModel::class.java]
        shopViewModel.getShopData(this, id)
        shopViewModel.shopData.observe(this) {
            shopTitle.text = it.name
            shopCategory.setText(it.category.name)
            shopStreet.setText("${it.address.street} " +
                    "\n${it.address.city}, " +
                    "${it.address.state}, " +
                    "${it.address.zipCode}" +
                    "\n${it.address.country} ")
            shopContact.setText(it.contact.phone)
            val long = it.gps.longitude
            val lat = it.gps.latitude
            getShopDirections.setOnClickListener {
                getDirections(lat, long)
            }
        }
    }

    private fun getDirections(lat: Double, long: Double){
        // Create a Uri from an intent string. Use the result to create an Intent.
        val gmmIntentUri = Uri.parse("google.navigation:q=${lat},${long}")

        // Create an Intent from gmmIntentUri. Set the action to ACTION_VIEW
        val mapIntent = Intent(Intent.ACTION_VIEW, gmmIntentUri)
        // Make the Intent explicit by setting the Google Maps package
        mapIntent.setPackage("com.google.android.apps.maps")

        // Attempt to start an activity that can handle the Intent
        startActivity(mapIntent)
    }

    companion object {
        const val ARG_ITEM_ID = "item_id"
    }
}