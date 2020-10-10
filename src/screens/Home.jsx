import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import HozizontalListDiscount from "../components/HozizontalListDiscount";
import HozizontalListPartner from "../components/HozizontalListPartner";
import HozizontalListProduct from "../components/HozizontalListProduct";

const data = [
  {
    key: "1",
    title: "Giảm 10% khi thanh toán qua cổng Vnpay",
    image: require("../../assets/IntroSlider/introSlider1.png"),
  },
  {
    key: "2",
    title: "Free 10 đơn hàng khi lần đầu sử dụng",
    image: require("../../assets/IntroSlider/introSlider2.png"),
  },
  {
    key: "3",
    title: "Free 10 đơn hàng khi lần đầu sử dụng",
    image: require("../../assets/IntroSlider/introSlider3.png"),
  },
  {
    key: "4",
    title: "Free 10 đơn hàng khi lần đầu sử dụng",
    image: require("../../assets/IntroSlider/introSlider4.png"),
  },
];
const data1 = [
  {
    key: "1",
    title: "Toco toco - Trà sữa trân trâu đài loan",
    image: require("../../assets/icon/toco.png"),
  },
  {
    key: "2",
    title: "Toco toco - Trà sữa trân trâu đài loan",
    image: require("../../assets/icon/toco.png"),
  },
  {
    key: "3",
    title: "Toco toco - Trà sữa trân trâu đài loan",
    image: require("../../assets/icon/toco.png"),
  },
  {
    key: "4",
    title: "Toco toco - Trà sữa trân trâu đài loan",
    image: require("../../assets/icon/toco.png"),
  },
];


export default Home = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        hidden={false}
      />
      <View style={styles.rowLocation}>
        <Image
          style={styles.imageLocation}
          source={require("../../assets/icon/location.png")}
        />
        <Text
          style={styles.textLocation}
          numberOfLines={1}
          ellipsizeMode="clip"
        >
          Số nhà 29 ngõ 42, Trần Bình, Cầu Giấy, Hà Nội
        </Text>
        <Image
          style={styles.imageNext}
          source={require("../../assets/icon/next.png")}
        />
        <Image
          style={styles.imageNotification}
          source={require("../../assets/icon/notification.png")}
        />
      </View>
      <View style={styles.Wrapsearch}>
        <Searchbar style={styles.searchbar} placeholder="Tìm kiếm thứ gì đó" />
        <View style={styles.wrapSetting}>
          <Image
            source={require("../../assets/icon/setting.png")}
            style={styles.settingIcon}
          />
        </View>
      </View>
      <Image
        style={styles.logo}
        source={require("../../assets/icon/moki.png")}
      />
      <View style={styles.rowCategory}>
        <ItemCategory
          color="#D5D5FF"
          text="Đồ ăn"
          icon={require("../../assets/icon/cup.png")}
        />
        <ItemCategory
          color="#FFF48A"
          text="Thực phẩm"
          icon={require("../../assets/icon/egg.png")}
        />
        <ItemCategory
          color="#D7D9E2"
          text="Tạp hóa"
          icon={require("../../assets/icon/grocecy.png")}
        />
        <ItemCategory
          color="#D2FAE6"
          text="Thực đơn tiệc"
          icon={require("../../assets/icon/menu.png")}
        />
      </View>
      <TitleCategory name="Deal cho ngày nắng nóng" />
      <HozizontalListDiscount data={data} />
      <TitleCategory name="Hà Nội ơi hôm nay ăn gì" />
      <HozizontalListProduct data={data} />
      <TitleCategory name="Đối tác nổi bật" />
      <HozizontalListPartner data={data1}/>
      <TitleCategory name="Đồ ăn" />
      <HozizontalListProduct data={data} />
      <TitleCategory name="Thực phẩm" />
      <HozizontalListProduct data={data} />
      <TitleCategory name="Tạp hóa" />
      <HozizontalListProduct data={data} />
      <TitleCategory name="Thực đơn tiệc" />
      <HozizontalListProduct data={data} />
      <TitleCategory name="Công thức nấu ăn" />
      <HozizontalListProduct data={data} />
    </ScrollView>
  );
};

ItemCategory = (props) => {
  return (
    <View style={styles.itemCategory}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: props.color,
          width: 70,
          height: 70,
        }}
      >
        <Image source={props.icon} style={styles.itemImageCategory} />
      </View>
      <Text style={styles.textCategory} numberOfLines={1}>
        {props.text}
      </Text>
    </View>
  );
};

TitleCategory = (props) => {
  return (
    <View style={styles.titleCategory}>
      <Text
        numberOfLines={1}
        style={{ color: "#333333", fontSize: 20, fontWeight: "500" }}
      >
        {props.name}
      </Text>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={{ color: "#A5CE36", fontSize: 16, marginLeft: 8 }}>
          Xem thêm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  rowLocation: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
  },
  logo: {
    width: "100%",
    height: 130,
    marginTop: 16,
    borderRadius: 5,
  },
  textLocation: { fontSize: 16, marginLeft: 10, flex: 1 },
  searchbar: { flex: 1, backgroundColor: "#E5E5E5" },
  rowCategory: {
    marginTop: 19,
    width: "100%",
    flexDirection: "row",
  },
  itemCategory: {
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  titleCategory: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  itemImageCategory: { resizeMode: "contain", width: 30, height: 30 },
  imageNotification: {
    width: 30,
    height: 30,
    marginLeft: 8,
    resizeMode: "contain",
  },
  imageLocation: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  textCategory: {
    marginTop: 7,
    fontSize: 14,
    color: "#666666",
    fontWeight: "500",
  },
  imageNext: {
    resizeMode: "contain",
    width: 20,
    height: 20,
  },
  settingIcon: {
    marginLeft: 8,
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  Wrapsearch: {
    marginTop: 12,
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  wrapSetting: {
    borderRadius: 5,
    marginLeft: 8,
    backgroundColor: "#F2F3F8",
    height: 50,
    width: 50,
    justifyContent: "center",
  },
});
