import estilo from './estilo';
import {View, Text, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Detalhes(props) {
  let vinho  = props.route.params;
  console.log(vinho);
  const voltar = () => { props.navigation.goBack(); };
  return (
    <View style={estilo.container}>
      <View style={estilo.head}>
        <Ionicons name="arrow-back-outline" size={24} color="#555" onPress={voltar} />
        <Text style={estilo.head_title}>
          Detalhes
        </Text>
      </View>


      <View style={estilo.body}>
          <View style={estilo.slides}>
            <ScrollView horizontal={true}>
              {              
                vinho.fotos.map(foto=>(
                  <Image style={estilo.foto} source={require(`../../assets/img_vinhos/${foto}`)} />)
                )
              }
            </ScrollView>
          </View>
          
          <View style={estilo.info}>
            <Text style={estilo.titulo}>{vinho.nome} {vinho.nome}</Text>
            <Text style={estilo.descricao}>{`Descrição ${vinho.descricao}`}</Text>
            <Text style={estilo.titulo}>{`Preço ${vinho.preco}`}</Text>
          </View>
      </View>
    </View>
  );
}
