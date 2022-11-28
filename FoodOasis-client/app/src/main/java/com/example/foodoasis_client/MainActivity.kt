package com.example.foodoasis_client

import android.Manifest
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.location.Location
import android.location.LocationListener
import android.location.LocationManager
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.foodoasis_client.adapter.ShopsAdapter
import com.example.foodoasis_client.model.shops.Shop
import com.example.foodoasis_client.viewModel.ShopsViewModel
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity(), LocationListener {

    private lateinit var shopsViewModel: ShopsViewModel
    private lateinit var locationManager: LocationManager
    private val locationPermissionCode = 2

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        getLocation()

        loginButtonHome.setOnClickListener { startActivity(Intent(this, LoginActivity::class.java)) }
        signupButtonHome.setOnClickListener { startActivity(Intent(this, SignupActivity::class.java)) }
    }

    private fun loadShops(lat: Double, long: Double){
        shopsViewModel = ViewModelProvider(this)[ShopsViewModel::class.java]
        shopsViewModel.getShopsData(this, lat, long)
        shopsViewModel.shopDataList.observe(this) {
            initShopsAdapter(it)
        }
    }

    private fun initShopsAdapter(data:List<Shop>){
        rvShopItems.layoutManager = LinearLayoutManager(this)
        rvShopItems.adapter = ShopsAdapter(data)
    }

    private fun getLocation() {
        locationManager = getSystemService(Context.LOCATION_SERVICE) as LocationManager
        if ((ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED)) {
            ActivityCompat.requestPermissions(this, arrayOf(Manifest.permission.ACCESS_FINE_LOCATION), locationPermissionCode)
        }
        locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 5000, 5f, this)
    }

    override fun onLocationChanged(location: Location) {
        loadShops(location.latitude, location.longitude)
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == locationPermissionCode) {
            if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                Toast.makeText(this, "Permission Granted", Toast.LENGTH_SHORT).show()
            }
            else {
                Toast.makeText(this, "Permission Denied", Toast.LENGTH_SHORT).show()
            }
        }
    }

}