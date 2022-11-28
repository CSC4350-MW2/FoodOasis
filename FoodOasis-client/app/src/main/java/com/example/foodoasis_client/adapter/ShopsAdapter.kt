package com.example.foodoasis_client.adapter

import android.content.Intent
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.foodoasis_client.R
import com.example.foodoasis_client.ShopActivity
import com.example.foodoasis_client.model.shops.Shop
import kotlinx.android.synthetic.main.shop_item.view.*

class ShopsAdapter(
    private val shops: List<Shop>
): RecyclerView.Adapter<ShopsAdapter.ShopsViewHolder>() {

    class ShopsViewHolder(itemView: View): RecyclerView.ViewHolder(itemView){
        var shop: Shop? = null
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ShopsViewHolder {
        return ShopsViewHolder(
            LayoutInflater.from(parent.context).inflate(
                R.layout.shop_item,
                parent,
                false
            )
        )
    }

    override fun onBindViewHolder(holder: ShopsViewHolder, position: Int) {
        val currentShop = shops[position]
        holder.itemView.apply {
            rvShopTitle.text = currentShop.name
            rvShopCategory.text = currentShop.category.name
            rvShopAddress.text = currentShop.address.street
        }

        holder.itemView.setOnClickListener { v ->
            holder.shop = currentShop
            val context = v.context
            val intent = Intent(context, ShopActivity::class.java)
            intent.putExtra(ShopActivity.ARG_ITEM_ID, holder.shop!!.id)

            context.startActivity(intent)
        }
    }

    override fun getItemCount(): Int {
        return shops.size
    }
}