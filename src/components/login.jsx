import React, { useState } from "react";
import {
  View,
  Picker,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <View style={styles.backAndPicker}>
        <View style={styles.back}>
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </View>

        <View style={styles.switchLang}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: "5%", width: "50%" }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="VN" value="vn" />
            <Picker.Item label="ENG" value="eng" />
          </Picker>
        </View>
      </View>

      <View style={styles.title}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: "2%" }}>
          Đăng nhập
        </Text>
        <Text style={{ fontSize: 12 }}>
          Sử dụng tài khoản của bạn để đăng nhập
        </Text>
      </View>

      <View style={styles.login}>
        <View style={styles.txtInputGroup}>
          <View style={styles.username}>
            <TextInput
              style={styles.loginInput}
              textContentType={"username"}
              keyboardType={"email-address"}
              placeholder={"Tài khoản"}              
            ></TextInput>
          </View>
          <View style={styles.password}>
            <TextInput
              style={styles.loginInput}
              secureTextEntry={true}
              placeholder={"Mật khẩu"}
            ></TextInput>
          </View>
        </View>

        <View style={styles.forgetPassword}>
          <TouchableOpacity>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", textAlign: "right" }}
            >
              Quên mật khẩu
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginButton}>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "15%",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "#666666",
            }}
          >
            Hoặc đăng nhập bằng tài khoản mạng xã hội
          </Text>
        </View>

        <View style={styles.socialNetworkLogin}>
          <View>
            <TouchableOpacity style={styles.socialNetworkButton}>
              <Image
                style={styles.socialNetworkIcon}
                source={{
                  uri:
                    "https://www.iconfinder.com/data/icons/social-media-2210/24/Google-512.png",
                }}
              />
              <Text style={{ fontSize: 14 }}>Google</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.socialNetworkButton}>
              <Image
                style={styles.socialNetworkIcon}
                source={{
                  uri:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/600px-Facebook-icon-1.png",
                }}
              />
              <Text style={{ fontSize: 14 }}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.register}>
        <Text
          style={{
            fontSize: 14,
            color: "#666666",
            marginRight: "2%",
          }}
        >
          Nếu bạn chưa có tài khoản?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              color: "#A5CE36",
            }}
          >
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingVertical: '15%'
  },
  backAndPicker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    flex: 1,
    alignItems: "flex-start",
  },
  switchLang: {
    alignItems: "flex-end",
  },
  title: {
    flex: 0.2,
    width: "100%",
    justifyContent: "center",
    marginTop: "20%",
  },
  txtInputGroup:{
    height: '25%',
  },
  login: {
    width: "100%",
    marginTop: "20%",
  },
  loginInput: {
    width: "100%",
    height: "65%",
    borderBottomWidth: 1,
    borderBottomColor: "#D7D9E2",
  },
  forgetPassword: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: "13%",
  },
  loginButton: {
    borderWidth: 1,
    borderColor: "#A5CE36",
    borderRadius: 5,
    backgroundColor: "#A5CE36",
    height: "10%",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: '15%',
  },
  socialNetworkLogin: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: "20%",
    paddingLeft: '9%', 
    paddingRight: '27%',
  },
  socialNetworkIcon: {
    height: "67%",
    width: "20%",
  },
  socialNetworkButton: {
    borderWidth: 1,
    borderColor: "#D7D9E2",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: 'space-around',
    height: "40%",
    width: '70%',
  },
  register: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
  },
});

export default Login;