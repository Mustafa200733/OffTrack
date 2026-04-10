import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Nav from "./Nav";

export default function Plus() {
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("Nederland");
  const [duration, setDuration] = useState("");
  const [entry, setEntry] = useState("");
  const [image, setImage] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    setSubmitMessage("Diary entry submitted!");
    Alert.alert(
      "Submitted",
      `Location: ${location}\nCountry: ${country}\nDuration: ${duration}`,
    );
    console.log({ location, country, duration, entry, image });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>📚 New diary entry</Text>
        </View>

        <Text style={styles.label}>Location of vacation</Text>
        <Picker
          selectedValue={country}
          onValueChange={(itemValue) => setCountry(itemValue)}
          style={styles.picker}
          mode="dropdown"
        >
          <Picker.Item label="Nederland" value="Nederland" />
          <Picker.Item label="Spanje" value="Spanje" />
          <Picker.Item label="Frankrijk" value="Frankrijk" />
          <Picker.Item label="Italië" value="Italië" />
        </Picker>

        <Text style={styles.label}>Banner image</Text>
        <Pressable style={styles.imagePicker} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text style={styles.plusIcon}>+</Text>
          )}
        </Pressable>

        <Text style={styles.label}>Duration</Text>
        <TextInput
          placeholder="Duration"
          value={duration}
          onChangeText={setDuration}
          style={styles.input}
        />

        <Text style={styles.label}>Diary entry</Text>
        <TextInput
          placeholder="Diary entry"
          value={entry}
          onChangeText={setEntry}
          style={[styles.input, styles.textArea]}
          multiline
          textAlignVertical="top"
        />
   <br />   <br />   <br />  
        <Pressable
          style={styles.submitButton}
          onPress={handleSubmit}
          android_ripple={{ color: "#333" }}
          hitSlop={10}
        >
          <Text style={styles.submitButtonText}>SUBMIT</Text>
      
        </Pressable>
        {submitMessage ? (
          <Text style={styles.submitMessage}>{submitMessage}</Text>
        ) : null}
      </View>
        <br />      <br />   <br />   <br />   <br />
      <Nav />

   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
    color: "#1c1c1e",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e5e5ea",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 20,
    backgroundColor: "#fafafa",
    fontSize: 16,
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: "#e5e5ea",
    borderRadius: 16,
    backgroundColor: "#fafafa",
    marginBottom: 20,
    justifyContent: "center",
  },
  textArea: {
    minHeight: 120,
  },
  imagePicker: {
    height: 180,
    borderWidth: 1,
    borderColor: "#e5e5ea",
    borderRadius: 16,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  plusIcon: {
    fontSize: 48,
    color: "#8e8e93",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  submitButton: {
    backgroundColor: "#000",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  submitMessage: {
    marginTop: 14,
    textAlign: "center",
    color: "#1c7cff",
    fontWeight: "700",
  },
});
