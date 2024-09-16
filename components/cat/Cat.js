import React, { useState } from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import FeedButton from './FeedButton';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 12,
    },
    text: {
        fontSize: 18,
        marginVertical: 12,
    },
    button: {
        margin: 4,
    },
});

const Cat = props => {
    const [isHungry, setIsHungry] = useState(true);
    const img = isHungry
        ? 'https://vetplus.vet.br/wp-content/uploads/2019/12/meme-da-mulher-gritando-com-o-gato-na-mesa-og-1080x630.jpg'
        : 'https://img.quizur.com/f/img648f15b5a9f479.34269050.jpg?lastEdited=1687098808';
    const message = isHungry ? 'faminto' : 'cheio';
    return (
        <View style={styles.container}>
            <Image source={{ uri: img }} style={styles.image} />
            <Text style={styles.text}>
                Eu sou {props.name}, estou {message} !
            </Text>
            {/* Usando o FeedButton */}
            <FeedButton isHungry={isHungry} setIsHungry={setIsHungry} />

            <Button
                onPress={() => setIsHungry(!isHungry)}
                title={isHungry ? 'Deixar sem fome' : 'Deixar com fome'}
            />
        </View>
    );
};

export default Cat;