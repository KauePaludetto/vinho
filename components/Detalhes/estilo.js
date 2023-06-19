import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head:{
        paddingVertical: 19,
        paddingStart:8,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    head_title:{
        fontSize: 18,
        fontWeight: '500',
        color: '#444',
        marginHorizontal: 7
    },
    body:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    slides:{
       flexDirection: 'row',
       width: 370,
       height: 350,
    },
    foto:{
        width: 450,
        height: 320,
        resizeMode: 'contain',
    backgroundColor: 'black'

    },
    info:{
        width: 350,
        textAlign: 'center'
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    descricao:{
        fontSize: 17,
        fontWeight: 'normal'
    }
});

export default styles;