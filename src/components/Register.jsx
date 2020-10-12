import React, { useState, Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Picker,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Register = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [SelectedInput, setSelectedInput] = useState(-1);
  const inputProps = {
    onBlur: () => {
      setSelectedInput(-1);
    },
    style: styles.textInput,
  };

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
            onValueChange={(itemValue, itemIndex) => {
              setSelectedValue(itemValue);
            }}
          >
            <Picker.Item label="VN" value="vn" />
            <Picker.Item label="ENG" value="eng" />
          </Picker>
        </View>
      </View>

      <Text style={styles.title}>Đăng kí</Text>
      <Text style={{ fontSize: 14, lineHeight: 21, marginBottom: 10 }}>
        Đăng ký tài khoản để sử dụng dịch vụ của chúng tôi
      </Text>

      <TextInput
        {...inputProps}
        placeholder="Họ và tên"
        onFocus={() => setSelectedInput(0)}
        underlineColorAndroid={SelectedInput == 0 ? "#A5CE36" : "#D7D9E2"}
      />
      <TextInput
        {...inputProps}
        placeholder="Email"
        keyboardType={"email-address"}
        onFocus={() => setSelectedInput(1)}
        underlineColorAndroid={SelectedInput == 1 ? "#A5CE36" : "#D7D9E2"}
      />
      <TextInput
        {...inputProps}
        placeholder="Số điện thoại"
        keyboardType="numeric"
        onFocus={() => setSelectedInput(2)}
        underlineColorAndroid={SelectedInput == 2 ? "#A5CE36" : "#D7D9E2"}
      />
      <TextInput
        {...inputProps}
        placeholder="Mật khẩu"
        secureTextEntry={true}
        onFocus={() => setSelectedInput(3)}
        underlineColorAndroid={SelectedInput == 3 ? "#A5CE36" : "#D7D9E2"}
      />
      <TextInput
        {...inputProps}
        placeholder="Xác nhận mật khẩu"
        secureTextEntry={true}
        onFocus={() => setSelectedInput(4)}
        underlineColorAndroid={SelectedInput == 4 ? "#A5CE36" : "#D7D9E2"}
      />
      <View style={styles.loginButton}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("HELO");
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowLogin}>
        <Text
          style={{
            fontSize: 14,
            color: "#666666",
            marginRight: 8,
          }}
        >
          Bạn đã có tài khoản?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              color: "chartreuse",
            }}
          >
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    paddingLeft:'5%',
    paddingRight:'5%'
  },
  title: {
    fontSize: 30,
  },
  textInput: {
    width: "100%",
    height: 48,
    marginBottom: 10,
  },
  loginButton: {
    borderWidth: 1,
    borderColor: "#A5CE36",
    borderRadius: 5,
    backgroundColor: "#A5CE36",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  back: {
    flex: 1,
    alignItems: "flex-start",
  },
  backAndPicker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15%",
  },
  rowLogin: {
    marginTop: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});
