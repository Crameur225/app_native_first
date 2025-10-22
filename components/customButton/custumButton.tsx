import React from "react";

import {View,Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from "react-native";

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    color?: string;
}

const CustomButton: React.FC<CustomButtonProps>=({
  title,
  onPress,
  disabled,
  color
}) =>{
    return(
        <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[styles.button, {backgroundColor: color}]}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        button: {
            padding: 15,
            borderRadius: 8,
            alignItems: 'center',
        },
        text:{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold'
        }
    }
)
export default CustomButton