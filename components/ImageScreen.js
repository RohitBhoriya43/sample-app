import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  Logo: {
    width: 50,
    height: 50,
  },
});

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={{
          uri: 'https://www.google.com/search?q=image&tbm=isch&source=iu&ictx=1&vet=1&fir=ItY9cBsepnqjwM%252C0JWe7yDOKrVFAM%252C_%253Bn5hAWsQ-sgKo_M%252C-UStXW0dQEx4SM%252C_%253BDH7p1w2o_fIU8M%252CBa_eiczVaD9-zM%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253BxE4uU8uoFN00aM%252CpEU77tdqT8sGCM%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253BqXynBYpZpHkhWM%252C4O2GvGuD-Cf09M%252C_%253Bl5RllJHFLw5NyM%252CibTdn4unYxO9nM%252C_%253BbDjlNH-20Ukm8M%252CG9GbNX6HcZ2O_M%252C_%253B0DzWhtJoQ1KWgM%252CcIQ7wXCEtJiOWM%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_&usg=AI4_-kS9OLoaubhjeOLT92owGKPsNuAg6g&sa=X&ved=2ahUKEwjTs77gh9z2AhUwTWwGHROdBsoQ9QF6BAgaEAE&cshid=1648032615744291#imgrc=ItY9cBsepnqjwM',
        }}
      />
    </View>
  );
};

export default ImageScreen;
