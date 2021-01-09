import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import treeImage from '../tree.jpg';
import seaImage from '../sea.jpg';
import forestImage from '../forest.png';
import nightImage from '../night.jpg';

const ThemedButton = styled.button`
    border: none;
    border-radius: 6px;
    display: inline-block;
    line-height: 40px;
    padding: 0 33px;  
    cursor: pointer;    
    transition: all 0.4s ease;
    font-size: 16px;
    outline: none;
`;

const ThemedCard = styled.div`
    border-radius: 10px;  
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    width: 820px;
    display: table;
    overflow: hidden;    
`;

const ThemedCardHeading = styled.div`
    display: table-cell;
    width: 50%;
    background-repeat: no-repeat; 
`;


function getImage(name) {
  var fotoUrl = treeImage;
  switch (name) {
    case 'Day':
      fotoUrl = treeImage;
      break;
    case 'Night':
      fotoUrl = nightImage;
      break;
    case 'Sea':
      fotoUrl = seaImage;
      break;
    case 'Forest':
      fotoUrl = forestImage;
      break;
    default:
      fotoUrl = treeImage;
      break;
  }
  return fotoUrl;
}

const CertificationForm = (props) => {
  var themeName = props.selectedTheme.name;
  var fotoUrl = getImage(themeName);
  

  return (
    <ThemedCard style={{
      backgroundColor: `${props.selectedTheme.colors.card.background}`, 
      color: `${props.selectedTheme.colors.card.text}`
    }}>
      <ThemedCardHeading style={{
        background: `url(${fotoUrl})`, 
        color: `${props.selectedTheme.colors.card.text}`
      }} 
      />


      <div className="card-body">
        <h1 className="title">Zertifizierung Generator</h1>
      
      
        <div className="input-group">
          <input className="input--style-3" type="text" placeholder="Vorname" name="firstname" />
        </div>
        
        <div className="input-group">
          <input className="input--style-3" type="text" placeholder="Nachname" name="lastname" />
        </div>

        <div className="input-group">
          <select name="course" className="input--style-4">
            <option className="select--style-1" value="App-Entwicklung mit Flutter und Dart">Entwickling mit Flutter und Dart</option>
            <option className="select--style-1" value="C#-Entwicklung Advanced Themen">C#-Entwicklung Advanced Themen</option>
            <option className="select--style-1" value="ReactJS für C#-Entwickler">ReactJS für C#-Developers</option>
          </select>
        </div>

        <div className="input-group">
          <input className="input--style-3" type="text" placeholder="Trainer" name="trainer" onChange={() => {}} />
        </div>            
        
        <div className="input-group">
          <input className="input--style-4" type="number" placeholder="Zertifikat-ID" name="receiptId" onChange={() => {}} />
        </div>

        <ThemedButton 
          onClick={() => {}}
          style={{
            backgroundColor: `${props.selectedTheme.colors.button.background}`, 
            color: `${props.selectedTheme.colors.button.text}`
          }}
        >Erstellen</ThemedButton>
      </div>
    </ThemedCard>
  );
}

export default CertificationForm;