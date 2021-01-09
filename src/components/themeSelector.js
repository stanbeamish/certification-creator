/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import { useTheme } from '../theme/useTheme';
import { readFromLocalStorage } from '../utils/storage';

const ThemedButton = styled.button`
    border: 0;
    display: inline-block;
    padding: 12px 6px;
    font-size: 16px;
    border-radius: 6px;
    margin-top: 8px;
    width: 100%;
    cursor: pointer;
`;

const Wrapper = styled.li`
    padding: 4px;
    text-align: center;
    border-radius: 6px;
    border: 1px solid #d3d3d3;
    list-style: none;    
`;

const Container = styled.ul`    
    display: grid;
    background: #d3d3d3;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 3rem;
    padding: 10px;
`;

const Header = styled.h2`
    display: flex;
    justify-content: space-around;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const themesFromStore = readFromLocalStorage('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const {setMode} = useTheme();

    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);

    useEffect(() => {
        props.newTheme &&
            updateThemeCard(props.newTheme);
    }, [props.newTheme])

    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = {...data, [key]:theme[key]};
        setData(updated);
    }

    const ThemeCard = props => {
        return(
            <Wrapper style={{ 
                    color: `${data[_.camelCase(props.theme.name)].colors.text}`, 
                    fontFamily: `${data[_.camelCase(props.theme.name)].font}`}}>                    
                <ThemedButton onClick={ (theme) => themeSwitcher(props.theme) }
                    style={{backgroundColor: `${data[_.camelCase(props.theme.name)].colors.button.background}`, 
                    color: `${data[_.camelCase(props.theme.name)].colors.button.text}`,
                    fontFamily: `${data[_.camelCase(props.theme.name)].font}`}}>
                    {props.theme.name}
                </ThemedButton>
            </Wrapper>
        )
    }

    return (
        <div>
            <Header>Wählen Sie ein Theme</Header>
            <Container>
            {
                themes.length > 0 && 
                    themes.map(theme =>(
                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                    ))
            }
            </Container>
        </div>
    )
}