export type ColorTheme = {
  background: string;
  surface: string; 
  textPrimary: string;
  textSecondary: string;
  border: string;
  primary: string;
  accent: string;
};

export class JetBlueTheme {
  private static readonly TRUE_BLUE = '#003876';
  private static readonly JETBLUE_ORANGE = '#FF8200';
  private static readonly MINT_GREEN = '#00A3A1';

  static readonly Light: ColorTheme = {
    background: '#F4F7F9',
    surface: '#FFFFFF',
    textPrimary: '#00205B', 
    textSecondary: '#546B81',
    border: '#D1DCE5',
    primary: this.TRUE_BLUE,
    accent: this.JETBLUE_ORANGE,
  };

  static readonly Dark: ColorTheme = {
    background: '#001021', 
    surface: '#001E3C',    
    textPrimary: '#FFFFFF',
    textSecondary: '#A0B4C8',
    border: '#003366',
    primary: '#1E90FF',  
    accent: this.JETBLUE_ORANGE,
  };
}