import React, { useState, useEffect } from 'react';
import Logo from '../images/logo.svg';
import Background from '../images/background.png';
import Line from '../images/devider.png';
import Elipse from '../images/ellipse.png';
import Avatar from '../images/avatar.png';
import {
  CardWrapper,
  LogoGoit,
  BackgroundImage,
  CardDivider,
  AvatarWrapper,
  AvatarImage,
  TweetsCountText,
  FollowersCountText,
  FollowButton,
} from './TweetCard.styled';

export const TweetCard = () => {
  const defaultButtonColor = '#ebd8ff';
  const activeButtonColor = '#5cd3a8';

  const [buttonColor, setButtonColor] = useState(
    localStorage.getItem('buttonColor') || defaultButtonColor
  );
  const [buttonText, setButtonText] = useState(
    localStorage.getItem('buttonText') || 'Follow'
  );
  const [followerCount, setFollowerCount] = useState(
    parseInt(localStorage.getItem('followerCount')) || 100500
  );

  useEffect(() => {
    const savedColor = localStorage.getItem('buttonColor');
    const savedText = localStorage.getItem('buttonText');
    if (savedColor) {
      setButtonColor(savedColor);
    }
    if (savedText) {
      setButtonText(savedText);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('buttonColor', buttonColor);
    localStorage.setItem('buttonText', buttonText);
    localStorage.setItem('followerCount', followerCount.toString());
  }, [buttonColor, buttonText, followerCount]);

  const handleButtonClick = () => {
    if (buttonColor === defaultButtonColor) {
      setButtonColor(activeButtonColor);
      setButtonText('Following');
      setFollowerCount(followerCount + 1);
    } else {
      setButtonColor(defaultButtonColor);
      setButtonText('Follow');
      setFollowerCount(followerCount - 1);
    }
  };

  return (
    <CardWrapper>
      <LogoGoit src={Logo} alt="logo" />
      <BackgroundImage src={Background} alt="background" />
      <CardDivider src={Line} alt="card divider" />
      <AvatarWrapper src={Elipse} alt="logo wrapper" />
      <AvatarImage src={Avatar} alt="avatar" />
      <TweetsCountText>777 tweets</TweetsCountText>
      <FollowersCountText>
        {followerCount.toLocaleString('en-US')} Followers
      </FollowersCountText>
      <FollowButton
        style={{ backgroundColor: buttonColor }}
        onClick={handleButtonClick}
      >
        {buttonText}
      </FollowButton>
    </CardWrapper>
  );
};
