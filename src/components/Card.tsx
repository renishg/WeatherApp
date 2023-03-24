import React, {FC, PropsWithChildren} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../theme/colors';

type CardProps = {
  styles?: ViewStyle;
};

const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  styles: propStyles,
}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, propStyles])}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    borderColor: colors.white,
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginVertical: 8,
    backgroundColor: colors.transparentBackground,
  },
});

export {Card};
