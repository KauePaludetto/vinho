import { StyleSheet, ImageBackground, Text} from 'react-native';

export default function CardVinho({props, vinho}) {
  const irParaDetalhes = () => { props.navigation.navigate("Detalhes", vinho); };
  let img = vinho.fotos[0];
  return (
      <ImageBackground 
        style={estilo.container}
        source={require(`../../assets/img_vinhos/${img}`)}
        resizeMode='contain'
        imageStyle={{borderRadius: 10}}
        onTouchEnd={irParaDetalhes}
      >
        <Text style={estilo.nome}>{vinho.nome} {vinho.nome}</Text>
        {/* <Text style={estilo.descrico}>{`Descrição ${vinho.descrico}`}</Text> */}
      </ImageBackground>
  );
}

const estilo = StyleSheet.create({
  container: {
    width: 375,
    height: 300,
    justifyContent: 'space-between',
    marginBottom: 15,
    
  },
  nome:{
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#400303',
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    borderTopLeftRadius: 10 ,
    borderTopRightRadius: 10 
    
  },
  descrico:{
    padding: 5,
    backgroundColor: '#0000009e',
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    borderBottomLeftRadius: 10 ,
    borderBottomRightRadius: 10 ,
    backgroundColor: 'black',
  },

});
