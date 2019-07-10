import React from 'react';
import Language from './Language';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'english' };

  onLangChange = lang => {
    this.setState({ language: lang });
  };

  render() {
    return (
      <div className='App'>
        React Context Text {this.state.language}
        <button onClick={() => this.onLangChange('english')}>English</button>
        <button onClick={() => this.onLangChange('french')}>French</button>
        <ColorContext.Provider value='green'>
          <LanguageContext.Provider value={this.state.language}>
            <Language />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
