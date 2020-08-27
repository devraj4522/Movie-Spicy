import React, { useState, useEffect } from 'react';
import { View, Text, Container } from 'native-base';
import CastHeader from '../../components/Cast/CastHeader';
import { requestCastCard, requestSinglePerson} from '../../api/api';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';
import CastBody from '../../components/Cast/CastBody';
import SingleRecomendation from '../../components/Single/SingleRecomendation/SingleRecomendation';

const CastScreen = ({navigation, route})=>{

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    var id = route.params.id;

    useEffect(() => {
        requestSinglePerson(id, setData, setIsLoading);
      }, [])

      if (!isLoading) {
        return(

            <Container>
                <ScrollView>
                <CastHeader navigation={navigation} data={data} />
                <View style={{margin:16}}>
                    <CastBody navigation={navigation} data={data}/>
                    <SingleRecomendation data={data.person.known_for} navigation={navigation} style={{ margin: 16 }} />
                    <View style={{height: 200}}></View>
                </View>
                </ScrollView>
            </Container>
        );
    } else {
        return(
            <ActivityIndicator size="large" color="#00ff00" />
        );
    }
}
export default CastScreen;