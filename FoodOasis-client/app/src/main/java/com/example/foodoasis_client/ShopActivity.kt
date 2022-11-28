package com.example.foodoasis_client

import android.annotation.SuppressLint
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
        }
    }

    companion object {
        const val ARG_ITEM_ID = "item_id"
    }
}