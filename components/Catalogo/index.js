import estilo from './estilo';
import {View, FlatList, ScrollView } from 'react-native';
import Lista_vinhos from './dados';
import CardVinho from './CardVinho';

export default function Catalogo(props) {
  return (
    <View style={estilo.container}>      
      <ScrollView>
        <FlatList               
          data={Lista_vinhos}
          renderItem={({item})=>
            <CardVinho props={props} vinho={item}/>
          }
          keyExtractor={item => item.id}          
        />         
      </ScrollView>
    </View>
  );
}