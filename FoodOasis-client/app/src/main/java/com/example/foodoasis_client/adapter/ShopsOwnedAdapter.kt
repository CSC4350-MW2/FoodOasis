package com.example.foodoasis_client.adapter

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.foodoasis_client.R
import com.example.foodoasis_client.model.auth.User
import com.example.foodoasis_client.model.shops.Shop
import kotlinx.android.synthetic.main.shop_item_owned.view.*

class ShopsOwnedAdapter(
    private val shops: List<Shop>
) : RecyclerView.Adapter<ShopsAdapter.ShopsViewHolder>()  {

    class ShopsViewHolder(itemView: View): RecyclerView.ViewHolder(itemView){}

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ShopsAdapter.ShopsViewHolder {
        return ShopsAdapter.ShopsViewHolder(
            LayoutInflater.from(parent.context).inflate(
                R.layout.shop_item_owned,
                parent,
                false
            )
        )
    }

    override fun onBindViewHolder(holder: ShopsAdapter.ShopsViewHolder, position: Int) {
        val currentShop = shops[position]
        holder.itemView.apply {
            rvShopTitle.text = currentShop.name
            rvShopCategory.text = currentShop.category.name
            rvShopAddress.text = currentShop.address.street
        }
    }

    override fun getItemCount(): Int {
        return shops.size
    }


}