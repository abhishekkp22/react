import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Language extends React.Component {
  //static contextType = LanguageContext;

  onLnag(value) {
    return value === 'english'
      ? 'This is english content'
      : 'this is a french content';
  }
  render() {
    return (
      <div>
        {/* <h1>Language {this.context}</h1> */}
        <ColorContext.Consumer>
          {color => (
            <h1 style={{ color: color }}>
              <LanguageContext.Consumer>
                {lang => this.onLnag(lang)}
              </LanguageContext.Consumer>
            </h1>
          )}
        </ColorContext.Consumer>
      </div>
    );
  }
}

export default Language;
