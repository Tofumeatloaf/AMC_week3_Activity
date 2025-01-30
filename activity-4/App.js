import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('Name:');
  const [age, onChangeAge] = React.useState('Age:');
  const [address, onChangeAddress] = React.useState('Address:');
  const [school, onChangeSchool] = React.useState('School:');
  const [course, onChangeCourse] = React.useState('Course:');
  const [email, onChangeEmail] = React.useState('Email:');
  const [contact, onChangeContact] = React.useState('Contact:');
  const [value, onChangeAboutme] = React.useState('About Me:');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.content}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://assets-global.website-files.com/6367f8198bef742a30d18cba/63b0a3af9be16400871397df_UHxUqbR6YXzwH2poZihPb5aAe_1_FVgjzOAMdPLU8qI.png'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder=""
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://lh3.googleusercontent.com/drive-storage/AJQWtBPGTBM5txGJqkKewUk7U-Mc_2w5ZMch0ysCWhOCUYcgVlUY0drSKMgWDqobcOqBVbqG8olh6b2tpsN88wYjiYNu9q3bKmYSvKofbVFiyk7BppI=h360'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={age}
            placeholder=""
            onChangeText={onChangeAge}
            value={age}
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://lh3.googleusercontent.com/drive-storage/AJQWtBN5VmPCu3xMacoTyOJHZQnIg7Ma_iHFa6qQWhBXMvcznjRBLyym3EoITdNn22vxoD0iEm_wm4EBh6p8Bdqr9XK3zj-VcAYGZZjAgQveai__EwI=w1897-h954'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
            placeholder=""
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://lh3.googleusercontent.com/drive-storage/AJQWtBNoSQObYSdYuaD5sz7-BdrQONah7oNeEiJadTR3TrJKuqPZeKEFQLR-3Hi7L6SVXTkkAX1yFmXSV7dd49jZtwVM3X3gUWax8zGzgoKuCLE1e5I=w1897-h954'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSchool}
            value={school}
            placeholder=""
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://lh3.googleusercontent.com/drive-storage/AJQWtBOmxJ4wqN-rjnZZYM6gn5BbNzC0o8LDucaDh315GvaKhZstyIHBNWw4xfKyZF48m0oiv0-hBE1JQ_8cnHuS_w7q7r68s9uqkG8PCcJeqcaoegQ=w1897-h954'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={course}
            placeholder=""
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://lh3.googleusercontent.com/drive-storage/AJQWtBM1iHCHvxq5pJDyx8VJwTP9xP3FouTr_R9ny8_HQWKrMUnncDAnRe3HydoURYTMy7O_7WJmhYCNsOFUgYWdV_YkCt7AbezEBl00sx5RcnUqgA4=w1897-h954'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder=""
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://th.bing.com/th/id/OIP.Qmiz0xS3SWvX6EgN3yGikwHaHa?rs=1&pid=ImgDetMain'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeContact}
            value={contact}
            placeholder=""
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://th.bing.com/th/id/R.793513ebf646f5a190f1c002b1cee72d?rik=CxyfRXPJoiPx8Q&riu=http%3a%2f%2fimg3.wikia.nocookie.net%2f__cb20150602102445%2fnaruto%2fimages%2fb%2fbb%2fItachi.png&ehk=yBVUUeUCwplfrNF9MArVNxNCCenvXFcVVSpm4x9TXts%3d&risl=&pid=ImgRaw&r=0'}
          />
          <TextInput
           editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={styles.textInput}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    width: "100%",
  },
  row: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});

export default TextInputExample;
