import { StyleSheet, Text, View, Image } from 'react-native';

import { Card } from 'react-native-paper';

import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.container__title}>Welcome 欢迎!</Text>
       <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1661963081475-dbd48fe1d812?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVzdGl2YWwlMjBkYXMlMjBsYW50ZXJuYxsMjBjaGluZXNhc3xlbnwwfHwwfHx8MA%3D%3D' }} style={styles.container__img} />
       <Text style={styles.container__str}>DesireLights</Text>
       <Text style={styles.container__p}>您的渴望将提升至新的高度</Text>
       
       <View style={styles.footer}>
         <Text style={styles.footer__txt}>Chinese lanterns 2026 o Moura Kaique</Text>
       </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#380404',
    padding: 8,
  },
  container__title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffb703',
    marginBottom: 16,
    textAlign: 'center',
  },
  container__img: {
    height: 200,
    width: 200,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#d90429',
    marginBottom: 16,
  },
  container__str: {
    fontSize: 22,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },
  container__p: {
    fontSize: 14,
    color: '#ffb703',
    textAlign: 'center',
    marginBottom: 24,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 16,
    width: '100%',
    height: 25
  },
  footer__txt: {
    marginLeft: '5%',
    fontSize: 12,
    color: 'white',
    fontStyle: 'italic',
  },
});