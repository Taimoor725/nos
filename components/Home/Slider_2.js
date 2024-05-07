"use client"
import { useState } from 'react';
import styled from 'styled-components';

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  min-width: 600px;
  max-width: 900px;
  width: calc(100% - 100px);
  height: 400px;
`;

const Option = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 60px;
  margin: 10px;
  background: ${props => props.optionBackground || '#E6E9ED'};
  background-size: auto 120%;
  background-position: center;
  cursor: pointer;
  transition: .5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  border-radius: ${props => props.active ? '40px' : '30px'};

  &:hover {
    flex-grow: ${props => props.active ? '10000' : '1'};
  }
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  transition: .5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  box-shadow: inset 0 -120px 0 -120px black, inset 0 -120px 0 -100px black;
`;

const Label = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  height: 40px;
  transition: .5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: white;
  color: ${props => props.defaultBackground};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  color: white;
  white-space: pre;

  > div {
    position: relative;
    transition: .5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity .5s ease-out;
  }

  .main {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .sub {
    transition-delay: .1s;
  }
`;

export default function OptionsComponent() {
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (index) => {
    setActiveOption(index);
  };

  const optionDefaultColours = ['#ED5565', '#FC6E51', '#FFCE54', '#2ECC71', '#5D9CEC', '#AC92EC'];

  return (
    <>
      <OptionContainer className="options">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Option
            key={index}
            className={`option ${index === activeOption ? 'active' : ''}`}
            optionBackground={`url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg)`}
            active={index === activeOption}
            onClick={() => handleOptionClick(index)}
          >
            <Shadow className="shadow" />
            <Label className="label">
              <Icon className="icon" defaultBackground={optionDefaultColours[index]}>
                <i className="fas fa-walking"></i>
              </Icon>
              <Info className="info">
                <div className="main">Blonkisoaz</div>
                <div className="sub">Omuke trughte a otufta</div>
              </Info>
            </Label>
          </Option>
        ))}
      </OptionContainer>
      <a href="http://victorofvalencia-blog.tumblr.com" target="_blank" className="credit">Photos from Victor of Valencia on tumblr</a>
    </>
  );
}
