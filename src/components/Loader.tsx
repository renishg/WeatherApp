import React, {useEffect, FC, useRef} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import {colors} from '../theme/colors';

const Loader: FC = () => {
  const animation = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation.current, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const rotateInterpolate = animation.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyles = {
    transform: [{rotate: rotateInterpolate}],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.spinner, animatedStyles]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.black,
    borderTopColor: colors.white,
  },
});

export {Loader};
