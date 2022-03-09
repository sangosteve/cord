import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';

const CountryPicker = ({
  CountryCodes,
  modalVisible,
  setModalVisible,
  selectedDialCode,
  setSelectedDialCode,
  selectedCountry,
  setSelectedCountry,
}) => {
  const setCountry = country => {
    setSelectedCountry(country);
    // console.log(selectedDialCode);
    setModalVisible(false);
  };

  const [arrayHolder, setArrayHolder] = useState([]);
  const [text, setText] = useState('');
  const searchFunction = text => {
    const filteredData = text
      ? arrayHolder.filter(item => {
          const itemData = item?.name?.common?.toLowerCase();
          const textData = text.toLowerCase();
          return itemData.indexOf(textData) > -1;
        })
      : CountryCodes;
    setArrayHolder(filteredData);
    setText(text);
    // console.log(arrayHolder);
  };

  useEffect(() => {
    setArrayHolder(CountryCodes);
  }, []);
  return (
    <View>
      <Modal visible={modalVisible}>
        <View style={{flex: 1, padding: 10}}>
          <View style={styles.searchField}>
            <Ionicon name="close-outline" size={30} />
            <TextInput
              style={styles.searchInput}
              placeholder="Enter Country Name"
              onChangeText={text => searchFunction(text)}
              value={text}
            />
          </View>
          <FlatList
            data={arrayHolder}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => setCountry(item)}>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
                  <Image
                    source={{uri: item?.flag}}
                    style={{width: 50, height: 25, resizeMode: 'contain'}}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                    }}>{`${item?.name?.common.toUpperCase()}`}</Text>
                  <Text style={{fontSize: 18}}>{` (${item.callingCode})`}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

export default CountryPicker;

const styles = StyleSheet.create({
  searchField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchInput: {
    padding: 12,
    fontSize: 22,
  },
});
