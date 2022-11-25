package com.example.foodoasis_client.adapter

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.foodoasis_client.R
import com.example.foodoasis_client.model.shops.Shop
import kotlinx.android.synthetic.main.shop_item.view.*

class ShopsAdapter(
    private val shops: List<Shop>
): RecyclerView.Adapter<ShopsAdapter.ShopViewHolder>() {

    class ShopViewHolder(itemView: View): RecyclerView.ViewHolder(itemView)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ShopViewHolder {
        return ShopViewHolder(
            LayoutInflater.from(parent.context).inflate(
                R.layout.shop_item,
                parent,
                false
            )
        )
    }

    override fun onBindViewHolder(holder: ShopViewHolder, position: Int) {
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