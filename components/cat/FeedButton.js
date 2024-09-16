import { Button } from "react-native";


// Componente FeedButton
const FeedButton = ({ isHungry, setIsHungry }) => {
    return (
      <Button
        onPress={() => setIsHungry(false)}
        disabled={!isHungry}
        title={isHungry ? 'Quero Cumeee, me alimente!' : 'Valeu Grandioso!'}
      />
    );
  };

export default FeedButton;