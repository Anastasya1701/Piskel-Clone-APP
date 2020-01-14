import SwitchColorProvider from './servises/switchColorProvider';
import colorStateRef from './state/colorState';


describe('Test class SwitchColorProvider', () => {
  describe('Test of the correct switchColor method execution with string:', () => {
    it('check swap color in colorStateRef.currentColor if string is coming', () => {
      document.body.innerHTML = '<div class="tool-bar__color--current">' + '</div>' + '<div class="tool-bar__color--previous">' + '</div>';
      SwitchColorProvider.switchColor('#080080');
      expect(colorStateRef.currentColor).toEqual('#080080');
    });
    it('check swap color in colorStateRef.previousColor if string is coming', () => {
      SwitchColorProvider.switchColor('#ffff00');
      expect(colorStateRef.previousColor).toEqual('#080080');
    });
    it('check correct setting color to DOM element of previous color', () => {
      const prev = document.querySelector('.tool-bar__color--previous');

      SwitchColorProvider.switchColor('#e0e0e0');
      expect(prev.style.background).toEqual('rgb(255, 255, 0)');
    });
    it('check correct setting color to DOM element of current color', () => {
      const curr = document.querySelector('.tool-bar__color--current');

      SwitchColorProvider.switchColor('#dc143c');
      expect(curr.style.background).toEqual('rgb(220, 20, 60)');
    });
  });
  describe('Test of the correct switchColor method execution with event:', () => {
    it('check swap color in colorStateRef.currentColor if string is coming', () => {
      const event = {
        target: {
          value: '#808000',
        },
      };
      SwitchColorProvider.switchColor(event);
      expect(colorStateRef.currentColor).toEqual('#808000');
    });
    it('check swap color in colorStateRef.previousColor if string is coming', () => {
      const event = {
        target: {
          value: '#00ff00',
        },
      };
      SwitchColorProvider.switchColor(event);
      expect(colorStateRef.previousColor).toEqual('#808000');
    });
    it('check correct setting color to DOM element of previous color', () => {
      const event = {
        target: {
          value: '#00ff00',
        },
      };
      const prev = document.querySelector('.tool-bar__color--previous');

      SwitchColorProvider.switchColor(event);
      expect(prev.style.background).toEqual('rgb(128, 128, 0)');
    });
    it('check correct setting color to DOM element of previous color', () => {
      const event = {
        target: {
          value: '#dc143c',
        },
      };
      const curr = document.querySelector('.tool-bar__color--current');

      SwitchColorProvider.switchColor(event);
      expect(curr.style.background).toEqual('rgb(220, 20, 60)');
    });
  });
});
