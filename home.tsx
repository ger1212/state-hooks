import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F5F5F5" }}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero Section */}
      <View style={{ position: "relative" }}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/33344641/pexels-photo-33344641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
          }}
          style={{ width: "100%", height: 350 }}
        />
        
        {/* Overlay */}
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        />

        {/* Header Icons */}
        <View
          style={{
            position: "absolute",
            top: 50,
            left: 20,
            right: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
              borderRadius: 25,
              width: 45,
              height: 45,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>←</Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
              borderRadius: 20,
              paddingHorizontal: 15,
              paddingVertical: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, marginRight: 5 }}>☀️</Text>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>24°C</Text>
          </View>
        </View>

        {/* Bottom Content */}
        <View
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            right: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
            <Text style={{ color: "white", fontSize: 18, marginRight: 5 }}>⭐</Text>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>5.0</Text>
          </View>
          <Text style={{ color: "white", fontSize: 32, fontWeight: "700", marginBottom: 8 }}>
            Pulau Bali
          </Text>
          <Text style={{ color: "white", fontSize: 13, lineHeight: 18 }}>
            Destinasi wisata dunia yang terkenal karena keindahan alam, budaya Hindu yang kental, dan masyarakatnya yang ramah.
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={{ backgroundColor: "white", borderTopLeftRadius: 25, borderTopRightRadius: 25, marginTop: -20, padding: 20 }}>
        {/* Country Badge */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
          <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: "#E53935", marginRight: 8 }} />
          <Text style={{ fontSize: 14, color: "#666" }}>Indonesia</Text>
        </View>

        {/* Title */}
        <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 15 }}>
          Temukan Keindahan Pulau Bali
        </Text>

        {/* Review */}
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#F8F8F8", padding: 12, borderRadius: 12, marginBottom: 15 }}>
          <Image
            source={require("../assets/images/geryy.png")}
            style={{ width: 35, height: 35, borderRadius: 17.5, marginRight: 10 }}
          />
            <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, color: "#666", marginBottom: 2 }}> Oleh Gery</Text>
            <Text style={{ fontSize: 13, color: "#333" }}>
             Air lautnya jernih bett cok!! Snorkeling di Nusa Penida adalah sebuah pengalaman yang gabakal dilupakan. Bali is the best!
            </Text>
          </View>
        </View>

        {/* View All Button */}
        <TouchableOpacity
          style={{
            backgroundColor: "#F0F0F0",
            padding: 12,
            borderRadius: 25,
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 14, color: "#666" }}>Lihat Semua</Text>
        </TouchableOpacity>

        {/* Recommendation Section */}
        <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 15 }}>
          Rekomendasi Wisata di Pulau Bali
        </Text>

        {/* Trip Card */}
        <View
          style={{
            backgroundColor: "#1E293B",
            borderRadius: 20,
            overflow: "hidden",
            marginBottom: 20,
          }}
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={{ width: "100%", height: 140 }}
          />
          
          <View style={{ padding: 20 }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "700", marginBottom: 5 }}>
              Nusa Penida
            </Text>
            <Text style={{ color: "#94A3B8", fontSize: 13, marginBottom: 15 }}>
              Keajaiban Alam, Tak Tersentuh.
            </Text>

            {/* Quantity and Price */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{
                    backgroundColor: "#FF6B4A",
                    width: 35,
                    height: 35,
                    borderRadius: 17.5,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 15,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>+</Text>
                </TouchableOpacity>
                <Text style={{ color: "white", fontSize: 18, fontWeight: "600", marginRight: 15 }}>
                  {quantity}
                </Text>
                <TouchableOpacity
                  onPress={() => setQuantity(quantity + 1)}
                  style={{
                    backgroundColor: "#334155",
                    width: 35,
                    height: 35,
                    borderRadius: 17.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>-</Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "flex-end" }}>
                <Text style={{ color: "#94A3B8", fontSize: 12, marginBottom: 2 }}>Jumlah Total</Text>
                <Text style={{ color: "white", fontSize: 24, fontWeight: "700" }}>
                  Rp{(100 * quantity).toFixed(3)}
                </Text>
              </View>
            </View>

            {/* Book Button */}
            <TouchableOpacity
              style={{
                backgroundColor: "#FF6B4A",
                padding: 15,
                borderRadius: 25,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>Booking Sekarang</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}