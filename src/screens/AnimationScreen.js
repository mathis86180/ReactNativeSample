import React, { Component } from 'react';

import {Animated, Easing, StyleSheet} from 'react-native';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';

export default class AnimationScreen extends Component {

  constructor(props) {
      super(props)
      this.state = {
          topPosition: new Animated.Value(0)
      }
  }  

  componentDidMount() {
      Animated.timing(
          this.state.topPosition,
          {
              toValue: 100,
              duration: 3000,
              easing: Easing.linear,
          }
      ).start()
  }

  static navigationOptions = {
    title: 'Animation',
  };

  render() {
    return (
      <Animated.Image style={[styles.animation_image, {top: this.state.topPosition}]}
        source={require('../../assets/NY1.jpg')}/>
    );
  }
}

const styles = StyleSheet.create({
    animation_image: {
        width: 100,
        height: 100
    }
})